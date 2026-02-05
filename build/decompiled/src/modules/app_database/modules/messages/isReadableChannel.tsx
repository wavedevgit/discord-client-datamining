// modules/app_database/modules/messages/isReadableChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var3 = function arg0() {
        _fun40232: for (var _fun40232_ip = 0;;) switch (_fun40232_ip) {
            case 0:
                var6 = arg0;
                var0 = null;
                var0 = var0 != var6;
                if (!var0) {
                    _fun40232_ip = 104;
                    continue _fun40232
                }
            case 12:
                var2 = var6.type;
                var1 = _closure1_slot3;
                var1 = var1.DM;
                var1 = var2 === var1;
                if (var1) {
                    _fun40232_ip = 56;
                    continue _fun40232
                }
            case 37:
                var4 = var6.type;
                var2 = _closure1_slot3;
                var2 = var2.GROUP_DM;
                var1 = var4 === var2;
            case 56:
                if (var1) {
                    _fun40232_ip = 101;
                    continue _fun40232
                }
            case 59:
                var5 = _closure1_slot0;
                var4 = var6.type;
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                if (!var2) {
                    _fun40232_ip = 98;
                    continue _fun40232
                }
            case 78:
                var5 = _closure1_slot2;
                var4 = var5.canBasicChannel;
                var3 = _closure1_slot4;
                var2 = var4.bind(var5)(var3, var6);
            case 98:
                var1 = var2;
            case 101:
                var0 = var1;
            case 104:
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var4 = var4.isTextChannel;
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.ChannelTypes;
    var _closure1_slot3 = var7;
    var4 = var4.BasicPermissions;
    var7 = var4.VIEW_CHANNEL;
    var4 = var4.READ_MESSAGE_HISTORY;
    var4 = var7 | var4;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/modules/messages/isReadableChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var2.isReadableChannel = var3;
    var1 = function arg0() {
        _fun40233: for (var _fun40233_ip = 0;;) switch (_fun40233_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun40233_ip = 41;
                    continue _fun40233
                }
            case 12:
                var3 = _closure1_slot5;
                var2 = _closure1_slot1;
                var1 = var2.getBasicChannel;
                var2 = var1.bind(var2)(var4);
                var1 = undefined;
                var0 = var3.bind(var1)(var2);
            case 41:
                return var0;
        }
    };
    var2.isReadableChannelId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1376, 1372, 3091, 660, 2]);