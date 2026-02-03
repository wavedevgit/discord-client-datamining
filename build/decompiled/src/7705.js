// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0, arg1, arg2() {
        _fun61848: for (var _fun61848_ip = 0;;) switch (_fun61848_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var3 = arg2;
                var0 = 0;
                var4 = var3;
                if (!(var4 < var0)) {
                    _fun61848_ip = 25;
                    continue _fun61848
                }
            case 18:
                var0 = 1;
                var4 = var3 + var0;
            case 25:
                var0 = 1;
                var3 = var4;
                if (!(var3 > var0)) {
                    _fun61848_ip = 39;
                    continue _fun61848
                }
            case 35:
                var3 = var4 - var0;
            case 39:
                var0 = 0.16666666666666666;
                if (!(!(var3 < var0))) {
                    _fun61848_ip = 115;
                    continue _fun61848
                }
            case 53:
                var4 = 0.5;
                var0 = var1;
                if (!(!(var3 < var4))) {
                    _fun61848_ip = 113;
                    continue _fun61848
                }
            case 70:
                var5 = 0.6666666666666666;
                var4 = var2;
                if (!(var3 < var5)) {
                    _fun61848_ip = 110;
                    continue _fun61848
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
                _fun61848_ip = 134;
                continue _fun61848;
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
    var1 = function arg0, arg1, arg2() {
        _fun61849: for (var _fun61849_ip = 0;;) switch (_fun61849_ip) {
            case 0:
                var7 = arg0;
                var2 = arg1;
                var1 = arg2;
                var0 = 0.5;
                if (!(!(var1 < var0))) {
                    _fun61849_ip = 37;
                    continue _fun61849
                }
            case 23:
                var3 = var1 + var2;
                var0 = var1 * var2;
                var6 = var3 - var0;
                _fun61849_ip = 48;
                continue _fun61849;
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
    var1 = function() {
        _fun61850: for (var _fun61850_ip = 0;;) switch (_fun61850_ip) {
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
                    _fun61850_ip = 60;
                    continue _fun61850
                }
            case 45:
                var4 = arguments[var0];
                var2[var0] = var4;
                var0 = var0 + 1;
                if (var0 < var1) {
                    _fun61850_ip = 45;
                    continue _fun61850
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
    var _closure1_slot3 = var1;
    var1 = function() {
        _fun61851: for (var _fun61851_ip = 0;;) switch (_fun61851_ip) {
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
                    _fun61851_ip = 62;
                    continue _fun61851
                }
            case 47:
                var5 = arguments[var0];
                var1[var0] = var5;
                var0 = var0 + 1;
                if (var0 < var2) {
                    _fun61851_ip = 47;
                    continue _fun61851
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
    var _closure1_slot4 = var1;
    var1 = function() {
        _fun61852: for (var _fun61852_ip = 0;;) switch (_fun61852_ip) {
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
                    _fun61852_ip = 60;
                    continue _fun61852
                }
            case 45:
                var4 = arguments[var0];
                var2[var0] = var4;
                var0 = var0 + 1;
                if (var0 < var1) {
                    _fun61852_ip = 45;
                    continue _fun61852
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
    var _closure1_slot5 = var1;
    var1 = function arg0() {
        _fun61853: for (var _fun61853_ip = 0;;) switch (_fun61853_ip) {
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
                    _fun61853_ip = 47;
                    continue _fun61853
                }
            case 31:
                var1 = 255;
                var3 = var2 > var1;
                if (var3) {
                    _fun61853_ip = 44;
                    continue _fun61853
                }
            case 41:
                var1 = var2;
            case 44:
                var0 = var1;
            case 47:
                return var0;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function arg0() {
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
    var _closure1_slot7 = var1;
    var1 = function arg0() {
        _fun61855: for (var _fun61855_ip = 0;;) switch (_fun61855_ip) {
            case 0:
                var3 = global;
                var2 = var3.parseFloat;
                var1 = undefined;
                var0 = arg0;
                var5 = var2.bind(var1)(var0);
                var0 = 0;
                var1 = var5 < var0;
                if (var1) {
                    _fun61855_ip = 66;
                    continue _fun61855
                }
            case 27:
                var1 = 1;
                var4 = var5 > var1;
                var2 = 255;
                var1 = var2;
                if (var4) {
                    _fun61855_ip = 63;
                    continue _fun61855
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
    var _closure1_slot8 = var1;
    var1 = function arg0() {
        _fun61856: for (var _fun61856_ip = 0;;) switch (_fun61856_ip) {
            case 0:
                var0 = global;
                var2 = var0.parseFloat;
                var1 = undefined;
                var0 = arg0;
                var3 = var2.bind(var1)(var0);
                var0 = 0;
                var1 = var3 < var0;
                if (var1) {
                    _fun61856_ip = 47;
                    continue _fun61856
                }
            case 27:
                var2 = 100;
                var4 = var3 > var2;
                var1 = 1;
                if (var4) {
                    _fun61856_ip = 44;
                    continue _fun61856
                }
            case 40:
                var1 = var3 / var2;
            case 44:
                var0 = var1;
            case 47:
                return var0;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function arg0() {
        _fun61857: for (var _fun61857_ip = 0;;) switch (_fun61857_ip) {
            case 0:
                var1 = arg0;
                var2 = typeof var1;
                var0 = 'number';
                if (!(var0 !== var2)) {
                    _fun61857_ip = 5297;
                    continue _fun61857
                }
            case 17:
                var0 = 'string';
                if (!(var0 === var2)) {
                    _fun61857_ip = 5293;
                    continue _fun61857
                }
            case 28:
                var0 = _closure1_slot0;
                var4 = undefined;
                if (!(var4 === var0)) {
                    _fun61857_ip = 445;
                    continue _fun61857
                }
            case 44:
                var0 = {};
                var6 = global;
                var9 = var6.RegExp;
                var7 = _closure1_slot3;
                var3 = '[-+]?\\d*\\.?\\d+';
                var8 = var7.bind(var4)(var3, var3, var3);
                var2 = 'rgb';
                var26 = var2 + var8;
                var8 = var9.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var9
                    }
                });
                var27 = var8;
                var2 = new var27[var9](var26, var25);
                var2 = var2 instanceof Object ? var2 : var8;
                var0.rgb = var2;
                var12 = var6.RegExp;
                var9 = _closure1_slot5;
                var27 = undefined;
                var26 = var3;
                var25 = var3;
                var24 = var3;
                var23 = var3;
                var13 = var27[var9](var26, var25, var24, var23, var22);
                var8 = _closure1_slot4;
                var11 = var27[var8](var26, var25, var24, var23, var22);
                var2 = var12.prototype;
                var10 = Object.create(var2, {
                    constructor: {
                        value: var12
                    }
                });
                var2 = 'rgba(';
                var2 = var2 + var13;
                var13 = '|';
                var2 = var2 + var13;
                var2 = var2 + var11;
                var11 = ')';
                var26 = var2 + var11;
                var27 = var10;
                var2 = new var27[var12](var26, var25);
                var2 = var2 instanceof Object ? var2 : var10;
                var0.rgba = var2;
                var14 = var6.RegExp;
                var2 = '[-+]?\\d*\\.?\\d+%';
                var12 = var7.bind(var4)(var3, var2, var2);
                var10 = 'hsl';
                var26 = var10 + var12;
                var12 = var14.prototype;
                var12 = Object.create(var12, {
                    constructor: {
                        value: var14
                    }
                });
                var27 = var12;
                var10 = new var27[var14](var26, var25);
                var10 = var10 instanceof Object ? var10 : var12;
                var0.hsl = var10;
                var10 = var6.RegExp;
                var27 = undefined;
                var26 = var3;
                var25 = var2;
                var24 = var2;
                var14 = var27[var9](var26, var25, var24, var23, var22);
                var12 = var27[var8](var26, var25, var24, var23, var22);
                var8 = var10.prototype;
                var9 = Object.create(var8, {
                    constructor: {
                        value: var10
                    }
                });
                var8 = 'hsla(';
                var8 = var8 + var14;
                var8 = var8 + var13;
                var8 = var8 + var12;
                var26 = var8 + var11;
                var27 = var9;
                var8 = new var27[var10](var26, var25);
                var8 = var8 instanceof Object ? var8 : var9;
                var0.hsla = var8;
                var6 = var6.RegExp;
                var3 = var7.bind(var4)(var3, var2, var2);
                var2 = 'hwb';
                var26 = var2 + var3;
                var3 = var6.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var6
                    }
                });
                var27 = var3;
                var2 = new var27[var6](var26, var25);
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
            case 445:
                var6 = _closure1_slot0;
                var2 = var6.hex6;
                var0 = var2.exec;
                var2 = var0.bind(var2)(var1);
                if (var2) {
                    _fun61857_ip = 5253;
                    continue _fun61857
                }
            case 472:
                var0 = 'transparent';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3998;
                    continue _fun61857
                }
            case 483:
                var0 = 'aliceblue';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3986;
                    continue _fun61857
                }
            case 494:
                var0 = 'antiquewhite';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3974;
                    continue _fun61857
                }
            case 505:
                var0 = 'aqua';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3966;
                    continue _fun61857
                }
            case 516:
                var0 = 'cyan';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3966;
                    continue _fun61857
                }
            case 527:
                var0 = 'aquamarine';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3958;
                    continue _fun61857
                }
            case 538:
                var0 = 'azure';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3946;
                    continue _fun61857
                }
            case 549:
                var0 = 'beige';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3934;
                    continue _fun61857
                }
            case 560:
                var0 = 'bisque';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3922;
                    continue _fun61857
                }
            case 571:
                var0 = 'black';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3917;
                    continue _fun61857
                }
            case 582:
                var0 = 'blanchedalmond';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3905;
                    continue _fun61857
                }
            case 593:
                var0 = 'blue';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3897;
                    continue _fun61857
                }
            case 604:
                var0 = 'blueviolet';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3885;
                    continue _fun61857
                }
            case 615:
                var0 = 'brown';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3873;
                    continue _fun61857
                }
            case 626:
                var0 = 'burlywood';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3858;
                    continue _fun61857
                }
            case 637:
                var0 = 'burntsienna';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3843;
                    continue _fun61857
                }
            case 648:
                var0 = 'cadetblue';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3832;
                    continue _fun61857
                }
            case 659:
                var0 = 'chartreuse';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3821;
                    continue _fun61857
                }
            case 670:
                var0 = 'chocolate';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3806;
                    continue _fun61857
                }
            case 681:
                var0 = 'coral';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3791;
                    continue _fun61857
                }
            case 692:
                var0 = 'cornflowerblue';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3780;
                    continue _fun61857
                }
            case 703:
                var0 = 'cornsilk';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3765;
                    continue _fun61857
                }
            case 714:
                var0 = 'crimson';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3750;
                    continue _fun61857
                }
            case 725:
                var0 = 'darkblue';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3739;
                    continue _fun61857
                }
            case 736:
                var0 = 'darkcyan';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3728;
                    continue _fun61857
                }
            case 747:
                var0 = 'darkgoldenrod';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3713;
                    continue _fun61857
                }
            case 758:
                var0 = 'darkgray';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3698;
                    continue _fun61857
                }
            case 769:
                var0 = 'darkgrey';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3698;
                    continue _fun61857
                }
            case 780:
                var0 = 'darkgreen';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3687;
                    continue _fun61857
                }
            case 791:
                var0 = 'darkkhaki';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3672;
                    continue _fun61857
                }
            case 802:
                var0 = 'darkmagenta';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3657;
                    continue _fun61857
                }
            case 813:
                var0 = 'darkolivegreen';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3646;
                    continue _fun61857
                }
            case 824:
                var0 = 'darkorange';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3631;
                    continue _fun61857
                }
            case 835:
                var0 = 'darkorchid';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3616;
                    continue _fun61857
                }
            case 846:
                var0 = 'darkred';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3601;
                    continue _fun61857
                }
            case 857:
                var0 = 'darksalmon';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3586;
                    continue _fun61857
                }
            case 868:
                var0 = 'darkseagreen';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3571;
                    continue _fun61857
                }
            case 879:
                var0 = 'darkslateblue';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3560;
                    continue _fun61857
                }
            case 890:
                var0 = 'darkslategray';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3549;
                    continue _fun61857
                }
            case 901:
                var0 = 'darkslategrey';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3549;
                    continue _fun61857
                }
            case 912:
                var0 = 'darkturquoise';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3538;
                    continue _fun61857
                }
            case 923:
                var0 = 'darkviolet';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3523;
                    continue _fun61857
                }
            case 934:
                var0 = 'deeppink';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3508;
                    continue _fun61857
                }
            case 945:
                var0 = 'deepskyblue';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3497;
                    continue _fun61857
                }
            case 956:
                var0 = 'dimgray';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3486;
                    continue _fun61857
                }
            case 967:
                var0 = 'dimgrey';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3486;
                    continue _fun61857
                }
            case 978:
                var0 = 'dodgerblue';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3475;
                    continue _fun61857
                }
            case 989:
                var0 = 'firebrick';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3460;
                    continue _fun61857
                }
            case 1000:
                var0 = 'floralwhite';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3445;
                    continue _fun61857
                }
            case 1011:
                var0 = 'forestgreen';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3434;
                    continue _fun61857
                }
            case 1022:
                var0 = 'fuchsia';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3419;
                    continue _fun61857
                }
            case 1033:
                var0 = 'magenta';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3419;
                    continue _fun61857
                }
            case 1044:
                var0 = 'gainsboro';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3404;
                    continue _fun61857
                }
            case 1055:
                var0 = 'ghostwhite';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3389;
                    continue _fun61857
                }
            case 1066:
                var0 = 'gold';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3374;
                    continue _fun61857
                }
            case 1077:
                var0 = 'goldenrod';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3359;
                    continue _fun61857
                }
            case 1088:
                var0 = 'gray';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3344;
                    continue _fun61857
                }
            case 1099:
                var0 = 'grey';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3344;
                    continue _fun61857
                }
            case 1110:
                var0 = 'green';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3333;
                    continue _fun61857
                }
            case 1121:
                var0 = 'greenyellow';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3318;
                    continue _fun61857
                }
            case 1132:
                var0 = 'honeydew';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3303;
                    continue _fun61857
                }
            case 1143:
                var0 = 'hotpink';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3288;
                    continue _fun61857
                }
            case 1154:
                var0 = 'indianred';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3273;
                    continue _fun61857
                }
            case 1165:
                var0 = 'indigo';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3262;
                    continue _fun61857
                }
            case 1176:
                var0 = 'ivory';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3247;
                    continue _fun61857
                }
            case 1187:
                var0 = 'khaki';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3232;
                    continue _fun61857
                }
            case 1198:
                var0 = 'lavender';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3217;
                    continue _fun61857
                }
            case 1209:
                var0 = 'lavenderblush';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3202;
                    continue _fun61857
                }
            case 1220:
                var0 = 'lawngreen';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3191;
                    continue _fun61857
                }
            case 1231:
                var0 = 'lemonchiffon';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3176;
                    continue _fun61857
                }
            case 1242:
                var0 = 'lightblue';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3161;
                    continue _fun61857
                }
            case 1253:
                var0 = 'lightcoral';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3146;
                    continue _fun61857
                }
            case 1264:
                var0 = 'lightcyan';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3131;
                    continue _fun61857
                }
            case 1275:
                var0 = 'lightgoldenrodyellow';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3116;
                    continue _fun61857
                }
            case 1286:
                var0 = 'lightgray';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3101;
                    continue _fun61857
                }
            case 1297:
                var0 = 'lightgrey';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3101;
                    continue _fun61857
                }
            case 1308:
                var0 = 'lightgreen';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3086;
                    continue _fun61857
                }
            case 1319:
                var0 = 'lightpink';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3071;
                    continue _fun61857
                }
            case 1330:
                var0 = 'lightsalmon';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3056;
                    continue _fun61857
                }
            case 1341:
                var0 = 'lightseagreen';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3045;
                    continue _fun61857
                }
            case 1352:
                var0 = 'lightskyblue';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3030;
                    continue _fun61857
                }
            case 1363:
                var0 = 'lightslategray';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3019;
                    continue _fun61857
                }
            case 1374:
                var0 = 'lightslategrey';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3019;
                    continue _fun61857
                }
            case 1385:
                var0 = 'lightsteelblue';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 3004;
                    continue _fun61857
                }
            case 1396:
                var0 = 'lightyellow';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2989;
                    continue _fun61857
                }
            case 1407:
                var0 = 'lime';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2978;
                    continue _fun61857
                }
            case 1418:
                var0 = 'limegreen';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2967;
                    continue _fun61857
                }
            case 1429:
                var0 = 'linen';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2952;
                    continue _fun61857
                }
            case 1440:
                var0 = 'maroon';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2937;
                    continue _fun61857
                }
            case 1451:
                var0 = 'mediumaquamarine';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2926;
                    continue _fun61857
                }
            case 1462:
                var0 = 'mediumblue';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2915;
                    continue _fun61857
                }
            case 1473:
                var0 = 'mediumorchid';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2900;
                    continue _fun61857
                }
            case 1484:
                var0 = 'mediumpurple';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2885;
                    continue _fun61857
                }
            case 1495:
                var0 = 'mediumseagreen';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2874;
                    continue _fun61857
                }
            case 1506:
                var0 = 'mediumslateblue';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2863;
                    continue _fun61857
                }
            case 1517:
                var0 = 'mediumspringgreen';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2852;
                    continue _fun61857
                }
            case 1528:
                var0 = 'mediumturquoise';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2841;
                    continue _fun61857
                }
            case 1539:
                var0 = 'mediumvioletred';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2826;
                    continue _fun61857
                }
            case 1550:
                var0 = 'midnightblue';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2815;
                    continue _fun61857
                }
            case 1561:
                var0 = 'mintcream';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2800;
                    continue _fun61857
                }
            case 1572:
                var0 = 'mistyrose';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2785;
                    continue _fun61857
                }
            case 1583:
                var0 = 'moccasin';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2770;
                    continue _fun61857
                }
            case 1594:
                var0 = 'navajowhite';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2755;
                    continue _fun61857
                }
            case 1605:
                var0 = 'navy';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2744;
                    continue _fun61857
                }
            case 1616:
                var0 = 'oldlace';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2729;
                    continue _fun61857
                }
            case 1627:
                var0 = 'olive';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2714;
                    continue _fun61857
                }
            case 1638:
                var0 = 'olivedrab';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2703;
                    continue _fun61857
                }
            case 1649:
                var0 = 'orange';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2688;
                    continue _fun61857
                }
            case 1660:
                var0 = 'orangered';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2673;
                    continue _fun61857
                }
            case 1671:
                var0 = 'orchid';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2658;
                    continue _fun61857
                }
            case 1682:
                var0 = 'palegoldenrod';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2643;
                    continue _fun61857
                }
            case 1693:
                var0 = 'palegreen';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2628;
                    continue _fun61857
                }
            case 1704:
                var0 = 'paleturquoise';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2613;
                    continue _fun61857
                }
            case 1715:
                var0 = 'palevioletred';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2598;
                    continue _fun61857
                }
            case 1726:
                var0 = 'papayawhip';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2583;
                    continue _fun61857
                }
            case 1737:
                var0 = 'peachpuff';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2568;
                    continue _fun61857
                }
            case 1748:
                var0 = 'peru';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2553;
                    continue _fun61857
                }
            case 1759:
                var0 = 'pink';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2538;
                    continue _fun61857
                }
            case 1770:
                var0 = 'plum';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2523;
                    continue _fun61857
                }
            case 1781:
                var0 = 'powderblue';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2508;
                    continue _fun61857
                }
            case 1792:
                var0 = 'purple';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2493;
                    continue _fun61857
                }
            case 1803:
                var0 = 'rebeccapurple';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2482;
                    continue _fun61857
                }
            case 1814:
                var0 = 'red';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2467;
                    continue _fun61857
                }
            case 1825:
                var0 = 'rosybrown';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2452;
                    continue _fun61857
                }
            case 1836:
                var0 = 'royalblue';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2441;
                    continue _fun61857
                }
            case 1847:
                var0 = 'saddlebrown';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2426;
                    continue _fun61857
                }
            case 1858:
                var0 = 'salmon';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2411;
                    continue _fun61857
                }
            case 1869:
                var0 = 'sandybrown';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2396;
                    continue _fun61857
                }
            case 1880:
                var0 = 'seagreen';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2385;
                    continue _fun61857
                }
            case 1891:
                var0 = 'seashell';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2370;
                    continue _fun61857
                }
            case 1902:
                var0 = 'sienna';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2355;
                    continue _fun61857
                }
            case 1913:
                var0 = 'silver';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2340;
                    continue _fun61857
                }
            case 1924:
                var0 = 'skyblue';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2325;
                    continue _fun61857
                }
            case 1935:
                var0 = 'slateblue';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2314;
                    continue _fun61857
                }
            case 1946:
                var0 = 'slategray';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2303;
                    continue _fun61857
                }
            case 1957:
                var0 = 'slategrey';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2303;
                    continue _fun61857
                }
            case 1968:
                var0 = 'snow';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2288;
                    continue _fun61857
                }
            case 1979:
                var0 = 'springgreen';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2277;
                    continue _fun61857
                }
            case 1990:
                var0 = 'steelblue';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2266;
                    continue _fun61857
                }
            case 2001:
                var0 = 'tan';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2251;
                    continue _fun61857
                }
            case 2012:
                var0 = 'teal';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2240;
                    continue _fun61857
                }
            case 2023:
                var0 = 'thistle';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2225;
                    continue _fun61857
                }
            case 2034:
                var0 = 'tomato';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2210;
                    continue _fun61857
                }
            case 2045:
                var0 = 'turquoise';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2199;
                    continue _fun61857
                }
            case 2056:
                var0 = 'violet';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2184;
                    continue _fun61857
                }
            case 2064:
                var0 = 'wheat';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2169;
                    continue _fun61857
                }
            case 2072:
                var0 = 'white';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2154;
                    continue _fun61857
                }
            case 2080:
                var0 = 'whitesmoke';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2139;
                    continue _fun61857
                }
            case 2088:
                var0 = 'yellow';
                if (!(var0 !== var1)) {
                    _fun61857_ip = 2124;
                    continue _fun61857
                }
            case 2096:
                var0 = 2597139199.0;
                var3 = 'yellowgreen';
                if (!(var3 !== var1)) {
                    _fun61857_ip = 4000;
                    continue _fun61857
                }
            case 2117:
                var0 = null;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2124:
                var0 = 4294902015.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2139:
                var0 = 4126537215.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2154:
                var0 = 4294967295.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2169:
                var0 = 4125012991.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2184:
                var0 = 4001558271.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2199:
                var0 = 1088475391;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2210:
                var0 = 4284696575.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2225:
                var0 = 3636451583.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2240:
                var0 = 8421631;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2251:
                var0 = 3535047935.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2266:
                var0 = 1182971135;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2277:
                var0 = 16744447;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2288:
                var0 = 4294638335.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2303:
                var0 = 1887473919;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2314:
                var0 = 1784335871;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2325:
                var0 = 2278484991.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2340:
                var0 = 3233857791.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2355:
                var0 = 2689740287.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2370:
                var0 = 4294307583.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2385:
                var0 = 780883967;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2396:
                var0 = 4104413439.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2411:
                var0 = 4202722047.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2426:
                var0 = 2336560127.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2441:
                var0 = 1097458175;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2452:
                var0 = 3163525119.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2467:
                var0 = 4278190335.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2482:
                var0 = 1714657791;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2493:
                var0 = 2147516671.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2508:
                var0 = 2967529215.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2523:
                var0 = 3718307327.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2538:
                var0 = 4290825215.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2553:
                var0 = 3448061951.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2568:
                var0 = 4292524543.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2583:
                var0 = 4293907967.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2598:
                var0 = 3681588223.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2613:
                var0 = 2951671551.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2628:
                var0 = 2566625535.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2643:
                var0 = 4008225535.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2658:
                var0 = 3664828159.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2673:
                var0 = 4282712319.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2688:
                var0 = 4289003775.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2703:
                var0 = 1804477439;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2714:
                var0 = 2155872511.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2729:
                var0 = 4260751103.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2744:
                var0 = 33023;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2755:
                var0 = 4292783615.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2770:
                var0 = 4293178879.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2785:
                var0 = 4293190143.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2800:
                var0 = 4127193855.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2815:
                var0 = 421097727;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2826:
                var0 = 3340076543.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2841:
                var0 = 1221709055;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2852:
                var0 = 16423679;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2863:
                var0 = 2070474495;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2874:
                var0 = 1018393087;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2885:
                var0 = 2473647103.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2900:
                var0 = 3126187007.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2915:
                var0 = 52735;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2926:
                var0 = 1724754687;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2937:
                var0 = 2147483903.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2952:
                var0 = 4210091775.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2967:
                var0 = 852308735;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2978:
                var0 = 16711935;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 2989:
                var0 = 4294959359.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3004:
                var0 = 2965692159.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3019:
                var0 = 2005441023;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3030:
                var0 = 2278488831.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3045:
                var0 = 548580095;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3056:
                var0 = 4288707327.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3071:
                var0 = 4290167295.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3086:
                var0 = 2431553791.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3101:
                var0 = 3553874943.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3116:
                var0 = 4210742015.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3131:
                var0 = 3774873599.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3146:
                var0 = 4034953471.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3161:
                var0 = 2916673279.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3176:
                var0 = 4294626815.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3191:
                var0 = 2096890111;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3202:
                var0 = 4293981695.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3217:
                var0 = 3873897215.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3232:
                var0 = 4041641215.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3247:
                var0 = 4294963455.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3262:
                var0 = 1258324735;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3273:
                var0 = 3445382399.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3288:
                var0 = 4285117695.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3303:
                var0 = 4043305215.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3318:
                var0 = 2919182335.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3333:
                var0 = 8388863;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3344:
                var0 = 2155905279.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3359:
                var0 = 3668254975.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3374:
                var0 = 4292280575.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3389:
                var0 = 4177068031.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3404:
                var0 = 3705462015.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3419:
                var0 = 4278255615.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3434:
                var0 = 579543807;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3445:
                var0 = 4294635775.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3460:
                var0 = 2988581631.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3475:
                var0 = 512819199;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3486:
                var0 = 1768516095;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3497:
                var0 = 12582911;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3508:
                var0 = 4279538687.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3523:
                var0 = 2483082239.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3538:
                var0 = 13554175;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3549:
                var0 = 793726975;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3560:
                var0 = 1211993087;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3571:
                var0 = 2411499519.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3586:
                var0 = 3918953215.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3601:
                var0 = 2332033279.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3616:
                var0 = 2570243327.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3631:
                var0 = 4287365375.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3646:
                var0 = 1433087999;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3657:
                var0 = 2332068863.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3672:
                var0 = 3182914559.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3687:
                var0 = 6553855;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3698:
                var0 = 2846468607.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3713:
                var0 = 3095792639.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3728:
                var0 = 9145343;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3739:
                var0 = 35839;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3750:
                var0 = 3692313855.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3765:
                var0 = 4294499583.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3780:
                var0 = 1687547391;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3791:
                var0 = 4286533887.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3806:
                var0 = 3530104575.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3821:
                var0 = 2147418367;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3832:
                var0 = 1604231423;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3843:
                var0 = 3934150143.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3858:
                var0 = 3736635391.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3873:
                var0 = 2771004159.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3885:
                var0 = 2318131967.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3897:
                var0 = 65535;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3905:
                var0 = 4293643775.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3917:
                var0 = 255;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3922:
                var0 = 4293182719.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3934:
                var0 = 4126530815.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3946:
                var0 = 4043309055.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3958:
                var0 = 2147472639;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3966:
                var0 = 16777215;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3974:
                var0 = 4209760255.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3986:
                var0 = 4042850303.0;
                _fun61857_ip = 4000;
                continue _fun61857;
            case 3998:
                var0 = 0;
            case 4000:
                var3 = null;
                if (!(var3 == var0)) {
                    _fun61857_ip = 5251;
                    continue _fun61857
                }
            case 4009:
                var8 = var6.rgb;
                var7 = var8.exec;
                var9 = var7.bind(var8)(var1);
                if (var9) {
                    _fun61857_ip = 5166;
                    continue _fun61857
                }
            case 4032:
                var8 = var6.rgba;
                var7 = var8.exec;
                var13 = var7.bind(var8)(var1);
                if (var13) {
                    _fun61857_ip = 4964;
                    continue _fun61857
                }
            case 4055:
                var8 = var6.hex3;
                var7 = var8.exec;
                var10 = var7.bind(var8)(var1);
                if (var10) {
                    _fun61857_ip = 4875;
                    continue _fun61857
                }
            case 4078:
                var8 = var6.hex8;
                var7 = var8.exec;
                var7 = var7.bind(var8)(var1);
                if (var7) {
                    _fun61857_ip = 4843;
                    continue _fun61857
                }
            case 4101:
                var11 = var6.hex4;
                var8 = var11.exec;
                var12 = var8.bind(var11)(var1);
                if (var12) {
                    _fun61857_ip = 4746;
                    continue _fun61857
                }
            case 4124:
                var11 = var6.hsl;
                var8 = var11.exec;
                var16 = var8.bind(var11)(var1);
                if (var16) {
                    _fun61857_ip = 4676;
                    continue _fun61857
                }
            case 4147:
                var11 = var6.hsla;
                var8 = var11.exec;
                var15 = var8.bind(var11)(var1);
                if (var15) {
                    _fun61857_ip = 4499;
                    continue _fun61857
                }
            case 4170:
                var8 = var6.hwb;
                var6 = var8.exec;
                var11 = var6.bind(var8)(var1);
                var3 = null;
                if (!var11) {
                    _fun61857_ip = 4494;
                    continue _fun61857
                }
            case 4195:
                var8 = _closure1_slot7;
                var21 = 1;
                var6 = var11[var21];
                var22 = var8.bind(var4)(var6);
                var8 = _closure1_slot9;
                var6 = 2;
                var6 = var11[var6];
                var18 = var8.bind(var4)(var6);
                var6 = 3;
                var6 = var11[var6];
                var14 = var8.bind(var4)(var6);
                var17 = var18 + var14;
                if (!(!(var17 >= var21))) {
                    _fun61857_ip = 4423;
                    continue _fun61857
                }
            case 4250:
                var20 = _closure1_slot1;
                var8 = 0.3333333333333333;
                var6 = var22 + var8;
                var19 = 0;
                var6 = var20.bind(var4)(var19, var21, var6);
                var11 = var21 - var18;
                var14 = var11 - var14;
                var6 = var6 * var14;
                var11 = var6 + var18;
                var6 = var20.bind(var4)(var19, var21, var22);
                var6 = var6 * var14;
                var6 = var6 + var18;
                var8 = var22 - var8;
                var8 = var20.bind(var4)(var19, var21, var8);
                var8 = var8 * var14;
                var20 = var8 + var18;
                var14 = global;
                var21 = var14.Math;
                var19 = var21.round;
                var8 = 255;
                var11 = var8 * var11;
                var19 = var19.bind(var21)(var11);
                var11 = 24;
                var11 = var19 << var11;
                var21 = var14.Math;
                var19 = var21.round;
                var6 = var8 * var6;
                var19 = var19.bind(var21)(var6);
                var6 = 16;
                var6 = var19 << var6;
                var19 = var14.Math;
                var14 = var19.round;
                var8 = var8 * var20;
                var14 = var14.bind(var19)(var8);
                var8 = 8;
                var8 = var14 << var8;
                var6 = var11 | var6;
                var8 = var6 | var8;
                _fun61857_ip = 4481;
                continue _fun61857;
            case 4423:
                var6 = global;
                var14 = var6.Math;
                var11 = var14.round;
                var6 = 255;
                var6 = var6 * var18;
                var6 = var6 / var17;
                var17 = var11.bind(var14)(var6);
                var6 = 24;
                var14 = var17 << var6;
                var6 = 16;
                var6 = var17 << var6;
                var11 = 8;
                var11 = var17 << var11;
                var6 = var14 | var6;
                var8 = var6 | var11;
            case 4481:
                var6 = 255;
                var8 = var6 | var8;
                var6 = 0;
                var3 = var8 >>> var6;
            case 4494:
                _fun61857_ip = 4674;
                continue _fun61857;
            case 4499:
                var8 = 6;
                var6 = var15[var8];
                if (!(var4 === var6)) {
                    _fun61857_ip = 4593;
                    continue _fun61857
                }
            case 4510:
                var17 = _closure1_slot2;
                var11 = _closure1_slot7;
                var6 = 2;
                var6 = var15[var6];
                var14 = var11.bind(var4)(var6);
                var18 = _closure1_slot9;
                var6 = 3;
                var6 = var15[var6];
                var11 = var18.bind(var4)(var6);
                var6 = 4;
                var6 = var15[var6];
                var6 = var18.bind(var4)(var6);
                var11 = var17.bind(var4)(var14, var11, var6);
                var14 = _closure1_slot8;
                var6 = 5;
                var6 = var15[var6];
                var6 = var14.bind(var4)(var6);
                var11 = var11 | var6;
                var6 = 0;
                var6 = var11 >>> var6;
                _fun61857_ip = 4671;
                continue _fun61857;
            case 4593:
                var17 = _closure1_slot2;
                var11 = _closure1_slot7;
                var8 = var15[var8];
                var14 = var11.bind(var4)(var8);
                var18 = _closure1_slot9;
                var8 = 7;
                var8 = var15[var8];
                var11 = var18.bind(var4)(var8);
                var8 = 8;
                var8 = var15[var8];
                var8 = var18.bind(var4)(var8);
                var11 = var17.bind(var4)(var14, var11, var8);
                var14 = _closure1_slot8;
                var8 = 9;
                var8 = var15[var8];
                var8 = var14.bind(var4)(var8);
                var11 = var11 | var8;
                var8 = 0;
                var6 = var11 >>> var8;
            case 4671:
                var3 = var6;
            case 4674:
                _fun61857_ip = 4744;
                continue _fun61857;
            case 4676:
                var14 = _closure1_slot2;
                var8 = _closure1_slot7;
                var6 = 1;
                var6 = var16[var6];
                var11 = var8.bind(var4)(var6);
                var15 = _closure1_slot9;
                var6 = 2;
                var6 = var16[var6];
                var8 = var15.bind(var4)(var6);
                var6 = 3;
                var6 = var16[var6];
                var6 = var15.bind(var4)(var6);
                var8 = var14.bind(var4)(var11, var8, var6);
                var6 = 255;
                var8 = var6 | var8;
                var6 = 0;
                var3 = var8 >>> var6;
            case 4744:
                _fun61857_ip = 4841;
                continue _fun61857;
            case 4746:
                var6 = global;
                var11 = var6.parseInt;
                var6 = 1;
                var8 = var12[var6];
                var6 = var12[var6];
                var14 = var8 + var6;
                var6 = 2;
                var8 = var12[var6];
                var8 = var14 + var8;
                var6 = var12[var6];
                var14 = var8 + var6;
                var6 = 3;
                var8 = var12[var6];
                var8 = var14 + var8;
                var6 = var12[var6];
                var14 = var8 + var6;
                var6 = 4;
                var8 = var12[var6];
                var8 = var14 + var8;
                var6 = var12[var6];
                var8 = var8 + var6;
                var6 = 16;
                var8 = var11.bind(var4)(var8, var6);
                var6 = 0;
                var3 = var8 >>> var6;
            case 4841:
                _fun61857_ip = 4873;
                continue _fun61857;
            case 4843:
                var6 = global;
                var8 = var6.parseInt;
                var6 = 1;
                var7 = var7[var6];
                var6 = 16;
                var7 = var8.bind(var4)(var7, var6);
                var6 = 0;
                var3 = var7 >>> var6;
            case 4873:
                _fun61857_ip = 4959;
                continue _fun61857;
            case 4875:
                var6 = global;
                var8 = var6.parseInt;
                var6 = 1;
                var7 = var10[var6];
                var6 = var10[var6];
                var11 = var7 + var6;
                var6 = 2;
                var7 = var10[var6];
                var7 = var11 + var7;
                var6 = var10[var6];
                var11 = var7 + var6;
                var6 = 3;
                var7 = var10[var6];
                var7 = var11 + var7;
                var6 = var10[var6];
                var7 = var7 + var6;
                var6 = 'ff';
                var7 = var7 + var6;
                var6 = 16;
                var7 = var8.bind(var4)(var7, var6);
                var6 = 0;
                var3 = var7 >>> var6;
            case 4959:
                _fun61857_ip = 5164;
                continue _fun61857;
            case 4964:
                var7 = 6;
                var6 = var13[var7];
                if (!(var4 === var6)) {
                    _fun61857_ip = 5072;
                    continue _fun61857
                }
            case 4975:
                var10 = _closure1_slot6;
                var6 = 2;
                var6 = var13[var6];
                var8 = var10.bind(var4)(var6);
                var6 = 24;
                var11 = var8 << var6;
                var6 = 3;
                var6 = var13[var6];
                var8 = var10.bind(var4)(var6);
                var6 = 16;
                var6 = var8 << var6;
                var8 = 4;
                var8 = var13[var8];
                var10 = var10.bind(var4)(var8);
                var8 = 8;
                var10 = var10 << var8;
                var12 = _closure1_slot8;
                var8 = 5;
                var8 = var13[var8];
                var8 = var12.bind(var4)(var8);
                var6 = var11 | var6;
                var6 = var6 | var10;
                var8 = var6 | var8;
                var6 = 0;
                var6 = var8 >>> var6;
                _fun61857_ip = 5161;
                continue _fun61857;
            case 5072:
                var12 = _closure1_slot6;
                var7 = var13[var7];
                var8 = var12.bind(var4)(var7);
                var7 = 24;
                var11 = var8 << var7;
                var7 = 7;
                var7 = var13[var7];
                var8 = var12.bind(var4)(var7);
                var7 = 16;
                var7 = var8 << var7;
                var10 = 8;
                var8 = var13[var10];
                var8 = var12.bind(var4)(var8);
                var10 = var8 << var10;
                var12 = _closure1_slot8;
                var8 = 9;
                var8 = var13[var8];
                var8 = var12.bind(var4)(var8);
                var7 = var11 | var7;
                var7 = var7 | var10;
                var8 = var7 | var8;
                var7 = 0;
                var6 = var8 >>> var7;
            case 5161:
                var3 = var6;
            case 5164:
                _fun61857_ip = 5248;
                continue _fun61857;
            case 5166:
                var8 = _closure1_slot6;
                var5 = 1;
                var5 = var9[var5];
                var6 = var8.bind(var4)(var5);
                var5 = 24;
                var7 = var6 << var5;
                var5 = 2;
                var5 = var9[var5];
                var6 = var8.bind(var4)(var5);
                var5 = 16;
                var5 = var6 << var5;
                var6 = 3;
                var6 = var9[var6];
                var8 = var8.bind(var4)(var6);
                var6 = 8;
                var6 = var8 << var6;
                var5 = var7 | var5;
                var6 = var5 | var6;
                var5 = 255;
                var6 = var6 | var5;
                var5 = 0;
                var3 = var6 >>> var5;
            case 5248:
                var0 = var3;
            case 5251:
                return var0;
            case 5253:
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
            case 5293:
                var0 = null;
                return var0;
            case 5297:
                var2 = 0;
                var4 = var1 >>> var2;
                var0 = null;
                if (!(var4 === var1)) {
                    _fun61857_ip = 5340;
                    continue _fun61857
                }
            case 5309:
                var2 = var1 >= var2;
                var0 = null;
                if (!var2) {
                    _fun61857_ip = 5340;
                    continue _fun61857
                }
            case 5318:
                var2 = 4294967295.0;
                var2 = var1 <= var2;
                var0 = null;
                if (!var2) {
                    _fun61857_ip = 5340;
                    continue _fun61857
                }
            case 5337:
                var0 = var1;
            case 5340:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);