// modules/app_database/modules/messages/isLimitedChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var3 = function(arg0) { // Original name: isLimitedChannel, environment: var1
        _fun40087: for (var _fun40087_ip = 0;;) switch (_fun40087_ip) {
            case 0:
                var3 = arg0;
                var5 = _closure1_slot1;
                var4 = var5.getMemberCount;
                var0 = null;
                var6 = var0 == var3;
                var2 = undefined;
                if (var6) {
                    _fun40087_ip = 32;
                    continue _fun40087
                }
            case 27:
                var2 = var3.guild_id;
            case 32:
                var4 = var4.bind(var5)(var2);
                var5 = var0 != var4;
                var2 = 0;
                if (!var5) {
                    _fun40087_ip = 49;
                    continue _fun40087
                }
            case 46:
                var2 = var4;
            case 49:
                var0 = var0 != var3;
                if (!var0) {
                    _fun40087_ip = 75;
                    continue _fun40087
                }
            case 56:
                var5 = var3.type;
                var4 = _closure1_slot2;
                var4 = var4.DM;
                var0 = var5 !== var4;
            case 75:
                if (!var0) {
                    _fun40087_ip = 97;
                    continue _fun40087
                }
            case 78:
                var3 = var3.type;
                var1 = _closure1_slot2;
                var1 = var1.GROUP_DM;
                var0 = var3 !== var1;
            case 97:
                if (!var0) {
                    _fun40087_ip = 110;
                    continue _fun40087
                }
            case 100:
                var1 = 10000;
                var0 = var2 >= var1;
            case 110:
                return var0;
        }
    };
    var _closure1_slot3 = var3;
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
    var4 = var7.bind(var0)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/modules/messages/isLimitedChannel.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = 10000;
    var2.LIMITED_GUILD_MEMBER_THRESHOLD = var4;
    var2.isLimitedChannel = var3;
    var1 = function(arg0) { // Original name: isLimitedChannelId, environment: var1
        _fun40088: for (var _fun40088_ip = 0;;) switch (_fun40088_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot3;
                var3 = _closure1_slot0;
                var1 = var3.getBasicChannel;
                var0 = null;
                var5 = var0 != var4;
                var0 = '_';
                if (!var5) {
                    _fun40088_ip = 36;
                    continue _fun40088
                }
            case 33:
                var0 = var4;
            case 36:
                var1 = var1.bind(var3)(var0);
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.isLimitedChannelId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1599, 660, 2]);