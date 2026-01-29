// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = global;
    var1 = var1.TypeError;
    var _closure1_slot0 = var1;
    var1 = function(arg0) { // Original name: iterateIterator, environment: var0
        _fun28880: for (var _fun28880_ip = 0;;) switch (_fun28880_ip) {
            case 0:
                var5 = arg0;
                var0 = undefined;
                var4 = undefined;
                if (!var5) {
                    _fun28880_ip = 186;
                    continue _fun28880
                }
            case 13:
                var1 = var5.next;
                var3 = 'function';
                var1 = typeof var1;
                if (!(var3 === var1)) {
                    _fun28880_ip = 186;
                    continue _fun28880
                }
            case 32:
                var2 = arguments.length;
                var1 = 1;
                var6 = var2 > var1;
                var2 = undefined;
                if (!var6) {
                    _fun28880_ip = 61;
                    continue _fun28880
                }
            case 47:
                var4 = arguments[var1];
                var1 = typeof var4;
                var2 = var4;
                if (!(var3 === var1)) {
                    _fun28880_ip = 151;
                    continue _fun28880
                }
            case 61:
                var1 = var2;
                if (var1) {
                    _fun28880_ip = 71;
                    continue _fun28880
                }
            case 67:
                var1 = new Array(0);
            case 71:
                var3 = var5.next;
                var4 = var3.bind(var5)();
                if (!var4) {
                    _fun28880_ip = 144;
                    continue _fun28880
                }
            case 83:
                var3 = var4.done;
                if (var3) {
                    _fun28880_ip = 144;
                    continue _fun28880
                }
            case 91:
                if (var2) {
                    _fun28880_ip = 111;
                    continue _fun28880
                }
            case 94:
                var6 = var1.push;
                var3 = var4.value;
                var3 = var6.bind(var1)(var3);
                _fun28880_ip = 121;
                continue _fun28880;
            case 111:
                var3 = var4.value;
                var3 = var2.bind(var0)(var3);
            case 121:
                var3 = var5.next;
                var6 = var3.bind(var5)();
                if (!var6) {
                    _fun28880_ip = 144;
                    continue _fun28880
                }
            case 133:
                var3 = var6.done;
                var4 = var6;
                if (!var3) {
                    _fun28880_ip = 91;
                    continue _fun28880
                }
            case 144:
                if (var2) {
                    _fun28880_ip = 149;
                    continue _fun28880
                }
            case 147:
                return var1;
            case 149:
                return var0;
            case 151:
                var2 = _closure1_slot0;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = '`callback`, if provided, must be a function';
                var8 = var1;
                var0 = new var8[var2](var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 186:
                var2 = _closure1_slot0;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = 'iterator must be an object with a `next` method';
                var8 = var1;
                var0 = new var8[var2](var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);