// utils/native/openChannelCallModalForChannelId.tsx
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
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/native/openChannelCallModalForChannelId.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun64139: for (var _fun64139_ip = 0;;) switch (_fun64139_ip) {
            case 0:
                var1 = arg1;
                var4 = _closure1_slot2;
                var3 = var4.getChannel;
                var2 = arg0;
                var2 = var3.bind(var4)(var2);
                var3 = null;
                if (!(var3 != var2)) {
                    _fun64139_ip = 120;
                    continue _fun64139
                }
            case 29:
                if (!var1) {
                    _fun64139_ip = 42;
                    continue _fun64139
                }
            case 32:
                var3 = var2.isGuildStageVoice;
                var1 = var3.bind(var2)();
            case 42:
                if (!var1) {
                    _fun64139_ip = 84;
                    continue _fun64139
                }
            case 45:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 1;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.connectToStage;
                var4 = var3.bind(var4)(var2);
                var3 = false;
                var1 = var3 === var4;
            case 84:
                if (var1) {
                    _fun64139_ip = 120;
                    continue _fun64139
                }
            case 87:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.openChannelCallModal;
                var0 = var0.bind(var1)(var2);
            case 120:
                var0 = undefined;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 5911, 7876, 2]);