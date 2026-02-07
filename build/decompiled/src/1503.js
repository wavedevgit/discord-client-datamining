// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function arg0() {
        _fun17178: for (var _fun17178_ip = 0;;) switch (_fun17178_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var3 = 0;
                var2 = var0[var3];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var2 = var2.CHILD_STATE;
                var4 = var1[var2];
                var5 = null;
                if (!(var5 == var4)) {
                    _fun17178_ip = 48;
                    continue _fun17178
                }
            case 43:
                var4 = var1.state;
            case 48:
                var1 = var1.params;
                if (var4) {
                    _fun17178_ip = 93;
                    continue _fun17178
                }
            case 57:
                var6 = var5 == var1;
                var2 = undefined;
                if (var6) {
                    _fun17178_ip = 72;
                    continue _fun17178
                }
            case 66:
                var2 = var1.screen;
            case 72:
                var6 = 'string';
                var2 = typeof var2;
                var0 = undefined;
                if (!(var6 === var2)) {
                    _fun17178_ip = 91;
                    continue _fun17178
                }
            case 85:
                var0 = var1.screen;
            case 91:
                _fun17178_ip = 169;
                continue _fun17178;
            case 93:
                var2 = var4.routes;
                var1 = var4.index;
                if (!(var5 == var1)) {
                    _fun17178_ip = 160;
                    continue _fun17178
                }
            case 108:
                var5 = var4.type;
                var6 = 'string';
                var5 = typeof var5;
                if (!(var6 === var5)) {
                    _fun17178_ip = 139;
                    continue _fun17178
                }
            case 124:
                var6 = var4.type;
                var5 = 'stack';
                var3 = 0;
                if (!(var5 === var6)) {
                    _fun17178_ip = 157;
                    continue _fun17178
                }
            case 139:
                var4 = var4.routes;
                var5 = var4.length;
                var4 = 1;
                var3 = var5 - var4;
            case 157:
                var1 = var3;
            case 160:
                var1 = var2[var1];
                var0 = var1.name;
            case 169:
                return var0;
        }
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1504]);