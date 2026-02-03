// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var4 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var4;
    var0 = 0;
    var2 = var4[var0];
    var0 = undefined;
    var2 = var3.bind(var0)(var2);
    var2 = var2.bind(var0)();
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var4[var2];
    var3 = var3.bind(var0)(var2);
    var2 = '%Math.floor%';
    var2 = var3.bind(var0)(var2);
    var _closure1_slot3 = var2;
    var2 = function arg0, arg1() {
        _fun16429: for (var _fun16429_ip = 0;;) switch (_fun16429_ip) {
            case 0:
                var0 = arg0;
                var5 = arg1;
                var2 = undefined;
                var4 = undefined;
                var3 = 'function';
                var1 = typeof var0;
                if (!(var3 === var1)) {
                    _fun16429_ip = 344;
                    continue _fun16429
                }
            case 24:
                var3 = 'number';
                var1 = typeof var5;
                if (!(var3 === var1)) {
                    _fun16429_ip = 293;
                    continue _fun16429
                }
            case 38:
                var1 = 0;
                if (!(!(var5 < var1))) {
                    _fun16429_ip = 293;
                    continue _fun16429
                }
            case 47:
                var1 = 4294967295.0;
                if (!(!(var5 > var1))) {
                    _fun16429_ip = 293;
                    continue _fun16429
                }
            case 64:
                var3 = _closure1_slot3;
                var3 = var3.bind(var2)(var5);
                if (!(var3 === var5)) {
                    _fun16429_ip = 293;
                    continue _fun16429
                }
            case 83:
                var6 = arguments.length;
                var3 = 2;
                var7 = var6 > var3;
                if (!var7) {
                    _fun16429_ip = 106;
                    continue _fun16429
                }
            case 96:
                var3 = arguments[var3];
                var3 = !var3;
                var7 = !var3;
            case 106:
                var4 = 'length';
                var9 = var4 in var0;
                var6 = true;
                var8 = true;
                if (!var9) {
                    _fun16429_ip = 221;
                    continue _fun16429
                }
            case 121:
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var11 = 3;
                var9 = var9[var11];
                var9 = var10.bind(var2)(var9);
                var6 = true;
                var8 = true;
                if (!var9) {
                    _fun16429_ip = 221;
                    continue _fun16429
                }
            case 148:
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var11];
                var9 = var10.bind(var2)(var9);
                var11 = var9.bind(var2)(var0, var4);
                var9 = var11;
                if (!var11) {
                    _fun16429_ip = 186;
                    continue _fun16429
                }
            case 177:
                var10 = var11.configurable;
                var9 = !var10;
            case 186:
                var10 = true;
                if (!var9) {
                    _fun16429_ip = 193;
                    continue _fun16429
                }
            case 191:
                var10 = false;
            case 193:
                var9 = var11;
                if (!var9) {
                    _fun16429_ip = 208;
                    continue _fun16429
                }
            case 199:
                var11 = var11.writable;
                var9 = !var11;
            case 208:
                var6 = var10;
                var8 = true;
                if (!var9) {
                    _fun16429_ip = 221;
                    continue _fun16429
                }
            case 216:
                var8 = false;
                var6 = var10;
            case 221:
                if (var6) {
                    _fun16429_ip = 227;
                    continue _fun16429
                }
            case 224:
                var6 = var8;
            case 227:
                if (var6) {
                    _fun16429_ip = 233;
                    continue _fun16429
                }
            case 230:
                var6 = !var7;
            case 233:
                if (!var6) {
                    _fun16429_ip = 291;
                    continue _fun16429
                }
            case 236:
                var6 = _closure1_slot2;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 4;
                var1 = var8[var1];
                var1 = var7.bind(var2)(var1);
                if (var6) {
                    _fun16429_ip = 272;
                    continue _fun16429
                }
            case 263:
                var6 = var1.bind(var2)(var0, var4, var5);
                _fun16429_ip = 291;
                continue _fun16429;
            case 272:
                var18 = undefined;
                var17 = var0;
                var16 = var4;
                var15 = var5;
                var14 = true;
                var13 = true;
                var1 = var18[var1](var17, var16, var15, var14, var13, var12);
            case 291:
                return var0;
            case 293:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 2;
                var0 = var3[var0];
                var3 = var1.bind(var2)(var0);
                var0 = var3.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var3
                    }
                });
                var17 = '`length` must be a positive 32-bit integer';
                var18 = var1;
                var0 = new var18[var3](var17, var16);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 344:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 2;
                var0 = var3[var0];
                var2 = var1.bind(var2)(var0);
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var17 = '`fn` is not a function';
                var18 = var1;
                var0 = new var18[var2](var17, var16);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1405, 517, 518, 519, 1406]);