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
        _fun2942: for (var _fun2942_ip = 0;;) switch (_fun2942_ip) {
            case 0:
                var2 = arg0;
                var1 = 'string';
                var0 = typeof var2;
                if (!(var1 !== var0)) {
                    _fun2942_ip = 207;
                    continue _fun2942
                }
            case 17:
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 0;
                var0 = var4[var0];
                var5 = undefined;
                var0 = var1.bind(var5)(var0);
                var0 = var0.default;
                var0 = var2 instanceof var0;
                if (var0) {
                    _fun2942_ip = 190;
                    continue _fun2942
                }
            case 56:
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 1;
                var0 = var4[var0];
                var0 = var1.bind(var5)(var0);
                var0 = var0.default;
                var0 = var2 instanceof var0;
                if (var0) {
                    _fun2942_ip = 168;
                    continue _fun2942
                }
            case 88:
                var0 = global;
                var1 = var0.ArrayBuffer;
                var1 = var2 instanceof var1;
                if (var1) {
                    _fun2942_ip = 126;
                    continue _fun2942
                }
            case 103:
                var1 = var0.ArrayBuffer;
                var0 = var1.isView;
                var1 = var0.bind(var1)(var2);
                var0 = var2;
                if (!var1) {
                    _fun2942_ip = 166;
                    continue _fun2942
                }
            case 126:
                var1 = {};
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 2;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.default;
                var3 = var3.bind(var4)(var2);
                var1.base64 = var3;
                var0 = var1;
            case 166:
                _fun2942_ip = 188;
                continue _fun2942;
            case 168:
                var1 = {};
                var3 = var2.getParts;
                var3 = var3.bind(var2)();
                var1.formData = var3;
                var0 = var1;
            case 188:
                _fun2942_ip = 205;
                continue _fun2942;
            case 190:
                var1 = {};
                var3 = var2.data;
                var1.blob = var3;
                var0 = var1;
            case 205:
                _fun2942_ip = 216;
                continue _fun2942;
            case 207:
                var1 = {};
                var1.string = var2;
                var0 = var1;
            case 216:
                return var0;
        }
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [197, 211, 212]);