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
        var1 = 'ModuleMetadata';
        var0.name = var1;
        var1 = function(arg0) { // Original name: setup, environment: var1
            var3 = arg0;
            var _closure3_slot0 = var3;
            var4 = var3.on;
            var2 = 'beforeEnvelope';
            var1 = function(arg0) { // Environment: var0
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.forEachEnvelopeItem;
                var2 = arg0;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun9542: for (var _fun9542_ip = 0;;) switch (_fun9542_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = 'event';
                            var0 = arg1;
                            if (!(var1 === var0)) {
                                _fun9542_ip = 90;
                                continue _fun9542
                            }
                        case 14:
                            var0 = global;
                            var1 = var0.Array;
                            var0 = var1.isArray;
                            var0 = var0.bind(var1)(var2);
                            var4 = undefined;
                            var1 = undefined;
                            if (!var0) {
                                _fun9542_ip = 46;
                                continue _fun9542
                            }
                        case 39:
                            var0 = 1;
                            var1 = var2[var0];
                        case 46:
                            if (!var1) {
                                _fun9542_ip = 90;
                                continue _fun9542
                            }
                        case 49:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var0 = 2;
                            var0 = var5[var0];
                            var3 = var3.bind(var4)(var0);
                            var0 = var3.stripMetadataFromStackFrames;
                            var0 = var0.bind(var3)(var1);
                            var0 = 1;
                            var2[var0] = var1;
                        case 90:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            };
            var1 = var4.bind(var3)(var2, var1);
            var2 = var3.on;
            var1 = 'applyFrameMetadata';
            var0 = function(arg0) { // Environment: var0
                _fun9543: for (var _fun9543_ip = 0;;) switch (_fun9543_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = var3.type;
                        if (var0) {
                            _fun9543_ip = 71;
                            continue _fun9543
                        }
                    case 11:
                        var1 = _closure3_slot0;
                        var0 = var1.getOptions;
                        var0 = var0.bind(var1)();
                        var2 = var0.stackParser;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 2;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var4.bind(var0)(var1);
                        var0 = var1.addMetadataToStackFrames;
                        var0 = var0.bind(var1)(var2, var3);
                    case 71:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.setup = var1;
        return var0;
    };
    var1 = var3.bind(var4)(var1);
    var2.moduleMetadataIntegration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [881, 862, 911]);