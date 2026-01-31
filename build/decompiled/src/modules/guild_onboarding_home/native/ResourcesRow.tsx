// modules/guild_onboarding_home/native/ResourcesRow.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var3.ScrollView;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ONBOARDING_HOME_RESOURCES_SHEET_KEY;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'paddingBottom': 8,
        'marginBottom': 16
    };
    var3.container = var8;
    var8 = {
        'display': 'flex',
        'justifyContent': 'center',
        'backgroundColor': null,
        'borderRadius': null,
        'marginLeft': 8,
        'paddingVertical': 8,
        'paddingHorizontal': 12
    };
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var8.borderRadius = var11;
    var3.channelItem = var8;
    var8 = {
        'marginLeft': 8,
        'paddingHorizontal': 8,
        'paddingVertical': 8
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.round;
    var8.borderRadius = var9;
    var3.overflowItem = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_onboarding_home/native/ResourcesRow.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ResourcesRow, environment: var1
        _fun104794: for (var _fun104794_ip = 0;;) switch (_fun104794_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guildId;
                var _closure2_slot0 = var1;
                var0 = _closure1_slot7;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var _closure2_slot1 = var10;
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 6;
                var0 = var4[var0];
                var0 = var2.bind(var3)(var0);
                var15 = var0.bind(var3)(var1);
                var0 = var15.length;
                var16 = 2;
                var7 = var0 > var16;
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = true;
                var0.horizontal = var4;
                var4 = var10.container;
                var0.style = var4;
                var5 = var15.slice;
                var4 = 0;
                var8 = var5.bind(var15)(var4, var16);
                var5 = var8.map;
                var4 = function(arg0) { // Environment: var9
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot5;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 11;
                    var1 = var7[var1];
                    var3 = undefined;
                    var1 = var6.bind(var3)(var1);
                    var2 = var1.PressableOpacity;
                    var1 = {};
                    var8 = _closure2_slot1;
                    var8 = var8.channelItem;
                    var1.style = var8;
                    var5 = function() { // Original name: onPress, environment: var5
                        var0 = _closure3_slot0;
                        var3 = var0.channelId;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 7;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.selectHomeResourceChannel;
                        var0 = _closure2_slot0;
                        var0 = var1.bind(var2)(var0, var3);
                        var0 = undefined;
                        return var0;
                    };
                    var1.onPress = var5;
                    var5 = 12;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var6 = var5.Text;
                    var5 = {
                        'variant': 'text-md/medium',
                        'color': 'text-default'
                    };
                    var7 = var0.title;
                    var5.children = var7;
                    var5 = var4.bind(var3)(var6, var5);
                    var1.children = var5;
                    var0 = var0.channelId;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var5 = var5.bind(var8)(var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = null;
                if (!var7) {
                    _fun104794_ip = 310;
                    continue _fun104794
                }
            case 140:
                var8 = _closure1_slot5;
                var12 = _closure1_slot0;
                var17 = _closure1_slot2;
                var6 = 11;
                var6 = var17[var6];
                var6 = var12.bind(var3)(var6);
                var7 = var6.PressableOpacity;
                var6 = {};
                var10 = var10.channelItem;
                var6.style = var10;
                var9 = function() { // Original name: onPress, environment: var9
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 8;
                    var3 = var2[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var6 = _closure1_slot0;
                    var3 = 10;
                    var3 = var2[var3];
                    var6 = var6.bind(var0)(var3);
                    var3 = 9;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var6.bind(var0)(var3, var2);
                    var2 = _closure1_slot4;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var1.guildId = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var6.onPress = var9;
                var9 = 12;
                var9 = var17[var9];
                var9 = var12.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var11 = 13;
                var13 = var17[var11];
                var13 = var12.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.format;
                var11 = var17[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.t;
                var12 = var11.F6iMs4;
                var11 = {};
                var15 = var15.length;
                var15 = var15 - var16;
                var11.count = var15;
                var11 = var13.bind(var14)(var12, var11);
                var9.children = var11;
                var9 = var8.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 310:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 13630, 33, 1297, 671, 13631, 11611, 3237, 13632, 1307, 4865, 3900, 1234, 2]);