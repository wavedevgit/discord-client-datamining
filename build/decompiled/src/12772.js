// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = undefined;
    var2.default = var0;
    var1 = function arg0() {
        _fun97667: for (var _fun97667_ip = 0;;) switch (_fun97667_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.createSocket;
                var4 = var0.host;
                var3 = var0.port;
                var0 = var0.onCommand;
                var1 = null;
                if (!(var1 == var2)) {
                    _fun97667_ip = 69;
                    continue _fun97667
                }
            case 33:
                var1 = global;
                var5 = var1.Error;
                var1 = var5.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var5
                    }
                });
                var6 = 'invalid createSocket function';
                var7 = var2;
                var1 = new var7[var5](var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 69:
                var2 = 'string';
                var1 = typeof var4;
                var1 = var2 === var1;
                if (!var1) {
                    _fun97667_ip = 86;
                    continue _fun97667
                }
            case 83:
                var1 = var4;
            case 86:
                if (!var1) {
                    _fun97667_ip = 97;
                    continue _fun97667
                }
            case 89:
                var2 = '';
                var1 = var2 !== var4;
            case 97:
                if (var1) {
                    _fun97667_ip = 136;
                    continue _fun97667
                }
            case 100:
                var1 = global;
                var4 = var1.Error;
                var1 = var4.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = 'invalid host';
                var7 = var2;
                var1 = new var7[var4](var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 136:
                var2 = 'number';
                var1 = typeof var3;
                var1 = var2 === var1;
                if (!var1) {
                    _fun97667_ip = 157;
                    continue _fun97667
                }
            case 150:
                var2 = 1;
                var1 = var3 >= var2;
            case 157:
                if (!var1) {
                    _fun97667_ip = 170;
                    continue _fun97667
                }
            case 160:
                var2 = 65535;
                var1 = var3 <= var2;
            case 170:
                if (var1) {
                    _fun97667_ip = 209;
                    continue _fun97667
                }
            case 173:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = 'invalid port';
                var7 = var2;
                var1 = new var7[var3](var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 209:
                var1 = 'function';
                var0 = typeof var0;
                if (!(var1 !== var0)) {
                    _fun97667_ip = 256;
                    continue _fun97667
                }
            case 220:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var6 = 'invalid onCommand handler';
                var7 = var1;
                var0 = new var7[var2](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 256:
                var0 = undefined;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);