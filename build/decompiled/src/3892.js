// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = global;
    var5 = var0.Object;
    var3 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var5)(var2, var0, var1);
    var0 = {};
    var1 = 'function convertLrgbToOklab_Pnpm_oklabTs1({r=0,g=0,b=0,alpha:alpha}){const L=Math.cbrt(0.41222147079999993*r+0.5363325363*g+0.0514459929*b);const M=Math.cbrt(0.2119034981999999*r+0.6806995450999999*g+0.1073969566*b);const S=Math.cbrt(0.08830246189999998*r+0.2817188376*g+0.6299787005000002*b);return{l:0.2104542553*L+0.793617785*M-0.0040720468*S,a:1.9779984951*L-2.428592205*M+0.4505937099*S,b:0.0259040371*L+0.7827717662*M-0.808675766*S,alpha:alpha};}';
    var0.code = var1;
    var _closure1_slot2 = var0;
    var1 = function() { // Environment: var4
        var0 = function arg0() {
            _fun35105: for (var _fun35105_ip = 0;;) switch (_fun35105_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.r;
                    var2 = undefined;
                    var7 = 0;
                    if (!(var2 !== var1)) {
                        _fun35105_ip = 19;
                        continue _fun35105
                    }
                case 16:
                    var7 = var1;
                case 19:
                    var1 = var0.g;
                    var6 = 0;
                    if (!(var2 !== var1)) {
                        _fun35105_ip = 33;
                        continue _fun35105
                    }
                case 30:
                    var6 = var1;
                case 33:
                    var1 = var0.b;
                    var8 = 0;
                    if (!(var2 !== var1)) {
                        _fun35105_ip = 48;
                        continue _fun35105
                    }
                case 45:
                    var8 = var1;
                case 48:
                    var1 = var0.alpha;
                    var0 = global;
                    var4 = var0.Math;
                    var3 = var4.cbrt;
                    var2 = 0.41222147079999993;
                    var9 = var2 * var7;
                    var2 = 0.5363325363;
                    var2 = var2 * var6;
                    var5 = 0.0514459929;
                    var5 = var5 * var8;
                    var2 = var9 + var2;
                    var2 = var2 + var5;
                    var4 = var3.bind(var4)(var2);
                    var5 = var0.Math;
                    var3 = var5.cbrt;
                    var2 = 0.2119034981999999;
                    var10 = var2 * var7;
                    var2 = 0.6806995450999999;
                    var2 = var2 * var6;
                    var9 = 0.1073969566;
                    var9 = var9 * var8;
                    var2 = var10 + var2;
                    var2 = var2 + var9;
                    var3 = var3.bind(var5)(var2);
                    var5 = var0.Math;
                    var2 = var5.cbrt;
                    var0 = 0.08830246189999998;
                    var7 = var0 * var7;
                    var0 = 0.2817188376;
                    var0 = var0 * var6;
                    var6 = 0.6299787005000002;
                    var6 = var6 * var8;
                    var0 = var7 + var0;
                    var0 = var0 + var6;
                    var5 = var2.bind(var5)(var0);
                    var0 = {};
                    var2 = 0.2104542553;
                    var7 = var2 * var4;
                    var2 = 0.793617785;
                    var2 = var2 * var3;
                    var6 = 0.0040720468;
                    var6 = var6 * var5;
                    var2 = var7 + var2;
                    var2 = var2 - var6;
                    var0.l = var2;
                    var2 = 1.9779984951;
                    var7 = var2 * var4;
                    var2 = 2.428592205;
                    var2 = var2 * var3;
                    var6 = 0.4505937099;
                    var6 = var6 * var5;
                    var2 = var7 - var2;
                    var2 = var2 + var6;
                    var0.a = var2;
                    var2 = 0.0259040371;
                    var4 = var2 * var4;
                    var2 = 0.7827717662;
                    var2 = var2 * var3;
                    var3 = 0.808675766;
                    var3 = var3 * var5;
                    var2 = var4 + var2;
                    var2 = var2 - var3;
                    var0.b = var2;
                    var0.alpha = var1;
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 12620455378469.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot2;
        var0.__initData = var1;
        return var0;
    };
    var0 = undefined;
    var1 = var1.bind(var0)();
    var _closure1_slot3 = var1;
    var1 = {};
    var3 = 'function convertRgbToOklab_Pnpm_oklabTs2(rgb){const{lrgb,convertLrgbToOklab}=this.__closure;const lrgbColor=lrgb.convert.fromRgb(rgb);const result=convertLrgbToOklab(lrgbColor);if(rgb.r===rgb.b&&rgb.b===rgb.g){result.a=result.b=0;}return result;}';
    var1.code = var3;
    var _closure1_slot4 = var1;
    var1 = function() { // Environment: var4
        var0 = function arg0() {
            _fun35107: for (var _fun35107_ip = 0;;) switch (_fun35107_ip) {
                case 0:
                    var3 = arg0;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 0;
                    var2 = var2[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var5 = var2.convert;
                    var2 = var5.fromRgb;
                    var2 = var2.bind(var5)(var3);
                    var0 = _closure1_slot3;
                    var0 = var0.bind(var4)(var2);
                    var4 = var3.r;
                    var2 = var3.b;
                    var2 = var4 === var2;
                    if (!var2) {
                        _fun35107_ip = 86;
                        continue _fun35107
                    }
                case 71:
                    var4 = var3.b;
                    var3 = var3.g;
                    var2 = var4 === var3;
                case 86:
                    if (!var2) {
                        _fun35107_ip = 101;
                        continue _fun35107
                    }
                case 89:
                    var0.b = var1;
                    var0.a = var1;
                case 101:
                    return var0;
            }
        };
        var2 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 0;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var2.lrgb = var3;
        var3 = _closure1_slot3;
        var2.convertLrgbToOklab = var3;
        var0.__closure = var2;
        var2 = 16743889557677.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot4;
        var0.__initData = var1;
        return var0;
    };
    var5 = var1.bind(var0)();
    var1 = {};
    var3 = 'function convertOklabToLrgb_Pnpm_oklabTs3({l=0,a=0,b=0,alpha:alpha}){const L=Math.pow(l*0.99999999845051981432+0.39633779217376785678*a+0.21580375806075880339*b,3);const M=Math.pow(l*1.0000000088817607767-0.1055613423236563494*a-0.063854174771705903402*b,3);const S=Math.pow(l*1.0000000546724109177-0.089484182094965759684*a-1.2914855378640917399*b,3);return{r:+4.076741661347994*L-3.307711590408193*M+0.230969928729428*S,g:-1.2684380040921763*L+2.6097574006633715*M-0.3413193963102197*S,b:-0.004196086541837188*L-0.7034186144594493*M+1.7076147009309444*S,alpha:alpha};}';
    var1.code = var3;
    var _closure1_slot5 = var1;
    var1 = function() { // Environment: var4
        var0 = function arg0() {
            _fun35109: for (var _fun35109_ip = 0;;) switch (_fun35109_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.l;
                    var2 = undefined;
                    var8 = 0;
                    if (!(var2 !== var1)) {
                        _fun35109_ip = 19;
                        continue _fun35109
                    }
                case 16:
                    var8 = var1;
                case 19:
                    var1 = var0.a;
                    var7 = 0;
                    if (!(var2 !== var1)) {
                        _fun35109_ip = 33;
                        continue _fun35109
                    }
                case 30:
                    var7 = var1;
                case 33:
                    var1 = var0.b;
                    var9 = 0;
                    if (!(var2 !== var1)) {
                        _fun35109_ip = 48;
                        continue _fun35109
                    }
                case 45:
                    var9 = var1;
                case 48:
                    var1 = var0.alpha;
                    var0 = global;
                    var4 = var0.Math;
                    var3 = var4.pow;
                    var2 = 0.9999999984505198;
                    var6 = var2 * var8;
                    var2 = 0.39633779217376786;
                    var2 = var2 * var7;
                    var5 = 0.2158037580607588;
                    var5 = var5 * var9;
                    var2 = var6 + var2;
                    var2 = var2 + var5;
                    var6 = 3;
                    var4 = var3.bind(var4)(var2, var6);
                    var5 = var0.Math;
                    var3 = var5.pow;
                    var2 = 1.0000000088817609;
                    var11 = var2 * var8;
                    var2 = 0.10556134232365635;
                    var2 = var2 * var7;
                    var10 = 0.06385417477170591;
                    var10 = var10 * var9;
                    var2 = var11 - var2;
                    var2 = var2 - var10;
                    var3 = var3.bind(var5)(var2, var6);
                    var5 = var0.Math;
                    var2 = var5.pow;
                    var0 = 1.0000000546724108;
                    var8 = var0 * var8;
                    var0 = 0.08948418209496575;
                    var0 = var0 * var7;
                    var7 = 1.2914855378640917;
                    var7 = var7 * var9;
                    var0 = var8 - var0;
                    var0 = var0 - var7;
                    var5 = var2.bind(var5)(var0, var6);
                    var0 = {};
                    var2 = 4.076741661347994;
                    var7 = var2 * var4;
                    var2 = 3.307711590408193;
                    var2 = var2 * var3;
                    var6 = 0.230969928729428;
                    var6 = var6 * var5;
                    var2 = var7 - var2;
                    var2 = var2 + var6;
                    var0.r = var2;
                    var2 = -1.2684380040921763;
                    var7 = var2 * var4;
                    var2 = 2.6097574006633715;
                    var2 = var2 * var3;
                    var6 = 0.3413193963102197;
                    var6 = var6 * var5;
                    var2 = var7 + var2;
                    var2 = var2 - var6;
                    var0.g = var2;
                    var2 = -0.004196086541837188;
                    var4 = var2 * var4;
                    var2 = 0.7034186144594493;
                    var2 = var2 * var3;
                    var3 = 1.7076147009309444;
                    var3 = var3 * var5;
                    var2 = var4 - var2;
                    var2 = var2 + var3;
                    var0.b = var2;
                    var0.alpha = var1;
                    return var0;
            }
        };
        var1 = {};
        var0.__closure = var1;
        var1 = 14870197803884.0;
        var0.__workletHash = var1;
        var1 = _closure1_slot5;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot6 = var1;
    var1 = {};
    var3 = 'function convertOklabToRgb_Pnpm_oklabTs4(labColor){const{convertOklabToLrgb,lrgb}=this.__closure;const roundChannel=function(channel){return Math.ceil(channel*100_000)/100_000;};const lrgbColor=convertOklabToLrgb(labColor);const rgbColor=lrgb.convert.toRgb(lrgbColor);rgbColor.r=roundChannel(rgbColor.r);rgbColor.g=roundChannel(rgbColor.g);rgbColor.b=roundChannel(rgbColor.b);return rgbColor;}';
    var1.code = var3;
    var _closure1_slot7 = var1;
    var1 = {};
    var3 = {};
    var3.fromRgb = var5;
    var4 = function() { // Environment: var4
        var0 = function arg0() {
            var3 = function arg0() {
                var0 = global;
                var3 = var0.Math;
                var2 = var3.ceil;
                var1 = 100000;
                var0 = arg0;
                var0 = var1 * var0;
                var0 = var2.bind(var3)(var0);
                var0 = var0 / var1;
                return var0;
            };
            var4 = _closure1_slot6;
            var2 = undefined;
            var1 = arg0;
            var4 = var4.bind(var2)(var1);
            var1 = _closure1_slot0;
            var5 = _closure1_slot1;
            var0 = 0;
            var0 = var5[var0];
            var0 = var1.bind(var2)(var0);
            var1 = var0.convert;
            var0 = var1.toRgb;
            var0 = var0.bind(var1)(var4);
            var1 = var0.r;
            var1 = var3.bind(var2)(var1);
            var0.r = var1;
            var1 = var0.g;
            var1 = var3.bind(var2)(var1);
            var0.g = var1;
            var1 = var0.b;
            var1 = var3.bind(var2)(var1);
            var0.b = var1;
            return var0;
        };
        var2 = {};
        var3 = _closure1_slot6;
        var2.convertOklabToLrgb = var3;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 0;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var2.lrgb = var3;
        var0.__closure = var2;
        var2 = 14795767520122.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot7;
        var0.__initData = var1;
        return var0;
    };
    var4 = var4.bind(var0)();
    var3.toRgb = var4;
    var1.convert = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3893]);