// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var0
        _fun94748: for (var _fun94748_ip = 0;;) switch (_fun94748_ip) {
            case 0:
                var17 = arg0;
                var16 = arg1;
                var15 = arg2;
                var14 = arg3;
                var13 = arg4;
                var12 = arg5;
                var11 = this;
                var0 = new Array(0);
                var _closure2_slot0 = var0;
                var10 = var15.type;
                var9 = 'keypress';
                var2 = var9 !== var10;
                if (var2) {
                    _fun94748_ip = 87;
                    continue _fun94748
                }
            case 47:
                var3 = var15.code;
                if (!var3) {
                    _fun94748_ip = 84;
                    continue _fun94748
                }
            case 55:
                var7 = var15.code;
                var6 = var7.slice;
                var5 = 0;
                var4 = 5;
                var5 = var6.bind(var7)(var5, var4);
                var4 = 'Arrow';
                var3 = var4 === var5;
            case 84:
                var2 = var3;
            case 87:
                if (var2) {
                    _fun94748_ip = 128;
                    continue _fun94748
                }
            case 90:
                var2 = var11.callbacks;
                var3 = var2["any-character"];
                if (var3) {
                    _fun94748_ip = 111;
                    continue _fun94748
                }
            case 107:
                var3 = new Array(0);
            case 111:
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var2 = _closure2_slot0;
                    var1 = var2.push;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
            case 128:
                var1 = var11.callbacks;
                var1 = var1[var17];
                if (var1) {
                    _fun94748_ip = 143;
                    continue _fun94748
                }
            case 141:
                return var0;
            case 143:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var7 = 0;
                var1 = var1[var7];
                var6 = undefined;
                var2 = var2.bind(var6)(var1);
                var1 = 'keyup';
                var1 = var1 === var10;
                if (!var1) {
                    _fun94748_ip = 183;
                    continue _fun94748
                }
            case 178:
                var1 = var2.bind(var6)(var17);
            case 183:
                if (!var1) {
                    _fun94748_ip = 197;
                    continue _fun94748
                }
            case 186:
                var1 = new Array(1);
                var1[0] = var17;
                var16 = var1;
            case 197:
                var1 = var11.callbacks;
                var1 = var1[var17];
                var1 = var1.length;
                var1 = var7 < var1;
                var5 = 1;
                var7 = 0;
                var4 = undefined;
                var3 = undefined;
                var2 = undefined;
                if (!var1) {
                    _fun94748_ip = 513;
                    continue _fun94748
                }
            case 233:
                var1 = var11.callbacks;
                var1 = var1[var17];
                var24 = var1[var7];
                if (var14) {
                    _fun94748_ip = 297;
                    continue _fun94748
                }
            case 250:
                var1 = var24.seq;
                if (!var1) {
                    _fun94748_ip = 297;
                    continue _fun94748
                }
            case 259:
                var18 = var11.sequenceLevels;
                var1 = var24.seq;
                var21 = var18[var1];
                var1 = var24.level;
                var20 = var4;
                var19 = var3;
                var18 = var2;
                if (!(var21 === var1)) {
                    _fun94748_ip = 479;
                    continue _fun94748
                }
            case 297:
                var1 = var24.action;
                var20 = var4;
                var19 = var3;
                var18 = var2;
                if (!(var10 === var1)) {
                    _fun94748_ip = 479;
                    continue _fun94748
                }
            case 318:
                var21 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var5];
                var22 = var21.bind(var6)(var1);
                if (!(var9 === var10)) {
                    _fun94748_ip = 357;
                    continue _fun94748
                }
            case 339:
                var1 = var15.metaKey;
                if (var1) {
                    _fun94748_ip = 357;
                    continue _fun94748
                }
            case 348:
                var1 = var15.ctrlKey;
                if (!var1) {
                    _fun94748_ip = 381;
                    continue _fun94748
                }
            case 357:
                var1 = var24.modifiers;
                var1 = var22.bind(var6)(var16, var1);
                var20 = var22;
                var19 = var3;
                var18 = var2;
                if (!var1) {
                    _fun94748_ip = 479;
                    continue _fun94748
                }
            case 381:
                var21 = !var14;
                if (!var21) {
                    _fun94748_ip = 397;
                    continue _fun94748
                }
            case 387:
                var1 = var24.combo;
                var21 = var1 === var13;
            case 397:
                var1 = var14;
                if (!var1) {
                    _fun94748_ip = 413;
                    continue _fun94748
                }
            case 403:
                var23 = var24.seq;
                var1 = var23 === var14;
            case 413:
                if (!var1) {
                    _fun94748_ip = 426;
                    continue _fun94748
                }
            case 416:
                var23 = var24.level;
                var1 = var23 === var12;
            case 426:
                var23 = var21;
                if (var21) {
                    _fun94748_ip = 435;
                    continue _fun94748
                }
            case 432:
                var23 = var1;
            case 435:
                if (!var23) {
                    _fun94748_ip = 460;
                    continue _fun94748
                }
            case 438:
                var23 = var11.callbacks;
                var25 = var23[var17];
                var23 = var25.splice;
                var23 = var23.bind(var25)(var7, var5);
            case 460:
                var23 = var0.push;
                var23 = var23.bind(var0)(var24);
                var20 = var22;
                var19 = var21;
                var18 = var1;
            case 479:
                var7 = var7 + 1;
                var1 = var11.callbacks;
                var1 = var1[var17];
                var1 = var1.length;
                var4 = var20;
                var3 = var19;
                var2 = var18;
                if (var7 < var1) {
                    _fun94748_ip = 233;
                    continue _fun94748
                }
            case 513:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12352, 12368]);