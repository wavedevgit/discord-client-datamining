// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = undefined;
    var2.default = var0;
    var4 = dependencyMap;
    var3 = 0;
    var4 = var4[var3];
    var3 = require;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot0 = var3;
    var3 = function() {
        var0 = function arg0() {
            var0 = global;
            var2 = var0.console;
            var1 = var2.warn;
            var0 = var0.HermesInternal;
            var5 = var0.concat;
            var4 = 'DevMenu.';
            var3 = arg0;
            var0 = '() not available in this environment';
            var0 = var5.bind(var4)(var3, var0);
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var _closure2_slot0 = var0;
        var0 = {};
        var2 = function() {
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = 'reload';
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0.reload = var2;
        var2 = function() {
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = 'show';
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0.show = var2;
        var2 = function() {
            var0 = {};
            return var0;
        };
        var0.getConstants = var2;
        var2 = function() {
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = 'debugRemotely';
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0.debugRemotely = var2;
        var2 = function() {
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = 'setHotLoadingEnabled';
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0.setHotLoadingEnabled = var2;
        var1 = function() {
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = 'setProfilingEnabled';
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0.setProfilingEnabled = var1;
        var1 = _closure1_slot0;
        var1 = var1.Platform;
        var1 = var1.OS;
        return var0;
    };
    var _closure1_slot1 = var3;
    var1 = function() {
        var0 = function() { // Environment: var0
            var0 = {};
            var1 = function arg0() {
                _fun98261: for (var _fun98261_ip = 0;;) switch (_fun98261_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.type;
                        var2 = 'devtools.open';
                        if (!(var2 !== var1)) {
                            _fun98261_ip = 33;
                            continue _fun98261
                        }
                    case 18:
                        var3 = var0.type;
                        var1 = 'devtools.reload';
                        if (!(var1 === var3)) {
                            _fun98261_ip = 103;
                            continue _fun98261
                        }
                    case 33:
                        var1 = var0.type;
                        if (!(var2 === var1)) {
                            _fun98261_ip = 65;
                            continue _fun98261
                        }
                    case 42:
                        var2 = _closure1_slot1;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        var1 = var2.show;
                        var1 = var1.bind(var2)();
                    case 65:
                        var1 = var0.type;
                        var0 = 'devtools.reload';
                        if (!(var0 === var1)) {
                            _fun98261_ip = 103;
                            continue _fun98261
                        }
                    case 80:
                        var1 = _closure1_slot1;
                        var0 = undefined;
                        var1 = var1.bind(var0)();
                        var0 = var1.reload;
                        var0 = var0.bind(var1)();
                    case 103:
                        var0 = undefined;
                        return var0;
                }
            };
            var0.onCommand = var1;
            return var0;
        };
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27]);