// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0) { // Environment: var0
        _fun94728: for (var _fun94728_ip = 0;;) switch (_fun94728_ip) {
            case 0:
                var5 = arg0;
                var4 = this;
                var0 = var5.which;
                var1 = 'number';
                var0 = typeof var0;
                if (!(var1 !== var0)) {
                    _fun94728_ip = 35;
                    continue _fun94728
                }
            case 23:
                var0 = var5.keyCode;
                var5.which = var0;
            case 35:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var3 = var2.bind(var0)(var5);
                if (!var3) {
                    _fun94728_ip = 138;
                    continue _fun94728
                }
            case 67:
                var6 = var5.type;
                var2 = 'keyup';
                if (!(var2 === var6)) {
                    _fun94728_ip = 100;
                    continue _fun94728
                }
            case 80:
                var2 = var4.ignoreNextKeyup;
                if (!(var2 === var3)) {
                    _fun94728_ip = 100;
                    continue _fun94728
                }
            case 90:
                var2 = false;
                var4.ignoreNextKeyup = var2;
                _fun94728_ip = 138;
                continue _fun94728;
            case 100:
                var2 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 1;
                var1 = var6[var1];
                var1 = var2.bind(var0)(var1);
                var2 = var4.handleKey;
                var1 = var1.bind(var0)(var5);
                var1 = var2.bind(var4)(var3, var1, var5);
            case 138:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12356, 12359]);