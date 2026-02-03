// modules/guild_antiraid/native/GuildIncidentActionsActionSheet.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var6 = var5[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var6);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var10.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.resetGuildIncidentsActionSheetStore;
    var _closure1_slot5 = var6;
    var6 = var1.setPauseDms;
    var _closure1_slot6 = var6;
    var6 = var1.setPauseInvites;
    var _closure1_slot7 = var6;
    var6 = var1.setTime;
    var _closure1_slot8 = var6;
    var1 = var1.useGuildIncidentsActionSheetStore;
    var _closure1_slot9 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.getTimeframes;
    var _closure1_slot10 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.AnalyticEvents;
    var _closure1_slot11 = var6;
    var1 = var1.GuildFeatures;
    var _closure1_slot12 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.jsx;
    var _closure1_slot13 = var6;
    var1 = var1.jsxs;
    var _closure1_slot14 = var1;
    var1 = 6;
    var1 = var5[var1];
    var7 = var4.bind(var0)(var1);
    var6 = var7.createStyles;
    var1 = {};
    var8 = {
        'paddingVertical': 24,
        'paddingHorizontal': 16,
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center'
    };
    var1.container = var8;
    var8 = {
        'marginBottom': 12,
        'textAlign': 'center',
        'display': 'flex',
        'flexDirection': 'row'
    };
    var1.title = var8;
    var8 = {};
    var9 = -12;
    var8.marginLeft = var9;
    var1.beta = var8;
    var8 = {
        'marginBottom': 16,
        'textAlign': 'center'
    };
    var1.subtitle = var8;
    var8 = {
        'backgroundColor': null,
        'padding': 12,
        'borderRadius': null,
        'width': '100%',
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var9 = 7;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.INPUT_BACKGROUND_DEFAULT;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var1.dropdown = var8;
    var8 = {
        'width': 20,
        'height': 20
    };
    var1.dropdownIcon = var8;
    var8 = {
        'width': '100%',
        'position': 'relative'
    };
    var1.invitesOptionContainer = var8;
    var8 = {
        'borderColor': null,
        'borderWidth': 1,
        'marginBottom': 12
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BORDER_SUBTLE;
    var8.borderColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.xs;
    var8.borderRadius = var9;
    var1.optionContainer = var8;
    var1 = var6.bind(var7)(var1);
    var _closure1_slot15 = var1;
    var1 = function arg0() {
        var0 = arg0;
        var0 = var0.onClose;
        var _closure2_slot0 = var0;
        var0 = _closure1_slot10;
        var3 = undefined;
        var10 = var0.bind(var3)();
        var2 = _closure1_slot14;
        var6 = _closure1_slot0;
        var9 = _closure1_slot2;
        var0 = 8;
        var0 = var9[var0];
        var0 = var6.bind(var3)(var0);
        var1 = var0.ActionSheet;
        var0 = {};
        var7 = _closure1_slot13;
        var4 = 9;
        var4 = var9[var4];
        var4 = var6.bind(var3)(var4);
        var5 = var4.BottomSheetTitleHeader;
        var4 = {};
        var11 = 10;
        var12 = var9[var11];
        var12 = var6.bind(var3)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var9[var11];
        var11 = var6.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11.vKYZzc;
        var11 = var12.bind(var13)(var11);
        var4.title = var11;
        var5 = var7.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = 11;
        var5 = var9[var5];
        var5 = var6.bind(var3)(var5);
        var5 = var5.ActionSheetRow;
        var6 = var5.Group;
        var5 = {};
        var9 = false;
        var5.hasIcons = var9;
        var9 = var10.map;
        var8 = function(arg0) { // Environment: var8
            var0 = arg0;
            var _closure3_slot0 = var0;
            var4 = _closure1_slot13;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.ActionSheetRow;
            var1 = {};
            var6 = var0.label;
            var1.label = var6;
            var5 = function() {
                var2 = _closure1_slot8;
                var0 = _closure3_slot0;
                var1 = var0.value;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var1 = _closure2_slot0;
                var1 = var1.bind(var0)();
                return var0;
            };
            var1.onPress = var5;
            var0 = var0.value;
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var8 = var9.bind(var10)(var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot16 = var1;
    var1 = function arg0() {
        _fun79387: for (var _fun79387_ip = 0;;) switch (_fun79387_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guild;
                var _closure2_slot0 = var1;
                var0 = var0.analyticsData;
                var _closure2_slot1 = var0;
                var3 = undefined;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var0 = _closure1_slot15;
                var24 = var0.bind(var3)();
                var0 = _closure1_slot9;
                var2 = var0.bind(var3)();
                var0 = var2.time;
                var _closure2_slot2 = var0;
                var20 = var2.pauseInvites;
                var _closure2_slot3 = var20;
                var19 = var2.pauseDms;
                var _closure2_slot4 = var19;
                var16 = var2.hasTimeChanges;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 12;
                var2 = var6[var2];
                var8 = var4.bind(var3)(var2);
                var7 = var8.useStateFromStores;
                var2 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var21
                    var2 = _closure1_slot4;
                    var1 = var2.getGuildIncident;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var7.bind(var8)(var5, var2);
                var2 = 13;
                var7 = var6[var2];
                var8 = var4.bind(var3)(var7);
                var7 = var8.hasInvitesDisabled;
                var15 = var7.bind(var8)(var5);
                var _closure2_slot5 = var15;
                var2 = var6[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.hasDMsDisabled;
                var18 = var2.bind(var4)(var5);
                var _closure2_slot6 = var18;
                var13 = null;
                var2 = var13 == var1;
                var12 = undefined;
                if (var2) {
                    _fun79387_ip = 227;
                    continue _fun79387
                }
            case 201:
                var4 = var1.features;
                var2 = var4.has;
                var1 = _closure1_slot12;
                var1 = var1.INVITES_DISABLED;
                var12 = var2.bind(var4)(var1);
            case 227:
                var4 = _closure1_slot3;
                var5 = var4.useEffect;
                var2 = new Array(2);
                var2[0] = var18;
                var2[1] = var15;
                var1 = function() { // Environment: var21
                    var4 = _closure1_slot7;
                    var3 = _closure2_slot5;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var3);
                    var2 = _closure1_slot6;
                    var1 = _closure2_slot6;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = var5.bind(var4)(var1, var2);
                var2 = var4.useMemo;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var21
                    _fun79390: for (var _fun79390_ip = 0;;) switch (_fun79390_ip) {
                        case 0:
                            var1 = _closure1_slot10;
                            var0 = undefined;
                            var3 = var1.bind(var0)();
                            var2 = var3.find;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var1 = var0.value;
                                var0 = _closure2_slot2;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            var2 = null;
                            var2 = var2 == var1;
                            if (var2) {
                                _fun79390_ip = 46;
                                continue _fun79390
                            }
                        case 41:
                            var0 = var1.label;
                        case 46:
                            return var0;
                    }
                };
                var8 = var2.bind(var4)(var0, var1);
                var0 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.showActionSheet;
                    var1 = {};
                    var6 = _closure1_slot13;
                    var5 = _closure1_slot17;
                    var4 = {};
                    var8 = _closure2_slot0;
                    var4.guild = var8;
                    var7 = _closure2_slot1;
                    var4.analyticsData = var7;
                    var4 = var6.bind(var0)(var5, var4);
                    var1.content = var4;
                    var4 = 'GuildIncidentActionsActionSheet';
                    var1.key = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                _closure2_slot7 = var0;
                var14 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 14;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.hideActionSheet;
                    var2 = 'GuildIncidentActionsActionSheet';
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure1_slot5;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                _closure2_slot8 = var14;
                var2 = _closure1_slot14;
                var11 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 8;
                var0 = var9[var0];
                var0 = var11.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var7 = true;
                var0.startExpanded = var7;
                var6 = _closure1_slot13;
                var4 = 9;
                var4 = var9[var4];
                var4 = var11.bind(var3)(var4);
                var5 = var4.BottomSheetTitleHeader;
                var4 = {};
                var17 = 10;
                var22 = var9[var17];
                var22 = var11.bind(var3)(var22);
                var25 = var22.intl;
                var23 = var25.string;
                var22 = var9[var17];
                var22 = var11.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.oCYAc7;
                var22 = var23.bind(var25)(var22);
                var4.title = var22;
                var23 = _closure1_slot1;
                var25 = 15;
                var22 = var9[var25];
                var23 = var23.bind(var3)(var22);
                var22 = {};
                var25 = var9[var25];
                var25 = var11.bind(var3)(var25);
                var25 = var25.BetaSizes;
                var25 = var25.SMALL;
                var22.size = var25;
                var24 = var24.beta;
                var22.style = var24;
                var22 = var6.bind(var3)(var23, var22);
                var4.leading = var22;
                var4 = var6.bind(var3)(var5, var4);
                var0.header = var4;
                var25 = 16;
                var4 = var9[var25];
                var4 = var11.bind(var3)(var4);
                var5 = var4.TableRow;
                var4 = {
                    'trailing': null,
                    'label': null,
                    'arrow': true,
                    'onPress': null,
                    'start': true,
                    'end': true
                };
                var9 = var9[var25];
                var9 = var11.bind(var3)(var9);
                var9 = var9.TableRow;
                var11 = var9.TrailingText;
                var9 = {};
                var22 = var13 != var8;
                var13 = '';
                if (!var22) {
                    _fun79387_ip = 568;
                    continue _fun79387
                }
            case 565:
                var13 = var8;
            case 568:
                var9.text = var13;
                var9 = var6.bind(var3)(var11, var9);
                var4.trailing = var9;
                var27 = _closure1_slot0;
                var23 = _closure1_slot2;
                var9 = var23[var17];
                var9 = var27.bind(var3)(var9);
                var13 = var9.intl;
                var11 = var13.string;
                var9 = var23[var17];
                var9 = var27.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.vKYZzc;
                var9 = var11.bind(var13)(var9);
                var4.label = var9;
                var9 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.showActionSheet;
                    var1 = {};
                    var6 = _closure1_slot13;
                    var5 = _closure1_slot16;
                    var4 = {};
                    var7 = _closure2_slot7;
                    var4.onClose = var7;
                    var4 = var6.bind(var0)(var5, var4);
                    var1.content = var4;
                    var4 = 'DurationSelectionActionSheet';
                    var1.key = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var4.onPress = var9;
                var9 = var23[var17];
                var9 = var27.bind(var3)(var9);
                var13 = var9.intl;
                var11 = var13.string;
                var9 = var23[var17];
                var9 = var27.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.vKYZzc;
                var9 = var11.bind(var13)(var9);
                var4.accessibilityLabel = var9;
                var4.accessibilityHint = var8;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(4);
                var4[0] = var5;
                var9 = _closure1_slot14;
                var5 = 17;
                var5 = var23[var5];
                var5 = var27.bind(var3)(var5);
                var8 = var5.TableRowGroup;
                var6 = {};
                var5 = false;
                var6.hasIcons = var5;
                var22 = _closure1_slot13;
                var5 = 18;
                var11 = var23[var5];
                var11 = var27.bind(var3)(var11);
                var13 = var11.TableSwitchRow;
                var11 = {};
                var24 = var23[var17];
                var24 = var27.bind(var3)(var24);
                var28 = var24.intl;
                var26 = var28.string;
                var24 = var23[var17];
                var24 = var27.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24.Uwsjn6;
                var24 = var26.bind(var28)(var24);
                var11.label = var24;
                var24 = var23[var17];
                var24 = var27.bind(var3)(var24);
                var26 = var24.intl;
                var24 = var26.string;
                var23 = var23[var17];
                var23 = var27.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.qPJkZh;
                var23 = var24.bind(var26)(var23);
                var11.subLabel = var23;
                var23 = var20;
                if (var23) {
                    _fun79387_ip = 885;
                    continue _fun79387
                }
            case 882:
                var23 = var12;
            case 885:
                var11.value = var23;
                var23 = function() {
                    var2 = _closure1_slot7;
                    var0 = _closure2_slot3;
                    var1 = !var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var11.onValueChange = var23;
                var11.disabled = var12;
                var13 = var22.bind(var3)(var13, var11);
                var11 = new Array(2);
                var11[0] = var13;
                if (!var12) {
                    _fun79387_ip = 1093;
                    continue _fun79387
                }
            case 925:
                var23 = _closure1_slot13;
                var27 = _closure1_slot0;
                var24 = _closure1_slot2;
                var13 = var24[var25];
                var13 = var27.bind(var3)(var13);
                var22 = var13.TableRow;
                var13 = {};
                var25 = var24[var25];
                var25 = var27.bind(var3)(var25);
                var25 = var25.TableRow;
                var26 = var25.Icon;
                var25 = {};
                var29 = _closure1_slot1;
                var28 = 19;
                var28 = var24[var28];
                var28 = var29.bind(var3)(var28);
                var25.source = var28;
                var28 = 20;
                var28 = var24[var28];
                var28 = var27.bind(var3)(var28);
                var28 = var28.WarningIcon;
                var25.IconComponent = var28;
                var28 = 'secondary';
                var25.variant = var28;
                var25 = var23.bind(var3)(var26, var25);
                var13.icon = var25;
                var25 = var24[var17];
                var25 = var27.bind(var3)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var24 = var24[var17];
                var24 = var27.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24["9GPbsV"];
                var24 = var25.bind(var26)(var24);
                var13.label = var24;
                var12 = var23.bind(var3)(var22, var13);
            case 1093:
                var11[1] = var12;
                var6.children = var11;
                var6 = var9.bind(var3)(var8, var6);
                var4[1] = var6;
                var13 = _closure1_slot13;
                var23 = _closure1_slot0;
                var12 = _closure1_slot2;
                var5 = var12[var5];
                var5 = var23.bind(var3)(var5);
                var6 = var5.TableSwitchRow;
                var5 = {};
                var8 = var12[var17];
                var8 = var23.bind(var3)(var8);
                var11 = var8.intl;
                var9 = var11.string;
                var8 = var12[var17];
                var8 = var23.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["wrDmA/"];
                var8 = var9.bind(var11)(var8);
                var5.label = var8;
                var8 = var12[var17];
                var8 = var23.bind(var3)(var8);
                var11 = var8.intl;
                var9 = var11.string;
                var8 = var12[var17];
                var8 = var23.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.UQbJW7;
                var8 = var9.bind(var11)(var8);
                var5.subLabel = var8;
                var5.value = var19;
                var8 = function() {
                    var2 = _closure1_slot6;
                    var0 = _closure2_slot4;
                    var1 = !var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var5.onValueChange = var8;
                var5.start = var7;
                var5.end = var7;
                var5 = var13.bind(var3)(var6, var5);
                var4[2] = var5;
                var7 = _closure1_slot14;
                var5 = 21;
                var5 = var12[var5];
                var5 = var23.bind(var3)(var5);
                var6 = var5.ButtonGroup;
                var5 = {};
                var9 = 22;
                var8 = var12[var9];
                var8 = var23.bind(var3)(var8);
                var11 = var8.Button;
                var8 = {};
                var21 = function() {
                    _fun79397: for (var _fun79397_ip = 0;;) switch (_fun79397_ip) {
                        case 0:
                            var9 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var0 = 23;
                            var1 = var12[var0];
                            var0 = undefined;
                            var3 = var9.bind(var0)(var1);
                            var2 = var3.setGuildIncidentActions;
                            var15 = _closure2_slot0;
                            var19 = var15.id;
                            var11 = _closure2_slot3;
                            var10 = _closure2_slot4;
                            var8 = _closure2_slot2;
                            var20 = var3;
                            var18 = var11;
                            var17 = var10;
                            var16 = var8;
                            var1 = var20[var2](var19, var18, var17, var16, var15);
                            var1 = _closure2_slot8;
                            var1 = var1.bind(var0)();
                            var1 = _closure2_slot1;
                            var14 = var1.source;
                            var6 = var1.alertType;
                            var13 = var1.messageId;
                            var2 = _closure1_slot1;
                            var1 = 24;
                            var1 = var12[var1];
                            var5 = var2.bind(var0)(var1);
                            var3 = var5.track;
                            var1 = _closure1_slot11;
                            var2 = var1.GUILD_RAID_INTERVENTION_STATE_CHANGE;
                            var1 = {};
                            var15 = var15.id;
                            var1.guild_id = var15;
                            var1.source = var14;
                            var1.raid_alert_id = var13;
                            var1.raid_alert_type = var6;
                            var6 = 13;
                            var13 = var12[var6];
                            var14 = var9.bind(var0)(var13);
                            var13 = var14.getEnabledInterventions;
                            var13 = var13.bind(var14)(var11, var10);
                            var1.intervention_type_enabled = var13;
                            var6 = var12[var6];
                            var9 = var9.bind(var0)(var6);
                            var6 = var9.getDisabledInterventions;
                            var6 = var6.bind(var9)(var11, var10);
                            var1.intervention_type_disabled = var6;
                            var6 = 60;
                            var6 = var6 * var8;
                            var1.duration = var6;
                            var1 = var3.bind(var5)(var2, var1);
                            var1 = _closure2_slot5;
                            var1 = !var1;
                            if (!var1) {
                                _fun79397_ip = 248;
                                continue _fun79397
                            }
                        case 241:
                            var2 = _closure2_slot6;
                            var1 = !var2;
                        case 248:
                            if (var1) {
                                _fun79397_ip = 255;
                                continue _fun79397
                            }
                        case 251:
                            var1 = _closure2_slot3;
                        case 255:
                            if (var1) {
                                _fun79397_ip = 262;
                                continue _fun79397
                            }
                        case 258:
                            var1 = _closure2_slot4;
                        case 262:
                            if (var1) {
                                _fun79397_ip = 353;
                                continue _fun79397
                            }
                        case 265:
                            var2 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var1 = 14;
                            var1 = var8[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.showActionSheet;
                            var1 = {};
                            var6 = _closure1_slot13;
                            var5 = _closure1_slot1;
                            var4 = 25;
                            var4 = var8[var4];
                            var5 = var5.bind(var0)(var4);
                            var4 = {};
                            var7 = _closure2_slot0;
                            var7 = var7.id;
                            var4.guildId = var7;
                            var4 = var6.bind(var0)(var5, var4);
                            var1.content = var4;
                            var4 = 'GuildRaidLockdownFeedbackActionSheet';
                            var1.key = var4;
                            var1 = var2.bind(var3)(var1);
                        case 353:
                            return var0;
                    }
                };
                var8.onPress = var21;
                var21 = var12[var17];
                var21 = var23.bind(var3)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var12 = var12[var17];
                var12 = var23.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12["R3BPH+"];
                var12 = var21.bind(var22)(var12);
                var8.text = var12;
                var12 = 'primary';
                var8.variant = var12;
                var12 = 'md';
                var8.size = var12;
                var15 = var20 !== var15;
                if (var15) {
                    _fun79387_ip = 1405;
                    continue _fun79387
                }
            case 1401:
                var15 = var19 !== var18;
            case 1405:
                if (var15) {
                    _fun79387_ip = 1411;
                    continue _fun79387
                }
            case 1408:
                var15 = var16;
            case 1411:
                var15 = !var15;
                var8.disabled = var15;
                var11 = var13.bind(var3)(var11, var8);
                var8 = new Array(2);
                var8[0] = var11;
                var11 = _closure1_slot13;
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = var13[var9];
                var9 = var16.bind(var3)(var9);
                var10 = var9.Button;
                var9 = {};
                var9.onPress = var14;
                var14 = var13[var17];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var13[var17];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["ETE/oC"];
                var13 = var14.bind(var15)(var13);
                var9.text = var13;
                var13 = 'secondary';
                var9.variant = var13;
                var9.size = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[3] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot17 = var1;
    var3 = 26;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_antiraid/native/GuildIncidentActionsActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8730, 10099, 6730, 660, 33, 1297, 671, 5208, 5211, 1234, 7732, 632, 6729, 3278, 5364, 4898, 5363, 5416, 7512, 6444, 6443, 4084, 10100, 795, 10101, 2]);