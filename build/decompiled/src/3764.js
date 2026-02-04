// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var9 = function() {
        _fun33626: for (var _fun33626_ip = 0;;) switch (_fun33626_ip) {
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
                    _fun33626_ip = 60;
                    continue _fun33626
                }
            case 45:
                var4 = arguments[var0];
                var2[var0] = var4;
                var0 = var0 + 1;
                if (var0 < var1) {
                    _fun33626_ip = 45;
                    continue _fun33626
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
    var10 = function() {
        _fun33627: for (var _fun33627_ip = 0;;) switch (_fun33627_ip) {
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
                    _fun33627_ip = 62;
                    continue _fun33627
                }
            case 47:
                var5 = arguments[var0];
                var1[var0] = var5;
                var0 = var0 + 1;
                if (var0 < var2) {
                    _fun33627_ip = 47;
                    continue _fun33627
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
    var11 = function() {
        _fun33628: for (var _fun33628_ip = 0;;) switch (_fun33628_ip) {
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
                    _fun33628_ip = 60;
                    continue _fun33628
                }
            case 45:
                var4 = arguments[var0];
                var2[var0] = var4;
                var0 = var0 + 1;
                if (var0 < var1) {
                    _fun33628_ip = 45;
                    continue _fun33628
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
    var8 = global;
    var7 = var8.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var3 = {};
    var13 = var8.RegExp;
    var0 = undefined;
    var7 = '[-+]?\\d*\\.?\\d+';
    var12 = var9.bind(var0)(var7, var7, var7);
    var6 = 'rgb';
    var25 = var6 + var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {
        constructor: {
            value: var13
        }
    });
    var26 = var12;
    var6 = new var26[var13](var25, var24);
    var6 = var6 instanceof Object ? var6 : var12;
    var3.rgb = var6;
    var14 = var8.RegExp;
    var26 = undefined;
    var25 = var7;
    var24 = var7;
    var23 = var7;
    var22 = var7;
    var15 = var26[var11](var25, var24, var23, var22, var21);
    var13 = var26[var10](var25, var24, var23, var22, var21);
    var6 = var14.prototype;
    var12 = Object.create(var6, {
        constructor: {
            value: var14
        }
    });
    var6 = 'rgba(';
    var6 = var6 + var15;
    var15 = '|';
    var6 = var6 + var15;
    var6 = var6 + var13;
    var13 = ')';
    var25 = var6 + var13;
    var26 = var12;
    var6 = new var26[var14](var25, var24);
    var6 = var6 instanceof Object ? var6 : var12;
    var3.rgba = var6;
    var16 = var8.RegExp;
    var6 = '[-+]?\\d*\\.?\\d+%';
    var14 = var9.bind(var0)(var7, var6, var6);
    var12 = 'hsl';
    var25 = var12 + var14;
    var14 = var16.prototype;
    var14 = Object.create(var14, {
        constructor: {
            value: var16
        }
    });
    var26 = var14;
    var12 = new var26[var16](var25, var24);
    var12 = var12 instanceof Object ? var12 : var14;
    var3.hsl = var12;
    var12 = var8.RegExp;
    var26 = undefined;
    var25 = var7;
    var24 = var6;
    var23 = var6;
    var16 = var26[var11](var25, var24, var23, var22, var21);
    var14 = var26[var10](var25, var24, var23, var22, var21);
    var10 = var12.prototype;
    var11 = Object.create(var10, {
        constructor: {
            value: var12
        }
    });
    var10 = 'hsla(';
    var10 = var10 + var16;
    var10 = var10 + var15;
    var10 = var10 + var14;
    var25 = var10 + var13;
    var26 = var11;
    var10 = new var26[var12](var25, var24);
    var10 = var10 instanceof Object ? var10 : var11;
    var3.hsla = var10;
    var8 = var8.RegExp;
    var7 = var9.bind(var0)(var7, var6, var6);
    var6 = 'hwb';
    var25 = var6 + var7;
    var7 = var8.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var8
        }
    });
    var26 = var7;
    var6 = new var26[var8](var25, var24);
    var6 = var6 instanceof Object ? var6 : var7;
    var3.hwb = var6;
    var6 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
    var3.hex3 = var6;
    var6 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
    var3.hex4 = var6;
    var6 = /^#([0-9a-fA-F]{6})$/;
    var3.hex6 = var6;
    var6 = /^#([0-9a-fA-F]{8})$/;
    var3.hex8 = var6;
    var _closure1_slot0 = var3;
    var3 = {};
    var6 = 'function hue2rgb_Pnpm_ColorsTs1(p,q,t){if(t<0){t+=1;}if(t>1){t-=1;}if(t<1/6){return p+(q-p)*6*t;}if(t<1/2){return q;}if(t<2/3){return p+(q-p)*(2/3-t)*6;}return p;}';
    var3.code = var6;
    var _closure1_slot1 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2() {
            _fun33630: for (var _fun33630_ip = 0;;) switch (_fun33630_ip) {
                case 0:
                    var2 = arg0;
                    var1 = arg1;
                    var3 = arg2;
                    var0 = 0;
                    var4 = var3;
                    if (!(var4 < var0)) {
                        _fun33630_ip = 25;
                        continue _fun33630
                    }
                case 18:
                    var0 = 1;
                    var4 = var3 + var0;
                case 25:
                    var0 = 1;
                    var3 = var4;
                    if (!(var3 > var0)) {
                        _fun33630_ip = 39;
                        continue _fun33630
                    }
                case 35:
                    var3 = var4 - var0;
                case 39:
                    var0 = 0.16666666666666666;
                    if (!(!(var3 < var0))) {
                        _fun33630_ip = 115;
                        continue _fun33630
                    }
                case 53:
                    var4 = 0.5;
                    var0 = var1;
                    if (!(!(var3 < var4))) {
                        _fun33630_ip = 113;
                        continue _fun33630
                    }
                case 70:
                    var5 = 0.6666666666666666;
                    var4 = var2;
                    if (!(var3 < var5)) {
                        _fun33630_ip = 110;
                        continue _fun33630
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
                    _fun33630_ip = 134;
                    continue _fun33630;
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
        var1 = {};
        var0.__closure = var1;
        var1 = 13577481829661.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot1;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot2 = var3;
    var3 = {};
    var6 = 'function hslToRgb_Pnpm_ColorsTs2(h,s,l){const{hue2rgb}=this.__closure;const q=l<0.5?l*(1+s):l+s-l*s;const p=2*l-q;const r=hue2rgb(p,q,h+1/3);const g=hue2rgb(p,q,h);const b=hue2rgb(p,q,h-1/3);return Math.round(r*255)<<24|Math.round(g*255)<<16|Math.round(b*255)<<8;}';
    var3.code = var6;
    var _closure1_slot3 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2() {
            _fun33632: for (var _fun33632_ip = 0;;) switch (_fun33632_ip) {
                case 0:
                    var7 = arg0;
                    var2 = arg1;
                    var1 = arg2;
                    var0 = 0.5;
                    if (!(!(var1 < var0))) {
                        _fun33632_ip = 37;
                        continue _fun33632
                    }
                case 23:
                    var3 = var1 + var2;
                    var0 = var1 * var2;
                    var6 = var3 - var0;
                    _fun33632_ip = 48;
                    continue _fun33632;
                case 37:
                    var0 = 1;
                    var0 = var0 + var2;
                    var6 = var1 * var0;
                case 48:
                    var0 = 2;
                    var0 = var0 * var1;
                    var5 = var0 - var6;
                    var4 = _closure1_slot2;
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
        var2 = {};
        var3 = _closure1_slot2;
        var2.hue2rgb = var3;
        var0.__closure = var2;
        var2 = 1406907784351.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot3;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot4 = var3;
    var3 = {};
    var6 = 'function hwbToRgb_Pnpm_ColorsTs3(h,w,b){const{hue2rgb}=this.__closure;if(w+b>=1){const gray=Math.round(w*255/(w+b));return gray<<24|gray<<16|gray<<8;}const red=hue2rgb(0,1,h+1/3)*(1-w-b)+w;const green=hue2rgb(0,1,h)*(1-w-b)+w;const blue=hue2rgb(0,1,h-1/3)*(1-w-b)+w;return Math.round(red*255)<<24|Math.round(green*255)<<16|Math.round(blue*255)<<8;}';
    var3.code = var6;
    var _closure1_slot5 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2() {
            _fun33634: for (var _fun33634_ip = 0;;) switch (_fun33634_ip) {
                case 0:
                    var9 = arg0;
                    var4 = arg1;
                    var0 = arg2;
                    var1 = var4 + var0;
                    var2 = 1;
                    if (!(!(var1 >= var2))) {
                        _fun33634_ip = 217;
                        continue _fun33634
                    }
                case 23:
                    var8 = _closure1_slot2;
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
        var2 = {};
        var3 = _closure1_slot2;
        var2.hue2rgb = var3;
        var0.__closure = var2;
        var2 = 16684751503669.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot5;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = 'function parse255_Pnpm_ColorsTs4(str){const int=Number.parseInt(str,10);if(int<0){return 0;}if(int>255){return 255;}return int;}';
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun33636: for (var _fun33636_ip = 0;;) switch (_fun33636_ip) {
                case 0:
                    var0 = global;
                    var3 = var0.Number;
                    var2 = var3.parseInt;
                    var1 = arg0;
                    var0 = 10;
                    var2 = var2.bind(var3)(var1, var0);
                    var0 = 0;
                    var1 = var2 < var0;
                    if (var1) {
                        _fun33636_ip = 51;
                        continue _fun33636
                    }
                case 35:
                    var1 = 255;
                    var3 = var2 > var1;
                    if (var3) {
                        _fun33636_ip = 48;
                        continue _fun33636
                    }
                case 45:
                    var1 = var2;
                case 48:
                    var0 = var1;
                case 51:
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 1908258547020.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot7;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 'function parse360_Pnpm_ColorsTs5(str){const int=Number.parseFloat(str);return(int%360+360)%360/360;}';
    var3.code = var6;
    var _closure1_slot9 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            var0 = global;
            var2 = var0.Number;
            var1 = var2.parseFloat;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var1 = 360;
            var0 = var0 % var1;
            var0 = var0 + var1;
            var0 = var0 % var1;
            var0 = var0 / var1;
            return var0;
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 15674458953827.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot9;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 'function parse1_Pnpm_ColorsTs6(str){const num=Number.parseFloat(str);if(num<0){return 0;}if(num>1){return 255;}return Math.round(num*255);}';
    var3.code = var6;
    var _closure1_slot11 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun33640: for (var _fun33640_ip = 0;;) switch (_fun33640_ip) {
                case 0:
                    var3 = global;
                    var2 = var3.Number;
                    var1 = var2.parseFloat;
                    var0 = arg0;
                    var5 = var1.bind(var2)(var0);
                    var0 = 0;
                    var1 = var5 < var0;
                    if (var1) {
                        _fun33640_ip = 70;
                        continue _fun33640
                    }
                case 31:
                    var1 = 1;
                    var4 = var5 > var1;
                    var2 = 255;
                    var1 = var2;
                    if (var4) {
                        _fun33640_ip = 67;
                        continue _fun33640
                    }
                case 47:
                    var4 = var3.Math;
                    var3 = var4.round;
                    var2 = var2 * var5;
                    var1 = var3.bind(var4)(var2);
                case 67:
                    var0 = var1;
                case 70:
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 1305446443589.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot11;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = 'function parsePercentage_Pnpm_ColorsTs7(str){const int=Number.parseFloat(str);if(int<0){return 0;}if(int>100){return 1;}return int/100;}';
    var3.code = var6;
    var _closure1_slot13 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun33642: for (var _fun33642_ip = 0;;) switch (_fun33642_ip) {
                case 0:
                    var0 = global;
                    var2 = var0.Number;
                    var1 = var2.parseFloat;
                    var0 = arg0;
                    var3 = var1.bind(var2)(var0);
                    var0 = 0;
                    var1 = var3 < var0;
                    if (var1) {
                        _fun33642_ip = 51;
                        continue _fun33642
                    }
                case 31:
                    var2 = 100;
                    var4 = var3 > var2;
                    var1 = 1;
                    if (var4) {
                        _fun33642_ip = 48;
                        continue _fun33642
                    }
                case 44:
                    var1 = var3 / var2;
                case 48:
                    var0 = var1;
                case 51:
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 3056354218613.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot13;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot14 = var3;
    var3 = {};
    var6 = 'function clampRGBA_Pnpm_ColorsTs8(RGBA){for(let i=0;i<4;i++){RGBA[i]=Math.max(0,Math.min(RGBA[i],1));}}';
    var3.code = var6;
    var _closure1_slot15 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun33644: for (var _fun33644_ip = 0;;) switch (_fun33644_ip) {
                case 0:
                    var5 = arg0;
                    var4 = 0;
                    var3 = global;
                    var2 = 1;
                    var1 = 4;
                    var0 = 0;
                case 15:
                    var8 = var3.Math;
                    var7 = var8.max;
                    var10 = var3.Math;
                    var9 = var10.min;
                    var6 = var5[var0];
                    var6 = var9.bind(var10)(var6, var2);
                    var6 = var7.bind(var8)(var4, var6);
                    var5[var0] = var6;
                    var0 = var0 + 1;
                    if (var0 < var1) {
                        _fun33644_ip = 15;
                        continue _fun33644
                    }
                case 64:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 13575809516663.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot15;
        var0.__initData = var1;
        return var0;
    };
    var19 = var3.bind(var0)();
    var3 = 0;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.makeShareable;
    var6 = {
        'transparent': 0,
        'aliceblue': 4042850303.0,
        'antiquewhite': 4209760255.0,
        'aqua': 16777215,
        'aquamarine': 2147472639,
        'azure': 4043309055.0,
        'beige': 4126530815.0,
        'bisque': 4293182719.0,
        'black': 255,
        'blanchedalmond': 4293643775.0,
        'blue': 65535,
        'blueviolet': 2318131967.0,
        'brown': 2771004159.0,
        'burlywood': 3736635391.0,
        'burntsienna': 3934150143.0,
        'cadetblue': 1604231423,
        'chartreuse': 2147418367,
        'chocolate': 3530104575.0,
        'coral': 4286533887.0,
        'cornflowerblue': 1687547391,
        'cornsilk': 4294499583.0,
        'crimson': 3692313855.0,
        'cyan': 16777215,
        'darkblue': 35839,
        'darkcyan': 9145343,
        'darkgoldenrod': 3095792639.0,
        'darkgray': 2846468607.0,
        'darkgreen': 6553855,
        'darkgrey': 2846468607.0,
        'darkkhaki': 3182914559.0,
        'darkmagenta': 2332068863.0,
        'darkolivegreen': 1433087999,
        'darkorange': 4287365375.0,
        'darkorchid': 2570243327.0,
        'darkred': 2332033279.0,
        'darksalmon': 3918953215.0,
        'darkseagreen': 2411499519.0,
        'darkslateblue': 1211993087,
        'darkslategray': 793726975,
        'darkslategrey': 793726975,
        'darkturquoise': 13554175,
        'darkviolet': 2483082239.0,
        'deeppink': 4279538687.0,
        'deepskyblue': 12582911,
        'dimgray': 1768516095,
        'dimgrey': 1768516095,
        'dodgerblue': 512819199,
        'firebrick': 2988581631.0,
        'floralwhite': 4294635775.0,
        'forestgreen': 579543807,
        'fuchsia': 4278255615.0,
        'gainsboro': 3705462015.0,
        'ghostwhite': 4177068031.0,
        'gold': 4292280575.0,
        'goldenrod': 3668254975.0,
        'gray': 2155905279.0,
        'green': 8388863,
        'greenyellow': 2919182335.0,
        'grey': 2155905279.0,
        'honeydew': 4043305215.0,
        'hotpink': 4285117695.0,
        'indianred': 3445382399.0,
        'indigo': 1258324735,
        'ivory': 4294963455.0,
        'khaki': 4041641215.0,
        'lavender': 3873897215.0,
        'lavenderblush': 4293981695.0,
        'lawngreen': 2096890111,
        'lemonchiffon': 4294626815.0,
        'lightblue': 2916673279.0,
        'lightcoral': 4034953471.0,
        'lightcyan': 3774873599.0,
        'lightgoldenrodyellow': 4210742015.0,
        'lightgray': 3553874943.0,
        'lightgreen': 2431553791.0,
        'lightgrey': 3553874943.0,
        'lightpink': 4290167295.0,
        'lightsalmon': 4288707327.0,
        'lightseagreen': 548580095,
        'lightskyblue': 2278488831.0,
        'lightslategray': 2005441023,
        'lightslategrey': 2005441023,
        'lightsteelblue': 2965692159.0,
        'lightyellow': 4294959359.0,
        'lime': 16711935,
        'limegreen': 852308735,
        'linen': 4210091775.0,
        'magenta': 4278255615.0,
        'maroon': 2147483903.0,
        'mediumaquamarine': 1724754687,
        'mediumblue': 52735,
        'mediumorchid': 3126187007.0,
        'mediumpurple': 2473647103.0,
        'mediumseagreen': 1018393087,
        'mediumslateblue': 2070474495,
        'mediumspringgreen': 16423679,
        'mediumturquoise': 1221709055,
        'mediumvioletred': 3340076543.0,
        'midnightblue': 421097727,
        'mintcream': 4127193855.0,
        'mistyrose': 4293190143.0,
        'moccasin': 4293178879.0,
        'navajowhite': 4292783615.0,
        'navy': 33023,
        'oldlace': 4260751103.0,
        'olive': 2155872511.0,
        'olivedrab': 1804477439,
        'orange': 4289003775.0,
        'orangered': 4282712319.0,
        'orchid': 3664828159.0,
        'palegoldenrod': 4008225535.0,
        'palegreen': 2566625535.0,
        'paleturquoise': 2951671551.0,
        'palevioletred': 3681588223.0,
        'papayawhip': 4293907967.0,
        'peachpuff': 4292524543.0,
        'peru': 3448061951.0,
        'pink': 4290825215.0,
        'plum': 3718307327.0,
        'powderblue': 2967529215.0,
        'purple': 2147516671.0,
        'rebeccapurple': 1714657791,
        'red': 4278190335.0,
        'rosybrown': 3163525119.0,
        'royalblue': 1097458175,
        'saddlebrown': 2336560127.0,
        'salmon': 4202722047.0,
        'sandybrown': 4104413439.0,
        'seagreen': 780883967,
        'seashell': 4294307583.0,
        'sienna': 2689740287.0,
        'silver': 3233857791.0,
        'skyblue': 2278484991.0,
        'slateblue': 1784335871,
        'slategray': 1887473919,
        'slategrey': 1887473919,
        'snow': 4294638335.0,
        'springgreen': 16744447,
        'steelblue': 1182971135,
        'tan': 3535047935.0,
        'teal': 8421631,
        'thistle': 3636451583.0,
        'tomato': 4284696575.0,
        'turquoise': 1088475391,
        'violet': 4001558271.0,
        'wheat': 4125012991.0,
        'white': 4294967295.0,
        'whitesmoke': 4126537215.0,
        'yellow': 4294902015.0,
        'yellowgreen': 2597139199.0
    };
    var6 = var7.bind(var8)(var6);
    var _closure1_slot16 = var6;
    var6 = var5[var3];
    var8 = var4.bind(var0)(var6);
    var7 = var8.makeShareable;
    var6 = ['backgroundColor', 'borderBottomColor', 'borderColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'borderStartColor', 'borderEndColor', 'borderBlockColor', 'borderBlockEndColor', 'borderBlockStartColor', 'color', 'outlineColor', 'shadowColor', 'textDecorationColor', 'tintColor', 'textShadowColor', 'overlayColor', 'fill', 'floodColor', 'lightingColor', 'stopColor', 'stroke'];
    var18 = var7.bind(var8)(var6);
    var _closure1_slot17 = var18;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.makeShareable;
    var3 = {};
    var8 = 'color';
    var3.boxShadow = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot18 = var3;
    var3 = {};
    var6 = "function normalizeColor_Pnpm_ColorsTs9(color){const{MATCHERS,names,parse255,parse1,hslToRgb,parse360,parsePercentage,hwbToRgb}=this.__closure;if(typeof color==='number'){if(color>>>0===color&&color>=0&&color<=0xffffffff){return color;}return null;}if(typeof color!=='string'){return null;}let match;if(match=MATCHERS.hex6.exec(color)){return Number.parseInt(match[1]+'ff',16)>>>0;}if(names[color]!==undefined){return names[color];}if(match=MATCHERS.rgb.exec(color)){return((parse255(match[1])<<24|parse255(match[2])<<16|parse255(match[3])<<8|0x000000ff)>>>0);}if(match=MATCHERS.rgba.exec(color)){if(match[6]!==undefined){return(parse255(match[6])<<24|parse255(match[7])<<16|parse255(match[8])<<8|parse1(match[9]))>>>0;}return(parse255(match[2])<<24|parse255(match[3])<<16|parse255(match[4])<<8|parse1(match[5]))>>>0;}if(match=MATCHERS.hex3.exec(color)){return Number.parseInt(match[1]+match[1]+match[2]+match[2]+match[3]+match[3]+'ff',16)>>>0;}if(match=MATCHERS.hex8.exec(color)){return Number.parseInt(match[1],16)>>>0;}if(match=MATCHERS.hex4.exec(color)){return Number.parseInt(match[1]+match[1]+match[2]+match[2]+match[3]+match[3]+match[4]+match[4],16)>>>0;}if(match=MATCHERS.hsl.exec(color)){return(hslToRgb(parse360(match[1]),parsePercentage(match[2]),parsePercentage(match[3]))|0x000000ff)>>>0;}if(match=MATCHERS.hsla.exec(color)){if(match[6]!==undefined){return(hslToRgb(parse360(match[6]),parsePercentage(match[7]),parsePercentage(match[8]))|parse1(match[9]))>>>0;}return(hslToRgb(parse360(match[2]),parsePercentage(match[3]),parsePercentage(match[4]))|parse1(match[5]))>>>0;}if(match=MATCHERS.hwb.exec(color)){return(hwbToRgb(parse360(match[1]),parsePercentage(match[2]),parsePercentage(match[3]))|0x000000ff)>>>0;}return null;}";
    var3.code = var6;
    var _closure1_slot19 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun33646: for (var _fun33646_ip = 0;;) switch (_fun33646_ip) {
                case 0:
                    var2 = arg0;
                    var4 = typeof var2;
                    var0 = 'number';
                    if (!(var0 !== var4)) {
                        _fun33646_ip = 1190;
                        continue _fun33646
                    }
                case 17:
                    var3 = 'string';
                    var0 = null;
                    if (!(var3 === var4)) {
                        _fun33646_ip = 1188;
                        continue _fun33646
                    }
                case 30:
                    var4 = _closure1_slot0;
                    var5 = var4.hex6;
                    var4 = var5.exec;
                    var4 = var4.bind(var5)(var2);
                    if (var4) {
                        _fun33646_ip = 1141;
                        continue _fun33646
                    }
                case 60:
                    var5 = _closure1_slot16;
                    var5 = var5[var2];
                    var9 = undefined;
                    if (!(var9 === var5)) {
                        _fun33646_ip = 1131;
                        continue _fun33646
                    }
                case 77:
                    var5 = _closure1_slot0;
                    var6 = var5.rgb;
                    var5 = var6.exec;
                    var10 = var5.bind(var6)(var2);
                    if (var10) {
                        _fun33646_ip = 1047;
                        continue _fun33646
                    }
                case 104:
                    var5 = _closure1_slot0;
                    var6 = var5.rgba;
                    var5 = var6.exec;
                    var13 = var5.bind(var6)(var2);
                    if (var13) {
                        _fun33646_ip = 845;
                        continue _fun33646
                    }
                case 131:
                    var5 = _closure1_slot0;
                    var6 = var5.hex3;
                    var5 = var6.exec;
                    var11 = var5.bind(var6)(var2);
                    if (var11) {
                        _fun33646_ip = 750;
                        continue _fun33646
                    }
                case 158:
                    var5 = _closure1_slot0;
                    var6 = var5.hex8;
                    var5 = var6.exec;
                    var6 = var5.bind(var6)(var2);
                    if (var6) {
                        _fun33646_ip = 712;
                        continue _fun33646
                    }
                case 185:
                    var5 = _closure1_slot0;
                    var7 = var5.hex4;
                    var5 = var7.exec;
                    var14 = var5.bind(var7)(var2);
                    if (var14) {
                        _fun33646_ip = 609;
                        continue _fun33646
                    }
                case 212:
                    var5 = _closure1_slot0;
                    var7 = var5.hsl;
                    var5 = var7.exec;
                    var16 = var5.bind(var7)(var2);
                    if (var16) {
                        _fun33646_ip = 539;
                        continue _fun33646
                    }
                case 239:
                    var5 = _closure1_slot0;
                    var7 = var5.hsla;
                    var5 = var7.exec;
                    var15 = var5.bind(var7)(var2);
                    if (var15) {
                        _fun33646_ip = 362;
                        continue _fun33646
                    }
                case 263:
                    var5 = _closure1_slot0;
                    var7 = var5.hwb;
                    var5 = var7.exec;
                    var18 = var5.bind(var7)(var2);
                    var1 = null;
                    if (!var18) {
                        _fun33646_ip = 357;
                        continue _fun33646
                    }
                case 289:
                    var12 = _closure1_slot6;
                    var7 = _closure1_slot10;
                    var5 = 1;
                    var5 = var18[var5];
                    var8 = var7.bind(var9)(var5);
                    var17 = _closure1_slot14;
                    var5 = 2;
                    var5 = var18[var5];
                    var7 = var17.bind(var9)(var5);
                    var5 = 3;
                    var5 = var18[var5];
                    var5 = var17.bind(var9)(var5);
                    var7 = var12.bind(var9)(var8, var7, var5);
                    var5 = 255;
                    var7 = var5 | var7;
                    var5 = 0;
                    var1 = var7 >>> var5;
                case 357:
                    _fun33646_ip = 537;
                    continue _fun33646;
                case 362:
                    var7 = 6;
                    var5 = var15[var7];
                    if (!(var9 === var5)) {
                        _fun33646_ip = 456;
                        continue _fun33646
                    }
                case 373:
                    var17 = _closure1_slot4;
                    var8 = _closure1_slot10;
                    var5 = 2;
                    var5 = var15[var5];
                    var12 = var8.bind(var9)(var5);
                    var18 = _closure1_slot14;
                    var5 = 3;
                    var5 = var15[var5];
                    var8 = var18.bind(var9)(var5);
                    var5 = 4;
                    var5 = var15[var5];
                    var5 = var18.bind(var9)(var5);
                    var8 = var17.bind(var9)(var12, var8, var5);
                    var12 = _closure1_slot12;
                    var5 = 5;
                    var5 = var15[var5];
                    var5 = var12.bind(var9)(var5);
                    var8 = var8 | var5;
                    var5 = 0;
                    var5 = var8 >>> var5;
                    _fun33646_ip = 534;
                    continue _fun33646;
                case 456:
                    var17 = _closure1_slot4;
                    var8 = _closure1_slot10;
                    var7 = var15[var7];
                    var12 = var8.bind(var9)(var7);
                    var18 = _closure1_slot14;
                    var7 = 7;
                    var7 = var15[var7];
                    var8 = var18.bind(var9)(var7);
                    var7 = 8;
                    var7 = var15[var7];
                    var7 = var18.bind(var9)(var7);
                    var8 = var17.bind(var9)(var12, var8, var7);
                    var12 = _closure1_slot12;
                    var7 = 9;
                    var7 = var15[var7];
                    var7 = var12.bind(var9)(var7);
                    var8 = var8 | var7;
                    var7 = 0;
                    var5 = var8 >>> var7;
                case 534:
                    var1 = var5;
                case 537:
                    _fun33646_ip = 607;
                    continue _fun33646;
                case 539:
                    var12 = _closure1_slot4;
                    var7 = _closure1_slot10;
                    var5 = 1;
                    var5 = var16[var5];
                    var8 = var7.bind(var9)(var5);
                    var15 = _closure1_slot14;
                    var5 = 2;
                    var5 = var16[var5];
                    var7 = var15.bind(var9)(var5);
                    var5 = 3;
                    var5 = var16[var5];
                    var5 = var15.bind(var9)(var5);
                    var7 = var12.bind(var9)(var8, var7, var5);
                    var5 = 255;
                    var7 = var5 | var7;
                    var5 = 0;
                    var1 = var7 >>> var5;
                case 607:
                    _fun33646_ip = 710;
                    continue _fun33646;
                case 609:
                    var5 = global;
                    var12 = var5.Number;
                    var8 = var12.parseInt;
                    var5 = 1;
                    var7 = var14[var5];
                    var5 = var14[var5];
                    var15 = var7 + var5;
                    var5 = 2;
                    var7 = var14[var5];
                    var7 = var15 + var7;
                    var5 = var14[var5];
                    var15 = var7 + var5;
                    var5 = 3;
                    var7 = var14[var5];
                    var7 = var15 + var7;
                    var5 = var14[var5];
                    var15 = var7 + var5;
                    var5 = 4;
                    var7 = var14[var5];
                    var7 = var15 + var7;
                    var5 = var14[var5];
                    var7 = var7 + var5;
                    var5 = 16;
                    var7 = var8.bind(var12)(var7, var5);
                    var5 = 0;
                    var1 = var7 >>> var5;
                case 710:
                    _fun33646_ip = 748;
                    continue _fun33646;
                case 712:
                    var5 = global;
                    var8 = var5.Number;
                    var7 = var8.parseInt;
                    var5 = 1;
                    var6 = var6[var5];
                    var5 = 16;
                    var6 = var7.bind(var8)(var6, var5);
                    var5 = 0;
                    var1 = var6 >>> var5;
                case 748:
                    _fun33646_ip = 840;
                    continue _fun33646;
                case 750:
                    var5 = global;
                    var8 = var5.Number;
                    var7 = var8.parseInt;
                    var5 = 1;
                    var6 = var11[var5];
                    var5 = var11[var5];
                    var12 = var6 + var5;
                    var5 = 2;
                    var6 = var11[var5];
                    var6 = var12 + var6;
                    var5 = var11[var5];
                    var12 = var6 + var5;
                    var5 = 3;
                    var6 = var11[var5];
                    var6 = var12 + var6;
                    var5 = var11[var5];
                    var6 = var6 + var5;
                    var5 = 'ff';
                    var6 = var6 + var5;
                    var5 = 16;
                    var6 = var7.bind(var8)(var6, var5);
                    var5 = 0;
                    var1 = var6 >>> var5;
                case 840:
                    _fun33646_ip = 1045;
                    continue _fun33646;
                case 845:
                    var6 = 6;
                    var5 = var13[var6];
                    if (!(var9 === var5)) {
                        _fun33646_ip = 953;
                        continue _fun33646
                    }
                case 856:
                    var8 = _closure1_slot8;
                    var5 = 2;
                    var5 = var13[var5];
                    var7 = var8.bind(var9)(var5);
                    var5 = 24;
                    var11 = var7 << var5;
                    var5 = 3;
                    var5 = var13[var5];
                    var7 = var8.bind(var9)(var5);
                    var5 = 16;
                    var5 = var7 << var5;
                    var7 = 4;
                    var7 = var13[var7];
                    var8 = var8.bind(var9)(var7);
                    var7 = 8;
                    var8 = var8 << var7;
                    var12 = _closure1_slot12;
                    var7 = 5;
                    var7 = var13[var7];
                    var7 = var12.bind(var9)(var7);
                    var5 = var11 | var5;
                    var5 = var5 | var8;
                    var7 = var5 | var7;
                    var5 = 0;
                    var5 = var7 >>> var5;
                    _fun33646_ip = 1042;
                    continue _fun33646;
                case 953:
                    var12 = _closure1_slot8;
                    var6 = var13[var6];
                    var7 = var12.bind(var9)(var6);
                    var6 = 24;
                    var11 = var7 << var6;
                    var6 = 7;
                    var6 = var13[var6];
                    var7 = var12.bind(var9)(var6);
                    var6 = 16;
                    var6 = var7 << var6;
                    var8 = 8;
                    var7 = var13[var8];
                    var7 = var12.bind(var9)(var7);
                    var8 = var7 << var8;
                    var12 = _closure1_slot12;
                    var7 = 9;
                    var7 = var13[var7];
                    var7 = var12.bind(var9)(var7);
                    var6 = var11 | var6;
                    var6 = var6 | var8;
                    var7 = var6 | var7;
                    var6 = 0;
                    var5 = var7 >>> var6;
                case 1042:
                    var1 = var5;
                case 1045:
                    _fun33646_ip = 1129;
                    continue _fun33646;
                case 1047:
                    var8 = _closure1_slot8;
                    var5 = 1;
                    var5 = var10[var5];
                    var6 = var8.bind(var9)(var5);
                    var5 = 24;
                    var7 = var6 << var5;
                    var5 = 2;
                    var5 = var10[var5];
                    var6 = var8.bind(var9)(var5);
                    var5 = 16;
                    var5 = var6 << var5;
                    var6 = 3;
                    var6 = var10[var6];
                    var8 = var8.bind(var9)(var6);
                    var6 = 8;
                    var6 = var8 << var6;
                    var5 = var7 | var5;
                    var6 = var5 | var6;
                    var5 = 255;
                    var6 = var6 | var5;
                    var5 = 0;
                    var1 = var6 >>> var5;
                case 1129:
                    _fun33646_ip = 1139;
                    continue _fun33646;
                case 1131:
                    var3 = _closure1_slot16;
                    var1 = var3[var2];
                case 1139:
                    _fun33646_ip = 1185;
                    continue _fun33646;
                case 1141:
                    var3 = global;
                    var6 = var3.Number;
                    var5 = var6.parseInt;
                    var3 = 1;
                    var4 = var4[var3];
                    var3 = 'ff';
                    var4 = var4 + var3;
                    var3 = 16;
                    var4 = var5.bind(var6)(var4, var3);
                    var3 = 0;
                    var1 = var4 >>> var3;
                case 1185:
                    var0 = var1;
                case 1188:
                    _fun33646_ip = 1236;
                    continue _fun33646;
                case 1190:
                    var3 = 0;
                    var5 = var2 >>> var3;
                    var1 = null;
                    if (!(var5 === var2)) {
                        _fun33646_ip = 1233;
                        continue _fun33646
                    }
                case 1202:
                    var3 = var2 >= var3;
                    var1 = null;
                    if (!var3) {
                        _fun33646_ip = 1233;
                        continue _fun33646
                    }
                case 1211:
                    var3 = 4294967295.0;
                    var3 = var2 <= var3;
                    var1 = null;
                    if (!var3) {
                        _fun33646_ip = 1233;
                        continue _fun33646
                    }
                case 1230:
                    var1 = var2;
                case 1233:
                    var0 = var1;
                case 1236:
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot0;
        var2.MATCHERS = var3;
        var3 = _closure1_slot16;
        var2.names = var3;
        var3 = _closure1_slot8;
        var2.parse255 = var3;
        var3 = _closure1_slot12;
        var2.parse1 = var3;
        var3 = _closure1_slot4;
        var2.hslToRgb = var3;
        var3 = _closure1_slot10;
        var2.parse360 = var3;
        var3 = _closure1_slot14;
        var2.parsePercentage = var3;
        var3 = _closure1_slot6;
        var2.hwbToRgb = var3;
        var0.__closure = var2;
        var2 = 13656798455904.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot19;
        var0.__initData = var1;
        return var0;
    };
    var17 = var3.bind(var0)();
    var _closure1_slot20 = var17;
    var3 = {};
    var6 = 'function pnpm_ColorsTs10(c){return(c>>24&255)/255;}';
    var3.code = var6;
    var16 = function arg0() {
        var1 = arg0;
        var0 = 24;
        var0 = var1 >> var0;
        var1 = 255;
        var0 = var0 & var1;
        var0 = var0 / var1;
        return var0;
    };
    var6 = {};
    var16.__closure = var6;
    var6 = 5651263271273.0;
    var16.__workletHash = var6;
    var16.__initData = var3;
    var3 = {};
    var6 = 'function pnpm_ColorsTs11(c){return c>>16&255;}';
    var3.code = var6;
    var15 = function arg0() {
        var1 = arg0;
        var0 = 16;
        var1 = var1 >> var0;
        var0 = 255;
        var0 = var1 & var0;
        return var0;
    };
    var6 = {};
    var15.__closure = var6;
    var6 = 10831766115157.0;
    var15.__workletHash = var6;
    var15.__initData = var3;
    var3 = {};
    var6 = 'function pnpm_ColorsTs12(c){return c>>8&255;}';
    var3.code = var6;
    var14 = function arg0() {
        var1 = arg0;
        var0 = 8;
        var1 = var1 >> var0;
        var0 = 255;
        var0 = var1 & var0;
        return var0;
    };
    var6 = {};
    var14.__closure = var6;
    var6 = 3551227549865.0;
    var14.__workletHash = var6;
    var14.__initData = var3;
    var3 = {};
    var6 = 'function pnpm_ColorsTs13(c){return c&255;}';
    var3.code = var6;
    var13 = function arg0() {
        var1 = 255;
        var0 = arg0;
        var0 = var1 & var0;
        return var0;
    };
    var6 = {};
    var13.__closure = var6;
    var6 = 8634480727248.0;
    var13.__workletHash = var6;
    var13.__initData = var3;
    var3 = {};
    var6 = 'function pnpm_ColorsTs14(r,g,b,alpha=1){const safeAlpha=alpha<0.001?0:alpha;return"rgba("+r+", "+g+", "+b+", "+safeAlpha+")";}';
    var3.code = var6;
    var12 = function arg0, arg1, arg2() {
        _fun33651: for (var _fun33651_ip = 0;;) switch (_fun33651_ip) {
            case 0:
                var4 = undefined;
                var2 = undefined;
                var0 = arguments.length;
                var1 = 3;
                var3 = var0 > var1;
                var5 = 1;
                var0 = var5;
                if (!var3) {
                    _fun33651_ip = 38;
                    continue _fun33651
                }
            case 23:
                var3 = arguments[var1];
                var0 = var5;
                if (!(var4 !== var3)) {
                    _fun33651_ip = 38;
                    continue _fun33651
                }
            case 34:
                var0 = arguments[var1];
            case 38:
                var1 = 0.001;
                var1 = var0 < var1;
                var7 = 0;
                if (var1) {
                    _fun33651_ip = 60;
                    continue _fun33651
                }
            case 57:
                var7 = var0;
            case 60:
                var0 = global;
                var0 = var0.HermesInternal;
                var6 = var0.concat;
                var16 = 'rgba(';
                var15 = arg0;
                var3 = ', ';
                var13 = arg1;
                var11 = arg2;
                var8 = ')';
                var14 = var3;
                var12 = var3;
                var10 = var3;
                var9 = var7;
                var0 = var16[var6](var15, var14, var13, var12, var11, var10, var9, var8, var7);
                return var0;
        }
    };
    var6 = {};
    var12.__closure = var6;
    var6 = 14577013878569.0;
    var12.__workletHash = var6;
    var12.__initData = var3;
    var _closure1_slot21 = var12;
    var3 = {};
    var6 = 'function RGBtoHSV_Pnpm_ColorsTs15(r,g,b){const max=Math.max(r,g,b);const min=Math.min(r,g,b);const d=max-min;const s=max===0?0:d/max;const v=max/255;let h=0;switch(max){case min:break;case r:h=g-b+d*(g<b?6:0);h/=6*d;break;case g:h=b-r+d*2;h/=6*d;break;case b:h=r-g+d*4;h/=6*d;break;}return{h:h,s:s,v:v};}';
    var3.code = var6;
    var _closure1_slot22 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2() {
            _fun33653: for (var _fun33653_ip = 0;;) switch (_fun33653_ip) {
                case 0:
                    var4 = arg0;
                    var7 = arg1;
                    var6 = arg2;
                    var0 = global;
                    var2 = var0.Math;
                    var1 = var2.max;
                    var8 = var1.bind(var2)(var4, var7, var6);
                    var1 = var0.Math;
                    var0 = var1.min;
                    var9 = var0.bind(var1)(var4, var7, var6);
                    var5 = var8 - var9;
                    var0 = 0;
                    var2 = 0;
                    if (!(var0 !== var8)) {
                        _fun33653_ip = 63;
                        continue _fun33653
                    }
                case 59:
                    var2 = var5 / var8;
                case 63:
                    var1 = 255;
                    var1 = var8 / var1;
                    var3 = 0;
                    if (!(var9 !== var8)) {
                        _fun33653_ip = 181;
                        continue _fun33653
                    }
                case 76:
                    if (!(var4 !== var8)) {
                        _fun33653_ip = 146;
                        continue _fun33653
                    }
                case 80:
                    if (!(var7 !== var8)) {
                        _fun33653_ip = 118;
                        continue _fun33653
                    }
                case 84:
                    var3 = 0;
                    if (!(var6 === var8)) {
                        _fun33653_ip = 181;
                        continue _fun33653
                    }
                case 90:
                    var9 = var4 - var7;
                    var8 = 4;
                    var8 = var8 * var5;
                    var9 = var9 + var8;
                    var8 = 6;
                    var8 = var8 * var5;
                    var3 = var9 / var8;
                    _fun33653_ip = 181;
                    continue _fun33653;
                case 118:
                    var8 = var6 - var4;
                    var4 = 2;
                    var4 = var4 * var5;
                    var8 = var8 + var4;
                    var4 = 6;
                    var4 = var4 * var5;
                    var3 = var8 / var4;
                    _fun33653_ip = 181;
                    continue _fun33653;
                case 146:
                    var4 = var7 - var6;
                    var6 = var7 < var6;
                    var0 = 0;
                    if (!var6) {
                        _fun33653_ip = 162;
                        continue _fun33653
                    }
                case 159:
                    var0 = 6;
                case 162:
                    var0 = var5 * var0;
                    var4 = var4 + var0;
                    var0 = 6;
                    var0 = var0 * var5;
                    var3 = var4 / var0;
                case 181:
                    var0 = {};
                    var0.h = var3;
                    var0.s = var2;
                    var0.v = var1;
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 13961093508129.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot22;
        var0.__initData = var1;
        return var0;
    };
    var11 = var3.bind(var0)();
    var3 = {};
    var6 = 'function HSVtoRGB_Pnpm_ColorsTs16(h,s,v){let r,g,b;const i=Math.floor(h*6);const f=h*6-i;const p=v*(1-s);const q=v*(1-f*s);const t=v*(1-(1-f)*s);switch(i%6){case 0:[r,g,b]=[v,t,p];break;case 1:[r,g,b]=[q,v,p];break;case 2:[r,g,b]=[p,v,t];break;case 3:[r,g,b]=[p,q,v];break;case 4:[r,g,b]=[t,p,v];break;case 5:[r,g,b]=[v,p,q];break;}return{r:Math.round(r*255),g:Math.round(g*255),b:Math.round(b*255)};}';
    var3.code = var6;
    var _closure1_slot23 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0, arg1, arg2() {
            _fun33655: for (var _fun33655_ip = 0;;) switch (_fun33655_ip) {
                case 0:
                    var0 = arg0;
                    var8 = arg1;
                    var6 = arg2;
                    var2 = global;
                    var4 = var2.Math;
                    var3 = var4.floor;
                    var5 = 6;
                    var1 = var5 * var0;
                    var4 = var3.bind(var4)(var1);
                    var0 = var5 * var0;
                    var1 = var0 - var4;
                    var3 = 1;
                    var0 = var3 - var8;
                    var0 = var6 * var0;
                    var7 = var1 * var8;
                    var7 = var3 - var7;
                    var7 = var6 * var7;
                    var1 = var3 - var1;
                    var1 = var1 * var8;
                    var1 = var3 - var1;
                    var1 = var6 * var1;
                    var9 = var4 % var5;
                    var4 = 0;
                    if (!(var4 !== var9)) {
                        _fun33655_ip = 185;
                        continue _fun33655
                    }
                case 92:
                    if (!(var3 !== var9)) {
                        _fun33655_ip = 174;
                        continue _fun33655
                    }
                case 96:
                    var3 = 2;
                    if (!(var3 !== var9)) {
                        _fun33655_ip = 163;
                        continue _fun33655
                    }
                case 103:
                    var3 = 3;
                    if (!(var3 !== var9)) {
                        _fun33655_ip = 152;
                        continue _fun33655
                    }
                case 110:
                    var3 = 4;
                    if (!(var3 !== var9)) {
                        _fun33655_ip = 141;
                        continue _fun33655
                    }
                case 117:
                    var5 = undefined;
                    var8 = 5;
                    var3 = undefined;
                    var4 = undefined;
                    if (!(var8 === var9)) {
                        _fun33655_ip = 194;
                        continue _fun33655
                    }
                case 130:
                    var5 = var6;
                    var3 = var0;
                    var4 = var7;
                    _fun33655_ip = 194;
                    continue _fun33655;
                case 141:
                    var5 = var1;
                    var3 = var0;
                    var4 = var6;
                    _fun33655_ip = 194;
                    continue _fun33655;
                case 152:
                    var5 = var0;
                    var3 = var7;
                    var4 = var6;
                    _fun33655_ip = 194;
                    continue _fun33655;
                case 163:
                    var5 = var0;
                    var3 = var6;
                    var4 = var1;
                    _fun33655_ip = 194;
                    continue _fun33655;
                case 174:
                    var5 = var7;
                    var3 = var6;
                    var4 = var0;
                    _fun33655_ip = 194;
                    continue _fun33655;
                case 185:
                    var5 = var6;
                    var3 = var1;
                    var4 = var0;
                case 194:
                    var0 = {};
                    var7 = var2.Math;
                    var6 = var7.round;
                    var1 = 255;
                    var5 = var1 * var5;
                    var5 = var6.bind(var7)(var5);
                    var0.r = var5;
                    var6 = var2.Math;
                    var5 = var6.round;
                    var3 = var1 * var3;
                    var3 = var5.bind(var6)(var3);
                    var0.g = var3;
                    var3 = var2.Math;
                    var2 = var3.round;
                    var1 = var1 * var4;
                    var1 = var2.bind(var3)(var1);
                    var0.b = var1;
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 5232397720804.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot23;
        var0.__initData = var1;
        return var0;
    };
    var7 = var3.bind(var0)();
    var _closure1_slot24 = var7;
    var3 = {};
    var6 = 'function pnpm_ColorsTs17(h,s,v,a){const{HSVtoRGB,rgbaColor}=this.__closure;const{r:r,g:g,b:b}=HSVtoRGB(h,s,v);return rgbaColor(r,g,b,a);}';
    var3.code = var6;
    var10 = function arg0, arg1, arg2, arg3() {
        var4 = _closure1_slot24;
        var5 = undefined;
        var3 = arg0;
        var2 = arg1;
        var1 = arg2;
        var1 = var4.bind(var5)(var3, var2, var1);
        var9 = var1.r;
        var8 = var1.g;
        var7 = var1.b;
        var1 = _closure1_slot21;
        var6 = arg3;
        var10 = undefined;
        var0 = var10[var1](var9, var8, var7, var6, var5);
        return var0;
    };
    var6 = {};
    var6.HSVtoRGB = var7;
    var6.rgbaColor = var12;
    var10.__closure = var6;
    var6 = 16564231422584.0;
    var10.__workletHash = var6;
    var10.__initData = var3;
    var3 = {};
    var6 = "function processColorInitially_Pnpm_ColorsTs18(color){const{normalizeColor}=this.__closure;if(color===null||color===undefined){return color;}let colorNumber;if(typeof color==='number'){colorNumber=color;}else{const normalizedColor=normalizeColor(color);if(normalizedColor===null||normalizedColor===undefined){return undefined;}if(typeof normalizedColor!=='number'){return null;}colorNumber=normalizedColor;}return(colorNumber<<24|colorNumber>>>8)>>>0;}";
    var3.code = var6;
    var _closure1_slot25 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun33658: for (var _fun33658_ip = 0;;) switch (_fun33658_ip) {
                case 0:
                    var0 = arg0;
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun33658_ip = 81;
                        continue _fun33658
                    }
                case 9:
                    var5 = 'number';
                    var1 = typeof var0;
                    var3 = var0;
                    if (!(var5 !== var1)) {
                        _fun33658_ip = 55;
                        continue _fun33658
                    }
                case 23:
                    var4 = _closure1_slot20;
                    var1 = undefined;
                    var6 = var4.bind(var1)(var0);
                    if (!(var2 != var6)) {
                        _fun33658_ip = 53;
                        continue _fun33658
                    }
                case 41:
                    var4 = typeof var6;
                    var3 = var6;
                    if (!(var5 !== var4)) {
                        _fun33658_ip = 55;
                        continue _fun33658
                    }
                case 51:
                    return var2;
                case 53:
                    return var1;
                case 55:
                    var1 = 24;
                    var2 = var3 << var1;
                    var1 = 8;
                    var1 = var3 >>> var1;
                    var2 = var2 | var1;
                    var1 = 0;
                    var1 = var2 >>> var1;
                    return var1;
                case 81:
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot20;
        var2.normalizeColor = var3;
        var0.__closure = var2;
        var2 = 7970244905356.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot25;
        var0.__initData = var1;
        return var0;
    };
    var9 = var3.bind(var0)();
    var _closure1_slot26 = var9;
    var3 = {};
    var6 = "function isColor_Pnpm_ColorsTs19(value){const{processColorInitially}=this.__closure;if(typeof value!=='string'){return false;}return processColorInitially(value)!=null;}";
    var3.code = var6;
    var _closure1_slot27 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun33660: for (var _fun33660_ip = 0;;) switch (_fun33660_ip) {
                case 0:
                    var3 = arg0;
                    var1 = 'string';
                    var0 = typeof var3;
                    var0 = var1 === var0;
                    if (!var0) {
                        _fun33660_ip = 37;
                        continue _fun33660
                    }
                case 17:
                    var2 = _closure1_slot26;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    var1 = null;
                    var0 = var1 != var2;
                case 37:
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot26;
        var2.processColorInitially = var3;
        var0.__closure = var2;
        var2 = 13504829084422.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot27;
        var0.__initData = var1;
        return var0;
    };
    var8 = var3.bind(var0)();
    var3 = 1;
    var3 = var5[var3];
    var4 = var4.bind(var0)(var3);
    var3 = var4.isAndroid;
    var3 = var3.bind(var4)();
    var _closure1_slot28 = var3;
    var3 = {};
    var4 = "function processColor_Pnpm_ColorsTs20(color){const{processColorInitially,IS_ANDROID}=this.__closure;let normalizedColor=processColorInitially(color);if(normalizedColor===null||normalizedColor===undefined){return undefined;}if(typeof normalizedColor!=='number'){return null;}if(IS_ANDROID){normalizedColor=normalizedColor|0x0;}return normalizedColor;}";
    var3.code = var4;
    var _closure1_slot29 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun33662: for (var _fun33662_ip = 0;;) switch (_fun33662_ip) {
                case 0:
                    var2 = _closure1_slot26;
                    var3 = undefined;
                    var0 = arg0;
                    var2 = var2.bind(var3)(var0);
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun33662_ip = 25;
                        continue _fun33662
                    }
                case 23:
                    return var3;
                case 25:
                    var4 = 'number';
                    var3 = typeof var2;
                    var0 = null;
                    if (!(var4 === var3)) {
                        _fun33662_ip = 54;
                        continue _fun33662
                    }
                case 38:
                    var3 = _closure1_slot28;
                    var1 = var2;
                    if (!var3) {
                        _fun33662_ip = 51;
                        continue _fun33662
                    }
                case 48:
                    var1 = var2 | 0;
                case 51:
                    var0 = var1;
                case 54:
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot26;
        var2.processColorInitially = var3;
        var3 = _closure1_slot28;
        var2.IS_ANDROID = var3;
        var0.__closure = var2;
        var2 = 850613387330.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot29;
        var0.__initData = var1;
        return var0;
    };
    var7 = var3.bind(var0)();
    var _closure1_slot30 = var7;
    var3 = {};
    var4 = 'function processColorsInProps_Pnpm_ColorsTs21(props){const{ColorProperties,processColor,NestedColorProperties}=this.__closure;for(const key in props){if(ColorProperties.includes(key)){if(Array.isArray(props[key])){props[key]=props[key].map(function(color){return processColor(color);});}else{props[key]=processColor(props[key]);}}else if(NestedColorProperties[key]){const propGroupList=props[key];for(const propGroup of propGroupList){const nestedPropertyName=NestedColorProperties[key];if(propGroup[nestedPropertyName]!==undefined){propGroup[nestedPropertyName]=processColor(propGroup[nestedPropertyName]);}}}}}';
    var3.code = var4;
    var _closure1_slot31 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun33664: for (var _fun33664_ip = 0;;) switch (_fun33664_ip) {
                case 0:
                    var12 = arg0;
                    var0 = undefined;
                    var9 = undefined;
                    var10 = undefined;
                    var11 = undefined;
                    var6 = var12;
                    var1 = global;
                    for (var3 in var6)
                        case 32: {
                            case 44: var15 = var3;
                            var9 = var15;
                            var14 = _closure1_slot17;
                            var13 = var14.includes;
                            var13 = var13.bind(var14)(var15);
                            if (var13) {
                                _fun33664_ip = 162;
                                continue _fun33664
                            }
                            case 67: var14 = _closure1_slot18;
                            var13 = var9;
                            var13 = var14[var13];
                            if (!var13) {
                                _fun33664_ip = 32;
                                continue _fun33664
                            }
                            case 81: var13 = var9;
                            var15 = var12[var13];
                            var13 = var15;
                            var14 = var13[Symbol.iterator];
                            var13 = var14().next;
                            case 94: var16 = var13().value;
                            var15 = var14;
                            if (var15 === var0) {
                                _fun33664_ip = 32;
                                continue _fun33664
                            }
                            case 105: // try_start_0
                                var10 = var16;
                            var17 = _closure1_slot18;
                            var15 = var9;
                            var15 = var17[var15];
                            var11 = var15;
                            var15 = var16[var15];
                            if (!(var0 !== var15)) {
                                _fun33664_ip = 153;
                                continue _fun33664
                            }
                            case 130: var17 = var10;
                            var16 = var11;
                            var18 = _closure1_slot30;
                            var15 = var17[var16];
                            var15 = var18.bind(var0)(var15);
                            var17[var16] = var15;
                            case 153: // try_end0
                                _fun33664_ip = 94;
                            continue _fun33664;
                            case 155: // catch_target0
                                CatchBlockStart(arg_register = 13);
                            var14.return();
                            throw var13;
                            case 162: var15 = var1.Array;
                            var14 = var15.isArray;
                            var13 = var9;
                            var13 = var12[var13];
                            var13 = var14.bind(var15)(var13);
                            var14 = var9;
                            if (var13) {
                                _fun33664_ip = 213;
                                continue _fun33664
                            }
                            case 191: var15 = _closure1_slot30;
                            var13 = var12[var14];
                            var13 = var15.bind(var0)(var13);
                            var12[var14] = var13;
                            _fun33664_ip = 32;
                            continue _fun33664;
                            case 213: var16 = var12[var14];
                            var15 = var16.map;
                            var13 = function(arg0) { // Environment: var8
                                var2 = _closure1_slot30;
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var13 = var15.bind(var16)(var13);
                            var12[var14] = var13;
                            _fun33664_ip = 32;
                            continue _fun33664;
                        }
                case 241:
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot17;
        var2.ColorProperties = var3;
        var3 = _closure1_slot30;
        var2.processColor = var3;
        var3 = _closure1_slot18;
        var2.NestedColorProperties = var3;
        var0.__closure = var2;
        var2 = 978448002474.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot31;
        var0.__initData = var1;
        return var0;
    };
    var6 = var3.bind(var0)();
    var3 = {};
    var4 = 'function convertToRGBA_Pnpm_ColorsTs22(color){const{processColorInitially}=this.__closure;const processedColor=processColorInitially(color);const a=(processedColor>>>24)/255;const r=(processedColor<<8>>>24)/255;const g=(processedColor<<16>>>24)/255;const b=(processedColor<<24>>>24)/255;return[r,g,b,a];}';
    var3.code = var4;
    var _closure1_slot32 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            var2 = _closure1_slot26;
            var1 = undefined;
            var0 = arg0;
            var3 = var2.bind(var1)(var0);
            var0 = 8;
            var2 = var3 << var0;
            var0 = new Array(4);
            var1 = 24;
            var4 = var2 >>> var1;
            var2 = 255;
            var4 = var4 / var2;
            var0[0] = var4;
            var4 = 16;
            var4 = var3 << var4;
            var4 = var4 >>> var1;
            var4 = var4 / var2;
            var0[1] = var4;
            var4 = var3 << var1;
            var4 = var4 >>> var1;
            var4 = var4 / var2;
            var0[2] = var4;
            var1 = var3 >>> var1;
            var1 = var1 / var2;
            var0[3] = var1;
            return var0;
        };
        var2 = {};
        var3 = _closure1_slot26;
        var2.processColorInitially = var3;
        var0.__closure = var2;
        var2 = 15503083969849.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot32;
        var0.__initData = var1;
        return var0;
    };
    var5 = var3.bind(var0)();
    var3 = {};
    var4 = 'function rgbaArrayToRGBAColor_Pnpm_ColorsTs23(RGBA){const alpha=RGBA[3]<0.001?0:RGBA[3];return"rgba("+Math.round(RGBA[0]*255)+", "+Math.round(RGBA[1]*255)+", "+Math.round(RGBA[2]*255)+", "+alpha+")";}';
    var3.code = var4;
    var _closure1_slot33 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun33669: for (var _fun33669_ip = 0;;) switch (_fun33669_ip) {
                case 0:
                    var8 = arg0;
                    var0 = 3;
                    var2 = var8[var0];
                    var1 = 0.001;
                    var2 = var2 < var1;
                    var1 = 0;
                    var7 = 0;
                    if (var2) {
                        _fun33669_ip = 35;
                        continue _fun33669
                    }
                case 31:
                    var7 = var8[var0];
                case 35:
                    var0 = global;
                    var3 = var0.Math;
                    var2 = var3.round;
                    var1 = var8[var1];
                    var4 = 255;
                    var1 = var4 * var1;
                    var6 = var2.bind(var3)(var1);
                    var3 = var0.Math;
                    var2 = var3.round;
                    var1 = 1;
                    var1 = var8[var1];
                    var1 = var4 * var1;
                    var14 = var2.bind(var3)(var1);
                    var3 = var0.Math;
                    var2 = var3.round;
                    var1 = 2;
                    var1 = var8[var1];
                    var1 = var4 * var1;
                    var12 = var2.bind(var3)(var1);
                    var0 = var0.HermesInternal;
                    var3 = var0.concat;
                    var17 = 'rgba(';
                    var1 = ', ';
                    var9 = ')';
                    var16 = var6;
                    var15 = var1;
                    var13 = var1;
                    var11 = var1;
                    var10 = var7;
                    var0 = var17[var3](var16, var15, var14, var13, var12, var11, var10, var9, var8);
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 9717764015913.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot33;
        var0.__initData = var1;
        return var0;
    };
    var4 = var3.bind(var0)();
    var3 = {};
    var20 = 'function toLinearSpace_Pnpm_ColorsTs24(RGBA,gamma=2.2){const res=[];for(let i=0;i<3;++i){res.push(Math.pow(RGBA[i],gamma));}res.push(RGBA[3]);return res;}';
    var3.code = var20;
    var _closure1_slot34 = var3;
    var3 = function() { // Environment: var1
        var0 = function arg0() {
            _fun33671: for (var _fun33671_ip = 0;;) switch (_fun33671_ip) {
                case 0:
                    var3 = arg0;
                    var4 = undefined;
                    var1 = undefined;
                    var2 = arguments.length;
                    var0 = 1;
                    var2 = var2 > var0;
                    var6 = 2.2;
                    var5 = var6;
                    if (!var2) {
                        _fun33671_ip = 48;
                        continue _fun33671
                    }
                case 33:
                    var2 = arguments[var0];
                    var5 = var6;
                    if (!(var4 !== var2)) {
                        _fun33671_ip = 48;
                        continue _fun33671
                    }
                case 44:
                    var5 = arguments[var0];
                case 48:
                    var0 = new Array(0);
                    var2 = global;
                    var1 = 3;
                    var4 = 0;
                case 59:
                    var7 = var0.push;
                    var9 = var2.Math;
                    var8 = var9.pow;
                    var6 = var3[var4];
                    var6 = var8.bind(var9)(var6, var5);
                    var6 = var7.bind(var0)(var6);
                    var4 = var4 + 1;
                    if (var4 < var1) {
                        _fun33671_ip = 59;
                        continue _fun33671
                    }
                case 98:
                    var2 = var0.push;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 2672100143834.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot34;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var20 = {};
    var21 = 'function toGammaSpace_Pnpm_ColorsTs25(RGBA,gamma=2.2){const res=[];for(let i=0;i<3;++i){res.push(Math.pow(RGBA[i],1/gamma));}res.push(RGBA[3]);return res;}';
    var20.code = var21;
    var _closure1_slot35 = var20;
    var1 = function() { // Environment: var1
        var0 = function arg0() {
            _fun33673: for (var _fun33673_ip = 0;;) switch (_fun33673_ip) {
                case 0:
                    var3 = arg0;
                    var2 = undefined;
                    var0 = undefined;
                    var1 = arguments.length;
                    var6 = 1;
                    var1 = var1 > var6;
                    var4 = 2.2;
                    var5 = var4;
                    if (!var1) {
                        _fun33673_ip = 48;
                        continue _fun33673
                    }
                case 33:
                    var1 = arguments[var6];
                    var5 = var4;
                    if (!(var2 !== var1)) {
                        _fun33673_ip = 48;
                        continue _fun33673
                    }
                case 44:
                    var5 = arguments[var6];
                case 48:
                    var0 = new Array(0);
                    var2 = global;
                    var1 = 3;
                    var4 = 0;
                case 59:
                    var8 = var0.push;
                    var11 = var2.Math;
                    var10 = var11.pow;
                    var9 = var3[var4];
                    var7 = var6 / var5;
                    var7 = var10.bind(var11)(var9, var7);
                    var7 = var8.bind(var0)(var7);
                    var4 = var4 + 1;
                    if (var4 < var1) {
                        _fun33673_ip = 59;
                        continue _fun33673
                    }
                case 102:
                    var2 = var0.push;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 1726439203743.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot35;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.clampRGBA = var19;
    var2.ColorProperties = var18;
    var2.normalizeColor = var17;
    var2.opacity = var16;
    var2.red = var15;
    var2.green = var14;
    var2.blue = var13;
    var2.rgbaColor = var12;
    var2.RGBtoHSV = var11;
    var2.hsvToColor = var10;
    var2.processColorInitially = var9;
    var2.isColor = var8;
    var2.processColor = var7;
    var2.processColorsInProps = var6;
    var2.convertToRGBA = var5;
    var2.rgbaArrayToRGBAColor = var4;
    var2.toLinearSpace = var3;
    var2.toGammaSpace = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3765, 3724]);