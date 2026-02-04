// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = require;
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
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var3 = function() {
        var0 = {};
        var2 = 'Replay';
        var0.name = var2;
        var2 = function() {
            var0 = undefined;
            return var0;
        };
        var0.start = var2;
        var2 = function() {
            var0 = undefined;
            return var0;
        };
        var0.startBuffering = var2;
        var2 = function() {
            var0 = global;
            var1 = var0.Promise;
            var0 = var1.resolve;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.stop = var2;
        var2 = function() {
            var0 = global;
            var1 = var0.Promise;
            var0 = var1.resolve;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0.flush = var2;
        var2 = function() {
            var0 = undefined;
            return var0;
        };
        var0.getReplayId = var2;
        var1 = function() {
            var0 = undefined;
            return var0;
        };
        var0.getRecordingMode = var1;
        return var0;
    };
    var _closure1_slot3 = var3;
    var1 = function() {
        _fun12354: for (var _fun12354_ip = 0;;) switch (_fun12354_ip) {
            case 0:
                var2 = undefined;
                var1 = undefined;
                var3 = arguments.length;
                var0 = 0;
                if (!(var3 > var0)) {
                    _fun12354_ip = 21;
                    continue _fun12354
                }
            case 13:
                var3 = arguments[var0];
                if (!(var2 === var3)) {
                    _fun12354_ip = 25;
                    continue _fun12354
                }
            case 21:
                var8 = {};
                _fun12354_ip = 29;
                continue _fun12354;
            case 25:
                var8 = arguments[var0];
            case 29:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 1;
                var0 = var4[var0];
                var3 = var3.bind(var2)(var0);
                var0 = var3.notWeb;
                var0 = var0.bind(var3)();
                if (var0) {
                    _fun12354_ip = 235;
                    continue _fun12354
                }
            case 68:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 2;
                var0 = var4[var0];
                var4 = var3.bind(var2)(var0);
                var3 = var4.replayIntegration;
                var0 = global;
                var7 = var0.Object;
                var6 = var7.assign;
                var9 = var0.Object;
                var5 = var9.assign;
                var0 = {};
                var5 = var5.bind(var9)(var0, var8);
                var0 = {};
                var11 = ['.sentry-react-native-mask'];
                var10 = var11.concat;
                var12 = _closure1_slot2;
                var9 = var8.mask;
                if (var9) {
                    _fun12354_ip = 160;
                    continue _fun12354
                }
            case 156:
                var9 = new Array(0);
            case 160:
                var9 = var12.bind(var2)(var9);
                var9 = var10.bind(var11)(var9);
                var0.mask = var9;
                var10 = ['.sentry-react-native-unmask:not(.sentry-react-native-mask *) > *'];
                var9 = var10.concat;
                var11 = _closure1_slot2;
                var8 = var8.unmask;
                if (var8) {
                    _fun12354_ip = 207;
                    continue _fun12354
                }
            case 203:
                var8 = new Array(0);
            case 207:
                var8 = var11.bind(var2)(var8);
                var8 = var9.bind(var10)(var8);
                var0.unmask = var8;
                var0 = var6.bind(var7)(var5, var0);
                var0 = var3.bind(var4)(var0);
                _fun12354_ip = 243;
                continue _fun12354;
            case 235:
                var1 = _closure1_slot3;
                var0 = var1.bind(var2)();
            case 243:
                return var0;
        }
    };
    var2.browserReplayIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 999, 1131]);