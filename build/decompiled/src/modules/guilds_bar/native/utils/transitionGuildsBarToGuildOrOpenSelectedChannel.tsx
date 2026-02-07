// modules/guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 4;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/utils/transitionGuildsBarToGuildOrOpenSelectedChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun101525: for (var _fun101525_ip = 0;;) switch (_fun101525_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.getRootNavigationRef;
                var9 = var2.bind(var3)();
                var2 = null;
                var3 = var2 == var9;
                var4 = undefined;
                if (var3) {
                    _fun101525_ip = 58;
                    continue _fun101525
                }
            case 48:
                var3 = var9.isReady;
                var4 = var3.bind(var9)();
            case 58:
                var7 = true;
                var3 = undefined;
                if (!(var7 === var4)) {
                    _fun101525_ip = 195;
                    continue _fun101525
                }
            case 69:
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 1;
                var4 = var8[var4];
                var8 = var6.bind(var0)(var4);
                var6 = var8.coerceGuildsRoute;
                var4 = var9.getCurrentRoute;
                var4 = var4.bind(var9)();
                var4 = var6.bind(var8)(var4);
                var6 = var2 != var4;
                var3 = undefined;
                if (!var6) {
                    _fun101525_ip = 195;
                    continue _fun101525
                }
            case 119:
                var8 = var4.params;
                var9 = var2 == var8;
                var6 = undefined;
                if (var9) {
                    _fun101525_ip = 140;
                    continue _fun101525
                }
            case 134:
                var6 = var8.drawerOpen;
            case 140:
                var3 = undefined;
                if (!(var7 !== var6)) {
                    _fun101525_ip = 195;
                    continue _fun101525
                }
            case 146:
                var7 = var4.params;
                var8 = var2 == var7;
                var6 = undefined;
                if (var8) {
                    _fun101525_ip = 166;
                    continue _fun101525
                }
            case 161:
                var6 = var7.guildId;
            case 166:
                var3 = undefined;
                if (!(var6 === var5)) {
                    _fun101525_ip = 195;
                    continue _fun101525
                }
            case 172:
                var6 = var4.params;
                var7 = var2 == var6;
                var4 = undefined;
                if (var7) {
                    _fun101525_ip = 192;
                    continue _fun101525
                }
            case 187:
                var4 = var6.channelId;
            case 192:
                var3 = var4;
            case 195:
                if (!(var2 == var3)) {
                    _fun101525_ip = 232;
                    continue _fun101525
                }
            case 199:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 3;
                var2 = var6[var2];
                var4 = var4.bind(var0)(var2);
                var2 = var4.transitionToGuild;
                var2 = var2.bind(var4)(var5);
                _fun101525_ip = 263;
                continue _fun101525;
            case 232:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 2;
                var1 = var4[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.transitionToChannel;
                var1 = var1.bind(var2)(var3);
            case 263:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3921, 3920, 3944, 5666, 2]);