// modules/messages/native/renderer/row_data/embeds/coded_links/invite/getChannelAndRecipientsFromInvite.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.createChannelRecordFromInvite;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/row_data/embeds/coded_links/invite/getChannelAndRecipientsFromInvite.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92418: for (var _fun92418_ip = 0;;) switch (_fun92418_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.channel;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun92418_ip = 29;
                    continue _fun92418
                }
            case 14:
                var0 = var2.channel;
                var0 = var0.recipients;
                if (!(var1 == var0)) {
                    _fun92418_ip = 35;
                    continue _fun92418
                }
            case 29:
                var5 = new Array(0);
                _fun92418_ip = 55;
                continue _fun92418;
            case 35:
                var0 = var2.channel;
                var3 = var0.recipients;
                var0 = var3.slice;
                var5 = var0.bind(var3)();
            case 55:
                var0 = {};
                var0.recipients_ = var5;
                var3 = var2.channel;
                var3 = var1 != var3;
                var1 = null;
                if (!var3) {
                    _fun92418_ip = 113;
                    continue _fun92418
                }
            case 76:
                var4 = _closure1_slot0;
                var3 = {};
                var6 = var2.channel;
                var7 = var3;
                var2 = copyDataProperties(var7, var6);
                var2 = 'recipients';
                var3[var2] = var5;
                var2 = undefined;
                var1 = var4.bind(var2)(var3);
            case 113:
                var0.channel = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1376, 2]);