// modules/guild_antiraid/native/GuildRaidLockdownFeedbackActionSheet.tsx
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
    var3 = var3.AnalyticEvents;
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
        'display': 'flex',
        'gap': 24
    };
    var3.container = var8;
    var8 = {
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var3.title = var8;
    var8 = {
        'borderColor': null,
        'borderWidth': 1,
        'borderRadius': null,
        'display': 'flex',
        'flexDirection': 'column',
        'marginBottom': 16,
        'width': '100%'
    };
    var9 = 5;
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
    var _closure1_slot8 = var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_antiraid/native/GuildRaidLockdownFeedbackActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun78924: for (var _fun78924_ip = 0;;) switch (_fun78924_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guildId;
                var _closure2_slot0 = var0;
                var0 = _closure1_slot8;
                var3 = undefined;
                var7 = var0.bind(var3)();
                var6 = _closure1_slot4;
                var1 = var6.useState;
                var0 = new Array(0);
                var0 = var1.bind(var6)(var0);
                var5 = _closure1_slot3;
                var4 = 2;
                var0 = var5.bind(var3)(var0, var4);
                var2 = 0;
                var11 = var0[var2];
                var _closure2_slot1 = var11;
                var1 = 1;
                var0 = var0[var1];
                var _closure2_slot2 = var0;
                var0 = var6.useState;
                var0 = var0.bind(var6)();
                var0 = var5.bind(var3)(var0, var4);
                var16 = var0[var2];
                var _closure2_slot3 = var16;
                var0 = var0[var1];
                var _closure2_slot4 = var0;
                var0 = {};
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var15 = 6;
                var1 = var14[var15];
                var1 = var13.bind(var3)(var1);
                var4 = var1.intl;
                var2 = var4.string;
                var1 = var14[var15];
                var1 = var13.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1["//3pvi"];
                var1 = var2.bind(var4)(var1);
                var0.text = var1;
                var9 = 7;
                var1 = var14[var9];
                var1 = var13.bind(var3)(var1);
                var1 = var1.RaidLockdownFeedbackType;
                var1 = var1.DM_SPAM;
                var0.value = var1;
                var19 = new Array(6);
                var19[0] = var0;
                var0 = {};
                var1 = var14[var15];
                var1 = var13.bind(var3)(var1);
                var4 = var1.intl;
                var2 = var4.string;
                var1 = var14[var15];
                var1 = var13.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.SdVsip;
                var1 = var2.bind(var4)(var1);
                var0.text = var1;
                var1 = var14[var9];
                var1 = var13.bind(var3)(var1);
                var1 = var1.RaidLockdownFeedbackType;
                var1 = var1.MENTION_SPAM;
                var0.value = var1;
                var19[1] = var0;
                var0 = {};
                var1 = var14[var15];
                var1 = var13.bind(var3)(var1);
                var4 = var1.intl;
                var2 = var4.string;
                var1 = var14[var15];
                var1 = var13.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.uTiSVL;
                var1 = var2.bind(var4)(var1);
                var0.text = var1;
                var1 = var14[var9];
                var1 = var13.bind(var3)(var1);
                var1 = var1.RaidLockdownFeedbackType;
                var1 = var1.CHANNEL_SPAM;
                var0.value = var1;
                var19[2] = var0;
                var0 = {};
                var1 = var14[var15];
                var1 = var13.bind(var3)(var1);
                var4 = var1.intl;
                var2 = var4.string;
                var1 = var14[var15];
                var1 = var13.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.GQczU8;
                var1 = var2.bind(var4)(var1);
                var0.text = var1;
                var1 = var14[var9];
                var1 = var13.bind(var3)(var1);
                var1 = var1.RaidLockdownFeedbackType;
                var1 = var1.SUS_NEW_MEMBERS;
                var0.value = var1;
                var19[3] = var0;
                var0 = {};
                var1 = var14[var15];
                var1 = var13.bind(var3)(var1);
                var4 = var1.intl;
                var2 = var4.string;
                var1 = var14[var15];
                var1 = var13.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.AAgqy3;
                var1 = var2.bind(var4)(var1);
                var0.text = var1;
                var1 = var14[var9];
                var1 = var13.bind(var3)(var1);
                var1 = var1.RaidLockdownFeedbackType;
                var1 = var1.CHANGING_SETTINGS;
                var0.value = var1;
                var19[4] = var0;
                var0 = {};
                var1 = var14[var15];
                var1 = var13.bind(var3)(var1);
                var4 = var1.intl;
                var2 = var4.string;
                var1 = var14[var15];
                var1 = var13.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.ryPKb7;
                var1 = var2.bind(var4)(var1);
                var0.text = var1;
                var1 = var14[var9];
                var1 = var13.bind(var3)(var1);
                var1 = var1.RaidLockdownFeedbackType;
                var1 = var1.OTHER;
                var0.value = var1;
                var19[5] = var0;
                var2 = _closure1_slot6;
                var0 = 9;
                var0 = var14[var0];
                var0 = var13.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var4 = true;
                var0.startExpanded = var4;
                var4 = 10;
                var4 = var14[var4];
                var4 = var13.bind(var3)(var4);
                var5 = var4.BottomSheetTitleHeader;
                var4 = {};
                var6 = var14[var15];
                var6 = var13.bind(var3)(var6);
                var17 = var6.intl;
                var10 = var17.string;
                var6 = var14[var15];
                var6 = var13.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.f5hd9P;
                var6 = var10.bind(var17)(var6);
                var4.title = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.header = var4;
                var6 = _closure1_slot7;
                var5 = _closure1_slot1;
                var4 = 11;
                var4 = var14[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var7 = var7.container;
                var4.style = var7;
                var7 = 12;
                var7 = var14[var7];
                var7 = var13.bind(var3)(var7);
                var10 = var7.TableRowGroup;
                var7 = {};
                var17 = false;
                var7.hasIcons = var17;
                var18 = var19.map;
                var17 = function(arg0) { // Environment: var12
                    var0 = arg0;
                    var5 = var0.text;
                    var4 = var0.value;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot6;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 13;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.TableCheckboxRow;
                    var0 = {};
                    var6 = function() {
                        var2 = _closure3_slot0;
                        var1 = function arg0() {
                            _fun78927: for (var _fun78927_ip = 0;;) switch (_fun78927_ip) {
                                case 0:
                                    var4 = arg0;
                                    var _closure5_slot0 = var4;
                                    var3 = _closure2_slot1;
                                    var1 = var3.includes;
                                    var1 = var1.bind(var3)(var4);
                                    var2 = _closure2_slot2;
                                    if (var1) {
                                        _fun78927_ip = 42;
                                        continue _fun78927
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
                                    _fun78927_ip = 49;
                                    continue _fun78927;
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
                    var0.onPress = var6;
                    var7 = _closure2_slot1;
                    var6 = var7.includes;
                    var6 = var6.bind(var7)(var4);
                    var0.checked = var6;
                    var0.label = var5;
                    var0 = var3.bind(var2)(var1, var0, var4);
                    return var0;
                };
                var17 = var18.bind(var19)(var17);
                var7.children = var17;
                var10 = var2.bind(var3)(var10, var7);
                var7 = new Array(3);
                var7[0] = var10;
                var10 = var11.includes;
                var9 = var14[var9];
                var9 = var13.bind(var3)(var9);
                var9 = var9.RaidLockdownFeedbackType;
                var9 = var9.OTHER;
                var9 = var10.bind(var11)(var9);
                if (!var9) {
                    _fun78924_ip = 964;
                    continue _fun78924
                }
            case 852:
                var13 = _closure1_slot6;
                var18 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 14;
                var10 = var14[var10];
                var10 = var18.bind(var3)(var10);
                var11 = var10.TextArea;
                var10 = {};
                var17 = 'off';
                var10.autoComplete = var17;
                var10.value = var16;
                var16 = var14[var15];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var14 = var14[var15];
                var14 = var18.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14["PAM+JR"];
                var14 = var16.bind(var17)(var14);
                var10.placeholder = var14;
                var14 = function arg0() {
                    var2 = _closure2_slot4;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var10.onChange = var14;
                var9 = var13.bind(var3)(var11, var10);
            case 964:
                var7[1] = var9;
                var10 = _closure1_slot6;
                var14 = _closure1_slot0;
                var11 = _closure1_slot2;
                var8 = 15;
                var8 = var11[var8];
                var8 = var14.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {};
                var12 = function() {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 16;
                    var2 = var3[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var2);
                    var5 = var6.trackWithMetadata;
                    var2 = _closure1_slot5;
                    var4 = var2.GUILD_RAID_LOCKDOWN_FEEDBACK;
                    var2 = {};
                    var8 = _closure2_slot1;
                    var2.raid_lockdown_feedback_type = var8;
                    var8 = _closure2_slot3;
                    var2.raid_lockdown_feedback_other_reason = var8;
                    var7 = _closure2_slot0;
                    var2.guild_id = var7;
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = _closure1_slot1;
                    var1 = 8;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.hideActionSheet;
                    var1 = 'GuildRaidLockdownFeedbackActionSheet';
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var8.onPress = var12;
                var12 = var11[var15];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var11[var15];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.nAt0rE;
                var11 = var12.bind(var13)(var11);
                var8.text = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 660, 33, 1297, 671, 1234, 4506, 3239, 5173, 5176, 5736, 5327, 8734, 5352, 4045, 4268, 2]);