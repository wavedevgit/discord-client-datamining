// modules/guilds_bar/native/GuildsBarMessages.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ME;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = {};
    var7 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 4;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var1 = _closure1_slot4;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3.onPress = var7;
    var _closure1_slot6 = var3;
    var3 = var6.memo;
    var1 = function() {
        _fun100997: for (var _fun100997_ip = 0;;) switch (_fun100997_ip) {
            case 0:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 5;
                var1 = var8[var0];
                var3 = undefined;
                var2 = var5.bind(var3)(var1);
                var1 = var2.useGuildsBarAnimatedWrapperStyles;
                var11 = var1.bind(var2)();
                var1 = 6;
                var1 = var8[var1];
                var6 = var5.bind(var3)(var1);
                var4 = var6.useStateFromStores;
                var1 = _closure1_slot3;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var1
                    _fun100998: for (var _fun100998_ip = 0;;) switch (_fun100998_ip) {
                        case 0:
                            var2 = _closure1_slot3;
                            var0 = var2.getGuildId;
                            var2 = var0.bind(var2)();
                            var0 = null;
                            var0 = var0 == var2;
                            if (var0) {
                                _fun100998_ip = 34;
                                continue _fun100998
                            }
                        case 26:
                            var1 = _closure1_slot4;
                            var0 = var2 === var1;
                        case 34:
                            return var0;
                    }
                };
                var6 = var4.bind(var6)(var2, var1);
                var9 = _closure1_slot1;
                var1 = 7;
                var1 = var8[var1];
                var2 = var9.bind(var3)(var1);
                var1 = {};
                var4 = 0;
                var1.mentionCount = var4;
                var1 = var2.bind(var3)(var1);
                var4 = var1.badge;
                var10 = var1.cutouts;
                var2 = _closure1_slot5;
                var0 = var8[var0];
                var1 = var9.bind(var3)(var0);
                var0 = {};
                var0.selected = var6;
                var12 = !var6;
                var0.circle = var12;
                var12 = false;
                var0.unread = var12;
                var0.styles = var11;
                var0.cutouts = var10;
                var10 = _closure1_slot6;
                var0.config = var10;
                var0.overState = var3;
                var10 = 8;
                var11 = var8[var10];
                var11 = var5.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var8[var10];
                var10 = var5.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.YUU0RF;
                var10 = var11.bind(var12)(var10);
                var0.label = var10;
                var0.externalChildren = var4;
                var4 = 9;
                var4 = var8[var4];
                var9 = var9.bind(var3)(var4);
                var4 = {};
                var4 = var2.bind(var3)(var9, var4);
                var0.expandedChildren = var4;
                var4 = 10;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.ChatIcon;
                var4 = {};
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 11;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var7 = var7.colors;
                if (var6) {
                    _fun100997_ip = 316;
                    continue _fun100997
                }
            case 308:
                var6 = var7.INTERACTIVE_TEXT_DEFAULT;
                _fun100997_ip = 322;
                continue _fun100997;
            case 316:
                var6 = var7.WHITE;
            case 322:
                var4.color = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/GuildsBarMessages.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3213, 660, 33, 13159, 13145, 566, 13147, 1234, 13160, 4838, 671, 2]);