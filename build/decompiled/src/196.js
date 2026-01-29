// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun2811: for (var _fun2811_ip = 0;;) switch (_fun2811_ip) {
        case 0:
            var2 = exports;
            var0 = global;
            var5 = var0.Object;
            var3 = var5.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var5)(var2, var0, var1);
            var1 = dependencyMap;
            var0 = 0;
            var3 = var1[var0];
            var1 = metroImportAll;
            var0 = undefined;
            var5 = var1.bind(var0)(var3);
            var3 = var5.get;
            var1 = 'BlobModule';
            var3 = var3.bind(var5)(var1);
            var _closure1_slot0 = var3;
            var1 = null;
            var _closure1_slot1 = var1;
            var3 = var1 != var3;
            if (!var3) {
                _fun2811_ip = 162;
                continue _fun2811
            }
        case 87:
            var3 = {};
            var5 = function() { // Original name: getConstants, environment: var4
                _fun2812: for (var _fun2812_ip = 0;;) switch (_fun2812_ip) {
                    case 0:
                        var2 = _closure1_slot1;
                        var1 = null;
                        if (!(var1 == var2)) {
                            _fun2812_ip = 31;
                            continue _fun2812
                        }
                    case 13:
                        var2 = _closure1_slot0;
                        var1 = var2.getConstants;
                        var1 = var1.bind(var2)();
                        _closure1_slot1 = var1;
                    case 31:
                        var0 = _closure1_slot1;
                        return var0;
                }
            };
            var3.getConstants = var5;
            var5 = function() { // Original name: addNetworkingHandler, environment: var4
                var1 = _closure1_slot0;
                var0 = var1.addNetworkingHandler;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var3.addNetworkingHandler = var5;
            var5 = function(arg0) { // Original name: addWebSocketHandler, environment: var4
                var2 = _closure1_slot0;
                var1 = var2.addWebSocketHandler;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var3.addWebSocketHandler = var5;
            var5 = function(arg0) { // Original name: removeWebSocketHandler, environment: var4
                var2 = _closure1_slot0;
                var1 = var2.removeWebSocketHandler;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var3.removeWebSocketHandler = var5;
            var5 = function(arg0, arg1) { // Original name: sendOverSocket, environment: var4
                var3 = _closure1_slot0;
                var2 = var3.sendOverSocket;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                var0 = undefined;
                return var0;
            };
            var3.sendOverSocket = var5;
            var5 = function(arg0, arg1) { // Original name: createFromParts, environment: var4
                var3 = _closure1_slot0;
                var2 = var3.createFromParts;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                var0 = undefined;
                return var0;
            };
            var3.createFromParts = var5;
            var4 = function(arg0) { // Original name: release, environment: var4
                var2 = _closure1_slot0;
                var1 = var2.release;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var3.release = var4;
            var1 = var3;
        case 162:
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [55]);