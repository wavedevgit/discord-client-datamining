// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var1 = function(arg0) { // Original name: QR8bitByte, environment: var2
        var2 = this;
        var3 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var3.bind(var0)(var1);
        var1 = var1.MODE_8BIT_BYTE;
        var2.mode = var1;
        var1 = arg0;
        var2.data = var1;
        return var0;
    };
    var0 = {};
    var3 = function(arg0) { // Original name: getLength, environment: var2
        var0 = this;
        var0 = var0.data;
        var0 = var0.length;
        return var0;
    };
    var0.getLength = var3;
    var2 = function(arg0) { // Original name: write, environment: var2
        _fun67398: for (var _fun67398_ip = 0;;) switch (_fun67398_ip) {
            case 0:
                var4 = arg0;
                var3 = this;
                var0 = var3.data;
                var0 = var0.length;
                var2 = 0;
                var0 = var2 < var0;
                var1 = 8;
                if (!var0) {
                    _fun67398_ip = 72;
                    continue _fun67398
                }
            case 27:
                var5 = var4.put;
                var6 = var3.data;
                var0 = var6.charCodeAt;
                var0 = var0.bind(var6)(var2);
                var0 = var5.bind(var4)(var0, var1);
                var2 = var2 + 1;
                var0 = var3.data;
                var0 = var0.length;
                if (var2 < var0) {
                    _fun67398_ip = 27;
                    continue _fun67398
                }
            case 72:
                var0 = undefined;
                return var0;
        }
    };
    var0.write = var2;
    var1.prototype = var0;
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8329]);