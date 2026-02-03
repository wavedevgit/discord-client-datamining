// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var5 = var0.Object;
    var3 = var5.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var5)(var1, var0, var2);
    var0 = {};
    var2 = 'function pnpm_lrgbTs1(c=0){const abs=Math.abs(c);if(abs>0.0031308){return(Math.sign(c)||1)*(1.055*Math.pow(abs,1/2.4)-0.055);}return c*12.92;}';
    var0.code = var2;
    var5 = function() {
        _fun35015: for (var _fun35015_ip = 0;;) switch (_fun35015_ip) {
            case 0:
                var4 = undefined;
                var1 = undefined;
                var2 = arguments.length;
                var0 = 0;
                var3 = var2 > var0;
                var2 = 0;
                if (!var3) {
                    _fun35015_ip = 32;
                    continue _fun35015
                }
            case 18:
                var3 = arguments[var0];
                var2 = 0;
                if (!(var4 !== var3)) {
                    _fun35015_ip = 32;
                    continue _fun35015
                }
            case 28:
                var2 = arguments[var0];
            case 32:
                var1 = global;
                var3 = var1.Math;
                var0 = var3.abs;
                var5 = var0.bind(var3)(var2);
                var0 = 0.0031308;
                var4 = var2;
                if (!(!(var5 > var0))) {
                    _fun35015_ip = 84;
                    continue _fun35015
                }
            case 68:
                var0 = 12.92;
                var0 = var0 * var4;
                _fun35015_ip = 167;
                continue _fun35015;
            case 84:
                var3 = var1.Math;
                var2 = var3.sign;
                var2 = var2.bind(var3)(var4);
                if (var2) {
                    _fun35015_ip = 107;
                    continue _fun35015
                }
            case 104:
                var2 = 1;
            case 107:
                var4 = var1.Math;
                var3 = var4.pow;
                var1 = 0.4166666666666667;
                var3 = var3.bind(var4)(var5, var1);
                var1 = 1.055;
                var3 = var1 * var3;
                var1 = 0.055;
                var1 = var3 - var1;
                var0 = var2 * var1;
            case 167:
                return var0;
        }
    };
    var2 = {};
    var5.__closure = var2;
    var2 = 9046778946531.0;
    var5.__workletHash = var2;
    var5.__initData = var0;
    var _closure1_slot0 = var5;
    var0 = {};
    var2 = 'function pnpm_lrgbTs2({r:r,g:g,b:b,alpha:alpha}){const{channelFromLrgb}=this.__closure;return{r:channelFromLrgb(r),g:channelFromLrgb(g),b:channelFromLrgb(b),alpha:alpha};}';
    var0.code = var2;
    var3 = function arg0() {
        var0 = arg0;
        var6 = var0.r;
        var5 = var0.g;
        var4 = var0.b;
        var1 = var0.alpha;
        var0 = {};
        var3 = _closure1_slot0;
        var2 = undefined;
        var6 = var3.bind(var2)(var6);
        var0.r = var6;
        var5 = var3.bind(var2)(var5);
        var0.g = var5;
        var2 = var3.bind(var2)(var4);
        var0.b = var2;
        var0.alpha = var1;
        return var0;
    };
    var2 = {};
    var2.channelFromLrgb = var5;
    var3.__closure = var2;
    var2 = 2514333579516.0;
    var3.__workletHash = var2;
    var3.__initData = var0;
    var0 = {};
    var2 = 'function pnpm_lrgbTs3(c=0){const abs=Math.abs(c);if(abs<=0.04045){return c/12.92;}return(Math.sign(c)||1)*Math.pow((abs+0.055)/1.055,2.4);}';
    var0.code = var2;
    var7 = function() {
        _fun35017: for (var _fun35017_ip = 0;;) switch (_fun35017_ip) {
            case 0:
                var4 = undefined;
                var1 = undefined;
                var2 = arguments.length;
                var0 = 0;
                var3 = var2 > var0;
                var2 = 0;
                if (!var3) {
                    _fun35017_ip = 32;
                    continue _fun35017
                }
            case 18:
                var3 = arguments[var0];
                var2 = 0;
                if (!(var4 !== var3)) {
                    _fun35017_ip = 32;
                    continue _fun35017
                }
            case 28:
                var2 = arguments[var0];
            case 32:
                var0 = global;
                var3 = var0.Math;
                var1 = var3.abs;
                var3 = var1.bind(var3)(var2);
                var1 = 0.04045;
                if (!(!(var3 <= var1))) {
                    _fun35017_ip = 150;
                    continue _fun35017
                }
            case 65:
                var4 = var0.Math;
                var1 = var4.sign;
                var1 = var1.bind(var4)(var2);
                if (var1) {
                    _fun35017_ip = 88;
                    continue _fun35017
                }
            case 85:
                var1 = 1;
            case 88:
                var5 = var0.Math;
                var4 = var5.pow;
                var0 = 0.055;
                var3 = var3 + var0;
                var0 = 1.055;
                var3 = var3 / var0;
                var0 = 2.4;
                var0 = var4.bind(var5)(var3, var0);
                var0 = var1 * var0;
                _fun35017_ip = 164;
                continue _fun35017;
            case 150:
                var1 = 12.92;
                var0 = var2 / var1;
            case 164:
                return var0;
        }
    };
    var2 = {};
    var7.__closure = var2;
    var2 = 7878321042954.0;
    var7.__workletHash = var2;
    var7.__initData = var0;
    var _closure1_slot1 = var7;
    var5 = {};
    var0 = 'function pnpm_lrgbTs4({r:r,g:g,b:b,alpha:alpha}){const{channelToLrgb}=this.__closure;return{r:channelToLrgb(r),g:channelToLrgb(g),b:channelToLrgb(b),alpha:alpha};}';
    var5.code = var0;
    var0 = {};
    var2 = {};
    var4 = function arg0() {
        var0 = arg0;
        var6 = var0.r;
        var5 = var0.g;
        var4 = var0.b;
        var1 = var0.alpha;
        var0 = {};
        var3 = _closure1_slot1;
        var2 = undefined;
        var6 = var3.bind(var2)(var6);
        var0.r = var6;
        var5 = var3.bind(var2)(var5);
        var0.g = var5;
        var2 = var3.bind(var2)(var4);
        var0.b = var2;
        var0.alpha = var1;
        return var0;
    };
    var6 = {};
    var6.channelToLrgb = var7;
    var4.__closure = var6;
    var6 = 7438857771706.0;
    var4.__workletHash = var6;
    var4.__initData = var5;
    var2.fromRgb = var4;
    var2.toRgb = var3;
    var0.convert = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);