// modules/guild_settings/roles/native/GuildSettingsRoleItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var13 = 0;
    var3 = var5[var13];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var16 = 1;
    var6 = var5[var16];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var10 = var3.StyleSheet;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var11 = 0.6;
    var9.opacity = var11;
    var3.disabled = var9;
    var9 = {
        'flexDirection': 'row',
        'gap': 4,
        'alignItems': 'center'
    };
    var3.row = var9;
    var9 = {};
    var14 = 12;
    var9.marginBottom = var14;
    var3.lastRow = var9;
    var15 = 20;
    var9 = {
        'paddingHorizontal': 20,
        'paddingTop': 20
    };
    var3.rowContainer = var9;
    var9 = {};
    var11 = 6;
    var17 = var5[var11];
    var17 = var12.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.INTERACTIVE_TEXT_DEFAULT;
    var9.tintColor = var17;
    var17 = var5[var11];
    var17 = var12.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_BASE_LOWEST;
    var9.backgroundColor = var17;
    var9.borderRadius = var15;
    var17 = 8;
    var9.padding = var17;
    var3.everyone = var9;
    var9 = {};
    var9.flex = var16;
    var3.rowContents = var9;
    var9 = {};
    var9.lineHeight = var15;
    var3.label = var9;
    var9 = {};
    var15 = 16;
    var9.lineHeight = var15;
    var3.subLabel = var9;
    var9 = {
        'height': 13,
        'width': 8
    };
    var3.arrow = var9;
    var9 = {};
    var9.marginRight = var14;
    var3.dragIconContainer = var9;
    var9 = {
        'width': 16,
        'height': 16
    };
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.RED_400;
    var9.tintColor = var14;
    var3.deleteIcon = var9;
    var9 = {};
    var14 = var5[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.ICON_MUTED;
    var9.tintColor = var14;
    var3.sparkleIcon = var9;
    var9 = {};
    var9.marginLeft = var13;
    var3.divider = var9;
    var9 = {
        'width': 32,
        'height': 32,
        'borderRadius': null,
        'overflow': 'hidden',
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var11 = var5[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var9.borderRadius = var11;
    var3.container = var9;
    var9 = {};
    var19 = var10.absoluteFillObject;
    var20 = var9;
    var10 = copyDataProperties(var20, var19);
    var3.gradient = var9;
    var9 = {};
    var10 = 'white';
    var9.tintColor = var10;
    var3.image = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function arg0() {
        _fun116070: for (var _fun116070_ip = 0;;) switch (_fun116070_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 7;
                var0 = var8[var0];
                var3 = undefined;
                var2 = var2.bind(var3)(var0);
                var0 = var1.guildId;
                var13 = null;
                var0 = var2.bind(var3)(var0, var13);
                var2 = _closure1_slot8;
                var20 = var2.bind(var3)();
                var16 = var1.role;
                var _closure2_slot0 = var16;
                var21 = var1.sorting;
                var14 = var1.locked;
                var2 = var1.onPress;
                var _closure2_slot1 = var2;
                var18 = var1.onLongPress;
                var25 = var1.sortHandlers;
                var6 = var1.isEveryoneRole;
                var23 = var1.guildId;
                var _closure2_slot2 = var23;
                var15 = var1.numMembers;
                var4 = var1.isLastRole;
                var5 = var1.isFirstRole;
                var2 = _closure1_slot0;
                var1 = 8;
                var1 = var8[var1];
                var8 = var2.bind(var3)(var1);
                var2 = var8.useRoleIcon;
                var1 = {};
                var1.guildId = var23;
                var9 = var16.id;
                var1.roleId = var9;
                var24 = 32;
                var1.size = var24;
                var1 = var2.bind(var8)(var1);
                var8 = var16.tags;
                var9 = var13 == var8;
                var2 = undefined;
                if (var9) {
                    _fun116070_ip = 198;
                    continue _fun116070
                }
            case 192:
                var2 = var8.guild_connections;
            case 198:
                var26 = var13 === var2;
                var _closure2_slot3 = var26;
                var2 = {};
                var8 = 'longpress';
                var2.name = var8;
                var12 = _closure1_slot0;
                var8 = _closure1_slot2;
                var11 = 10;
                var9 = var8[var11];
                var9 = var12.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var8[var11];
                var8 = var12.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8["0dOFq+"];
                var8 = var9.bind(var10)(var8);
                var2.label = var8;
                var27 = new Array(1);
                var27[0] = var2;
                var9 = undefined;
                var10 = undefined;
                var17 = false;
                var8 = true;
                if (!var21) {
                    _fun116070_ip = 516;
                    continue _fun116070
                }
            case 299:
                var22 = {
                    'accessibilityRole': 'button',
                    'accessibilityActions': null,
                    'delayLongPress': 100,
                    'activeOpacity': 0.8
                };
                var22.accessibilityActions = var27;
                var34 = var22;
                var33 = var25;
                var25 = copyDataProperties(var34, var33);
                var25 = var16.managed;
                if (!var25) {
                    _fun116070_ip = 341;
                    continue _fun116070
                }
            case 338:
                var25 = !var26;
            case 341:
                var9 = undefined;
                var10 = var22;
                var17 = true;
                var8 = false;
                if (var25) {
                    _fun116070_ip = 516;
                    continue _fun116070
                }
            case 356:
                var27 = _closure1_slot6;
                var31 = _closure1_slot0;
                var28 = _closure1_slot2;
                var25 = 14;
                var25 = var28[var25];
                var25 = var31.bind(var3)(var25);
                var26 = var25.IconButton;
                var25 = {};
                var29 = 15;
                var29 = var28[var29];
                var29 = var31.bind(var3)(var29);
                var30 = var29.TrashIcon;
                var29 = {};
                var32 = 'xs';
                var29.size = var32;
                var29 = var27.bind(var3)(var30, var29);
                var25.icon = var29;
                var29 = var28[var11];
                var29 = var31.bind(var3)(var29);
                var30 = var29.intl;
                var29 = var30.string;
                var28 = var28[var11];
                var28 = var31.bind(var3)(var28);
                var28 = var28.t;
                var28 = var28.YsFpa4;
                var28 = var29.bind(var30)(var28);
                var25.accessibilityLabel = var28;
                var28 = 'sm';
                var25.size = var28;
                var28 = 'destructive';
                var25.variant = var28;
                var28 = function() {
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 9;
                    var1 = var6[var0];
                    var0 = undefined;
                    var3 = var5.bind(var0)(var1);
                    var2 = var3.show;
                    var1 = {};
                    var11 = _closure1_slot0;
                    var8 = 10;
                    var9 = var6[var8];
                    var9 = var11.bind(var0)(var9);
                    var13 = var9.intl;
                    var12 = var13.formatToPlainString;
                    var9 = var6[var8];
                    var9 = var11.bind(var0)(var9);
                    var9 = var9.t;
                    var10 = var9.FiMFTZ;
                    var9 = {};
                    var14 = _closure2_slot0;
                    var14 = var14.name;
                    var9.name = var14;
                    var9 = var12.bind(var13)(var10, var9);
                    var1.title = var9;
                    var9 = var6[var8];
                    var9 = var11.bind(var0)(var9);
                    var12 = var9.intl;
                    var10 = var12.string;
                    var9 = var6[var8];
                    var9 = var11.bind(var0)(var9);
                    var9 = var9.t;
                    var9 = var9.qALKny;
                    var9 = var10.bind(var12)(var9);
                    var1.body = var9;
                    var9 = var6[var8];
                    var9 = var11.bind(var0)(var9);
                    var12 = var9.intl;
                    var10 = var12.string;
                    var9 = var6[var8];
                    var9 = var11.bind(var0)(var9);
                    var9 = var9.t;
                    var9 = var9.gm1Vej;
                    var9 = var10.bind(var12)(var9);
                    var1.cancelText = var9;
                    var9 = var6[var8];
                    var9 = var11.bind(var0)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var6[var8];
                    var8 = var11.bind(var0)(var8);
                    var8 = var8.t;
                    var8 = var8.p89ACt;
                    var8 = var9.bind(var10)(var8);
                    var1.confirmText = var8;
                    var8 = _closure1_slot3;
                    var7 = function*() { // Environment: var4
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun116073: for (var _fun116073_ip = 0;;) switch (_fun116073_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun116073_ip = 141;
                                        continue _fun116073
                                    }
                                case 10:
                                    var1 = _closure2_slot3;
                                    if (!var1) {
                                        _fun116073_ip = 85;
                                        continue _fun116073
                                    }
                                case 20:
                                    var4 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 11;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var6 = var4.bind(var1)(var2);
                                    var5 = var6.putRoleConnectionsConfigurations;
                                    var4 = _closure2_slot2;
                                    var1 = _closure2_slot0;
                                    var2 = var1.id;
                                    var1 = new Array(0);
                                    var1 = var5.bind(var6)(var4, var2, var1);
                                    SaveGenerator(address = 79);
                                case 77:
                                    return var1;
                                case 79:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                    if (var2) {
                                        _fun116073_ip = 138;
                                        continue _fun116073
                                    }
                                case 85:
                                    var5 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var2 = 12;
                                    var4 = var4[var2];
                                    var2 = undefined;
                                    var6 = var5.bind(var2)(var4);
                                    var5 = var6.deleteRole;
                                    var4 = _closure2_slot2;
                                    var3 = _closure2_slot0;
                                    var3 = var3.id;
                                    var3 = var5.bind(var6)(var4, var3);
                                    return var2;
                                case 138:
                                    return var1;
                                case 141:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var7 = var8.bind(var0)(var7);
                    var _closure3_slot0 = var7;
                    var4 = function() { // Environment: var4
                        var0 = undefined;
                        var3 = _closure3_slot0;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var1.onConfirm = var4;
                    var4 = 13;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.Colors;
                    var4 = var4.RED;
                    var1.confirmColor = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var25.onPress = var28;
                var9 = var27.bind(var3)(var26, var25);
                var10 = var22;
                var17 = true;
                var8 = false;
            case 516:
                var12 = var1;
                if (!(var13 == var12)) {
                    _fun116070_ip = 1021;
                    continue _fun116070
                }
            case 526:
                var2 = var16.tags;
                var22 = var13 == var2;
                var1 = undefined;
                if (var22) {
                    _fun116070_ip = 547;
                    continue _fun116070
                }
            case 541:
                var1 = var2.guild_connections;
            case 547:
                if (!(var13 !== var1)) {
                    _fun116070_ip = 973;
                    continue _fun116070
                }
            case 554:
                if (!var0) {
                    _fun116070_ip = 584;
                    continue _fun116070
                }
            case 557:
                var0 = var16.colors;
                if (!(var13 != var0)) {
                    _fun116070_ip = 584;
                    continue _fun116070
                }
            case 566:
                var0 = var16.colors;
                var0 = var0.secondary_color;
                if (!(var13 == var0)) {
                    _fun116070_ip = 714;
                    continue _fun116070
                }
            case 584:
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var25 = var20.container;
                var22 = new Array(2);
                var22[0] = var25;
                var25 = {};
                var26 = var16.colorString;
                if (!(var13 == var26)) {
                    _fun116070_ip = 625;
                    continue _fun116070
                }
            case 619:
                var26 = _closure1_slot5;
                _fun116070_ip = 631;
                continue _fun116070;
            case 625:
                var26 = var16.colorString;
            case 631:
                var25.backgroundColor = var26;
                var22[1] = var25;
                var0.style = var22;
                var26 = _closure1_slot6;
                var25 = _closure1_slot0;
                var27 = _closure1_slot2;
                var22 = 20;
                var22 = var27[var22];
                var22 = var25.bind(var3)(var22);
                var25 = var22.ShieldUserIcon;
                var22 = {};
                var27 = 'md';
                var22.size = var27;
                var27 = var20.image;
                var22.style = var27;
                var22 = var26.bind(var3)(var25, var22);
                var0.children = var22;
                var0 = var2.bind(var3)(var1, var0);
                _fun116070_ip = 971;
                continue _fun116070;
            case 714:
                var22 = _closure1_slot7;
                var2 = _closure1_slot4;
                var1 = {};
                var25 = var20.container;
                var1.style = var25;
                var28 = _closure1_slot6;
                var26 = _closure1_slot1;
                var29 = _closure1_slot2;
                var25 = 17;
                var25 = var29[var25];
                var26 = var26.bind(var3)(var25);
                var25 = {};
                var27 = var16.colors;
                var27 = var27.primary_color;
                var32 = new Array(3);
                var32[0] = var27;
                var27 = var16.colors;
                var27 = var27.secondary_color;
                var32[1] = var27;
                var27 = var16.colors;
                var27 = var27.tertiary_color;
                var32[2] = var27;
                var31 = var32.filter;
                var27 = _closure1_slot0;
                var30 = 18;
                var30 = var29[var30];
                var30 = var27.bind(var3)(var30);
                var30 = var30.isNotNullish;
                var32 = var31.bind(var32)(var30);
                var31 = var32.map;
                var30 = function(arg0) { // Environment: var19
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 19;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.int2hex;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var30 = var31.bind(var32)(var30);
                var25.colors = var30;
                var30 = {
                    'x': 0,
                    'y': 0
                };
                var25.start = var30;
                var30 = {
                    'x': 1,
                    'y': 0
                };
                var25.end = var30;
                var30 = var20.gradient;
                var25.style = var30;
                var26 = var28.bind(var3)(var26, var25);
                var25 = new Array(2);
                var25[0] = var26;
                var26 = 20;
                var26 = var29[var26];
                var26 = var27.bind(var3)(var26);
                var27 = var26.ShieldUserIcon;
                var26 = {};
                var29 = 'md';
                var26.size = var29;
                var29 = var20.image;
                var26.style = var29;
                var26 = var28.bind(var3)(var27, var26);
                var25[1] = var26;
                var1.children = var25;
                var0 = var22.bind(var3)(var2, var1);
            case 971:
                _fun116070_ip = 1018;
                continue _fun116070;
            case 973:
                var22 = _closure1_slot6;
                var2 = _closure1_slot1;
                var25 = _closure1_slot2;
                var1 = 16;
                var1 = var25[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var1.size = var24;
                var1.guildId = var23;
                var1.role = var16;
                var0 = var22.bind(var3)(var2, var1);
            case 1018:
                var12 = var0;
            case 1021:
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var22 = _closure1_slot2;
                var0 = 21;
                var0 = var22[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TableRow;
                var0 = {};
                var0.onLongPress = var18;
                var18 = undefined;
                if (var21) {
                    _fun116070_ip = 1070;
                    continue _fun116070
                }
            case 1063:
                var18 = function() { // Environment: var19
                    _fun116076: for (var _fun116076_ip = 0;;) switch (_fun116076_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun116076_ip = 28;
                                continue _fun116076
                            }
                        case 13:
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 28:
                            var0 = undefined;
                            return var0;
                    }
                };
            case 1070:
                var0.onPress = var18;
                var0.draggable = var17;
                var0.dragHandlePressableProps = var10;
                var0.trailing = var9;
                var0.arrow = var8;
                var10 = _closure1_slot6;
                var9 = _closure1_slot4;
                if (var6) {
                    _fun116070_ip = 1113;
                    continue _fun116070
                }
            case 1105:
                var8 = {};
                var8.children = var12;
                _fun116070_ip = 1170;
                continue _fun116070;
            case 1113:
                var12 = {};
                var17 = var20.everyone;
                var12.style = var17;
                var19 = _closure1_slot6;
                var18 = _closure1_slot0;
                var21 = _closure1_slot2;
                var17 = 22;
                var17 = var21[var17];
                var17 = var18.bind(var3)(var17);
                var18 = var17.GroupIcon;
                var17 = {};
                var17 = var19.bind(var3)(var18, var17);
                var12.children = var17;
                var8 = var12;
            case 1170:
                var8 = var10.bind(var3)(var9, var8);
                var0.icon = var8;
                var10 = _closure1_slot7;
                var9 = _closure1_slot4;
                var8 = {};
                var12 = var20.row;
                var8.style = var12;
                var18 = _closure1_slot6;
                var17 = _closure1_slot0;
                var19 = _closure1_slot2;
                var12 = 23;
                var12 = var19[var12];
                var12 = var17.bind(var3)(var12);
                var17 = var12.Text;
                var12 = {
                    'lineClamp': 1,
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'interactive-text-active'
                };
                var19 = var20.label;
                var12.style = var19;
                var19 = var16.name;
                var12.children = var19;
                var17 = var18.bind(var3)(var17, var12);
                var12 = new Array(3);
                var12[0] = var17;
                var17 = var16.tags;
                var18 = var13 == var17;
                var16 = undefined;
                if (var18) {
                    _fun116070_ip = 1298;
                    continue _fun116070
                }
            case 1292:
                var16 = var17.subscription_listing_id;
            case 1298:
                var17 = var13 != var16;
                var16 = null;
                if (!var17) {
                    _fun116070_ip = 1448;
                    continue _fun116070
                }
            case 1310:
                var19 = _closure1_slot6;
                var23 = _closure1_slot1;
                var21 = _closure1_slot2;
                var22 = 24;
                var17 = var21[var22];
                var18 = var23.bind(var3)(var17);
                var17 = {};
                var22 = var21[var22];
                var22 = var23.bind(var3)(var22);
                var22 = var22.Sizes;
                var22 = var22.REFRESH_SMALL_16;
                var17.size = var22;
                var22 = 25;
                var22 = var21[var22];
                var22 = var23.bind(var3)(var22);
                var17.source = var22;
                var24 = _closure1_slot0;
                var22 = var21[var11];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var21[var11];
                var21 = var24.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21.a2Ak8b;
                var21 = var22.bind(var23)(var21);
                var17['aria-label'] = var21;
                var20 = var20.sparkleIcon;
                var17.style = var20;
                var16 = var19.bind(var3)(var18, var17);
            case 1448:
                var12[1] = var16;
                var13 = null;
                if (!var14) {
                    _fun116070_ip = 1507;
                    continue _fun116070
                }
            case 1457:
                var17 = _closure1_slot6;
                var16 = _closure1_slot0;
                var18 = _closure1_slot2;
                var14 = 26;
                var14 = var18[var14];
                var14 = var16.bind(var3)(var14);
                var16 = var14.LockIcon;
                var14 = {
                    'size': 'xxs',
                    'color': 'icon-subtle'
                };
                var13 = var17.bind(var3)(var16, var14);
            case 1507:
                var12[2] = var13;
                var8.children = var12;
                var8 = var10.bind(var3)(var9, var8);
                var0.label = var8;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var8 = var7[var11];
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                if (var6) {
                    _fun116070_ip = 1612;
                    continue _fun116070
                }
            case 1550:
                var12 = var9.formatToPlainString;
                var6 = var7[var11];
                var6 = var10.bind(var3)(var6);
                var6 = var6.t;
                var8 = var6.AWmdd9;
                var6 = {};
                var13 = global;
                var13 = var13.HermesInternal;
                var14 = var13.concat;
                var13 = '';
                var13 = var14.bind(var13)(var15);
                var6.count = var13;
                var6 = var12.bind(var9)(var8, var6);
                _fun116070_ip = 1644;
                continue _fun116070;
            case 1612:
                var8 = var9.string;
                var7 = var7[var11];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7["72gF3G"];
                var6 = var8.bind(var9)(var7);
            case 1644:
                var0.subLabel = var6;
                var0.start = var5;
                var0.end = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_settings/roles/native/GuildSettingsRoleItem.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 660, 33, 1297, 671, 4791, 6754, 3936, 1234, 9933, 4679, 3937, 7530, 3269, 9173, 4098, 1304, 668, 8161, 4900, 4855, 3941, 4086, 9324, 4860, 2]);