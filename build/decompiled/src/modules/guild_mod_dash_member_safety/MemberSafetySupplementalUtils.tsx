// modules/guild_mod_dash_member_safety/MemberSafetySupplementalUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var7;
    var0 = function arg0, arg1() {
        var1 = arg0;
        var0 = arg1;
        var0 = var1 + var0;
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        var2 = arg1;
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure1_slot9;
            var2 = _closure2_slot0;
            var1 = undefined;
            var0 = arg0;
            var0 = var3.bind(var1)(var2, var0);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        var2 = arg0;
        var1 = var2.split;
        var0 = '-';
        var1 = var1.bind(var2)(var0);
        var0 = 1;
        var0 = var1[var0];
        return var0;
    };
    var _closure1_slot11 = var0;
    var0 = function arg0, arg1() {
        var2 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot5;
            var1 = _closure2_slot0;
            var0 = arg0;
            var2[var0] = var1;
            var0 = undefined;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1.user_id;
        var0.userId = var2;
        var2 = var1.source_invite_code;
        var0.sourceInviteCode = var2;
        var2 = var1.join_source_type;
        var0.joinSourceType = var2;
        var2 = var1.inviter_id;
        var0.inviterId = var2;
        var1 = var1.integration_type;
        var0.integrationType = var1;
        return var0;
    };
    var _closure1_slot13 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun40435: for (var _fun40435_ip = 0;;) switch (_fun40435_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun40435_ip = 405;
                            continue _fun40435
                        }
                    case 15:
                        var7 = var9;
                        var4 = undefined;
                        var2 = undefined;
                        var10 = undefined;
                        var5 = undefined;
                        var _closure4_slot0 = var4;
                        var8 = _closure1_slot10;
                        var3 = arg1;
                        var8 = var8.bind(var4)(var9, var3);
                        var2 = var8;
                        var3 = function arg0() {
                            var2 = arg0;
                            var1 = var2.filter;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure1_slot5;
                                var1 = arg0;
                                var1 = var2[var1];
                                var0 = _closure1_slot6;
                                var0 = var0.UNFETCHED;
                                var0 = var1 <= var0;
                                return var0;
                            };
                            var2 = var1.bind(var2)(var0);
                            var1 = var2.map;
                            var0 = _closure1_slot11;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var3 = var3.bind(var4)(var8);
                        var10 = var3;
                        var8 = var3.length;
                        var3 = 0;
                        if (!(var3 !== var8)) {
                            _fun40435_ip = 398;
                            continue _fun40435
                        }
                    case 76:
                        var9 = _closure1_slot12;
                        var8 = var2;
                        var3 = _closure1_slot6;
                        var3 = var3.PENDING;
                        var3 = var9.bind(var4)(var8, var3);
                    case 99: // try_start_0
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var3 = 7;
                        var3 = var9[var3];
                        var3 = var8.bind(var4)(var3);
                        var9 = var3.HTTP;
                        var8 = var9.post;
                        var3 = {};
                        var13 = _closure1_slot4;
                        var12 = var13.MEMBER_SAFETY_SUPPLEMENTAL;
                        var11 = var7;
                        var11 = var12.bind(var13)(var11);
                        var3.url = var11;
                        var11 = {};
                        var12 = var10;
                        var11.user_ids = var12;
                        var3.body = var11;
                        var11 = true;
                        var3.rejectWithError = var11;
                        var3 = var8.bind(var9)(var3);
                        SaveGenerator(address = 183);
                    case 181:
                        return var3;
                    case 183:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 8);
                        if (var8) {
                            _fun40435_ip = 366;
                            continue _fun40435
                        }
                    case 192:
                        var5 = var3;
                        var8 = global;
                        var11 = var8.Array;
                        var9 = var11.isArray;
                        var8 = var3.body;
                        var8 = var9.bind(var11)(var8);
                        if (var8) {
                            _fun40435_ip = 251;
                            continue _fun40435
                        }
                    case 221:
                        var11 = _closure1_slot12;
                        var9 = var2;
                        var8 = _closure1_slot6;
                        var8 = var8.FAILED;
                        var8 = var11.bind(var4)(var9, var8);
                    case 244: // try_end0
                        var8 = new Array(0);
                        return var8;
                    case 251: // try_start_1
                        var9 = var5.body;
                        var8 = var9.map;
                        var5 = _closure1_slot13;
                        var5 = var8.bind(var9)(var5);
                        var9 = new Array(0);
                        _closure4_slot0 = var9;
                        var11 = var5.forEach;
                        var8 = function(arg0) { // Environment: var6
                            var0 = arg0;
                            var2 = var0.userId;
                            var1 = _closure4_slot0;
                            var0 = var1.push;
                            var0 = var0.bind(var1)(var2);
                            return var0;
                        };
                        var8 = var11.bind(var5)(var8);
                        var8 = _closure1_slot10;
                        var9 = var8.bind(var4)(var7, var9);
                        var11 = var10;
                        var10 = var11.filter;
                        var6 = function(arg0) { // Environment: var6
                            var2 = _closure4_slot0;
                            var1 = var2.includes;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            var0 = !var0;
                            return var0;
                        };
                        var6 = var10.bind(var11)(var6);
                        var8 = var8.bind(var4)(var7, var6);
                        var7 = _closure1_slot12;
                        var6 = _closure1_slot6;
                        var6 = var6.SUCCEEDED;
                        var6 = var7.bind(var4)(var9, var6);
                        var6 = _closure1_slot6;
                        var6 = var6.FAILED;
                        var6 = var7.bind(var4)(var8, var6);
                    case 363: // try_end1
                        return var5;
                    case 366:
                        return var3;
                    case 369: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure1_slot12;
                        var1 = _closure1_slot6;
                        var1 = var1.FAILED;
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = new Array(0);
                        return var1;
                    case 398:
                        var1 = new Array(0);
                        return var1;
                    case 405:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot14 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var11 = 0;
    var3 = var7[var11];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var3 = var7[var10];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot4 = var3;
    var3 = {};
    var _closure1_slot5 = var3;
    var3 = {};
    var3.FAILED = var11;
    var4 = 'FAILED';
    var3[var11] = var4;
    var3.UNFETCHED = var10;
    var4 = 'UNFETCHED';
    var3[var10] = var4;
    var9 = 2;
    var3.PENDING = var9;
    var4 = 'PENDING';
    var3[var9] = var4;
    var8 = 3;
    var3.SUCCEEDED = var8;
    var4 = 'SUCCEEDED';
    var3[var8] = var4;
    var5 = 4;
    var3.FAILED_NO_RETRY = var5;
    var4 = 'FAILED_NO_RETRY';
    var3[var5] = var4;
    var _closure1_slot6 = var3;
    var4 = {};
    var4.UNSPECIFIED = var11;
    var3 = 'UNSPECIFIED';
    var4[var11] = var3;
    var4.BOT = var10;
    var3 = 'BOT';
    var4[var10] = var3;
    var4.INTEGRATION = var9;
    var3 = 'INTEGRATION';
    var4[var9] = var3;
    var4.DISCOVERY = var8;
    var3 = 'DISCOVERY';
    var4[var8] = var3;
    var4.HUB = var5;
    var3 = 'HUB';
    var4[var5] = var3;
    var5 = 5;
    var4.INVITE = var5;
    var3 = 'INVITE';
    var4[var5] = var3;
    var5 = 6;
    var4.VANITY_URL = var5;
    var3 = 'VANITY_URL';
    var4[var5] = var3;
    var5 = 7;
    var4.MANUAL_MEMBER_VERIFICATION = var5;
    var3 = 'MANUAL_MEMBER_VERIFICATION';
    var4[var5] = var3;
    var5 = 8;
    var4.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL = var5;
    var3 = 'SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL';
    var4[var5] = var3;
    var _closure1_slot7 = var4;
    var3 = {};
    var8 = 'discord';
    var3.DISCORD = var8;
    var8 = 'twitch';
    var3.TWITCH = var8;
    var8 = 'youtube';
    var3.YOUTUBE = var8;
    var8 = 'guild_subscription';
    var3.GUILD_SUBSCRIPTION = var8;
    var _closure1_slot8 = var3;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_mod_dash_member_safety/MemberSafetySupplementalUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function arg0, arg1() {
        var2 = arg1;
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var5 = _closure2_slot0;
            var1 = _closure1_slot6;
            var3 = var1.SUCCEEDED;
            var2 = _closure1_slot5;
            var4 = _closure1_slot9;
            var0 = undefined;
            var1 = arg0;
            var1 = var4.bind(var0)(var5, var1);
            var2[var1] = var3;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var2.registerFetchedSupplementals = var5;
    var2.JoinSourceType = var4;
    var4 = function(arg0) { // Environment: var1
        _fun40442: for (var _fun40442_ip = 0;;) switch (_fun40442_ip) {
            case 0:
                var3 = arg0;
                var6 = arguments[1];
                var1 = arguments[2];
                var4 = undefined;
                if (!(var6 === var4)) {
                    _fun40442_ip = 17;
                    continue _fun40442
                }
            case 15:
                var6 = null;
            case 17:
                if (!(var1 === var4)) {
                    _fun40442_ip = 23;
                    continue _fun40442
                }
            case 21:
                var1 = false;
            case 23:
                var2 = _closure1_slot7;
                var2 = var2.BOT;
                if (!(var2 !== var3)) {
                    _fun40442_ip = 707;
                    continue _fun40442
                }
            case 43:
                var2 = _closure1_slot7;
                var2 = var2.INTEGRATION;
                if (!(var2 !== var3)) {
                    _fun40442_ip = 650;
                    continue _fun40442
                }
            case 60:
                var2 = _closure1_slot7;
                var2 = var2.DISCOVERY;
                if (!(var2 !== var3)) {
                    _fun40442_ip = 591;
                    continue _fun40442
                }
            case 77:
                var2 = _closure1_slot7;
                var2 = var2.HUB;
                if (!(var2 !== var3)) {
                    _fun40442_ip = 532;
                    continue _fun40442
                }
            case 94:
                var2 = _closure1_slot7;
                var2 = var2.INVITE;
                if (!(var2 !== var3)) {
                    _fun40442_ip = 473;
                    continue _fun40442
                }
            case 111:
                var2 = _closure1_slot7;
                var2 = var2.VANITY_URL;
                if (!(var2 !== var3)) {
                    _fun40442_ip = 336;
                    continue _fun40442
                }
            case 128:
                var2 = _closure1_slot7;
                var2 = var2.MANUAL_MEMBER_VERIFICATION;
                if (!(var2 !== var3)) {
                    _fun40442_ip = 277;
                    continue _fun40442
                }
            case 145:
                var2 = _closure1_slot7;
                var2 = var2.SOCIAL_LAYER_INTEGRATION_LINKED_CHANNEL;
                if (!(var2 !== var3)) {
                    _fun40442_ip = 218;
                    continue _fun40442
                }
            case 159:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 2;
                var3 = var8[var2];
                var3 = var7.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var2 = var8[var2];
                var2 = var7.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2.DvMBkS;
                var2 = var3.bind(var5)(var2);
                return var2;
            case 218:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 2;
                var3 = var8[var2];
                var3 = var7.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var2 = var8[var2];
                var2 = var7.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2["9/ZreX"];
                var2 = var3.bind(var5)(var2);
                return var2;
            case 277:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var2 = 2;
                var3 = var8[var2];
                var3 = var7.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var2 = var8[var2];
                var2 = var7.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2.vdu7oS;
                var2 = var3.bind(var5)(var2);
                return var2;
            case 336:
                var2 = null;
                if (!(var2 != var6)) {
                    _fun40442_ip = 414;
                    continue _fun40442
                }
            case 342:
                if (var1) {
                    _fun40442_ip = 414;
                    continue _fun40442
                }
            case 345:
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 2;
                var3 = var7[var1];
                var3 = var2.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.formatToPlainString;
                var1 = var7[var1];
                var1 = var2.bind(var4)(var1);
                var1 = var1.t;
                var2 = var1.EIUjRy;
                var1 = {};
                var1.vanityUrl = var6;
                var1 = var3.bind(var5)(var2, var1);
                _fun40442_ip = 471;
                continue _fun40442;
            case 414:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 2;
                var3 = var7[var2];
                var3 = var6.bind(var4)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.t;
                var2 = var2.dGiD1O;
                var1 = var3.bind(var5)(var2);
            case 471:
                return var1;
            case 473:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 2;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["/3vIRd"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 532:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 2;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.Op8B3O;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 591:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 2;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1["Ql/e9Y"];
                var1 = var2.bind(var3)(var1);
                return var1;
            case 650:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 2;
                var2 = var6[var1];
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.gmCUFw;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 707:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 2;
                var1 = var5[var0];
                var1 = var3.bind(var4)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.t;
                var0 = var0.HumZAi;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getJoinSourceTypeLabel = var4;
    var2.IntegrationType = var3;
    var3 = function(arg0) { // Environment: var1
        _fun40443: for (var _fun40443_ip = 0;;) switch (_fun40443_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot8;
                var1 = var1.TWITCH;
                if (!(var1 !== var2)) {
                    _fun40443_ip = 157;
                    continue _fun40443
                }
            case 23:
                var1 = _closure1_slot8;
                var1 = var1.YOUTUBE;
                if (!(var1 !== var2)) {
                    _fun40443_ip = 96;
                    continue _fun40443
                }
            case 37:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 2;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.gmCUFw;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 96:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 2;
                var2 = var6[var1];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var5.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.PHSAsn;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 157:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 2;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.AVGAkw;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.getIntegrationLabel = var3;
    var3 = function(arg0) { // Environment: var1
        _fun40444: for (var _fun40444_ip = 0;;) switch (_fun40444_ip) {
            case 0:
                var8 = arg0;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 3;
                var0 = var4[var0];
                var5 = undefined;
                var6 = var3.bind(var5)(var0);
                var1 = var6.get;
                var7 = _closure1_slot0;
                var0 = 4;
                var0 = var4[var0];
                var7 = var7.bind(var5)(var0);
                var0 = var7.useLegacyPlatformType;
                var0 = var0.bind(var7)(var8);
                var1 = var1.bind(var6)(var0);
                var0 = 5;
                var0 = var4[var0];
                var0 = var3.bind(var5)(var0);
                var4 = var0.bind(var5)();
                var6 = null;
                var3 = var6 != var1;
                var0 = null;
                if (!var3) {
                    _fun40444_ip = 222;
                    continue _fun40444
                }
            case 95:
                var3 = _closure1_slot8;
                var9 = var3.TWITCH;
                var7 = new Array(2);
                var7[0] = var9;
                var3 = var3.YOUTUBE;
                var7[1] = var3;
                var3 = var7.includes;
                var3 = var3.bind(var7)(var8);
                var0 = null;
                if (!var3) {
                    _fun40444_ip = 222;
                    continue _fun40444
                }
            case 138:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 6;
                var2 = var6[var2];
                var3 = var3.bind(var5)(var2);
                var2 = var3.isThemeDark;
                var2 = var2.bind(var3)(var4);
                var1 = var1.icon;
                if (var2) {
                    _fun40444_ip = 185;
                    continue _fun40444
                }
            case 177:
                var4 = var1.lightSVG;
                _fun40444_ip = 191;
                continue _fun40444;
            case 185:
                var4 = var1.darkSVG;
            case 191:
                var1 = global;
                var1 = var1.HermesInternal;
                var3 = var1.concat;
                var2 = "url('";
                var1 = "')";
                var0 = var3.bind(var2)(var4, var1);
            case 222:
                return var0;
        }
    };
    var2.useGetIntegrationIconString = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchMemberSupplemental = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 1234, 4361, 4484, 3207, 3167, 507, 2]);