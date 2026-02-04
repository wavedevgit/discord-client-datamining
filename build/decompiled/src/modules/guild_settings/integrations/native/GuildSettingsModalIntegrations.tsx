// modules/guild_settings/integrations/native/GuildSettingsModalIntegrations.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var7 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var7);
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.Image;
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.GuildSettingsSections;
    var _closure1_slot6 = var4;
    var4 = var1.PlatformTypes;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var7 = var1.jsx;
    var _closure1_slot7 = var7;
    var7 = var1.Fragment;
    var _closure1_slot8 = var7;
    var1 = var1.jsxs;
    var _closure1_slot9 = var1;
    var7 = var4.TWITCH;
    var1 = new Array(2);
    var1[0] = var7;
    var4 = var4.YOUTUBE;
    var1[1] = var4;
    var _closure1_slot10 = var1;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {
        'width': 24,
        'height': 24
    };
    var4.platformIcon = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/integrations/native/GuildSettingsModalIntegrations.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun115230: for (var _fun115230_ip = 0;;) switch (_fun115230_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.contentContainerStyle;
                var5 = undefined;
                var _closure2_slot4 = var5;
                var0 = _closure1_slot11;
                var0 = var0.bind(var5)();
                var _closure2_slot0 = var0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 7;
                var0 = var4[var0];
                var1 = var3.bind(var5)(var0);
                var0 = var1.useNavigation;
                var0 = var0.bind(var1)();
                var _closure2_slot1 = var0;
                var2 = 8;
                var0 = var4[var2];
                var10 = var3.bind(var5)(var0);
                var9 = var10.useStateFromStores;
                var1 = _closure1_slot5;
                var8 = new Array(1);
                var8[0] = var1;
                var6 = function() { // Environment: var14
                    var1 = _closure1_slot5;
                    var0 = var1.getGuild;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = new Array(0);
                var0 = var9.bind(var10)(var8, var6, var0);
                var _closure2_slot2 = var0;
                var6 = var4[var2];
                var10 = var3.bind(var5)(var6);
                var9 = var10.useStateFromStoresObject;
                var6 = _closure1_slot4;
                var8 = new Array(1);
                var8[0] = var6;
                var6 = function() { // Environment: var14
                    _fun115232: for (var _fun115232_ip = 0;;) switch (_fun115232_ip) {
                        case 0:
                            var2 = _closure2_slot2;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun115232_ip = 37;
                                continue _fun115232
                            }
                        case 13:
                            var2 = _closure1_slot4;
                            var1 = var2.getGuildPermissionProps;
                            var0 = _closure2_slot2;
                            var0 = var1.bind(var2)(var0);
                            _fun115232_ip = 47;
                            continue _fun115232;
                        case 37:
                            var0 = {
                                'canManageWebhooks': false,
                                'canManageGuild': false
                            };
                        case 47:
                            return var0;
                    }
                };
                var6 = var9.bind(var10)(var8, var6);
                var16 = var6.canManageWebhooks;
                var13 = var6.canManageGuild;
                var8 = _closure1_slot1;
                var6 = 9;
                var6 = var4[var6];
                var6 = var8.bind(var5)(var6);
                var6 = var6.bind(var5)();
                var _closure2_slot3 = var6;
                var2 = var4[var2];
                var4 = var3.bind(var5)(var2);
                var3 = var4.useStateFromStores;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var14
                    var1 = _closure1_slot5;
                    var0 = var1.getProps;
                    var0 = var0.bind(var1)();
                    var0 = var0.integrations;
                    return var0;
                };
                var6 = var3.bind(var4)(var2, var1);
                var1 = null;
                var3 = var1 == var6;
                var2 = undefined;
                if (var3) {
                    _fun115230_ip = 256;
                    continue _fun115230
                }
            case 239:
                var4 = var6.filter;
                var3 = function(arg0) { // Environment: var14
                    var2 = _closure1_slot10;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var0.type;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var4.bind(var6)(var3);
            case 256:
                _closure2_slot4 = var2;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 10;
                var3 = var6[var3];
                var6 = var4.bind(var5)(var3);
                var4 = var6.useChannelsAllowedToUnlink;
                var8 = var1 == var0;
                var3 = undefined;
                if (var8) {
                    _fun115230_ip = 300;
                    continue _fun115230
                }
            case 295:
                var3 = var0.id;
            case 300:
                var3 = var4.bind(var6)(var3);
                var4 = var3.length;
                var3 = 0;
                var15 = var4 > var3;
                if (!var13) {
                    _fun115230_ip = 349;
                    continue _fun115230
                }
            case 319:
                var6 = var1 == var2;
                var4 = undefined;
                if (var6) {
                    _fun115230_ip = 333;
                    continue _fun115230
                }
            case 328:
                var4 = var2.length;
            case 333:
                var6 = var1 != var4;
                var2 = 0;
                if (!var6) {
                    _fun115230_ip = 345;
                    continue _fun115230
                }
            case 342:
                var2 = var4;
            case 345:
                var13 = var2 > var3;
            case 349:
                var2 = var1 == var0;
                var0 = null;
                if (var2) {
                    _fun115230_ip = 1216;
                    continue _fun115230
                }
            case 361:
                if (var16) {
                    _fun115230_ip = 375;
                    continue _fun115230
                }
            case 364:
                if (var15) {
                    _fun115230_ip = 375;
                    continue _fun115230
                }
            case 367:
                var1 = null;
                if (!var13) {
                    _fun115230_ip = 1213;
                    continue _fun115230
                }
            case 375:
                var4 = _closure1_slot9;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var2 = 11;
                var2 = var10[var2];
                var2 = var11.bind(var5)(var2);
                var3 = var2.RedesignCompat;
                var2 = {};
                var9 = _closure1_slot7;
                var21 = 12;
                var6 = var10[var21];
                var6 = var11.bind(var5)(var6);
                var8 = var6.Form;
                var6 = {};
                var6.contentContainerStyle = var12;
                var10 = var10[var21];
                var10 = var11.bind(var5)(var10);
                var11 = var10.FormSection;
                var10 = {};
                if (!var16) {
                    _fun115230_ip = 882;
                    continue _fun115230
                }
            case 459:
                var18 = _closure1_slot9;
                var17 = _closure1_slot8;
                var12 = {};
                var23 = _closure1_slot7;
                var25 = _closure1_slot0;
                var24 = _closure1_slot2;
                var19 = var24[var21];
                var19 = var25.bind(var5)(var19);
                var20 = var19.FormRow;
                var19 = {};
                var26 = 13;
                var22 = var24[var26];
                var22 = var25.bind(var5)(var22);
                var28 = var22.intl;
                var27 = var28.string;
                var22 = var24[var26];
                var22 = var25.bind(var5)(var22);
                var22 = var22.t;
                var22 = var22.jp25Id;
                var22 = var27.bind(var28)(var22);
                var19.label = var22;
                var22 = var24[var26];
                var22 = var25.bind(var5)(var22);
                var28 = var22.intl;
                var27 = var28.string;
                var22 = var24[var26];
                var22 = var25.bind(var5)(var22);
                var22 = var22.t;
                var22 = var22.mKIOkI;
                var22 = var27.bind(var28)(var22);
                var19.subLabel = var22;
                var22 = 14;
                var22 = var24[var22];
                var22 = var25.bind(var5)(var22);
                var22 = var22.WebhookIcon;
                var19.leading = var22;
                var22 = var24[var21];
                var22 = var25.bind(var5)(var22);
                var22 = var22.FormRow;
                var27 = var22.Arrow;
                var22 = {};
                var22 = var23.bind(var5)(var27, var22);
                var19.trailing = var22;
                var22 = function() {
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var0 = _closure1_slot6;
                    var0 = var0.WEBHOOKS;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var19.onPress = var22;
                var20 = var23.bind(var5)(var20, var19);
                var19 = new Array(2);
                var19[0] = var20;
                var20 = var24[var21];
                var20 = var25.bind(var5)(var20);
                var22 = var20.FormRow;
                var20 = {};
                var27 = var24[var26];
                var27 = var25.bind(var5)(var27);
                var29 = var27.intl;
                var28 = var29.string;
                var27 = var24[var26];
                var27 = var25.bind(var5)(var27);
                var27 = var27.t;
                var27 = var27.OrV60r;
                var27 = var28.bind(var29)(var27);
                var20.label = var27;
                var27 = var24[var26];
                var27 = var25.bind(var5)(var27);
                var28 = var27.intl;
                var27 = var28.string;
                var26 = var24[var26];
                var26 = var25.bind(var5)(var26);
                var26 = var26.t;
                var26 = var26.rQREJl;
                var26 = var27.bind(var28)(var26);
                var20.subLabel = var26;
                var26 = 15;
                var26 = var24[var26];
                var26 = var25.bind(var5)(var26);
                var26 = var26.ChannelsFollowedIcon;
                var20.leading = var26;
                var24 = var24[var21];
                var24 = var25.bind(var5)(var24);
                var24 = var24.FormRow;
                var25 = var24.Arrow;
                var24 = {};
                var24 = var23.bind(var5)(var25, var24);
                var20.trailing = var24;
                var24 = function() {
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var0 = _closure1_slot6;
                    var0 = var0.CHANNELS_FOLLOWED;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var20.onPress = var24;
                var20 = var23.bind(var5)(var22, var20);
                var19[1] = var20;
                var12.children = var19;
                var16 = var18.bind(var5)(var17, var12);
            case 882:
                var12 = new Array(3);
                var12[0] = var16;
                if (!var15) {
                    _fun115230_ip = 1101;
                    continue _fun115230
                }
            case 896:
                var18 = _closure1_slot7;
                var20 = _closure1_slot0;
                var19 = _closure1_slot2;
                var16 = var19[var21];
                var16 = var20.bind(var5)(var16);
                var17 = var16.FormRow;
                var16 = {};
                var22 = 13;
                var23 = var19[var22];
                var23 = var20.bind(var5)(var23);
                var25 = var23.intl;
                var24 = var25.string;
                var23 = var19[var22];
                var23 = var20.bind(var5)(var23);
                var23 = var23.t;
                var23 = var23.tqtDXC;
                var23 = var24.bind(var25)(var23);
                var16.label = var23;
                var23 = var19[var22];
                var23 = var20.bind(var5)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var19[var22];
                var22 = var20.bind(var5)(var22);
                var22 = var22.t;
                var22 = var22.v8819e;
                var22 = var23.bind(var24)(var22);
                var16.subLabel = var22;
                var22 = 16;
                var22 = var19[var22];
                var22 = var20.bind(var5)(var22);
                var22 = var22.RefreshIcon;
                var16.leading = var22;
                var19 = var19[var21];
                var19 = var20.bind(var5)(var19);
                var19 = var19.FormRow;
                var20 = var19.Arrow;
                var19 = {};
                var19 = var18.bind(var5)(var20, var19);
                var16.trailing = var19;
                var19 = function() {
                    var2 = _closure2_slot1;
                    var1 = var2.push;
                    var0 = _closure1_slot6;
                    var0 = var0.LOBBIES_LINKED;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var16.onPress = var19;
                var15 = var18.bind(var5)(var17, var16);
            case 1101:
                var12[1] = var15;
                if (!var13) {
                    _fun115230_ip = 1129;
                    continue _fun115230
                }
            case 1108:
                var16 = _closure1_slot10;
                var15 = var16.map;
                var14 = function(arg0) { // Environment: var14
                    _fun115238: for (var _fun115238_ip = 0;;) switch (_fun115238_ip) {
                        case 0:
                            var6 = arg0;
                            var _closure3_slot0 = var6;
                            var1 = _closure2_slot4;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun115238_ip = 381;
                                continue _fun115238
                            }
                        case 25:
                            var3 = _closure2_slot4;
                            var2 = var3.some;
                            var1 = function(arg0) { // Environment: var7
                                var0 = arg0;
                                var1 = var0.type;
                                var0 = _closure3_slot0;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            if (!var1) {
                                _fun115238_ip = 381;
                                continue _fun115238
                            }
                        case 53:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 17;
                            var1 = var3[var1];
                            var5 = undefined;
                            var2 = var2.bind(var5)(var1);
                            var1 = var2.get;
                            var16 = var1.bind(var2)(var6);
                            var2 = var0 == var16;
                            var1 = null;
                            if (var2) {
                                _fun115238_ip = 379;
                                continue _fun115238
                            }
                        case 100:
                            var4 = _closure1_slot7;
                            var17 = _closure1_slot0;
                            var18 = _closure1_slot2;
                            var11 = 12;
                            var2 = var18[var11];
                            var2 = var17.bind(var5)(var2);
                            var3 = var2.FormRow;
                            var2 = {};
                            var9 = var16.name;
                            var2.label = var9;
                            var9 = 13;
                            var10 = var18[var9];
                            var10 = var17.bind(var5)(var10);
                            var14 = var10.intl;
                            var13 = var14.formatToPlainString;
                            var9 = var18[var9];
                            var9 = var17.bind(var5)(var9);
                            var9 = var9.t;
                            var10 = var9.VXU4EU;
                            var9 = {};
                            var15 = var16.name;
                            var9.platformName = var15;
                            var9 = var13.bind(var14)(var10, var9);
                            var2.subLabel = var9;
                            var10 = _closure1_slot3;
                            var9 = {};
                            var13 = 18;
                            var13 = var18[var13];
                            var15 = var17.bind(var5)(var13);
                            var14 = var15.makeSource;
                            var13 = 19;
                            var13 = var18[var13];
                            var18 = var17.bind(var5)(var13);
                            var17 = var18.isThemeDark;
                            var13 = _closure2_slot3;
                            var13 = var17.bind(var18)(var13);
                            var16 = var16.icon;
                            if (var13) {
                                _fun115238_ip = 275;
                                continue _fun115238
                            }
                        case 267:
                            var13 = var16.lightPNG;
                            _fun115238_ip = 281;
                            continue _fun115238;
                        case 275:
                            var13 = var16.darkPNG;
                        case 281:
                            var13 = var14.bind(var15)(var13);
                            var9.source = var13;
                            var12 = _closure2_slot0;
                            var12 = var12.platformIcon;
                            var9.style = var12;
                            var9 = var4.bind(var5)(var10, var9);
                            var2.leading = var9;
                            var10 = _closure1_slot7;
                            var9 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var8 = var8[var11];
                            var8 = var9.bind(var5)(var8);
                            var8 = var8.FormRow;
                            var9 = var8.Arrow;
                            var8 = {};
                            var8 = var10.bind(var5)(var9, var8);
                            var2.trailing = var8;
                            var7 = function() {
                                var3 = _closure2_slot1;
                                var2 = var3.push;
                                var0 = _closure1_slot6;
                                var1 = var0.INTEGRATION_PLATFORM;
                                var0 = {};
                                var4 = _closure3_slot0;
                                var0.platformType = var4;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            };
                            var2.onPress = var7;
                            var1 = var4.bind(var5)(var3, var2, var6);
                        case 379:
                            return var1;
                        case 381:
                            return var0;
                    }
                };
                var13 = var15.bind(var16)(var14);
            case 1129:
                var12[2] = var13;
                var10.children = var12;
                var10 = var4.bind(var5)(var11, var10);
                var6.children = var10;
                var8 = var9.bind(var5)(var8, var6);
                var6 = new Array(2);
                var6[0] = var8;
                var9 = _closure1_slot7;
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 20;
                var7 = var10[var7];
                var7 = var8.bind(var5)(var7);
                var8 = var7.NavScrim;
                var7 = {};
                var7 = var9.bind(var5)(var8, var7);
                var6[1] = var7;
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 1213:
                var0 = var1;
            case 1216:
                return var0;
        }
    };
    var2.default = var3;
    var2.SUPPORTED_SETTINGS_INTEGRATION_PLATFORMS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3091, 8156, 660, 33, 1297, 1469, 566, 3246, 14671, 4897, 5378, 1234, 13827, 14053, 10765, 4395, 1417, 3206, 5204, 2]);