// components_native/channel_settings/ChannelSettingsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'components_native/channel_settings/ChannelSettingsUtils.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0() {
        _fun108837: for (var _fun108837_ip = 0;;) switch (_fun108837_ip) {
            case 0:
                var2 = arg0;
                var3 = var2.canManageThread;
                var4 = var2.canManageChannels;
                var0 = var2.canSendMessages;
                var5 = var2.isForumPost;
                var1 = var2.isThread;
                var2 = var2.isChannelOwner;
                if (!var5) {
                    _fun108837_ip = 45;
                    continue _fun108837
                }
            case 42:
                if (var2) {
                    _fun108837_ip = 69;
                    continue _fun108837
                }
            case 45:
                var0 = var3;
                if (var5) {
                    _fun108837_ip = 69;
                    continue _fun108837
                }
            case 51:
                var0 = var4;
                if (!var1) {
                    _fun108837_ip = 69;
                    continue _fun108837
                }
            case 57:
                var1 = var3;
                if (var3) {
                    _fun108837_ip = 66;
                    continue _fun108837
                }
            case 63:
                var1 = var2;
            case 66:
                var0 = var1;
            case 69:
                return var0;
        }
    };
    var2.getIsChannelNameSettingEditable = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);