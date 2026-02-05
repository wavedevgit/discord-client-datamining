// modules/messages/isMessagePinnable.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ChannelTypes;
    var _closure1_slot4 = var6;
    var3 = var3.Permissions;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/isMessagePinnable.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun78412: for (var _fun78412_ip = 0;;) switch (_fun78412_ip) {
            case 0:
                var2 = arg1;
                var0 = var2.isSystemDM;
                var0 = var0.bind(var2)();
                var0 = !var0;
                if (!var0) {
                    _fun78412_ip = 55;
                    continue _fun78412
                }
            case 19:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 2;
                var1 = var4[var1];
                var4 = undefined;
                var3 = var3.bind(var4)(var1);
                var1 = arg0;
                var1 = var3.bind(var4)(var1);
                var0 = !var1;
            case 55:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 3;
                var3 = var5[var3];
                var5 = undefined;
                var6 = var4.bind(var5)(var3);
                var4 = var6.getCurrentConfig;
                var3 = {};
                var7 = var2.guild_id;
                var3.guildId = var7;
                var7 = 'isMessagePinnable';
                var3.location = var7;
                var3 = var4.bind(var6)(var3);
                var4 = var3.enabled;
                var7 = _closure1_slot3;
                var6 = var7.can;
                var3 = _closure1_slot5;
                var3 = var3.MANAGE_MESSAGES;
                var3 = var6.bind(var7)(var3, var2);
                if (!var3) {
                    _fun78412_ip = 149;
                    continue _fun78412
                }
            case 146:
                var3 = !var4;
            case 149:
                if (var3) {
                    _fun78412_ip = 178;
                    continue _fun78412
                }
            case 152:
                var7 = _closure1_slot3;
                var6 = var7.can;
                var4 = _closure1_slot5;
                var4 = var4.PIN_MESSAGES;
                var3 = var6.bind(var7)(var4, var2);
            case 178:
                if (!var3) {
                    _fun78412_ip = 207;
                    continue _fun78412
                }
            case 181:
                var7 = _closure1_slot3;
                var6 = var7.can;
                var4 = _closure1_slot5;
                var4 = var4.READ_MESSAGE_HISTORY;
                var3 = var6.bind(var7)(var4, var2);
            case 207:
                if (!var0) {
                    _fun78412_ip = 226;
                    continue _fun78412
                }
            case 210:
                if (var3) {
                    _fun78412_ip = 223;
                    continue _fun78412
                }
            case 213:
                var4 = var2.isPrivate;
                var3 = var4.bind(var2)();
            case 223:
                var0 = var3;
            case 226:
                if (!var0) {
                    _fun78412_ip = 260;
                    continue _fun78412
                }
            case 229:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 4;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.getIsActiveChannelOrUnarchivableThread;
                var0 = var3.bind(var4)(var2);
            case 260:
                if (!var0) {
                    _fun78412_ip = 282;
                    continue _fun78412
                }
            case 263:
                var4 = var2.type;
                var3 = _closure1_slot4;
                var3 = var3.GUILD_VOICE;
                var0 = var4 !== var3;
            case 282:
                if (!var0) {
                    _fun78412_ip = 304;
                    continue _fun78412
                }
            case 285:
                var2 = var2.type;
                var1 = _closure1_slot4;
                var1 = var1.GUILD_STAGE_VOICE;
                var0 = var2 !== var1;
            case 304:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3091, 660, 6693, 6557, 6717, 2]);