// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var4 = function arg0, arg1, arg2, arg3, arg4, arg5() {
        _fun62364: for (var _fun62364_ip = 0;;) switch (_fun62364_ip) {
            case 0:
                var2 = arg2;
                var3 = arg3;
                var7 = arg4;
                var5 = arg5;
                var0 = arg1;
                var4 = var0[var2];
                var6 = null;
                if (!(var6 != var4)) {
                    _fun62364_ip = 193;
                    continue _fun62364
                }
            case 28:
                var9 = typeof var4;
                var8 = undefined;
                var1 = 'number';
                var0 = undefined;
                if (!(var1 !== var9)) {
                    _fun62364_ip = 191;
                    continue _fun62364
                }
            case 46:
                var1 = 'string';
                var0 = undefined;
                if (!(var1 === var9)) {
                    _fun62364_ip = 191;
                    continue _fun62364
                }
            case 59:
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var1 = 0;
                var1 = var10[var1];
                var1 = var9.bind(var8)(var1);
                var1 = var1.bind(var8)(var4);
                var0 = undefined;
                if (!(var6 === var1)) {
                    _fun62364_ip = 191;
                    continue _fun62364
                }
            case 92:
                var1 = global;
                var6 = var1.Error;
                var1 = 'Invalid ';
                var9 = var1 + var7;
                var8 = var5;
                if (var5) {
                    _fun62364_ip = 119;
                    continue _fun62364
                }
            case 116:
                var8 = var2;
            case 119:
                var1 = ' `';
                var1 = var9 + var1;
                var8 = var1 + var8;
                var1 = '` supplied to `';
                var1 = var8 + var1;
                var8 = var1 + var3;
                var1 = '`: ';
                var1 = var8 + var1;
                var8 = var1 + var4;
                var1 = var6.prototype;
                var4 = Object.create(var1, {
                    constructor: {
                        value: var6
                    }
                });
                var1 = "\nValid color formats are\n  - '#f0f' (#rgb)\n  - '#f0fc' (#rgba)\n  - '#ff00ff' (#rrggbb)\n  - '#ff00ff00' (#rrggbbaa)\n  - 'rgb(255, 255, 255)'\n  - 'rgba(255, 255, 255, 1.0)'\n  - 'hsl(360, 100%, 100%)'\n  - 'hsla(360, 100%, 100%, 1.0)'\n  - 'transparent'\n  - 'red'\n  - 0xff00ff00 (0xrrggbbaa)\n";
                var11 = var8 + var1;
                var12 = var4;
                var1 = new var12[var6](var11, var10);
                var0 = var1 instanceof Object ? var1 : var4;
            case 191:
                _fun62364_ip = 286;
                continue _fun62364;
            case 193:
                var4 = arg0;
                var1 = undefined;
                if (!var4) {
                    _fun62364_ip = 283;
                    continue _fun62364
                }
            case 201:
                var4 = global;
                var4 = var4.Error;
                var6 = 'Required ';
                var6 = var6 + var7;
                if (var5) {
                    _fun62364_ip = 225;
                    continue _fun62364
                }
            case 222:
                var5 = var2;
            case 225:
                var2 = ' `';
                var2 = var6 + var2;
                var5 = var2 + var5;
                var2 = '` was not specified in `';
                var2 = var5 + var2;
                var5 = var2 + var3;
                var2 = var4.prototype;
                var3 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var2 = '`.';
                var11 = var5 + var2;
                var12 = var3;
                var2 = new var12[var4](var11, var10);
                var1 = var2 instanceof Object ? var2 : var3;
            case 283:
                var0 = var1;
            case 286:
                return var0;
        }
    };
    var1 = var4.bind;
    var3 = null;
    var0 = false;
    var1 = var1.bind(var4)(var3, var0);
    var2 = var4.bind;
    var0 = true;
    var0 = var2.bind(var4)(var3, var0);
    var1.isRequired = var0;
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7776]);