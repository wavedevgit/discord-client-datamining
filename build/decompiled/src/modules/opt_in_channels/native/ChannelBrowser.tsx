// modules/opt_in_channels/native/ChannelBrowser.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var4 = var0.section;
        var3 = var0.row;
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '';
        var0 = '-';
        var0 = var2.bind(var1)(var4, var0, var3);
        return var0;
    };
    var _closure1_slot20 = var0;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var6 = var5[var10];
    var3 = arg3;
    var7 = var3.bind(var0)(var6);
    var _closure1_slot4 = var7;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TABLE_ROW_HEIGHT;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var14 = var3.Fonts;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TABLE_DIVIDER_WIDTH;
    var _closure1_slot12 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot13 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot14 = var6;
    var6 = var3.jsxs;
    var _closure1_slot15 = var6;
    var3 = var3.Fragment;
    var _closure1_slot16 = var3;
    var3 = 13;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var10;
    var3.container = var9;
    var9 = {};
    var10 = 14;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9.marginTop = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.marginHorizontal = var12;
    var3.header = var9;
    var9 = {
        'flexDirection': 'row',
        'justifyContent': 'space-between'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.paddingBottom = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var9.paddingTop = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var9.borderRadius = var12;
    var3.categoryContainer = var9;
    var12 = 'center';
    var9 = {
        'display': 'flex',
        'flexDirection': 'column',
        'justifyContent': 'center',
        'marginRight': 8
    };
    var3.channelText = var9;
    var9 = {
        'alignItems': 'center',
        'display': 'flex',
        'flexDirection': 'row'
    };
    var3.channelNameContainer = var9;
    var9 = {
        'flexShrink': 0,
        'marginRight': 8
    };
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.INTERACTIVE_TEXT_ACTIVE;
    var9.tintColor = var15;
    var3.channelIcon = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'row',
        'justifyContent': 'center',
        'alignItems': 'center',
        'flexShrink': 0
    };
    var3.selectAllContainer = var9;
    var9 = {};
    var15 = var5[var10];
    var15 = var11.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var9.marginRight = var15;
    var16 = {};
    var15 = 0.75;
    var16.scale = var15;
    var15 = new Array(1);
    var15[0] = var16;
    var9.transform = var15;
    var3.selectAllCheckbox = var9;
    var9 = {};
    var14 = var14.DISPLAY_EXTRABOLD;
    var9.fontFamily = var14;
    var3.newBadge = var9;
    var9 = {};
    var14 = 'relative';
    var9.position = var14;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var9.marginTop = var14;
    var14 = var5[var10];
    var14 = var11.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var9.paddingTop = var14;
    var9.marginBottom = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.md;
    var9.borderRadius = var13;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_MOD_NORMAL;
    var9.backgroundColor = var13;
    var9.alignItems = var12;
    var3.nuxCard = var9;
    var9 = {
        'position': 'absolute',
        'color': null,
        'top': 16,
        'right': 16
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_DEFAULT;
    var9.color = var12;
    var3.nuxCloseContainer = var9;
    var9 = {
        'width': '100%',
        'backgroundColor': null,
        'alignItems': 'center',
        'padding': 16
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWEST;
    var9.backgroundColor = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderBottomLeftRadius = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9.borderBottomRightRadius = var10;
    var3.nuxHeader = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginBottom': 8
    };
    var3.nuxHeaderText = var9;
    var9 = {
        'textAlign': 'center',
        'marginBottom': 4
    };
    var3.nuxBody = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot17 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun77975: for (var _fun77975_ip = 0;;) switch (_fun77975_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.channel;
                var _closure2_slot0 = var11;
                var0 = var0.onChannelClick;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot17;
                var3 = undefined;
                var16 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 17;
                var0 = var5[var0];
                var7 = var1.bind(var3)(var0);
                var6 = var7.useStateFromStores;
                var0 = _closure1_slot11;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var4
                    var3 = _closure1_slot11;
                    var2 = var3.isChannelOptedIn;
                    var0 = _closure2_slot0;
                    var1 = var0.guild_id;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var17 = var6.bind(var7)(var2, var0);
                var2 = var11.id;
                var0 = 'null';
                var9 = var0 === var2;
                var2 = _closure1_slot14;
                var0 = 24;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var5 = var16.categoryContainer;
                var0.style = var5;
                var4 = function() {
                    var4 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var3 = var0.guild_id;
                    var2 = var0.id;
                    var1 = var0.id;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var0.onPress = var4;
                var12 = 'checkbox';
                var4 = var12;
                if (!var9) {
                    _fun77975_ip = 159;
                    continue _fun77975
                }
            case 155:
                var4 = 'text';
            case 159:
                var0.accessibilityRole = var4;
                var4 = undefined;
                if (var9) {
                    _fun77975_ip = 178;
                    continue _fun77975
                }
            case 168:
                var5 = {};
                var5.checked = var17;
                var4 = var5;
            case 178:
                var0.accessibilityState = var4;
                var6 = _closure1_slot15;
                var5 = _closure1_slot16;
                var4 = {};
                var10 = _closure1_slot14;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var13 = 28;
                var7 = var7[var13];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'lineClamp': 1,
                    'variant': 'text-xs/bold',
                    'color': 'text-muted'
                };
                var15 = var11.name;
                var11 = var15.toUpperCase;
                var11 = var11.bind(var15)();
                var7.children = var11;
                var8 = var10.bind(var3)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var8 = null;
                if (var9) {
                    _fun77975_ip = 487;
                    continue _fun77975
                }
            case 277:
                var11 = _closure1_slot15;
                var10 = _closure1_slot5;
                var9 = {};
                var15 = var16.selectAllContainer;
                var9.style = var15;
                var9.accessibilityRole = var12;
                var12 = {};
                var12.checked = var17;
                var9.accessibilityState = var12;
                var15 = _closure1_slot14;
                var12 = {};
                var16 = var16.selectAllCheckbox;
                var12.style = var16;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var14 = 30;
                var14 = var20[var14];
                var14 = var19.bind(var3)(var14);
                var16 = var14.FormCheckbox;
                var14 = {};
                var14.checked = var17;
                var14 = var15.bind(var3)(var16, var14);
                var12.children = var14;
                var14 = var15.bind(var3)(var10, var12);
                var12 = new Array(2);
                var12[0] = var14;
                var13 = var20[var13];
                var13 = var19.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'variant': 'text-xs/semibold',
                    'color': 'interactive-text-default'
                };
                var16 = 29;
                var17 = var20[var16];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var20[var16];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.mSQwnW;
                var16 = var17.bind(var18)(var16);
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[1] = var13;
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 487:
                var7[1] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot18 = var3;
    var6 = var7.memo;
    var3 = function(arg0) { // Environment: var1
        _fun77978: for (var _fun77978_ip = 0;;) switch (_fun77978_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.channel;
                var _closure2_slot0 = var17;
                var11 = var0.guild;
                var _closure2_slot1 = var11;
                var10 = var0.isFirst;
                var9 = var0.isLast;
                var6 = var0.forceChecked;
                var0 = var0.onChannelClick;
                var _closure2_slot2 = var0;
                var0 = _closure1_slot17;
                var4 = undefined;
                var25 = var0.bind(var4)();
                var1 = _closure1_slot4;
                var0 = var1.useState;
                var16 = 0;
                var2 = var0.bind(var1)(var16);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var4)(var2, var0);
                var26 = var1[var16];
                var0 = 1;
                var0 = var1[var0];
                var _closure2_slot3 = var0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 17;
                var0 = var3[var1];
                var13 = var2.bind(var4)(var0);
                var12 = var13.useStateFromStores;
                var0 = _closure1_slot11;
                var7 = new Array(1);
                var7[0] = var0;
                var5 = function() { // Environment: var8
                    var3 = _closure1_slot11;
                    var2 = var3.isChannelOptedIn;
                    var0 = _closure2_slot0;
                    var1 = var0.guild_id;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var5 = var12.bind(var13)(var7, var5);
                var7 = var3[var1];
                var15 = var2.bind(var4)(var7);
                var14 = var15.useStateFromStores;
                var7 = _closure1_slot7;
                var13 = new Array(1);
                var13[0] = var7;
                var7 = var17.id;
                var12 = new Array(2);
                var12[0] = var7;
                var12[1] = var11;
                var7 = function() { // Environment: var8
                    _fun77980: for (var _fun77980_ip = 0;;) switch (_fun77980_ip) {
                        case 0:
                            var3 = _closure1_slot7;
                            var2 = var3.shouldIndicateNewChannel;
                            var4 = _closure2_slot1;
                            var1 = null;
                            var4 = var1 == var4;
                            var1 = undefined;
                            if (var4) {
                                _fun77980_ip = 40;
                                continue _fun77980
                            }
                        case 31:
                            var4 = _closure2_slot1;
                            var1 = var4.id;
                        case 40:
                            var0 = _closure2_slot0;
                            var0 = var0.id;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var15 = var14.bind(var15)(var13, var7, var12);
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useStateFromStores;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var8
                    _fun77981: for (var _fun77981_ip = 0;;) switch (_fun77981_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = var0.parent_id;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun77981_ip = 56;
                                continue _fun77981
                            }
                        case 22:
                            var4 = _closure1_slot11;
                            var3 = var4.isChannelOptedIn;
                            var1 = _closure2_slot0;
                            var2 = var1.guild_id;
                            var1 = var1.parent_id;
                            var0 = var3.bind(var4)(var2, var1);
                        case 56:
                            return var0;
                    }
                };
                var7 = var2.bind(var3)(var1, var0);
                var21 = var17.topic;
                var0 = null;
                var1 = var0 != var21;
                if (!var1) {
                    _fun77978_ip = 274;
                    continue _fun77978
                }
            case 265:
                var2 = var21.length;
                var1 = var16 !== var2;
            case 274:
                if (var1) {
                    _fun77978_ip = 287;
                    continue _fun77978
                }
            case 277:
                var2 = var17.isGuildVocal;
                var1 = var2.bind(var17)();
            case 287:
                if (var1) {
                    _fun77978_ip = 326;
                    continue _fun77978
                }
            case 290:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 18;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.getActiveAgoTimestamp;
                var1 = var17.id;
                var21 = var2.bind(var3)(var1);
            case 326:
                var12 = _closure1_slot4;
                var3 = var12.useCallback;
                var2 = function(arg0) { // Environment: var8
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var2 = _closure2_slot3;
                    var1 = var0.width;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var23 = var3.bind(var12)(var2, var1);
                if (!(var0 != var11)) {
                    _fun77978_ip = 1089;
                    continue _fun77978
                }
            case 359:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 31;
                var12 = var3[var1];
                var13 = var2.bind(var4)(var12);
                var12 = var13.getChannelIconWithGuild;
                var22 = var12.bind(var13)(var17, var11);
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.getChannelIconComponent;
                var1 = {};
                var13 = var0 == var11;
                var12 = undefined;
                if (var13) {
                    _fun77978_ip = 423;
                    continue _fun77978
                }
            case 417:
                var12 = var11.rulesChannelId;
            case 423:
                var11 = var17.id;
                var11 = var12 === var11;
                var1.isRulesChannel = var11;
                var20 = var2.bind(var3)(var17, var1);
                var3 = _closure1_slot14;
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 32;
                var1 = var11[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.TableCheckboxRow;
                var1 = {};
                var1.start = var10;
                var1.end = var9;
                var1.disabled = var7;
                var11 = _closure1_slot15;
                var10 = _closure1_slot5;
                var9 = {};
                var12 = var25.channelText;
                var9.style = var12;
                var12 = {};
                var13 = var25.channelNameContainer;
                var12.style = var13;
                if (!(var0 == var20)) {
                    _fun77978_ip = 596;
                    continue _fun77978
                }
            case 523:
                var19 = _closure1_slot14;
                var27 = _closure1_slot1;
                var28 = _closure1_slot2;
                var24 = 33;
                var13 = var28[var24];
                var14 = var27.bind(var4)(var13);
                var13 = {};
                var24 = var28[var24];
                var24 = var27.bind(var4)(var24);
                var24 = var24.Sizes;
                var24 = var24.REFRESH_SMALL_16;
                var13.size = var24;
                var24 = var25.channelIcon;
                var13.style = var24;
                var13.source = var22;
                var14 = var19.bind(var4)(var14, var13);
                _fun77978_ip = 626;
                continue _fun77978;
            case 596:
                var19 = _closure1_slot14;
                var13 = {};
                var22 = var25.channelIcon;
                var13.style = var22;
                var22 = 'xs';
                var13.size = var22;
                var14 = var19.bind(var4)(var20, var13);
            case 626:
                var13 = new Array(3);
                var13[0] = var14;
                var22 = _closure1_slot14;
                var20 = _closure1_slot0;
                var19 = _closure1_slot2;
                var14 = 28;
                var19 = var19[var14];
                var19 = var20.bind(var4)(var19);
                var20 = var19.Text;
                var19 = {
                    'lineClamp': 1,
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'interactive-text-active'
                };
                var27 = undefined;
                if (!var15) {
                    _fun77978_ip = 699;
                    continue _fun77978
                }
            case 682:
                var24 = {};
                var28 = 8;
                var28 = var26 + var28;
                var24.marginRight = var28;
                var27 = var24;
            case 699:
                var24 = new Array(1);
                var24[0] = var27;
                var19.style = var24;
                var24 = var17.name;
                var19.children = var24;
                var19 = var22.bind(var4)(var20, var19);
                var13[1] = var19;
                if (!var15) {
                    _fun77978_ip = 898;
                    continue _fun77978
                }
            case 738:
                var22 = _closure1_slot14;
                var20 = _closure1_slot5;
                var19 = {};
                var24 = {};
                var26 = -var26;
                var24.marginLeft = var26;
                var19.style = var24;
                var19.onLayout = var23;
                var29 = _closure1_slot0;
                var30 = _closure1_slot2;
                var26 = 34;
                var23 = var30[var26];
                var23 = var29.bind(var4)(var23);
                var24 = var23.TextBadge;
                var23 = {};
                var26 = var30[var26];
                var26 = var29.bind(var4)(var26);
                var26 = var26.BadgeColors;
                var26 = var26.BRAND;
                var23.color = var26;
                var26 = 29;
                var27 = var30[var26];
                var27 = var29.bind(var4)(var27);
                var28 = var27.intl;
                var27 = var28.string;
                var26 = var30[var26];
                var26 = var29.bind(var4)(var26);
                var26 = var26.t;
                var26 = var26.y2b7CA;
                var26 = var27.bind(var28)(var26);
                var23.text = var26;
                var25 = var25.newBadge;
                var23.textStyle = var25;
                var23 = var22.bind(var4)(var24, var23);
                var19.children = var23;
                var15 = var22.bind(var4)(var20, var19);
            case 898:
                var13[2] = var15;
                var12.children = var13;
                var13 = var11.bind(var4)(var10, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var15 = var0 != var21;
                var13 = null;
                if (!var15) {
                    _fun77978_ip = 1035;
                    continue _fun77978
                }
            case 929:
                var15 = var21.length;
                var15 = var15 > var16;
                var13 = null;
                if (!var15) {
                    _fun77978_ip = 1035;
                    continue _fun77978
                }
            case 943:
                var16 = _closure1_slot14;
                var15 = _closure1_slot0;
                var20 = _closure1_slot2;
                var14 = var20[var14];
                var14 = var15.bind(var4)(var14);
                var15 = var14.Text;
                var14 = {
                    'lineClamp': 1,
                    'variant': 'text-xs/normal',
                    'color': 'text-muted'
                };
                var19 = _closure1_slot1;
                var18 = 35;
                var18 = var20[var18];
                var20 = var19.bind(var4)(var18);
                var19 = var20.parseTopic;
                var18 = {};
                var17 = var17.id;
                var18.channelId = var17;
                var17 = true;
                var17 = var19.bind(var20)(var21, var17, var18);
                var14.children = var17;
                var13 = var16.bind(var4)(var15, var14);
            case 1035:
                var12[1] = var13;
                var9.children = var12;
                var9 = var11.bind(var4)(var10, var9);
                var1.label = var9;
                var8 = function() {
                    var4 = _closure2_slot2;
                    var1 = _closure2_slot1;
                    var3 = var1.id;
                    var0 = _closure2_slot0;
                    var2 = var0.id;
                    var1 = var0.parent_id;
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var1.onPress = var8;
                if (var5) {
                    _fun77978_ip = 1070;
                    continue _fun77978
                }
            case 1067:
                var5 = var7;
            case 1070:
                if (var5) {
                    _fun77978_ip = 1076;
                    continue _fun77978
                }
            case 1073:
                var5 = var6;
            case 1076:
                var1.checked = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1089:
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot19 = var3;
    var3 = 36;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/opt_in_channels/native/ChannelBrowser.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun77984: for (var _fun77984_ip = 0;;) switch (_fun77984_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.guildId;
                var _closure2_slot0 = var5;
                var0 = _closure1_slot17;
                var3 = undefined;
                var24 = var0.bind(var3)();
                var4 = _closure1_slot4;
                var1 = var4.useState;
                var0 = '';
                var2 = var1.bind(var4)(var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var0 = 0;
                var30 = var1[var0];
                var0 = 1;
                var0 = var1[var0];
                var _closure2_slot1 = var0;
                var1 = _closure1_slot1;
                var12 = _closure1_slot2;
                var0 = 15;
                var0 = var12[var0];
                var2 = var1.bind(var3)(var0);
                var0 = {};
                var6 = true;
                var0.includeKeyboardHeight = var6;
                var0 = var2.bind(var3)(var0);
                var10 = var0.insets;
                var0 = 16;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)(var5);
                var0 = var0.onChannelClick;
                var _closure2_slot2 = var0;
                var6 = _closure1_slot0;
                var1 = 17;
                var2 = var12[var1];
                var11 = var6.bind(var3)(var2);
                var9 = var11.useStateFromStores;
                var2 = _closure1_slot10;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var18
                    var2 = _closure1_slot10;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var9.bind(var11)(var7, var2);
                var _closure2_slot3 = var7;
                var2 = var12[var1];
                var13 = var6.bind(var3)(var2);
                var11 = var13.useStateFromStores;
                var2 = _closure1_slot8;
                var9 = new Array(1);
                var9[0] = var2;
                var2 = function() { // Environment: var18
                    var2 = _closure1_slot8;
                    var1 = var2.getCategories;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var11.bind(var13)(var9, var2);
                var1 = var12[var1];
                var11 = var6.bind(var3)(var1);
                var9 = var11.useStateFromStores;
                var1 = _closure1_slot9;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var18
                    var2 = _closure1_slot9;
                    var1 = var2.getChannels;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var31 = var9.bind(var11)(var2, var1);
                var1 = 18;
                var2 = var12[var1];
                var9 = var6.bind(var3)(var2);
                var2 = var9.useFilterCategoriesByQuery;
                var34 = var9;
                var33 = var5;
                var32 = var13;
                var11 = var34[var2](var33, var32, var31, var30, var29);
                var _closure2_slot4 = var11;
                var2 = 19;
                var2 = var12[var2];
                var13 = var6.bind(var3)(var2);
                var9 = var13.UNSAFE_useIsDismissibleContentDismissed;
                var2 = 20;
                var2 = var12[var2];
                var2 = var6.bind(var3)(var2);
                var2 = var2.DismissibleContent;
                var2 = var2.CHANNEL_BROWSER_NUX;
                var13 = var9.bind(var13)(var2);
                var1 = var12[var1];
                var9 = var6.bind(var3)(var1);
                var2 = var9.useChannelBrowserSections;
                var1 = 64;
                var1 = var2.bind(var9)(var5, var11, var1);
                var _closure2_slot5 = var1;
                var9 = var4.useMemo;
                var2 = new Array(2);
                var2[0] = var11;
                var2[1] = var1;
                var1 = function() { // Environment: var18
                    var0 = new Array(0);
                    var _closure3_slot0 = var0;
                    var3 = _closure2_slot5;
                    var2 = var3.forEach;
                    var1 = function(arg0, arg1) { // Environment: var1
                        _fun77989: for (var _fun77989_ip = 0;;) switch (_fun77989_ip) {
                            case 0:
                                var10 = arg0;
                                var9 = arg1;
                                var0 = var10.rowCount;
                                var8 = 0;
                                if (!(var0 > var8)) {
                                    _fun77989_ip = 217;
                                    continue _fun77989
                                }
                            case 21:
                                var0 = _closure2_slot4;
                                var0 = var0._categories;
                                var0 = var0[var9];
                                var6 = var0.channel;
                                var2 = _closure3_slot0;
                                var1 = var2.push;
                                var0 = {
                                    'isSection': true,
                                    'section': null,
                                    'row': 4294967295,
                                    'channel': null,
                                    'isLast': false
                                };
                                var0.section = var9;
                                var0.channel = var6;
                                var4 = false;
                                var0 = var1.bind(var2)(var0);
                                var0 = var10.rowCount;
                                var0 = var8 < var0;
                                var3 = 1;
                                var2 = null;
                                var8 = 0;
                                if (!var0) {
                                    _fun77989_ip = 217;
                                    continue _fun77989
                                }
                            case 108:
                                var12 = _closure3_slot0;
                                var11 = var12.push;
                                var0 = {};
                                var0.isSection = var4;
                                var0.section = var9;
                                var0.row = var8;
                                var14 = _closure2_slot4;
                                var13 = var6.id;
                                var13 = var14[var13];
                                var14 = var13[var8];
                                var15 = var2 == var14;
                                var13 = undefined;
                                if (var15) {
                                    _fun77989_ip = 164;
                                    continue _fun77989
                                }
                            case 159:
                                var13 = var14.channel;
                            case 164:
                                var0.channel = var13;
                                var14 = _closure2_slot4;
                                var13 = var6.id;
                                var13 = var14[var13];
                                var13 = var13.length;
                                var13 = var13 - var3;
                                var13 = var8 >= var13;
                                var0.isLast = var13;
                                var0 = var11.bind(var12)(var0);
                                var8 = var8 + 1;
                                var0 = var10.rowCount;
                                if (var8 < var0) {
                                    _fun77989_ip = 108;
                                    continue _fun77989
                                }
                            case 217:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var9 = var9.bind(var4)(var1, var2);
                var1 = 21;
                var1 = var12[var1];
                var2 = var6.bind(var3)(var1);
                var1 = var2.hasNotSetUpChannelOptIn;
                var5 = var1.bind(var2)(var5);
                var _closure2_slot6 = var5;
                var2 = var4.useEffect;
                var1 = function() { // Environment: var18
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 19;
                    var1 = var6[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
                    var1 = 20;
                    var1 = var6[var1];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.DismissibleContent;
                    var2 = var1.CHANNEL_BROWSER_NEW_BADGE_NUX;
                    var1 = {};
                    var5 = _closure1_slot13;
                    var5 = var5.DISMISS;
                    var1.dismissAction = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var1 = var2.bind(var4)(var1);
                var2 = var4.useCallback;
                var1 = new Array(3);
                var1[0] = var7;
                var1[1] = var5;
                var1[2] = var0;
                var0 = function(arg0) { // Environment: var18
                    _fun77991: for (var _fun77991_ip = 0;;) switch (_fun77991_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.item;
                            var1 = var0.isSection;
                            var9 = var0.row;
                            var4 = var0.isLast;
                            var2 = var0.channel;
                            var0 = null;
                            var3 = var0 == var2;
                            if (var3) {
                                _fun77991_ip = 160;
                                continue _fun77991
                            }
                        case 40:
                            var6 = _closure1_slot14;
                            if (var1) {
                                _fun77991_ip = 121;
                                continue _fun77991
                            }
                        case 50:
                            var7 = _closure1_slot19;
                            var5 = {};
                            var5.channel = var2;
                            var8 = _closure2_slot3;
                            var5.guild = var8;
                            var8 = 0;
                            var8 = var8 === var9;
                            var5.isFirst = var8;
                            var5.isLast = var4;
                            var4 = _closure2_slot6;
                            var5.forceChecked = var4;
                            var1 = _closure2_slot2;
                            var5.onChannelClick = var1;
                            var4 = var2.id;
                            var1 = undefined;
                            var1 = var6.bind(var1)(var7, var5, var4);
                            _fun77991_ip = 157;
                            continue _fun77991;
                        case 121:
                            var5 = _closure1_slot18;
                            var4 = {};
                            var4.channel = var2;
                            var3 = _closure2_slot2;
                            var4.onChannelClick = var3;
                            var3 = var2.id;
                            var2 = undefined;
                            var1 = var6.bind(var2)(var5, var4, var3);
                        case 157:
                            var0 = var1;
                        case 160:
                            return var0;
                    }
                };
                var11 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot15;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var24.container;
                var0.style = var4;
                var7 = _closure1_slot14;
                var4 = {};
                var5 = var24.header;
                var4.style = var5;
                var5 = 22;
                var5 = var12[var5];
                var5 = var6.bind(var3)(var5);
                var14 = var5.SearchField;
                var5 = {};
                var15 = 'md';
                var5.size = var15;
                var15 = function arg0() {
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var5.onChange = var15;
                var5 = var7.bind(var3)(var14, var5);
                var4.children = var5;
                var5 = var7.bind(var3)(var1, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 23;
                var5 = var12[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.FlashList;
                var5 = {};
                var12 = null;
                if (var13) {
                    _fun77984_ip = 1131;
                    continue _fun77984
                }
            case 615:
                var15 = _closure1_slot15;
                var14 = _closure1_slot5;
                var13 = {};
                var16 = var24.nuxCard;
                var13.style = var16;
                var21 = _closure1_slot14;
                var23 = _closure1_slot0;
                var26 = _closure1_slot2;
                var16 = 24;
                var16 = var26[var16];
                var16 = var23.bind(var3)(var16);
                var17 = var16.PressableOpacity;
                var16 = {};
                var18 = function() {
                    var2 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 19;
                    var1 = var6[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.UNSAFE_markDismissibleContentAsDismissed;
                    var1 = 20;
                    var1 = var6[var1];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.DismissibleContent;
                    var2 = var1.CHANNEL_BROWSER_NUX;
                    var1 = {};
                    var5 = _closure1_slot13;
                    var5 = var5.DISMISS;
                    var1.dismissAction = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var16.onPress = var18;
                var18 = var24.nuxCloseContainer;
                var16.style = var18;
                var18 = 25;
                var18 = var26[var18];
                var18 = var23.bind(var3)(var18);
                var19 = var18.CircleXIcon;
                var18 = {};
                var18 = var21.bind(var3)(var19, var18);
                var16.children = var18;
                var17 = var21.bind(var3)(var17, var16);
                var16 = new Array(3);
                var16[0] = var17;
                var20 = _closure1_slot1;
                var17 = 26;
                var17 = var26[var17];
                var18 = var20.bind(var3)(var17);
                var17 = {};
                var19 = 27;
                var19 = var26[var19];
                var19 = var20.bind(var3)(var19);
                var17.source = var19;
                var17 = var21.bind(var3)(var18, var17);
                var16[1] = var17;
                var17 = {};
                var18 = var24.nuxHeader;
                var17.style = var18;
                var18 = {};
                var19 = var24.nuxHeaderText;
                var18.style = var19;
                var19 = 28;
                var20 = var26[var19];
                var20 = var23.bind(var3)(var20);
                var25 = var20.Text;
                var20 = {
                    'variant': 'heading-lg/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var22 = 29;
                var27 = var26[var22];
                var27 = var23.bind(var3)(var27);
                var29 = var27.intl;
                var28 = var29.string;
                var27 = var26[var22];
                var27 = var23.bind(var3)(var27);
                var27 = var27.t;
                var27 = var27.utqWEC;
                var27 = var28.bind(var29)(var27);
                var20.children = var27;
                var20 = var21.bind(var3)(var25, var20);
                var18.children = var20;
                var20 = var21.bind(var3)(var14, var18);
                var18 = new Array(3);
                var18[0] = var20;
                var20 = var26[var19];
                var20 = var23.bind(var3)(var20);
                var25 = var20.Text;
                var20 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-default'
                };
                var27 = var24.nuxBody;
                var20.style = var27;
                var27 = var26[var22];
                var27 = var23.bind(var3)(var27);
                var29 = var27.intl;
                var28 = var29.string;
                var27 = var26[var22];
                var27 = var23.bind(var3)(var27);
                var27 = var27.t;
                var27 = var27["+9etcM"];
                var27 = var28.bind(var29)(var27);
                var20.children = var27;
                var20 = var21.bind(var3)(var25, var20);
                var18[1] = var20;
                var19 = var26[var19];
                var19 = var23.bind(var3)(var19);
                var20 = var19.Text;
                var19 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-default'
                };
                var24 = var24.nuxBody;
                var19.style = var24;
                var24 = var26[var22];
                var24 = var23.bind(var3)(var24);
                var25 = var24.intl;
                var24 = var25.format;
                var22 = var26[var22];
                var22 = var23.bind(var3)(var22);
                var22 = var22.t;
                var23 = var22.Z0axjk;
                var22 = {};
                var22 = var24.bind(var25)(var23, var22);
                var19.children = var22;
                var19 = var21.bind(var3)(var20, var19);
                var18[2] = var19;
                var17.children = var18;
                var17 = var15.bind(var3)(var14, var17);
                var16[2] = var17;
                var13.children = var16;
                var12 = var15.bind(var3)(var14, var13);
            case 1131:
                var5.ListHeaderComponent = var12;
                var16 = _closure1_slot0;
                var12 = _closure1_slot2;
                var13 = 29;
                var14 = var12[var13];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var12[var13];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.et6wav;
                var13 = var14.bind(var15)(var13);
                var5.accessibilityLabel = var13;
                var5.renderItem = var11;
                var5.data = var9;
                var11 = _closure1_slot6;
                var9 = _closure1_slot12;
                var9 = var11 + var9;
                var5.estimatedItemSize = var9;
                var9 = {};
                var14 = var10.bottom;
                var11 = _closure1_slot1;
                var10 = 14;
                var13 = var12[var10];
                var13 = var11.bind(var3)(var13);
                var13 = var13.spacing;
                var13 = var13.PX_16;
                var13 = var14 + var13;
                var9.paddingBottom = var13;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var10 = var10.spacing;
                var10 = var10.PX_16;
                var9.paddingHorizontal = var10;
                var5.contentContainerStyle = var9;
                var8 = _closure1_slot20;
                var5.keyExtractor = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4865, 4569, 4571, 1662, 1410, 4299, 660, 4865, 1369, 33, 1297, 671, 4888, 9883, 566, 9885, 3203, 1358, 9876, 7004, 5748, 4897, 5368, 4699, 9887, 3932, 1234, 5435, 4802, 8766, 4077, 8269, 4776, 2]);