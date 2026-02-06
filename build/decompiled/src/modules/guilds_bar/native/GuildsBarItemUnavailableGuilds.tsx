// modules/guilds_bar/native/GuildsBarItemUnavailableGuilds.tsx
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
    var3 = var4.bind(var0)(var3);
    var8 = var3.Image;
    var _closure1_slot3 = var8;
    var3 = var3.Pressable;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.GUILD_ITEM_SIZE;
    var11 = var3.GUILD_ITEM_PADDING;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'marginTop': null,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var9.marginTop = var11;
    var3.unavailableGuilds = var9;
    var9 = {};
    var9.width = var10;
    var9.height = var10;
    var3.unavailableGuildsIcon = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot7 = var3;
    var3 = var6.memo;
    var1 = function() {
        _fun101212: for (var _fun101212_ip = 0;;) switch (_fun101212_ip) {
            case 0:
                var0 = _closure1_slot7;
                var4 = undefined;
                var8 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 8;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStores;
                var0 = _closure1_slot5;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var5
                    var0 = _closure1_slot5;
                    var0 = var0.totalUnavailableGuilds;
                    return var0;
                };
                var13 = var2.bind(var3)(var1, var0);
                var _closure2_slot0 = var13;
                var0 = 0;
                var1 = var13 <= var0;
                var0 = null;
                if (var1) {
                    _fun101212_ip = 243;
                    continue _fun101212
                }
            case 83:
                var3 = _closure1_slot6;
                var2 = _closure1_slot4;
                var1 = {};
                var6 = 'button';
                var1.accessibilityRole = var6;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 7;
                var11 = var9[var6];
                var11 = var10.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.formatToPlainString;
                var6 = var9[var6];
                var6 = var10.bind(var4)(var6);
                var6 = var6.t;
                var10 = var6["MEpX+2"];
                var6 = {};
                var6.count = var13;
                var6 = var11.bind(var12)(var10, var6);
                var1.accessibilityLabel = var6;
                var5 = function() {
                    var8 = _closure2_slot0;
                    var2 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var0 = 6;
                    var1 = var9[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.show;
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = 7;
                    var6 = var9[var4];
                    var6 = var5.bind(var0)(var6);
                    var10 = var6.intl;
                    var7 = var10.string;
                    var6 = var9[var4];
                    var6 = var5.bind(var0)(var6);
                    var6 = var6.t;
                    var6 = var6.R0RpRX;
                    var6 = var7.bind(var10)(var6);
                    var1.title = var6;
                    var6 = var9[var4];
                    var6 = var5.bind(var0)(var6);
                    var7 = var6.intl;
                    var6 = var7.format;
                    var4 = var9[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.t;
                    var5 = var4["TnH05/"];
                    var4 = {};
                    var4.count = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var1.body = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1.onPress = var5;
                var5 = var8.unavailableGuilds;
                var1.style = var5;
                var6 = _closure1_slot3;
                var5 = {};
                var8 = var8.unavailableGuildsIcon;
                var5.style = var8;
                var8 = _closure1_slot1;
                var7 = 9;
                var7 = var9[var7];
                var7 = var8.bind(var4)(var7);
                var5.source = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 243:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/GuildsBarItemUnavailableGuilds.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4002, 13152, 33, 1297, 4003, 1234, 566, 13194, 2]);