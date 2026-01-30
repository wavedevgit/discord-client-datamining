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
    var0 = function(arg0) { // Original name: LinkedLobbyFormSection, environment: var1
        _fun109817: for (var _fun109817_ip = 0;;) switch (_fun109817_ip) {
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
                    _fun109817_ip = 94;
                    continue _fun109817
                }
            case 88:
                var1 = var5.application_id;
            case 94:
                var20 = var2.bind(var3)(var1);
                var1 = var0 == var20;
                var0 = null;
                if (var1) {
                    _fun109817_ip = 396;
                    continue _fun109817
                }
            case 111:
                var3 = _closure1_slot5;
                var10 = _closure1_slot0;
                var12 = _closure1_slot2;
                var9 = 6;
                var1 = var12[var9];
                var1 = var10.bind(var4)(var1);
                var2 = var1.FormSection;
                var1 = {};
                var5 = 7;
                var6 = var12[var5];
                var6 = var10.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var12[var5];
                var5 = var10.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5.oAvIAg;
                var5 = var6.bind(var7)(var5);
                var1.title = var5;
                var7 = _closure1_slot5;
                var5 = var12[var9];
                var5 = var10.bind(var4)(var5);
                var6 = var5.FormRow;
                var5 = {};
                var13 = var20.name;
                var5.label = var13;
                var15 = _closure1_slot5;
                var18 = _closure1_slot1;
                var16 = 8;
                var13 = var12[var16];
                var14 = var18.bind(var4)(var13);
                var13 = {};
                var17 = 9;
                var17 = var12[var17];
                var19 = var18.bind(var4)(var17);
                var18 = var19.getApplicationIconSource;
                var17 = {};
                var21 = var20.id;
                var17.id = var21;
                var20 = var20.icon;
                var17.icon = var20;
                var17 = var18.bind(var19)(var17);
                var13.source = var17;
                var16 = var12[var16];
                var16 = var10.bind(var4)(var16);
                var16 = var16.AvatarSizes;
                var16 = var16.REFRESH_MEDIUM_32;
                var13.size = var16;
                var13 = var15.bind(var4)(var14, var13);
                var5.leading = var13;
                var11 = _closure1_slot5;
                var9 = var12[var9];
                var9 = var10.bind(var4)(var9);
                var9 = var9.FormRow;
                var10 = var9.Arrow;
                var9 = {};
                var9 = var11.bind(var4)(var10, var9);
                var5.trailing = var9;
                var8 = function() { // Original name: onPress, environment: var8
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
            case 396:
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
    var3 = 10;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var9 = 11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var9;
    var3.screenContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/channel_settings/ChannelSettingsIntegrationsOverview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ConnectedChannelSettingsIntegrationsOverview, environment: var1
        _fun109819: for (var _fun109819_ip = 0;;) switch (_fun109819_ip) {
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
                var0 = 12;
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
                var8 = var0.bind(var4)();
                var12 = null;
                var1 = var12 == var13;
                var0 = null;
                if (var1) {
                    _fun109819_ip = 715;
                    continue _fun109819
                }
            case 129:
                var3 = _closure1_slot5;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 13;
                var1 = var5[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.RedesignCompat;
                var1 = {};
                var7 = _closure1_slot6;
                var24 = 6;
                var5 = var5[var24];
                var5 = var6.bind(var4)(var5);
                var6 = var5.Form;
                var5 = {};
                var8 = var8.screenContainer;
                var5.style = var8;
                if (!var11) {
                    _fun109819_ip = 647;
                    continue _fun109819
                }
            case 201:
                var15 = _closure1_slot6;
                var22 = _closure1_slot0;
                var21 = _closure1_slot2;
                var8 = var21[var24];
                var8 = var22.bind(var4)(var8);
                var14 = var8.FormSection;
                var8 = {};
                var18 = _closure1_slot5;
                var16 = var21[var24];
                var16 = var22.bind(var4)(var16);
                var17 = var16.FormRow;
                var16 = {};
                var23 = 7;
                var19 = var21[var23];
                var19 = var22.bind(var4)(var19);
                var26 = var19.intl;
                var25 = var26.string;
                var19 = var21[var23];
                var19 = var22.bind(var4)(var19);
                var19 = var19.t;
                var19 = var19.jp25Id;
                var19 = var25.bind(var26)(var19);
                var16.label = var19;
                var19 = var21[var23];
                var19 = var22.bind(var4)(var19);
                var26 = var19.intl;
                var25 = var26.string;
                var19 = var21[var23];
                var19 = var22.bind(var4)(var19);
                var19 = var19.t;
                var19 = var19.mKIOkI;
                var19 = var25.bind(var26)(var19);
                var16.subLabel = var19;
                var19 = 14;
                var19 = var21[var19];
                var19 = var22.bind(var4)(var19);
                var19 = var19.WebhookIcon;
                var16.leading = var19;
                var26 = _closure1_slot5;
                var19 = var21[var24];
                var19 = var22.bind(var4)(var19);
                var19 = var19.FormRow;
                var25 = var19.Arrow;
                var19 = {};
                var19 = var26.bind(var4)(var25, var19);
                var16.trailing = var19;
                var19 = function() { // Original name: onPress, environment: var20
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var0 = _closure1_slot4;
                    var0 = var0.WEBHOOKS;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var16.onPress = var19;
                var17 = var18.bind(var4)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var19 = _closure1_slot5;
                var17 = var21[var24];
                var17 = var22.bind(var4)(var17);
                var18 = var17.FormRow;
                var17 = {};
                var25 = var21[var23];
                var25 = var22.bind(var4)(var25);
                var27 = var25.intl;
                var26 = var27.string;
                var25 = var21[var23];
                var25 = var22.bind(var4)(var25);
                var25 = var25.t;
                var25 = var25.OrV60r;
                var25 = var26.bind(var27)(var25);
                var17.label = var25;
                var25 = var21[var23];
                var25 = var22.bind(var4)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var23 = var21[var23];
                var23 = var22.bind(var4)(var23);
                var23 = var23.t;
                var23 = var23.rQREJl;
                var23 = var25.bind(var26)(var23);
                var17.subLabel = var23;
                var23 = 15;
                var23 = var21[var23];
                var23 = var22.bind(var4)(var23);
                var23 = var23.ChannelsFollowedIcon;
                var17.leading = var23;
                var23 = _closure1_slot5;
                var21 = var21[var24];
                var21 = var22.bind(var4)(var21);
                var21 = var21.FormRow;
                var22 = var21.Arrow;
                var21 = {};
                var21 = var23.bind(var4)(var22, var21);
                var17.trailing = var21;
                var20 = function() { // Original name: onPress, environment: var20
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
            case 647:
                var8 = new Array(2);
                var8[0] = var11;
                if (!var9) {
                    _fun109819_ip = 668;
                    continue _fun109819
                }
            case 658:
                var11 = var13.linkedLobby;
                var9 = var12 != var11;
            case 668:
                if (!var9) {
                    _fun109819_ip = 691;
                    continue _fun109819
                }
            case 671:
                var12 = _closure1_slot5;
                var11 = _closure1_slot8;
                var10 = {};
                var10.channel = var13;
                var9 = var12.bind(var4)(var11, var10);
            case 691:
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 715:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 660, 33, 1469, 6842, 5339, 1234, 5413, 1417, 1297, 671, 566, 4859, 13854, 14079, 2]);