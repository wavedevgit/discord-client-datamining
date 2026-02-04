// modules/guild_sidebar/native/GuildActionRows.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var9 = 4;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var12 = var3.CHANNEL_MARGIN_VERTICAL;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CHANNELS_AND_ROLES_MODAL_KEY;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ReadStateTypes;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot9 = var3;
    var10 = 8;
    var3 = var5[var10];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.marginVertical = var12;
    var8.marginHorizontal = var10;
    var10 = 9;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.md;
    var8.borderRadius = var10;
    var3.container = var8;
    var8 = {};
    var8.paddingStart = var9;
    var3.channelInfoContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_sidebar/native/GuildActionRows.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun102149: for (var _fun102149_ip = 0;;) switch (_fun102149_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.guild;
                var _closure2_slot0 = var0;
                var9 = var1.selected;
                var1 = _closure1_slot10;
                var3 = undefined;
                var7 = var1.bind(var3)();
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 10;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var11 = var1.bind(var3)(var0);
                var14 = var0.id;
                var _closure2_slot1 = var14;
                var8 = _closure1_slot0;
                var0 = 11;
                var0 = var4[var0];
                var2 = var8.bind(var3)(var0);
                var1 = var2.UNSAFE_useIsDismissibleContentDismissed;
                var0 = 12;
                var0 = var4[var0];
                var0 = var8.bind(var3)(var0);
                var0 = var0.DismissibleContent;
                var0 = var0.CHANNEL_BROWSER_NEW_BADGE_NUX;
                var0 = var1.bind(var2)(var0);
                var1 = 13;
                var2 = var4[var1];
                var13 = var8.bind(var3)(var2);
                var12 = var13.useStateFromStores;
                var2 = _closure1_slot6;
                var10 = new Array(1);
                var10[0] = var2;
                var2 = function() { // Environment: var5
                    var3 = _closure1_slot6;
                    var2 = var3.hasUnread;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var0 = _closure1_slot8;
                    var0 = var0.GUILD_ONBOARDING_QUESTION;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var2 = var12.bind(var13)(var10, var2);
                var1 = var4[var1];
                var13 = var8.bind(var3)(var1);
                var12 = var13.useStateFromStores;
                var1 = _closure1_slot5;
                var10 = new Array(1);
                var10[0] = var1;
                var1 = function() { // Environment: var5
                    var3 = _closure1_slot5;
                    var2 = var3.getNewChannelIds;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.size;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 14;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.MAX_NEW_CHANNELS_TO_SHOW;
                    var0 = var1 > var0;
                    return var0;
                };
                var1 = var12.bind(var13)(var10, var1);
                var13 = _closure1_slot3;
                var12 = var13.useCallback;
                var10 = new Array(1);
                var10[0] = var14;
                var5 = function() { // Environment: var5
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 15;
                    var3 = var2[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.pushLazy;
                    var6 = _closure1_slot0;
                    var3 = 17;
                    var3 = var2[var3];
                    var6 = var6.bind(var0)(var3);
                    var3 = 16;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var3 = var6.bind(var0)(var3, var2);
                    var2 = {};
                    var6 = _closure2_slot1;
                    var2.guildId = var6;
                    var1 = _closure1_slot7;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var10 = var12.bind(var13)(var5, var10);
                var5 = 18;
                var4 = var4[var5];
                var4 = var8.bind(var3)(var4);
                var4 = var4.ChannelModes;
                var8 = var4.DEFAULT;
                if (!var9) {
                    _fun102149_ip = 285;
                    continue _fun102149
                }
            case 256:
                var12 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var5];
                var4 = var12.bind(var3)(var4);
                var4 = var4.ChannelModes;
                var8 = var4.SELECTED;
            case 285:
                var0 = !var0;
                if (var0) {
                    _fun102149_ip = 294;
                    continue _fun102149
                }
            case 291:
                var0 = var2;
            case 294:
                if (var0) {
                    _fun102149_ip = 300;
                    continue _fun102149
                }
            case 297:
                var0 = var1;
            case 300:
                var4 = null;
                if (!var0) {
                    _fun102149_ip = 369;
                    continue _fun102149
                }
            case 305:
                var2 = _closure1_slot9;
                var1 = _closure1_slot4;
                var0 = {};
                var12 = var7.channelInfoContainer;
                var0.style = var12;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var12 = 19;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.NewBadge;
                var12 = {};
                var12 = var2.bind(var3)(var13, var12);
                var0.children = var12;
                var4 = var2.bind(var3)(var1, var0);
            case 369:
                var2 = _closure1_slot9;
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var5];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.onPress = var10;
                var7 = var7.container;
                var0.style = var7;
                var7 = true;
                var0.accessible = var7;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var16 = 20;
                var12 = var7[var16];
                var12 = var10.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var7 = var7[var16];
                var7 = var10.bind(var3)(var7);
                var10 = var7.t;
                if (var11) {
                    _fun102149_ip = 471;
                    continue _fun102149
                }
            case 458:
                var7 = var10.et6wav;
                var7 = var12.bind(var13)(var7);
                _fun102149_ip = 482;
                continue _fun102149;
            case 471:
                var10 = var10.h9mGOP;
                var7 = var12.bind(var13)(var10);
            case 482:
                var0.accessibilityLabel = var7;
                var7 = {};
                var7.selected = var9;
                var0.accessibilityState = var7;
                var0.mode = var8;
                var10 = _closure1_slot9;
                var9 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var5];
                var7 = var9.bind(var3)(var7);
                var9 = var7.BaseChannelName;
                var7 = {};
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var13 = var12[var16];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var16];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                if (var11) {
                    _fun102149_ip = 588;
                    continue _fun102149
                }
            case 575:
                var11 = var12.et6wav;
                var11 = var13.bind(var14)(var11);
                _fun102149_ip = 599;
                continue _fun102149;
            case 588:
                var12 = var12.h9mGOP;
                var11 = var13.bind(var14)(var12);
            case 599:
                var7.name = var11;
                var7.mode = var8;
                var7 = var10.bind(var3)(var9, var7);
                var0.name = var7;
                var7 = _closure1_slot9;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = var10[var5];
                var5 = var9.bind(var3)(var5);
                var6 = var5.BaseChannelIcon;
                var5 = {};
                var5.mode = var8;
                var8 = 21;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.ChannelListMagnifyingGlassIcon;
                var5.IconComponent = var8;
                var5 = var7.bind(var3)(var6, var5);
                var0.icon = var5;
                var0.channelInfo = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.GuildRolesAndChannelsRow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4573, 3947, 8803, 4685, 4304, 33, 1297, 671, 5609, 3212, 1358, 632, 4569, 4561, 9885, 1307, 11696, 11668, 1234, 11106, 2]);