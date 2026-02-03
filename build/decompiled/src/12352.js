// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0) { // Environment: var0
        _fun94320: for (var _fun94320_ip = 0;;) switch (_fun94320_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 0;
                var1 = var5[var1];
                var2 = undefined;
                var3 = var4.bind(var2)(var1);
                var1 = 1;
                var1 = var5[var1];
                var5 = var4.bind(var2)(var1);
                var2 = var0.type;
                var1 = 'keypress';
                if (!(var1 !== var2)) {
                    _fun94320_ip = 133;
                    continue _fun94320
                }
            case 52:
                var1 = var0.which;
                var1 = var3[var1];
                var2 = var0.which;
                if (var1) {
                    _fun94320_ip = 127;
                    continue _fun94320
                }
            case 71:
                var1 = var5[var2];
                if (var1) {
                    _fun94320_ip = 115;
                    continue _fun94320
                }
            case 78:
                var1 = global;
                var6 = var1.String;
                var4 = var6.fromCharCode;
                var1 = var0.which;
                var4 = var4.bind(var6)(var1);
                var1 = var4.toLowerCase;
                var1 = var1.bind(var4)();
                _fun94320_ip = 125;
                continue _fun94320;
            case 115:
                var4 = var0.which;
                var1 = var5[var4];
            case 125:
                _fun94320_ip = 131;
                continue _fun94320;
            case 127:
                var1 = var3[var2];
            case 131:
                return var1;
            case 133:
                var1 = global;
                var3 = var1.String;
                var2 = var3.fromCharCode;
                var1 = var0.which;
                var2 = var2.bind(var3)(var1);
                var1 = var0.shiftKey;
                var0 = var2;
                if (var1) {
                    _fun94320_ip = 180;
                    continue _fun94320
                }
            case 170:
                var1 = var2.toLowerCase;
                var0 = var1.bind(var2)();
            case 180:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12353, 12354]);