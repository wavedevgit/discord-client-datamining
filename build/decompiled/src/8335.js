// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function() {
        var1 = this;
        var0 = global;
        var0 = var0.Array;
        var2 = var0.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var0
            }
        });
        var3 = var2;
        var0 = new var3[var0](var2);
        var0 = var0 instanceof Object ? var0 : var2;
        var1.buffer = var0;
        var0 = 0;
        var1.length = var0;
        var0 = undefined;
        return var0;
    };
    var0 = {};
    var3 = function arg0() {
        var2 = arg0;
        var0 = global;
        var4 = var0.Math;
        var3 = var4.floor;
        var0 = 8;
        var1 = var2 / var0;
        var3 = var3.bind(var4)(var1);
        var1 = this;
        var1 = var1.buffer;
        var1 = var1[var3];
        var2 = var2 % var0;
        var0 = 7;
        var0 = var0 - var2;
        var0 = var1 >>> var0;
        var1 = 1;
        var0 = var0 & var1;
        var0 = var1 === var0;
        return var0;
    };
    var0.get = var3;
    var3 = function arg0, arg1() {
        _fun67476: for (var _fun67476_ip = 0;;) switch (_fun67476_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var2 = this;
                var1 = 0;
                var5 = var1 < var3;
                var0 = 1;
                if (!var5) {
                    _fun67476_ip = 58;
                    continue _fun67476
                }
            case 20:
                var6 = var2.putBit;
                var5 = var3 - var1;
                var5 = var5 - var0;
                var5 = var4 >>> var5;
                var5 = var5 & var0;
                var5 = var0 === var5;
                var5 = var6.bind(var2)(var5);
                var1 = var1 + 1;
                if (var1 < var3) {
                    _fun67476_ip = 20;
                    continue _fun67476
                }
            case 58:
                var0 = undefined;
                return var0;
        }
    };
    var0.put = var3;
    var3 = function() {
        var0 = this;
        var0 = var0.length;
        return var0;
    };
    var0.getLengthInBits = var3;
    var2 = function arg0() {
        _fun67478: for (var _fun67478_ip = 0;;) switch (_fun67478_ip) {
            case 0:
                var1 = this;
                var0 = global;
                var3 = var0.Math;
                var2 = var3.floor;
                var0 = var1.length;
                var5 = 8;
                var0 = var0 / var5;
                var3 = var2.bind(var3)(var0);
                var0 = var1.buffer;
                var0 = var0.length;
                if (!(var0 <= var3)) {
                    _fun67478_ip = 66;
                    continue _fun67478
                }
            case 48:
                var4 = var1.buffer;
                var2 = var4.push;
                var0 = 0;
                var0 = var2.bind(var4)(var0);
            case 66:
                var0 = arg0;
                if (!var0) {
                    _fun67478_ip = 106;
                    continue _fun67478
                }
            case 72:
                var2 = var1.buffer;
                var4 = var2[var3];
                var0 = var1.length;
                var5 = var0 % var5;
                var0 = 128;
                var0 = var0 >>> var5;
                var0 = var4 | var0;
                var2[var3] = var0;
            case 106:
                var0 = var1.length;
                var0 = var0 + 1;
                var1.length = var0;
                var0 = undefined;
                return var0;
        }
    };
    var0.putBit = var2;
    var1.prototype = var0;
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);