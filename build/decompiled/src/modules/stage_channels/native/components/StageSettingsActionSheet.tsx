// modules/stage_channels/native/components/StageSettingsActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: close, environment: var1
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 11;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.hideActionSheet;
        var1 = _closure1_slot9;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot15 = var0;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.STAGE_SETTINGS_SHEET_KEY;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ChannelSettingsSections;
    var _closure1_slot10 = var6;
    var3 = var3.UserSettingsSections;
    var _closure1_slot11 = var3;
    var9 = 8;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.marginTop = var9;
    var3.container = var8;
    var8 = {};
    var9 = 10;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INTERACTIVE_TEXT_DEFAULT;
    var8.color = var11;
    var3.icon = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.unsafe_rawColors;
    var9 = var9.RED_400;
    var8.color = var9;
    var3.warning = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 28;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/components/StageSettingsActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: StageSettingsActionSheet, environment: var1
        _fun53110: for (var _fun53110_ip = 0;;) switch (_fun53110_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.channelId;
                var _closure2_slot0 = var5;
                var10 = var0.onOpenRTCDebugOverlay;
                var _closure2_slot1 = var10;
                var0 = _closure1_slot14;
                var4 = undefined;
                var18 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 12;
                var0 = var3[var1];
                var8 = var2.bind(var4)(var0);
                var7 = var8.useStateFromStores;
                var0 = _closure1_slot6;
                var6 = new Array(1);
                var6[0] = var0;
                var0 = function() { // Environment: var12
                    var2 = _closure1_slot6;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var7.bind(var8)(var6, var0);
                var _closure2_slot2 = var0;
                var6 = var3[var1];
                var9 = var2.bind(var4)(var6);
                var8 = var9.useStateFromStores;
                var6 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var12
                    var3 = _closure1_slot7;
                    var2 = var3.can;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var1);
                    var1 = var0.MODERATE_STAGE_CHANNEL_PERMISSIONS;
                    var0 = _closure2_slot2;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var15 = var8.bind(var9)(var7, var6);
                var6 = 14;
                var6 = var3[var6];
                var7 = var2.bind(var4)(var6);
                var6 = var7.useIsStageSpeakingDisabledForCurrentUser;
                var8 = var6.bind(var7)();
                var6 = var3[var1];
                var11 = var2.bind(var4)(var6);
                var9 = var11.useStateFromStores;
                var6 = _closure1_slot5;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = new Array(1);
                var6[0] = var5;
                var5 = function() { // Environment: var12
                    var2 = _closure1_slot5;
                    var1 = var2.getSelectedParticipant;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var9.bind(var11)(var7, var5, var6);
                var1 = var3[var1];
                var5 = var2.bind(var4)(var1);
                var3 = var5.useStateFromStores;
                var1 = _closure1_slot8;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var12
                    var2 = _closure1_slot8;
                    var1 = var2.getStageInstanceByChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var16 = var3.bind(var5)(var2, var1);
                var5 = _closure1_slot3;
                var3 = var5.useEffect;
                var2 = new Array(1);
                var2[0] = var0;
                var1 = function() { // Environment: var12
                    _fun53115: for (var _fun53115_ip = 0;;) switch (_fun53115_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun53115_ip = 26;
                                continue _fun53115
                            }
                        case 13:
                            var1 = _closure1_slot15;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 26:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var5)(var1, var2);
                var9 = null;
                var1 = var9 == var0;
                var0 = null;
                if (var1) {
                    _fun53110_ip = 1284;
                    continue _fun53110
                }
            case 273:
                var3 = _closure1_slot12;
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 15;
                var1 = var5[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.ActionSheet;
                var1 = {};
                var5 = 'always';
                var1.keyboardShouldPersistTaps = var5;
                var7 = _closure1_slot13;
                var6 = _closure1_slot4;
                var5 = {};
                var11 = var18.container;
                var5.style = var11;
                var11 = null;
                if (!var15) {
                    _fun53110_ip = 595;
                    continue _fun53110
                }
            case 341:
                var13 = var9 == var13;
                var11 = null;
                if (!var13) {
                    _fun53110_ip = 595;
                    continue _fun53110
                }
            case 353:
                var11 = null;
                if (var8) {
                    _fun53110_ip = 595;
                    continue _fun53110
                }
            case 361:
                var15 = _closure1_slot12;
                var13 = _closure1_slot0;
                var17 = _closure1_slot2;
                var8 = 16;
                var8 = var17[var8];
                var8 = var13.bind(var4)(var8);
                var13 = var8.FormRow;
                var8 = {};
                if (!(var9 == var16)) {
                    _fun53110_ip = 454;
                    continue _fun53110
                }
            case 397:
                var20 = _closure1_slot0;
                var21 = _closure1_slot2;
                var16 = 17;
                var17 = var21[var16];
                var17 = var20.bind(var4)(var17);
                var19 = var17.intl;
                var17 = var19.string;
                var16 = var21[var16];
                var16 = var20.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16.s8mM8A;
                var16 = var17.bind(var19)(var16);
                _fun53110_ip = 509;
                continue _fun53110;
            case 454:
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var17 = 17;
                var19 = var22[var17];
                var19 = var21.bind(var4)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var17 = var22[var17];
                var17 = var21.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17["5BKP4y"];
                var16 = var19.bind(var20)(var17);
            case 509:
                var8.label = var16;
                var19 = _closure1_slot12;
                var21 = _closure1_slot1;
                var22 = _closure1_slot2;
                var16 = 18;
                var16 = var22[var16];
                var17 = var21.bind(var4)(var16);
                var16 = {};
                var20 = 19;
                var20 = var22[var20];
                var20 = var21.bind(var4)(var20);
                var16.source = var20;
                var20 = var18.icon;
                var20 = var20.color;
                var16.color = var20;
                var16 = var19.bind(var4)(var17, var16);
                var8.leading = var16;
                var16 = function() { // Original name: onPress, environment: var12
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 20;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.openStageChannelSettings;
                    var2 = _closure2_slot2;
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure1_slot15;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var8.onPress = var16;
                var11 = var15.bind(var4)(var13, var8);
            case 595:
                var8 = new Array(5);
                var8[0] = var11;
                var17 = _closure1_slot12;
                var25 = _closure1_slot0;
                var24 = _closure1_slot2;
                var15 = 16;
                var11 = var24[var15];
                var11 = var25.bind(var4)(var11);
                var16 = var11.FormRow;
                var11 = {};
                var19 = 17;
                var13 = var24[var19];
                var13 = var25.bind(var4)(var13);
                var21 = var13.intl;
                var20 = var21.string;
                var13 = var24[var19];
                var13 = var25.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.NiTd0e;
                var13 = var20.bind(var21)(var13);
                var11.label = var13;
                var23 = _closure1_slot1;
                var13 = 18;
                var20 = var24[var13];
                var21 = var23.bind(var4)(var20);
                var20 = {};
                var22 = 21;
                var22 = var24[var22];
                var22 = var23.bind(var4)(var22);
                var20.source = var22;
                var22 = var18.icon;
                var22 = var22.color;
                var20.color = var22;
                var20 = var17.bind(var4)(var21, var20);
                var11.leading = var20;
                var20 = function() { // Original name: onPress, environment: var12
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 22;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.openUserSettings;
                    var2 = {};
                    var5 = _closure1_slot11;
                    var5 = var5.VOICE;
                    var2.screen = var5;
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure1_slot15;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var11.onPress = var20;
                var11 = var17.bind(var4)(var16, var11);
                var8[1] = var11;
                var11 = var24[var15];
                var11 = var25.bind(var4)(var11);
                var16 = var11.FormRow;
                var11 = {};
                var20 = var24[var19];
                var20 = var25.bind(var4)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var20 = var24[var19];
                var20 = var25.bind(var4)(var20);
                var20 = var20.t;
                var20 = var20.h850Ss;
                var20 = var21.bind(var22)(var20);
                var11.label = var20;
                var20 = var24[var13];
                var21 = var23.bind(var4)(var20);
                var20 = {};
                var22 = 23;
                var22 = var24[var22];
                var22 = var23.bind(var4)(var22);
                var20.source = var22;
                var22 = var18.icon;
                var22 = var22.color;
                var20.color = var22;
                var20 = var17.bind(var4)(var21, var20);
                var11.leading = var20;
                var20 = function() { // Original name: onPress, environment: var12
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 24;
                    var5 = var4[var2];
                    var0 = undefined;
                    var7 = var3.bind(var0)(var5);
                    var6 = var7.setSection;
                    var5 = _closure1_slot10;
                    var5 = var5.NOTIFICATIONS;
                    var5 = var6.bind(var7)(var5);
                    var2 = var4[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.open;
                    var2 = _closure2_slot2;
                    var2 = var2.id;
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure1_slot15;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var11.onPress = var20;
                var11 = var17.bind(var4)(var16, var11);
                var8[2] = var11;
                var9 = var9 != var10;
                if (!var9) {
                    _fun53110_ip = 1058;
                    continue _fun53110
                }
            case 910:
                var16 = _closure1_slot12;
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var10 = var23[var15];
                var10 = var22.bind(var4)(var10);
                var11 = var10.FormRow;
                var10 = {};
                var17 = var23[var19];
                var17 = var22.bind(var4)(var17);
                var21 = var17.intl;
                var20 = var21.string;
                var17 = var23[var19];
                var17 = var22.bind(var4)(var17);
                var17 = var17.t;
                var17 = var17.X8bCMe;
                var17 = var20.bind(var21)(var17);
                var10.label = var17;
                var22 = _closure1_slot1;
                var17 = var23[var13];
                var20 = var22.bind(var4)(var17);
                var17 = {};
                var21 = 25;
                var21 = var23[var21];
                var21 = var22.bind(var4)(var21);
                var17.source = var21;
                var21 = var18.icon;
                var21 = var21.color;
                var17.color = var21;
                var17 = var16.bind(var4)(var20, var17);
                var10.leading = var17;
                var17 = function() { // Original name: onPress, environment: var12
                    _fun53119: for (var _fun53119_ip = 0;;) switch (_fun53119_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun53119_ip = 23;
                                continue _fun53119
                            }
                        case 13:
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 23:
                            var1 = _closure1_slot15;
                            var0 = undefined;
                            var1 = var1.bind(var0)();
                            return var0;
                    }
                };
                var10.onPress = var17;
                var9 = var16.bind(var4)(var11, var10);
            case 1058:
                var8[3] = var9;
                var11 = _closure1_slot12;
                var22 = _closure1_slot0;
                var17 = _closure1_slot2;
                var9 = var17[var15];
                var9 = var22.bind(var4)(var9);
                var10 = var9.FormRow;
                var9 = {};
                var15 = var17[var15];
                var15 = var22.bind(var4)(var15);
                var16 = var15.FormLabel;
                var15 = {};
                var20 = var17[var19];
                var20 = var22.bind(var4)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var17[var19];
                var19 = var22.bind(var4)(var19);
                var19 = var19.t;
                var19 = var19["+78Pfm"];
                var19 = var20.bind(var21)(var19);
                var15.text = var19;
                var18 = var18.warning;
                var15.style = var18;
                var15 = var11.bind(var4)(var16, var15);
                var9.label = var15;
                var16 = _closure1_slot1;
                var13 = var17[var13];
                var14 = var16.bind(var4)(var13);
                var13 = {};
                var15 = 10;
                var15 = var17[var15];
                var15 = var16.bind(var4)(var15);
                var15 = var15.unsafe_rawColors;
                var15 = var15.RED_400;
                var13.color = var15;
                var15 = 26;
                var15 = var17[var15];
                var15 = var16.bind(var4)(var15);
                var13.source = var15;
                var13 = var11.bind(var4)(var14, var13);
                var9.leading = var13;
                var12 = function() { // Original name: onPress, environment: var12
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 27;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.showReportModalForStageChannel;
                    var2 = _closure2_slot2;
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure1_slot15;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var9.onPress = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[4] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1284:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3907, 1372, 3050, 1377, 4199, 660, 33, 1297, 671, 3237, 566, 1380, 4211, 5171, 5340, 1234, 4045, 6424, 5874, 6425, 5884, 6426, 6427, 6453, 6454, 6455, 2]);