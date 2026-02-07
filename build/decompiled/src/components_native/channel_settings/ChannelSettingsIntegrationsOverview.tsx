// components_native/channel_settings/ChannelSettingsIntegrationsOverview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun109753: for (var _fun109753_ip = 0;;) switch (_fun109753_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var _closure2_slot0 = var0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 4;
                var1 = var3[var1];
                var4 = undefined;
                var5 = var2.bind(var4)(var1);
                var1 = var5.useNavigation;
                var1 = var1.bind(var5)();
                var _closure2_slot1 = var1;
                var1 = 5;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useGetOrFetchApplication;
                var5 = var0.linkedLobby;
                var0 = null;
                var6 = var0 == var5;
                var1 = undefined;
                if (var6) {
                    _fun109753_ip = 94;
                    continue _fun109753
                }
            case 88:
                var1 = var5.application_id;
            case 94:
                var18 = var2.bind(var3)(var1);
                var1 = var0 == var18;
                var0 = null;
                if (var1) {
                    _fun109753_ip = 367;
                    continue _fun109753
                }
            case 111:
                var3 = _closure1_slot5;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 6;
                var1 = var14[var1];
                var1 = var13.bind(var4)(var1);
                var2 = var1.TableRowGroup;
                var1 = {};
                var5 = 7;
                var6 = var14[var5];
                var6 = var13.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var14[var5];
                var5 = var13.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5.oAvIAg;
                var5 = var6.bind(var7)(var5);
                var1.title = var5;
                var7 = _closure1_slot5;
                var5 = 8;
                var5 = var14[var5];
                var5 = var13.bind(var4)(var5);
                var6 = var5.TableRow;
                var5 = {};
                var10 = var18.name;
                var5.label = var10;
                var11 = _closure1_slot5;
                var16 = _closure1_slot1;
                var12 = 9;
                var9 = var14[var12];
                var10 = var16.bind(var4)(var9);
                var9 = {};
                var15 = 10;
                var15 = var14[var15];
                var17 = var16.bind(var4)(var15);
                var16 = var17.getApplicationIconSource;
                var15 = {};
                var19 = var18.id;
                var15.id = var19;
                var18 = var18.icon;
                var15.icon = var18;
                var15 = var16.bind(var17)(var15);
                var9.source = var15;
                var12 = var14[var12];
                var12 = var13.bind(var4)(var12);
                var12 = var12.AvatarSizes;
                var12 = var12.REFRESH_MEDIUM_32;
                var9.size = var12;
                var9 = var11.bind(var4)(var10, var9);
                var5.icon = var9;
                var9 = true;
                var5.arrow = var9;
                var8 = function() {
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var0 = _closure1_slot4;
                    var1 = var0.EDIT_LINKED_LOBBY;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.channel = var4;
                    var4 = 1;
                    var0.numScreensToPop = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var5.onPress = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 367:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var9 = 1;
    var3 = var5[var9];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelSettingsSections;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 11;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var9 = 12;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.paddingTop = var9;
    var3.screenContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/channel_settings/ChannelSettingsIntegrationsOverview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun109755: for (var _fun109755_ip = 0;;) switch (_fun109755_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channelId;
                var _closure2_slot0 = var1;
                var11 = var0.canManageWebhooks;
                var9 = var0.canUnlinkLobby;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 4;
                var0 = var2[var0];
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var0 = var3.useNavigation;
                var0 = var0.bind(var3)();
                var _closure2_slot1 = var0;
                var0 = 13;
                var0 = var2[var0];
                var3 = var1.bind(var4)(var0);
                var2 = var3.useStateFromStores;
                var0 = _closure1_slot3;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var20
                    var2 = _closure1_slot3;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var2.bind(var3)(var1, var0);
                var0 = _closure1_slot7;
                var5 = var0.bind(var4)();
                var12 = null;
                var1 = var12 == var13;
                var0 = null;
                if (var1) {
                    _fun109755_ip = 740;
                    continue _fun109755
                }
            case 129:
                var3 = _closure1_slot5;
                var6 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 14;
                var1 = var15[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.Form;
                var1 = {};
                var5 = var5.screenContainer;
                var1.style = var5;
                var7 = _closure1_slot6;
                var5 = 15;
                var5 = var15[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.Stack;
                var5 = {};
                var16 = {};
                var14 = _closure1_slot1;
                var8 = 12;
                var17 = var15[var8];
                var17 = var14.bind(var4)(var17);
                var17 = var17.spacing;
                var17 = var17.PX_12;
                var16.paddingHorizontal = var17;
                var5.style = var16;
                var8 = var15[var8];
                var8 = var14.bind(var4)(var8);
                var8 = var8.spacing;
                var8 = var8.PX_24;
                var5.spacing = var8;
                if (!var11) {
                    _fun109755_ip = 672;
                    continue _fun109755
                }
            case 262:
                var15 = _closure1_slot6;
                var23 = _closure1_slot0;
                var25 = _closure1_slot2;
                var8 = 6;
                var8 = var25[var8];
                var8 = var23.bind(var4)(var8);
                var14 = var8.TableRowGroup;
                var8 = {};
                var19 = _closure1_slot5;
                var17 = 8;
                var16 = var25[var17];
                var16 = var23.bind(var4)(var16);
                var18 = var16.TableRow;
                var16 = {};
                var22 = 7;
                var21 = var25[var22];
                var21 = var23.bind(var4)(var21);
                var26 = var21.intl;
                var24 = var26.string;
                var21 = var25[var22];
                var21 = var23.bind(var4)(var21);
                var21 = var21.t;
                var21 = var21.jp25Id;
                var21 = var24.bind(var26)(var21);
                var16.label = var21;
                var21 = var25[var22];
                var21 = var23.bind(var4)(var21);
                var26 = var21.intl;
                var24 = var26.string;
                var21 = var25[var22];
                var21 = var23.bind(var4)(var21);
                var21 = var21.t;
                var21 = var21.mKIOkI;
                var21 = var24.bind(var26)(var21);
                var16.subLabel = var21;
                var26 = _closure1_slot5;
                var21 = 16;
                var21 = var25[var21];
                var21 = var23.bind(var4)(var21);
                var24 = var21.WebhookIcon;
                var21 = {};
                var21 = var26.bind(var4)(var24, var21);
                var16.icon = var21;
                var21 = true;
                var16.arrow = var21;
                var24 = function() {
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var0 = _closure1_slot4;
                    var0 = var0.WEBHOOKS;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var16.onPress = var24;
                var18 = var19.bind(var4)(var18, var16);
                var16 = new Array(2);
                var16[0] = var18;
                var19 = _closure1_slot5;
                var17 = var25[var17];
                var17 = var23.bind(var4)(var17);
                var18 = var17.TableRow;
                var17 = {};
                var24 = var25[var22];
                var24 = var23.bind(var4)(var24);
                var27 = var24.intl;
                var26 = var27.string;
                var24 = var25[var22];
                var24 = var23.bind(var4)(var24);
                var24 = var24.t;
                var24 = var24.OrV60r;
                var24 = var26.bind(var27)(var24);
                var17.label = var24;
                var24 = var25[var22];
                var24 = var23.bind(var4)(var24);
                var26 = var24.intl;
                var24 = var26.string;
                var22 = var25[var22];
                var22 = var23.bind(var4)(var22);
                var22 = var22.t;
                var22 = var22.rQREJl;
                var22 = var24.bind(var26)(var22);
                var17.subLabel = var22;
                var24 = _closure1_slot5;
                var22 = 17;
                var22 = var25[var22];
                var22 = var23.bind(var4)(var22);
                var23 = var22.ChannelsFollowedIcon;
                var22 = {};
                var22 = var24.bind(var4)(var23, var22);
                var17.icon = var22;
                var17.arrow = var21;
                var20 = function() {
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var0 = _closure1_slot4;
                    var0 = var0.CHANNELS_FOLLOWED;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var17.onPress = var20;
                var17 = var19.bind(var4)(var18, var17);
                var16[1] = var17;
                var8.children = var16;
                var11 = var15.bind(var4)(var14, var8);
            case 672:
                var8 = new Array(2);
                var8[0] = var11;
                if (!var9) {
                    _fun109755_ip = 693;
                    continue _fun109755
                }
            case 683:
                var11 = var13.linkedLobby;
                var9 = var12 != var11;
            case 693:
                if (!var9) {
                    _fun109755_ip = 716;
                    continue _fun109755
                }
            case 696:
                var12 = _closure1_slot5;
                var11 = _closure1_slot8;
                var10 = {};
                var10.channel = var13;
                var9 = var12.bind(var4)(var11, var10);
            case 716:
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 740:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 660, 33, 1469, 6953, 5415, 1234, 4900, 5504, 1417, 1297, 671, 566, 5430, 4080, 13895, 14121, 2]);