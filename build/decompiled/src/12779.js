// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun98275: for (var _fun98275_ip = 0;;) switch (_fun98275_ip) {
        case 0:
            var3 = global;
            var2 = exports;
            var6 = global;
            var7 = var6.Object;
            var5 = var7.defineProperty;
            var4 = {};
            var0 = true;
            var4.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var7)(var2, var0, var4);
            var0 = undefined;
            var2.start = var0;
            var4 = var6.window;
            var5 = 'undefined';
            var4 = typeof var4;
            var4 = var5 !== var4;
            if (!var4) {
                _fun98275_ip = 73;
                continue _fun98275
            }
        case 67:
            var4 = var6.window;
        case 73:
            if (!var4) {
                _fun98275_ip = 125;
                continue _fun98275
            }
        case 76:
            var5 = var6.window;
            var5 = var5.performance;
            if (var5) {
                _fun98275_ip = 105;
                continue _fun98275
            }
        case 91:
            var7 = var6.window;
            var5 = var7.msPerformance;
        case 105:
            if (var5) {
                _fun98275_ip = 122;
                continue _fun98275
            }
        case 108:
            var6 = var6.window;
            var5 = var6.webkitPerformance;
        case 122:
            var4 = var5;
        case 125:
            var _closure1_slot0 = var4;
            var5 = function(arg0) { // Original name: defaultPerformanceNow, environment: var1
                var0 = global;
                var1 = var0.Date;
                var0 = var1.now;
                var0 = var0.bind(var1)();
                return var0;
            };
            var _closure1_slot1 = var5;
            var5 = var3.nativePerformanceNow;
            if (var5) {
                _fun98275_ip = 165;
                continue _fun98275
            }
        case 149:
            if (!var4) {
                _fun98275_ip = 175;
                continue _fun98275
            }
        case 152:
            var4 = function() { // Original name: performanceNow, environment: var1
                _fun98277: for (var _fun98277_ip = 0;;) switch (_fun98277_ip) {
                    case 0:
                        var0 = _closure1_slot0;
                        var0 = var0.now;
                        if (!var0) {
                            _fun98277_ip = 28;
                            continue _fun98277
                        }
                    case 15:
                        var2 = _closure1_slot0;
                        var1 = var2.now;
                        var0 = var1.bind(var2)();
                    case 28:
                        return var0;
                }
            };
            _closure1_slot1 = var4;
            _fun98275_ip = 175;
            continue _fun98275;
        case 165:
            var3 = var3.nativePerformanceNow;
            _closure1_slot1 = var3;
        case 175:
            var1 = function() { // Original name: start, environment: var1
                var2 = _closure1_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var _closure2_slot0 = var1;
                var0 = function() { // Environment: var0
                    var1 = _closure2_slot0;
                    var2 = _closure1_slot1;
                    var0 = undefined;
                    var0 = var2.bind(var0)();
                    var0 = var0 - var1;
                    return var0;
                };
                return var0;
            };
            var2.start = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);