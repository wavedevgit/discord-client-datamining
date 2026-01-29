// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var0
        _fun94736: for (var _fun94736_ip = 0;;) switch (_fun94736_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var4 = arg2;
                var9 = arg3;
                var8 = arg4;
                var3 = this;
                var1 = var3.directMap;
                var0 = ':';
                var0 = var6 + var0;
                var0 = var0 + var4;
                var1[var0] = var5;
                var2 = var6.replace;
                var0 = /\s+/g;
                var1 = ' ';
                var2 = var2.bind(var6)(var0, var1);
                var0 = var2.split;
                var1 = var0.bind(var2)(var1);
                var6 = var1.length;
                var0 = 1;
                if (!(!(var6 > var0))) {
                    _fun94736_ip = 271;
                    continue _fun94736
                }
            case 96:
                var0 = var3.getKeyInfo;
                var10 = var0.bind(var3)(var2, var4);
                var7 = var3.callbacks;
                var6 = var10.key;
                var11 = var3.callbacks;
                var0 = var10.key;
                var0 = var11[var0];
                if (var0) {
                    _fun94736_ip = 141;
                    continue _fun94736
                }
            case 137:
                var0 = new Array(0);
            case 141:
                var7[var6] = var0;
                var11 = var3.getMatches;
                var18 = var10.key;
                var17 = var10.modifiers;
                var0 = {};
                var12 = var10.action;
                var0.type = var12;
                var19 = var3;
                var16 = var0;
                var15 = var9;
                var14 = var2;
                var13 = var8;
                var0 = var19[var11](var18, var17, var16, var15, var14, var13, var12);
                var6 = var3.callbacks;
                var0 = var10.key;
                var7 = var6[var0];
                var0 = 'push';
                if (!var9) {
                    _fun94736_ip = 218;
                    continue _fun94736
                }
            case 214:
                var0 = 'unshift';
            case 218:
                var6 = var7[var0];
                var0 = {};
                var0.callback = var5;
                var11 = var10.modifiers;
                var0.modifiers = var11;
                var10 = var10.action;
                var0.action = var10;
                var0.seq = var9;
                var0.level = var8;
                var0.combo = var2;
                var0 = var6.bind(var7)(var0);
                _fun94736_ip = 296;
                continue _fun94736;
            case 271:
                var0 = var3.bindSequence;
                var19 = var3;
                var18 = var2;
                var17 = var1;
                var16 = var5;
                var15 = var4;
                var0 = var19[var0](var18, var17, var16, var15, var14);
            case 296:
                var0 = undefined;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);