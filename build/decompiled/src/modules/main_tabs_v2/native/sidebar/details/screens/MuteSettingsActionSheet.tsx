// modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsActionSheet.tsx
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserNotificationSettings;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var6 = var3.Fragment;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/sidebar/details/screens/MuteSettingsActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun69797: for (var _fun69797_ip = 0;;) switch (_fun69797_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.guildId;
                var _closure2_slot0 = var2;
                var8 = var0.channelId;
                var _closure2_slot1 = var8;
                var3 = var0.onOptionPress;
                var _closure2_slot2 = var3;
                var1 = _closure1_slot5;
                var0 = var1.getGuild;
                var1 = var0.bind(var1)(var2);
                var _closure2_slot3 = var1;
                var6 = _closure1_slot4;
                var0 = var6.getChannel;
                var13 = var0.bind(var6)(var8);
                var _closure2_slot4 = var13;
                var6 = _closure1_slot3;
                var9 = var6.useMemo;
                var7 = new Array(1);
                var7[0] = var8;
                var0 = function() { // Environment: var5
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.getMuteSettings;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var9.bind(var6)(var0, var7);
                var12 = var0.muteConfig;
                var0 = var0.muted;
                var9 = var6.useCallback;
                var7 = new Array(3);
                var7[0] = var8;
                var7[1] = var2;
                var7[2] = var3;
                var3 = function(arg0) { // Environment: var5
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 10;
                    var2 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.hideActionSheet;
                    var2 = var2.bind(var4)();
                    var2 = _closure1_slot0;
                    var1 = 9;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.handleMuteSettingPress;
                    var1 = {};
                    var5 = _closure2_slot1;
                    var1.channelId = var5;
                    var5 = _closure2_slot0;
                    var1.guildId = var5;
                    var5 = arg0;
                    var1.muteDurationSeconds = var5;
                    var4 = _closure2_slot2;
                    var1.onOptionPress = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var3 = var9.bind(var6)(var3, var7);
                var _closure2_slot5 = var3;
                var7 = var6.useCallback;
                var3 = new Array(2);
                var3[0] = var8;
                var3[1] = var2;
                var2 = function() { // Environment: var5
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 10;
                    var2 = var3[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.hideActionSheet;
                    var2 = var2.bind(var4)();
                    var2 = _closure1_slot0;
                    var1 = 9;
                    var1 = var3[var1];
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.handleUnmutePress;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var17 = var7.bind(var6)(var2, var3);
                var7 = var6.useMemo;
                var3 = new Array(2);
                var3[0] = var13;
                var3[1] = var1;
                var2 = function() { // Environment: var5
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getMuteSettingLabel;
                    var1 = _closure2_slot4;
                    var0 = _closure2_slot3;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var9 = var7.bind(var6)(var2, var3);
                var3 = var6.useMemo;
                var2 = new Array(2);
                var2[0] = var13;
                var2[1] = var1;
                var1 = function() { // Environment: var5
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.getMuteSettingSublabel;
                    var1 = _closure2_slot4;
                    var0 = _closure2_slot3;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var8 = var3.bind(var6)(var1, var2);
                var1 = null;
                if (!(var1 != var13)) {
                    _fun69797_ip = 251;
                    continue _fun69797
                }
            case 248:
                if (var0) {
                    _fun69797_ip = 339;
                    continue _fun69797
                }
            case 251:
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 9;
                var0 = var6[var0];
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var0 = var2.getMuteOptions;
                var7 = var0.bind(var2)();
                var2 = _closure1_slot9;
                var0 = 11;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRowGroup;
                var0 = {};
                var6 = var7.map;
                var5 = function(arg0) { // Environment: var5
                    var0 = arg0;
                    var4 = var0.label;
                    var0 = var0.duration;
                    var _closure3_slot0 = var0;
                    var3 = _closure1_slot9;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 12;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.TableRow;
                    var0 = {};
                    var0.label = var4;
                    var5 = function() {
                        var2 = _closure2_slot5;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.onPress = var5;
                    var0 = var3.bind(var2)(var1, var0, var4);
                    return var0;
                };
                var5 = var6.bind(var7)(var5);
                var0.children = var5;
                var5 = var2.bind(var3)(var1, var0);
                _fun69797_ip = 671;
                continue _fun69797;
            case 339:
                var3 = _closure1_slot11;
                var2 = _closure1_slot10;
                var1 = {};
                var11 = _closure1_slot9;
                var23 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 11;
                var6 = var7[var0];
                var0 = undefined;
                var6 = var23.bind(var0)(var6);
                var14 = var6.TableRowGroup;
                var6 = {};
                var10 = 12;
                var10 = var7[var10];
                var10 = var23.bind(var0)(var10);
                var16 = var10.TableRow;
                var15 = {};
                var10 = _closure1_slot1;
                var18 = 13;
                var18 = var7[var18];
                var19 = var10.bind(var0)(var18);
                var18 = {};
                var26 = true;
                var18.disableColor = var26;
                var20 = 14;
                var20 = var7[var20];
                var20 = var10.bind(var0)(var20);
                var18.source = var20;
                var18 = var11.bind(var0)(var19, var18);
                var15.icon = var18;
                var18 = 8;
                var19 = var7[var18];
                var19 = var23.bind(var0)(var19);
                var21 = var19.intl;
                var20 = var21.format;
                var18 = var7[var18];
                var18 = var23.bind(var0)(var18);
                var18 = var18.t;
                var19 = var18["eC+9rj"];
                var18 = {};
                var22 = 15;
                var22 = var7[var22];
                var25 = var23.bind(var0)(var22);
                var24 = var25.computeChannelName;
                var29 = _closure1_slot7;
                var28 = _closure1_slot6;
                var31 = var25;
                var30 = var13;
                var27 = true;
                var22 = var31[var24](var30, var29, var28, var27, var26);
                var18.name = var22;
                var18 = var20.bind(var21)(var19, var18);
                var15.label = var18;
                var15.onPress = var17;
                var15 = var11.bind(var0)(var16, var15);
                var6.children = var15;
                var14 = var11.bind(var0)(var14, var6);
                var6 = new Array(2);
                var6[0] = var14;
                var15 = 16;
                var7 = var7[var15];
                var10 = var10.bind(var0)(var7);
                var7 = {};
                var7.muteConfig = var12;
                var12 = var13.isPrivate;
                var12 = var12.bind(var13)();
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var15];
                var13 = var14.bind(var0)(var13);
                var13 = var13.MuteSettingType;
                if (var12) {
                    _fun69797_ip = 641;
                    continue _fun69797
                }
            case 633:
                var12 = var13.CHANNEL;
                _fun69797_ip = 647;
                continue _fun69797;
            case 641:
                var12 = var13.DM;
            case 647:
                var7.type = var12;
                var7 = var11.bind(var0)(var10, var7);
                var6[1] = var7;
                var1.children = var6;
                var5 = var3.bind(var0)(var2, var1);
            case 671:
                var3 = _closure1_slot11;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 17;
                var0 = var10[var0];
                var2 = undefined;
                var0 = var6.bind(var2)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var7 = _closure1_slot9;
                var4 = 18;
                var4 = var10[var4];
                var4 = var6.bind(var2)(var4);
                var6 = var4.BottomSheetTitleHeader;
                var4 = {};
                var4.title = var9;
                var4.subtitle = var8;
                var6 = var7.bind(var2)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.children = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var1 = function arg0() {
        _fun69805: for (var _fun69805_ip = 0;;) switch (_fun69805_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.isMuted;
                var1 = var0.isGuildMuted;
                var7 = var0.guildMessageNotifications;
                var5 = var0.showVoiceActivityNotificationOptions;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun69805_ip = 37;
                    continue _fun69805
                }
            case 35:
                var5 = false;
            case 37:
                if (var2) {
                    _fun69805_ip = 533;
                    continue _fun69805
                }
            case 46:
                if (var1) {
                    _fun69805_ip = 416;
                    continue _fun69805
                }
            case 52:
                var1 = _closure1_slot8;
                var1 = var1.NO_MESSAGES;
                if (!(var7 !== var1)) {
                    _fun69805_ip = 299;
                    continue _fun69805
                }
            case 69:
                var1 = _closure1_slot8;
                var1 = var1.ALL_MESSAGES;
                if (!(var7 !== var1)) {
                    _fun69805_ip = 101;
                    continue _fun69805
                }
            case 83:
                var1 = _closure1_slot8;
                var1 = var1.ONLY_MENTIONS;
                if (!(var7 !== var1)) {
                    _fun69805_ip = 101;
                    continue _fun69805
                }
            case 97:
                var1 = null;
                return var1;
            case 101:
                var6 = _closure1_slot0;
                var1 = _closure1_slot2;
                var11 = 8;
                var2 = var1[var11];
                var2 = var6.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var1 = var1[var11];
                var1 = var6.bind(var3)(var1);
                var1 = var1.t;
                if (var5) {
                    _fun69805_ip = 163;
                    continue _fun69805
                }
            case 148:
                var5 = var1.mUbulW;
                var5 = var2.bind(var4)(var5);
                _fun69805_ip = 176;
                continue _fun69805;
            case 163:
                var1 = var1.l3yoAR;
                var5 = var2.bind(var4)(var1);
            case 176:
                var4 = _closure1_slot9;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var1 = var2.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var6 = _closure1_slot8;
                var6 = var6.ALL_MESSAGES;
                if (!(var7 !== var6)) {
                    _fun69805_ip = 287;
                    continue _fun69805
                }
            case 233:
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var7 = var6[var11];
                var7 = var10.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var6[var11];
                var6 = var10.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.GGAdHV;
                var5 = var7.bind(var8)(var6);
            case 287:
                var1.children = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            case 299:
                var4 = _closure1_slot9;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 7;
                var1 = var10[var1];
                var1 = var6.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var5 = 8;
                var7 = var10[var5];
                var7 = var6.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.format;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.t;
                var6 = var5.nRwUIL;
                var5 = {};
                var10 = function arg0, arg1() {
                    var4 = _closure1_slot9;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var0 = var2[var0];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.Text;
                    var1 = {
                        'variant': 'text-sm/medium',
                        'color': 'text-feedback-warning'
                    };
                    var0 = arg0;
                    var1.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var5.notificationHook = var10;
                var5 = var7.bind(var8)(var6, var5);
                var1.children = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            case 416:
                var4 = _closure1_slot9;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 7;
                var1 = var10[var1];
                var1 = var6.bind(var3)(var1);
                var2 = var1.Text;
                var1 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var5 = 8;
                var7 = var10[var5];
                var7 = var6.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.format;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.t;
                var6 = var5.O34r15;
                var5 = {};
                var9 = function arg0, arg1() {
                    var4 = _closure1_slot9;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var0 = var2[var0];
                    var3 = undefined;
                    var0 = var1.bind(var3)(var0);
                    var2 = var0.Text;
                    var1 = {
                        'variant': 'text-sm/medium',
                        'color': 'text-feedback-critical'
                    };
                    var0 = arg0;
                    var1.children = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var5.mutedHook = var9;
                var5 = var7.bind(var8)(var6, var5);
                var1.children = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            case 533:
                var2 = _closure1_slot9;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 7;
                var0 = var8[var0];
                var0 = var7.bind(var3)(var0);
                var1 = var0.Text;
                var0 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var4 = 8;
                var5 = var8[var4];
                var5 = var7.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.t0mEt2;
                var4 = var5.bind(var6)(var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.MuteSettingsHint = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1372, 1410, 3059, 1613, 660, 33, 3900, 1234, 8703, 3237, 5325, 4861, 4045, 8704, 4755, 8705, 5171, 5174, 2]);