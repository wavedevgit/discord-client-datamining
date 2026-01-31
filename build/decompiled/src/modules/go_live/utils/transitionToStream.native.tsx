// modules/go_live/utils/transitionToStream.native.tsx
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
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/go_live/utils/transitionToStream.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: transitionToStream, environment: var1
        _fun64358: for (var _fun64358_ip = 0;;) switch (_fun64358_ip) {
            case 0:
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var1 = arg0;
                var1 = var1.channelId;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                if (!(var1 != var3)) {
                    _fun64358_ip = 119;
                    continue _fun64358
                }
            case 31:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 1;
                var1 = var4[var1];
                var2 = undefined;
                var6 = var5.bind(var2)(var1);
                var1 = var6.hideActionSheet;
                var1 = var1.bind(var6)();
                var1 = 2;
                var1 = var4[var1];
                var5 = var5.bind(var2)(var1);
                var1 = var5.popAll;
                var1 = var1.bind(var5)();
                var1 = _closure1_slot0;
                var0 = 3;
                var0 = var4[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.openGuildVoiceModal;
                var0 = 'Go Live';
                var0 = var1.bind(var2)(var3, var0);
            case 119:
                var0 = undefined;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 3237, 4525, 7838, 2]);