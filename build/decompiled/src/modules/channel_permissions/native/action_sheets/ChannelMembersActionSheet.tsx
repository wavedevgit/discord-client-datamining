// modules/channel_permissions/native/action_sheets/ChannelMembersActionSheet.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ChannelSettingsSections;
    var _closure1_slot9 = var6;
    var3 = var3.Permissions;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'paddingHorizontal': 16,
        'flex': 1
    };
    var3.container = var8;
    var8 = {};
    var9 = 10;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_12;
    var8.paddingVertical = var9;
    var3.sectionRowWrapper = var8;
    var8 = {
        'margin': 16,
        'marginBottom': 0
    };
    var3.warning = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_permissions/native/action_sheets/ChannelMembersActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun90848: for (var _fun90848_ip = 0;;) switch (_fun90848_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channelId;
                var _closure2_slot0 = var1;
                var0 = var0.guildId;
                var _closure2_slot1 = var0;
                var4 = undefined;
                var _closure2_slot5 = var4;
                var0 = _closure1_slot13;
                var10 = var0.bind(var4)();
                var _closure2_slot2 = var10;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 11;
                var0 = var2[var0];
                var0 = var1.bind(var4)(var0);
                var16 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var0 = 12;
                var3 = var2[var0];
                var7 = var1.bind(var4)(var3);
                var6 = var7.useStateFromStores;
                var3 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var13
                    var2 = _closure1_slot4;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var6.bind(var7)(var5, var3);
                var _closure2_slot3 = var7;
                var3 = var2[var0];
                var9 = var1.bind(var4)(var3);
                var8 = var9.useStateFromStoresObject;
                var3 = _closure1_slot7;
                var6 = new Array(2);
                var6[0] = var3;
                var3 = _closure1_slot6;
                var6[1] = var3;
                var5 = new Array(1);
                var5[0] = var7;
                var3 = function() { // Environment: var13
                    _fun90850: for (var _fun90850_ip = 0;;) switch (_fun90850_ip) {
                        case 0:
                            var5 = _closure1_slot7;
                            var2 = var5.getGuild;
                            var0 = _closure2_slot3;
                            var4 = null;
                            var7 = var4 == var0;
                            var0 = undefined;
                            if (var7) {
                                _fun90850_ip = 44;
                                continue _fun90850
                            }
                        case 30:
                            var7 = _closure2_slot3;
                            var6 = var7.getGuildId;
                            var0 = var6.bind(var7)();
                        case 44:
                            var2 = var2.bind(var5)(var0);
                            var0 = {};
                            var0.guild = var2;
                            var4 = var4 != var2;
                            var1 = undefined;
                            if (!var4) {
                                _fun90850_ip = 84;
                                continue _fun90850
                            }
                        case 64:
                            var4 = _closure1_slot6;
                            var3 = var4.getSortedRoles;
                            var2 = var2.id;
                            var1 = var3.bind(var4)(var2);
                        case 84:
                            var0.sortedGuildRoles = var1;
                            return var0;
                    }
                };
                var3 = var8.bind(var9)(var6, var3, var5);
                var11 = var3.guild;
                var12 = var3.sortedGuildRoles;
                var0 = var2[var0];
                var8 = var1.bind(var4)(var0);
                var6 = var8.useStateFromStoresArray;
                var0 = _closure1_slot5;
                var5 = new Array(1);
                var5[0] = var0;
                var3 = new Array(1);
                var3[0] = var7;
                var0 = function() { // Environment: var13
                    _fun90851: for (var _fun90851_ip = 0;;) switch (_fun90851_ip) {
                        case 0:
                            var2 = _closure1_slot5;
                            var1 = var2.getMemberIds;
                            var4 = _closure2_slot3;
                            var0 = null;
                            var4 = var0 == var4;
                            var0 = undefined;
                            if (var4) {
                                _fun90851_ip = 45;
                                continue _fun90851
                            }
                        case 31:
                            var4 = _closure2_slot3;
                            var3 = var4.getGuildId;
                            var0 = var3.bind(var4)();
                        case 45:
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var6 = var6.bind(var8)(var5, var0, var3);
                var0 = 13;
                var0 = var2[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.useNavigation;
                var0 = var0.bind(var1)();
                var _closure2_slot4 = var0;
                var0 = null;
                if (!(var0 != var7)) {
                    _fun90848_ip = 1277;
                    continue _fun90848
                }
            case 270:
                if (!(var0 != var11)) {
                    _fun90848_ip = 1277;
                    continue _fun90848
                }
            case 277:
                if (!(var0 != var12)) {
                    _fun90848_ip = 1277;
                    continue _fun90848
                }
            case 284:
                var3 = _closure1_slot8;
                var2 = var3.can;
                var1 = _closure1_slot10;
                var1 = var1.MANAGE_ROLES;
                var8 = var2.bind(var3)(var1, var7);
                _closure2_slot5 = var8;
                var18 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 14;
                var2 = var9[var1];
                var5 = var18.bind(var4)(var2);
                var3 = var5.getExistingRolesRows;
                var23 = var7.accessPermissions;
                var27 = var5;
                var26 = var11;
                var25 = var12;
                var24 = var7;
                var5 = var27[var3](var26, var25, var24, var23, var22);
                var1 = var9[var1];
                var3 = var18.bind(var4)(var1);
                var2 = var3.getExistingMembersRows;
                var23 = var7.accessPermissions;
                var27 = var3;
                var26 = var6;
                var25 = var7;
                var24 = var11;
                var3 = var27[var2](var26, var25, var24, var23, var22);
                var12 = new Array(0);
                var2 = var12.push;
                var1 = {};
                var14 = 15;
                var6 = var9[var14];
                var6 = var18.bind(var4)(var6);
                var17 = var6.intl;
                var11 = var17.string;
                var6 = var9[var14];
                var6 = var18.bind(var4)(var6);
                var6 = var6.t;
                var6 = var6["LPJmL/"];
                var6 = var11.bind(var17)(var6);
                var1.title = var6;
                var1.data = var5;
                var1 = var2.bind(var12)(var1);
                var2 = var12.push;
                var1 = {};
                var5 = var9[var14];
                var5 = var18.bind(var4)(var5);
                var11 = var5.intl;
                var6 = var11.string;
                var5 = var9[var14];
                var5 = var18.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5["9Oq93m"];
                var5 = var6.bind(var11)(var5);
                var1.title = var5;
                var1.data = var3;
                var1 = var2.bind(var12)(var1);
                var3 = _closure1_slot11;
                var1 = 16;
                var1 = var9[var1];
                var1 = var18.bind(var4)(var1);
                var2 = var1.BottomSheet;
                var1 = {
                    'scrollable': true,
                    'header': null,
                    'startExpanded': true
                };
                var5 = 17;
                var5 = var9[var5];
                var5 = var18.bind(var4)(var5);
                var6 = var5.BottomSheetTitleHeader;
                var5 = {};
                var11 = var9[var14];
                var11 = var18.bind(var4)(var11);
                var17 = var11.intl;
                var11 = var17.string;
                var9 = var9[var14];
                var9 = var18.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.ES4CC6;
                var9 = var11.bind(var17)(var9);
                var5.title = var9;
                var11 = var7.name;
                var7 = global;
                var7 = var7.HermesInternal;
                var9 = var7.concat;
                var7 = '#';
                var7 = var9.bind(var7)(var11);
                var5.subtitle = var7;
                var7 = var8;
                if (!var7) {
                    _fun90848_ip = 814;
                    continue _fun90848
                }
            case 679:
                var17 = _closure1_slot11;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var9 = 18;
                var9 = var20[var9];
                var9 = var19.bind(var4)(var9);
                var11 = var9.PressableOpacity;
                var9 = {};
                var18 = function() {
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 19;
                    var2 = var5[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var2 = var4.hideActionSheet;
                    var2 = var2.bind(var4)();
                    var2 = 20;
                    var2 = var5[var2];
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.init;
                    var6 = _closure2_slot0;
                    var3 = var3.bind(var4)(var6);
                    var4 = _closure1_slot0;
                    var3 = 21;
                    var3 = var5[var3];
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.navigateToChannelDetailsScreen;
                    var10 = _closure2_slot4;
                    var1 = _closure1_slot9;
                    var9 = var1.PERMISSIONS;
                    var7 = 'channel-members-action-sheet';
                    var11 = var5;
                    var8 = var6;
                    var1 = var11[var4](var10, var9, var8, var7, var6);
                    return var0;
                };
                var9.onPress = var18;
                var18 = 'button';
                var9.accessibilityRole = var18;
                var18 = var20[var14];
                var18 = var19.bind(var4)(var18);
                var22 = var18.intl;
                var21 = var22.string;
                var18 = var20[var14];
                var18 = var19.bind(var4)(var18);
                var18 = var18.t;
                var18 = var18.XPDhcc;
                var18 = var21.bind(var22)(var18);
                var9.accessibilityLabel = var18;
                var18 = 22;
                var18 = var20[var18];
                var18 = var19.bind(var4)(var18);
                var19 = var18.SettingsIcon;
                var18 = {};
                var18 = var17.bind(var4)(var19, var18);
                var9.children = var18;
                var7 = var17.bind(var4)(var11, var9);
            case 814:
                var5.trailing = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.header = var5;
                var7 = _closure1_slot12;
                var6 = _closure1_slot3;
                var5 = {};
                var9 = var10.container;
                var5.style = var9;
                var11 = _closure1_slot11;
                if (var8) {
                    _fun90848_ip = 999;
                    continue _fun90848
                }
            case 860:
                var9 = _closure1_slot3;
                var8 = {};
                var10 = var10.warning;
                var8.style = var10;
                var17 = _closure1_slot1;
                var18 = _closure1_slot2;
                var19 = 26;
                var10 = var18[var19];
                var17 = var17.bind(var4)(var10);
                var10 = {};
                var21 = _closure1_slot0;
                var19 = var18[var19];
                var19 = var21.bind(var4)(var19);
                var19 = var19.HelpMessageTypes;
                var19 = var19.INFO;
                var10.messageType = var19;
                var19 = var18[var14];
                var19 = var21.bind(var4)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var18 = var18[var14];
                var18 = var21.bind(var4)(var18);
                var18 = var18.t;
                var18 = var18.VOuiSj;
                var18 = var19.bind(var20)(var18);
                var10.children = var18;
                var10 = var11.bind(var4)(var17, var10);
                var8.children = var10;
                var9 = var11.bind(var4)(var9, var8);
                _fun90848_ip = 1122;
                continue _fun90848;
            case 999:
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var8 = 23;
                var8 = var18[var8];
                var8 = var17.bind(var4)(var8);
                var10 = var8.RowButton;
                var8 = {};
                var19 = var18[var14];
                var19 = var17.bind(var4)(var19);
                var20 = var19.intl;
                var19 = var20.string;
                var14 = var18[var14];
                var14 = var17.bind(var4)(var14);
                var14 = var14.t;
                var14 = var14.dMJ3Y6;
                var14 = var19.bind(var20)(var14);
                var8.label = var14;
                var14 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 24;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.openAddMembersActionSheet;
                    var0 = _closure2_slot3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8.onPress = var14;
                var14 = 25;
                var14 = var18[var14];
                var14 = var17.bind(var4)(var14);
                var17 = var14.GroupPlusIcon;
                var14 = {};
                var14 = var11.bind(var4)(var17, var14);
                var8.icon = var14;
                var9 = var11.bind(var4)(var10, var8);
            case 1122:
                var8 = new Array(2);
                var8[0] = var9;
                var11 = _closure1_slot11;
                var10 = _closure1_slot0;
                var18 = _closure1_slot2;
                var9 = 27;
                var9 = var18[var9];
                var9 = var10.bind(var4)(var9);
                var10 = var9.BottomSheetSectionList;
                var9 = {};
                var14 = {};
                var16 = var16.bottom;
                var17 = _closure1_slot1;
                var15 = 10;
                var15 = var18[var15];
                var15 = var17.bind(var4)(var15);
                var15 = var15.spacing;
                var15 = var15.PX_16;
                var15 = var16 + var15;
                var14.paddingBottom = var15;
                var9.contentContainerStyle = var14;
                var14 = function arg0() {
                    var0 = arg0;
                    var5 = var0.item;
                    var6 = var0.index;
                    var4 = var0.section;
                    var3 = _closure1_slot11;
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 28;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var7 = 0;
                    var7 = var7 === var6;
                    var0.start = var7;
                    var4 = var4.data;
                    var7 = var4.length;
                    var4 = 1;
                    var4 = var7 - var4;
                    var4 = var6 === var4;
                    var0.end = var4;
                    var6 = _closure2_slot1;
                    var0.guildId = var6;
                    var0.item = var5;
                    var5 = _closure2_slot0;
                    var0.channelId = var5;
                    var5 = true;
                    var0.showType = var5;
                    var4 = _closure2_slot5;
                    var0.showRemove = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var9.renderItem = var14;
                var13 = function arg0() {
                    var0 = arg0;
                    var0 = var0.section;
                    var8 = var0.title;
                    var9 = var0.data;
                    var3 = _closure1_slot11;
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var0 = 29;
                    var0 = var10[var0];
                    var2 = undefined;
                    var0 = var5.bind(var2)(var0);
                    var1 = var0.Text;
                    var0 = {
                        'style': null,
                        'maxFontSizeMultiplier': 2,
                        'accessibilityRole': 'header',
                        'variant': 'text-sm/semibold',
                        'color': 'interactive-text-default'
                    };
                    var4 = _closure2_slot2;
                    var4 = var4.sectionRowWrapper;
                    var0.style = var4;
                    var4 = 15;
                    var6 = var10[var4];
                    var6 = var5.bind(var2)(var6);
                    var7 = var6.intl;
                    var6 = var7.format;
                    var4 = var10[var4];
                    var4 = var5.bind(var2)(var4);
                    var4 = var4.t;
                    var5 = var4.u8CWLl;
                    var4 = {};
                    var9 = var9.length;
                    var4.numberOfItems = var9;
                    var4.sectionTitle = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var9.renderSectionHeader = var13;
                var9.sections = var12;
                var12 = false;
                var9.stickySectionHeadersEnabled = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1277:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 1681, 1674, 1410, 3091, 660, 33, 1297, 671, 1568, 566, 1469, 8155, 1234, 4933, 5213, 4904, 3278, 6485, 11811, 5373, 5384, 11809, 8668, 6462, 4935, 8160, 3941, 2]);