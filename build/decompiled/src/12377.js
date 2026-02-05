// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0, arg1, arg2) { // Environment: var0
        _fun94403: for (var _fun94403_ip = 0;;) switch (_fun94403_ip) {
            case 0:
                var8 = arg0;
                var3 = arg2;
                var2 = this;
                var5 = {};
                var1 = var2.getMatches;
                var0 = arg1;
                var12 = var1.bind(var2)(var8, var0, var3);
                var0 = var12.length;
                var4 = 0;
                var0 = var4 < var0;
                var7 = global;
                var6 = 0;
                var1 = 0;
                var11 = 0;
                if (!var0) {
                    _fun94403_ip = 110;
                    continue _fun94403
                }
            case 49:
                var0 = var12[var6];
                var0 = var0.seq;
                var9 = var1;
                if (!var0) {
                    _fun94403_ip = 92;
                    continue _fun94403
                }
            case 65:
                var13 = var7.Math;
                var10 = var13.max;
                var0 = var12[var6];
                var0 = var0.level;
                var9 = var10.bind(var13)(var1, var0);
            case 92:
                var6 = var6 + 1;
                var0 = var12.length;
                var1 = var9;
                var11 = var1;
                if (var6 < var0) {
                    _fun94403_ip = 49;
                    continue _fun94403
                }
            case 110:
                var0 = var12.length;
                var0 = var4 < var0;
                var6 = false;
                var10 = 1;
                var7 = 0;
                var1 = false;
                if (!var0) {
                    _fun94403_ip = 291;
                    continue _fun94403
                }
            case 134:
                var0 = var12[var7];
                var0 = var0.seq;
                if (var0) {
                    _fun94403_ip = 191;
                    continue _fun94403
                }
            case 147:
                var13 = var6;
                if (var6) {
                    _fun94403_ip = 270;
                    continue _fun94403
                }
            case 153:
                var15 = var2.fireCallback;
                var0 = var12[var7];
                var14 = var0.callback;
                var0 = var12[var7];
                var0 = var0.combo;
                var0 = var15.bind(var2)(var14, var3, var0);
                var13 = var6;
                _fun94403_ip = 270;
                continue _fun94403;
            case 191:
                var0 = var12[var7];
                var0 = var0.level;
                var13 = var6;
                if (!(var0 === var11)) {
                    _fun94403_ip = 270;
                    continue _fun94403
                }
            case 208:
                var0 = var12[var7];
                var0 = var0.seq;
                var5[var0] = var10;
                var16 = var2.fireCallback;
                var0 = var12[var7];
                var20 = var0.callback;
                var0 = var12[var7];
                var18 = var0.combo;
                var0 = var12[var7];
                var17 = var0.seq;
                var21 = var2;
                var19 = var3;
                var0 = var21[var16](var20, var19, var18, var17, var16);
                var13 = true;
            case 270:
                var7 = var7 + 1;
                var0 = var12.length;
                var6 = var13;
                var1 = var6;
                if (var7 < var0) {
                    _fun94403_ip = 134;
                    continue _fun94403
                }
            case 291:
                var6 = var3.type;
                var0 = 'keypress';
                var6 = var0 === var6;
                if (!var6) {
                    _fun94403_ip = 313;
                    continue _fun94403
                }
            case 307:
                var6 = var2.ignoreNextKeypress;
            case 313:
                var7 = _closure1_slot0;
                var0 = _closure1_slot1;
                var4 = var0[var4];
                var0 = undefined;
                var7 = var7.bind(var0)(var4);
                var9 = var3.type;
                var4 = var2.nextExpectedAction;
                var4 = var9 !== var4;
                if (var4) {
                    _fun94403_ip = 358;
                    continue _fun94403
                }
            case 353:
                var4 = var7.bind(var0)(var8);
            case 358:
                if (var4) {
                    _fun94403_ip = 364;
                    continue _fun94403
                }
            case 361:
                var4 = var6;
            case 364:
                if (var4) {
                    _fun94403_ip = 378;
                    continue _fun94403
                }
            case 367:
                var4 = var2.resetSequences;
                var4 = var4.bind(var2)(var5);
            case 378:
                if (!var1) {
                    _fun94403_ip = 394;
                    continue _fun94403
                }
            case 381:
                var4 = var3.type;
                var3 = 'keydown';
                var1 = var3 === var4;
            case 394:
                var2.ignoreNextKeypress = var1;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12378]);