// uikit-native/modals/AcceptInvite.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: InviteResolving, environment: var1
        var0 = _closure1_slot12;
        var3 = undefined;
        var5 = var0.bind(var3)();
        var1 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 9;
        var0 = var7[var0];
        var2 = var1.bind(var3)(var0);
        var1 = var2.useToken;
        var6 = _closure1_slot1;
        var0 = 7;
        var0 = var7[var0];
        var0 = var6.bind(var3)(var0);
        var0 = var0.colors;
        var0 = var0.INTERACTIVE_TEXT_DEFAULT;
        var7 = var1.bind(var2)(var0);
        var2 = _closure1_slot10;
        var1 = _closure1_slot7;
        var0 = {};
        var5 = var5.resolvingContainer;
        var0.style = var5;
        var6 = _closure1_slot10;
        var5 = _closure1_slot5;
        var4 = {};
        var4.color = var7;
        var7 = 'large';
        var4.size = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: AcceptInviteCardComponent, environment: var1
        _fun80181: for (var _fun80181_ip = 0;;) switch (_fun80181_ip) {
            case 0:
                var5 = arg0;
                var6 = var5.invite;
                var _closure2_slot0 = var6;
                var7 = _closure1_slot4;
                var4 = var7.useState;
                var2 = _closure1_slot14;
                var3 = undefined;
                var2 = var2.bind(var3)(var6);
                var7 = var4.bind(var7)(var2);
                var4 = _closure1_slot3;
                var2 = 2;
                var7 = var4.bind(var3)(var7, var2);
                var2 = 0;
                var2 = var7[var2];
                var _closure2_slot1 = var2;
                var4 = 1;
                var4 = var7[var4];
                var _closure2_slot2 = var4;
                var8 = _closure1_slot4;
                var7 = var8.useEffect;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var2;
                var1 = function() { // Environment: var1
                    _fun80182: for (var _fun80182_ip = 0;;) switch (_fun80182_ip) {
                        case 0:
                            var4 = _closure1_slot14;
                            var2 = _closure2_slot0;
                            var0 = undefined;
                            var2 = var4.bind(var0)(var2);
                            var4 = _closure2_slot1;
                            if (!(var2 !== var4)) {
                                _fun80182_ip = 68;
                                continue _fun80182
                            }
                        case 29:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 10;
                            var3 = var5[var3];
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.DeprecatedLayoutAnimation;
                            var3 = var3.bind(var4)();
                            var1 = _closure2_slot2;
                            var1 = var1.bind(var0)(var2);
                        case 68:
                            return var0;
                    }
                };
                var1 = var7.bind(var8)(var1, var4);
                var1 = null;
                if (!(var1 != var6)) {
                    _fun80181_ip = 272;
                    continue _fun80181
                }
            case 120:
                var1 = _closure1_slot13;
                var1 = var1.DETAILS;
                if (!(var1 !== var2)) {
                    _fun80181_ip = 219;
                    continue _fun80181
                }
            case 134:
                var1 = _closure1_slot13;
                var1 = var1.ERROR;
                if (!(var1 !== var2)) {
                    _fun80181_ip = 166;
                    continue _fun80181
                }
            case 148:
                var4 = _closure1_slot10;
                var2 = _closure1_slot15;
                var1 = {};
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            case 166:
                var4 = _closure1_slot10;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 12;
                var1 = var7[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var11 = var1;
                var10 = var5;
                var7 = copyDataProperties(var11, var10);
                var7 = 'invite';
                var1[var7] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            case 219:
                var4 = _closure1_slot10;
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 11;
                var1 = var7[var1];
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var11 = var1;
                var10 = var5;
                var5 = copyDataProperties(var11, var10);
                var5 = 'invite';
                var1[var5] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            case 272:
                var2 = _closure1_slot10;
                var1 = _closure1_slot15;
                var0 = {};
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var3 = var13.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var8 = 1;
    var6 = var5[var8];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var7 = 2;
    var3 = var5[var7];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityIndicator;
    var _closure1_slot5 = var6;
    var6 = var3.ImageBackground;
    var _closure1_slot6 = var6;
    var3 = var3.View;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var13.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.InviteStates;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 6;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var6 = var10.createStyles;
    var3 = {};
    var11 = {
        'backgroundColor': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var12 = 7;
    var14 = var5[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var11.backgroundColor = var14;
    var3.parentContainer = var11;
    var11 = {
        'marginVertical': 0,
        'resizeMode': 'cover'
    };
    var3.imageStyle = var11;
    var11 = {
        'position': 'absolute',
        'flex': 1,
        'width': '90%',
        'alignItems': 'center',
        'justifyContent': 'center',
        'padding': 0
    };
    var3.cardContainer = var11;
    var11 = {
        'padding': 16,
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'center',
        'width': '100%'
    };
    var3.cardContent = var11;
    var11 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'gap': 8,
        'padding': 16,
        'borderBottomWidth': 1,
        'borderBottomColor': null,
        'width': '100%'
    };
    var14 = var5[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var11.borderBottomColor = var14;
    var3.cardHeader = var11;
    var11 = {};
    var14 = 64;
    var11.padding = var14;
    var3.resolvingContainer = var11;
    var11 = {
        'marginTop': 16,
        'shadowColor': null,
        'shadowOpacity': 0.2,
        'shadowRadius': 16
    };
    var14 = var5[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BLACK;
    var11.shadowColor = var14;
    var14 = {
        'height': 8,
        'width': 0
    };
    var11.shadowOffset = var14;
    var12 = var5[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOW;
    var11.backgroundColor = var12;
    var3.expirationNotice = var11;
    var3 = var6.bind(var10)(var3);
    var _closure1_slot12 = var3;
    var3 = {};
    var3.LOADING = var9;
    var6 = 'LOADING';
    var3[var9] = var6;
    var3.DETAILS = var8;
    var6 = 'DETAILS';
    var3[var8] = var6;
    var3.ERROR = var7;
    var6 = 'ERROR';
    var3[var7] = var6;
    var _closure1_slot13 = var3;
    var3 = function(arg0) { // Original name: getInviteState, environment: var1
        _fun80183: for (var _fun80183_ip = 0;;) switch (_fun80183_ip) {
            case 0:
                var0 = arg0;
                var4 = null;
                var3 = var4 == var0;
                var1 = undefined;
                var2 = undefined;
                if (var3) {
                    _fun80183_ip = 21;
                    continue _fun80183
                }
            case 16:
                var2 = var0.state;
            case 21:
                var2 = var4 == var2;
                if (!var2) {
                    _fun80183_ip = 46;
                    continue _fun80183
                }
            case 28:
                var5 = var4 == var0;
                var3 = undefined;
                if (var5) {
                    _fun80183_ip = 42;
                    continue _fun80183
                }
            case 37:
                var3 = var0.channel;
            case 42:
                var2 = var4 == var3;
            case 46:
                if (!(var4 != var0)) {
                    _fun80183_ip = 300;
                    continue _fun80183
                }
            case 53:
                var3 = var0.state;
                if (!(var4 != var3)) {
                    _fun80183_ip = 300;
                    continue _fun80183
                }
            case 65:
                if (var2) {
                    _fun80183_ip = 300;
                    continue _fun80183
                }
            case 71:
                var4 = var0.state;
                var2 = _closure1_slot9;
                var2 = var2.RESOLVED;
                if (!(var2 !== var4)) {
                    _fun80183_ip = 288;
                    continue _fun80183
                }
            case 96:
                var2 = _closure1_slot9;
                var2 = var2.ACCEPTED;
                if (!(var2 !== var4)) {
                    _fun80183_ip = 288;
                    continue _fun80183
                }
            case 113:
                var2 = _closure1_slot9;
                var2 = var2.EXPIRED;
                if (!(var2 !== var4)) {
                    _fun80183_ip = 276;
                    continue _fun80183
                }
            case 130:
                var2 = _closure1_slot9;
                var2 = var2.BANNED;
                if (!(var2 !== var4)) {
                    _fun80183_ip = 276;
                    continue _fun80183
                }
            case 147:
                var2 = _closure1_slot9;
                var2 = var2.ERROR;
                if (!(var2 !== var4)) {
                    _fun80183_ip = 276;
                    continue _fun80183
                }
            case 161:
                var2 = _closure1_slot9;
                var2 = var2.RESOLVING;
                if (!(var2 !== var4)) {
                    _fun80183_ip = 264;
                    continue _fun80183
                }
            case 175:
                var2 = _closure1_slot9;
                var2 = var2.APP_NOT_OPENED;
                if (!(var2 !== var4)) {
                    _fun80183_ip = 264;
                    continue _fun80183
                }
            case 189:
                var2 = _closure1_slot9;
                var2 = var2.APP_OPENED;
                if (!(var2 !== var4)) {
                    _fun80183_ip = 264;
                    continue _fun80183
                }
            case 203:
                var2 = _closure1_slot9;
                var2 = var2.APP_OPENING;
                if (!(var2 !== var4)) {
                    _fun80183_ip = 264;
                    continue _fun80183
                }
            case 217:
                var2 = _closure1_slot9;
                var2 = var2.ACCEPTING;
                if (!(var2 !== var4)) {
                    _fun80183_ip = 264;
                    continue _fun80183
                }
            case 231:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 8;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.assertNever;
                var2 = var2.bind(var3)(var4);
                return var1;
            case 264:
                var1 = _closure1_slot13;
                var1 = var1.LOADING;
                return var1;
            case 276:
                var1 = _closure1_slot13;
                var1 = var1.ERROR;
                return var1;
            case 288:
                var0 = _closure1_slot13;
                var0 = var0.DETAILS;
                return var0;
            case 300:
                var0 = _closure1_slot13;
                var0 = var0.LOADING;
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var3 = 22;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/modals/AcceptInvite.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: AcceptInvite, environment: var1
        _fun80184: for (var _fun80184_ip = 0;;) switch (_fun80184_ip) {
            case 0:
                var5 = arg0;
                var16 = var5.invite;
                var _closure2_slot0 = var16;
                var4 = var5.friendMemberIds;
                var1 = null;
                var3 = Object.create(var1);
                var2 = 0;
                var3.invite = var2;
                var3.friendMemberIds = var2;
                var28 = {};
                var27 = var5;
                var26 = var3;
                var14 = copyDataProperties(var28, var27, var26);
                var0 = _closure1_slot12;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 16;
                var0 = var6[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var10 = var0.height;
                var9 = var0.width;
                var0 = var16;
                if (!(var1 == var0)) {
                    _fun80184_ip = 106;
                    continue _fun80184
                }
            case 104:
                var0 = {};
            case 106:
                var8 = var0.guild;
                var5 = var1 == var8;
                var0 = undefined;
                if (var5) {
                    _fun80184_ip = 126;
                    continue _fun80184
                }
            case 120:
                var0 = var8.splash;
            case 126:
                if (!(var1 != var0)) {
                    _fun80184_ip = 221;
                    continue _fun80184
                }
            case 130:
                var5 = _closure1_slot1;
                var15 = _closure1_slot2;
                var0 = 13;
                var0 = var15[var0];
                var6 = var5.bind(var3)(var0);
                var5 = var6.getGuildSplashSource;
                var0 = {};
                var7 = var8.id;
                var0.id = var7;
                var7 = var8.splash;
                var0.splash = var7;
                var13 = _closure1_slot0;
                var7 = 14;
                var7 = var15[var7];
                var13 = var13.bind(var3)(var7);
                var7 = var13.getDevicePixelRatio;
                var7 = var7.bind(var13)();
                var7 = var9 * var7;
                var0.size = var7;
                var7 = var5.bind(var6)(var0);
                if (!(var1 == var7)) {
                    _fun80184_ip = 241;
                    continue _fun80184
                }
            case 221:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 15;
                var0 = var6[var0];
                var7 = var5.bind(var3)(var0);
            case 241:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 17;
                var0 = var6[var0];
                var6 = var5.bind(var3)(var0);
                var5 = var6.useEligibleInviteFriendMembersExperiment;
                var0 = {};
                var13 = 'accept_invite_modal_native';
                var0.location = var13;
                var0.guild = var8;
                var0 = var5.bind(var6)(var0);
                var5 = var0.showFriendsInServer;
                var15 = undefined;
                if (!var5) {
                    _fun80184_ip = 302;
                    continue _fun80184
                }
            case 299:
                var15 = var4;
            case 302:
                var8 = var0.showInviter;
                if (!var8) {
                    _fun80184_ip = 341;
                    continue _fun80184
                }
            case 311:
                var0 = var1 == var15;
                var4 = undefined;
                if (var0) {
                    _fun80184_ip = 325;
                    continue _fun80184
                }
            case 320:
                var4 = var15.length;
            case 325:
                var5 = var1 != var4;
                var0 = 0;
                if (!var5) {
                    _fun80184_ip = 337;
                    continue _fun80184
                }
            case 334:
                var0 = var4;
            case 337:
                var8 = var0 > var2;
            case 341:
                if (!var8) {
                    _fun80184_ip = 363;
                    continue _fun80184
                }
            case 344:
                var2 = var1 == var16;
                var0 = undefined;
                if (var2) {
                    _fun80184_ip = 359;
                    continue _fun80184
                }
            case 353:
                var0 = var16.inviter;
            case 359:
                var8 = var1 != var0;
            case 363:
                var2 = _closure1_slot11;
                var1 = _closure1_slot7;
                var0 = {};
                var5 = var12.parentContainer;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var5.height = var10;
                var5.width = var9;
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot10;
                var5 = _closure1_slot6;
                var4 = {};
                var4.source = var7;
                var7 = var12.imageStyle;
                var4.imageStyle = var7;
                var7 = {};
                var7.height = var10;
                var7.width = var9;
                var4.style = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 18;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Card;
                var5 = {};
                var7 = var12.cardContainer;
                var5.style = var7;
                if (!var8) {
                    _fun80184_ip = 752;
                    continue _fun80184
                }
            case 502:
                var10 = _closure1_slot11;
                var9 = _closure1_slot7;
                var7 = {};
                var13 = var12.cardHeader;
                var7.style = var13;
                var18 = _closure1_slot10;
                var17 = _closure1_slot1;
                var25 = _closure1_slot2;
                var19 = 19;
                var13 = var25[var19];
                var17 = var17.bind(var3)(var13);
                var13 = {};
                var22 = _closure1_slot8;
                var28 = var16.inviter;
                var21 = var22.prototype;
                var21 = Object.create(var21, {
                    constructor: {
                        value: var22
                    }
                });
                var29 = var21;
                var20 = new var29[var22](var28, var27);
                var20 = var20 instanceof Object ? var20 : var21;
                var13.user = var20;
                var21 = _closure1_slot0;
                var19 = var25[var19];
                var19 = var21.bind(var3)(var19);
                var19 = var19.AvatarSizes;
                var19 = var19.XSMALL_20;
                var13.size = var19;
                var13.guildId = var3;
                var17 = var18.bind(var3)(var17, var13);
                var13 = new Array(2);
                var13[0] = var17;
                var19 = _closure1_slot10;
                var17 = 20;
                var17 = var25[var17];
                var17 = var21.bind(var3)(var17);
                var18 = var17.Text;
                var17 = {
                    'variant': 'text-md/normal',
                    'color': 'text-subtle'
                };
                var20 = 21;
                var22 = var25[var20];
                var22 = var21.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.format;
                var20 = var25[var20];
                var20 = var21.bind(var3)(var20);
                var20 = var20.t;
                var21 = var20.ri1ubC;
                var20 = {};
                var24 = function(arg0, arg1) { // Original name: usernameHook, environment: var24
                    _fun80185: for (var _fun80185_ip = 0;;) switch (_fun80185_ip) {
                        case 0:
                            var4 = _closure1_slot10;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 20;
                            var0 = var2[var0];
                            var3 = undefined;
                            var0 = var1.bind(var3)(var0);
                            var2 = var0.Text;
                            var1 = {
                                'variant': 'text-md/semibold',
                                'color': 'text-strong'
                            };
                            var0 = _closure2_slot0;
                            var5 = var0.inviter;
                            var0 = null;
                            var6 = var0 == var5;
                            var0 = undefined;
                            if (var6) {
                                _fun80185_ip = 77;
                                continue _fun80185
                            }
                        case 72:
                            var0 = var5.username;
                        case 77:
                            var1.children = var0;
                            var0 = arg1;
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var20.usernameHook = var24;
                var20 = var22.bind(var23)(var21, var20);
                var17.children = var20;
                var17 = var19.bind(var3)(var18, var17);
                var13[1] = var17;
                var7.children = var13;
                var8 = var10.bind(var3)(var9, var7);
            case 752:
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot10;
                var9 = _closure1_slot7;
                var8 = {};
                var12 = var12.cardContent;
                var8.style = var12;
                var13 = _closure1_slot10;
                var12 = _closure1_slot16;
                var11 = {};
                var11.invite = var16;
                var11.friendMemberIds = var15;
                var28 = var11;
                var27 = var14;
                var14 = copyDataProperties(var28, var27);
                var11 = var13.bind(var3)(var12, var11);
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var5.children = var7;
                var5 = var2.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1620, 660, 33, 1297, 671, 1304, 3110, 4857, 10173, 10184, 1417, 1443, 10189, 1464, 10171, 4862, 5413, 3901, 1234, 2]);