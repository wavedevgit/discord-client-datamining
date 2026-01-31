// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0, arg1() {
        var0 = global;
        var0 = var0.Object;
        var0 = var0.prototype;
        var3 = var0.hasOwnProperty;
        var2 = var3.call;
        var1 = arg0;
        var0 = arg1;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot0 = var1;
    var1 = function(arg0, arg1, arg2, arg3) { // Environment: var0
        _fun16776: for (var _fun16776_ip = 0;;) switch (_fun16776_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var12 = arg2;
                var2 = arg3;
                if (var3) {
                    _fun16776_ip = 19;
                    continue _fun16776
                }
            case 15:
                var3 = '&';
            case 19:
                if (var12) {
                    _fun16776_ip = 26;
                    continue _fun16776
                }
            case 22:
                var12 = '=';
            case 26:
                var0 = {};
                var5 = 'string';
                var1 = typeof var4;
                if (!(var5 === var1)) {
                    _fun16776_ip = 346;
                    continue _fun16776
                }
            case 42:
                var1 = var4.length;
                var11 = 0;
                if (!(var11 !== var1)) {
                    _fun16776_ip = 346;
                    continue _fun16776
                }
            case 56:
                var10 = /\+/g;
                var1 = var4.split;
                var9 = var1.bind(var4)(var3);
                var3 = var2;
                if (!var3) {
                    _fun16776_ip = 103;
                    continue _fun16776
                }
            case 86:
                var1 = var2.maxKeys;
                var4 = 'number';
                var1 = typeof var1;
                var3 = var4 === var1;
            case 103:
                var1 = 1000;
                if (!var3) {
                    _fun16776_ip = 118;
                    continue _fun16776
                }
            case 112:
                var1 = var2.maxKeys;
            case 118:
                var8 = var9.length;
                var2 = var1 > var11;
                if (!var2) {
                    _fun16776_ip = 134;
                    continue _fun16776
                }
            case 130:
                var2 = var8 > var1;
            case 134:
                if (!var2) {
                    _fun16776_ip = 140;
                    continue _fun16776
                }
            case 137:
                var8 = var1;
            case 140:
                var13 = var11 < var8;
                var7 = global;
                var6 = undefined;
                var4 = 1;
                var3 = '%20';
                var2 = '';
                var1 = 0;
                if (!var13) {
                    _fun16776_ip = 344;
                    continue _fun16776
                }
            case 172:
                var14 = var9[var1];
                var13 = var14.replace;
                var18 = var13.bind(var14)(var10, var3);
                var13 = var18.indexOf;
                var13 = var13.bind(var18)(var12);
                var16 = var13 >= var11;
                var15 = var18;
                var14 = var2;
                if (!var16) {
                    _fun16776_ip = 238;
                    continue _fun16776
                }
            case 211:
                var16 = var18.substr;
                var15 = var16.bind(var18)(var11, var13);
                var17 = var18.substr;
                var13 = var13 + var4;
                var14 = var17.bind(var18)(var13);
            case 238:
                var13 = var7.decodeURIComponent;
                var16 = var13.bind(var6)(var15);
                var13 = var7.decodeURIComponent;
                var15 = var13.bind(var6)(var14);
                var13 = _closure1_slot0;
                var13 = var13.bind(var6)(var0, var16);
                if (var13) {
                    _fun16776_ip = 279;
                    continue _fun16776
                }
            case 273:
                var0[var16] = var15;
                _fun16776_ip = 334;
                continue _fun16776;
            case 279:
                var17 = var7.Array;
                var14 = var17.isArray;
                var13 = var0[var16];
                var13 = var14.bind(var17)(var13);
                var14 = var0[var16];
                if (var13) {
                    _fun16776_ip = 324;
                    continue _fun16776
                }
            case 306:
                var13 = new Array(2);
                var13[0] = var14;
                var13[1] = var15;
                var0[var16] = var13;
                _fun16776_ip = 334;
                continue _fun16776;
            case 324:
                var13 = var14.push;
                var13 = var13.bind(var14)(var15);
            case 334:
                var1 = var1 + 1;
                if (var1 < var8) {
                    _fun16776_ip = 172;
                    continue _fun16776
                }
            case 344:
                return var0;
            case 346:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);