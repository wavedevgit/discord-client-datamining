// modules/main_tabs_v2/native/channel/header/ForumChannelHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var6 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.MIN_HEADER_HEIGHT;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flex': 1,
        'flexShrink': 1,
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingStart': 4
    };
    var9.height = var10;
    var3.search = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot5 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun72430: for (var _fun72430_ip = 0;;) switch (_fun72430_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.channelId;
                var2 = var0.screenIndex;
                var8 = var0.guildId;
                var12 = var0.pressable;
                var11 = var0.isGuildMemberCountVisible;
                var10 = var0.isNavigationScreen;
                var7 = var0.searchPlaceholder;
                var0 = _closure1_slot5;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 5;
                var0 = var3[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.useIsForumChannelSearchActive;
                var0 = var0.bind(var1)(var9);
                var3 = _closure1_slot4;
                if (var0) {
                    _fun72430_ip = 152;
                    continue _fun72430
                }
            case 94:
                var1 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 7;
                var0 = var13[var0];
                var1 = var1.bind(var4)(var0);
                var0 = {};
                var0.channelId = var9;
                var0.guildId = var8;
                var0.pressable = var12;
                var0.isGuildMemberCountVisible = var11;
                var0.isNavigationScreen = var10;
                var0.screenIndex = var2;
                var0 = var3.bind(var4)(var1, var0);
                _fun72430_ip = 225;
                continue _fun72430;
            case 152:
                var2 = _closure1_slot3;
                var1 = {};
                var6 = var6.search;
                var1.style = var6;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 6;
                var5 = var10[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.ForumChannelSearchInput;
                var5 = {};
                var5.channelId = var9;
                var5.guildId = var8;
                var5.placeholder = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 225:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/channel/header/ForumChannelHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8923, 33, 1297, 9063, 9023, 9064, 2]);