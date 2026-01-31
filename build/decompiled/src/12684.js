// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 62, 0, 62, 0, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 0, 0, 0, 0, 63, 0, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51];
    var _closure1_slot0 = var1;
    var1 = function(arg0, arg1) { // Original name: base64Decode, environment: var0
        _fun97300: for (var _fun97300_ip = 0;;) switch (_fun97300_ip) {
            case 0:
                var8 = arg0;
                var2 = arg1;
                var0 = var8.length;
                var7 = 2;
                var1 = var0 - var7;
                var1 = var8[var1];
                var5 = '=';
                var6 = var7;
                if (!(var5 !== var1)) {
                    _fun97300_ip = 56;
                    continue _fun97300
                }
            case 33:
                var3 = 1;
                var1 = var0 - var3;
                var4 = var8[var1];
                var1 = 0;
                if (!(var5 === var4)) {
                    _fun97300_ip = 53;
                    continue _fun97300
                }
            case 50:
                var1 = var3;
            case 53:
                var6 = var1;
            case 56:
                var1 = var0 - var6;
                var0 = 4294967292.0;
                var18 = var1 & var0;
                var11 = 0;
                var17 = 18;
                var9 = 1;
                var16 = 12;
                var15 = 6;
                var14 = 3;
                var13 = 16;
                var3 = 255;
                var12 = 8;
                var5 = 4;
                var1 = 0;
                var10 = 0;
                var0 = 0;
                if (!(var0 < var18)) {
                    _fun97300_ip = 286;
                    continue _fun97300
                }
            case 119:
                var23 = _closure1_slot0;
                var19 = var8.charCodeAt;
                var19 = var19.bind(var8)(var1);
                var19 = var23[var19];
                var22 = var19 << var17;
                var20 = var8.charCodeAt;
                var19 = var1 + var9;
                var19 = var20.bind(var8)(var19);
                var19 = var23[var19];
                var19 = var19 << var16;
                var21 = var8.charCodeAt;
                var20 = var1 + var7;
                var20 = var21.bind(var8)(var20);
                var20 = var23[var20];
                var21 = var20 << var15;
                var24 = var8.charCodeAt;
                var20 = var1 + var14;
                var20 = var24.bind(var8)(var20);
                var20 = var23[var20];
                var19 = var22 | var19;
                var19 = var19 | var21;
                var19 = var19 | var20;
                var20 = parseFloat(var11);
                var21 = var19 >> var13;
                var21 = var21 & var3;
                var2[var20] = var21;
                var20 = var20 + 1;
                var20 = parseFloat(var20);
                var21 = var19 >> var12;
                var21 = var21 & var3;
                var2[var20] = var21;
                var20 = var20 + 1;
                var21 = parseFloat(var20);
                var11 = var21 + 1;
                var19 = var3 & var19;
                var2[var21] = var19;
                var1 = var1 + var5;
                var10 = var11;
                var0 = var1;
                if (var0 < var18) {
                    _fun97300_ip = 119;
                    continue _fun97300
                }
            case 286:
                var1 = var10;
                if (!(var9 === var6)) {
                    _fun97300_ip = 405;
                    continue _fun97300
                }
            case 293:
                var15 = _closure1_slot0;
                var11 = var8.charCodeAt;
                var11 = var11.bind(var8)(var0);
                var13 = var15[var11];
                var11 = 10;
                var14 = var13 << var11;
                var13 = var8.charCodeAt;
                var11 = var0 + var9;
                var11 = var13.bind(var8)(var11);
                var11 = var15[var11];
                var11 = var11 << var5;
                var16 = var8.charCodeAt;
                var13 = var0 + var7;
                var13 = var16.bind(var8)(var13);
                var13 = var15[var13];
                var13 = var13 >> var7;
                var11 = var14 | var11;
                var11 = var11 | var13;
                var10 = parseFloat(var10);
                var12 = var11 >> var12;
                var12 = var12 & var3;
                var2[var10] = var12;
                var10 = var10 + 1;
                var12 = parseFloat(var10);
                var1 = var12 + 1;
                var11 = var3 & var11;
                var2[var12] = var11;
            case 405:
                if (!(var7 === var6)) {
                    _fun97300_ip = 470;
                    continue _fun97300
                }
            case 409:
                var6 = _closure1_slot0;
                var4 = var8.charCodeAt;
                var4 = var4.bind(var8)(var0);
                var4 = var6[var4];
                var4 = var4 << var7;
                var7 = var8.charCodeAt;
                var0 = var0 + var9;
                var0 = var7.bind(var8)(var0);
                var0 = var6[var0];
                var0 = var0 >> var5;
                var1 = parseFloat(var1);
                var0 = var4 | var0;
                var0 = var3 & var0;
                var2[var1] = var0;
            case 470:
                var0 = undefined;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);