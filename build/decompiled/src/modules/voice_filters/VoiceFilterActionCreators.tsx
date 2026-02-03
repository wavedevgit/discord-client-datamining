// modules/voice_filters/VoiceFilterActionCreators.tsx
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
    var3 = 'modules/voice_filters/VoiceFilterActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'VOICE_FILTER_LOOPBACK_TOGGLE';
        var1.type = var4;
        var4 = arg0;
        var1.enabled = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setVoiceFilterLoopback = var3;
    var3 = function arg0() {
        _fun94431: for (var _fun94431_ip = 0;;) switch (_fun94431_ip) {
            case 0:
                var3 = arguments[1];
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun94431_ip = 11;
                    continue _fun94431
                }
            case 9:
                var3 = null;
            case 11:
                var1 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 0;
                var0 = var4[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.dispatch;
                var0 = {};
                var4 = 'VOICE_FILTER_REQUEST_SWITCH';
                var0.type = var4;
                var4 = arg0;
                var0.newVoiceFilterId = var4;
                var0.analyticsContext = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.requestVoiceFilterSwitch = var3;
    var1 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'VOICE_FILTER_PREFETCH';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.prefetchVoiceFilters = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [806, 2]);