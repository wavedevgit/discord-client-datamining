// modules/guild_role_subscriptions/native/guild_settings/emojis/SelectEmojiRolesActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var14 = true;
    var3.value = var14;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var13.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var6 = var5[var11];
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
    var6 = var3.FORM_ROW_VERTICAL_PADDING;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var10 = var3.Fonts;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var7 = var3.jsxs;
    var _closure1_slot7 = var7;
    var3 = var3.Fragment;
    var _closure1_slot8 = var3;
    var3 = 22;
    var3 = var6 + var3;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var11;
    var9 = 7;
    var12 = var5[var9];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var8.backgroundColor = var12;
    var3.list = var8;
    var8 = {
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.label = var8;
    var8 = {};
    var8.flexShrink = var11;
    var11 = 8;
    var12 = var5[var11];
    var17 = var13.bind(var0)(var12);
    var16 = var10.PRIMARY_MEDIUM;
    var12 = var5[var9];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var15 = var12.INTERACTIVE_TEXT_ACTIVE;
    var12 = 16;
    var21 = var17.bind(var0)(var16, var15, var12);
    var22 = var8;
    var15 = copyDataProperties(var22, var21);
    var3.roleName = var8;
    var8 = {
        'borderRadius': null,
        'backgroundColor': null,
        'marginLeft': 8,
        'paddingHorizontal': 4,
        'height': 16
    };
    var15 = var5[var9];
    var15 = var13.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var8.borderRadius = var15;
    var15 = var5[var9];
    var15 = var13.bind(var0)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.RED_400;
    var8.backgroundColor = var15;
    var3.archivedBadge = var8;
    var8 = {};
    var15 = var5[var11];
    var18 = var13.bind(var0)(var15);
    var17 = var10.PRIMARY_BOLD;
    var15 = var5[var9];
    var15 = var13.bind(var0)(var15);
    var15 = var15.unsafe_rawColors;
    var21 = var15.WHITE;
    var15 = {};
    var15.uppercase = var14;
    var20 = 12;
    var23 = undefined;
    var22 = var17;
    var19 = var15;
    var21 = var23[var18](var22, var21, var20, var19, var18);
    var22 = var8;
    var14 = copyDataProperties(var22, var21);
    var3.archivedBadgeText = var8;
    var8 = {};
    var14 = var5[var9];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var8.backgroundColor = var14;
    var3.divider = var8;
    var8 = {};
    var11 = var5[var11];
    var11 = var13.bind(var0)(var11);
    var10 = var10.PRIMARY_SEMIBOLD;
    var9 = var5[var9];
    var9 = var13.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.CONTROL_BRAND_FOREGROUND;
    var21 = var11.bind(var0)(var10, var9, var12);
    var22 = var8;
    var9 = copyDataProperties(var22, var21);
    var3.saveButton = var8;
    var8 = {};
    var9 = 0.3;
    var8.opacity = var9;
    var3.saveButtonDisabled = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/guild_settings/emojis/SelectEmojiRolesActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun117012: for (var _fun117012_ip = 0;;) switch (_fun117012_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.guildId;
                var1 = var0.onSave;
                var _closure2_slot0 = var1;
                var13 = var0.emoji;
                var _closure2_slot1 = var13;
                var4 = var0.onCancel;
                var0 = _closure1_slot10;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var _closure2_slot2 = var9;
                var2 = _closure1_slot4;
                var1 = var2.useState;
                var0 = function() { // Environment: var6
                    _fun117013: for (var _fun117013_ip = 0;;) switch (_fun117013_ip) {
                        case 0:
                            var0 = global;
                            var2 = var0.Set;
                            var0 = _closure2_slot1;
                            var1 = null;
                            var4 = var1 == var0;
                            var0 = undefined;
                            if (var4) {
                                _fun117013_ip = 36;
                                continue _fun117013
                            }
                        case 26:
                            var3 = _closure2_slot1;
                            var0 = var3.roles;
                        case 36:
                            if (!(var1 == var0)) {
                                _fun117013_ip = 44;
                                continue _fun117013
                            }
                        case 40:
                            var0 = new Array(0);
                        case 44:
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var6 = var1;
                            var5 = var0;
                            var0 = new var6[var2](var5, var4);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                    }
                };
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var7 = var1.bind(var3)(var2, var0);
                var1 = 0;
                var0 = var7[var1];
                var _closure2_slot3 = var0;
                var2 = 1;
                var2 = var7[var2];
                var _closure2_slot4 = var2;
                var0 = var0.size;
                var15 = var0 > var1;
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 9;
                var0 = var12[var0];
                var2 = var11.bind(var3)(var0);
                var1 = var2.useSubscriptionListingsForGuild;
                var10 = true;
                var0 = {
                    'includeSoftDeleted': true,
                    'sortDeletedListingsLast': true
                };
                var7 = var1.bind(var2)(var5, var0);
                var _closure2_slot5 = var7;
                var2 = _closure1_slot6;
                var0 = 10;
                var0 = var12[var0];
                var0 = var11.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var5 = function() {
                    var2 = _closure2_slot0;
                    var1 = global;
                    var3 = var1.Array;
                    var1 = var3.from;
                    var0 = _closure2_slot3;
                    var1 = var1.bind(var3)(var0);
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onPress = var5;
                var14 = !var15;
                var0.disabled = var14;
                var5 = 'button';
                var0.accessibilityRole = var5;
                var5 = 11;
                var5 = var12[var5];
                var5 = var11.bind(var3)(var5);
                var11 = var5.LegacyText;
                var5 = {};
                var16 = var9.saveButton;
                var12 = new Array(2);
                var12[0] = var16;
                if (var15) {
                    _fun117012_ip = 262;
                    continue _fun117012
                }
            case 256:
                var14 = var9.saveButtonDisabled;
            case 262:
                var12[1] = var14;
                var5.style = var12;
                var12 = null;
                if (!(var12 != var13)) {
                    _fun117012_ip = 333;
                    continue _fun117012
                }
            case 276:
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 12;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12["R3BPH+"];
                var12 = var13.bind(var14)(var12);
                _fun117012_ip = 388;
                continue _fun117012;
            case 333:
                var16 = _closure1_slot0;
                var17 = _closure1_slot2;
                var13 = 12;
                var14 = var17[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["3UB9ad"];
                var12 = var14.bind(var15)(var13);
            case 388:
                var5.children = var12;
                var5 = var2.bind(var3)(var11, var5);
                var0.children = var5;
                var12 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 13;
                var0 = var11[var0];
                var0 = var1.bind(var3)(var0);
                var5 = var0.BottomSheetTitleHeader;
                var0 = {};
                var13 = 12;
                var14 = var11[var13];
                var14 = var1.bind(var3)(var14);
                var16 = var14.intl;
                var15 = var16.string;
                var14 = var11[var13];
                var14 = var1.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.JPU0EF;
                var14 = var15.bind(var16)(var14);
                var0.title = var14;
                var14 = var11[var13];
                var14 = var1.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var11[var13];
                var13 = var1.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.MZusPv;
                var13 = var14.bind(var15)(var13);
                var0.subtitle = var13;
                var0.trailing = var12;
                var5 = var2.bind(var3)(var5, var0);
                var0 = 14;
                var0 = var11[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {
                    'scrollable': true,
                    'header': null,
                    'startExpanded': true
                };
                var0.header = var5;
                var0.onDismiss = var4;
                var5 = _closure1_slot1;
                var4 = 15;
                var4 = var11[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.inActionSheet = var10;
                var9 = var9.list;
                var4.style = var9;
                var8 = _closure1_slot9;
                var4.itemSize = var8;
                var8 = var7.length;
                var7 = new Array(1);
                var7[0] = var8;
                var4.sections = var7;
                var6 = function arg0, arg1() {
                    _fun117015: for (var _fun117015_ip = 0;;) switch (_fun117015_ip) {
                        case 0:
                            var1 = arg1;
                            var0 = _closure2_slot5;
                            var14 = var0[var1];
                            var _closure3_slot0 = var14;
                            var2 = var0.length;
                            var0 = 1;
                            var0 = var2 - var0;
                            var7 = var1 === var0;
                            var3 = _closure1_slot7;
                            var2 = _closure1_slot8;
                            var1 = {};
                            var8 = _closure1_slot6;
                            var16 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var10 = 16;
                            var4 = var15[var10];
                            var0 = undefined;
                            var4 = var16.bind(var0)(var4);
                            var5 = var4.FormRow;
                            var4 = {};
                            var13 = _closure1_slot5;
                            var12 = {};
                            var17 = _closure2_slot2;
                            var18 = var17.label;
                            var12.style = var18;
                            var20 = 17;
                            var15 = var15[var20];
                            var15 = var16.bind(var0)(var15);
                            var16 = var15.Text;
                            var15 = {
                                'style': null,
                                'lineClamp': 1,
                                'variant': 'text-md/medium',
                                'color': 'interactive-text-active'
                            };
                            var17 = var17.roleName;
                            var15.style = var17;
                            var17 = var14.name;
                            var15.children = var17;
                            var16 = var8.bind(var0)(var16, var15);
                            var15 = new Array(2);
                            var15[0] = var16;
                            var16 = var14.archived;
                            if (!var16) {
                                _fun117015_ip = 321;
                                continue _fun117015
                            }
                        case 180:
                            var19 = _closure1_slot6;
                            var18 = _closure1_slot5;
                            var17 = {};
                            var22 = _closure2_slot2;
                            var21 = var22.archivedBadge;
                            var17.style = var21;
                            var25 = _closure1_slot0;
                            var26 = _closure1_slot2;
                            var20 = var26[var20];
                            var20 = var25.bind(var0)(var20);
                            var21 = var20.Text;
                            var20 = {
                                'style': null,
                                'variant': 'text-xs/bold',
                                'color': 'always-white'
                            };
                            var22 = var22.archivedBadgeText;
                            var20.style = var22;
                            var22 = 12;
                            var23 = var26[var22];
                            var23 = var25.bind(var0)(var23);
                            var24 = var23.intl;
                            var23 = var24.string;
                            var22 = var26[var22];
                            var22 = var25.bind(var0)(var22);
                            var22 = var22.t;
                            var22 = var22.HRtfn9;
                            var22 = var23.bind(var24)(var22);
                            var20.children = var22;
                            var20 = var19.bind(var0)(var21, var20);
                            var17.children = var20;
                            var16 = var19.bind(var0)(var18, var17);
                        case 321:
                            var15[1] = var16;
                            var12.children = var15;
                            var12 = var3.bind(var0)(var13, var12);
                            var4.label = var12;
                            var11 = function() {
                                var1 = _closure3_slot0;
                                var1 = var1.role_id;
                                var _closure4_slot0 = var1;
                                var2 = _closure2_slot4;
                                var1 = undefined;
                                var0 = function(arg0) { // Environment: var0
                                    _fun117017: for (var _fun117017_ip = 0;;) switch (_fun117017_ip) {
                                        case 0:
                                            var4 = arg0;
                                            var0 = global;
                                            var0 = var0.Set;
                                            var1 = var0.prototype;
                                            var1 = Object.create(var1, {
                                                constructor: {
                                                    value: var0
                                                }
                                            });
                                            var6 = var1;
                                            var5 = var4;
                                            var0 = new var6[var0](var5, var4);
                                            var0 = var0 instanceof Object ? var0 : var1;
                                            var3 = var4.has;
                                            var2 = _closure4_slot0;
                                            var2 = var3.bind(var4)(var2);
                                            if (var2) {
                                                _fun117017_ip = 70;
                                                continue _fun117017
                                            }
                                        case 54:
                                            var3 = var0.add;
                                            var2 = _closure4_slot0;
                                            var2 = var3.bind(var0)(var2);
                                            _fun117017_ip = 84;
                                            continue _fun117017;
                                        case 70:
                                            var2 = var0.delete;
                                            var1 = _closure4_slot0;
                                            var1 = var2.bind(var0)(var1);
                                        case 84:
                                            return var0;
                                    }
                                };
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var4.onPress = var11;
                            var13 = _closure1_slot6;
                            var12 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var11 = var11[var10];
                            var11 = var12.bind(var0)(var11);
                            var11 = var11.FormRow;
                            var12 = var11.Checkbox;
                            var11 = {};
                            var16 = _closure2_slot3;
                            var15 = var16.has;
                            var14 = var14.role_id;
                            var14 = var15.bind(var16)(var14);
                            var11.selected = var14;
                            var11 = var13.bind(var0)(var12, var11);
                            var4.trailing = var11;
                            var5 = var8.bind(var0)(var5, var4);
                            var4 = new Array(2);
                            var4[0] = var5;
                            var5 = !var7;
                            if (var7) {
                                _fun117015_ip = 490;
                                continue _fun117015
                            }
                        case 441:
                            var8 = _closure1_slot6;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var6 = var6[var10];
                            var6 = var7.bind(var0)(var6);
                            var7 = var6.FormDivider;
                            var6 = {};
                            var9 = _closure2_slot2;
                            var9 = var9.divider;
                            var6.style = var9;
                            var5 = var8.bind(var0)(var7, var6);
                        case 490:
                            var4[1] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var4.renderItem = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4874, 483, 33, 1297, 671, 4682, 10808, 4902, 4876, 1234, 5211, 5208, 6456, 5378, 3941, 2]);