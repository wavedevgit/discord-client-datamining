// modules/guild_antiraid/native/GuildRaidResolveActionSheet.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SafetyToastType;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'paddingVertical': 24,
        'paddingHorizontal': 16,
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center'
    };
    var3.container = var8;
    var8 = {
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var3.title = var8;
    var8 = {
        'marginBottom': 16,
        'textAlign': 'center'
    };
    var3.subtitle = var8;
    var8 = {
        'borderColor': null,
        'borderWidth': 1,
        'borderRadius': null,
        'display': 'flex',
        'flexDirection': 'column',
        'marginBottom': 14,
        'width': '100%'
    };
    var9 = 7;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var8.borderColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.xs;
    var8.borderRadius = var11;
    var11 = '100%';
    var3.optionContainer = var8;
    var8 = {};
    var8.width = var11;
    var3.option = var8;
    var8 = {
        'paddingLeft': 54,
        'paddingRight': 16,
        'paddingBottom': 16
    };
    var3.textInputContainer = var8;
    var8 = {
        'backgroundColor': null,
        'width': '100%',
        'padding': 8
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INPUT_BACKGROUND_DEFAULT;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.xs;
    var8.borderRadius = var9;
    var3.textInput = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_antiraid/native/GuildRaidResolveActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var1 = var0.guildId;
        var _closure2_slot0 = var1;
        var0 = var0.messageId;
        var _closure2_slot1 = var0;
        var3 = undefined;
        var _closure2_slot6 = var3;
        var0 = function arg0() {
            var2 = _closure2_slot6;
            var0 = undefined;
            var1 = arg0;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var _closure2_slot7 = var0;
        var14 = function() {
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.hideActionSheet;
            var1 = 'GuildRaidResolveActionSheet';
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var _closure2_slot8 = var14;
        var0 = _closure1_slot10;
        var17 = var0.bind(var3)();
        var _closure2_slot2 = var17;
        var7 = _closure1_slot4;
        var1 = var7.useState;
        var0 = new Array(0);
        var0 = var1.bind(var7)(var0);
        var6 = _closure1_slot3;
        var5 = 2;
        var0 = var6.bind(var3)(var0, var5);
        var2 = 0;
        var1 = var0[var2];
        var _closure2_slot3 = var1;
        var1 = 1;
        var0 = var0[var1];
        var _closure2_slot4 = var0;
        var0 = var7.useState;
        var0 = var0.bind(var7)();
        var0 = var6.bind(var3)(var0, var5);
        var2 = var0[var2];
        var _closure2_slot5 = var2;
        var0 = var0[var1];
        _closure2_slot6 = var0;
        var0 = {};
        var16 = _closure1_slot0;
        var12 = _closure1_slot2;
        var13 = 8;
        var1 = var12[var13];
        var1 = var16.bind(var3)(var1);
        var5 = var1.intl;
        var2 = var5.string;
        var1 = var12[var13];
        var1 = var16.bind(var3)(var1);
        var1 = var1.t;
        var1 = var1.yeaXw5;
        var1 = var2.bind(var5)(var1);
        var0.text = var1;
        var1 = 9;
        var2 = var12[var1];
        var2 = var16.bind(var3)(var2);
        var2 = var2.RaidResolutionType;
        var2 = var2.LEGITIMATE_ACTIVITY;
        var0.value = var2;
        var10 = new Array(4);
        var10[0] = var0;
        var0 = {};
        var2 = var12[var13];
        var2 = var16.bind(var3)(var2);
        var6 = var2.intl;
        var5 = var6.string;
        var2 = var12[var13];
        var2 = var16.bind(var3)(var2);
        var2 = var2.t;
        var2 = var2["o++3B8"];
        var2 = var5.bind(var6)(var2);
        var0.text = var2;
        var2 = var12[var1];
        var2 = var16.bind(var3)(var2);
        var2 = var2.RaidResolutionType;
        var2 = var2.DM_SPAM;
        var0.value = var2;
        var10[1] = var0;
        var0 = {};
        var2 = var12[var13];
        var2 = var16.bind(var3)(var2);
        var6 = var2.intl;
        var5 = var6.string;
        var2 = var12[var13];
        var2 = var16.bind(var3)(var2);
        var2 = var2.t;
        var2 = var2.UfHAwZ;
        var2 = var5.bind(var6)(var2);
        var0.text = var2;
        var2 = var12[var1];
        var2 = var16.bind(var3)(var2);
        var2 = var2.RaidResolutionType;
        var2 = var2.JOIN_RAID;
        var0.value = var2;
        var10[2] = var0;
        var0 = {};
        var2 = var12[var13];
        var2 = var16.bind(var3)(var2);
        var6 = var2.intl;
        var5 = var6.string;
        var2 = var12[var13];
        var2 = var16.bind(var3)(var2);
        var2 = var2.t;
        var2 = var2.K3UWeR;
        var2 = var5.bind(var6)(var2);
        var0.text = var2;
        var1 = var12[var1];
        var1 = var16.bind(var3)(var1);
        var1 = var1.RaidResolutionType;
        var1 = var1.OTHER;
        var0.value = var1;
        var10[3] = var0;
        var2 = _closure1_slot8;
        var0 = 11;
        var0 = var12[var0];
        var0 = var16.bind(var3)(var0);
        var1 = var0.ActionSheet;
        var0 = {};
        var6 = _closure1_slot9;
        var11 = _closure1_slot1;
        var4 = 12;
        var4 = var12[var4];
        var5 = var11.bind(var3)(var4);
        var4 = {};
        var7 = var17.container;
        var4.style = var7;
        var8 = 13;
        var7 = var12[var8];
        var7 = var16.bind(var3)(var7);
        var9 = var7.Text;
        var7 = {
            'style': null,
            'variant': 'heading-xl/bold',
            'color': 'mobile-text-heading-primary'
        };
        var18 = var17.title;
        var7.style = var18;
        var18 = var12[var13];
        var18 = var16.bind(var3)(var18);
        var20 = var18.intl;
        var19 = var20.string;
        var18 = var12[var13];
        var18 = var16.bind(var3)(var18);
        var18 = var18.t;
        var18 = var18["1zmw/H"];
        var18 = var19.bind(var20)(var18);
        var7.children = var18;
        var9 = var2.bind(var3)(var9, var7);
        var7 = new Array(5);
        var7[0] = var9;
        var8 = var12[var8];
        var8 = var16.bind(var3)(var8);
        var9 = var8.Text;
        var8 = {
            'style': null,
            'variant': 'text-sm/normal',
            'color': 'text-default'
        };
        var17 = var17.subtitle;
        var8.style = var17;
        var17 = var12[var13];
        var17 = var16.bind(var3)(var17);
        var19 = var17.intl;
        var18 = var19.string;
        var17 = var12[var13];
        var17 = var16.bind(var3)(var17);
        var17 = var17.t;
        var17 = var17.nF79oO;
        var17 = var18.bind(var19)(var17);
        var8.children = var17;
        var8 = var2.bind(var3)(var9, var8);
        var7[1] = var8;
        var9 = var10.map;
        var8 = function(arg0) { // Environment: var15
            _fun79691: for (var _fun79691_ip = 0;;) switch (_fun79691_ip) {
                case 0:
                    var0 = arg0;
                    var10 = var0.text;
                    var4 = var0.value;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot5;
                    var1 = {};
                    var14 = _closure2_slot2;
                    var0 = var14.optionContainer;
                    var1.style = var0;
                    var9 = _closure1_slot8;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 14;
                    var5 = var6[var0];
                    var0 = undefined;
                    var5 = var7.bind(var0)(var5);
                    var8 = var5.FormRow;
                    var5 = {};
                    var14 = var14.option;
                    var5.style = var14;
                    var11 = function() {
                        var2 = _closure3_slot0;
                        var1 = function arg0() {
                            _fun79693: for (var _fun79693_ip = 0;;) switch (_fun79693_ip) {
                                case 0:
                                    var4 = arg0;
                                    var _closure5_slot0 = var4;
                                    var3 = _closure2_slot3;
                                    var1 = var3.includes;
                                    var1 = var1.bind(var3)(var4);
                                    var2 = _closure2_slot4;
                                    if (var1) {
                                        _fun79693_ip = 42;
                                        continue _fun79693
                                    }
                                case 33:
                                    var1 = function(arg0) { // Environment: var0
                                        var0 = new Array(1);
                                        var4 = arg0;
                                        var3 = 0;
                                        var5 = var0;
                                        var2 = arraySpread(var5, var4, var3);
                                        var1 = _closure5_slot0;
                                        var0[var2] = var1;
                                        var1 = 1;
                                        var1 = var2 + var1;
                                        return var0;
                                    };
                                    _fun79693_ip = 49;
                                    continue _fun79693;
                                case 42:
                                    var1 = function(arg0) { // Environment: var0
                                        var2 = arg0;
                                        var1 = var2.filter;
                                        var0 = function(arg0) { // Environment: var0
                                            var1 = _closure5_slot0;
                                            var0 = arg0;
                                            var0 = var0 !== var1;
                                            return var0;
                                        };
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                case 49:
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var0 = undefined;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var5.onPress = var11;
                    var14 = _closure1_slot1;
                    var11 = 15;
                    var11 = var6[var11];
                    var14 = var14.bind(var0)(var11);
                    var11 = {};
                    var16 = _closure2_slot3;
                    var15 = var16.includes;
                    var15 = var15.bind(var16)(var4);
                    var11.selected = var15;
                    var11 = var9.bind(var0)(var14, var11);
                    var5.leading = var11;
                    var5.label = var10;
                    var8 = var9.bind(var0)(var8, var5);
                    var5 = new Array(2);
                    var5[0] = var8;
                    var11 = 9;
                    var6 = var6[var11];
                    var6 = var7.bind(var0)(var6);
                    var6 = var6.RaidResolutionType;
                    var6 = var6.OTHER;
                    var6 = var4 === var6;
                    if (!var6) {
                        _fun79691_ip = 244;
                        continue _fun79691
                    }
                case 201:
                    var9 = _closure2_slot3;
                    var8 = var9.includes;
                    var10 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var11];
                    var7 = var10.bind(var0)(var7);
                    var7 = var7.RaidResolutionType;
                    var7 = var7.OTHER;
                    var6 = var8.bind(var9)(var7);
                case 244:
                    if (!var6) {
                        _fun79691_ip = 404;
                        continue _fun79691
                    }
                case 250:
                    var9 = _closure1_slot8;
                    var8 = _closure1_slot5;
                    var7 = {};
                    var14 = _closure2_slot2;
                    var10 = var14.textInputContainer;
                    var7.style = var10;
                    var11 = _closure1_slot1;
                    var17 = _closure1_slot2;
                    var10 = 16;
                    var10 = var17[var10];
                    var11 = var11.bind(var0)(var10);
                    var10 = {};
                    var14 = var14.textInput;
                    var10.style = var14;
                    var14 = 'off';
                    var10.autoComplete = var14;
                    var14 = _closure2_slot5;
                    var10.value = var14;
                    var16 = _closure1_slot0;
                    var13 = 8;
                    var14 = var17[var13];
                    var14 = var16.bind(var0)(var14);
                    var15 = var14.intl;
                    var14 = var15.string;
                    var13 = var17[var13];
                    var13 = var16.bind(var0)(var13);
                    var13 = var13.t;
                    var13 = var13["PAM+JR"];
                    var13 = var14.bind(var15)(var13);
                    var10.placeholder = var13;
                    var12 = _closure2_slot7;
                    var10.onChangeText = var12;
                    var10 = var9.bind(var0)(var11, var10);
                    var7.children = var10;
                    var6 = var9.bind(var0)(var8, var7);
                case 404:
                    var5[1] = var6;
                    var1.children = var5;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
            }
        };
        var8 = var9.bind(var10)(var8);
        var7[2] = var8;
        var10 = 17;
        var8 = var12[var10];
        var9 = var11.bind(var3)(var8);
        var8 = {};
        var15 = function() {
            var12 = {};
            var9 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 9;
            var2 = var4[var3];
            var0 = undefined;
            var2 = var9.bind(var0)(var2);
            var2 = var2.RaidAlertType;
            var2 = var2.JOIN_RAID;
            var12.raid_alert_type = var2;
            var8 = _closure2_slot1;
            var12.raid_alert_id = var8;
            var10 = _closure2_slot3;
            var6 = var10.map;
            var5 = function(arg0) { // Environment: var5
                var1 = arg0;
                var0 = var1.toString;
                var0 = var0.bind(var1)();
                return var0;
            };
            var5 = var6.bind(var10)(var5);
            var12.false_alarm_type = var5;
            var5 = _closure2_slot5;
            var12.false_alarm_other_reason = var5;
            var7 = _closure2_slot0;
            var12.guild_id = var7;
            var5 = 18;
            var5 = var4[var5];
            var11 = var9.bind(var0)(var5);
            var6 = var11.trackWithMetadata;
            var5 = _closure1_slot6;
            var5 = var5.GUILD_RAID_FEEDBACK;
            var5 = var6.bind(var11)(var5, var12);
            var5 = 19;
            var5 = var4[var5];
            var6 = var9.bind(var0)(var5);
            var5 = var6.handleResolveRaid;
            var3 = var4[var3];
            var9 = var9.bind(var0)(var3);
            var3 = var9.getMostImportantRaidResolutionType;
            var3 = var3.bind(var9)(var10);
            var3 = var5.bind(var6)(var7, var8, var3);
            var2 = _closure2_slot8;
            var2 = var2.bind(var0)();
            var3 = _closure1_slot1;
            var2 = 20;
            var2 = var4[var2];
            var3 = var3.bind(var0)(var2);
            var2 = var3.showSuccessToast;
            var1 = _closure1_slot7;
            var1 = var1.SAFETY_FEEDBACK_SUCCESS;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var8.onPress = var15;
        var15 = var12[var13];
        var15 = var16.bind(var3)(var15);
        var18 = var15.intl;
        var17 = var18.string;
        var15 = var12[var13];
        var15 = var16.bind(var3)(var15);
        var15 = var15.t;
        var15 = var15.Gh3A0O;
        var15 = var17.bind(var18)(var15);
        var8.text = var15;
        var15 = var12[var10];
        var15 = var11.bind(var3)(var15);
        var15 = var15.Colors;
        var15 = var15.BRAND;
        var8.color = var15;
        var15 = var12[var10];
        var15 = var11.bind(var3)(var15);
        var15 = var15.Sizes;
        var15 = var15.MEDIUM;
        var8.size = var15;
        var8 = var2.bind(var3)(var9, var8);
        var7[3] = var8;
        var8 = var12[var10];
        var9 = var11.bind(var3)(var8);
        var8 = {};
        var8.onPress = var14;
        var14 = var12[var13];
        var14 = var16.bind(var3)(var14);
        var15 = var14.intl;
        var14 = var15.string;
        var13 = var12[var13];
        var13 = var16.bind(var3)(var13);
        var13 = var13.t;
        var13 = var13["ETE/oC"];
        var13 = var14.bind(var15)(var13);
        var8.text = var13;
        var13 = var12[var10];
        var13 = var11.bind(var3)(var13);
        var13 = var13.Colors;
        var13 = var13.TRANSPARENT;
        var8.color = var13;
        var10 = var12[var10];
        var10 = var11.bind(var3)(var10);
        var10 = var10.Sizes;
        var10 = var10.MEDIUM;
        var8.size = var10;
        var8 = var2.bind(var3)(var9, var8);
        var7[4] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 5917, 33, 1297, 671, 1234, 4540, 3278, 5208, 5772, 3941, 5378, 4918, 4878, 4873, 4302, 10103, 5924, 2]);