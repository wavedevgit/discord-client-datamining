// modules/main_tabs_v2/native/channel/header/ChannelHeader.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ComponentActions;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.StaticChannelRoute;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/channel/header/ChannelHeader.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun72104: for (var _fun72104_ip = 0;;) switch (_fun72104_ip) {
            case 0:
                var1 = arg0;
                var8 = var1.channelId;
                var _closure2_slot0 = var8;
                var6 = var1.screenIndex;
                var9 = var1.isNavigationScreen;
                var0 = var1.pressable;
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun72104_ip = 40;
                    continue _fun72104
                }
            case 38:
                var0 = true;
            case 40:
                var11 = var1.isGuildMemberCountVisible;
                if (!(var11 === var4)) {
                    _fun72104_ip = 52;
                    continue _fun72104
                }
            case 50:
                var11 = true;
            case 52:
                var5 = var1.showCreateThread;
                if (!(var5 === var4)) {
                    _fun72104_ip = 64;
                    continue _fun72104
                }
            case 62:
                var5 = false;
            case 64:
                var3 = _closure1_slot0;
                var7 = _closure1_slot2;
                var10 = 10;
                var10 = var7[var10];
                var13 = var3.bind(var4)(var10);
                var12 = var13.useStateFromStores;
                var14 = _closure1_slot3;
                var10 = new Array(1);
                var10[0] = var14;
                var2 = function() { // Environment: var2
                    var2 = _closure1_slot3;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var12.bind(var13)(var10, var2);
                var2 = 11;
                var2 = var7[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.useIsChannelContentGated;
                var2 = var2.bind(var3)(var10);
                var7 = !var2;
                if (!var7) {
                    _fun72104_ip = 149;
                    continue _fun72104
                }
            case 146:
                var7 = var0;
            case 149:
                var0 = _closure1_slot5;
                var0 = var0.ROLE_SUBSCRIPTIONS;
                if (!(var8 !== var0)) {
                    _fun72104_ip = 541;
                    continue _fun72104
                }
            case 166:
                var0 = _closure1_slot5;
                var0 = var0.GUILD_HOME;
                if (!(var8 !== var0)) {
                    _fun72104_ip = 507;
                    continue _fun72104
                }
            case 183:
                var12 = null;
                if (!(var12 != var10)) {
                    _fun72104_ip = 205;
                    continue _fun72104
                }
            case 189:
                var0 = var10.isPrivate;
                var0 = var0.bind(var10)();
                if (var0) {
                    _fun72104_ip = 459;
                    continue _fun72104
                }
            case 205:
                if (!(var12 != var10)) {
                    _fun72104_ip = 222;
                    continue _fun72104
                }
            case 209:
                var0 = var10.isForumLikeChannel;
                var0 = var0.bind(var10)();
                if (var0) {
                    _fun72104_ip = 306;
                    continue _fun72104
                }
            case 222:
                var3 = _closure1_slot6;
                var2 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 17;
                var0 = var13[var0];
                var2 = var2.bind(var4)(var0);
                var0 = {};
                var0.channelId = var8;
                var14 = var12 == var10;
                var13 = undefined;
                if (var14) {
                    _fun72104_ip = 266;
                    continue _fun72104
                }
            case 261:
                var13 = var10.guild_id;
            case 266:
                var0.guildId = var13;
                var0.pressable = var7;
                var0.isGuildMemberCountVisible = var11;
                var0.isNavigationScreen = var9;
                var0.screenIndex = var6;
                var0.showCreateThread = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun72104_ip = 457;
                continue _fun72104;
            case 306:
                var5 = _closure1_slot6;
                var3 = _closure1_slot1;
                var13 = _closure1_slot2;
                var2 = 15;
                var2 = var13[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2.channelId = var8;
                var13 = var12 == var10;
                var12 = undefined;
                if (var13) {
                    _fun72104_ip = 350;
                    continue _fun72104
                }
            case 345:
                var12 = var10.guild_id;
            case 350:
                var2.guildId = var12;
                var2.pressable = var7;
                var2.isGuildMemberCountVisible = var11;
                var2.isNavigationScreen = var9;
                var2.screenIndex = var6;
                var9 = var10.isForumChannel;
                var10 = var9.bind(var10)();
                var9 = undefined;
                if (var10) {
                    _fun72104_ip = 446;
                    continue _fun72104
                }
            case 389:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 16;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10["L9fR+P"];
                var9 = var11.bind(var12)(var10);
            case 446:
                var2.searchPlaceholder = var9;
                var0 = var5.bind(var4)(var3, var2);
            case 457:
                _fun72104_ip = 505;
                continue _fun72104;
            case 459:
                var5 = _closure1_slot6;
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 14;
                var2 = var9[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2.channelId = var8;
                var2.pressable = var7;
                var2.screenIndex = var6;
                var0 = var5.bind(var4)(var3, var2);
            case 505:
                _fun72104_ip = 539;
                continue _fun72104;
            case 507:
                var5 = _closure1_slot6;
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 13;
                var2 = var6[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var0 = var5.bind(var4)(var3, var2);
            case 539:
                _fun72104_ip = 573;
                continue _fun72104;
            case 541:
                var3 = _closure1_slot6;
                var2 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 12;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 573:
                return var0;
        }
    };
    var2.default = var3;
    var1 = function arg0, arg1, arg2() {
        _fun72106: for (var _fun72106_ip = 0;;) switch (_fun72106_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var7 = arg2;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun72106_ip = 95;
                    continue _fun72106
                }
            case 47:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 6;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.getChatInputRef;
                var3 = var2.bind(var3)(var6, var5);
                var2 = null;
                if (!(var2 != var3)) {
                    _fun72106_ip = 95;
                    continue _fun72106
                }
            case 85:
                var2 = var3.blur;
                var2 = var2.bind(var3)();
            case 95:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 7;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.isSwipeToMemberListEnabled;
                var2 = var2.bind(var3)();
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                if (var2) {
                    _fun72106_ip = 210;
                    continue _fun72106
                }
            case 136:
                var2 = 9;
                var2 = var4[var2];
                var8 = var3.bind(var0)(var2);
                var2 = var8.getRootNavigationRef;
                var10 = var2.bind(var8)();
                var2 = null;
                var2 = var2 != var10;
                if (!var2) {
                    _fun72106_ip = 177;
                    continue _fun72106
                }
            case 167:
                var8 = var10.isReady;
                var2 = var8.bind(var10)();
            case 177:
                if (!var2) {
                    _fun72106_ip = 264;
                    continue _fun72106
                }
            case 180:
                var9 = var10.navigate;
                var8 = {};
                var8.channelId = var6;
                var8.source = var7;
                var2 = 'sidebar';
                var2 = var9.bind(var10)(var2, var8);
                _fun72106_ip = 264;
                continue _fun72106;
            case 210:
                var2 = 8;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var4 = var2.ComponentDispatch;
                var3 = var4.dispatch;
                var1 = _closure1_slot4;
                var2 = var1.SHOW_CHANNEL_DETAILS;
                var1 = {};
                var1.source = var7;
                var1.channelId = var6;
                var1.screenIndex = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 264:
                return var0;
        }
    };
    var2.navigateToChannelDetails = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 660, 1379, 33, 478, 3677, 8941, 1229, 3879, 632, 4515, 8977, 8979, 8981, 8988, 1234, 8990, 2]);