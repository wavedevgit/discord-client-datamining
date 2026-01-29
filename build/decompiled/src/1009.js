// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun10338: for (var _fun10338_ip = 0;;) switch (_fun10338_ip) {
        case 0:
            var1 = exports;
            var2 = function(arg0, arg1, arg2) { // Original name: encodeChunk, environment: var0
                _fun10339: for (var _fun10339_ip = 0;;) switch (_fun10339_ip) {
                    case 0:
                        var16 = arg0;
                        var15 = arg1;
                        var14 = arg2;
                        var2 = new Array(0);
                        var13 = 16;
                        var12 = 1;
                        var11 = 8;
                        var10 = 2;
                        var9 = 255;
                        var8 = 16711680;
                        var7 = 65280;
                        var5 = 18;
                        var4 = 63;
                        var3 = 12;
                        var1 = 6;
                        var0 = 3;
                        if (!(var15 < var14)) {
                            _fun10339_ip = 206;
                            continue _fun10339
                        }
                    case 65:
                        var17 = var16[var15];
                        var19 = var17 << var13;
                        var17 = var15 + var12;
                        var17 = var16[var17];
                        var17 = var17 << var11;
                        var18 = var15 + var10;
                        var18 = var16[var18];
                        var18 = var9 & var18;
                        var19 = var19 & var8;
                        var17 = var17 & var7;
                        var17 = var19 + var17;
                        var17 = var17 + var18;
                        var18 = var2.push;
                        var20 = _closure1_slot0;
                        var19 = var17 >> var5;
                        var19 = var19 & var4;
                        var20 = var20[var19];
                        var21 = _closure1_slot0;
                        var19 = var17 >> var3;
                        var19 = var19 & var4;
                        var19 = var21[var19];
                        var20 = var20 + var19;
                        var21 = _closure1_slot0;
                        var19 = var17 >> var1;
                        var19 = var19 & var4;
                        var19 = var21[var19];
                        var19 = var20 + var19;
                        var20 = _closure1_slot0;
                        var17 = var4 & var17;
                        var17 = var20[var17];
                        var17 = var19 + var17;
                        var17 = var18.bind(var2)(var17);
                        var15 = var15 + var0;
                        if (var15 < var14) {
                            _fun10339_ip = 65;
                            continue _fun10339
                        }
                    case 206:
                        var1 = var2.join;
                        var0 = '';
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var _closure1_slot1 = var2;
            var2 = global;
            var5 = var2.Object;
            var4 = var5.defineProperty;
            var3 = {};
            var2 = true;
            var3.value = var2;
            var2 = '__esModule';
            var2 = var4.bind(var5)(var1, var2, var3);
            var5 = new Array(0);
            var _closure1_slot0 = var5;
            var3 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
            var2 = 64;
            var4 = 0;
        case 65:
            var6 = var3[var4];
            var5[var4] = var6;
            var4 = var4 + 1;
            if (var4 < var2) {
                _fun10338_ip = 65;
                continue _fun10338
            }
        case 80:
            var0 = function(arg0) { // Original name: base64StringFromByteArray, environment: var0
                _fun10340: for (var _fun10340_ip = 0;;) switch (_fun10340_ip) {
                    case 0:
                        var3 = arg0;
                        var4 = var3.length;
                        var0 = 3;
                        var5 = var4 % var0;
                        var2 = new Array(0);
                        var9 = var4 - var5;
                        var7 = undefined;
                        var6 = 16383;
                        var8 = 0;
                        if (!(var8 < var9)) {
                            _fun10340_ip = 82;
                            continue _fun10340
                        }
                    case 40:
                        var11 = var2.push;
                        var12 = _closure1_slot1;
                        var1 = var8 + var6;
                        var10 = var1;
                        if (!(var10 > var9)) {
                            _fun10340_ip = 63;
                            continue _fun10340
                        }
                    case 60:
                        var10 = var9;
                    case 63:
                        var10 = var12.bind(var7)(var3, var8, var10);
                        var10 = var11.bind(var2)(var10);
                        var8 = var1;
                        if (var1 < var9) {
                            _fun10340_ip = 40;
                            continue _fun10340
                        }
                    case 82:
                        var1 = 1;
                        if (!(var1 !== var5)) {
                            _fun10340_ip = 229;
                            continue _fun10340
                        }
                    case 92:
                        var10 = 2;
                        if (!(var10 === var5)) {
                            _fun10340_ip = 317;
                            continue _fun10340
                        }
                    case 102:
                        var5 = var4 - var10;
                        var6 = var3[var5];
                        var5 = 8;
                        var6 = var6 << var5;
                        var5 = var4 - var1;
                        var5 = var3[var5];
                        var5 = var6 + var5;
                        var6 = var2.push;
                        var8 = _closure1_slot0;
                        var7 = 10;
                        var7 = var5 >> var7;
                        var8 = var8[var7];
                        var11 = _closure1_slot0;
                        var7 = 4;
                        var7 = var5 >> var7;
                        var9 = 63;
                        var7 = var7 & var9;
                        var7 = var11[var7];
                        var7 = var8 + var7;
                        var8 = _closure1_slot0;
                        var5 = var5 << var10;
                        var5 = var5 & var9;
                        var5 = var8[var5];
                        var9 = var7 + var5;
                        var5 = global;
                        var5 = var5.HermesInternal;
                        var8 = var5.concat;
                        var7 = '';
                        var5 = '=';
                        var5 = var8.bind(var7)(var9, var5);
                        var5 = var6.bind(var2)(var5);
                        _fun10340_ip = 317;
                        continue _fun10340;
                    case 229:
                        var1 = var4 - var1;
                        var5 = var3[var1];
                        var1 = var2.push;
                        var4 = _closure1_slot0;
                        var3 = 2;
                        var3 = var5 >> var3;
                        var3 = var4[var3];
                        var4 = _closure1_slot0;
                        var0 = 4;
                        var5 = var5 << var0;
                        var0 = 63;
                        var0 = var5 & var0;
                        var0 = var4[var0];
                        var5 = var3 + var0;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var4 = var0.concat;
                        var3 = '';
                        var0 = '==';
                        var0 = var4.bind(var3)(var5, var0);
                        var0 = var1.bind(var2)(var0);
                    case 317:
                        var1 = var2.join;
                        var0 = '';
                        var0 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var1.base64StringFromByteArray = var0;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);