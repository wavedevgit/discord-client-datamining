// modules/guild_settings/roles/native/GuildSettingsRoleEditDisplay.tsx
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
    var _closure1_slot3 = var3;
    var11 = 1;
    var3 = var5[var11];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Platform;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isEveryoneRole;
    var _closure1_slot5 = var3;
    var3 = 3;
    var6 = var5[var3];
    var6 = var10.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.RoleColorsStyle;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.STYLE_CONFIGS;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var9 = var3.Fonts;
    var6 = var3.DEFAULT_ROLE_COLOR;
    var _closure1_slot9 = var6;
    var3 = var3.MAX_ROLE_LENGTH;
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DEFAULT_GRADIENT_ROLE_COLORS;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TitleStyleType;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot13 = var6;
    var6 = var3.jsxs;
    var _closure1_slot14 = var6;
    var3 = var3.Fragment;
    var _closure1_slot15 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var12 = 16;
    var8.paddingVertical = var12;
    var3.input = var8;
    var13 = 'row';
    var12 = 'center';
    var8 = {
        'flexGrow': 1,
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center',
        'paddingRight': 8
    };
    var3.labelRow = var8;
    var8 = {
        'paddingTop': 2,
        'opacity': 0.5
    };
    var3.roleIcon = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var3.trailingColorContainer = var8;
    var8 = {
        'position': 'absolute',
        'top': '50%',
        'right': 8
    };
    var15 = {};
    var14 = -6;
    var15.translateY = var14;
    var14 = new Array(1);
    var14[0] = var15;
    var8.transform = var14;
    var3.ercRow = var8;
    var8 = {
        'marginHorizontal': 0,
        'marginVertical': 0,
        'marginRight': 8,
        'minWidth': 24,
        'height': 24,
        'borderRadius': 3
    };
    var3.colorBlock = var8;
    var8 = {};
    var14 = 'capitalize';
    var8.textTransform = var14;
    var3.iconFormLabel = var8;
    var8 = {};
    var9 = var9.PRIMARY_SEMIBOLD;
    var8.fontFamily = var9;
    var8.flex = var11;
    var9 = 10;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.RED_400;
    var8.color = var14;
    var3.deleteText = var8;
    var8 = {};
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_FEEDBACK_INFO;
    var8.backgroundColor = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var8.padding = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var8.marginHorizontal = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var15 = var14.PX_12;
    var14 = -1;
    var14 = var14 * var15;
    var8.marginTop = var14;
    var14 = var5[var9];
    var14 = var10.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var8.marginBottom = var14;
    var14 = 'flex';
    var8.display = var14;
    var8.flexDirection = var13;
    var13 = var5[var9];
    var13 = var10.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var8.gap = var13;
    var8.justifyContent = var12;
    var8.alignItems = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var8.borderRadius = var12;
    var8.borderWidth = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.ICON_FEEDBACK_INFO;
    var8.borderColor = var9;
    var3.holographicInfo = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot16 = var3;
    var3 = 34;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/roles/native/GuildSettingsRoleEditDisplay.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun115979: for (var _fun115979_ip = 0;;) switch (_fun115979_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.guild;
                var _closure2_slot0 = var1;
                var10 = var3.role;
                var _closure2_slot1 = var10;
                var33 = var3.name;
                var13 = var3.mentionable;
                var21 = var3.hoist;
                var32 = var3.onNameChanged;
                var12 = var3.onMentionableChanged;
                var20 = var3.onHoistChanged;
                var0 = var3.onRoleColorChanged;
                var _closure2_slot2 = var0;
                var2 = var3.locked;
                var30 = var3.autoFocusInput;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var4 = _closure1_slot16;
                var25 = var4.bind(var3)();
                var4 = _closure1_slot5;
                var16 = var4.bind(var3)(var10);
                var15 = var16;
                if (var16) {
                    _fun115979_ip = 128;
                    continue _fun115979
                }
            case 125:
                var15 = var2;
            case 128:
                var9 = var10.id;
                _closure2_slot3 = var9;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 11;
                var2 = var6[var2];
                var7 = var5.bind(var3)(var2);
                var4 = var7.useHasEnhancedRoleColorsForRole;
                var2 = var1.id;
                var4 = var4.bind(var7)(var2, var10);
                var2 = 12;
                var2 = var6[var2];
                var7 = var5.bind(var3)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var2;
                var2 = function() { // Environment: var35
                    var2 = _closure1_slot6;
                    var1 = var2.getRoleStyleData;
                    var0 = _closure2_slot1;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var6.bind(var7)(var5, var2);
                var5 = null;
                if (!(var5 != var2)) {
                    _fun115979_ip = 225;
                    continue _fun115979
                }
            case 222:
                if (var4) {
                    _fun115979_ip = 237;
                    continue _fun115979
                }
            case 225:
                var4 = _closure1_slot7;
                var8 = var4.SOLID;
                _fun115979_ip = 243;
                continue _fun115979;
            case 237:
                var8 = var2.currentStyle;
            case 243:
                _closure2_slot4 = var8;
                var7 = _closure1_slot8;
                var6 = var7.find;
                var4 = function(arg0) { // Environment: var35
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot4;
                    var0 = var1 === var0;
                    return var0;
                };
                var23 = var6.bind(var7)(var4);
                var4 = var5 == var2;
                var31 = undefined;
                if (var4) {
                    _fun115979_ip = 296;
                    continue _fun115979
                }
            case 277:
                var2 = var2.styleColors;
                var4 = var5 == var2;
                var31 = undefined;
                if (var4) {
                    _fun115979_ip = 296;
                    continue _fun115979
                }
            case 292:
                var31 = var2[var8];
            case 296:
                var2 = var5 == var31;
                var28 = undefined;
                if (var2) {
                    _fun115979_ip = 311;
                    continue _fun115979
                }
            case 305:
                var28 = var31.primary_color;
            case 311:
                if (!(var5 != var28)) {
                    _fun115979_ip = 321;
                    continue _fun115979
                }
            case 315:
                var2 = 0;
                if (!(var2 === var28)) {
                    _fun115979_ip = 325;
                    continue _fun115979
                }
            case 321:
                var28 = _closure1_slot9;
            case 325:
                _closure2_slot5 = var28;
                if (!(var5 != var31)) {
                    _fun115979_ip = 352;
                    continue _fun115979
                }
            case 333:
                var4 = var5 == var31;
                var2 = undefined;
                if (var4) {
                    _fun115979_ip = 348;
                    continue _fun115979
                }
            case 342:
                var2 = var31.secondary_color;
            case 348:
                if (!(var5 == var2)) {
                    _fun115979_ip = 356;
                    continue _fun115979
                }
            case 352:
                var31 = _closure1_slot11;
            case 356:
                _closure2_slot6 = var31;
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 13;
                var2 = var7[var2];
                var6 = var4.bind(var3)(var2);
                var2 = var6.canGuildUseRoleIcons;
                var6 = var2.bind(var6)(var1, var10);
                var2 = 14;
                var2 = var7[var2];
                var11 = var4.bind(var3)(var2);
                var4 = var11.useRoleIcon;
                var2 = {};
                var7 = var1.id;
                var2.guildId = var7;
                var7 = var10.id;
                var2.roleId = var7;
                var7 = 26;
                var2.size = var7;
                var24 = var4.bind(var11)(var2);
                if (!(var5 == var24)) {
                    _fun115979_ip = 524;
                    continue _fun115979
                }
            case 447:
                var11 = _closure1_slot13;
                var22 = _closure1_slot1;
                var19 = _closure1_slot2;
                var17 = 15;
                var2 = var19[var17];
                var4 = var22.bind(var3)(var2);
                var2 = {};
                var18 = 16;
                var18 = var19[var18];
                var18 = var22.bind(var3)(var18);
                var2.source = var18;
                var18 = _closure1_slot0;
                var17 = var19[var17];
                var17 = var18.bind(var3)(var17);
                var17 = var17.IconSizes;
                var17 = var17.MEDIUM;
                var2.size = var17;
                var24 = var11.bind(var3)(var4, var2);
            case 524:
                var4 = _closure1_slot3;
                var17 = var4.useCallback;
                var11 = new Array(5);
                var11[0] = var9;
                var11[1] = var31;
                var11[2] = var28;
                var11[3] = var8;
                var11[4] = var0;
                var2 = function() { // Environment: var35
                    _fun115982: for (var _fun115982_ip = 0;;) switch (_fun115982_ip) {
                        case 0:
                            var3 = _closure2_slot4;
                            var1 = _closure1_slot7;
                            var1 = var1.SOLID;
                            if (!(var3 !== var1)) {
                                _fun115982_ip = 146;
                                continue _fun115982
                            }
                        case 26:
                            var3 = _closure2_slot4;
                            var1 = _closure1_slot7;
                            var1 = var1.GRADIENT;
                            if (!(var3 === var1)) {
                                _fun115982_ip = 243;
                                continue _fun115982
                            }
                        case 47:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var3 = 17;
                            var3 = var1[var3];
                            var8 = undefined;
                            var7 = var4.bind(var8)(var3);
                            var6 = var7.openLazy;
                            var4 = _closure1_slot0;
                            var3 = 19;
                            var3 = var1[var3];
                            var4 = var4.bind(var8)(var3);
                            var3 = 21;
                            var3 = var1[var3];
                            var1 = var1.paths;
                            var4 = var4.bind(var8)(var3, var1);
                            var3 = {};
                            var1 = _closure2_slot6;
                            var3.colors = var1;
                            var1 = function arg0() {
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 20;
                                var1 = var1[var0];
                                var0 = undefined;
                                var6 = var3.bind(var0)(var1);
                                var5 = var6.updateRoleColors;
                                var4 = _closure2_slot3;
                                var2 = _closure1_slot7;
                                var3 = var2.GRADIENT;
                                var2 = arg0;
                                var2 = var5.bind(var6)(var4, var2, var3);
                                var1 = _closure2_slot2;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var3.onSelect = var1;
                            var1 = 'RoleColorPicker';
                            var1 = var6.bind(var7)(var4, var1, var3);
                            _fun115982_ip = 243;
                            continue _fun115982;
                        case 146:
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var3 = 17;
                            var3 = var1[var3];
                            var7 = undefined;
                            var4 = var4.bind(var7)(var3);
                            var3 = var4.openLazy;
                            var6 = _closure1_slot0;
                            var2 = 19;
                            var2 = var1[var2];
                            var6 = var6.bind(var7)(var2);
                            var2 = 18;
                            var2 = var1[var2];
                            var1 = var1.paths;
                            var2 = var6.bind(var7)(var2, var1);
                            var1 = {};
                            var5 = _closure2_slot5;
                            var1.color = var5;
                            var0 = function arg0() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 20;
                                var1 = var1[var0];
                                var0 = undefined;
                                var5 = var2.bind(var0)(var1);
                                var4 = var5.updateRoleColor;
                                var3 = _closure2_slot3;
                                var2 = arg0;
                                var2 = var4.bind(var5)(var3, var2);
                                var1 = _closure2_slot2;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var1.onSelect = var0;
                            var0 = 'RoleColorPicker';
                            var0 = var3.bind(var4)(var2, var0, var1);
                        case 243:
                            var0 = undefined;
                            return var0;
                    }
                };
                var34 = var17.bind(var4)(var2, var11);
                var2 = var4.useCallback;
                var11 = var1.id;
                var1 = new Array(5);
                var1[0] = var11;
                var1[1] = var10;
                var1[2] = var9;
                var1[3] = var8;
                var1[4] = var0;
                var0 = function() { // Environment: var35
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 17;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 19;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 22;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var6 = _closure2_slot0;
                    var6 = var6.id;
                    var2.guildId = var6;
                    var6 = _closure2_slot1;
                    var2.role = var6;
                    var1 = _closure2_slot4;
                    var2.roleStyle = var1;
                    var1 = function arg0() {
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 20;
                        var1 = var1[var0];
                        var0 = undefined;
                        var5 = var2.bind(var0)(var1);
                        var4 = var5.updateRoleStyles;
                        var3 = _closure2_slot3;
                        var2 = arg0;
                        var2 = var4.bind(var5)(var3, var2);
                        var1 = _closure2_slot2;
                        var1 = var1.bind(var0)();
                        return var0;
                    };
                    var2.onStyleChanged = var1;
                    var1 = 'EnhancedRoleColorsSelectStyleModal';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var27 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot14;
                var1 = _closure1_slot15;
                var0 = {};
                var19 = _closure1_slot13;
                var26 = _closure1_slot0;
                var22 = _closure1_slot2;
                var17 = 23;
                var4 = var22[var17];
                var4 = var26.bind(var3)(var4);
                var9 = var4.FormSection;
                var4 = {};
                var11 = _closure1_slot12;
                var11 = var11.ANDROID_NO_BORDER;
                var4.titleStyleType = var11;
                var18 = 24;
                var11 = var22[var18];
                var11 = var26.bind(var3)(var11);
                var36 = var11.intl;
                var29 = var36.string;
                var11 = var22[var18];
                var11 = var26.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.dLbkBk;
                var11 = var29.bind(var36)(var11);
                var4.title = var11;
                var11 = true;
                var4.thinTitle = var11;
                var11 = var22[var17];
                var11 = var26.bind(var3)(var11);
                var29 = var11.FormInput;
                var11 = {};
                var36 = var25.input;
                var11.style = var36;
                var11.value = var33;
                var11.disabled = var15;
                var11.onChange = var32;
                var32 = false;
                var11.showTopContainer = var32;
                var32 = _closure1_slot10;
                var11.maxLength = var32;
                var11.autoFocus = var30;
                var30 = 25;
                var30 = var22[var30];
                var30 = var26.bind(var3)(var30);
                var30 = var30.ClearButtonVisibility;
                var30 = var30.ALWAYS;
                var11.clearButtonVisibility = var30;
                var11 = var19.bind(var3)(var29, var11);
                var4.children = var11;
                var9 = var19.bind(var3)(var9, var4);
                var4 = new Array(6);
                var4[0] = var9;
                var9 = _closure1_slot1;
                var7 = var22[var7];
                var9 = var9.bind(var3)(var7);
                var7 = {};
                var7.role = var10;
                var7 = var19.bind(var3)(var9, var7);
                var4[1] = var7;
                var7 = var22[var17];
                var7 = var26.bind(var3)(var7);
                var9 = var7.FormSection;
                var7 = {};
                var10 = var22[var17];
                var10 = var26.bind(var3)(var10);
                var11 = var10.FormRow;
                var10 = {};
                var29 = var22[var18];
                var29 = var26.bind(var3)(var29);
                var32 = var29.intl;
                var30 = var32.string;
                var29 = var22[var18];
                var29 = var26.bind(var3)(var29);
                var29 = var29.t;
                var29 = var29["9wVJRB"];
                var29 = var30.bind(var32)(var29);
                var10.label = var29;
                var10.onPress = var27;
                var22 = var22[var17];
                var22 = var26.bind(var3)(var22);
                var22 = var22.FormRow;
                var22 = var22.Arrow;
                var10.trailing = var22;
                var26 = var5 == var23;
                var22 = undefined;
                if (var26) {
                    _fun115979_ip = 1003;
                    continue _fun115979
                }
            case 997:
                var22 = var23.labelString;
            case 1003:
                var26 = var5 != var22;
                var22 = '';
                if (!var26) {
                    _fun115979_ip = 1052;
                    continue _fun115979
                }
            case 1014:
                var27 = _closure1_slot0;
                var26 = _closure1_slot2;
                var26 = var26[var18];
                var26 = var27.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var23 = var23.labelString;
                var22 = var26.bind(var27)(var23);
            case 1052:
                var10.subLabel = var22;
                var10.disabled = var15;
                var11 = var19.bind(var3)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var11 = _closure1_slot7;
                var11 = var11.HOLOGRAPHIC;
                var11 = var8 !== var11;
                if (!var11) {
                    _fun115979_ip = 1734;
                    continue _fun115979
                }
            case 1095:
                var23 = _closure1_slot13;
                var30 = _closure1_slot0;
                var26 = _closure1_slot2;
                var19 = var26[var17];
                var19 = var30.bind(var3)(var19);
                var22 = var19.FormRow;
                var19 = {};
                var27 = var26[var18];
                var27 = var30.bind(var3)(var27);
                var29 = var27.intl;
                var27 = var29.string;
                var26 = var26[var18];
                var26 = var30.bind(var3)(var26);
                var26 = var26.t;
                var26 = var26["5NC5YW"];
                var26 = var27.bind(var29)(var26);
                var19.label = var26;
                var19.onPress = var34;
                var29 = _closure1_slot14;
                var27 = _closure1_slot4;
                var26 = {};
                var30 = var25.trailingColorContainer;
                var26.style = var30;
                var30 = _closure1_slot7;
                var30 = var30.GRADIENT;
                if (!(var8 !== var30)) {
                    _fun115979_ip = 1266;
                    continue _fun115979
                }
            case 1210:
                var33 = _closure1_slot13;
                var32 = _closure1_slot1;
                var36 = _closure1_slot2;
                var30 = 30;
                var30 = var36[var30];
                var32 = var32.bind(var3)(var30);
                var30 = {};
                var30.color = var28;
                var36 = var25.colorBlock;
                var30.style = var36;
                var30.onSelect = var34;
                var32 = var33.bind(var3)(var32, var30);
                _fun115979_ip = 1454;
                continue _fun115979;
            case 1266:
                var34 = _closure1_slot13;
                var33 = _closure1_slot1;
                var36 = _closure1_slot2;
                var30 = 27;
                var30 = var36[var30];
                var33 = var33.bind(var3)(var30);
                var30 = {};
                var37 = var5 == var31;
                var36 = undefined;
                if (var37) {
                    _fun115979_ip = 1307;
                    continue _fun115979
                }
            case 1301:
                var36 = var31.primary_color;
            case 1307:
                var38 = new Array(3);
                var38[0] = var36;
                var37 = var5 == var31;
                var36 = undefined;
                if (var37) {
                    _fun115979_ip = 1330;
                    continue _fun115979
                }
            case 1324:
                var36 = var31.secondary_color;
            case 1330:
                var38[1] = var36;
                var37 = var5 == var31;
                var36 = undefined;
                if (var37) {
                    _fun115979_ip = 1349;
                    continue _fun115979
                }
            case 1343:
                var36 = var31.tertiary_color;
            case 1349:
                var38[2] = var36;
                var37 = var38.filter;
                var39 = _closure1_slot0;
                var40 = _closure1_slot2;
                var36 = 28;
                var36 = var40[var36];
                var36 = var39.bind(var3)(var36);
                var36 = var36.isNotNullish;
                var37 = var37.bind(var38)(var36);
                var36 = var37.map;
                var35 = function(arg0) { // Environment: var35
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 29;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.int2hex;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var35 = var36.bind(var37)(var35);
                var30.colors = var35;
                var35 = {
                    'x': 0,
                    'y': 0
                };
                var30.start = var35;
                var35 = {
                    'x': 1,
                    'y': 0
                };
                var30.end = var35;
                var35 = var25.colorBlock;
                var30.style = var35;
                var32 = var34.bind(var3)(var33, var30);
            case 1454:
                var30 = new Array(2);
                var30[0] = var32;
                var34 = _closure1_slot13;
                var33 = _closure1_slot0;
                var32 = _closure1_slot2;
                var32 = var32[var17];
                var32 = var33.bind(var3)(var32);
                var32 = var32.FormRow;
                var33 = var32.Arrow;
                var32 = {};
                var32 = var34.bind(var3)(var33, var32);
                var30[1] = var32;
                var26.children = var30;
                var26 = var29.bind(var3)(var27, var26);
                var19.trailing = var26;
                var26 = _closure1_slot7;
                var26 = var26.GRADIENT;
                if (!(var8 !== var26)) {
                    _fun115979_ip = 1572;
                    continue _fun115979
                }
            case 1536:
                var27 = _closure1_slot0;
                var29 = _closure1_slot2;
                var26 = 29;
                var26 = var29[var26];
                var27 = var27.bind(var3)(var26);
                var26 = var27.int2hex;
                var26 = var26.bind(var27)(var28);
                _fun115979_ip = 1719;
                continue _fun115979;
            case 1572:
                var28 = _closure1_slot0;
                var27 = _closure1_slot2;
                var30 = 29;
                var27 = var27[var30];
                var32 = var28.bind(var3)(var27);
                var28 = var32.int2hex;
                var27 = var5 == var31;
                var33 = undefined;
                if (var27) {
                    _fun115979_ip = 1613;
                    continue _fun115979
                }
            case 1607:
                var33 = var31.primary_color;
            case 1613:
                var34 = var5 != var33;
                var27 = 0;
                if (!var34) {
                    _fun115979_ip = 1625;
                    continue _fun115979
                }
            case 1622:
                var27 = var33;
            case 1625:
                var32 = var28.bind(var32)(var27);
                var28 = _closure1_slot0;
                var27 = _closure1_slot2;
                var27 = var27[var30];
                var28 = var28.bind(var3)(var27);
                var27 = var28.int2hex;
                var33 = var5 == var31;
                var30 = undefined;
                if (var33) {
                    _fun115979_ip = 1668;
                    continue _fun115979
                }
            case 1662:
                var30 = var31.secondary_color;
            case 1668:
                var31 = var5 != var30;
                var29 = 0;
                if (!var31) {
                    _fun115979_ip = 1680;
                    continue _fun115979
                }
            case 1677:
                var29 = var30;
            case 1680:
                var42 = var27.bind(var28)(var29);
                var27 = global;
                var27 = var27.HermesInternal;
                var30 = var27.concat;
                var45 = '[';
                var43 = ', ';
                var41 = ']';
                var44 = var32;
                var26 = var45[var30](var44, var43, var42, var41, var40);
            case 1719:
                var19.subLabel = var26;
                var19.disabled = var15;
                var11 = var23.bind(var3)(var22, var19);
            case 1734:
                var10[1] = var11;
                var7.children = var10;
                var7 = var2.bind(var3)(var9, var7);
                var4[2] = var7;
                var7 = _closure1_slot7;
                var7 = var7.HOLOGRAPHIC;
                var7 = var8 === var7;
                if (!var7) {
                    _fun115979_ip = 1974;
                    continue _fun115979
                }
            case 1772:
                var10 = _closure1_slot14;
                var9 = _closure1_slot4;
                var8 = {};
                var11 = var25.holographicInfo;
                var8.style = var11;
                var23 = _closure1_slot13;
                var27 = _closure1_slot0;
                var30 = _closure1_slot2;
                var11 = 31;
                var11 = var30[var11];
                var11 = var27.bind(var3)(var11);
                var19 = var11.CircleInformationIcon;
                var11 = {};
                var22 = 'sm';
                var11.size = var22;
                var29 = _closure1_slot1;
                var22 = 10;
                var22 = var30[var22];
                var22 = var29.bind(var3)(var22);
                var22 = var22.colors;
                var22 = var22.ICON_FEEDBACK_INFO;
                var11.color = var22;
                var19 = var23.bind(var3)(var19, var11);
                var11 = new Array(2);
                var11[0] = var19;
                var19 = 32;
                var19 = var30[var19];
                var19 = var27.bind(var3)(var19);
                var22 = var19.Text;
                var19 = {};
                var26 = 'text-sm/normal';
                var19.variant = var26;
                var26 = var30[var18];
                var26 = var27.bind(var3)(var26);
                var28 = var26.intl;
                var27 = var28.string;
                var26 = 33;
                var26 = var30[var26];
                var26 = var29.bind(var3)(var26);
                var26 = var26.tBhCyr;
                var26 = var27.bind(var28)(var26);
                var19.children = var26;
                var19 = var23.bind(var3)(var22, var19);
                var11[1] = var19;
                var8.children = var11;
                var7 = var10.bind(var3)(var9, var8);
            case 1974:
                var4[3] = var7;
                var5 = null;
                if (!var6) {
                    _fun115979_ip = 2221;
                    continue _fun115979
                }
            case 1986:
                var8 = _closure1_slot13;
                var23 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = var11[var17];
                var6 = var23.bind(var3)(var6);
                var7 = var6.FormSection;
                var6 = {};
                var9 = var11[var17];
                var9 = var23.bind(var3)(var9);
                var10 = var9.FormRow;
                var9 = {};
                var9.disabled = var15;
                var19 = var11[var17];
                var19 = var23.bind(var3)(var19);
                var22 = var19.FormLabel;
                var19 = {};
                var26 = var25.iconFormLabel;
                var19.style = var26;
                var26 = var11[var18];
                var26 = var23.bind(var3)(var26);
                var28 = var26.intl;
                var27 = var28.string;
                var26 = var11[var18];
                var26 = var23.bind(var3)(var26);
                var26 = var26.t;
                var26 = var26.B9grJw;
                var26 = var27.bind(var28)(var26);
                var19.text = var26;
                var19 = var8.bind(var3)(var22, var19);
                var9.label = var19;
                var22 = _closure1_slot4;
                var19 = {};
                var25 = var25.roleIcon;
                var19.style = var25;
                var19.children = var24;
                var19 = var8.bind(var3)(var22, var19);
                var9.trailing = var19;
                var19 = var11[var18];
                var19 = var23.bind(var3)(var19);
                var22 = var19.intl;
                var19 = var22.string;
                var11 = var11[var18];
                var11 = var23.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.ZTpgyG;
                var11 = var19.bind(var22)(var11);
                var9.subLabel = var11;
                var9 = var8.bind(var3)(var10, var9);
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 2221:
                var4[4] = var5;
                var7 = _closure1_slot14;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = var8[var17];
                var5 = var9.bind(var3)(var5);
                var6 = var5.FormSection;
                var5 = {};
                var19 = _closure1_slot13;
                var8 = var8[var17];
                var8 = var9.bind(var3)(var8);
                var11 = var8.FormSwitchRow;
                var8 = {};
                var9 = var15;
                if (var15) {
                    _fun115979_ip = 2284;
                    continue _fun115979
                }
            case 2281:
                var9 = var16;
            case 2284:
                var8.disabled = var9;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var22 = var9[var18];
                var22 = var10.bind(var3)(var22);
                var24 = var22.intl;
                var23 = var24.string;
                var22 = var9[var18];
                var22 = var10.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22.iVW5w4;
                var22 = var23.bind(var24)(var22);
                var8.label = var22;
                var8.value = var21;
                var8.onValueChange = var20;
                var20 = var9[var18];
                var20 = var10.bind(var3)(var20);
                var22 = var20.intl;
                var21 = var22.string;
                var20 = var9[var18];
                var20 = var10.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.vceJPk;
                var20 = var21.bind(var22)(var20);
                var8.subLabel = var20;
                var11 = var19.bind(var3)(var11, var8);
                var8 = new Array(3);
                var8[0] = var11;
                var11 = _closure1_slot13;
                var19 = var9[var17];
                var19 = var10.bind(var3)(var19);
                var20 = var19.FormDivider;
                var19 = {};
                var19 = var11.bind(var3)(var20, var19);
                var8[1] = var19;
                var9 = var9[var17];
                var9 = var10.bind(var3)(var9);
                var10 = var9.FormSwitchRow;
                var9 = {};
                if (var15) {
                    _fun115979_ip = 2474;
                    continue _fun115979
                }
            case 2471:
                var15 = var16;
            case 2474:
                var9.disabled = var15;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var16 = var14[var18];
                var16 = var15.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.format;
                var14 = var14[var18];
                var14 = var15.bind(var3)(var14);
                var14 = var14.t;
                var15 = var14.DTXoJQ;
                var14 = {};
                var14 = var16.bind(var17)(var15, var14);
                var9.label = var14;
                var9.value = var13;
                var9.onValueChange = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[5] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1675, 14757, 14756, 660, 14759, 4874, 33, 1297, 671, 4789, 566, 6735, 6734, 4086, 14773, 3278, 13140, 1307, 14771, 14774, 14775, 5378, 1234, 5407, 14778, 4098, 1304, 668, 10204, 3266, 3941, 1890, 2]);