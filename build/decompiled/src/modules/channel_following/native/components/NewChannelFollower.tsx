// modules/channel_following/native/components/NewChannelFollower.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.ImageBackground;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var6 = var5[var3];
    var6 = var11.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AbortCodes;
    var _closure1_slot13 = var6;
    var6 = var3.ChannelTypes;
    var _closure1_slot14 = var6;
    var3 = var3.Permissions;
    var _closure1_slot15 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot16 = var6;
    var3 = var3.jsxs;
    var _closure1_slot17 = var3;
    var3 = 10;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {
        'flex': 1,
        'flexDirection': 'column',
        'alignItems': 'stretch',
        'paddingHorizontal': 16,
        'paddingVertical': 24
    };
    var6.container = var3;
    var3 = {
        'flex': 1,
        'flexDirection': 'row',
        'justifyContent': 'center',
        'alignItems': 'center',
        'height': 96
    };
    var6.header = var3;
    var3 = 40;
    var9 = {
        'width': 40,
        'marginRight': 16
    };
    var6.headerGuildIcon = var9;
    var9 = {};
    var10 = 11;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var9.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var12;
    var12 = 32;
    var9.height = var12;
    var6.headerChannelContainer = var9;
    var9 = {
        'flex': 1,
        'flexDirection': 'row',
        'minWidth': 160,
        'paddingHorizontal': 8,
        'paddingVertical': 6
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var9.borderRadius = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_BACKGROUND_SELECTED;
    var9.backgroundColor = var12;
    var6.headerChannel = var9;
    var9 = {
        'height': 20,
        'width': 20,
        'marginRight': 8,
        'opacity': 0.6
    };
    var6.headerChannelIcon = var9;
    var9 = {
        'flex': 1,
        'textAlign': 'center',
        'marginBottom': 8
    };
    var6.ctaHeader = var9;
    var9 = {
        'flex': 1,
        'textAlign': 'center',
        'marginBottom': 8
    };
    var6.ctaSubhead = var9;
    var9 = {
        'flex': 1,
        'fontSize': 14,
        'marginTop': 16,
        'marginBottom': 32
    };
    var6.helpText = var9;
    var9 = {
        'flex': 1,
        'fontSize': 14,
        'marginTop': 4294967280,
        'marginBottom': 16
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.RED_400;
    var9.color = var10;
    var6.errorText = var9;
    var9 = {
        'marginTop': 16,
        'marginBottom': 8
    };
    var6.ctaButton = var9;
    var9 = {
        'height': 16,
        'width': 16,
        'opacity': 0.6
    };
    var6.channelIcon = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot18 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_following/native/components/NewChannelFollower.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun76547: for (var _fun76547_ip = 0;;) switch (_fun76547_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.sourceGuildId;
                var _closure2_slot0 = var0;
                var0 = var1.sourceChannelId;
                var _closure2_slot1 = var0;
                var29 = var1.targetGuildId;
                var _closure2_slot2 = var29;
                var0 = var1.targetChannelId;
                var _closure2_slot3 = var0;
                var2 = var1.reopenActionSheetWithTarget;
                var _closure2_slot4 = var2;
                var21 = var1.onCancel;
                var1 = var1.onSuccess;
                var _closure2_slot5 = var1;
                var3 = undefined;
                var _closure2_slot10 = var3;
                var1 = _closure1_slot18;
                var33 = var1.bind(var3)();
                var8 = _closure1_slot4;
                var2 = var8.useState;
                var1 = false;
                var1 = var2.bind(var8)(var1);
                var6 = _closure1_slot3;
                var5 = 2;
                var1 = var6.bind(var3)(var1, var5);
                var4 = 0;
                var24 = var1[var4];
                var2 = 1;
                var1 = var1[var2];
                var _closure2_slot6 = var1;
                var1 = var8.useState;
                var10 = null;
                var1 = var1.bind(var8)(var10);
                var1 = var6.bind(var3)(var1, var5);
                var17 = var1[var4];
                var1 = var1[var2];
                var _closure2_slot7 = var1;
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 12;
                var1 = var6[var1];
                var2 = var9.bind(var3)(var1);
                var1 = var2.useBottomSheetRef;
                var1 = var1.bind(var2)();
                var4 = var1.bottomSheetRef;
                var _closure2_slot8 = var4;
                var8 = var1.bottomSheetClose;
                var5 = _closure1_slot1;
                var1 = 13;
                var1 = var6[var1];
                var1 = var5.bind(var3)(var1);
                var2 = var1.bind(var3)();
                var1 = 14;
                var11 = var6[var1];
                var14 = var9.bind(var3)(var11);
                var13 = var14.useStateFromStoresObject;
                var11 = _closure1_slot10;
                var12 = new Array(1);
                var12[0] = var11;
                var11 = function() { // Environment: var23
                    var0 = {};
                    var3 = _closure1_slot10;
                    var4 = var3.getGuild;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var3)(var2);
                    var0.sourceGuild = var2;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var1);
                    var0.targetGuild = var1;
                    return var0;
                };
                var11 = var13.bind(var14)(var12, var11);
                var19 = var11.sourceGuild;
                var40 = var11.targetGuild;
                var1 = var6[var1];
                var12 = var9.bind(var3)(var1);
                var11 = var12.useStateFromStoresObject;
                var1 = _closure1_slot7;
                var9 = new Array(1);
                var9[0] = var1;
                var1 = function() { // Environment: var23
                    var0 = {};
                    var3 = _closure1_slot7;
                    var4 = var3.getChannel;
                    var2 = _closure2_slot1;
                    var2 = var4.bind(var3)(var2);
                    var0.sourceChannel = var2;
                    var2 = var3.getChannel;
                    var1 = _closure2_slot3;
                    var1 = var2.bind(var3)(var1);
                    var0.targetChannel = var1;
                    return var0;
                };
                var1 = var11.bind(var12)(var9, var1);
                var31 = var1.sourceChannel;
                var36 = var1.targetChannel;
                var _closure2_slot9 = var36;
                var1 = 15;
                var9 = var6[var1];
                var9 = var5.bind(var3)(var9);
                var35 = var9.bind(var3)(var31);
                var1 = var6[var1];
                var1 = var5.bind(var3)(var1);
                var30 = var1.bind(var3)(var36);
                var25 = var10 != var29;
                if (!var25) {
                    _fun76547_ip = 383;
                    continue _fun76547
                }
            case 379:
                var25 = var10 != var0;
            case 383:
                _closure2_slot10 = var25;
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var16 = 16;
                var0 = var5[var16];
                var1 = var1.bind(var3)(var0);
                var0 = function() { // Environment: var23
                    _fun76550: for (var _fun76550_ip = 0;;) switch (_fun76550_ip) {
                        case 0:
                            var1 = _closure2_slot10;
                            if (!var1) {
                                _fun76550_ip = 35;
                                continue _fun76550
                            }
                        case 10:
                            var0 = _closure2_slot8;
                            var1 = var0.current;
                            var0 = null;
                            if (!(var0 != var1)) {
                                _fun76550_ip = 35;
                                continue _fun76550
                            }
                        case 25:
                            var0 = var1.expandActionSheet;
                            var0 = var0.bind(var1)();
                        case 35:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var1.bind(var3)(var0);
                var1 = _closure1_slot0;
                var0 = 17;
                var0 = var5[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.isThemeDark;
                var0 = var0.bind(var1)(var2);
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                if (var0) {
                    _fun76547_ip = 471;
                    continue _fun76547
                }
            case 457:
                var0 = 19;
                var0 = var2[var0];
                var11 = var1.bind(var3)(var0);
                _fun76547_ip = 483;
                continue _fun76547;
            case 471:
                var0 = 18;
                var0 = var2[var0];
                var11 = var1.bind(var3)(var0);
            case 483:
                var2 = _closure1_slot17;
                var5 = _closure1_slot0;
                var26 = _closure1_slot2;
                var0 = 20;
                var0 = var26[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {
                    'handleDisabled': true,
                    'startExpanded': true,
                    'scrollable': true
                };
                var18 = true;
                var0.ref = var4;
                var4 = 21;
                var4 = var26[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.BottomSheetScrollView;
                var4 = {};
                var12 = _closure1_slot16;
                var9 = _closure1_slot6;
                var6 = {};
                var6.source = var11;
                var11 = var33.header;
                var6.style = var11;
                var14 = _closure1_slot5;
                var13 = {};
                var11 = var33.header;
                var13.style = var11;
                var27 = _closure1_slot1;
                var41 = 22;
                var11 = var26[var41];
                var15 = var27.bind(var3)(var11);
                var11 = {};
                var20 = var33.headerGuildIcon;
                var11.style = var20;
                var11.guild = var19;
                var11 = var12.bind(var3)(var15, var11);
                var15 = new Array(2);
                var15[0] = var11;
                var19 = {};
                var11 = var33.headerChannelContainer;
                var19.style = var11;
                var20 = {};
                var11 = var33.headerChannel;
                var20.style = var11;
                var34 = 23;
                var11 = var26[var34];
                var22 = var27.bind(var3)(var11);
                var11 = {};
                var26 = var26[var34];
                var26 = var27.bind(var3)(var26);
                var26 = var26.Sizes;
                var26 = var26.CUSTOM;
                var11.size = var26;
                var27 = var10 != var31;
                var26 = null;
                if (!var27) {
                    _fun76547_ip = 740;
                    continue _fun76547
                }
            case 709:
                var28 = _closure1_slot0;
                var32 = _closure1_slot2;
                var27 = 24;
                var27 = var32[var27];
                var28 = var28.bind(var3)(var27);
                var27 = var28.getChannelIcon;
                var26 = var27.bind(var28)(var31);
            case 740:
                var11.source = var26;
                var26 = var33.headerChannelIcon;
                var11.style = var26;
                var11 = var12.bind(var3)(var22, var11);
                var22 = new Array(2);
                var22[0] = var11;
                var26 = _closure1_slot16;
                var28 = _closure1_slot0;
                var27 = _closure1_slot2;
                var11 = 25;
                var31 = var27[var11];
                var31 = var28.bind(var3)(var31);
                var32 = var31.Text;
                var31 = {
                    'lineClamp': 1,
                    'variant': 'text-sm/medium'
                };
                var31.children = var35;
                var31 = var26.bind(var3)(var32, var31);
                var22[1] = var31;
                var20.children = var22;
                var20 = var2.bind(var3)(var14, var20);
                var19.children = var20;
                var19 = var12.bind(var3)(var14, var19);
                var15[1] = var19;
                var13.children = var15;
                var13 = var2.bind(var3)(var14, var13);
                var6.children = var13;
                var9 = var12.bind(var3)(var9, var6);
                var6 = new Array(2);
                var6[0] = var9;
                var13 = _closure1_slot17;
                var12 = _closure1_slot5;
                var9 = {};
                var14 = var33.container;
                var9.style = var14;
                var14 = var27[var11];
                var14 = var28.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {
                    'style': null,
                    'variant': 'heading-lg/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var19 = var33.ctaHeader;
                var14.style = var19;
                var22 = 26;
                var19 = var27[var22];
                var19 = var28.bind(var3)(var19);
                var31 = var19.intl;
                var20 = var31.string;
                var19 = var27[var22];
                var19 = var28.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.mvPFbA;
                var19 = var20.bind(var31)(var19);
                var14.children = var19;
                var15 = var26.bind(var3)(var15, var14);
                var14 = new Array(6);
                var14[0] = var15;
                var11 = var27[var11];
                var11 = var28.bind(var3)(var11);
                var15 = var11.Text;
                var11 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var19 = var33.ctaSubhead;
                var11.style = var19;
                var19 = var27[var22];
                var19 = var28.bind(var3)(var19);
                var31 = var19.intl;
                var20 = var31.string;
                var19 = var27[var22];
                var19 = var28.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.kbpkxJ;
                var19 = var20.bind(var31)(var19);
                var11.children = var19;
                var11 = var26.bind(var3)(var15, var11);
                var14[1] = var11;
                var11 = 27;
                var11 = var27[var11];
                var11 = var28.bind(var3)(var11);
                var15 = var11.Stack;
                var11 = {};
                var11.spacing = var16;
                var19 = 28;
                var16 = var27[var19];
                var16 = var28.bind(var3)(var16);
                var20 = var16.TableRowGroup;
                var16 = {};
                var31 = var27[var22];
                var31 = var28.bind(var3)(var31);
                var35 = var31.intl;
                var32 = var35.string;
                var31 = var27[var22];
                var31 = var28.bind(var3)(var31);
                var31 = var31.t;
                var31 = var31.xFn72s;
                var31 = var32.bind(var35)(var31);
                var16.title = var31;
                var31 = 29;
                var27 = var27[var31];
                var27 = var28.bind(var3)(var27);
                var28 = var27.TableRow;
                var27 = {};
                if (!(var10 == var40)) {
                    _fun76547_ip = 1273;
                    continue _fun76547
                }
            case 1219:
                var38 = _closure1_slot0;
                var32 = _closure1_slot2;
                var35 = var32[var22];
                var35 = var38.bind(var3)(var35);
                var37 = var35.intl;
                var35 = var37.string;
                var32 = var32[var22];
                var32 = var38.bind(var3)(var32);
                var32 = var32.t;
                var32 = var32.XqMe3N;
                var32 = var35.bind(var37)(var32);
                _fun76547_ip = 1278;
                continue _fun76547;
            case 1273:
                var32 = var40.name;
            case 1278:
                var27.label = var32;
                var35 = var10 != var40;
                var32 = null;
                if (!var35) {
                    _fun76547_ip = 1353;
                    continue _fun76547
                }
            case 1291:
                var38 = _closure1_slot16;
                var37 = _closure1_slot1;
                var39 = _closure1_slot2;
                var35 = var39[var41];
                var37 = var37.bind(var3)(var35);
                var35 = {};
                var35.guild = var40;
                var40 = _closure1_slot0;
                var39 = var39[var41];
                var39 = var40.bind(var3)(var39);
                var39 = var39.GuildIconSizes;
                var39 = var39.XSMALL;
                var35.size = var39;
                var32 = var38.bind(var3)(var37, var35);
            case 1353:
                var27.icon = var32;
                var27.arrow = var18;
                var32 = function() { // Original name: onPress, environment: var23
                    _fun76551: for (var _fun76551_ip = 0;;) switch (_fun76551_ip) {
                        case 0:
                            var3 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var0 = 30;
                            var2 = var11[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var2);
                            var4 = var5.openLazy;
                            var10 = _closure1_slot0;
                            var2 = 32;
                            var2 = var11[var2];
                            var7 = var10.bind(var0)(var2);
                            var2 = 31;
                            var3 = var11[var2];
                            var2 = var11.paths;
                            var3 = var7.bind(var0)(var3, var2);
                            var2 = {};
                            var7 = 26;
                            var8 = var11[var7];
                            var8 = var10.bind(var0)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var7 = var11[var7];
                            var7 = var10.bind(var0)(var7);
                            var7 = var7.t;
                            var7 = var7.etZ9tX;
                            var7 = var8.bind(var9)(var7);
                            var2.title = var7;
                            var7 = _closure1_slot12;
                            var6 = var7.getFlattenedGuildIds;
                            var9 = var6.bind(var7)();
                            var8 = var9.reduce;
                            var6 = global;
                            var6 = var6.Array;
                            var7 = var6.prototype;
                            var7 = Object.create(var7, {
                                constructor: {
                                    value: var6
                                }
                            });
                            var15 = var7;
                            var6 = new var15[var6](var14);
                            var7 = var6 instanceof Object ? var6 : var7;
                            var6 = function(arg0, arg1) { // Environment: var1
                                _fun76552: for (var _fun76552_ip = 0;;) switch (_fun76552_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var4 = _closure1_slot10;
                                        var3 = var4.getGuild;
                                        var1 = arg1;
                                        var3 = var3.bind(var4)(var1);
                                        var1 = null;
                                        var1 = var1 != var3;
                                        if (!var1) {
                                            _fun76552_ip = 58;
                                            continue _fun76552
                                        }
                                    case 32:
                                        var5 = _closure1_slot11;
                                        var4 = var5.can;
                                        var2 = _closure1_slot15;
                                        var2 = var2.MANAGE_WEBHOOKS;
                                        var1 = var4.bind(var5)(var2, var3);
                                    case 58:
                                        if (!var1) {
                                            _fun76552_ip = 91;
                                            continue _fun76552
                                        }
                                    case 61:
                                        var2 = var0.push;
                                        var1 = {};
                                        var4 = var3.name;
                                        var1.label = var4;
                                        var3 = var3.id;
                                        var1.value = var3;
                                        var1 = var2.bind(var0)(var1);
                                    case 91:
                                        return var0;
                                }
                            };
                            var6 = var8.bind(var9)(var6, var7);
                            var2.items = var6;
                            var8 = _closure2_slot2;
                            var6 = null;
                            var8 = var6 != var8;
                            var6 = undefined;
                            if (!var8) {
                                _fun76551_ip = 208;
                                continue _fun76551
                            }
                        case 204:
                            var6 = _closure2_slot2;
                        case 208:
                            var2.selectedItem = var6;
                            var6 = function(arg0) { // Original name: onItemSelect, environment: var1
                                _fun76553: for (var _fun76553_ip = 0;;) switch (_fun76553_ip) {
                                    case 0:
                                        var3 = arg0;
                                        var2 = _closure2_slot4;
                                        var1 = _closure1_slot8;
                                        var0 = var1.getDefaultChannel;
                                        var4 = var0.bind(var1)(var3);
                                        var0 = null;
                                        var5 = var0 == var4;
                                        var0 = undefined;
                                        var1 = undefined;
                                        if (var5) {
                                            _fun76553_ip = 46;
                                            continue _fun76553
                                        }
                                    case 41:
                                        var1 = var4.id;
                                    case 46:
                                        var1 = var2.bind(var0)(var3, var1);
                                        return var0;
                                }
                            };
                            var2.onItemSelect = var6;
                            var1 = function() { // Original name: onClose, environment: var1
                                var3 = _closure2_slot4;
                                var2 = _closure2_slot2;
                                var1 = _closure2_slot3;
                                var0 = undefined;
                                var1 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var2.onClose = var1;
                            var1 = 'NewChannelFollowerGuildPicker';
                            var1 = var4.bind(var5)(var3, var1, var2);
                            return var0;
                    }
                };
                var27.onPress = var32;
                var27 = var26.bind(var3)(var28, var27);
                var16.children = var27;
                var20 = var26.bind(var3)(var20, var16);
                var16 = new Array(2);
                var16[0] = var20;
                var26 = _closure1_slot16;
                var28 = _closure1_slot0;
                var27 = _closure1_slot2;
                var19 = var27[var19];
                var19 = var28.bind(var3)(var19);
                var20 = var19.TableRowGroup;
                var19 = {};
                var32 = var27[var22];
                var32 = var28.bind(var3)(var32);
                var37 = var32.intl;
                var35 = var37.string;
                var32 = var27[var22];
                var32 = var28.bind(var3)(var32);
                var32 = var32.t;
                var32 = var32.PDn2fR;
                var32 = var35.bind(var37)(var32);
                var19.title = var32;
                var27 = var27[var31];
                var27 = var28.bind(var3)(var27);
                var28 = var27.TableRow;
                var27 = {};
                if (!(var10 == var30)) {
                    _fun76547_ip = 1547;
                    continue _fun76547
                }
            case 1495:
                var37 = _closure1_slot0;
                var31 = _closure1_slot2;
                var32 = var31[var22];
                var32 = var37.bind(var3)(var32);
                var35 = var32.intl;
                var32 = var35.string;
                var31 = var31[var22];
                var31 = var37.bind(var3)(var31);
                var31 = var31.t;
                var31 = var31.XqMe3N;
                var30 = var32.bind(var35)(var31);
            case 1547:
                var27.label = var30;
                var29 = var10 == var29;
                var27.disabled = var29;
                var30 = var10 != var36;
                var29 = null;
                if (!var30) {
                    _fun76547_ip = 1663;
                    continue _fun76547
                }
            case 1568:
                var32 = _closure1_slot16;
                var35 = _closure1_slot1;
                var37 = _closure1_slot2;
                var30 = var37[var34];
                var31 = var35.bind(var3)(var30);
                var30 = {};
                var34 = var37[var34];
                var34 = var35.bind(var3)(var34);
                var34 = var34.Sizes;
                var34 = var34.CUSTOM;
                var30.size = var34;
                var35 = _closure1_slot0;
                var34 = 24;
                var34 = var37[var34];
                var35 = var35.bind(var3)(var34);
                var34 = var35.getChannelIcon;
                var34 = var34.bind(var35)(var36);
                var30.source = var34;
                var33 = var33.channelIcon;
                var30.style = var33;
                var29 = var32.bind(var3)(var31, var30);
            case 1663:
                var27.icon = var29;
                var27.arrow = var18;
                var29 = function() { // Original name: onPress, environment: var23
                    _fun76555: for (var _fun76555_ip = 0;;) switch (_fun76555_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var5 = null;
                            if (!(var5 != var0)) {
                                _fun76555_ip = 122;
                                continue _fun76555
                            }
                        case 15:
                            var1 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 33;
                            var0 = var2[var0];
                            var2 = undefined;
                            var1 = var1.bind(var2)(var0);
                            var0 = {};
                            var7 = _closure2_slot2;
                            var0.guildId = var7;
                            var7 = _closure2_slot9;
                            var7 = var5 != var7;
                            var5 = null;
                            if (!var7) {
                                _fun76555_ip = 67;
                                continue _fun76555
                            }
                        case 63:
                            var5 = _closure2_slot9;
                        case 67:
                            var0.selectedChannel = var5;
                            var4 = _closure1_slot9;
                            var0.channelType = var4;
                            var4 = function(arg0) { // Original name: filterFn, environment: var3
                                _fun76556: for (var _fun76556_ip = 0;;) switch (_fun76556_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var4 = var0.channel;
                                        var2 = var4.type;
                                        var0 = _closure1_slot14;
                                        var0 = var0.GUILD_TEXT;
                                        var0 = var2 === var0;
                                        if (!var0) {
                                            _fun76556_ip = 59;
                                            continue _fun76556
                                        }
                                    case 33:
                                        var3 = _closure1_slot11;
                                        var2 = var3.can;
                                        var1 = _closure1_slot15;
                                        var1 = var1.MANAGE_WEBHOOKS;
                                        var0 = var2.bind(var3)(var1, var4);
                                    case 59:
                                        return var0;
                                }
                            };
                            var0.filterFn = var4;
                            var4 = function(arg0) { // Original name: onSelect, environment: var3
                                var3 = _closure2_slot4;
                                var2 = _closure2_slot2;
                                var0 = arg0;
                                var1 = var0.id;
                                var0 = undefined;
                                var1 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var0.onSelect = var4;
                            var3 = function() { // Original name: onClose, environment: var3
                                var3 = _closure2_slot4;
                                var2 = _closure2_slot2;
                                var1 = _closure2_slot3;
                                var0 = undefined;
                                var1 = var3.bind(var0)(var2, var1);
                                return var0;
                            };
                            var0.onClose = var3;
                            var0 = var1.bind(var2)(var0);
                        case 122:
                            var0 = undefined;
                            return var0;
                    }
                };
                var27.onPress = var29;
                var27 = var26.bind(var3)(var28, var27);
                var19.children = var27;
                var19 = var26.bind(var3)(var20, var19);
                var16[1] = var19;
                var11.children = var16;
                var11 = var13.bind(var3)(var15, var11);
                var14[2] = var11;
                var16 = _closure1_slot16;
                var28 = _closure1_slot0;
                var20 = _closure1_slot2;
                var19 = 34;
                var11 = var20[var19];
                var11 = var28.bind(var3)(var11);
                var15 = var11.FormHint;
                var11 = {};
                var11.inset = var18;
                var26 = var20[var22];
                var26 = var28.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var20 = var20[var22];
                var20 = var28.bind(var3)(var20);
                var20 = var20.t;
                var20 = var20.Z0quyN;
                var20 = var26.bind(var27)(var20);
                var11.children = var20;
                var11 = var16.bind(var3)(var15, var11);
                var14[3] = var11;
                var11 = var10 != var17;
                var10 = null;
                if (!var11) {
                    _fun76547_ip = 1867;
                    continue _fun76547
                }
            case 1823:
                var16 = _closure1_slot16;
                var15 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var19];
                var11 = var15.bind(var3)(var11);
                var15 = var11.FormHint;
                var11 = {};
                var11.inset = var18;
                var11.children = var17;
                var10 = var16.bind(var3)(var15, var11);
            case 1867:
                var14[4] = var10;
                var17 = _closure1_slot17;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var15 = 35;
                var15 = var11[var15];
                var15 = var10.bind(var3)(var15);
                var16 = var15.ButtonGroup;
                var15 = {};
                var7 = _closure1_slot16;
                var19 = 36;
                var18 = var11[var19];
                var18 = var10.bind(var3)(var18);
                var20 = var18.Button;
                var18 = {};
                var26 = var11[var22];
                var26 = var10.bind(var3)(var26);
                var28 = var26.intl;
                var27 = var28.string;
                var26 = var11[var22];
                var26 = var10.bind(var3)(var26);
                var26 = var26.t;
                var26 = var26["3aOv+h"];
                var26 = var27.bind(var28)(var26);
                var18.text = var26;
                var25 = !var25;
                var18.disabled = var25;
                var18.loading = var24;
                var23 = function() { // Original name: onPress, environment: var23
                    _fun76559: for (var _fun76559_ip = 0;;) switch (_fun76559_ip) {
                        case 0:
                            var2 = _closure2_slot3;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun76559_ip = 103;
                                continue _fun76559
                            }
                        case 13:
                            var2 = _closure2_slot6;
                            var3 = undefined;
                            var1 = true;
                            var1 = var2.bind(var3)(var1);
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 37;
                            var1 = var4[var1];
                            var4 = var2.bind(var3)(var1);
                            var3 = var4.createChannelFollower;
                            var2 = _closure2_slot3;
                            var1 = _closure2_slot1;
                            var2 = var3.bind(var4)(var2, var1);
                            var1 = var2.then;
                            var0 = _closure2_slot5;
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.catch;
                            var0 = function(arg0) { // Environment: var0
                                _fun76560: for (var _fun76560_ip = 0;;) switch (_fun76560_ip) {
                                    case 0:
                                        var3 = _closure2_slot6;
                                        var0 = undefined;
                                        var1 = false;
                                        var1 = var3.bind(var0)(var1);
                                        var1 = arg0;
                                        var1 = var1.body;
                                        var4 = var1.code;
                                        var3 = _closure1_slot13;
                                        var3 = var3.TOO_MANY_WEBHOOKS;
                                        if (!(var4 !== var3)) {
                                            _fun76560_ip = 114;
                                            continue _fun76560
                                        }
                                    case 46:
                                        var4 = _closure2_slot7;
                                        var7 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var3 = 26;
                                        var5 = var8[var3];
                                        var5 = var7.bind(var0)(var5);
                                        var6 = var5.intl;
                                        var5 = var6.string;
                                        var3 = var8[var3];
                                        var3 = var7.bind(var0)(var3);
                                        var3 = var3.t;
                                        var3 = var3.LgwhuN;
                                        var3 = var5.bind(var6)(var3);
                                        var3 = var4.bind(var0)(var3);
                                        _fun76560_ip = 180;
                                        continue _fun76560;
                                    case 114:
                                        var2 = _closure2_slot7;
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot2;
                                        var1 = 26;
                                        var3 = var6[var1];
                                        var3 = var5.bind(var0)(var3);
                                        var4 = var3.intl;
                                        var3 = var4.string;
                                        var1 = var6[var1];
                                        var1 = var5.bind(var0)(var1);
                                        var1 = var1.t;
                                        var1 = var1["1eZ4aB"];
                                        var1 = var3.bind(var4)(var1);
                                        var1 = var2.bind(var0)(var1);
                                    case 180:
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                        case 103:
                            var0 = undefined;
                            return var0;
                    }
                };
                var18.onPress = var23;
                var20 = var7.bind(var3)(var20, var18);
                var18 = new Array(2);
                var18[0] = var20;
                var19 = var11[var19];
                var19 = var10.bind(var3)(var19);
                var20 = var19.Button;
                var19 = {};
                var23 = var11[var22];
                var23 = var10.bind(var3)(var23);
                var24 = var23.intl;
                var23 = var24.string;
                var22 = var11[var22];
                var22 = var10.bind(var3)(var22);
                var22 = var22.t;
                var22 = var22["ETE/oC"];
                var22 = var23.bind(var24)(var22);
                var19.text = var22;
                var22 = 'secondary';
                var19.variant = var22;
                var19.onPress = var21;
                var19 = var7.bind(var3)(var20, var19);
                var18[1] = var19;
                var15.children = var18;
                var15 = var17.bind(var3)(var16, var15);
                var14[5] = var15;
                var9.children = var14;
                var9 = var13.bind(var3)(var12, var9);
                var6[1] = var9;
                var4.children = var6;
                var5 = var2.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 38;
                var5 = var11[var5];
                var5 = var10.bind(var3)(var5);
                var6 = var5.ActionSheetHeaderBar;
                var5 = {};
                var9 = 39;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.ActionSheetHeaderBarVariants;
                var9 = var9.FLOATING;
                var5.variant = var9;
                var5.onPress = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1372, 1662, 1410, 3050, 4333, 660, 33, 1297, 671, 5683, 3205, 566, 4748, 4056, 3165, 9723, 9724, 4887, 4889, 7353, 4039, 4763, 3895, 1234, 4033, 5320, 4854, 3237, 5334, 1307, 9725, 5335, 6401, 4037, 9566, 5158, 5158, 2]);