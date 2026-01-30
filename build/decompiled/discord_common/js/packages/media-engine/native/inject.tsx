// ../discord_common/js/packages/media-engine/native/inject.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = function() { // Original name: assertInjected, environment: var1
        _fun30308: for (var _fun30308_ip = 0;;) switch (_fun30308_ip) {
            case 0:
                var1 = _closure1_slot0;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun30308_ip = 17;
                    continue _fun30308
                }
            case 13:
                var0 = undefined;
                return var0;
            case 17:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = 'Native dependencies have not been injected.';
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = arg6;
    var0 = 0;
    var4 = var3[var0];
    var3 = arg1;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/media-engine/native/inject.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: inject, environment: var1
        var0 = arg0;
        var _closure1_slot0 = var0;
        var0 = undefined;
        return var0;
    };
    var2.inject = var3;
    var3 = function() { // Original name: supported, environment: var1
        var2 = _closure1_slot3;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var1 = _closure1_slot0;
        var0 = var1.supported;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.supported = var3;
    var3 = function(arg0) { // Original name: supportsFeature, environment: var1
        var2 = _closure1_slot3;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var2 = _closure1_slot0;
        var1 = var2.supportsFeature;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.supportsFeature = var3;
    var3 = function(arg0) { // Original name: setProcessPriority, environment: var1
        var2 = _closure1_slot3;
        var0 = undefined;
        var2 = var2.bind(var0)();
        var3 = _closure1_slot0;
        var2 = var3.setProcessPriority;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setProcessPriority = var3;
    var3 = function() { // Original name: getVoiceEngine, environment: var1
        _fun30313: for (var _fun30313_ip = 0;;) switch (_fun30313_ip) {
            case 0:
                var2 = _closure1_slot3;
                var0 = undefined;
                var0 = var2.bind(var0)();
                var2 = _closure1_slot1;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun30313_ip = 43;
                    continue _fun30313
                }
            case 23:
                var2 = _closure1_slot0;
                var0 = var2.getVoiceEngine;
                var0 = var0.bind(var2)();
                var _closure1_slot1 = var0;
                _fun30313_ip = 47;
                continue _fun30313;
            case 43:
                var0 = _closure1_slot1;
            case 47:
                return var0;
        }
    };
    var2.getVoiceEngine = var3;
    var1 = function() { // Original name: getVoiceFilters, environment: var1
        _fun30314: for (var _fun30314_ip = 0;;) switch (_fun30314_ip) {
            case 0:
                var2 = _closure1_slot3;
                var0 = undefined;
                var0 = var2.bind(var0)();
                var2 = _closure1_slot2;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun30314_ip = 43;
                    continue _fun30314
                }
            case 23:
                var2 = _closure1_slot0;
                var0 = var2.getVoiceFilters;
                var0 = var0.bind(var2)();
                var _closure1_slot2 = var0;
                _fun30314_ip = 47;
                continue _fun30314;
            case 43:
                var0 = _closure1_slot2;
            case 47:
                return var0;
        }
    };
    var2.getVoiceFilters = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);