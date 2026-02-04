// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = undefined;
    var2.utf8read = var0;
    var3 = function arg0() {
        var0 = global;
        var1 = var0.String;
        var3 = var1.fromCharCode;
        var2 = var3.apply;
        var1 = var0.String;
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot0 = var3;
    var1 = function arg0() {
        _fun14791: for (var _fun14791_ip = 0;;) switch (_fun14791_ip) {
            case 0:
                var27 = arg0;
                var1 = var27.length;
                var0 = 1;
                if (!(!(var1 < var0))) {
                    _fun14791_ip = 505;
                    continue _fun14791
                }
            case 18:
                var3 = new Array(0);
                var8 = new Array(0);
                var26 = var27.length;
                var7 = 0;
                var28 = var7 < var26;
                var5 = undefined;
                var25 = 8191;
                var24 = 31;
                var23 = 63;
                var22 = 6;
                var21 = 7;
                var20 = 18;
                var19 = 12;
                var18 = 65536;
                var17 = 55296;
                var16 = 10;
                var15 = 56320;
                var14 = 1023;
                var13 = 15;
                var12 = 365;
                var11 = 239;
                var10 = 224;
                var9 = 191;
                var4 = 128;
                var2 = 0;
                var0 = 0;
                var6 = 0;
                if (!var28) {
                    _fun14791_ip = 426;
                    continue _fun14791
                }
            case 126:
                var28 = parseFloat(var2);
                var30 = var28 + 1;
                var32 = var27[var28];
                if (!(!(var32 < var4))) {
                    _fun14791_ip = 375;
                    continue _fun14791
                }
            case 143:
                if (!(var32 > var9)) {
                    _fun14791_ip = 154;
                    continue _fun14791
                }
            case 147:
                if (!(!(var32 < var10))) {
                    _fun14791_ip = 337;
                    continue _fun14791
                }
            case 154:
                if (!(var32 > var11)) {
                    _fun14791_ip = 162;
                    continue _fun14791
                }
            case 158:
                if (!(!(var32 < var12))) {
                    _fun14791_ip = 225;
                    continue _fun14791
                }
            case 162:
                var31 = parseFloat(var0);
                var28 = var31 + 1;
                var34 = var13 & var32;
                var33 = parseFloat(var30);
                var29 = var27[var33];
                var29 = var23 & var29;
                var33 = var33 + 1;
                var33 = parseFloat(var33);
                var2 = var33 + 1;
                var33 = var27[var33];
                var33 = var23 & var33;
                var34 = var34 << var19;
                var29 = var29 << var22;
                var29 = var34 | var29;
                var29 = var29 | var33;
                var8[var31] = var29;
                _fun14791_ip = 388;
                continue _fun14791;
            case 225:
                var35 = var21 & var32;
                var29 = parseFloat(var30);
                var31 = var27[var29];
                var34 = var23 & var31;
                var29 = var29 + 1;
                var31 = parseFloat(var29);
                var29 = var27[var31];
                var29 = var23 & var29;
                var31 = var31 + 1;
                var33 = parseFloat(var31);
                var2 = var33 + 1;
                var33 = var27[var33];
                var33 = var23 & var33;
                var35 = var35 << var20;
                var34 = var34 << var19;
                var34 = var35 | var34;
                var29 = var29 << var22;
                var29 = var34 | var29;
                var29 = var29 | var33;
                var33 = var29 - var18;
                var29 = parseFloat(var0);
                var34 = var33 >> var16;
                var34 = var17 + var34;
                var8[var29] = var34;
                var29 = var29 + 1;
                var34 = parseFloat(var29);
                var28 = var34 + 1;
                var33 = var14 & var33;
                var33 = var15 + var33;
                var8[var34] = var33;
                _fun14791_ip = 388;
                continue _fun14791;
            case 337:
                var34 = parseFloat(var0);
                var28 = var34 + 1;
                var33 = var24 & var32;
                var35 = parseFloat(var30);
                var2 = var35 + 1;
                var35 = var27[var35];
                var35 = var23 & var35;
                var33 = var33 << var22;
                var33 = var33 | var35;
                var8[var34] = var33;
                _fun14791_ip = 388;
                continue _fun14791;
            case 375:
                var31 = parseFloat(var0);
                var28 = var31 + 1;
                var8[var31] = var32;
                var2 = var30;
            case 388:
                if (!(var28 > var25)) {
                    _fun14791_ip = 413;
                    continue _fun14791
                }
            case 392:
                var30 = var3.push;
                var29 = _closure1_slot0;
                var29 = var29.bind(var5)(var8);
                var29 = var30.bind(var3)(var29);
                var28 = 0;
            case 413:
                var0 = var28;
                var6 = var0;
                if (var2 < var26) {
                    _fun14791_ip = 126;
                    continue _fun14791
                }
            case 426:
                var0 = var3.length;
                if (var0) {
                    _fun14791_ip = 456;
                    continue _fun14791
                }
            case 434:
                var2 = _closure1_slot0;
                var0 = var8.slice;
                var0 = var0.bind(var8)(var7, var6);
                var0 = var2.bind(var5)(var0);
                _fun14791_ip = 503;
                continue _fun14791;
            case 456:
                if (!var6) {
                    _fun14791_ip = 489;
                    continue _fun14791
                }
            case 459:
                var2 = var3.push;
                var4 = _closure1_slot0;
                var1 = var8.slice;
                var1 = var1.bind(var8)(var7, var6);
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
            case 489:
                var2 = var3.join;
                var1 = '';
                var0 = var2.bind(var3)(var1);
            case 503:
                return var0;
            case 505:
                var0 = '';
                return var0;
        }
    };
    var2.utf8read = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);