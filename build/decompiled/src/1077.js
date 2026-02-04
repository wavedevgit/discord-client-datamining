// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var0 = var0.Symbol;
    var5 = var0.toStringTag;
    var0 = {};
    var8 = 'Module';
    var0.value = var8;
    var0 = var6.bind(var7)(var2, var5, var0);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var4 = var4.bind(var0)(var3);
    var3 = var4.defineIntegration;
    var1 = function() { // Environment: var1
        var0 = {};
        var1 = 'BrowserSession';
        var0.name = var1;
        var1 = function() {
            _fun11018: for (var _fun11018_ip = 0;;) switch (_fun11018_ip) {
                case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 1;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var2 = var2.WINDOW;
                    var2 = var2.document;
                    if (!(var0 === var2)) {
                        _fun11018_ip = 116;
                        continue _fun11018
                    }
                case 41:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 2;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var2 = var2.DEBUG_BUILD;
                    if (!var2) {
                        _fun11018_ip = 204;
                        continue _fun11018
                    }
                case 73:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 0;
                    var2 = var4[var2];
                    var2 = var3.bind(var0)(var2);
                    var4 = var2.debug;
                    var3 = var4.warn;
                    var2 = 'Using the `browserSessionIntegration` in non-browser environments is not supported.';
                    var2 = var3.bind(var4)(var2);
                    _fun11018_ip = 204;
                    continue _fun11018;
                case 116:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 0;
                    var4 = var3[var1];
                    var6 = var2.bind(var0)(var4);
                    var5 = var6.startSession;
                    var4 = {};
                    var7 = true;
                    var4.ignoreDuration = var7;
                    var4 = var5.bind(var6)(var4);
                    var1 = var3[var1];
                    var4 = var2.bind(var0)(var1);
                    var1 = var4.captureSession;
                    var1 = var1.bind(var4)();
                    var1 = 3;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.addHistoryInstrumentationHandler;
                    var1 = function(arg0) { // Environment: var1
                        _fun11019: for (var _fun11019_ip = 0;;) switch (_fun11019_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.from;
                                var2 = var0.to;
                                var0 = undefined;
                                var1 = var0 !== var3;
                                if (!var1) {
                                    _fun11019_ip = 26;
                                    continue _fun11019
                                }
                            case 22:
                                var1 = var3 !== var2;
                            case 26:
                                if (!var1) {
                                    _fun11019_ip = 90;
                                    continue _fun11019
                                }
                            case 29:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var1 = 0;
                                var4 = var3[var1];
                                var6 = var2.bind(var0)(var4);
                                var5 = var6.startSession;
                                var4 = {};
                                var7 = true;
                                var4.ignoreDuration = var7;
                                var4 = var5.bind(var6)(var4);
                                var1 = var3[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.captureSession;
                                var1 = var1.bind(var2)();
                            case 90:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                case 204:
                    return var0;
            }
        };
        var0.setupOnce = var1;
        return var0;
    };
    var1 = var3.bind(var4)(var1);
    var2.browserSessionIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817, 1025, 1073, 1030]);