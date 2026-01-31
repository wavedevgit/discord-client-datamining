// modules/threads/native/useCreateThreadViewProps.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/native/useCreateThreadViewProps.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun89006: for (var _fun89006_ip = 0;;) switch (_fun89006_ip) {
            case 0:
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 1;
                var2 = var6[var2];
                var5 = undefined;
                var3 = var3.bind(var5)(var2);
                var2 = arg0;
                var3 = var3.bind(var5)(var2);
                var _closure2_slot0 = var3;
                var4 = _closure1_slot0;
                var2 = 2;
                var2 = var6[var2];
                var5 = var4.bind(var5)(var2);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot3;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = new Array(1);
                var1[0] = var3;
                var0 = function() { // Environment: var0
                    _fun89007: for (var _fun89007_ip = 0;;) switch (_fun89007_ip) {
                        case 0:
                            var2 = _closure1_slot3;
                            var1 = var2.getChannel;
                            var4 = _closure2_slot0;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun89007_ip = 40;
                                continue _fun89007
                            }
                        case 30:
                            var3 = _closure2_slot0;
                            var0 = var3.parentChannelId;
                        case 40:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var2 = var4.bind(var5)(var2, var0, var1);
                var4 = null;
                var1 = var4 == var3;
                var0 = null;
                if (var1) {
                    _fun89006_ip = 129;
                    continue _fun89006
                }
            case 105:
                var1 = var4 == var2;
                var0 = null;
                if (var1) {
                    _fun89006_ip = 129;
                    continue _fun89006
                }
            case 114:
                var1 = {};
                var1.threadSettingsDraft = var3;
                var1.parentChannel = var2;
                var0 = var1;
            case 129:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 8996, 632, 2]);