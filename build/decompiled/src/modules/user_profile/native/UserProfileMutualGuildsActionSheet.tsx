// modules/user_profile/native/UserProfileMutualGuildsActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var6 = var3.ActivityIndicator;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot4 = var7;
    var3 = 3;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var3 = {};
    var10 = {
        'flex': 1,
        'gap': 20
    };
    var11 = 4;
    var13 = var5[var11];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var10.paddingTop = var13;
    var3.container = var10;
    var10 = {};
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var10.paddingTop = var11;
    var11 = 'center';
    var10.alignItems = var11;
    var3.loadingState = var10;
    var10 = {};
    var10.alignItems = var11;
    var3.emptyState = var10;
    var3 = var8.bind(var9)(var3);
    var _closure1_slot5 = var3;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.NoMutualServers;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot7 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/UserProfileMutualGuildsActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun68610: for (var _fun68610_ip = 0;;) switch (_fun68610_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.user;
                var _closure2_slot0 = var1;
                var0 = var0.onPressMutualGuild;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot5;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 6;
                var0 = var6[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.bind(var3)(var1);
                var13 = var0.mutualGuilds;
                var2 = _closure1_slot4;
                var14 = 7;
                var0 = var6[var14];
                var1 = var5.bind(var3)(var0);
                var0 = {};
                var4 = true;
                var0.scrollable = var4;
                var4 = 8;
                var4 = var6[var4];
                var5 = var5.bind(var3)(var4);
                var7 = null;
                var6 = var7 == var13;
                var4 = undefined;
                if (var6) {
                    _fun68610_ip = 121;
                    continue _fun68610
                }
            case 116:
                var4 = var13.length;
            case 121:
                var4 = var5.bind(var3)(var4);
                var0.title = var4;
                var6 = _closure1_slot4;
                var5 = _closure1_slot3;
                var4 = {};
                var8 = var12.container;
                var4.style = var8;
                if (!(var7 != var13)) {
                    _fun68610_ip = 265;
                    continue _fun68610
                }
            case 153:
                var8 = var13.length;
                var7 = 0;
                if (!(var7 !== var8)) {
                    _fun68610_ip = 229;
                    continue _fun68610
                }
            case 164:
                var9 = _closure1_slot4;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var14];
                var7 = var8.bind(var3)(var7);
                var8 = var7.UserProfileStackedActionSheetList;
                var7 = {};
                var7.data = var13;
                var13 = function arg0() {
                    var0 = arg0;
                    var0 = var0.guild;
                    var0 = var0.id;
                    return var0;
                };
                var7.keyExtractor = var13;
                var10 = function arg0() {
                    var0 = arg0;
                    var7 = var0.item;
                    var _closure3_slot0 = var7;
                    var5 = var0.start;
                    var4 = var0.end;
                    var3 = _closure1_slot4;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 9;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.MutualGuildRow;
                    var0 = {};
                    var8 = _closure2_slot0;
                    var0.user = var8;
                    var0.mutualGuild = var7;
                    var6 = function() {
                        var2 = _closure2_slot1;
                        var0 = _closure3_slot0;
                        var0 = var0.guild;
                        var1 = var0.id;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.onPress = var6;
                    var0.start = var5;
                    var0.end = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var7.renderItem = var10;
                var7 = var9.bind(var3)(var8, var7);
                _fun68610_ip = 263;
                continue _fun68610;
            case 229:
                var10 = _closure1_slot4;
                var9 = _closure1_slot3;
                var8 = {};
                var13 = var12.emptyState;
                var8.style = var13;
                var13 = _closure1_slot7;
                var8.children = var13;
                var7 = var10.bind(var3)(var9, var8);
            case 263:
                _fun68610_ip = 299;
                continue _fun68610;
            case 265:
                var10 = _closure1_slot4;
                var9 = _closure1_slot3;
                var8 = {};
                var12 = var12.loadingState;
                var8.style = var12;
                var11 = _closure1_slot6;
                var8.children = var11;
                var7 = var10.bind(var3)(var9, var8);
            case 299:
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 8448, 8444, 8452, 8453, 8454, 2]);