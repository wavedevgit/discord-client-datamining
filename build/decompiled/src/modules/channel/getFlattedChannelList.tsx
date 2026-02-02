// modules/channel/getFlattedChannelList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 1;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel/getFlattedChannelList.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun41498: for (var _fun41498_ip = 0;;) switch (_fun41498_ip) {
            case 0:
                var2 = arguments[2];
                var1 = arg1;
                var _closure2_slot0 = var1;
                var4 = undefined;
                if (!(var2 === var4)) {
                    _fun41498_ip = 23;
                    continue _fun41498
                }
            case 18:
                var2 = function() {
                    var0 = true;
                    return var0;
                };
            case 23:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 0;
                var1 = var5[var1];
                var3 = var3.bind(var4)(var1);
                var1 = arg0;
                var3 = var3.bind(var4)(var1);
                var1 = var3.map;
                var0 = function(arg0) { // Environment: var0
                    _fun41500: for (var _fun41500_ip = 0;;) switch (_fun41500_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.channel;
                            var2 = var0.id;
                            var0 = 'null';
                            if (!(var0 !== var2)) {
                                _fun41500_ip = 56;
                                continue _fun41500
                            }
                        case 21:
                            var0 = new Array(2);
                            var0[0] = var1;
                            var3 = _closure2_slot0;
                            var2 = var1.channel;
                            var2 = var2.id;
                            var2 = var3[var2];
                            var0[1] = var2;
                            _fun41500_ip = 77;
                            continue _fun41500;
                        case 56:
                            var2 = _closure2_slot0;
                            var1 = var1.channel;
                            var1 = var1.id;
                            var0 = var2[var1];
                        case 77:
                            return var0;
                    }
                };
                var1 = var1.bind(var3)(var0);
                var0 = var1.flattenDeep;
                var1 = var0.bind(var1)();
                var0 = var1.filter;
                var1 = var0.bind(var1)(var2);
                var0 = var1.value;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [22, 2]);