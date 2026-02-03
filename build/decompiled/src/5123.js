// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = module;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var1 = function arg0, arg1() {
        _fun45732: for (var _fun45732_ip = 0;;) switch (_fun45732_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                if (var3) {
                    _fun45732_ip = 13;
                    continue _fun45732
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var1 = 'string';
                var0 = typeof var3;
                if (!(var1 !== var0)) {
                    _fun45732_ip = 203;
                    continue _fun45732
                }
            case 27:
                var0 = {};
                var1 = var0.toString;
                var0 = var1.call;
                var5 = var0.bind(var1)(var3);
                var4 = var5.slice;
                var1 = 8;
                var0 = -1;
                var1 = var4.bind(var5)(var1, var0);
                var0 = 'Object';
                var0 = var0 === var1;
                if (!var0) {
                    _fun45732_ip = 80;
                    continue _fun45732
                }
            case 75:
                var0 = var3.constructor;
            case 80:
                var4 = var1;
                if (!var0) {
                    _fun45732_ip = 96;
                    continue _fun45732
                }
            case 86:
                var0 = var3.constructor;
                var4 = var0.name;
            case 96:
                var0 = 'Map';
                if (!(var0 !== var4)) {
                    _fun45732_ip = 183;
                    continue _fun45732
                }
            case 104:
                var0 = 'Set';
                if (!(var0 !== var4)) {
                    _fun45732_ip = 183;
                    continue _fun45732
                }
            case 112:
                var0 = 'Arguments';
                if (!(var0 !== var4)) {
                    _fun45732_ip = 151;
                    continue _fun45732
                }
            case 122:
                var1 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var0 = var1.test;
                var1 = var0.bind(var1)(var4);
                var0 = undefined;
                if (!var1) {
                    _fun45732_ip = 181;
                    continue _fun45732
                }
            case 151:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 0;
                var1 = var4[var1];
                var4 = undefined;
                var1 = var5.bind(var4)(var1);
                var0 = var1.bind(var4)(var3, var2);
            case 181:
                _fun45732_ip = 201;
                continue _fun45732;
            case 183:
                var1 = global;
                var4 = var1.Array;
                var1 = var4.from;
                var0 = var1.bind(var4)(var3);
            case 201:
                return var0;
            case 203:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var4.bind(var1)(var0);
                var0 = var0.bind(var1)(var3, var2);
                return var0;
        }
    };
    var0.exports = var1;
    var2 = var0.exports;
    var1 = true;
    var2.__esModule = var1;
    var1 = var0.exports;
    var0 = var0.exports;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5121]);