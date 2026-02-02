// modules/video_calls/useIsStreamFocused.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isStreamParticipant;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/video_calls/useIsStreamFocused.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun64729: for (var _fun64729_ip = 0;;) switch (_fun64729_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var2 = var3[var2];
                var3 = undefined;
                var5 = var4.bind(var3)(var2);
                var4 = var5.useStateFromStores;
                var6 = _closure1_slot2;
                var2 = new Array(1);
                var2[0] = var6;
                var0 = function() { // Environment: var0
                    _fun64730: for (var _fun64730_ip = 0;;) switch (_fun64730_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun64730_ip = 38;
                                continue _fun64730
                            }
                        case 16:
                            var3 = _closure1_slot2;
                            var2 = var3.getSelectedParticipant;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 38:
                            return var0;
                    }
                };
                var2 = var4.bind(var5)(var2, var0);
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun64729_ip = 80;
                    continue _fun64729
                }
            case 71:
                var1 = _closure1_slot3;
                var0 = var1.bind(var3)(var2);
            case 80:
                return var0;
        }
    };
    var2.useIsStreamFocused = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3909, 3484, 566, 2]);