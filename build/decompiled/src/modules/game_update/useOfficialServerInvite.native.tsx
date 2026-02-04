// modules/game_update/useOfficialServerInvite.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.useCallback;
    var _closure1_slot5 = var7;
    var7 = var3.useEffect;
    var _closure1_slot6 = var7;
    var3 = var3.useState;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var _closure1_slot10 = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_update/useOfficialServerInvite.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        _fun118070: for (var _fun118070_ip = 0;;) switch (_fun118070_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.invite;
                var _closure2_slot0 = var5;
                var6 = var1.onJoinPress;
                var _closure2_slot1 = var6;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 6;
                var2 = var4[var2];
                var14 = undefined;
                var7 = var3.bind(var14)(var2);
                var4 = var7.useStateFromStores;
                var2 = _closure1_slot9;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    _fun118071: for (var _fun118071_ip = 0;;) switch (_fun118071_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var5 = null;
                            var1 = var5 == var0;
                            var0 = undefined;
                            if (var1) {
                                _fun118071_ip = 41;
                                continue _fun118071
                            }
                        case 18:
                            var1 = _closure2_slot0;
                            var1 = var1.guild;
                            var2 = var5 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun118071_ip = 41;
                                continue _fun118071
                            }
                        case 36:
                            var0 = var1.id;
                        case 41:
                            var0 = var5 != var0;
                            if (!var0) {
                                _fun118071_ip = 102;
                                continue _fun118071
                            }
                        case 48:
                            var3 = _closure1_slot9;
                            var2 = var3.isMember;
                            var1 = _closure2_slot0;
                            var7 = var5 == var1;
                            var1 = undefined;
                            if (var7) {
                                _fun118071_ip = 97;
                                continue _fun118071
                            }
                        case 74:
                            var4 = _closure2_slot0;
                            var4 = var4.guild;
                            var5 = var5 == var4;
                            var1 = undefined;
                            if (var5) {
                                _fun118071_ip = 97;
                                continue _fun118071
                            }
                        case 92:
                            var1 = var4.id;
                        case 97:
                            var0 = var2.bind(var3)(var1);
                        case 102:
                            return var0;
                    }
                };
                var3 = var4.bind(var7)(var3, var2);
                var _closure2_slot2 = var3;
                var4 = _closure1_slot5;
                var2 = new Array(3);
                var2[0] = var5;
                var2[1] = var6;
                var2[2] = var3;
                var0 = function() { // Environment: var0
                    _fun118072: for (var _fun118072_ip = 0;;) switch (_fun118072_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun118072_ip = 23;
                                continue _fun118072
                            }
                        case 13:
                            var3 = _closure2_slot1;
                            var1 = undefined;
                            var1 = var3.bind(var1)();
                        case 23:
                            var1 = _closure2_slot2;
                            if (!var1) {
                                _fun118072_ip = 72;
                                continue _fun118072
                            }
                        case 30:
                            var1 = _closure2_slot0;
                            var4 = var2 == var1;
                            var3 = undefined;
                            var1 = undefined;
                            if (var4) {
                                _fun118072_ip = 68;
                                continue _fun118072
                            }
                        case 45:
                            var4 = _closure2_slot0;
                            var4 = var4.guild;
                            var5 = var2 == var4;
                            var1 = undefined;
                            if (var5) {
                                _fun118072_ip = 68;
                                continue _fun118072
                            }
                        case 63:
                            var1 = var4.id;
                        case 68:
                            if (!(var2 == var1)) {
                                _fun118072_ip = 160;
                                continue _fun118072
                            }
                        case 72:
                            var1 = _closure2_slot0;
                            if (!(var2 != var1)) {
                                _fun118072_ip = 234;
                                continue _fun118072
                            }
                        case 83:
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 9;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var2);
                            var2 = var4.acceptInvite;
                            var1 = {};
                            var5 = _closure2_slot0;
                            var5 = var5.code;
                            var1.inviteKey = var5;
                            var5 = {};
                            var6 = 'Game Update Action Sheet';
                            var5.location = var6;
                            var1.context = var5;
                            var5 = true;
                            var1.skipOnboarding = var5;
                            var1 = var2.bind(var4)(var1);
                            _fun118072_ip = 234;
                            continue _fun118072;
                        case 160:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 7;
                            var2 = var4[var2];
                            var5 = var5.bind(var3)(var2);
                            var2 = var5.hideActionSheet;
                            var2 = var2.bind(var5)();
                            var2 = _closure1_slot0;
                            var1 = 8;
                            var1 = var4[var1];
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.transitionToGuild;
                            var0 = _closure2_slot0;
                            var0 = var0.guild;
                            var0 = var0.id;
                            var0 = var1.bind(var2)(var0);
                        case 234:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var4.bind(var14)(var0, var2);
                var0 = null;
                if (!(var0 != var5)) {
                    _fun118070_ip = 718;
                    continue _fun118070
                }
            case 126:
                var4 = var5.guild;
                if (!(var0 != var4)) {
                    _fun118070_ip = 718;
                    continue _fun118070
                }
            case 138:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 10;
                var4 = var7[var4];
                var7 = var6.bind(var14)(var4);
                var6 = var7.fromInviteGuild;
                var4 = var5.guild;
                var9 = var6.bind(var7)(var4);
                var4 = var0 == var5;
                var11 = undefined;
                if (var4) {
                    _fun118070_ip = 189;
                    continue _fun118070
                }
            case 183:
                var11 = var5.approximate_presence_count;
            case 189:
                var4 = var0 != var11;
                var8 = null;
                if (!var4) {
                    _fun118070_ip = 272;
                    continue _fun118070
                }
            case 198:
                var4 = 0;
                var4 = var11 > var4;
                var8 = null;
                if (!var4) {
                    _fun118070_ip = 272;
                    continue _fun118070
                }
            case 209:
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 11;
                var7 = var12[var4];
                var7 = var6.bind(var14)(var7);
                var10 = var7.intl;
                var7 = var10.formatToPlainString;
                var4 = var12[var4];
                var4 = var6.bind(var14)(var4);
                var4 = var4.t;
                var6 = var4["LC+S+m"];
                var4 = {};
                var4.membersOnline = var11;
                var8 = var7.bind(var10)(var6, var4);
            case 272:
                var4 = var0 == var5;
                var11 = undefined;
                if (var4) {
                    _fun118070_ip = 287;
                    continue _fun118070
                }
            case 281:
                var11 = var5.approximate_member_count;
            case 287:
                if (!(var0 == var11)) {
                    _fun118070_ip = 323;
                    continue _fun118070
                }
            case 291:
                var6 = var0 == var5;
                var4 = undefined;
                if (var6) {
                    _fun118070_ip = 320;
                    continue _fun118070
                }
            case 300:
                var5 = var5.guild;
                var6 = var0 == var5;
                var4 = undefined;
                if (var6) {
                    _fun118070_ip = 320;
                    continue _fun118070
                }
            case 314:
                var4 = var5.approximate_member_count;
            case 320:
                var11 = var4;
            case 323:
                var4 = var0 != var11;
                var7 = null;
                if (!var4) {
                    _fun118070_ip = 395;
                    continue _fun118070
                }
            case 332:
                var5 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 11;
                var6 = var12[var4];
                var6 = var5.bind(var14)(var6);
                var10 = var6.intl;
                var6 = var10.formatToPlainString;
                var4 = var12[var4];
                var4 = var5.bind(var14)(var4);
                var4 = var4.t;
                var5 = var4.zRl6XR;
                var4 = {};
                var4.count = var11;
                var7 = var6.bind(var10)(var5, var4);
            case 395:
                var4 = var9.splash;
                var4 = var0 != var4;
                var6 = null;
                if (!var4) {
                    _fun118070_ip = 503;
                    continue _fun118070
                }
            case 410:
                var5 = _closure1_slot1;
                var13 = _closure1_slot2;
                var4 = 12;
                var4 = var13[var4];
                var10 = var5.bind(var14)(var4);
                var5 = var10.getGuildSplashURL;
                var4 = {};
                var11 = var9.id;
                var4.id = var11;
                var11 = var9.splash;
                var4.splash = var11;
                var12 = _closure1_slot0;
                var11 = 13;
                var11 = var13[var11];
                var12 = var12.bind(var14)(var11);
                var11 = var12.getDevicePixelRatio;
                var12 = var11.bind(var12)();
                var11 = 400;
                var11 = var11 * var12;
                var4.size = var11;
                var6 = var5.bind(var10)(var4);
            case 503:
                var5 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 14;
                var4 = var10[var4];
                var11 = var5.bind(var14)(var4);
                var5 = var11.extractTimestamp;
                var4 = var9.id;
                var11 = var5.bind(var11)(var4);
                var5 = _closure1_slot0;
                var4 = 15;
                var4 = var10[var4];
                var10 = var5.bind(var14)(var4);
                var5 = var10.getEstablishedDate;
                var4 = _closure1_slot8;
                var4 = var4.locale;
                var13 = var5.bind(var10)(var11, var4);
                var4 = var0 != var13;
                var5 = null;
                if (!var4) {
                    _fun118070_ip = 649;
                    continue _fun118070
                }
            case 586:
                var10 = _closure1_slot0;
                var15 = _closure1_slot2;
                var4 = 11;
                var11 = var15[var4];
                var11 = var10.bind(var14)(var11);
                var12 = var11.intl;
                var11 = var12.formatToPlainString;
                var4 = var15[var4];
                var4 = var10.bind(var14)(var4);
                var4 = var4.t;
                var10 = var4.zb2Q56;
                var4 = {};
                var4.createdAtDate = var13;
                var5 = var11.bind(var12)(var10, var4);
            case 649:
                var10 = var9.features;
                var4 = var10.has;
                var1 = _closure1_slot10;
                var1 = var1.VERIFIED;
                var4 = var4.bind(var10)(var1);
                var1 = {};
                var1.guild = var9;
                var1.onlineText = var8;
                var1.memberText = var7;
                var1.splashUrl = var6;
                var1.establishedText = var5;
                var1.isVerified = var4;
                var1.isMember = var3;
                var1.handleJoinPress = var2;
                return var1;
            case 718:
                return var0;
        }
    };
    var2.useServerInviteDetails = var3;
    var1 = function(arg0) { // Environment: var1
        _fun118073: for (var _fun118073_ip = 0;;) switch (_fun118073_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.serverInviteUrl;
                var _closure2_slot0 = var2;
                var3 = _closure1_slot7;
                var6 = undefined;
                var4 = null;
                var7 = var3.bind(var6)(var4);
                var5 = _closure1_slot4;
                var3 = 2;
                var7 = var5.bind(var6)(var7, var3);
                var3 = 0;
                var3 = var7[var3];
                var5 = 1;
                var5 = var7[var5];
                var _closure2_slot1 = var5;
                var5 = _closure1_slot6;
                var1 = new Array(1);
                var1[0] = var2;
                var0 = function() { // Environment: var0
                    var1 = function() { // Environment: var0
                        var3 = _closure1_slot3;
                        var2 = undefined;
                        var1 = function*(arg0) { // Environment: var0
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun118077: for (var _fun118077_ip = 0;;) switch (_fun118077_ip) {
                                    case 0:
                                        StartGenerator();
                                        var7 = arg0;
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun118077_ip = 186;
                                            continue _fun118077
                                        }
                                    case 13:
                                        var1 = undefined;
                                        var2 = undefined;
                                        var5 = null;
                                        if (!(var5 != var7)) {
                                            _fun118077_ip = 183;
                                            continue _fun118077
                                        }
                                    case 26:
                                        var6 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var4 = 16;
                                        var4 = var8[var4];
                                        var6 = var6.bind(var1)(var4);
                                        var4 = var6.findCodedLink;
                                        var4 = var4.bind(var6)(var7);
                                        var2 = var4;
                                        if (!(var5 != var4)) {
                                            _fun118077_ip = 183;
                                            continue _fun118077
                                        }
                                    case 67:
                                        var4 = var2;
                                        var5 = var4.type;
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var4 = 17;
                                        var4 = var7[var4];
                                        var4 = var6.bind(var1)(var4);
                                        var4 = var4.CodedLinkType;
                                        var4 = var4.INVITE;
                                        if (!(var5 === var4)) {
                                            _fun118077_ip = 183;
                                            continue _fun118077
                                        }
                                    case 111: // try_start_0
                                        var4 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var3 = 18;
                                        var3 = var5[var3];
                                        var4 = var4.bind(var1)(var3);
                                        var3 = var2.code;
                                        var2 = 'game_update_action_sheet';
                                        var2 = var4.bind(var1)(var3, var2);
                                        SaveGenerator(address = 152);
                                    case 150:
                                        return var2;
                                    case 152:
                                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                        if (var3) {
                                            _fun118077_ip = 178;
                                            continue _fun118077
                                        }
                                    case 158:
                                        var4 = var2.invite;
                                        var3 = _closure2_slot1;
                                        var3 = var3.bind(var1)(var4);
                                    case 176: // try_end0
                                        _fun118077_ip = 183;
                                        continue _fun118077;
                                    case 178:
                                        return var2;
                                    case 181: // catch_target0
                                        CatchBlockStart(arg_register = 2);
                                    case 183:
                                        return var1;
                                    case 186:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var1 = var3.bind(var2)(var1);
                        var _closure4_slot0 = var1;
                        var0 = function() { // Environment: var0
                            var0 = undefined;
                            var3 = _closure4_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var0 = undefined;
                    var2 = var1.bind(var0)();
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var5.bind(var6)(var0, var1);
                var1 = var4 == var3;
                var0 = null;
                if (var1) {
                    _fun118073_ip = 119;
                    continue _fun118073
                }
            case 95:
                var1 = var4 == var2;
                var0 = null;
                if (var1) {
                    _fun118073_ip = 119;
                    continue _fun118073
                }
            case 104:
                var1 = {};
                var1.invite = var3;
                var1.serverInviteUrl = var2;
                var0 = var1;
            case 119:
                return var0;
        }
    };
    var2.useOfficialServerInvite = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 1685, 1374, 660, 566, 3278, 5615, 5898, 1598, 1234, 1417, 1443, 21, 3336, 3322, 3327, 12124, 2]);