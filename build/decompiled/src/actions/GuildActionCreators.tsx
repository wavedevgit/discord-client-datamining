// actions/GuildActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var6;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun43054: for (var _fun43054_ip = 0;;) switch (_fun43054_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        var3 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 4);
                        if (var4) {
                            _fun43054_ip = 1456;
                            continue _fun43054
                        }
                    case 18:
                        var6 = var1;
                        var _closure4_slot0 = var1;
                        var4 = undefined;
                        if (!(var3 === var4)) {
                            _fun43054_ip = 33;
                            continue _fun43054
                        }
                    case 31:
                        var3 = {};
                    case 33:
                        var21 = undefined;
                        var _closure4_slot1 = var4;
                        var22 = undefined;
                        var _closure4_slot2 = var4;
                        var23 = undefined;
                        var9 = undefined;
                        var _closure4_slot3 = var4;
                        var19 = undefined;
                        var15 = undefined;
                        var12 = undefined;
                        var11 = undefined;
                        var7 = undefined;
                        var8 = undefined;
                        var13 = undefined;
                        SaveGenerator(address = 71);
                    case 69:
                        return var4;
                    case 71:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 10);
                        if (var10) {
                            _fun43054_ip = 1453;
                            continue _fun43054
                        }
                    case 80:
                        var10 = var3.source;
                        var21 = var10;
                        _closure4_slot1 = var10;
                        var10 = var3.loadId;
                        var22 = var10;
                        _closure4_slot2 = var10;
                        var23 = var3.lurkLocation;
                        var14 = var3.lurker;
                        var10 = null;
                        var3 = var10 != var14;
                        if (!var3) {
                            _fun43054_ip = 129;
                            continue _fun43054
                        }
                    case 126:
                        var3 = var14;
                    case 129:
                        var9 = var3;
                        _closure4_slot3 = var3;
                        var16 = _closure1_slot13;
                        var14 = var16.getCurrentUser;
                        var18 = var14.bind(var16)();
                        var16 = var10 == var18;
                        var14 = undefined;
                        if (var16) {
                            _fun43054_ip = 182;
                            continue _fun43054
                        }
                    case 161:
                        var17 = var18.hasFlag;
                        var16 = _closure1_slot16;
                        var16 = var16.QUARANTINED;
                        var14 = var17.bind(var18)(var16);
                    case 182:
                        if (!(var10 != var14)) {
                            _fun43054_ip = 192;
                            continue _fun43054
                        }
                    case 186:
                        if (var14) {
                            _fun43054_ip = 1393;
                            continue _fun43054
                        }
                    case 192:
                        var16 = _closure1_slot1;
                        var14 = _closure1_slot3;
                        var18 = 13;
                        var14 = var14[var18];
                        var17 = var16.bind(var4)(var14);
                        var16 = var17.wait;
                        var14 = function() { // Environment: var2
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dispatch;
                            var0 = {};
                            var3 = 'GUILD_JOIN';
                            var0.type = var3;
                            var4 = _closure4_slot0;
                            var0.guildId = var4;
                            var4 = _closure4_slot3;
                            var0.lurker = var4;
                            var4 = _closure4_slot1;
                            var0.source = var4;
                            var3 = _closure4_slot2;
                            var0.loadId = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var14 = var16.bind(var17)(var14);
                    case 228: // try_start_0
                        var16 = _closure1_slot12;
                        var14 = var16.getGuildId;
                        var17 = var14.bind(var16)();
                        var16 = var6;
                        var14 = null;
                        if (!(var16 === var17)) {
                            _fun43054_ip = 295;
                            continue _fun43054
                        }
                    case 251:
                        var20 = _closure1_slot10;
                        var17 = var20.getGuild;
                        var16 = var6;
                        var16 = var17.bind(var20)(var16);
                        var16 = var10 != var16;
                        var14 = null;
                        if (!var16) {
                            _fun43054_ip = 295;
                            continue _fun43054
                        }
                    case 277:
                        var20 = _closure1_slot11;
                        var17 = var20.getChannelId;
                        var16 = var6;
                        var14 = var17.bind(var20)(var16);
                    case 295:
                        var19 = var14;
                        var16 = _closure1_slot0;
                        var17 = _closure1_slot3;
                        var14 = 15;
                        var14 = var17[var14];
                        var14 = var16.bind(var4)(var14);
                        var17 = var14.HTTP;
                        var16 = var17.put;
                        var14 = {};
                        var25 = _closure1_slot15;
                        var24 = var25.GUILD_JOIN;
                        var20 = var6;
                        var20 = var24.bind(var25)(var20);
                        var14.url = var20;
                        var20 = {};
                        var25 = var9;
                        var20.lurker = var25;
                        var24 = null;
                        if (!var25) {
                            _fun43054_ip = 382;
                            continue _fun43054
                        }
                    case 368:
                        var26 = _closure1_slot7;
                        var25 = var26.getSessionId;
                        var24 = var25.bind(var26)();
                    case 382:
                        var20.session_id = var24;
                        var20.recommendation_load_id = var22;
                        var24 = var9;
                        var22 = null;
                        if (!var24) {
                            _fun43054_ip = 417;
                            continue _fun43054
                        }
                    case 402:
                        var24 = var23;
                        var24 = var10 != var24;
                        var22 = null;
                        if (!var24) {
                            _fun43054_ip = 417;
                            continue _fun43054
                        }
                    case 414:
                        var22 = var23;
                    case 417:
                        var20.location = var22;
                        var14.query = var20;
                        var20 = {};
                        var20.source = var21;
                        var14.context = var20;
                        var20 = true;
                        var14.oldFormErrors = var20;
                        var20 = {};
                        var14.body = var20;
                        var20 = false;
                        var14.rejectWithError = var20;
                        var14 = var16.bind(var17)(var14);
                        SaveGenerator(address = 464);
                    case 462:
                        return var14;
                    case 464:
                        ResumeGenerator(result_out_reg = 14, return_bool_out_reg = 16);
                        if (var16) {
                            _fun43054_ip = 929;
                            continue _fun43054
                        }
                    case 473:
                        var15 = var14;
                        var16 = var14.body;
                        var16 = var16.join_request;
                        if (!(var10 != var16)) {
                            _fun43054_ip = 556;
                            continue _fun43054
                        }
                    case 491:
                        var17 = _closure1_slot1;
                        var16 = _closure1_slot3;
                        var16 = var16[var18];
                        var20 = var17.bind(var4)(var16);
                        var17 = var20.dispatch;
                        var16 = {};
                        var21 = 'USER_GUILD_JOIN_REQUEST_UPDATE';
                        var16.type = var21;
                        var21 = var6;
                        var16.guildId = var21;
                        var21 = var15;
                        var21 = var21.body;
                        var21 = var21.join_request;
                        var16.request = var21;
                        var16 = var17.bind(var20)(var16);
                    case 556:
                        var20 = _closure1_slot10;
                        var17 = var20.getGuild;
                        var16 = var6;
                        var16 = var17.bind(var20)(var16);
                        if (!(var10 == var16)) {
                            _fun43054_ip = 597;
                            continue _fun43054
                        }
                    case 577:
                        var16 = var15;
                        var16 = var16.body;
                        var16 = var16.show_verification_form;
                        if (var16) {
                            _fun43054_ip = 877;
                            continue _fun43054
                        }
                    case 597:
                        var16 = var15;
                        var16 = var16.body;
                        var16 = var16.welcome_screen;
                        if (!(var10 != var16)) {
                            _fun43054_ip = 687;
                            continue _fun43054
                        }
                    case 615:
                        var17 = _closure1_slot1;
                        var16 = _closure1_slot3;
                        var16 = var16[var18];
                        var20 = var17.bind(var4)(var16);
                        var17 = var20.dispatch;
                        var16 = {};
                        var21 = 'WELCOME_SCREEN_UPDATE';
                        var16.type = var21;
                        var21 = var15;
                        var22 = var21.body;
                        var22 = var22.id;
                        var16.guildId = var22;
                        var21 = var21.body;
                        var21 = var21.welcome_screen;
                        var16.welcomeScreen = var21;
                        var16 = var17.bind(var20)(var16);
                    case 687:
                        var16 = var15;
                        var16 = var16.body;
                        var16 = var16.approximate_presence_count;
                        if (!(var10 != var16)) {
                            _fun43054_ip = 775;
                            continue _fun43054
                        }
                    case 705:
                        var17 = _closure1_slot1;
                        var16 = _closure1_slot3;
                        var16 = var16[var18];
                        var18 = var17.bind(var4)(var16);
                        var17 = var18.dispatch;
                        var16 = {};
                        var20 = 'ONLINE_GUILD_MEMBER_COUNT_UPDATE';
                        var16.type = var20;
                        var20 = var15;
                        var21 = var20.body;
                        var21 = var21.id;
                        var16.guildId = var21;
                        var20 = var20.body;
                        var20 = var20.approximate_presence_count;
                        var16.count = var20;
                        var16 = var17.bind(var18)(var16);
                    case 775:
                        var16 = var9;
                        if (var16) {
                            _fun43054_ip = 871;
                            continue _fun43054
                        }
                    case 781:
                        var18 = _closure1_slot0;
                        var16 = _closure1_slot3;
                        var17 = 18;
                        var17 = var16[var17];
                        var18 = var18.bind(var4)(var17);
                        var17 = 17;
                        var17 = var16[var17];
                        var16 = var16.paths;
                        var16 = var18.bind(var4)(var17, var16);
                        SaveGenerator(address = 823);
                    case 821:
                        return var16;
                    case 823:
                        ResumeGenerator(result_out_reg = 16, return_bool_out_reg = 17);
                        if (var17) {
                            _fun43054_ip = 868;
                            continue _fun43054
                        }
                    case 829:
                        var18 = var16.default;
                        var17 = {};
                        var20 = var6;
                        var17.guildId = var20;
                        var17.returnChannelId = var19;
                        var17 = var18.bind(var4)(var17);
                        SaveGenerator(address = 859);
                    case 857:
                        return var17;
                    case 859:
                        ResumeGenerator(result_out_reg = 17, return_bool_out_reg = 18);
                        if (!var18) {
                            _fun43054_ip = 871;
                            continue _fun43054
                        }
                    case 865: // try_end0
                        return var17;
                    case 868:
                        return var16;
                    case 871: // try_start_1
                        var16 = var15;
                    case 874: // try_end1
                        return var16;
                    case 877: // try_start_2
                        var17 = _closure1_slot0;
                        var18 = _closure1_slot3;
                        var16 = 16;
                        var16 = var18[var16];
                        var18 = var17.bind(var4)(var16);
                        var17 = var18.transitionTo;
                        var20 = _closure1_slot19;
                        var19 = var20.GUILD_MEMBER_VERIFICATION;
                        var16 = var6;
                        var16 = var19.bind(var20)(var16);
                        var16 = var17.bind(var18)(var16);
                    case 926: // try_end2
                        return var15;
                    case 929:
                        return var14;
                    case 932: // catch_target0 // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 14);
                        var5 = var14;
                        var14 = var14.body;
                        var12 = var14;
                        var15 = var10 == var14;
                        var14 = undefined;
                        if (var15) {
                            _fun43054_ip = 959;
                            continue _fun43054
                        }
                    case 954:
                        var14 = var12.code;
                    case 959:
                        var12 = _closure1_slot14;
                        var12 = var12.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED;
                        if (!(var14 === var12)) {
                            _fun43054_ip = 1014;
                            continue _fun43054
                        }
                    case 973:
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot3;
                        var12 = 19;
                        var12 = var15[var12];
                        var15 = var14.bind(var4)(var12);
                        var14 = var15.openAgeGateModal;
                        var12 = _closure1_slot21;
                        var12 = var12.JOIN_LARGE_GUILD_UNDERAGE;
                        var12 = var14.bind(var15)(var12);
                    case 1014:
                        var12 = var5;
                        var12 = var12.body;
                        var11 = var12;
                        var14 = var10 == var12;
                        var12 = undefined;
                        if (var14) {
                            _fun43054_ip = 1039;
                            continue _fun43054
                        }
                    case 1034:
                        var12 = var11.code;
                    case 1039:
                        var11 = _closure1_slot14;
                        var11 = var11.TOO_MANY_USER_GUILDS;
                        if (!(var12 === var11)) {
                            _fun43054_ip = 1156;
                            continue _fun43054
                        }
                    case 1053:
                        var12 = _closure1_slot13;
                        var11 = var12.getCurrentUser;
                        var15 = var11.bind(var12)();
                        var13 = var15;
                        var14 = _closure1_slot1;
                        var16 = _closure1_slot3;
                        var12 = 20;
                        var12 = var16[var12];
                        var14 = var14.bind(var4)(var12);
                        var12 = var14.canUseIncreasedGuildCap;
                        var12 = var12.bind(var14)(var15);
                        var11 = var12;
                        if (var12) {
                            _fun43054_ip = 1134;
                            continue _fun43054
                        }
                    case 1106:
                        var12 = var13;
                        var14 = var10 == var12;
                        var12 = undefined;
                        if (var14) {
                            _fun43054_ip = 1131;
                            continue _fun43054
                        }
                    case 1118:
                        var14 = var13;
                        var13 = var14.isStaff;
                        var12 = var13.bind(var14)();
                    case 1131:
                        var11 = var12;
                    case 1134:
                        var12 = _closure1_slot22;
                        if (var11) {
                            _fun43054_ip = 1147;
                            continue _fun43054
                        }
                    case 1141:
                        var11 = _closure1_slot17;
                        _fun43054_ip = 1151;
                        continue _fun43054;
                    case 1147:
                        var11 = _closure1_slot18;
                    case 1151:
                        var11 = var12.bind(var4)(var11);
                    case 1156:
                        var11 = var5;
                        var11 = var11.body;
                        var7 = var11;
                        var12 = var10 == var11;
                        var11 = undefined;
                        if (var12) {
                            _fun43054_ip = 1181;
                            continue _fun43054
                        }
                    case 1176:
                        var11 = var7.code;
                    case 1181:
                        var7 = _closure1_slot14;
                        var7 = var7.GUILD_AT_CAPACITY;
                        if (!(var11 === var7)) {
                            _fun43054_ip = 1334;
                            continue _fun43054
                        }
                    case 1198:
                        var11 = _closure1_slot1;
                        var17 = _closure1_slot3;
                        var7 = 11;
                        var7 = var17[var7];
                        var12 = var11.bind(var4)(var7);
                        var11 = var12.show;
                        var7 = {};
                        var16 = _closure1_slot0;
                        var13 = 12;
                        var14 = var17[var13];
                        var14 = var16.bind(var4)(var14);
                        var18 = var14.intl;
                        var15 = var18.string;
                        var14 = var17[var13];
                        var14 = var16.bind(var4)(var14);
                        var14 = var14.t;
                        var14 = var14.ZZlox4;
                        var14 = var15.bind(var18)(var14);
                        var7.title = var14;
                        var14 = var17[var13];
                        var14 = var16.bind(var4)(var14);
                        var15 = var14.intl;
                        var14 = var15.string;
                        var13 = var17[var13];
                        var13 = var16.bind(var4)(var13);
                        var13 = var13.t;
                        var13 = var13.ZUEGFn;
                        var13 = var14.bind(var15)(var13);
                        var7.body = var13;
                        var7 = var11.bind(var12)(var7);
                    case 1334:
                        var7 = var9;
                        if (!var9) {
                            _fun43054_ip = 1379;
                            continue _fun43054
                        }
                    case 1340:
                        var9 = var5;
                        var9 = var9.body;
                        var8 = var9;
                        var10 = var10 == var9;
                        var9 = undefined;
                        if (var10) {
                            _fun43054_ip = 1365;
                            continue _fun43054
                        }
                    case 1360:
                        var9 = var8.code;
                    case 1365:
                        var8 = _closure1_slot14;
                        var8 = var8.UNKNOWN_GUILD;
                        var7 = var9 === var8;
                    case 1379:
                        if (!var7) {
                            _fun43054_ip = 1391;
                            continue _fun43054
                        }
                    case 1382:
                        var7 = _closure1_slot23;
                        var6 = var7.bind(var4)(var6);
                    case 1391:
                        throw var5;
                    case 1393:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var3 = 14;
                        var3 = var6[var3];
                        var3 = var5.bind(var4)(var3);
                        var3 = var3.bind(var4)();
                        var3 = global;
                        var4 = var3.Promise;
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var4
                            }
                        });
                        var28 = function(arg0, arg1) { // Environment: var2
                            var0 = global;
                            var0 = var0.Error;
                            var1 = var0.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var4 = var1;
                            var0 = new var4[var0](var3);
                            var2 = var0 instanceof Object ? var0 : var1;
                            var1 = arg1;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                            return var0;
                        };
                        var29 = var3;
                        var2 = new var29[var4](var28, var27);
                        var2 = var2 instanceof Object ? var2 : var3;
                        return var2;
                    case 1453:
                        return var1;
                    case 1456:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot24 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot24 = var0;
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = _closure1_slot10;
            var1 = var2.addConditionalChangeListener;
            var0 = function() { // Environment: var0
                _fun43059: for (var _fun43059_ip = 0;;) switch (_fun43059_ip) {
                    case 0:
                        var2 = _closure1_slot10;
                        var1 = var2.getGuild;
                        var0 = _closure2_slot0;
                        var3 = var1.bind(var2)(var0);
                        var0 = null;
                        var0 = var0 == var3;
                        if (var0) {
                            _fun43059_ip = 49;
                            continue _fun43059
                        }
                    case 33:
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
                        var0 = false;
                    case 49:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot25 = var1;
    var0 = ['icon', 'unicodeEmoji'];
    var _closure1_slot4 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var7 = var3.AbortCodes;
    var _closure1_slot14 = var7;
    var7 = var3.Endpoints;
    var _closure1_slot15 = var7;
    var7 = var3.UserFlags;
    var _closure1_slot16 = var7;
    var7 = var3.MAX_USER_GUILDS;
    var _closure1_slot17 = var7;
    var7 = var3.MAX_USER_GUILDS_PREMIUM;
    var _closure1_slot18 = var7;
    var7 = var3.Routes;
    var _closure1_slot19 = var7;
    var3 = var3.AnalyticEvents;
    var _closure1_slot20 = var3;
    var3 = 10;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.AgeGateSource;
    var _closure1_slot21 = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var8 = _closure1_slot3;
        var0 = 11;
        var1 = var8[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.show;
        var1 = {};
        var5 = _closure1_slot0;
        var4 = 12;
        var6 = var8[var4];
        var6 = var5.bind(var0)(var6);
        var9 = var6.intl;
        var7 = var9.string;
        var6 = var8[var4];
        var6 = var5.bind(var0)(var6);
        var6 = var6.t;
        var6 = var6.cTaRxF;
        var6 = var7.bind(var9)(var6);
        var1.title = var6;
        var6 = var8[var4];
        var6 = var5.bind(var0)(var6);
        var7 = var6.intl;
        var6 = var7.formatToPlainString;
        var4 = var8[var4];
        var4 = var5.bind(var0)(var4);
        var4 = var4.t;
        var5 = var4["VSd+Aj"];
        var4 = {};
        var8 = arg0;
        var4.quantity = var8;
        var4 = var6.bind(var7)(var5, var4);
        var1.body = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot22 = var3;
    var7 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 13;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_DELETE';
        var1.type = var4;
        var4 = {};
        var5 = arg0;
        var4.id = var5;
        var1.guild = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot23 = var7;
    var3 = {};
    var8 = function() {
        var0 = undefined;
        var3 = _closure1_slot24;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var3.joinGuild = var8;
    var3.waitForGuild = var1;
    var8 = function arg0, arg1, arg2, arg3() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var1 = arg3;
        var _closure2_slot3 = var1;
        var2 = _closure1_slot6;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun43065: for (var _fun43065_ip = 0;;) switch (_fun43065_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun43065_ip = 281;
                            continue _fun43065
                        }
                    case 10:
                        var4 = _closure1_slot25;
                        var1 = _closure2_slot0;
                        var3 = undefined;
                        var1 = var4.bind(var3)(var1);
                        SaveGenerator(address = 35);
                    case 33:
                        return var1;
                    case 35:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun43065_ip = 278;
                            continue _fun43065
                        }
                    case 44:
                        var8 = var1.id;
                        var9 = _closure2_slot2;
                        var7 = null;
                        if (!(var7 == var9)) {
                            _fun43065_ip = 90;
                            continue _fun43065
                        }
                    case 59:
                        var5 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var4 = 21;
                        var4 = var10[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.getChannelIdForGuildTransition;
                        var9 = var4.bind(var5)(var8);
                    case 90:
                        var5 = _closure2_slot1;
                        var4 = var7 != var5;
                        if (!var4) {
                            _fun43065_ip = 120;
                            continue _fun43065
                        }
                    case 101:
                        var11 = _closure2_slot1;
                        var10 = var11.hasOwnProperty;
                        var8 = 'welcomeModalChannelId';
                        var4 = var10.bind(var11)(var8);
                    case 120:
                        if (!var4) {
                            _fun43065_ip = 137;
                            continue _fun43065
                        }
                    case 123:
                        var8 = _closure2_slot1;
                        var8 = var8.welcomeModalChannelId;
                        var4 = var7 == var8;
                    case 137:
                        if (!var4) {
                            _fun43065_ip = 177;
                            continue _fun43065
                        }
                    case 140:
                        var4 = {};
                        var13 = _closure2_slot1;
                        var14 = var4;
                        var8 = copyDataProperties(var14, var13);
                        var7 = var7 != var9;
                        var8 = undefined;
                        if (!var7) {
                            _fun43065_ip = 165;
                            continue _fun43065
                        }
                    case 162:
                        var8 = var9;
                    case 165:
                        var7 = 'welcomeModalChannelId';
                        var4[var7] = var8;
                        var5 = var4;
                    case 177:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var4 = 22;
                        var4 = var8[var4];
                        var4 = var7.bind(var3)(var4);
                        var8 = _closure1_slot19;
                        var7 = var8.CHANNEL;
                        var6 = _closure2_slot0;
                        var2 = _closure2_slot3;
                        var2 = var7.bind(var8)(var6, var9, var2);
                        var2 = var4.bind(var3)(var2, var5);
                        var2 = global;
                        var5 = var2.Promise;
                        var14 = var2.setImmediate;
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var5
                            }
                        });
                        var15 = var4;
                        var2 = new var15[var5](var14, var13);
                        var2 = var2 instanceof Object ? var2 : var4;
                        SaveGenerator(address = 266);
                    case 264:
                        return var2;
                    case 266:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun43065_ip = 275;
                            continue _fun43065
                        }
                    case 272:
                        return var3;
                    case 275:
                        return var2;
                    case 278:
                        return var1;
                    case 281:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.transitionToGuildSync = var8;
    var3.deleteGuild = var7;
    var7 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 23;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.stopLurking;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.selectGuild = var7;
    var7 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 13;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_CREATE';
        var1.type = var4;
        var4 = arg0;
        var1.guild = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.createGuild = var7;
    var7 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 15;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.patch;
        var0 = {};
        var6 = _closure1_slot15;
        var5 = var6.GUILD_MEMBER;
        var4 = arg0;
        var3 = arg1;
        var3 = var5.bind(var6)(var4, var3);
        var0.url = var3;
        var3 = {};
        var4 = arg2;
        var3.mute = var4;
        var0.body = var3;
        var3 = true;
        var0.oldFormErrors = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.setServerMute = var7;
    var7 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 15;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.patch;
        var0 = {};
        var6 = _closure1_slot15;
        var5 = var6.GUILD_MEMBER;
        var4 = arg0;
        var3 = arg1;
        var3 = var5.bind(var6)(var4, var3);
        var0.url = var3;
        var3 = {};
        var4 = arg2;
        var3.deaf = var4;
        var0.body = var3;
        var3 = true;
        var0.oldFormErrors = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.setServerDeaf = var7;
    var7 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 15;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var7 = _closure1_slot15;
        var6 = var7.GUILD_MEMBER;
        var5 = arg0;
        var4 = arg1;
        var4 = var6.bind(var7)(var5, var4);
        var1.url = var4;
        var4 = {};
        var5 = arg2;
        var4.channel_id = var5;
        var1.body = var4;
        var4 = true;
        var1.oldFormErrors = var4;
        var1.rejectWithError = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.setChannel = var7;
    var7 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 15;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var3 = var1.HTTP;
        var2 = var3.patch;
        var1 = {};
        var7 = _closure1_slot15;
        var6 = var7.GUILD_MEMBER;
        var5 = arg0;
        var4 = arg1;
        var4 = var6.bind(var7)(var5, var4);
        var1.url = var4;
        var4 = {};
        var5 = arg2;
        var4.flags = var5;
        var1.body = var4;
        var4 = true;
        var1.oldFormErrors = var4;
        var1.rejectWithError = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.setMemberFlags = var7;
    var7 = function arg0, arg1, arg2, arg3() {
        var7 = arg0;
        var6 = arg1;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 15;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.del;
        var1 = {};
        var5 = _closure1_slot15;
        var4 = var5.GUILD_MEMBER;
        var4 = var4.bind(var5)(var7, var6);
        var1.url = var4;
        var4 = {};
        var5 = arg2;
        var4.reason = var5;
        var5 = arg3;
        var4.moderator_report_id = var5;
        var1.query = var4;
        var4 = true;
        var1.oldFormErrors = var4;
        var4 = false;
        var1.rejectWithError = var4;
        var2 = var2.bind(var3)(var1);
        var1 = var2.then;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 13;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'GUILD_MEMBER_REMOVE_LOCAL';
            var1.type = var4;
            var5 = _closure2_slot0;
            var1.guildId = var5;
            var4 = _closure2_slot1;
            var1.userId = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.kickUser = var7;
    var7 = function arg0() {
        _fun43074: for (var _fun43074_ip = 0;;) switch (_fun43074_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.guildId;
                var5 = var0.userId;
                var7 = var0.communicationDisabledUntilTimestamp;
                var10 = var0.duration;
                var9 = var0.reason;
                var6 = var0.location;
                var11 = var0.moderatorReportId;
                var1 = _closure1_slot1;
                var13 = _closure1_slot3;
                var0 = 24;
                var0 = var13[var0];
                var12 = undefined;
                var2 = var1.bind(var12)(var0);
                var1 = var2.patch;
                var0 = {};
                var14 = _closure1_slot15;
                var3 = var14.GUILD_MEMBER;
                var3 = var3.bind(var14)(var8, var5);
                var0.url = var3;
                var0.reason = var9;
                var3 = {};
                var3.communication_disabled_until = var7;
                var3.moderator_report_id = var11;
                var0.body = var3;
                var3 = true;
                var0.oldFormErrors = var3;
                var3 = {};
                var11 = _closure1_slot0;
                var4 = 25;
                var4 = var13[var4];
                var4 = var11.bind(var12)(var4);
                var4 = var4.NetworkActionNames;
                var4 = var4.USER_COMMUNICATION_DISABLED_UPDATE;
                var3.event = var4;
                var4 = {};
                var4.guild_id = var8;
                var4.target_user_id = var5;
                var5 = null;
                var11 = var5 != var10;
                var8 = null;
                if (!var11) {
                    _fun43074_ip = 182;
                    continue _fun43074
                }
            case 179:
                var8 = var10;
            case 182:
                var4.duration = var8;
                var10 = var5 != var9;
                var8 = null;
                if (!var10) {
                    _fun43074_ip = 198;
                    continue _fun43074
                }
            case 195:
                var8 = var9;
            case 198:
                var4.reason = var8;
                var4.communication_disabled_until = var7;
                var7 = var5 != var6;
                var5 = null;
                if (!var7) {
                    _fun43074_ip = 220;
                    continue _fun43074
                }
            case 217:
                var5 = var6;
            case 220:
                var4.location = var5;
                var3.properties = var4;
                var0.trackedActionData = var3;
                var3 = false;
                var0.rejectWithError = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var3.setCommunicationDisabledUntil = var7;
    var7 = function arg0, arg1, arg2, arg3, arg4() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 15;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.put;
        var0 = {};
        var6 = _closure1_slot15;
        var5 = var6.GUILD_BAN;
        var4 = arg0;
        var3 = arg1;
        var3 = var5.bind(var6)(var4, var3);
        var0.url = var3;
        var3 = arg3;
        var0.reason = var3;
        var3 = {};
        var4 = arg2;
        var3.delete_message_seconds = var4;
        var4 = arg4;
        var3.moderator_report_id = var4;
        var0.body = var3;
        var3 = true;
        var0.oldFormErrors = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.banUser = var7;
    var7 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 15;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.del;
        var0 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': false
        };
        var6 = _closure1_slot15;
        var5 = var6.GUILD_BAN;
        var4 = arg0;
        var3 = arg1;
        var3 = var5.bind(var6)(var4, var3);
        var0.url = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.unbanUser = var7;
    var7 = function arg0, arg1, arg2, arg3() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 15;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var5 = _closure1_slot15;
        var4 = var5.BULK_GUILD_BAN;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var0.url = var3;
        var3 = {};
        var4 = arg1;
        var3.user_ids = var4;
        var4 = arg2;
        var3.delete_message_seconds = var4;
        var0.body = var3;
        var3 = arg3;
        var0.reason = var3;
        var3 = true;
        var0.oldFormErrors = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.banMultipleUsers = var7;
    var7 = function arg0, arg1, arg2, arg3() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var1 = arg3;
        var _closure2_slot3 = var1;
        var2 = _closure1_slot6;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun43080: for (var _fun43080_ip = 0;;) switch (_fun43080_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun43080_ip = 497;
                            continue _fun43080
                        }
                    case 10:
                        var4 = undefined;
                        var7 = undefined;
                        var2 = {};
                        var1 = _closure2_slot1;
                        var8 = null;
                        if (!(var8 != var1)) {
                            _fun43080_ip = 41;
                            continue _fun43080
                        }
                    case 29:
                        var3 = _closure2_slot1;
                        var1 = '';
                        if (!(var1 === var3)) {
                            _fun43080_ip = 101;
                            continue _fun43080
                        }
                    case 41:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var1 = 12;
                        var3 = var10[var1];
                        var3 = var9.bind(var4)(var3);
                        var6 = var3.intl;
                        var3 = var6.string;
                        var1 = var10[var1];
                        var1 = var9.bind(var4)(var1);
                        var1 = var1.t;
                        var1 = var1.QBMHvB;
                        var1 = var3.bind(var6)(var1);
                        _fun43080_ip = 105;
                        continue _fun43080;
                    case 101:
                        var1 = _closure2_slot1;
                    case 105:
                        var2.name = var1;
                        var1 = _closure2_slot2;
                        var6 = var8 != var1;
                        var1 = 0;
                        if (!var6) {
                            _fun43080_ip = 126;
                            continue _fun43080
                        }
                    case 122:
                        var1 = _closure2_slot2;
                    case 126:
                        var2.color = var1;
                        var1 = _closure2_slot3;
                        if (!(var8 == var1)) {
                            _fun43080_ip = 177;
                            continue _fun43080
                        }
                    case 138:
                        var1 = {
                            'primary_color': null,
                            'secondary_color': null,
                            'tertiary_color': null
                        };
                        var6 = _closure2_slot2;
                        var6 = var8 != var6;
                        var3 = 0;
                        if (!var6) {
                            _fun43080_ip = 169;
                            continue _fun43080
                        }
                    case 165:
                        var3 = _closure2_slot2;
                    case 169:
                        var1.primary_color = var3;
                        _fun43080_ip = 181;
                        continue _fun43080;
                    case 177:
                        var1 = _closure2_slot3;
                    case 181:
                        var2.colors = var1;
                        var6 = _closure1_slot2;
                        var8 = _closure1_slot3;
                        var3 = 26;
                        var3 = var8[var3];
                        var3 = var6.bind(var4)(var3);
                        var3 = var3.NONE;
                        var2.permissions = var3;
                        var7 = var2;
                    case 222: // try_start_0
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var2 = 15;
                        var2 = var6[var2];
                        var2 = var3.bind(var4)(var2);
                        var6 = var2.HTTP;
                        var3 = var6.post;
                        var2 = {};
                        var10 = _closure1_slot15;
                        var9 = var10.GUILD_ROLES;
                        var8 = _closure2_slot0;
                        var8 = var9.bind(var10)(var8);
                        var2.url = var8;
                        var8 = true;
                        var2.oldFormErrors = var8;
                        var2.body = var7;
                        var7 = false;
                        var2.rejectWithError = var7;
                        var2 = var3.bind(var6)(var2);
                        SaveGenerator(address = 304);
                    case 302:
                        return var2;
                    case 304:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun43080_ip = 447;
                            continue _fun43080
                        }
                    case 313:
                        var3 = var2.body;
                        var7 = _closure1_slot2;
                        var8 = _closure1_slot3;
                        var6 = 27;
                        var6 = var8[var6];
                        var9 = var7.bind(var4)(var6);
                        var7 = var9.deserialize;
                        var6 = var3.permissions;
                        var6 = var7.bind(var9)(var6);
                        var3.permissions = var6;
                        var7 = _closure1_slot1;
                        var6 = 13;
                        var6 = var8[var6];
                        var10 = var7.bind(var4)(var6);
                        var9 = var10.dispatch;
                        var6 = {};
                        var11 = 'GUILD_SETTINGS_ROLE_SELECT';
                        var6.type = var11;
                        var11 = var2.body;
                        var11 = var11.id;
                        var6.roleId = var11;
                        var6.role = var3;
                        var6 = var9.bind(var10)(var6);
                        var6 = 28;
                        var6 = var8[var6];
                        var7 = var7.bind(var4)(var6);
                        var6 = var7.checkGuildTemplateDirty;
                        var5 = _closure2_slot0;
                        var5 = var6.bind(var7)(var5);
                    case 444: // try_end0
                        return var3;
                    case 447:
                        return var2;
                    case 450: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var2 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var1 = 29;
                        var1 = var5[var1];
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var13 = var2;
                        var12 = var3;
                        var1 = new var13[var1](var12, var11);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 497:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.createRole = var7;
    var7 = function arg0, arg1, arg2() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var2 = _closure1_slot6;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun43083: for (var _fun43083_ip = 0;;) switch (_fun43083_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun43083_ip = 251;
                            continue _fun43083
                        }
                    case 10:
                        var7 = _closure2_slot2;
                        var1 = var7.icon;
                        var9 = var7.unicodeEmoji;
                        var6 = _closure1_slot5;
                        var4 = _closure1_slot4;
                        var5 = undefined;
                        var8 = var6.bind(var5)(var7, var4);
                        var4 = null;
                        if (!(var4 !== var1)) {
                            _fun43083_ip = 84;
                            continue _fun43083
                        }
                    case 53:
                        var4 = var4 != var1;
                        var10 = undefined;
                        if (!var4) {
                            _fun43083_ip = 87;
                            continue _fun43083
                        }
                    case 62:
                        var6 = var1.startsWith;
                        var4 = 'data:';
                        var4 = var6.bind(var1)(var4);
                        var10 = undefined;
                        if (!var4) {
                            _fun43083_ip = 87;
                            continue _fun43083
                        }
                    case 84:
                        var10 = var1;
                    case 87:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var1 = 15;
                        var1 = var6[var1];
                        var1 = var4.bind(var5)(var1);
                        var6 = var1.HTTP;
                        var4 = var6.patch;
                        var1 = {};
                        var13 = _closure1_slot15;
                        var12 = var13.GUILD_ROLE;
                        var11 = _closure2_slot0;
                        var7 = _closure2_slot1;
                        var7 = var12.bind(var13)(var11, var7);
                        var1.url = var7;
                        var7 = {};
                        var15 = var7;
                        var14 = var8;
                        var8 = copyDataProperties(var15, var14);
                        var8 = 'icon';
                        var7[var8] = var10;
                        var8 = 'unicode_emoji';
                        var7[var8] = var9;
                        var1.body = var7;
                        var7 = true;
                        var1.oldFormErrors = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var4.bind(var6)(var1);
                        SaveGenerator(address = 204);
                    case 202:
                        return var1;
                    case 204:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun43083_ip = 248;
                            continue _fun43083
                        }
                    case 210:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var3 = 28;
                        var3 = var6[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.checkGuildTemplateDirty;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 248:
                        return var1;
                    case 251:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.updateRole = var7;
    var7 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 15;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.patch;
        var0 = {};
        var6 = _closure1_slot15;
        var5 = var6.GUILD_ROLE;
        var4 = arg0;
        var3 = arg1;
        var3 = var5.bind(var6)(var4, var3);
        var0.url = var3;
        var3 = {};
        var4 = arg2;
        var3.permissions = var4;
        var0.body = var3;
        var3 = true;
        var0.oldFormErrors = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.updateRolePermissions = var7;
    var7 = function arg0, arg1() {
        var8 = arg0;
        var _closure2_slot0 = var8;
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var0 = 15;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var4 = var2.HTTP;
        var3 = var4.del;
        var2 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': true
        };
        var7 = _closure1_slot15;
        var6 = var7.GUILD_ROLE;
        var5 = arg1;
        var5 = var6.bind(var7)(var8, var5);
        var2.url = var5;
        var3 = var3.bind(var4)(var2);
        var2 = var3.then;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 28;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.checkGuildTemplateDirty;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.deleteRole = var7;
    var7 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot6;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun43089: for (var _fun43089_ip = 0;;) switch (_fun43089_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun43089_ip = 151;
                            continue _fun43089
                        }
                    case 10:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var1 = 15;
                        var1 = var4[var1];
                        var5 = undefined;
                        var1 = var2.bind(var5)(var1);
                        var6 = var1.HTTP;
                        var4 = var6.patch;
                        var1 = {};
                        var9 = _closure1_slot15;
                        var8 = var9.GUILD_CHANNELS;
                        var7 = _closure2_slot0;
                        var7 = var8.bind(var9)(var7);
                        var1.url = var7;
                        var7 = _closure2_slot1;
                        var1.body = var7;
                        var7 = true;
                        var1.oldFormErrors = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var4.bind(var6)(var1);
                        SaveGenerator(address = 104);
                    case 102:
                        return var1;
                    case 104:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun43089_ip = 148;
                            continue _fun43089
                        }
                    case 110:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var3 = 28;
                        var3 = var6[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.checkGuildTemplateDirty;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 148:
                        return var1;
                    case 151:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.batchChannelUpdate = var7;
    var7 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot6;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun43092: for (var _fun43092_ip = 0;;) switch (_fun43092_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun43092_ip = 151;
                            continue _fun43092
                        }
                    case 10:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var1 = 15;
                        var1 = var4[var1];
                        var5 = undefined;
                        var1 = var2.bind(var5)(var1);
                        var6 = var1.HTTP;
                        var4 = var6.patch;
                        var1 = {};
                        var9 = _closure1_slot15;
                        var8 = var9.GUILD_ROLES;
                        var7 = _closure2_slot0;
                        var7 = var8.bind(var9)(var7);
                        var1.url = var7;
                        var7 = _closure2_slot1;
                        var1.body = var7;
                        var7 = true;
                        var1.oldFormErrors = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var4.bind(var6)(var1);
                        SaveGenerator(address = 104);
                    case 102:
                        return var1;
                    case 104:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun43092_ip = 148;
                            continue _fun43092
                        }
                    case 110:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var3 = 28;
                        var3 = var6[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.checkGuildTemplateDirty;
                        var2 = _closure2_slot0;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 148:
                        return var1;
                    case 151:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.batchRoleUpdate = var7;
    var7 = function arg0() {
        _fun43093: for (var _fun43093_ip = 0;;) switch (_fun43093_ip) {
            case 0:
                var8 = arg0;
                var5 = arguments[1];
                var4 = arguments[2];
                var3 = arguments[3];
                var2 = undefined;
                if (!(var5 === var2)) {
                    _fun43093_ip = 22;
                    continue _fun43093
                }
            case 18:
                var5 = '';
            case 22:
                if (!(var4 === var2)) {
                    _fun43093_ip = 29;
                    continue _fun43093
                }
            case 26:
                var4 = 10;
            case 29:
                if (!(var3 === var2)) {
                    _fun43093_ip = 35;
                    continue _fun43093
                }
            case 33:
                var3 = true;
            case 35:
                var1 = _closure1_slot1;
                var6 = _closure1_slot3;
                var0 = 13;
                var0 = var6[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.dispatch;
                var0 = {};
                var6 = 'GUILD_MEMBERS_REQUEST';
                var0.type = var6;
                var6 = global;
                var7 = var6.Array;
                var6 = var7.isArray;
                var7 = var6.bind(var7)(var8);
                var6 = var8;
                if (var7) {
                    _fun43093_ip = 110;
                    continue _fun43093
                }
            case 99:
                var7 = new Array(1);
                var7[0] = var8;
                var6 = var7;
            case 110:
                var0.guildIds = var6;
                var0.query = var5;
                var0.limit = var4;
                var0.presences = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var3.requestMembers = var7;
    var7 = function arg0, arg1() {
        _fun43094: for (var _fun43094_ip = 0;;) switch (_fun43094_ip) {
            case 0:
                var0 = arg1;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun43094_ip = 11;
                    continue _fun43094
                }
            case 9:
                var0 = {};
            case 11:
                var4 = var0.query;
                var3 = var0.continuationToken;
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var0 = 13;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.dispatch;
                var0 = {};
                var5 = 'GUILD_SEARCH_RECENT_MEMBERS';
                var0.type = var5;
                var5 = arg0;
                var0.guildId = var5;
                var0.query = var4;
                var0.continuationToken = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var3.searchRecentMembers = var7;
    var7 = function arg0, arg1() {
        _fun43095: for (var _fun43095_ip = 0;;) switch (_fun43095_ip) {
            case 0:
                var8 = arg0;
                var6 = arg1;
                var3 = arguments[2];
                var2 = undefined;
                if (!(var3 === var2)) {
                    _fun43095_ip = 17;
                    continue _fun43095
                }
            case 15:
                var3 = true;
            case 17:
                var1 = _closure1_slot1;
                var4 = _closure1_slot3;
                var0 = 13;
                var0 = var4[var0];
                var2 = var1.bind(var2)(var0);
                var1 = var2.dispatch;
                var0 = {};
                var4 = 'GUILD_MEMBERS_REQUEST';
                var0.type = var4;
                var4 = global;
                var7 = var4.Array;
                var5 = var7.isArray;
                var7 = var5.bind(var7)(var8);
                var5 = var8;
                if (var7) {
                    _fun43095_ip = 92;
                    continue _fun43095
                }
            case 81:
                var7 = new Array(1);
                var7[0] = var8;
                var5 = var7;
            case 92:
                var0.guildIds = var5;
                var5 = var4.Array;
                var4 = var5.isArray;
                var5 = var4.bind(var5)(var6);
                var4 = var6;
                if (var5) {
                    _fun43095_ip = 130;
                    continue _fun43095
                }
            case 119:
                var5 = new Array(1);
                var5[0] = var6;
                var4 = var5;
            case 130:
                var0.userIds = var4;
                var0.presences = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var3.requestMembersById = var7;
    var7 = function arg0, arg1, arg2, arg3() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 13;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_MOVE';
        var1.type = var4;
        var4 = arg0;
        var1.fromIndex = var4;
        var4 = arg1;
        var1.toIndex = var4;
        var4 = arg2;
        var1.fromFolderIndex = var4;
        var4 = arg3;
        var1.toFolderIndex = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.move = var7;
    var7 = function arg0, arg1() {
        _fun43097: for (var _fun43097_ip = 0;;) switch (_fun43097_ip) {
            case 0:
                var3 = arg0;
                var7 = arg1;
                var6 = arguments[2];
                var5 = arguments[3];
                var0 = undefined;
                if (!(var6 === var0)) {
                    _fun43097_ip = 20;
                    continue _fun43097
                }
            case 18:
                var6 = false;
            case 20:
                if (!(var5 === var0)) {
                    _fun43097_ip = 26;
                    continue _fun43097
                }
            case 24:
                var5 = false;
            case 26:
                if (!(var3 !== var7)) {
                    _fun43097_ip = 97;
                    continue _fun43097
                }
            case 30:
                var2 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 13;
                var1 = var4[var1];
                var4 = var2.bind(var0)(var1);
                var2 = var4.dispatch;
                var1 = {};
                var8 = 'GUILD_MOVE_BY_ID';
                var1.type = var8;
                var1.sourceId = var3;
                var1.targetId = var7;
                var1.moveToBelow = var6;
                var1.combine = var5;
                var1 = var2.bind(var4)(var1);
                return var0;
            case 97:
                var0 = global;
                var2 = var0.Error;
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'GuildActionCreators.moveById: `sourceId` and `targetId` cannot be the same value: ';
                var9 = var1.bind(var0)(var3);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = var1;
                var0 = new var10[var2](var9, var8);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var3.moveById = var7;
    var7 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var3 = _closure1_slot3;
        var0 = 30;
        var4 = var3[var0];
        var0 = undefined;
        var5 = var2.bind(var0)(var4);
        var4 = var5.track;
        var1 = _closure1_slot20;
        var1 = var1.GUILD_FOLDER_CREATED;
        var1 = var4.bind(var5)(var1);
        var1 = 13;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_FOLDER_CREATE_LOCAL';
        var1.type = var4;
        var4 = arg0;
        var1.sourceIds = var4;
        var4 = arg1;
        var1.name = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.createGuildFolderLocal = var7;
    var7 = function arg0, arg1, arg2() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 13;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_FOLDER_EDIT_LOCAL';
        var1.type = var4;
        var4 = arg0;
        var1.targetId = var4;
        var4 = arg1;
        var1.sourceIds = var4;
        var4 = arg2;
        var1.name = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.editGuildFolderLocal = var7;
    var7 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 13;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_FOLDER_DELETE_LOCAL';
        var1.type = var4;
        var4 = arg0;
        var1.targetId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.deleteGuildFolderLocal = var7;
    var7 = function arg0() {
        _fun43101: for (var _fun43101_ip = 0;;) switch (_fun43101_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot8;
                var0 = var2.isFolderExpanded;
                var8 = var0.bind(var2)(var4);
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var0 = 30;
                var2 = var2[var0];
                var0 = undefined;
                var6 = var3.bind(var0)(var2);
                var5 = var6.track;
                var2 = _closure1_slot20;
                var3 = var2.GUILD_FOLDER_CLICKED;
                var2 = {};
                var7 = 'sidebar';
                var2.source = var7;
                var7 = 'expanded';
                if (!var8) {
                    _fun43101_ip = 81;
                    continue _fun43101
                }
            case 77:
                var7 = 'collapsed';
            case 81:
                var2.action = var7;
                var2 = var5.bind(var6)(var3, var2);
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'TOGGLE_GUILD_FOLDER_EXPAND';
                var1.type = var5;
                var1.folderId = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var3.toggleGuildFolderExpand = var7;
    var7 = function arg0, arg1() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 13;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SET_GUILD_FOLDER_EXPANDED';
        var1.type = var4;
        var4 = arg0;
        var1.folderId = var4;
        var4 = arg1;
        var1.expanded = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.setGuildFolderExpanded = var7;
    var7 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 13;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_FOLDER_COLLAPSE';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.collapseAllFolders = var7;
    var7 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 13;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GUILD_NSFW_AGREE';
        var1.type = var4;
        var4 = arg0;
        var1.guildId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var3.nsfwAgree = var7;
    var7 = function arg0() {
        _fun43105: for (var _fun43105_ip = 0;;) switch (_fun43105_ip) {
            case 0:
                var6 = arg0;
                var2 = null;
                if (!(var2 == var6)) {
                    _fun43105_ip = 75;
                    continue _fun43105
                }
            case 9:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 16;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.transitionTo;
                var0 = _closure1_slot19;
                var1 = var0.FRIENDS;
                var0 = {
                    'navigationReplace': false,
                    'openChannel': true
                };
                var0 = var3.bind(var4)(var1, var0);
                _fun43105_ip = 245;
                continue _fun43105;
            case 75:
                var3 = _closure1_slot9;
                var1 = var3.getDefaultChannel;
                var1 = var1.bind(var3)(var6);
                if (!(var2 != var1)) {
                    _fun43105_ip = 187;
                    continue _fun43105
                }
            case 97:
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 31;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = var3.isChannelContentGated;
                var2 = var2.bind(var3)(var1);
                if (var2) {
                    _fun43105_ip = 187;
                    continue _fun43105
                }
            case 133:
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 16;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.transitionTo;
                var5 = _closure1_slot19;
                var4 = var5.CHANNEL;
                var1 = var1.id;
                var1 = var4.bind(var5)(var6, var1);
                var1 = var2.bind(var3)(var1);
                _fun43105_ip = 245;
                continue _fun43105;
            case 187:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.transitionTo;
                var0 = _closure1_slot19;
                var1 = var0.FRIENDS;
                var0 = {
                    'navigationReplace': false,
                    'openChannel': true
                };
                var0 = var2.bind(var3)(var1, var0);
            case 245:
                var0 = undefined;
                return var0;
        }
    };
    var3.nsfwReturnToSafety = var7;
    var7 = function arg0() {
        _fun43106: for (var _fun43106_ip = 0;;) switch (_fun43106_ip) {
            case 0:
                var5 = arg0;
                var1 = _closure1_slot9;
                var0 = var1.getDefaultChannel;
                var0 = var0.bind(var1)(var5);
                var1 = null;
                if (!(var1 == var0)) {
                    _fun43106_ip = 72;
                    continue _fun43106
                }
            case 27:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.transitionTo;
                var1 = _closure1_slot19;
                var1 = var1.FRIENDS;
                var1 = var2.bind(var4)(var1);
                _fun43106_ip = 126;
                continue _fun43106;
            case 72:
                var4 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.transitionTo;
                var4 = _closure1_slot19;
                var3 = var4.CHANNEL;
                var0 = var0.id;
                var0 = var3.bind(var4)(var5, var0);
                var0 = var1.bind(var2)(var0);
            case 126:
                var0 = undefined;
                return var0;
        }
    };
    var3.escapeToDefaultChannel = var7;
    var7 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot6;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun43109: for (var _fun43109_ip = 0;;) switch (_fun43109_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun43109_ip = 188;
                            continue _fun43109
                        }
                    case 10:
                        var5 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var4 = _closure1_slot15;
                        var2 = var4.GUILD_APPLICATIONS;
                        var1 = _closure2_slot0;
                        var1 = var2.bind(var4)(var1);
                        var5.url = var1;
                        var2 = _closure2_slot1;
                        var1 = null;
                        if (!(var1 != var2)) {
                            _fun43109_ip = 77;
                            continue _fun43109
                        }
                    case 61:
                        var1 = {};
                        var2 = _closure2_slot1;
                        var1.channel_id = var2;
                        var5.query = var1;
                    case 77:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 15;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var4.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var1 = var4.get;
                        var1 = var1.bind(var4)(var5);
                        SaveGenerator(address = 118);
                    case 116:
                        return var1;
                    case 118:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun43109_ip = 185;
                            continue _fun43109
                        }
                    case 124:
                        var6 = var1.body;
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var3 = 13;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var8 = 'GUILD_APPLICATIONS_FETCH_SUCCESS';
                        var3.type = var8;
                        var7 = _closure2_slot0;
                        var3.guildId = var7;
                        var3.applications = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 185:
                        return var1;
                    case 188:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.fetchApplications = var7;
    var7 = function arg0() {
        _fun43110: for (var _fun43110_ip = 0;;) switch (_fun43110_ip) {
            case 0:
                var3 = arguments[1];
                var2 = arguments[2];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = undefined;
                if (!(var3 === var1)) {
                    _fun43110_ip = 27;
                    continue _fun43110
                }
            case 21:
                var3 = 1000;
            case 27:
                var _closure2_slot1 = var3;
                if (!(var2 === var1)) {
                    _fun43110_ip = 37;
                    continue _fun43110
                }
            case 35:
                var2 = null;
            case 37:
                var _closure2_slot2 = var2;
                var2 = _closure1_slot6;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun43112: for (var _fun43112_ip = 0;;) switch (_fun43112_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun43112_ip = 159;
                                    continue _fun43112
                                }
                            case 10:
                                var5 = {};
                                var1 = _closure2_slot1;
                                var5.limit = var1;
                                var2 = _closure2_slot2;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun43112_ip = 43;
                                    continue _fun43112
                                }
                            case 33:
                                var1 = _closure2_slot2;
                                var5.after = var1;
                            case 43:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var1 = 15;
                                var1 = var2[var1];
                                var2 = undefined;
                                var1 = var3.bind(var2)(var1);
                                var4 = var1.HTTP;
                                var3 = var4.get;
                                var1 = {};
                                var8 = _closure1_slot15;
                                var7 = var8.GUILD_BANS;
                                var6 = _closure2_slot0;
                                var6 = var7.bind(var8)(var6);
                                var1.url = var6;
                                var6 = true;
                                var1.oldFormErrors = var6;
                                var1.query = var5;
                                var5 = false;
                                var1.rejectWithError = var5;
                                var4 = var3.bind(var4)(var1);
                                var3 = var4.then;
                                var1 = function(arg0) { // Environment: var1
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot3;
                                    var0 = 13;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.dispatch;
                                    var1 = {};
                                    var4 = 'GUILD_SETTINGS_LOADED_BANS_BATCH';
                                    var1.type = var4;
                                    var4 = arg0;
                                    var4 = var4.body;
                                    var1.bans = var4;
                                    var4 = _closure2_slot0;
                                    var1.guildId = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                };
                                var1 = var3.bind(var4)(var1);
                                SaveGenerator(address = 147);
                            case 145:
                                return var1;
                            case 147:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun43112_ip = 156;
                                    continue _fun43112
                                }
                            case 153:
                                return var2;
                            case 156:
                                return var1;
                            case 159:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var3.fetchGuildBansBatch = var7;
    var7 = function arg0, arg1, arg2() {
        _fun43114: for (var _fun43114_ip = 0;;) switch (_fun43114_ip) {
            case 0:
                var2 = arguments[3];
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = arg2;
                var _closure2_slot2 = var1;
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun43114_ip = 35;
                    continue _fun43114
                }
            case 32:
                var2 = 10;
            case 35:
                var _closure2_slot3 = var2;
                var2 = _closure1_slot6;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun43116: for (var _fun43116_ip = 0;;) switch (_fun43116_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun43116_ip = 229;
                                    continue _fun43116
                                }
                            case 10:
                                var5 = {};
                                var1 = _closure2_slot3;
                                var5.limit = var1;
                                var1 = _closure2_slot2;
                                var2 = null;
                                var1 = var2 != var1;
                                if (!var1) {
                                    _fun43116_ip = 51;
                                    continue _fun43116
                                }
                            case 36:
                                var3 = _closure2_slot2;
                                var4 = var3.length;
                                var3 = 0;
                                var1 = var4 > var3;
                            case 51:
                                if (!var1) {
                                    _fun43116_ip = 64;
                                    continue _fun43116
                                }
                            case 54:
                                var1 = _closure2_slot2;
                                var5.user_ids = var1;
                            case 64:
                                var1 = _closure2_slot1;
                                var1 = var2 != var1;
                                if (!var1) {
                                    _fun43116_ip = 100;
                                    continue _fun43116
                                }
                            case 75:
                                var3 = _closure2_slot1;
                                var2 = var3.trim;
                                var2 = var2.bind(var3)();
                                var3 = var2.length;
                                var2 = 0;
                                var1 = var3 > var2;
                            case 100:
                                if (!var1) {
                                    _fun43116_ip = 113;
                                    continue _fun43116
                                }
                            case 103:
                                var1 = _closure2_slot1;
                                var5.query = var1;
                            case 113:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var1 = 15;
                                var1 = var2[var1];
                                var2 = undefined;
                                var1 = var3.bind(var2)(var1);
                                var4 = var1.HTTP;
                                var3 = var4.get;
                                var1 = {};
                                var8 = _closure1_slot15;
                                var7 = var8.GUILD_BANS_SEARCH;
                                var6 = _closure2_slot0;
                                var6 = var7.bind(var8)(var6);
                                var1.url = var6;
                                var6 = true;
                                var1.oldFormErrors = var6;
                                var1.query = var5;
                                var5 = false;
                                var1.rejectWithError = var5;
                                var4 = var3.bind(var4)(var1);
                                var3 = var4.then;
                                var1 = function(arg0) { // Environment: var1
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot3;
                                    var0 = 13;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.dispatch;
                                    var1 = {};
                                    var4 = 'GUILD_SETTINGS_LOADED_BANS_BATCH';
                                    var1.type = var4;
                                    var4 = arg0;
                                    var4 = var4.body;
                                    var1.bans = var4;
                                    var5 = _closure2_slot2;
                                    var1.userIds = var5;
                                    var4 = _closure2_slot0;
                                    var1.guildId = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                };
                                var1 = var3.bind(var4)(var1);
                                SaveGenerator(address = 217);
                            case 215:
                                return var1;
                            case 217:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun43116_ip = 226;
                                    continue _fun43116
                                }
                            case 223:
                                return var2;
                            case 226:
                                return var1;
                            case 229:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var3.searchGuildBans = var7;
    var7 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot6;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun43120: for (var _fun43120_ip = 0;;) switch (_fun43120_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun43120_ip = 118;
                            continue _fun43120
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 15;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.get;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var7 = _closure1_slot15;
                        var6 = var7.GUILD_BANS;
                        var5 = _closure2_slot0;
                        var5 = var6.bind(var7)(var5);
                        var1.url = var5;
                        var4 = var3.bind(var4)(var1);
                        var3 = var4.then;
                        var1 = function(arg0) { // Environment: var1
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'GUILD_SETTINGS_LOADED_BANS';
                            var1.type = var4;
                            var4 = arg0;
                            var4 = var4.body;
                            var1.bans = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 106);
                    case 104:
                        return var1;
                    case 106:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun43120_ip = 115;
                            continue _fun43120
                        }
                    case 112:
                        return var2;
                    case 115:
                        return var1;
                    case 118:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.fetchGuildBans = var7;
    var7 = function arg0, arg1() {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var3 = _closure1_slot0;
        var2 = _closure1_slot3;
        var1 = 15;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {
            'url': null,
            'oldFormErrors': true,
            'rejectWithError': false
        };
        var6 = _closure1_slot15;
        var5 = var6.GUILD_ROLE_CONNECTIONS_ELIGIBILITY;
        var4 = arg0;
        var4 = var5.bind(var6)(var4, var7);
        var1.url = var4;
        var2 = var2.bind(var3)(var1);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.body;
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var4 = 'GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS';
            var1.type = var4;
            var4 = _closure2_slot0;
            var1.roleId = var4;
            var1.roleConnectionEligibility = var0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var3.fetchGuildRoleConnectionsEligibility = var7;
    var7 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot6;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun43126: for (var _fun43126_ip = 0;;) switch (_fun43126_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun43126_ip = 107;
                            continue _fun43126
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 15;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.post;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var8 = _closure1_slot15;
                        var7 = var8.GUILD_ROLE_CONNECTIONS_ASSIGN;
                        var6 = _closure2_slot0;
                        var5 = _closure2_slot1;
                        var5 = var7.bind(var8)(var6, var5);
                        var1.url = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 95);
                    case 93:
                        return var1;
                    case 95:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun43126_ip = 104;
                            continue _fun43126
                        }
                    case 101:
                        return var2;
                    case 104:
                        return var1;
                    case 107:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.assignGuildRoleConnection = var7;
    var7 = function arg0, arg1() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var2 = _closure1_slot6;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun43129: for (var _fun43129_ip = 0;;) switch (_fun43129_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun43129_ip = 107;
                            continue _fun43129
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 15;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.post;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var8 = _closure1_slot15;
                        var7 = var8.GUILD_ROLE_CONNECTIONS_UNASSIGN;
                        var6 = _closure2_slot0;
                        var5 = _closure2_slot1;
                        var5 = var7.bind(var8)(var6, var5);
                        var1.url = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 95);
                    case 93:
                        return var1;
                    case 95:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun43129_ip = 104;
                            continue _fun43129
                        }
                    case 101:
                        return var2;
                    case 104:
                        return var1;
                    case 107:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.unassignGuildRoleConnection = var7;
    var4 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot6;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun43132: for (var _fun43132_ip = 0;;) switch (_fun43132_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun43132_ip = 106;
                            continue _fun43132
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 15;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.get;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var6 = _closure1_slot15;
                        var5 = var6.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS;
                        var4 = _closure2_slot0;
                        var4 = var5.bind(var6)(var4);
                        var1.url = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 89);
                    case 87:
                        return var1;
                    case 89:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun43132_ip = 103;
                            continue _fun43132
                        }
                    case 95:
                        var2 = var1.body;
                        return var2;
                    case 103:
                        return var1;
                    case 106:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var3.getGuildRoleConnectionsConfigurations = var4;
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/GuildActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.waitForGuild = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 5, 1216, 4343, 1662, 1410, 1661, 3174, 1613, 660, 1219, 3964, 1234, 806, 4645, 507, 1220, 4648, 1307, 4522, 3070, 5580, 5581, 12071, 4491, 481, 3057, 484, 6451, 3312, 795, 4517, 2]);