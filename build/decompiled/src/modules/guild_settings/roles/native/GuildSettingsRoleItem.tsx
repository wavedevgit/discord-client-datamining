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
    var1 = function(arg0) { // Original name: GuildSettingsRoleItem, environment: var1
        _fun115892: for (var _fun115892_ip = 0;;) switch (_fun115892_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 7;
                var0 = var9[var0];
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var1 = var2.guildId;
                var0 = null;
                var1 = var3.bind(var4)(var1, var0);
                var3 = _closure1_slot8;
                var20 = var3.bind(var4)();
                var14 = var2.role;
                var _closure2_slot0 = var14;
                var21 = var2.sorting;
                var15 = var2.locked;
                var3 = var2.onPress;
                var _closure2_slot1 = var3;
                var18 = var2.onLongPress;
                var25 = var2.sortHandlers;
                var7 = var2.isEveryoneRole;
                var23 = var2.guildId;
                var _closure2_slot2 = var23;
                var16 = var2.numMembers;
                var5 = var2.isLastRole;
                var6 = var2.isFirstRole;
                var3 = _closure1_slot0;
                var2 = 8;
                var2 = var9[var2];
                var9 = var3.bind(var4)(var2);
                var3 = var9.useRoleIcon;
                var2 = {};
                var2.guildId = var23;
                var10 = var14.id;
                var2.roleId = var10;
                var24 = 32;
                var2.size = var24;
                var2 = var3.bind(var9)(var2);
                var9 = var14.tags;
                var10 = var0 == var9;
                var3 = undefined;
                if (var10) {
                    _fun115892_ip = 198;
                    continue _fun115892
                }
            case 192:
                var3 = var9.guild_connections;
            case 198:
                var26 = var0 === var3;
                var _closure2_slot3 = var26;
                var3 = {};
                var9 = 'longpress';
                var3.name = var9;
                var13 = _closure1_slot0;
                var9 = _closure1_slot2;
                var12 = 10;
                var10 = var9[var12];
                var10 = var13.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var9[var12];
                var9 = var13.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9["0dOFq+"];
                var9 = var10.bind(var11)(var9);
                var3.label = var9;
                var27 = new Array(1);
                var27[0] = var3;
                var10 = undefined;
                var11 = undefined;
                var17 = false;
                var9 = true;
                if (!var21) {
                    _fun115892_ip = 528;
                    continue _fun115892
                }
            case 299:
                if (var15) {
                    _fun115892_ip = 1677;
                    continue _fun115892
                }
            case 305:
                if (var7) {
                    _fun115892_ip = 1677;
                    continue _fun115892
                }
            case 311:
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
                var25 = var14.managed;
                if (!var25) {
                    _fun115892_ip = 353;
                    continue _fun115892
                }
            case 350:
                var25 = !var26;
            case 353:
                var10 = undefined;
                var11 = var22;
                var17 = true;
                var9 = false;
                if (var25) {
                    _fun115892_ip = 528;
                    continue _fun115892
                }
            case 368:
                var27 = _closure1_slot6;
                var31 = _closure1_slot0;
                var28 = _closure1_slot2;
                var25 = 14;
                var25 = var28[var25];
                var25 = var31.bind(var4)(var25);
                var26 = var25.IconButton;
                var25 = {};
                var29 = 15;
                var29 = var28[var29];
                var29 = var31.bind(var4)(var29);
                var30 = var29.TrashIcon;
                var29 = {};
                var32 = 'xs';
                var29.size = var32;
                var29 = var27.bind(var4)(var30, var29);
                var25.icon = var29;
                var29 = var28[var12];
                var29 = var31.bind(var4)(var29);
                var30 = var29.intl;
                var29 = var30.string;
                var28 = var28[var12];
                var28 = var31.bind(var4)(var28);
                var28 = var28.t;
                var28 = var28.YsFpa4;
                var28 = var29.bind(var30)(var28);
                var25.accessibilityLabel = var28;
                var28 = 'sm';
                var25.size = var28;
                var28 = 'destructive';
                var25.variant = var28;
                var28 = function() { // Original name: onPress, environment: var19
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
                            _fun115895: for (var _fun115895_ip = 0;;) switch (_fun115895_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun115895_ip = 141;
                                        continue _fun115895
                                    }
                                case 10:
                                    var1 = _closure2_slot3;
                                    if (!var1) {
                                        _fun115895_ip = 85;
                                        continue _fun115895
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
                                        _fun115895_ip = 138;
                                        continue _fun115895
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
                var10 = var27.bind(var4)(var26, var25);
                var11 = var22;
                var17 = true;
                var9 = false;
            case 528:
                var13 = var2;
                if (!(var0 == var13)) {
                    _fun115892_ip = 1033;
                    continue _fun115892
                }
            case 538:
                var3 = var14.tags;
                var22 = var0 == var3;
                var2 = undefined;
                if (var22) {
                    _fun115892_ip = 559;
                    continue _fun115892
                }
            case 553:
                var2 = var3.guild_connections;
            case 559:
                if (!(var0 !== var2)) {
                    _fun115892_ip = 985;
                    continue _fun115892
                }
            case 566:
                if (!var1) {
                    _fun115892_ip = 596;
                    continue _fun115892
                }
            case 569:
                var1 = var14.colors;
                if (!(var0 != var1)) {
                    _fun115892_ip = 596;
                    continue _fun115892
                }
            case 578:
                var1 = var14.colors;
                var1 = var1.secondary_color;
                if (!(var0 == var1)) {
                    _fun115892_ip = 726;
                    continue _fun115892
                }
            case 596:
                var3 = _closure1_slot6;
                var2 = _closure1_slot4;
                var1 = {};
                var25 = var20.container;
                var22 = new Array(2);
                var22[0] = var25;
                var25 = {};
                var26 = var14.colorString;
                if (!(var0 == var26)) {
                    _fun115892_ip = 637;
                    continue _fun115892
                }
            case 631:
                var26 = _closure1_slot5;
                _fun115892_ip = 643;
                continue _fun115892;
            case 637:
                var26 = var14.colorString;
            case 643:
                var25.backgroundColor = var26;
                var22[1] = var25;
                var1.style = var22;
                var26 = _closure1_slot6;
                var25 = _closure1_slot0;
                var27 = _closure1_slot2;
                var22 = 20;
                var22 = var27[var22];
                var22 = var25.bind(var4)(var22);
                var25 = var22.ShieldUserIcon;
                var22 = {};
                var27 = 'md';
                var22.size = var27;
                var27 = var20.image;
                var22.style = var27;
                var22 = var26.bind(var4)(var25, var22);
                var1.children = var22;
                var1 = var3.bind(var4)(var2, var1);
                _fun115892_ip = 983;
                continue _fun115892;
            case 726:
                var22 = _closure1_slot7;
                var3 = _closure1_slot4;
                var2 = {};
                var25 = var20.container;
                var2.style = var25;
                var28 = _closure1_slot6;
                var26 = _closure1_slot1;
                var29 = _closure1_slot2;
                var25 = 17;
                var25 = var29[var25];
                var26 = var26.bind(var4)(var25);
                var25 = {};
                var27 = var14.colors;
                var27 = var27.primary_color;
                var32 = new Array(3);
                var32[0] = var27;
                var27 = var14.colors;
                var27 = var27.secondary_color;
                var32[1] = var27;
                var27 = var14.colors;
                var27 = var27.tertiary_color;
                var32[2] = var27;
                var31 = var32.filter;
                var27 = _closure1_slot0;
                var30 = 18;
                var30 = var29[var30];
                var30 = var27.bind(var4)(var30);
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
                var26 = var28.bind(var4)(var26, var25);
                var25 = new Array(2);
                var25[0] = var26;
                var26 = 20;
                var26 = var29[var26];
                var26 = var27.bind(var4)(var26);
                var27 = var26.ShieldUserIcon;
                var26 = {};
                var29 = 'md';
                var26.size = var29;
                var29 = var20.image;
                var26.style = var29;
                var26 = var28.bind(var4)(var27, var26);
                var25[1] = var26;
                var2.children = var25;
                var1 = var22.bind(var4)(var3, var2);
            case 983:
                _fun115892_ip = 1030;
                continue _fun115892;
            case 985:
                var22 = _closure1_slot6;
                var3 = _closure1_slot1;
                var25 = _closure1_slot2;
                var2 = 16;
                var2 = var25[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2.size = var24;
                var2.guildId = var23;
                var2.role = var14;
                var1 = var22.bind(var4)(var3, var2);
            case 1030:
                var13 = var1;
            case 1033:
                var3 = _closure1_slot6;
                var2 = _closure1_slot0;
                var22 = _closure1_slot2;
                var1 = 21;
                var1 = var22[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.TableRow;
                var1 = {};
                var1.onLongPress = var18;
                var18 = undefined;
                if (var21) {
                    _fun115892_ip = 1082;
                    continue _fun115892
                }
            case 1075:
                var18 = function() { // Environment: var19
                    _fun115898: for (var _fun115898_ip = 0;;) switch (_fun115898_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun115898_ip = 28;
                                continue _fun115898
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
            case 1082:
                var1.onPress = var18;
                var1.draggable = var17;
                var1.dragHandlePressableProps = var11;
                var1.trailing = var10;
                var1.arrow = var9;
                var11 = _closure1_slot6;
                var10 = _closure1_slot4;
                if (var7) {
                    _fun115892_ip = 1125;
                    continue _fun115892
                }
            case 1117:
                var9 = {};
                var9.children = var13;
                _fun115892_ip = 1182;
                continue _fun115892;
            case 1125:
                var13 = {};
                var17 = var20.everyone;
                var13.style = var17;
                var19 = _closure1_slot6;
                var18 = _closure1_slot0;
                var21 = _closure1_slot2;
                var17 = 22;
                var17 = var21[var17];
                var17 = var18.bind(var4)(var17);
                var18 = var17.GroupIcon;
                var17 = {};
                var17 = var19.bind(var4)(var18, var17);
                var13.children = var17;
                var9 = var13;
            case 1182:
                var9 = var11.bind(var4)(var10, var9);
                var1.icon = var9;
                var11 = _closure1_slot7;
                var10 = _closure1_slot4;
                var9 = {};
                var13 = var20.row;
                var9.style = var13;
                var18 = _closure1_slot6;
                var17 = _closure1_slot0;
                var19 = _closure1_slot2;
                var13 = 23;
                var13 = var19[var13];
                var13 = var17.bind(var4)(var13);
                var17 = var13.Text;
                var13 = {
                    'lineClamp': 1,
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'interactive-text-active'
                };
                var19 = var20.label;
                var13.style = var19;
                var19 = var14.name;
                var13.children = var19;
                var17 = var18.bind(var4)(var17, var13);
                var13 = new Array(3);
                var13[0] = var17;
                var17 = var14.tags;
                var18 = var0 == var17;
                var14 = undefined;
                if (var18) {
                    _fun115892_ip = 1310;
                    continue _fun115892
                }
            case 1304:
                var14 = var17.subscription_listing_id;
            case 1310:
                var17 = var0 != var14;
                var14 = null;
                if (!var17) {
                    _fun115892_ip = 1460;
                    continue _fun115892
                }
            case 1322:
                var19 = _closure1_slot6;
                var23 = _closure1_slot1;
                var21 = _closure1_slot2;
                var22 = 24;
                var17 = var21[var22];
                var18 = var23.bind(var4)(var17);
                var17 = {};
                var22 = var21[var22];
                var22 = var23.bind(var4)(var22);
                var22 = var22.Sizes;
                var22 = var22.REFRESH_SMALL_16;
                var17.size = var22;
                var22 = 25;
                var22 = var21[var22];
                var22 = var23.bind(var4)(var22);
                var17.source = var22;
                var24 = _closure1_slot0;
                var22 = var21[var12];
                var22 = var24.bind(var4)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var21[var12];
                var21 = var24.bind(var4)(var21);
                var21 = var21.t;
                var21 = var21.a2Ak8b;
                var21 = var22.bind(var23)(var21);
                var17['aria-label'] = var21;
                var20 = var20.sparkleIcon;
                var17.style = var20;
                var14 = var19.bind(var4)(var18, var17);
            case 1460:
                var13[1] = var14;
                var14 = null;
                if (!var15) {
                    _fun115892_ip = 1519;
                    continue _fun115892
                }
            case 1469:
                var18 = _closure1_slot6;
                var17 = _closure1_slot0;
                var19 = _closure1_slot2;
                var15 = 26;
                var15 = var19[var15];
                var15 = var17.bind(var4)(var15);
                var17 = var15.LockIcon;
                var15 = {
                    'size': 'xxs',
                    'color': 'icon-subtle'
                };
                var14 = var18.bind(var4)(var17, var15);
            case 1519:
                var13[2] = var14;
                var9.children = var13;
                var9 = var11.bind(var4)(var10, var9);
                var1.label = var9;
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var9 = var8[var12];
                var9 = var11.bind(var4)(var9);
                var10 = var9.intl;
                if (var7) {
                    _fun115892_ip = 1624;
                    continue _fun115892
                }
            case 1562:
                var13 = var10.formatToPlainString;
                var7 = var8[var12];
                var7 = var11.bind(var4)(var7);
                var7 = var7.t;
                var9 = var7.AWmdd9;
                var7 = {};
                var14 = global;
                var14 = var14.HermesInternal;
                var15 = var14.concat;
                var14 = '';
                var14 = var15.bind(var14)(var16);
                var7.count = var14;
                var7 = var13.bind(var10)(var9, var7);
                _fun115892_ip = 1656;
                continue _fun115892;
            case 1624:
                var9 = var10.string;
                var8 = var8[var12];
                var8 = var11.bind(var4)(var8);
                var8 = var8.t;
                var8 = var8["72gF3G"];
                var7 = var9.bind(var10)(var8);
            case 1656:
                var1.subLabel = var7;
                var1.start = var6;
                var1.end = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1677:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 27, 660, 33, 1297, 671, 4752, 6696, 3895, 1234, 9814, 4642, 3896, 7470, 3228, 9099, 4057, 1304, 668, 8101, 4861, 4816, 3900, 4045, 9250, 4821, 2]);