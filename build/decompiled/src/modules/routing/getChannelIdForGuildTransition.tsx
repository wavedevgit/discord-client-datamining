// modules/routing/getChannelIdForGuildTransition.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StaticChannelRoute;
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/routing/getChannelIdForGuildTransition.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun49750: for (var _fun49750_ip = 0;;) switch (_fun49750_ip) {
            case 0:
                var7 = arg0;
                var1 = _closure1_slot5;
                var0 = var1.getChannelId;
                var0 = var0.bind(var1)(var7);
                var2 = _closure1_slot4;
                var1 = var2.getDefaultChannel;
                var4 = var1.bind(var2)(var7);
                var1 = null;
                var5 = var1 == var4;
                var6 = undefined;
                var2 = undefined;
                if (var5) {
                    _fun49750_ip = 54;
                    continue _fun49750
                }
            case 49:
                var2 = var4.id;
            case 54:
                var4 = _closure1_slot6;
                var4 = var4.GUILD_ONBOARDING;
                if (!(var0 === var4)) {
                    _fun49750_ip = 88;
                    continue _fun49750
                }
            case 68:
                var5 = _closure1_slot2;
                var4 = var5.shouldShowOnboarding;
                var4 = var4.bind(var5)(var7);
                if (var4) {
                    _fun49750_ip = 88;
                    continue _fun49750
                }
            case 86:
                return var2;
            case 88:
                var4 = _closure1_slot6;
                var4 = var4.GUILD_HOME;
                if (!(var0 === var4)) {
                    _fun49750_ip = 138;
                    continue _fun49750
                }
            case 102:
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 5;
                var4 = var8[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.canSeeOnboardingHome;
                var4 = var4.bind(var5)(var7);
                if (var4) {
                    _fun49750_ip = 138;
                    continue _fun49750
                }
            case 136:
                return var2;
            case 138:
                var4 = _closure1_slot6;
                var4 = var4.GAME_SHOP;
                if (!(var0 === var4)) {
                    _fun49750_ip = 191;
                    continue _fun49750
                }
            case 152:
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 6;
                var4 = var8[var4];
                var6 = var5.bind(var6)(var4);
                var5 = var6.canSeeGameShop;
                var4 = 'getChannelIdForGuildTransition';
                var4 = var5.bind(var6)(var7, var4);
                if (var4) {
                    _fun49750_ip = 230;
                    continue _fun49750
                }
            case 191:
                var4 = _closure1_slot3;
                var3 = var4.getChannel;
                var3 = var3.bind(var4)(var0);
                if (!(var1 != var3)) {
                    _fun49750_ip = 225;
                    continue _fun49750
                }
            case 209:
                var1 = var3.isGuildVocal;
                var3 = var1.bind(var3)();
                var1 = var0;
                if (!var3) {
                    _fun49750_ip = 228;
                    continue _fun49750
                }
            case 225:
                var1 = var2;
            case 228:
                return var1;
            case 230:
                return var0;
        }
    };
    var2.getChannelIdForGuildTransition = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4685, 1372, 1671, 1670, 1379, 4581, 3496, 2]);