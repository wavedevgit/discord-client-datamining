// modules/shared_space_warnings/native/BlockedUserInGdmActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.Image;
    var _closure1_slot4 = var4;
    var1 = var1.View;
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var10.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var10.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.BlockWarningEngagements;
    var _closure1_slot8 = var4;
    var1 = var1.GdmWarningMedium;
    var _closure1_slot9 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot10 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot11 = var4;
    var4 = var1.Fragment;
    var _closure1_slot12 = var4;
    var1 = var1.jsxs;
    var _closure1_slot13 = var1;
    var1 = 7;
    var1 = var6[var1];
    var7 = var5.bind(var0)(var1);
    var4 = var7.createStyles;
    var1 = {};
    var8 = {};
    var9 = 8;
    var11 = var6[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var8.paddingTop = var11;
    var11 = var6[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.gap = var11;
    var11 = 'center';
    var8.textAlign = var11;
    var1.container = var8;
    var8 = {
        'alignSelf': 'center',
        'width': 73,
        'height': 86
    };
    var1.headerImage = var8;
    var8 = {
        'textAlign': 'center',
        'alignSelf': 'center'
    };
    var1.title = var8;
    var8 = {
        'textAlign': 'center',
        'alignSelf': 'center'
    };
    var1.description = var8;
    var8 = {};
    var12 = var6[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var8.paddingVertical = var12;
    var1.tableGroup = var8;
    var8 = {};
    var12 = var6[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingVertical = var12;
    var8.gap = var9;
    var1.buttonGroup = var8;
    var8 = {};
    var8.gap = var9;
    var1.buttons = var8;
    var8 = {};
    var8.textAlign = var11;
    var9 = var6[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_16;
    var8.paddingHorizontal = var9;
    var1.footer = var8;
    var8 = {
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        'minWidth': 32
    };
    var1.icon = var8;
    var1 = var4.bind(var7)(var1);
    var _closure1_slot14 = var1;
    var1 = function(arg0) { // Original name: getUserCalloutRowText, environment: var3
        _fun95859: for (var _fun95859_ip = 0;;) switch (_fun95859_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.calledOutUserIds;
                var6 = var0.totalUsers;
                var1 = var0.guildId;
                var _closure2_slot0 = var1;
                var0 = var0.channelId;
                var _closure2_slot1 = var0;
                var2 = new Array(0);
                var10 = 0;
                var12 = var2;
                var11 = var5;
                var0 = arraySpread(var12, var11, var10);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var7
                    var2 = _closure1_slot7;
                    var1 = var2.getUser;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var _closure2_slot2 = var0;
                var0 = function(arg0) { // Original name: renderUsername, environment: var7
                    var3 = _closure1_slot11;
                    var1 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 9;
                    var0 = var6[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.Text;
                    var0 = {};
                    var5 = 'text-md/semibold';
                    var0.variant = var5;
                    var5 = _closure1_slot1;
                    var4 = 10;
                    var4 = var6[var4];
                    var8 = var5.bind(var2)(var4);
                    var7 = var8.getName;
                    var6 = _closure2_slot0;
                    var5 = _closure2_slot1;
                    var4 = arg0;
                    var4 = var7.bind(var8)(var6, var5, var4);
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var _closure2_slot3 = var0;
                var0 = 4;
                if (!(!(var6 >= var0))) {
                    _fun95859_ip = 371;
                    continue _fun95859
                }
            case 93:
                var0 = 3;
                if (!(var0 !== var6)) {
                    _fun95859_ip = 280;
                    continue _fun95859
                }
            case 103:
                var0 = 2;
                if (!(var0 !== var6)) {
                    _fun95859_ip = 189;
                    continue _fun95859
                }
            case 110:
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 11;
                var2 = var8[var0];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var3 = var2.intl;
                var2 = var3.format;
                var0 = var8[var0];
                var0 = var4.bind(var1)(var0);
                var0 = var0.t;
                var1 = var0["4WHCtq"];
                var0 = {};
                var4 = function() { // Original name: usernameHook, environment: var7
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot2;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.usernameHook = var4;
                var0 = var2.bind(var3)(var1, var0);
                _fun95859_ip = 278;
                continue _fun95859;
            case 189:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 11;
                var3 = var9[var1];
                var2 = undefined;
                var3 = var8.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.format;
                var1 = var9[var1];
                var1 = var8.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.veV4IN;
                var1 = {};
                var8 = function() { // Original name: usernameHook1, environment: var7
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot2;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.usernameHook1 = var8;
                var8 = function() { // Original name: usernameHook2, environment: var7
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot2;
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.usernameHook2 = var8;
                var0 = var3.bind(var4)(var2, var1);
            case 278:
                _fun95859_ip = 369;
                continue _fun95859;
            case 280:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 11;
                var3 = var9[var1];
                var2 = undefined;
                var3 = var8.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.format;
                var1 = var9[var1];
                var1 = var8.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1["67ZE+9"];
                var1 = {};
                var8 = function() { // Original name: usernameHook1, environment: var7
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot2;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.usernameHook1 = var8;
                var8 = function() { // Original name: usernameHook2, environment: var7
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot2;
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.usernameHook2 = var8;
                var0 = var3.bind(var4)(var2, var1);
            case 369:
                _fun95859_ip = 476;
                continue _fun95859;
            case 371:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 11;
                var3 = var9[var1];
                var2 = undefined;
                var3 = var8.bind(var2)(var3);
                var4 = var3.intl;
                var3 = var4.format;
                var1 = var9[var1];
                var1 = var8.bind(var2)(var1);
                var1 = var1.t;
                var2 = var1.qfo6KR;
                var1 = {};
                var8 = function() { // Original name: usernameHook1, environment: var7
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot2;
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.usernameHook1 = var8;
                var7 = function() { // Original name: usernameHook2, environment: var7
                    var2 = _closure2_slot3;
                    var1 = _closure2_slot2;
                    var0 = 1;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var1.usernameHook2 = var7;
                var5 = var5.length;
                var5 = var6 - var5;
                var1.numberOfOtherUsers = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 476:
                return var0;
        }
    };
    var _closure1_slot15 = var1;
    var4 = function(arg0) { // Original name: UserCalloutAvatars, environment: var3
        _fun95869: for (var _fun95869_ip = 0;;) switch (_fun95869_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.userIds;
                var _closure2_slot0 = var1;
                var9 = var2.guildId;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 12;
                var2 = var6[var2];
                var5 = undefined;
                var10 = var4.bind(var5)(var2);
                var8 = var10.useStateFromStoresArray;
                var2 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = new Array(1);
                var2[0] = var1;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot7;
                        var1 = var2.getUser;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var8.bind(var10)(var3, var0, var2);
                var2 = var3.filter;
                var0 = 13;
                var0 = var6[var0];
                var0 = var4.bind(var5)(var0);
                var0 = var0.isNotNullish;
                var11 = var2.bind(var3)(var0);
                var2 = var1.length;
                var0 = 1;
                if (!(var0 !== var2)) {
                    _fun95869_ip = 201;
                    continue _fun95869
                }
            case 125:
                var3 = _closure1_slot11;
                var6 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 16;
                var0 = var8[var0];
                var0 = var6.bind(var5)(var0);
                var2 = var0.FacepileGroupDMAvatar;
                var0 = {};
                var0.users = var11;
                var4 = 14;
                var4 = var8[var4];
                var4 = var6.bind(var5)(var4);
                var4 = var4.AvatarSizes;
                var4 = var4.REFRESH_MEDIUM_32;
                var0.size = var4;
                var0 = var3.bind(var5)(var2, var0);
                _fun95869_ip = 351;
                continue _fun95869;
            case 201:
                var3 = _closure1_slot7;
                var2 = var3.getUser;
                var10 = 0;
                var1 = var1[var10];
                var2 = var2.bind(var3)(var1);
                var1 = null;
                if (!(var1 == var2)) {
                    _fun95869_ip = 268;
                    continue _fun95869
                }
            case 228:
                var3 = _closure1_slot11;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 15;
                var1 = var4[var1];
                var1 = var2.bind(var5)(var1);
                var2 = var1.UserIcon;
                var1 = {};
                var1 = var3.bind(var5)(var2, var1);
                _fun95869_ip = 348;
                continue _fun95869;
            case 268:
                var4 = _closure1_slot11;
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 14;
                var2 = var8[var6];
                var3 = var3.bind(var5)(var2);
                var2 = {};
                var10 = var11[var10];
                var2.user = var10;
                var2.guildId = var9;
                var7 = _closure1_slot0;
                var6 = var8[var6];
                var6 = var7.bind(var5)(var6);
                var6 = var6.AvatarSizes;
                var6 = var6.REFRESH_MEDIUM_32;
                var2.size = var6;
                var6 = true;
                var2['aria-hidden'] = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 348:
                var0 = var1;
            case 351:
                return var0;
        }
    };
    var _closure1_slot16 = var4;
    var4 = function(arg0) { // Original name: BlockedUserInGDMDescription, environment: var3
        _fun95872: for (var _fun95872_ip = 0;;) switch (_fun95872_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.numOfBlockedUsers;
                var13 = var0.numOfIgnoredUsers;
                var1 = 0;
                var0 = var12 > var1;
                var1 = var13 > var1;
                if (!var0) {
                    _fun95872_ip = 34;
                    continue _fun95872
                }
            case 28:
                if (var1) {
                    _fun95872_ip = 370;
                    continue _fun95872
                }
            case 34:
                if (var0) {
                    _fun95872_ip = 209;
                    continue _fun95872
                }
            case 40:
                var0 = null;
                if (!var1) {
                    _fun95872_ip = 204;
                    continue _fun95872
                }
            case 48:
                var4 = _closure1_slot13;
                var3 = _closure1_slot12;
                var2 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 11;
                var5 = var10[var6];
                var1 = undefined;
                var5 = var9.bind(var1)(var5);
                var11 = var5.intl;
                var8 = var11.format;
                var5 = var10[var6];
                var5 = var9.bind(var1)(var5);
                var5 = var5.t;
                var7 = var5["6IRwua"];
                var5 = {};
                var5.n = var13;
                var7 = var8.bind(var11)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var7 = '\n';
                var5[1] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var1)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var1)(var6);
                var6 = var6.t;
                var6 = var6["6AKLRt"];
                var6 = var7.bind(var8)(var6);
                var5[2] = var6;
                var2.children = var5;
                var0 = var4.bind(var1)(var3, var2);
            case 204:
                _fun95872_ip = 365;
                continue _fun95872;
            case 209:
                var4 = _closure1_slot13;
                var3 = _closure1_slot12;
                var2 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 11;
                var5 = var10[var6];
                var1 = undefined;
                var5 = var9.bind(var1)(var5);
                var11 = var5.intl;
                var8 = var11.format;
                var5 = var10[var6];
                var5 = var9.bind(var1)(var5);
                var5 = var5.t;
                var7 = var5.iKtixW;
                var5 = {};
                var5.n = var12;
                var7 = var8.bind(var11)(var7, var5);
                var5 = new Array(3);
                var5[0] = var7;
                var7 = '\n';
                var5[1] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var1)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var1)(var6);
                var6 = var6.t;
                var6 = var6.SN1hrl;
                var6 = var7.bind(var8)(var6);
                var5[2] = var6;
                var2.children = var5;
                var0 = var4.bind(var1)(var3, var2);
            case 365:
                _fun95872_ip = 518;
                continue _fun95872;
            case 370:
                var4 = _closure1_slot13;
                var3 = _closure1_slot12;
                var2 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 11;
                var5 = var10[var6];
                var1 = undefined;
                var5 = var9.bind(var1)(var5);
                var8 = var5.intl;
                var7 = var8.string;
                var5 = var10[var6];
                var5 = var9.bind(var1)(var5);
                var5 = var5.t;
                var5 = var5.xbRNI3;
                var7 = var7.bind(var8)(var5);
                var5 = new Array(3);
                var5[0] = var7;
                var7 = '\n';
                var5[1] = var7;
                var7 = var10[var6];
                var7 = var9.bind(var1)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var10[var6];
                var6 = var9.bind(var1)(var6);
                var6 = var6.t;
                var6 = var6["Bp2/ni"];
                var6 = var7.bind(var8)(var6);
                var5[2] = var6;
                var2.children = var5;
                var0 = var4.bind(var1)(var3, var2);
            case 518:
                return var0;
        }
    };
    var _closure1_slot17 = var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/shared_space_warnings/native/BlockedUserInGdmActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function(arg0) { // Original name: BlockedUserInGdmActionSheet, environment: var3
        _fun95873: for (var _fun95873_ip = 0;;) switch (_fun95873_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.channelId;
                var _closure2_slot0 = var0;
                var21 = var1.blockedUserIds;
                var _closure2_slot1 = var21;
                var20 = var1.ignoredUserIds;
                var _closure2_slot2 = var20;
                var1 = _closure1_slot14;
                var3 = undefined;
                var9 = var1.bind(var3)();
                var _closure2_slot3 = var9;
                var5 = _closure1_slot3;
                var4 = var5.useEffect;
                var2 = new Array(3);
                var2[0] = var0;
                var2[1] = var21;
                var2[2] = var20;
                var1 = function() { // Environment: var13
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 19;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot10;
                    var2 = var1.GDM_BLOCKED_USER_WARNING_VIEWED;
                    var1 = {};
                    var7 = _closure2_slot0;
                    var1.channel_id = var7;
                    var6 = _closure1_slot9;
                    var6 = var6.ACTION_SHEET;
                    var1.warning_medium = var6;
                    var6 = _closure2_slot2;
                    var1.ignored_user_ids = var6;
                    var5 = _closure2_slot1;
                    var1.blocked_user_ids = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var1 = var4.bind(var5)(var1, var2);
                var1 = {};
                var1.channelId = var0;
                var1.blockedUserIds = var21;
                var1.ignoredUserIds = var20;
                var7 = var1.channelId;
                var0 = var1.blockedUserIds;
                var1 = var1.ignoredUserIds;
                var4 = _closure1_slot6;
                var2 = var4.getChannel;
                var6 = var2.bind(var4)(var7);
                var4 = var0.length;
                var2 = 0;
                var4 = var4 > var2;
                var5 = var1.length;
                var5 = var5 > var2;
                var8 = {};
                var15 = _closure1_slot11;
                var14 = _closure1_slot0;
                var10 = _closure1_slot2;
                var11 = 17;
                var11 = var10[var11];
                var11 = var14.bind(var3)(var11);
                var12 = var11.CircleCheckIcon;
                var11 = {};
                var11 = var15.bind(var3)(var12, var11);
                var8.icon = var11;
                var16 = 11;
                var11 = var10[var16];
                var11 = var14.bind(var3)(var11);
                var18 = var11.intl;
                var12 = var18.string;
                var11 = var10[var16];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.RIMw54;
                var11 = var12.bind(var18)(var11);
                var8.label = var11;
                var18 = new Array(2);
                var18[0] = var8;
                var8 = {};
                var11 = 18;
                var11 = var10[var11];
                var11 = var14.bind(var3)(var11);
                var12 = var11.CircleInformationIcon;
                var11 = {};
                var11 = var15.bind(var3)(var12, var11);
                var8.icon = var11;
                var11 = var10[var16];
                var11 = var14.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var10[var16];
                var10 = var14.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.bejNWN;
                var10 = var11.bind(var12)(var10);
                var8.label = var10;
                var18[1] = var8;
                if (!var4) {
                    _fun95873_ip = 356;
                    continue _fun95873
                }
            case 350:
                if (var5) {
                    _fun95873_ip = 542;
                    continue _fun95873
                }
            case 356:
                var10 = new Array(0);
                if (var4) {
                    _fun95873_ip = 391;
                    continue _fun95873
                }
            case 363:
                var26 = var10;
                var25 = var1;
                var24 = 0;
                var5 = arraySpread(var26, var25, var24);
                var8 = var10.slice;
                var5 = 2;
                var14 = var8.bind(var10)(var2, var5);
                _fun95873_ip = 417;
                continue _fun95873;
            case 391:
                var26 = var10;
                var25 = var0;
                var24 = 0;
                var5 = arraySpread(var26, var25, var24);
                var8 = var10.slice;
                var5 = 2;
                var14 = var8.bind(var10)(var2, var5);
            case 417:
                if (var4) {
                    _fun95873_ip = 427;
                    continue _fun95873
                }
            case 420:
                var12 = var1.length;
                _fun95873_ip = 432;
                continue _fun95873;
            case 427:
                var12 = var0.length;
            case 432:
                var5 = var18.unshift;
                var4 = {};
                var15 = _closure1_slot11;
                var10 = _closure1_slot16;
                var8 = {};
                var8.userIds = var14;
                var11 = null;
                var22 = var11 == var6;
                var19 = undefined;
                if (var22) {
                    _fun95873_ip = 471;
                    continue _fun95873
                }
            case 466:
                var19 = var6.guild_id;
            case 471:
                var8.guildId = var19;
                var8 = var15.bind(var3)(var10, var8);
                var4.icon = var8;
                var10 = _closure1_slot15;
                var8 = {};
                var8.calledOutUserIds = var14;
                var8.totalUsers = var12;
                var8.channelId = var7;
                var12 = var11 == var6;
                var11 = undefined;
                if (var12) {
                    _fun95873_ip = 519;
                    continue _fun95873
                }
            case 514:
                var11 = var6.guild_id;
            case 519:
                var8.guildId = var11;
                var8 = var10.bind(var3)(var8);
                var4.label = var8;
                var4 = var5.bind(var18)(var4);
                _fun95873_ip = 692;
                continue _fun95873;
            case 542:
                var8 = new Array(0);
                var26 = var8;
                var25 = var0;
                var24 = 0;
                var24 = arraySpread(var26, var25, var24);
                var26 = var8;
                var25 = var1;
                var0 = arraySpread(var26, var25, var24);
                var1 = var8.slice;
                var0 = 2;
                var10 = var1.bind(var8)(var2, var0);
                var1 = var18.unshift;
                var0 = {};
                var11 = _closure1_slot11;
                var4 = _closure1_slot16;
                var2 = {};
                var2.userIds = var10;
                var5 = null;
                var14 = var5 == var6;
                var12 = undefined;
                if (var14) {
                    _fun95873_ip = 621;
                    continue _fun95873
                }
            case 616:
                var12 = var6.guild_id;
            case 621:
                var2.guildId = var12;
                var2 = var11.bind(var3)(var4, var2);
                var0.icon = var2;
                var4 = _closure1_slot15;
                var2 = {};
                var2.calledOutUserIds = var10;
                var8 = var8.length;
                var2.totalUsers = var8;
                var2.channelId = var7;
                var7 = var5 == var6;
                var5 = undefined;
                if (var7) {
                    _fun95873_ip = 674;
                    continue _fun95873
                }
            case 669:
                var5 = var6.guild_id;
            case 674:
                var2.guildId = var5;
                var2 = var4.bind(var3)(var2);
                var0.label = var2;
                var0 = var1.bind(var18)(var0);
            case 692:
                var2 = _closure1_slot11;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 20;
                var0 = var12[var0];
                var0 = var15.bind(var3)(var0);
                var1 = var0.ActionSheet;
                var0 = {};
                var4 = true;
                var0.startExpanded = var4;
                var6 = _closure1_slot13;
                var5 = _closure1_slot5;
                var4 = {};
                var7 = var9.container;
                var4.style = var7;
                var8 = _closure1_slot4;
                var7 = {};
                var11 = _closure1_slot1;
                var10 = 21;
                var10 = var12[var10];
                var10 = var11.bind(var3)(var10);
                var7.source = var10;
                var10 = var9.headerImage;
                var7.style = var10;
                var8 = var2.bind(var3)(var8, var7);
                var7 = new Array(4);
                var7[0] = var8;
                var8 = {};
                var11 = 9;
                var10 = var12[var11];
                var10 = var15.bind(var3)(var10);
                var14 = var10.Text;
                var10 = {
                    'variant': 'heading-xl/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var19 = var9.title;
                var10.style = var19;
                var19 = var12[var16];
                var19 = var15.bind(var3)(var19);
                var23 = var19.intl;
                var22 = var23.string;
                var19 = var12[var16];
                var19 = var15.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19["mwJJ+f"];
                var19 = var22.bind(var23)(var19);
                var10.children = var19;
                var14 = var2.bind(var3)(var14, var10);
                var10 = new Array(2);
                var10[0] = var14;
                var11 = var12[var11];
                var11 = var15.bind(var3)(var11);
                var14 = var11.Text;
                var11 = {
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var19 = var9.description;
                var11.style = var19;
                var19 = _closure1_slot17;
                var17 = {};
                var21 = var21.length;
                var17.numOfBlockedUsers = var21;
                var20 = var20.length;
                var17.numOfIgnoredUsers = var20;
                var17 = var2.bind(var3)(var19, var17);
                var11.children = var17;
                var11 = var2.bind(var3)(var14, var11);
                var10[1] = var11;
                var8.children = var10;
                var8 = var6.bind(var3)(var5, var8);
                var7[1] = var8;
                var8 = {};
                var10 = var9.tableGroup;
                var8.style = var10;
                var10 = 22;
                var10 = var12[var10];
                var10 = var15.bind(var3)(var10);
                var11 = var10.TableRowGroup;
                var10 = {};
                var17 = var18.map;
                var14 = function(arg0, arg1) { // Environment: var13
                    var0 = arg0;
                    var7 = var0.icon;
                    var0 = var0.label;
                    var4 = _closure1_slot11;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 23;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.TableRow;
                    var1 = {};
                    var6 = _closure1_slot5;
                    var5 = {};
                    var8 = _closure2_slot3;
                    var8 = var8.icon;
                    var5.style = var8;
                    var5.children = var7;
                    var5 = var4.bind(var3)(var6, var5);
                    var1.icon = var5;
                    var1.label = var0;
                    var0 = arg1;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var14 = var17.bind(var18)(var14);
                var10.children = var14;
                var10 = var2.bind(var3)(var11, var10);
                var8.children = var10;
                var8 = var2.bind(var3)(var5, var8);
                var7[2] = var8;
                var8 = {};
                var9 = var9.buttons;
                var8.style = var9;
                var10 = 24;
                var9 = var12[var10];
                var9 = var15.bind(var3)(var9);
                var11 = var9.Button;
                var9 = {};
                var14 = 'lg';
                var9.size = var14;
                var14 = function() { // Original name: onPress, environment: var13
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 25;
                    var1 = var3[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var1 = var4.hideActionSheet;
                    var1 = var1.bind(var4)();
                    var4 = _closure1_slot0;
                    var1 = 26;
                    var1 = var3[var1];
                    var4 = var4.bind(var0)(var1);
                    var1 = var4.dismissGdmBlockedUserWarning;
                    var7 = _closure2_slot0;
                    var1 = var1.bind(var4)(var7);
                    var1 = 27;
                    var1 = var3[var1];
                    var8 = var2.bind(var0)(var1);
                    var4 = var8.closePrivateChannel;
                    var1 = true;
                    var1 = var4.bind(var8)(var7, var1, var1);
                    var1 = 19;
                    var1 = var3[var1];
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot10;
                    var2 = var1.GDM_BLOCKED_USER_WARNING_ENGAGEMENT;
                    var1 = {};
                    var8 = _closure1_slot8;
                    var8 = var8.CLICK_TO_LEAVE;
                    var1.action = var8;
                    var1.channel_id = var7;
                    var6 = _closure1_slot9;
                    var6 = var6.ACTION_SHEET;
                    var1.warning_medium = var6;
                    var6 = _closure2_slot2;
                    var1.ignored_user_ids = var6;
                    var5 = _closure2_slot1;
                    var1.blocked_user_ids = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var9.onPress = var14;
                var14 = var12[var16];
                var14 = var15.bind(var3)(var14);
                var18 = var14.intl;
                var17 = var18.string;
                var14 = var12[var16];
                var14 = var15.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.I4q1kA;
                var14 = var17.bind(var18)(var14);
                var9.text = var14;
                var11 = var2.bind(var3)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var10 = var12[var10];
                var10 = var15.bind(var3)(var10);
                var11 = var10.Button;
                var10 = {
                    'size': 'lg',
                    'variant': 'secondary'
                };
                var13 = function() { // Original name: onPress, environment: var13
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 25;
                    var1 = var3[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var1 = var4.hideActionSheet;
                    var1 = var1.bind(var4)();
                    var4 = _closure1_slot0;
                    var1 = 26;
                    var1 = var3[var1];
                    var4 = var4.bind(var0)(var1);
                    var1 = var4.dismissGdmBlockedUserWarning;
                    var7 = _closure2_slot0;
                    var1 = var1.bind(var4)(var7);
                    var1 = 19;
                    var1 = var3[var1];
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot10;
                    var2 = var1.GDM_BLOCKED_USER_WARNING_ENGAGEMENT;
                    var1 = {};
                    var8 = _closure1_slot8;
                    var8 = var8.CLICK_TO_STAY;
                    var1.action = var8;
                    var1.channel_id = var7;
                    var6 = _closure1_slot9;
                    var6 = var6.ACTION_SHEET;
                    var1.warning_medium = var6;
                    var6 = _closure2_slot2;
                    var1.ignored_user_ids = var6;
                    var5 = _closure2_slot1;
                    var1.blocked_user_ids = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var10.onPress = var13;
                var13 = var12[var16];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var16];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.DRJhmT;
                var12 = var13.bind(var14)(var12);
                var10.text = var12;
                var10 = var2.bind(var3)(var11, var10);
                var9[1] = var10;
                var8.children = var9;
                var8 = var6.bind(var3)(var5, var8);
                var7[3] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.getUserCalloutRowText = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1372, 1613, 12453, 660, 33, 1297, 671, 3900, 3920, 1234, 566, 1304, 5414, 9996, 8986, 3230, 3225, 795, 5171, 11530, 5325, 4861, 4043, 3237, 12454, 3904, 2]);