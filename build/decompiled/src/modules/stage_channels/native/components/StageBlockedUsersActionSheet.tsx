// modules/stage_channels/native/components/StageBlockedUsersActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: StageBlockedUsersActionSheetHeader, environment: var1
        _fun52914: for (var _fun52914_ip = 0;;) switch (_fun52914_ip) {
            case 0:
                var0 = arg0;
                var14 = var0.blockedUserCount;
                var15 = var0.ignoredUserCount;
                var0 = _closure1_slot11;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot10;
                var1 = _closure1_slot5;
                var0 = 0;
                if (!(var14 > var0)) {
                    _fun52914_ip = 49;
                    continue _fun52914
                }
            case 42:
                if (!(!(var15 > var0))) {
                    _fun52914_ip = 579;
                    continue _fun52914
                }
            case 49:
                if (!(!(var15 > var0))) {
                    _fun52914_ip = 316;
                    continue _fun52914
                }
            case 56:
                var0 = {};
                var4 = var10.header;
                var0.style = var4;
                var8 = _closure1_slot9;
                var11 = _closure1_slot0;
                var16 = _closure1_slot2;
                var5 = 14;
                var4 = var16[var5];
                var4 = var11.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-lg/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var9 = var10.title;
                var4.style = var9;
                var9 = 10;
                var12 = var16[var9];
                var12 = var11.bind(var3)(var12);
                var18 = var12.intl;
                var17 = var18.format;
                var12 = var16[var9];
                var12 = var11.bind(var3)(var12);
                var12 = var12.t;
                var13 = var12.HviVA9;
                var12 = {};
                var12.number = var14;
                var12 = var17.bind(var18)(var13, var12);
                var4.children = var12;
                var6 = var8.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var8 = _closure1_slot9;
                var5 = var16[var5];
                var5 = var11.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var12 = var10.description;
                var5.style = var12;
                var12 = var16[var9];
                var12 = var11.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.format;
                var9 = var16[var9];
                var9 = var11.bind(var3)(var9);
                var9 = var9.t;
                var11 = var9["28qZMU"];
                var9 = {};
                var9.number = var14;
                var9 = var12.bind(var13)(var11, var9);
                var5.children = var9;
                var5 = var8.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                _fun52914_ip = 574;
                continue _fun52914;
            case 316:
                var4 = {};
                var5 = var10.header;
                var4.style = var5;
                var9 = _closure1_slot9;
                var12 = _closure1_slot0;
                var16 = _closure1_slot2;
                var6 = 14;
                var5 = var16[var6];
                var5 = var12.bind(var3)(var5);
                var8 = var5.Text;
                var5 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-lg/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var11 = var10.title;
                var5.style = var11;
                var11 = 10;
                var13 = var16[var11];
                var13 = var12.bind(var3)(var13);
                var18 = var13.intl;
                var17 = var18.format;
                var13 = var16[var11];
                var13 = var12.bind(var3)(var13);
                var13 = var13.t;
                var14 = var13.wvygk8;
                var13 = {};
                var13.number = var15;
                var13 = var17.bind(var18)(var14, var13);
                var5.children = var13;
                var8 = var9.bind(var3)(var8, var5);
                var5 = new Array(2);
                var5[0] = var8;
                var9 = _closure1_slot9;
                var6 = var16[var6];
                var6 = var12.bind(var3)(var6);
                var8 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var13 = var10.description;
                var6.style = var13;
                var13 = var16[var11];
                var13 = var12.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.format;
                var11 = var16[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.t;
                var12 = var11.Ri3o33;
                var11 = {};
                var11.number = var15;
                var11 = var13.bind(var14)(var12, var11);
                var6.children = var11;
                var6 = var9.bind(var3)(var8, var6);
                var5[1] = var6;
                var4.children = var5;
                var0 = var4;
            case 574:
                _fun52914_ip = 821;
                continue _fun52914;
            case 579:
                var4 = {};
                var5 = var10.header;
                var4.style = var5;
                var11 = _closure1_slot9;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 14;
                var5 = var13[var6];
                var5 = var12.bind(var3)(var5);
                var8 = var5.Text;
                var5 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'heading-lg/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var9 = var10.title;
                var5.style = var9;
                var9 = 10;
                var14 = var13[var9];
                var14 = var12.bind(var3)(var14);
                var16 = var14.intl;
                var15 = var16.string;
                var14 = var13[var9];
                var14 = var12.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.Uzdyho;
                var14 = var15.bind(var16)(var14);
                var5.children = var14;
                var8 = var11.bind(var3)(var8, var5);
                var5 = new Array(2);
                var5[0] = var8;
                var8 = _closure1_slot9;
                var6 = var13[var6];
                var6 = var12.bind(var3)(var6);
                var7 = var6.Text;
                var6 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var10 = var10.description;
                var6.style = var10;
                var10 = var13[var9];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9["P/KFXz"];
                var9 = var10.bind(var11)(var9);
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var5[1] = var6;
                var4.children = var5;
                var0 = var4;
            case 821:
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot13 = var0;
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
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.STAGE_BLOCKED_USERS_SHEET_KEY;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot9 = var6;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 16;
    var8.paddingHorizontal = var9;
    var3.container = var8;
    var8 = {};
    var8.padding = var9;
    var3.header = var8;
    var9 = 8;
    var8 = {
        'marginTop': 16,
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var3.title = var8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 16
    };
    var3.description = var8;
    var8 = {};
    var8.marginBottom = var9;
    var3.button = var8;
    var8 = {
        'width': '100%',
        'backgroundColor': null,
        'paddingHorizontal': 16,
        'paddingVertical': 8
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var11;
    var3.buttons = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'flex-start',
        'marginVertical': 8,
        'width': '100%'
    };
    var3.userContainer = var8;
    var8 = {
        'position': 'relative',
        'padding': 8,
        'paddingTop': 0,
        'paddingBottom': 4,
        'marginEnd': 12
    };
    var3.avatarContainer = var8;
    var8 = {};
    var11 = 0.5;
    var8.opacity = var11;
    var3.avatar = var8;
    var8 = {
        'position': 'absolute',
        'top': 4294967292,
        'right': 4,
        'height': 16,
        'width': 16,
        'alignItems': 'center',
        'justifyContent': 'center',
        'borderRadius': 8,
        'borderWidth': 1
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWER;
    var8.borderColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_STRONG;
    var8.backgroundColor = var11;
    var3.iconContainer = var8;
    var8 = {
        'height': 12,
        'width': 12
    };
    var3.icon = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row'
    };
    var3.flex = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.RED_400;
    var8.color = var11;
    var3.blocked = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_DEFAULT;
    var8.color = var9;
    var3.ignored = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot11 = var3;
    var3 = function(arg0) { // Original name: RestrictedUser, environment: var1
        _fun52915: for (var _fun52915_ip = 0;;) switch (_fun52915_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.participant;
                var6 = var0.guildId;
                var0 = var0.channelId;
                var _closure2_slot0 = var0;
                var0 = _closure1_slot11;
                var3 = undefined;
                var20 = var0.bind(var3)();
                var4 = var15.user;
                var _closure2_slot1 = var4;
                var8 = var15.speaker;
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 9;
                var0 = var1[var7];
                var11 = var5.bind(var3)(var0);
                var10 = var11.useStateFromStores;
                var0 = _closure1_slot7;
                var9 = new Array(1);
                var9[0] = var0;
                var0 = function() { // Environment: var2
                    var3 = _closure1_slot7;
                    var2 = var3.isModerator;
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var0 = var10.bind(var11)(var9, var0);
                var7 = var1[var7];
                var10 = var5.bind(var3)(var7);
                var9 = var10.useStateFromStores;
                var11 = _closure1_slot6;
                var7 = new Array(1);
                var7[0] = var11;
                var2 = function() { // Environment: var2
                    var2 = _closure1_slot6;
                    var1 = var2.isBlocked;
                    var0 = _closure2_slot1;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var18 = var9.bind(var10)(var7, var2);
                var2 = var4.getAvatarSource;
                var12 = var2.bind(var4)(var6);
                var23 = 10;
                var2 = var1[var23];
                var2 = var5.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var1 = var1[var23];
                var1 = var5.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.suRApw;
                var1 = var2.bind(var4)(var1);
                if (var8) {
                    _fun52915_ip = 263;
                    continue _fun52915
                }
            case 201:
                var17 = var1;
                if (!var0) {
                    _fun52915_ip = 317;
                    continue _fun52915
                }
            case 207:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = var0[var23];
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var0[var23];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.GMZqSi;
                var17 = var1.bind(var2)(var0);
                _fun52915_ip = 317;
                continue _fun52915;
            case 263:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var1 = var0[var23];
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var0[var23];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.LqMmG2;
                var17 = var1.bind(var2)(var0);
            case 317:
                var2 = _closure1_slot10;
                var1 = _closure1_slot5;
                var0 = {};
                var4 = var20.userContainer;
                var0.style = var4;
                var6 = _closure1_slot10;
                var5 = _closure1_slot5;
                var4 = {};
                var7 = var20.avatarContainer;
                var4.style = var7;
                var10 = _closure1_slot9;
                var9 = _closure1_slot1;
                var14 = _closure1_slot2;
                var11 = 11;
                var7 = var14[var11];
                var9 = var9.bind(var3)(var7);
                var7 = {};
                var7.source = var12;
                var12 = _closure1_slot0;
                var11 = var14[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.AvatarSizes;
                var11 = var11.REFRESH_MEDIUM_32;
                var7.size = var11;
                var11 = var20.avatar;
                var7.style = var11;
                var9 = var10.bind(var3)(var9, var7);
                var7 = new Array(2);
                var7[0] = var9;
                if (!var8) {
                    _fun52915_ip = 568;
                    continue _fun52915
                }
            case 446:
                var11 = _closure1_slot9;
                var10 = _closure1_slot5;
                var9 = {};
                var14 = var20.iconContainer;
                var12 = new Array(1);
                var12[0] = var14;
                var9.style = var12;
                var16 = _closure1_slot9;
                var21 = _closure1_slot1;
                var22 = _closure1_slot2;
                var12 = 12;
                var12 = var22[var12];
                var14 = var21.bind(var3)(var12);
                var12 = {};
                var19 = var20.icon;
                var12.style = var19;
                var19 = 13;
                var19 = var22[var19];
                var19 = var21.bind(var3)(var19);
                var12.source = var19;
                var19 = 8;
                var19 = var22[var19];
                var19 = var21.bind(var3)(var19);
                var19 = var19.unsafe_rawColors;
                var19 = var19.WHITE;
                var12.color = var19;
                var12 = var16.bind(var3)(var14, var12);
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 568:
                var7[1] = var8;
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot10;
                var6 = _closure1_slot5;
                var5 = {};
                var8 = {};
                var9 = var20.flex;
                var8.style = var9;
                var11 = _closure1_slot9;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var16 = 14;
                var9 = var9[var16];
                var9 = var10.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-sm/medium',
                    'color': 'mobile-text-heading-primary'
                };
                var14 = var15.user;
                var12 = var14.toString;
                var12 = var12.bind(var14)();
                var9.children = var12;
                var10 = var11.bind(var3)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var11 = var15.user;
                var10 = var11.hasUniqueUsername;
                var10 = var10.bind(var11)();
                var10 = !var10;
                if (!var10) {
                    _fun52915_ip = 782;
                    continue _fun52915
                }
            case 707:
                var14 = _closure1_slot10;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var16];
                var11 = var12.bind(var3)(var11);
                var12 = var11.Text;
                var11 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var15 = var15.user;
                var19 = var15.discriminator;
                var15 = ['#'];
                var15[1] = var19;
                var11.children = var15;
                var10 = var14.bind(var3)(var12, var11);
            case 782:
                var9[1] = var10;
                var8.children = var9;
                var9 = var7.bind(var3)(var6, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var11 = _closure1_slot10;
                var10 = _closure1_slot5;
                var9 = {};
                var12 = var20.flex;
                var9.style = var12;
                var15 = _closure1_slot9;
                var14 = _closure1_slot0;
                var19 = _closure1_slot2;
                var12 = 15;
                var12 = var19[var12];
                var12 = var14.bind(var3)(var12);
                var14 = var12.LegacyText;
                var12 = {};
                if (var18) {
                    _fun52915_ip = 866;
                    continue _fun52915
                }
            case 858:
                var19 = var20.ignored;
                _fun52915_ip = 872;
                continue _fun52915;
            case 866:
                var19 = var20.blocked;
            case 872:
                var12.style = var19;
                var22 = _closure1_slot0;
                var19 = _closure1_slot2;
                var20 = var19[var23];
                var20 = var22.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var19[var23];
                var19 = var22.bind(var3)(var19);
                var19 = var19.t;
                if (var18) {
                    _fun52915_ip = 933;
                    continue _fun52915
                }
            case 920:
                var18 = var19.tFY5Zb;
                var18 = var20.bind(var21)(var18);
                _fun52915_ip = 946;
                continue _fun52915;
            case 933:
                var19 = var19["4bDptI"];
                var18 = var20.bind(var21)(var19);
            case 946:
                var12.children = var18;
                var14 = var15.bind(var3)(var14, var12);
                var12 = new Array(2);
                var12[0] = var14;
                var15 = _closure1_slot10;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var16];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var16 = [' ', '| '];
                var16[2] = var17;
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[1] = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot12 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/stage_channels/native/components/StageBlockedUsersActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: StageBlockedUsersActionSheet, environment: var1
        var0 = arg0;
        var1 = var0.channel;
        var _closure2_slot0 = var1;
        var0 = var0.onAccept;
        var _closure2_slot1 = var0;
        var0 = _closure1_slot11;
        var3 = undefined;
        var12 = var0.bind(var3)();
        var10 = _closure1_slot4;
        var0 = var10.useState;
        var2 = 0;
        var6 = var0.bind(var10)(var2);
        var4 = _closure1_slot3;
        var0 = 2;
        var4 = var4.bind(var3)(var6, var0);
        var9 = var4[var2];
        var0 = 1;
        var0 = var4[var0];
        var _closure2_slot2 = var0;
        var22 = function() { // Original name: handleDismiss, environment: var8
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 16;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.hideActionSheet;
            var1 = _closure1_slot8;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var _closure2_slot3 = var22;
        var14 = _closure1_slot0;
        var15 = _closure1_slot2;
        var4 = 17;
        var0 = var15[var4];
        var7 = var14.bind(var3)(var0);
        var6 = var7.useStageBlockedUsers;
        var0 = var1.id;
        var0 = var6.bind(var7)(var0);
        var4 = var15[var4];
        var6 = var14.bind(var3)(var4);
        var4 = var6.useStageIgnoredUsers;
        var1 = var1.id;
        var1 = var4.bind(var6)(var1);
        var19 = var0.length;
        var18 = var1.length;
        var7 = var10.useCallback;
        var6 = function(arg0) { // Environment: var8
            var2 = _closure2_slot2;
            var0 = arg0;
            var0 = var0.nativeEvent;
            var0 = var0.layout;
            var1 = var0.height;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4 = new Array(0);
        var6 = var7.bind(var10)(var6, var4);
        var10 = _closure1_slot10;
        var4 = 18;
        var4 = var15[var4];
        var4 = var14.bind(var3)(var4);
        var7 = var4.SafeAreaPaddingView;
        var4 = {};
        var13 = true;
        var4.bottom = var13;
        var11 = var12.buttons;
        var4.style = var11;
        var4.onLayout = var6;
        var20 = _closure1_slot9;
        var6 = _closure1_slot1;
        var23 = 19;
        var11 = var15[var23];
        var17 = var6.bind(var3)(var11);
        var16 = {};
        var11 = var15[var23];
        var11 = var6.bind(var3)(var11);
        var11 = var11.Colors;
        var11 = var11.BRAND;
        var16.color = var11;
        var11 = 10;
        var21 = var15[var11];
        var21 = var14.bind(var3)(var21);
        var25 = var21.intl;
        var24 = var25.string;
        var21 = var15[var11];
        var21 = var14.bind(var3)(var21);
        var21 = var21.t;
        var21 = var21.mbD50D;
        var21 = var24.bind(var25)(var21);
        var16.text = var21;
        var21 = function() { // Original name: onPress, environment: var8
            var3 = _closure2_slot1;
            var2 = _closure2_slot0;
            var0 = undefined;
            var2 = var3.bind(var0)(var2);
            var1 = _closure2_slot3;
            var1 = var1.bind(var0)();
            return var0;
        };
        var16.onPress = var21;
        var17 = var20.bind(var3)(var17, var16);
        var16 = new Array(2);
        var16[0] = var17;
        var21 = _closure1_slot9;
        var17 = var15[var23];
        var20 = var6.bind(var3)(var17);
        var17 = {};
        var23 = var15[var23];
        var23 = var6.bind(var3)(var23);
        var23 = var23.Colors;
        var23 = var23.TRANSPARENT;
        var17.color = var23;
        var23 = var15[var11];
        var23 = var14.bind(var3)(var23);
        var25 = var23.intl;
        var24 = var25.string;
        var23 = var15[var11];
        var23 = var14.bind(var3)(var23);
        var23 = var23.t;
        var23 = var23.CZGqeT;
        var23 = var24.bind(var25)(var23);
        var17.text = var23;
        var17.onPress = var22;
        var17 = var21.bind(var3)(var20, var17);
        var16[1] = var17;
        var4.children = var16;
        var4 = var10.bind(var3)(var7, var4);
        var10 = new Array(0);
        var28 = var10;
        var27 = var0;
        var26 = 0;
        var26 = arraySpread(var28, var27, var26);
        var28 = var10;
        var27 = var1;
        var0 = arraySpread(var28, var27, var26);
        var _closure2_slot4 = var10;
        var2 = _closure1_slot10;
        var0 = 20;
        var0 = var15[var0];
        var0 = var14.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {};
        var0.scrollable = var13;
        var17 = _closure1_slot9;
        var16 = _closure1_slot13;
        var7 = {};
        var7.blockedUserCount = var19;
        var7.ignoredUserCount = var18;
        var7 = var17.bind(var3)(var16, var7);
        var0.header = var7;
        var0.footer = var4;
        var7 = _closure1_slot9;
        var4 = 21;
        var4 = var15[var4];
        var6 = var6.bind(var3)(var4);
        var4 = {};
        var4.inActionSheet = var13;
        var12 = var12.container;
        var4.contentContainerStyle = var12;
        var12 = var15[var11];
        var12 = var14.bind(var3)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var15[var11];
        var11 = var14.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11["3VoRLH"];
        var11 = var12.bind(var13)(var11);
        var4.accessibilityLabel = var11;
        var11 = var10.length;
        var10 = new Array(1);
        var10[0] = var11;
        var4.sections = var10;
        var10 = function(arg0, arg1) { // Original name: renderItem, environment: var8
            var3 = _closure1_slot9;
            var2 = _closure1_slot12;
            var1 = {};
            var5 = _closure2_slot4;
            var4 = arg1;
            var4 = var5[var4];
            var1.participant = var4;
            var0 = _closure2_slot0;
            var4 = var0.getGuildId;
            var4 = var4.bind(var0)();
            var1.guildId = var4;
            var0 = var0.id;
            var1.channelId = var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var4.renderItem = var10;
        var8 = function() { // Original name: itemSize, environment: var8
            var0 = 48;
            return var0;
        };
        var4.itemSize = var8;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var7 = _closure1_slot9;
        var6 = _closure1_slot5;
        var5 = {};
        var8 = {};
        var8.height = var9;
        var5.style = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3059, 4204, 4193, 33, 1297, 671, 566, 1234, 5411, 4039, 6412, 3895, 4832, 3237, 6413, 4690, 4829, 4887, 6414, 2]);