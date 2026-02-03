// modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsScreen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun109322: for (var _fun109322_ip = 0;;) switch (_fun109322_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.channel;
                var _closure2_slot0 = var10;
                var8 = var1.muteConfig;
                var6 = var1.navigation;
                var _closure2_slot1 = var6;
                var1 = _closure1_slot13;
                var3 = undefined;
                var4 = var1.bind(var3)();
                var5 = _closure1_slot3;
                var2 = var5.useCallback;
                var7 = var10.guild_id;
                var1 = new Array(3);
                var1[0] = var7;
                var7 = var10.id;
                var1[1] = var7;
                var1[2] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var0 = var2.goBack;
                    var0 = var0.bind(var2)();
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 13;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.handleUnmutePress;
                    var1 = _closure2_slot0;
                    var2 = var1.id;
                    var1 = var1.guild_id;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var13 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot11;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var4.options;
                var0.style = var4;
                var11 = _closure1_slot10;
                var22 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 14;
                var4 = var5[var4];
                var4 = var22.bind(var3)(var4);
                var7 = var4.TableRow;
                var4 = {};
                var16 = _closure1_slot10;
                var6 = _closure1_slot1;
                var12 = 15;
                var12 = var5[var12];
                var15 = var6.bind(var3)(var12);
                var14 = {};
                var12 = true;
                var14.disableColor = var12;
                var17 = 16;
                var17 = var5[var17];
                var17 = var6.bind(var3)(var17);
                var14.source = var17;
                var14 = var16.bind(var3)(var15, var14);
                var4.icon = var14;
                var16 = _closure1_slot10;
                var14 = 17;
                var14 = var5[var14];
                var14 = var22.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var17 = 18;
                var18 = var5[var17];
                var18 = var22.bind(var3)(var18);
                var20 = var18.intl;
                var19 = var20.format;
                var17 = var5[var17];
                var17 = var22.bind(var3)(var17);
                var17 = var17.t;
                var18 = var17["eC+9rj"];
                var17 = {};
                var21 = 19;
                var21 = var5[var21];
                var24 = var22.bind(var3)(var21);
                var23 = var24.computeChannelName;
                var27 = _closure1_slot8;
                var26 = _closure1_slot7;
                var29 = var24;
                var28 = var10;
                var25 = true;
                var21 = var29[var23](var28, var27, var26, var25, var24);
                var17.name = var21;
                var17 = var19.bind(var20)(var18, var17);
                var14.children = var17;
                var14 = var16.bind(var3)(var15, var14);
                var4.label = var14;
                var4.onPress = var13;
                var4.start = var12;
                var4.end = var12;
                var7 = var11.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var7 = _closure1_slot10;
                var11 = 20;
                var5 = var5[var11];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.muteConfig = var8;
                var8 = var10.isPrivate;
                var8 = var8.bind(var10)();
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var11];
                var9 = var10.bind(var3)(var9);
                var9 = var9.MuteSettingType;
                if (var8) {
                    _fun109322_ip = 431;
                    continue _fun109322
                }
            case 423:
                var8 = var9.CHANNEL;
                _fun109322_ip = 437;
                continue _fun109322;
            case 431:
                var8 = var9.DM;
            case 437:
                var5.type = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var10 = var0.channel;
        var _closure2_slot0 = var10;
        var1 = var0.applicationId;
        var _closure2_slot1 = var1;
        var9 = var0.navigation;
        var _closure2_slot2 = var9;
        var2 = _closure1_slot13;
        var3 = undefined;
        var5 = var2.bind(var3)();
        var8 = _closure1_slot3;
        var7 = var8.useMemo;
        var6 = function() { // Environment: var4
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 13;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = var1.getMuteOptions;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2 = new Array(0);
        var6 = var7.bind(var8)(var6, var2);
        var _closure2_slot3 = var6;
        var8 = _closure1_slot3;
        var7 = var8.useCallback;
        var2 = new Array(3);
        var2[0] = var10;
        var2[1] = var9;
        var2[2] = var1;
        var1 = function(arg0) { // Environment: var4
            var1 = _closure2_slot2;
            var0 = var1.goBack;
            var0 = var0.bind(var1)();
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 13;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.handleMuteSettingPress;
            var1 = {};
            var4 = _closure2_slot0;
            var5 = var4.id;
            var1.channelId = var5;
            var4 = var4.guild_id;
            var1.guildId = var4;
            var4 = function arg0() {
                _fun109327: for (var _fun109327_ip = 0;;) switch (_fun109327_ip) {
                    case 0:
                        var0 = arg0;
                        var4 = _closure2_slot0;
                        var10 = _closure2_slot1;
                        var5 = var0.muted;
                        var6 = var0.mute_config;
                        var0 = undefined;
                        if (!(var6 === var0)) {
                            _fun109327_ip = 34;
                            continue _fun109327
                        }
                    case 32:
                        var6 = null;
                    case 34:
                        if (!(var0 !== var5)) {
                            _fun109327_ip = 377;
                            continue _fun109327
                        }
                    case 41:
                        var1 = var4.isThread;
                        var1 = var1.bind(var4)();
                        if (var1) {
                            _fun109327_ip = 318;
                            continue _fun109327
                        }
                    case 57:
                        var11 = null;
                        if (!(var11 == var10)) {
                            _fun109327_ip = 192;
                            continue _fun109327
                        }
                    case 66:
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 11;
                        var2 = var7[var2];
                        var9 = var3.bind(var0)(var2);
                        var8 = var9.updateChannelOverrideSettings;
                        var2 = var4.getGuildId;
                        var7 = var2.bind(var4)();
                        var3 = var4.id;
                        var2 = {};
                        var2.muted = var5;
                        var13 = var11 != var6;
                        var12 = null;
                        if (!var13) {
                            _fun109327_ip = 129;
                            continue _fun109327
                        }
                    case 126:
                        var12 = var6;
                    case 129:
                        var2.mute_config = var12;
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var1 = 12;
                        var1 = var13[var1];
                        var1 = var12.bind(var0)(var1);
                        var12 = var1.NotificationLabel;
                        var1 = var12.muted;
                        var15 = var1.bind(var12)(var5);
                        var19 = var9;
                        var18 = var7;
                        var17 = var3;
                        var16 = var2;
                        var1 = var19[var8](var18, var17, var16, var15, var14);
                        _fun109327_ip = 377;
                        continue _fun109327;
                    case 192:
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var2 = 11;
                        var2 = var7[var2];
                        var9 = var3.bind(var0)(var2);
                        var8 = var9.updateAppDMOverrideSettings;
                        var2 = var4.getGuildId;
                        var7 = var2.bind(var4)();
                        var3 = var4.id;
                        var2 = {};
                        var2.muted = var5;
                        var12 = var11 != var6;
                        var11 = null;
                        if (!var12) {
                            _fun109327_ip = 255;
                            continue _fun109327
                        }
                    case 252:
                        var11 = var6;
                    case 255:
                        var2.mute_config = var11;
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var1 = 12;
                        var1 = var12[var1];
                        var1 = var11.bind(var0)(var1);
                        var11 = var1.NotificationLabel;
                        var1 = var11.muted;
                        var14 = var1.bind(var11)(var5);
                        var19 = var9;
                        var18 = var7;
                        var17 = var3;
                        var16 = var10;
                        var15 = var2;
                        var1 = var19[var8](var18, var17, var16, var15, var14, var13);
                        _fun109327_ip = 377;
                        continue _fun109327;
                    case 318:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 10;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.setNotificationSettings;
                        var1 = {};
                        var1.muted = var5;
                        var5 = null;
                        var7 = var5 != var6;
                        if (!var7) {
                            _fun109327_ip = 366;
                            continue _fun109327
                        }
                    case 363:
                        var5 = var6;
                    case 366:
                        var1.mute_config = var5;
                        var1 = var2.bind(var3)(var4, var1);
                    case 377:
                        return var0;
                }
            };
            var1.onOptionPress = var4;
            var4 = arg0;
            var1.muteDurationSeconds = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var7.bind(var8)(var1, var2);
        var _closure2_slot4 = var1;
        var2 = _closure1_slot10;
        var1 = _closure1_slot4;
        var0 = {};
        var5 = var5.options;
        var0.style = var5;
        var5 = var6.map;
        var4 = function(arg0, arg1) { // Environment: var4
            var0 = arg0;
            var6 = arg1;
            var4 = var0.label;
            var0 = var0.duration;
            var _closure3_slot0 = var0;
            var3 = _closure1_slot10;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 14;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.TableRow;
            var0 = {};
            var0.label = var4;
            var5 = function() {
                var2 = _closure2_slot4;
                var1 = _closure3_slot0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var0.onPress = var5;
            var5 = 0;
            var5 = var5 === var6;
            var0.start = var5;
            var5 = _closure2_slot3;
            var7 = var5.length;
            var5 = 1;
            var5 = var7 - var5;
            var5 = var6 === var5;
            var0.end = var5;
            var0 = var3.bind(var2)(var1, var0, var4);
            return var0;
        };
        var4 = var5.bind(var6)(var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun109330: for (var _fun109330_ip = 0;;) switch (_fun109330_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.channel;
                var _closure2_slot0 = var2;
                var14 = var1.isMuted;
                var13 = var1.isGuildMuted;
                var6 = var1.messageNotifications;
                var _closure2_slot1 = var6;
                var12 = var1.guildMessageNotifications;
                var1 = _closure1_slot13;
                var3 = undefined;
                var9 = var1.bind(var3)();
                var18 = _closure1_slot0;
                var20 = _closure1_slot2;
                var1 = 21;
                var1 = var20[var1];
                var4 = var18.bind(var3)(var1);
                var1 = var4.useNavigation;
                var1 = var1.bind(var4)();
                var _closure2_slot2 = var1;
                var7 = _closure1_slot3;
                var5 = var7.useCallback;
                var4 = new Array(2);
                var4[0] = var2;
                var4[1] = var1;
                var1 = function() { // Environment: var0
                    _fun109331: for (var _fun109331_ip = 0;;) switch (_fun109331_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = var2.isThread;
                            var2 = var1.bind(var2)();
                            if (var2) {
                                _fun109331_ip = 50;
                                continue _fun109331
                            }
                        case 23:
                            var4 = _closure2_slot2;
                            var3 = var4.navigate;
                            var2 = _closure1_slot9;
                            var2 = var2.NOTIFICATIONS;
                            var2 = var3.bind(var4)(var2);
                            _fun109331_ip = 87;
                            continue _fun109331;
                        case 50:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 22;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.showThreadNotificationsBottomSheet;
                            var0 = _closure2_slot0;
                            var0 = var1.bind(var2)(var0);
                        case 87:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var5.bind(var7)(var1, var4);
                var5 = _closure1_slot3;
                var4 = var5.useMemo;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getMessageNotificationsText;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var22 = var4.bind(var5)(var0, var1);
                var0 = 23;
                var0 = var20[var0];
                var1 = var18.bind(var3)(var0);
                var0 = var1.useVoiceActivityNotificationSettingsExperiment;
                var11 = var0.bind(var1)(var2);
                var2 = _closure1_slot11;
                var1 = _closure1_slot12;
                var0 = {};
                var6 = _closure1_slot10;
                var17 = 14;
                var4 = var20[var17];
                var4 = var18.bind(var3)(var4);
                var5 = var4.TableRow;
                var4 = {};
                var10 = 18;
                var15 = var20[var10];
                var15 = var18.bind(var3)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var10 = var20[var10];
                var10 = var18.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.h850Ss;
                var10 = var15.bind(var16)(var10);
                var4.label = var10;
                var4.onPress = var7;
                var15 = _closure1_slot11;
                var10 = _closure1_slot4;
                var7 = {};
                var16 = var9.trailing;
                var7.style = var16;
                var21 = _closure1_slot10;
                var16 = 17;
                var16 = var20[var16];
                var16 = var18.bind(var3)(var16);
                var19 = var16.Text;
                var16 = {
                    'variant': 'text-md/medium',
                    'color': 'text-muted'
                };
                var16.children = var22;
                var19 = var21.bind(var3)(var19, var16);
                var16 = new Array(2);
                var16[0] = var19;
                var19 = _closure1_slot10;
                var17 = var20[var17];
                var17 = var18.bind(var3)(var17);
                var17 = var17.TableRow;
                var18 = var17.Arrow;
                var17 = {};
                var17 = var19.bind(var3)(var18, var17);
                var16[1] = var17;
                var7.children = var16;
                var7 = var15.bind(var3)(var10, var7);
                var4.trailing = var7;
                var7 = var14;
                if (var7) {
                    _fun109330_ip = 399;
                    continue _fun109330
                }
            case 396:
                var7 = var13;
            case 399:
                var4.disabled = var7;
                var7 = true;
                var4.start = var7;
                var4.end = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot10;
                var6 = _closure1_slot4;
                var5 = {};
                var9 = var9.hint;
                var5.style = var9;
                var10 = _closure1_slot10;
                var9 = _closure1_slot0;
                var15 = _closure1_slot2;
                var8 = 24;
                var8 = var15[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.MuteSettingsHint;
                var8 = {};
                var8.isMuted = var14;
                var8.isGuildMuted = var13;
                var8.guildMessageNotifications = var12;
                var8.showVoiceActivityNotificationOptions = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
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
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
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
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ChannelSettingsSections;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot10 = var7;
    var7 = var3.jsxs;
    var _closure1_slot11 = var7;
    var3 = var3.Fragment;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {
        'flex': 1,
        'backgroundColor': null,
        'padding': 16
    };
    var10 = 9;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var10;
    var10 = 16;
    var3.container = var9;
    var9 = {};
    var9.marginBottom = var10;
    var3.options = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.trailing = var9;
    var9 = {
        'marginTop': 8,
        'paddingHorizontal': 12
    };
    var3.hint = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var3 = var6.memo;
    var1 = function() { // Environment: var1
        _fun109333: for (var _fun109333_ip = 0;;) switch (_fun109333_ip) {
            case 0:
                var1 = _closure1_slot13;
                var4 = undefined;
                var5 = var1.bind(var4)();
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 21;
                var1 = var2[var1];
                var6 = var3.bind(var4)(var1);
                var1 = var6.useNavigation;
                var15 = var1.bind(var6)();
                var _closure2_slot0 = var15;
                var1 = 25;
                var1 = var2[var1];
                var6 = var3.bind(var4)(var1);
                var1 = var6.useRoute;
                var1 = var1.bind(var6)();
                var6 = var1.params;
                var8 = var6.channelId;
                var _closure2_slot1 = var8;
                var1 = var1.params;
                var17 = var1.applicationId;
                var1 = 26;
                var6 = var2[var1];
                var11 = var3.bind(var4)(var6);
                var10 = var11.useStateFromStores;
                var6 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var6;
                var6 = function() { // Environment: var0
                    var2 = _closure1_slot5;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var12 = var10.bind(var11)(var9, var6);
                var _closure2_slot2 = var12;
                var1 = var2[var1];
                var9 = var3.bind(var4)(var1);
                var6 = var9.useStateFromStores;
                var1 = _closure1_slot6;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var0
                    _fun109335: for (var _fun109335_ip = 0;;) switch (_fun109335_ip) {
                        case 0:
                            var2 = _closure1_slot6;
                            var1 = var2.getGuild;
                            var4 = _closure2_slot2;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun109335_ip = 39;
                                continue _fun109335
                            }
                        case 30:
                            var3 = _closure2_slot2;
                            var0 = var3.guild_id;
                        case 39:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var1 = var6.bind(var9)(var3, var1);
                var _closure2_slot3 = var1;
                var10 = _closure1_slot3;
                var9 = var10.useMemo;
                var6 = new Array(2);
                var6[0] = var12;
                var6[1] = var1;
                var3 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getMuteSettingLabel;
                    var1 = _closure2_slot2;
                    var0 = _closure2_slot3;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var3 = var9.bind(var10)(var3, var6);
                var _closure2_slot4 = var3;
                var9 = _closure1_slot3;
                var6 = var9.useMemo;
                var3 = new Array(2);
                var3[0] = var12;
                var3[1] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getMuteSettingSublabel;
                    var1 = _closure2_slot2;
                    var0 = _closure2_slot3;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var6.bind(var9)(var1, var3);
                var _closure2_slot5 = var1;
                var6 = _closure1_slot3;
                var3 = var6.useLayoutEffect;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.setOptions;
                    var0 = {};
                    var12 = _closure2_slot4;
                    var10 = _closure2_slot5;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var6 = var3.concat;
                    var13 = '';
                    var11 = ' (';
                    var9 = ')';
                    var3 = var13[var6](var12, var11, var10, var9, var8);
                    var0.title = var3;
                    var3 = function() {
                        var3 = _closure1_slot10;
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 27;
                        var0 = var2[var0];
                        var2 = undefined;
                        var0 = var1.bind(var2)(var0);
                        var1 = var0.GenericHeaderTitle;
                        var0 = {};
                        var5 = _closure2_slot4;
                        var0.title = var5;
                        var4 = _closure2_slot5;
                        var0.subtitle = var4;
                        var0 = var3.bind(var2)(var1, var0);
                        return var0;
                    };
                    var0.headerTitle = var3;
                    var3 = 'center';
                    var0.headerTitleAlign = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var3.bind(var6)(var1);
                var6 = _closure1_slot3;
                var3 = var6.useMemo;
                var1 = new Array(1);
                var1[0] = var8;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getMuteSettings;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var3.bind(var6)(var0, var1);
                var16 = var0.muteConfig;
                var11 = var0.messageNotifications;
                var10 = var0.guildMessageNotifications;
                var14 = var0.muted;
                var13 = var0.guildMuted;
                var1 = _closure1_slot1;
                var0 = 28;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var8 = var0.bottom;
                var0 = null;
                var1 = var0 == var12;
                if (var1) {
                    _fun109333_ip = 561;
                    continue _fun109333
                }
            case 381:
                var3 = _closure1_slot11;
                var2 = _closure1_slot4;
                var1 = {};
                var6 = var5.container;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var6.paddingBottom = var8;
                var5[1] = var6;
                var1.style = var5;
                var9 = _closure1_slot10;
                if (var14) {
                    _fun109333_ip = 453;
                    continue _fun109333
                }
            case 426:
                var6 = _closure1_slot15;
                var5 = {};
                var5.channel = var12;
                var5.applicationId = var17;
                var5.navigation = var15;
                var6 = var9.bind(var4)(var6, var5);
                _fun109333_ip = 483;
                continue _fun109333;
            case 453:
                var8 = _closure1_slot14;
                var5 = {};
                var5.channel = var12;
                var5.applicationId = var17;
                var5.muteConfig = var16;
                var5.navigation = var15;
                var6 = var9.bind(var4)(var8, var5);
            case 483:
                var5 = new Array(2);
                var5[0] = var6;
                var6 = var12.isPrivate;
                var6 = var6.bind(var12)();
                var6 = !var6;
                if (!var6) {
                    _fun109333_ip = 547;
                    continue _fun109333
                }
            case 507:
                var9 = _closure1_slot10;
                var8 = _closure1_slot16;
                var7 = {};
                var7.isMuted = var14;
                var7.isGuildMuted = var13;
                var7.channel = var12;
                var7.messageNotifications = var11;
                var7.guildMessageNotifications = var10;
                var6 = var9.bind(var4)(var8, var7);
            case 547:
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 561:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 29;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsScreen.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 1410, 3091, 1613, 660, 33, 1297, 671, 6462, 4693, 4690, 8737, 4893, 4077, 8738, 3932, 1234, 4787, 8739, 1469, 8955, 8740, 8736, 1470, 632, 8882, 1568, 2]);