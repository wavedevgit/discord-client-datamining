// modules/guild_antiraid/native/GuildAntiRaidReportModal.tsx
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
        var0 = arg0;
        var1 = var0.raidTypes;
        var _closure2_slot0 = var1;
        var1 = var0.onChange;
        var _closure2_slot1 = var1;
        var11 = var0.onSubmit;
        var0 = _closure1_slot11;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var _closure2_slot2 = var9;
        var14 = _closure1_slot1;
        var16 = _closure1_slot2;
        var0 = 8;
        var0 = var16[var0];
        var0 = var14.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var17 = var0.bottom;
        var4 = _closure1_slot4;
        var2 = var4.useCallback;
        var1 = new Array(1);
        var1[0] = var9;
        var0 = function(arg0) { // Environment: var19
            var3 = _closure1_slot9;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 9;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.Text;
            var0 = {
                'style': null,
                'variant': 'text-md/semibold',
                'color': 'interactive-text-active'
            };
            var5 = _closure2_slot2;
            var5 = var5.formRow;
            var0.style = var5;
            var5 = _closure1_slot7;
            var4 = arg0;
            var4 = var5.bind(var2)(var4);
            var0.children = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var0 = var2.bind(var4)(var0, var1);
        var _closure2_slot3 = var0;
        var4 = _closure1_slot4;
        var2 = var4.useCallback;
        var1 = function() { // Environment: var19
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 10;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.openURL;
            var1 = _closure1_slot6;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = new Array(0);
        var20 = var2.bind(var4)(var1, var0);
        var2 = _closure1_slot10;
        var1 = _closure1_slot5;
        var0 = {};
        var4 = var9.container;
        var0.style = var4;
        var6 = _closure1_slot9;
        var15 = _closure1_slot0;
        var4 = 11;
        var4 = var16[var4];
        var4 = var15.bind(var3)(var4);
        var5 = var4.TextWithIOSLinkWorkaround;
        var4 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'text-default'
        };
        var7 = var9.headerSubtitle;
        var4.style = var7;
        var12 = 12;
        var7 = var16[var12];
        var7 = var15.bind(var3)(var7);
        var18 = var7.intl;
        var13 = var18.format;
        var7 = var16[var12];
        var7 = var15.bind(var3)(var7);
        var7 = var7.t;
        var10 = var7.Hg8Ee7;
        var7 = {};
        var7.onClick = var20;
        var7 = var13.bind(var18)(var10, var7);
        var4.children = var7;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(3);
        var4[0] = var5;
        var7 = _closure1_slot9;
        var6 = _closure1_slot5;
        var5 = {};
        var10 = var9.formBody;
        var5.style = var10;
        var18 = _closure1_slot9;
        var10 = 13;
        var10 = var16[var10];
        var10 = var15.bind(var3)(var10);
        var13 = var10.TableRowGroup;
        var10 = {};
        var21 = _closure1_slot8;
        var20 = var21.map;
        var19 = function(arg0, arg1) { // Environment: var19
            var4 = arg0;
            var7 = arg1;
            var _closure3_slot0 = var4;
            var3 = _closure1_slot9;
            var1 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 14;
            var0 = var2[var0];
            var2 = undefined;
            var0 = var1.bind(var2)(var0);
            var1 = var0.TableCheckboxRow;
            var0 = {};
            var8 = 0;
            var8 = var8 === var7;
            var0.start = var8;
            var6 = _closure1_slot8;
            var8 = var6.length;
            var6 = 1;
            var6 = var8 - var6;
            var6 = var7 === var6;
            var0.end = var6;
            var7 = _closure2_slot3;
            var7 = var7.bind(var2)(var4);
            var0.label = var7;
            var7 = _closure2_slot0;
            var6 = var7.includes;
            var6 = var6.bind(var7)(var4);
            var0.checked = var6;
            var5 = function() {
                var2 = _closure2_slot1;
                var1 = _closure3_slot0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var0.onPress = var5;
            var0 = var3.bind(var2)(var1, var0, var4);
            return var0;
        };
        var19 = var20.bind(var21)(var19);
        var10.children = var19;
        var10 = var18.bind(var3)(var13, var10);
        var5.children = var10;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var7 = _closure1_slot9;
        var6 = _closure1_slot5;
        var5 = {};
        var10 = var9.submitButtonContainer;
        var9 = new Array(2);
        var9[0] = var10;
        var10 = {};
        var13 = 16;
        var13 = var17 + var13;
        var10.paddingBottom = var13;
        var9[1] = var10;
        var5.style = var9;
        var10 = _closure1_slot9;
        var13 = 15;
        var8 = var16[var13];
        var9 = var14.bind(var3)(var8);
        var8 = {};
        var13 = var16[var13];
        var13 = var14.bind(var3)(var13);
        var13 = var13.Sizes;
        var13 = var13.MEDIUM;
        var8.size = var13;
        var13 = var16[var12];
        var13 = var15.bind(var3)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var16[var12];
        var12 = var15.bind(var3)(var12);
        var12 = var12.t;
        var12 = var12.geKm7t;
        var12 = var13.bind(var14)(var12);
        var8.text = var12;
        var8.onPress = var11;
        var8 = var10.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var11 = 0;
    var3 = var5[var11];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var12 = 2;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.COMMUNITY_PORTAL_SERVER_SAFETY_PAGE;
    var _closure1_slot6 = var6;
    var6 = var3.getReportRaidTypeLabel;
    var _closure1_slot7 = var6;
    var3 = var3.REPORT_RAID_OPTIONS;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var14 = var3.Fonts;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'paddingHorizontal': 16,
        'paddingVertical': 0,
        'backgroundColor': null,
        'flexDirection': 'column',
        'height': '100%',
        'paddingTop': 8
    };
    var9 = 7;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var13;
    var3.container = var8;
    var8 = {
        'flexDirection': 'row',
        'justifyContent': 'flex-end',
        'paddingVertical': 8
    };
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var13;
    var3.header = var8;
    var8 = {
        'fontSize': 24,
        'fontFamily': null,
        'textAlign': 'center',
        'color': null,
        'lineHeight': 30
    };
    var13 = 24;
    var14 = var14.PRIMARY_BOLD;
    var8.fontFamily = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.MOBILE_TEXT_HEADING_PRIMARY;
    var8.color = var14;
    var3.headerTitle = var8;
    var8 = {
        'textAlign': 'center',
        'marginTop': 8
    };
    var3.headerSubtitle = var8;
    var8 = {};
    var14 = 14;
    var8.marginVertical = var14;
    var3.closeButtonContainer = var8;
    var8 = {};
    var8.marginTop = var13;
    var3.formBody = var8;
    var8 = {};
    var8.paddingVertical = var12;
    var3.formRow = var8;
    var8 = {};
    var8.marginRight = var11;
    var3.radioIndicator = var8;
    var8 = {
        'position': 'absolute',
        'bottom': 0,
        'left': 0,
        'right': 0,
        'paddingHorizontal': 16,
        'paddingVertical': 16
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var9;
    var3.submitButtonContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_antiraid/native/GuildAntiRaidReportModal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var10 = var0.onCloseModal;
        var _closure2_slot0 = var10;
        var8 = var0.guildId;
        var _closure2_slot1 = var8;
        var4 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 8;
        var2 = var6[var2];
        var3 = undefined;
        var2 = var4.bind(var3)(var2);
        var2 = var2.bind(var3)();
        var4 = var2.top;
        var7 = _closure1_slot4;
        var5 = var7.useState;
        var2 = new Array(0);
        var7 = var5.bind(var7)(var2);
        var5 = _closure1_slot3;
        var2 = 2;
        var5 = var5.bind(var3)(var7, var2);
        var2 = 0;
        var9 = var5[var2];
        var _closure2_slot2 = var9;
        var2 = 1;
        var2 = var5[var2];
        var _closure2_slot3 = var2;
        var7 = _closure1_slot4;
        var5 = var7.useMemo;
        var2 = new Array(3);
        var2[0] = var10;
        var2[1] = var9;
        var2[2] = var8;
        var1 = function() { // Environment: var1
            var2 = {};
            var3 = _closure2_slot0;
            var2.onCloseModal = var3;
            var1 = _closure2_slot2;
            var2.raidTypes = var1;
            var1 = function arg0() {
                var0 = arg0;
                var _closure4_slot0 = var0;
                var2 = _closure2_slot3;
                var0 = undefined;
                var1 = function(arg0) { // Environment: var1
                    _fun96567: for (var _fun96567_ip = 0;;) switch (_fun96567_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = var3.includes;
                            var0 = _closure4_slot0;
                            var0 = var2.bind(var3)(var0);
                            if (var0) {
                                _fun96567_ip = 57;
                                continue _fun96567
                            }
                        case 23:
                            var0 = new Array(1);
                            var4 = 0;
                            var6 = var0;
                            var5 = var3;
                            var2 = arraySpread(var6, var5, var4);
                            var1 = _closure4_slot0;
                            var0[var2] = var1;
                            var1 = 1;
                            var1 = var2 + var1;
                            _fun96567_ip = 76;
                            continue _fun96567;
                        case 57:
                            var2 = var3.filter;
                            var1 = function(arg0) { // Environment: var1
                                var1 = _closure4_slot0;
                                var0 = arg0;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1);
                        case 76:
                            return var0;
                    }
                };
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var2.onChange = var1;
            var1 = function() {
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 17;
                var1 = var5[var2];
                var0 = undefined;
                var8 = var3.bind(var0)(var1);
                var7 = var8.trackReportRaidViewed;
                var4 = _closure2_slot1;
                var6 = _closure2_slot2;
                var6 = var7.bind(var8)(var4, var6);
                var2 = var5[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.handleReportRaid;
                var2 = var2.bind(var3)(var4);
                var1 = _closure2_slot0;
                var1 = var1.bind(var0)();
                return var0;
            };
            var2.onSubmit = var1;
            var1 = function arg0() {
                var0 = arg0;
                var5 = var0.onCloseModal;
                var2 = var0.raidTypes;
                var _closure4_slot0 = var2;
                var2 = var0.onChange;
                var _closure4_slot1 = var2;
                var0 = var0.onSubmit;
                var _closure4_slot2 = var0;
                var0 = {};
                var2 = {};
                var3 = true;
                var2.ignoreKeyboard = var3;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 12;
                var8 = var7[var3];
                var4 = undefined;
                var8 = var6.bind(var4)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var3 = var7[var3];
                var3 = var6.bind(var4)(var3);
                var3 = var3.t;
                var3 = var3.uYPGsS;
                var3 = var8.bind(var9)(var3);
                var2.title = var3;
                var3 = 16;
                var3 = var7[var3];
                var4 = var6.bind(var4)(var3);
                var3 = var4.getHeaderCloseButton;
                var3 = var3.bind(var4)(var5);
                var2.headerLeft = var3;
                var1 = function() {
                    var3 = _closure1_slot9;
                    var2 = _closure1_slot12;
                    var1 = {};
                    var4 = _closure4_slot0;
                    var1.raidTypes = var4;
                    var4 = _closure4_slot1;
                    var1.onChange = var4;
                    var0 = _closure4_slot2;
                    var1.onSubmit = var0;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var2.render = var1;
                var1 = 'REPORT_RAID';
                var0[var1] = var2;
                return var0;
            };
            var0 = undefined;
            var0 = var1.bind(var0)(var2);
            return var0;
        };
        var5 = var5.bind(var7)(var1, var2);
        var2 = _closure1_slot9;
        var1 = _closure1_slot0;
        var0 = 18;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Navigator;
        var0 = {};
        var0.screens = var5;
        var5 = 'REPORT_RAID';
        var0.initialRouteName = var5;
        var0.headerStatusBarHeight = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 12582, 660, 33, 1297, 671, 1568, 3941, 3144, 5332, 1234, 5363, 8788, 4873, 4705, 10103, 5786, 2]);