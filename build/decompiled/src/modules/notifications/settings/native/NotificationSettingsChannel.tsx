// modules/notifications/settings/native/NotificationSettingsChannel.tsx
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'backgroundColor': null,
        'padding': 16
    };
    var9 = 5;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var3.screenContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notifications/settings/native/NotificationSettingsChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun69835: for (var _fun69835_ip = 0;;) switch (_fun69835_ip) {
            case 0:
                var13 = arg0;
                var _closure2_slot0 = var13;
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 6;
                var2 = var6[var2];
                var3 = undefined;
                var5 = var1.bind(var3)(var2);
                var4 = var5.useChannelPresetInheritance;
                var2 = var13.channel;
                var5 = var4.bind(var5)(var2);
                var15 = 7;
                var2 = var6[var15];
                var2 = var1.bind(var3)(var2);
                var7 = var2.intl;
                var4 = var7.string;
                var2 = var6[var15];
                var2 = var1.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.h850Ss;
                var2 = var4.bind(var7)(var2);
                var _closure2_slot1 = var2;
                var2 = var13.channel;
                var2 = var2.name;
                var _closure2_slot2 = var2;
                var2 = 8;
                var2 = var6[var2];
                var4 = var1.bind(var3)(var2);
                var2 = var4.useNavigation;
                var2 = var2.bind(var4)();
                var _closure2_slot3 = var2;
                var2 = _closure1_slot8;
                var4 = var2.bind(var3)();
                var10 = _closure1_slot3;
                var7 = var10.useLayoutEffect;
                var2 = function() { // Environment: var0
                    _fun69836: for (var _fun69836_ip = 0;;) switch (_fun69836_ip) {
                        case 0:
                            var4 = _closure2_slot3;
                            var2 = var4.setOptions;
                            var1 = {};
                            var14 = _closure2_slot1;
                            var12 = _closure2_slot2;
                            var5 = global;
                            var5 = var5.HermesInternal;
                            var8 = var5.concat;
                            var15 = '';
                            var13 = ' (';
                            var11 = ')';
                            var5 = var15[var8](var14, var13, var12, var11, var10);
                            var1.title = var5;
                            var5 = function() {
                                var3 = _closure1_slot6;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 9;
                                var0 = var2[var0];
                                var2 = undefined;
                                var0 = var1.bind(var2)(var0);
                                var1 = var0.NavigatorHeader;
                                var0 = {};
                                var5 = _closure2_slot1;
                                var0.title = var5;
                                var4 = _closure2_slot2;
                                var0.subtitle = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                            var1.headerTitle = var5;
                            var1 = var2.bind(var4)(var1);
                            var1 = _closure2_slot0;
                            var1 = var1.inGuildContext;
                            if (!var1) {
                                _fun69836_ip = 155;
                                continue _fun69836
                            }
                        case 90:
                            var2 = _closure2_slot3;
                            var1 = var2.setOptions;
                            var0 = {};
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 9;
                            var5 = var5[var4];
                            var4 = undefined;
                            var5 = var6.bind(var4)(var5);
                            var4 = var5.getHeaderBackButton;
                            var3 = function() { // Environment: var3
                                var1 = _closure2_slot3;
                                var0 = var1.popToTop;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var3 = var4.bind(var5)(var3);
                            var0.headerLeft = var3;
                            var0 = var1.bind(var2)(var0);
                        case 155:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var7.bind(var10)(var2);
                var8 = var10.useCallback;
                var2 = var13.channel;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.updateChannelToGuildDefault;
                    var0 = _closure2_slot0;
                    var1 = var0.channel;
                    var1 = var1.guild_id;
                    var0 = var0.channel;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var12 = var8.bind(var10)(var2, var7);
                var8 = var10.useCallback;
                var2 = var13.channel;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var0
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 10;
                    var2 = var8[var0];
                    var0 = undefined;
                    var6 = var3.bind(var0)(var2);
                    var5 = var6.updateChannelOverrideSettings;
                    var2 = _closure2_slot0;
                    var3 = var2.channel;
                    var4 = var3.guild_id;
                    var2 = var2.channel;
                    var11 = var2.id;
                    var2 = {};
                    var7 = false;
                    var2.muted = var7;
                    var7 = _closure1_slot0;
                    var1 = 11;
                    var1 = var8[var1];
                    var1 = var7.bind(var0)(var1);
                    var1 = var1.NotificationLabels;
                    var9 = var1.Unmuted;
                    var13 = var6;
                    var12 = var4;
                    var10 = var2;
                    var1 = var13[var5](var12, var11, var10, var9, var8);
                    return var0;
                };
                var10 = var8.bind(var10)(var2, var7);
                var2 = 12;
                var2 = var6[var2];
                var8 = var1.bind(var3)(var2);
                var7 = var8.useStateFromStoresObject;
                var11 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var11;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var4 = _closure1_slot5;
                    var5 = var4.getChannelMuteConfig;
                    var1 = _closure2_slot0;
                    var2 = var1.channel;
                    var3 = var2.guild_id;
                    var2 = var1.channel;
                    var2 = var2.id;
                    var2 = var5.bind(var4)(var3, var2);
                    var0.config = var2;
                    var3 = var4.isChannelMuted;
                    var2 = var1.channel;
                    var2 = var2.guild_id;
                    var1 = var1.channel;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.muted = var1;
                    return var0;
                };
                var11 = var7.bind(var8)(var2, var0);
                var2 = _closure1_slot7;
                var0 = 13;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.Form;
                var0 = {};
                var4 = var4.screenContainer;
                var0.style = var4;
                var6 = var11.muted;
                if (!var6) {
                    _fun69835_ip = 458;
                    continue _fun69835
                }
            case 322:
                var8 = _closure1_slot6;
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var14 = 14;
                var4 = var17[var14];
                var4 = var16.bind(var3)(var4);
                var7 = var4.NotificationSettingsMuteBanner;
                var4 = {};
                var18 = {};
                var19 = 16;
                var18.marginBottom = var19;
                var4.style = var18;
                var18 = var17[var15];
                var18 = var16.bind(var3)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var18 = var17[var15];
                var18 = var16.bind(var3)(var18);
                var18 = var18.t;
                var18 = var18["6MCxAy"];
                var18 = var19.bind(var20)(var18);
                var4.title = var18;
                var14 = var17[var14];
                var16 = var16.bind(var3)(var14);
                var14 = var16.getMuteBannerSubtitleFromConfig;
                var11 = var11.config;
                var11 = var14.bind(var16)(var11);
                var4.subtitle = var11;
                var4.onPressUnmute = var10;
                var6 = var8.bind(var3)(var7, var4);
            case 458:
                var4 = new Array(6);
                var4[0] = var6;
                var8 = _closure1_slot6;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 15;
                var6 = var10[var6];
                var6 = var7.bind(var3)(var6);
                var11 = var6.NotificationSettingsChannelPresets;
                var6 = {};
                var14 = var13.channel;
                var6.channel = var14;
                var6 = var8.bind(var3)(var11, var6);
                var4[1] = var6;
                var6 = 16;
                var6 = var10[var6];
                var6 = var7.bind(var3)(var6);
                var14 = var6.NotificationSettingsChannelMessageNotification;
                var6 = {};
                var16 = {};
                var11 = 24;
                var16.marginTop = var11;
                var6.style = var16;
                var16 = var13.channel;
                var6.channel = var16;
                var6 = var8.bind(var3)(var14, var6);
                var4[2] = var6;
                var6 = 17;
                var6 = var10[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.NotificationSettingsChannelMessageUnread;
                var6 = {};
                var10 = {};
                var10.marginTop = var11;
                var6.style = var10;
                var10 = var13.channel;
                var6.channel = var10;
                var6 = var8.bind(var3)(var7, var6);
                var4[3] = var6;
                var7 = var13.channel;
                var6 = var7.isForumLikeChannel;
                var6 = var6.bind(var7)();
                if (!var6) {
                    _fun69835_ip = 693;
                    continue _fun69835
                }
            case 636:
                var10 = _closure1_slot6;
                var8 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 18;
                var7 = var14[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.NotificationSettingsChannelPost;
                var7 = {};
                var14 = {};
                var14.marginTop = var11;
                var7.style = var14;
                var13 = var13.channel;
                var7.channel = var13;
                var6 = var10.bind(var3)(var8, var7);
            case 693:
                var4[4] = var6;
                var5 = var5.inherited;
                var5 = !var5;
                if (!var5) {
                    _fun69835_ip = 836;
                    continue _fun69835
                }
            case 712:
                var8 = _closure1_slot6;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = {};
                var10.marginTop = var11;
                var6.style = var10;
                var14 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 19;
                var9 = var11[var9];
                var9 = var14.bind(var3)(var9);
                var10 = var9.Button;
                var9 = {};
                var13 = 'secondary';
                var9.variant = var13;
                var9.onPress = var12;
                var12 = var11[var15];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var11[var15];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11["3PBFN6"];
                var11 = var12.bind(var13)(var11);
                var9.text = var11;
                var9 = var8.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 836:
                var4[5] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 4269, 33, 1297, 671, 8711, 1234, 1469, 4670, 4663, 4660, 566, 5342, 8713, 8714, 8720, 8727, 8733, 4045, 2]);