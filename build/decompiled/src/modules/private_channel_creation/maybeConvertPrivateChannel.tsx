// modules/private_channel_creation/maybeConvertPrivateChannel.tsx
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
    var3 = 'modules/private_channel_creation/maybeConvertPrivateChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: maybeConvertPrivateChannel, environment: var1
        _fun54234: for (var _fun54234_ip = 0;;) switch (_fun54234_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 1;
                var0 = var4[var0];
                var4 = undefined;
                var0 = var1.bind(var4)(var0);
                var0 = var0.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                if (!(var3 === var0)) {
                    _fun54234_ip = 100;
                    continue _fun54234
                }
            case 38:
                var1 = _closure1_slot3;
                var0 = var1.getChannel;
                var1 = var0.bind(var1)(var3);
                var0 = null;
                var3 = var0 == var1;
                if (var3) {
                    _fun54234_ip = 98;
                    continue _fun54234
                }
            case 61:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 2;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.ensurePrivateChannel;
                var1 = var1.recipients;
                var0 = var2.bind(var3)(var1);
            case 98:
                return var0;
            case 100:
                var0 = null;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 5606, 3904, 2]);