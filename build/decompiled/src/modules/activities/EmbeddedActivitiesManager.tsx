// modules/activities/EmbeddedActivitiesManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1() {
        _fun64527: for (var _fun64527_ip = 0;;) switch (_fun64527_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun64527_ip = 46;
                    continue _fun64527
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun64527_ip = 55;
                    continue _fun64527
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun64527_ip = 343;
                    continue _fun64527
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun64527_ip = 323;
                    continue _fun64527
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun64527_ip = 283;
                    continue _fun64527
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun64527_ip = 270;
                    continue _fun64527
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun64527_ip = 163;
                    continue _fun64527
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun64527_ip = 179;
                    continue _fun64527
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun64527_ip = 249;
                    continue _fun64527
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun64527_ip = 249;
                    continue _fun64527
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun64527_ip = 234;
                    continue _fun64527
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun64527_ip = 247;
                    continue _fun64527
                }
            case 234:
                var8 = _closure1_slot28;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun64527_ip = 265;
                continue _fun64527;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun64527_ip = 283;
                continue _fun64527;
            case 270:
                var6 = _closure1_slot28;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun64527_ip = 323;
                    continue _fun64527
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun64527_ip = 330;
                    continue _fun64527
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun64528: for (var _fun64528_ip = 0;;) switch (_fun64528_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun64528_ip = 56;
                                continue _fun64528
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun64528_ip = 67;
                            continue _fun64528;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function arg0, arg1() {
        _fun64529: for (var _fun64529_ip = 0;;) switch (_fun64529_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun64529_ip = 23;
                    continue _fun64529
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun64529_ip = 33;
                    continue _fun64529
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun64529_ip = 70;
                    continue _fun64529
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun64529_ip = 55;
                    continue _fun64529
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function() {
        _fun64530: for (var _fun64530_ip = 0;;) switch (_fun64530_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun64530_ip = 74;
                continue _fun64530;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot29 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function arg0() {
        _fun64533: for (var _fun64533_ip = 0;;) switch (_fun64533_ip) {
            case 0:
                var2 = arg0;
                var0 = {};
                var3 = null;
                var4 = var3 == var2;
                var5 = undefined;
                var1 = undefined;
                if (var4) {
                    _fun64533_ip = 103;
                    continue _fun64533
                }
            case 18:
                var2 = var2.activity;
                var3 = var3 == var2;
                var1 = undefined;
                if (var3) {
                    _fun64533_ip = 103;
                    continue _fun64533
                }
            case 33:
                var3 = var2.client_platform_config;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 16;
                var4 = var7[var4];
                var4 = var6.bind(var5)(var4);
                var6 = _closure1_slot0;
                var2 = 17;
                var2 = var7[var2];
                var6 = var6.bind(var5)(var2);
                var2 = var6.getOS;
                var2 = var2.bind(var6)();
                var2 = var4.bind(var5)(var2);
                var2 = var3[var2];
                var1 = var2.release_phase;
            case 103:
                var0.releasePhase = var1;
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function arg0() {
        _fun64534: for (var _fun64534_ip = 0;;) switch (_fun64534_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.applicationId;
                var6 = var0.nonce;
                var5 = var0.locations;
                var4 = var0.source;
                var1 = null;
                var0 = var1 != var5;
                if (var0) {
                    _fun64534_ip = 38;
                    continue _fun64534
                }
            case 34:
                var0 = var1 != var4;
            case 38:
                if (!var0) {
                    _fun64534_ip = 70;
                    continue _fun64534
                }
            case 41:
                var2 = _closure1_slot24;
                var1 = {};
                var1.nonce = var6;
                var1.locations = var5;
                var1.source = var4;
                var2[var3] = var1;
                var0 = true;
            case 70:
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function arg0, arg1() {
        _fun64535: for (var _fun64535_ip = 0;;) switch (_fun64535_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot24;
                var0 = var0[var2];
                var3 = null;
                if (!(var3 != var0)) {
                    _fun64535_ip = 33;
                    continue _fun64535
                }
            case 20:
                var4 = var0.nonce;
                var3 = arg1;
                if (!(var4 !== var3)) {
                    _fun64535_ip = 37;
                    continue _fun64535
                }
            case 33:
                var3 = undefined;
                return var3;
            case 37:
                var1 = _closure1_slot24;
                var1 = delete var1[var2];
                return var0;
        }
    };
    var _closure1_slot32 = var0;
    var0 = function arg0, arg1() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = global;
        var3 = var0.setTimeout;
        var0 = undefined;
        var2 = function() { // Environment: var1
            var3 = _closure1_slot32;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var0 = undefined;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var1 = 2000;
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot33 = var0;
    var0 = function arg0() {
        _fun64538: for (var _fun64538_ip = 0;;) switch (_fun64538_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.applicationId;
                var3 = var1.nonce;
                var0 = var1.analyticsLocations;
                var4 = var1.source;
                var2 = _closure1_slot31;
                var1 = {};
                var1.applicationId = var5;
                var1.nonce = var3;
                var1.locations = var0;
                var0 = null;
                var5 = var0 != var4;
                var0 = undefined;
                var3 = undefined;
                if (!var5) {
                    _fun64538_ip = 64;
                    continue _fun64538
                }
            case 61:
                var3 = var4;
            case 64:
                var1.source = var3;
                var1 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot36;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot35 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun64542: for (var _fun64542_ip = 0;;) switch (_fun64542_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun64542_ip = 727;
                            continue _fun64542
                        }
                    case 13:
                        var5 = var1.applicationId;
                        var10 = var1.location;
                        var14 = var1.instanceId;
                        var3 = undefined;
                        SaveGenerator(address = 35);
                    case 33:
                        return var3;
                    case 35:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun64542_ip = 724;
                            continue _fun64542
                        }
                    case 44:
                        var7 = _closure1_slot17;
                        var6 = var7.getEmbeddedActivityDurationMs;
                        var2 = var10.id;
                        var11 = var6.bind(var7)(var2, var5);
                        var6 = _closure1_slot11;
                        var2 = var6.getSessionId;
                        var9 = var2.bind(var6)();
                        var15 = null;
                        var2 = var15 != var14;
                        if (!var2) {
                            _fun64542_ip = 95;
                            continue _fun64542
                        }
                    case 91:
                        var2 = var15 != var9;
                    case 95:
                        if (!var2) {
                            _fun64542_ip = 200;
                            continue _fun64542
                        }
                    case 98:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 18;
                        var2 = var7[var2];
                        var2 = var6.bind(var3)(var2);
                        var7 = var2.HTTP;
                        var6 = var7.post;
                        var2 = {};
                        var13 = _closure1_slot20;
                        var12 = var13.ACTIVITY_LEAVE;
                        var8 = var10.id;
                        var8 = var12.bind(var13)(var5, var8, var14);
                        var2.url = var8;
                        var8 = {};
                        var8.session_id = var9;
                        var2.body = var8;
                        var8 = 2;
                        var2.retries = var8;
                        var8 = false;
                        var2.rejectWithError = var8;
                        var2 = var6.bind(var7)(var2);
                        SaveGenerator(address = 191);
                    case 189:
                        return var2;
                    case 191:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun64542_ip = 721;
                            continue _fun64542
                        }
                    case 200:
                        var6 = _closure1_slot23;
                        var13 = var6[var5];
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 19;
                        var9 = var8[var6];
                        var12 = var7.bind(var3)(var9);
                        var9 = var12.getEmbeddedActivityLocationChannelId;
                        var16 = var9.bind(var12)(var10);
                        var6 = var8[var6];
                        var7 = var7.bind(var3)(var6);
                        var6 = var7.getEmbeddedActivityLocationGuildId;
                        var14 = var6.bind(var7)(var10);
                        var7 = _closure1_slot12;
                        var6 = var7.getChannel;
                        var19 = var6.bind(var7)(var16);
                        var7 = _closure1_slot15;
                        var6 = var7.getCurrentUser;
                        var21 = var6.bind(var7)();
                        if (!(var15 != var13)) {
                            _fun64542_ip = 718;
                            continue _fun64542
                        }
                    case 293:
                        if (!(var15 != var21)) {
                            _fun64542_ip = 718;
                            continue _fun64542
                        }
                    case 300:
                        var7 = _closure1_slot17;
                        var6 = var7.getShelfActivities;
                        var12 = var6.bind(var7)(var14);
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var8 = 20;
                        var8 = var6[var8];
                        var9 = var7.bind(var3)(var8);
                        var8 = {};
                        var8.applicationId = var5;
                        var8.activityConfigs = var12;
                        var20 = var9.bind(var3)(var8);
                        var8 = _closure1_slot30;
                        var8 = var8.bind(var3)(var20);
                        var18 = var8.releasePhase;
                        var8 = 21;
                        var8 = var6[var8];
                        var9 = var7.bind(var3)(var8);
                        var8 = var9.getRawThermalState;
                        var12 = var8.bind(var9)();
                        var8 = 22;
                        var6 = var6[var8];
                        var17 = var7.bind(var3)(var6);
                        var9 = var17.track;
                        var6 = _closure1_slot18;
                        var7 = var6.ACTIVITY_SESSION_LEFT;
                        var6 = {};
                        var6.channel_id = var16;
                        var6.guild_id = var14;
                        var23 = var13.mediaSessionIds;
                        var22 = 0;
                        var22 = var23[var22];
                        var6.media_session_id = var22;
                        var22 = var13.activitySessionId;
                        var6.activity_session_id = var22;
                        var6.application_id = var5;
                        var6.duration_ms = var11;
                        var21 = var21.premiumType;
                        var6.user_premium_tier = var21;
                        var6.raw_thermal_state = var12;
                        var6.release_phase = var18;
                        var21 = var15 == var20;
                        var18 = undefined;
                        if (var21) {
                            _fun64542_ip = 514;
                            continue _fun64542
                        }
                    case 493:
                        var20 = var20.activity;
                        var21 = var15 == var20;
                        var18 = undefined;
                        if (var21) {
                            _fun64542_ip = 514;
                            continue _fun64542
                        }
                    case 508:
                        var18 = var20.shelf_rank;
                    case 514:
                        var6.shelf_rank = var18;
                        var18 = var13.activityUserSessionId;
                        var6.activity_user_session_id = var18;
                        var20 = var15 == var19;
                        var18 = undefined;
                        if (var20) {
                            _fun64542_ip = 544;
                            continue _fun64542
                        }
                    case 539:
                        var18 = var19.type;
                    case 544:
                        var6.channel_type = var18;
                        var18 = var13.mediaSessionIds;
                        var6.media_session_ids = var18;
                        var18 = var10.kind;
                        var6.embedded_activity_location_kind = var18;
                        var6 = var9.bind(var17)(var7, var6);
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var8];
                        var9 = var7.bind(var3)(var6);
                        var8 = var9.track;
                        var6 = _closure1_slot18;
                        var7 = var6.ACTIVITY_IFRAME_UNMOUNT;
                        var6 = {};
                        var6.channel_id = var16;
                        var6.guild_id = var14;
                        var6.application_id = var5;
                        var14 = var13.launchId;
                        var15 = var15 != var14;
                        var14 = undefined;
                        if (!var15) {
                            _fun64542_ip = 655;
                            continue _fun64542
                        }
                    case 638:
                        var16 = var13.launchId;
                        var15 = new Array(1);
                        var15[0] = var16;
                        var14 = var15;
                    case 655:
                        var6.instance_ids = var14;
                        var14 = var13.mediaSessionIds;
                        var6.media_session_ids = var14;
                        var13 = var13.activityUserSessionId;
                        var6.activity_user_session_id = var13;
                        var6.raw_thermal_state = var12;
                        var6.duration_ms = var11;
                        var10 = var10.kind;
                        var6.embedded_activity_location_kind = var10;
                        var6 = var8.bind(var9)(var7, var6);
                        var4 = _closure1_slot23;
                        var4 = delete var4[var5];
                    case 718:
                        return var3;
                    case 721:
                        return var2;
                    case 724:
                        return var1;
                    case 727:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot36 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot36 = var0;
    var0 = function arg0() {
        _fun64543: for (var _fun64543_ip = 0;;) switch (_fun64543_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.applicationId;
                var _closure2_slot0 = var17;
                var6 = var0.isFirstActivityInChannel;
                var10 = var0.isStart;
                var7 = var0.participants;
                var16 = var0.embeddedActivity;
                var5 = var0.location;
                var24 = var0.inviterUserId;
                var0 = undefined;
                var _closure2_slot1 = var0;
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 23;
                var3 = var8[var3];
                var9 = var4.bind(var0)(var3);
                var3 = var9.leaveCurrentFrame;
                var3 = var3.bind(var9)();
                var3 = 24;
                var3 = var8[var3];
                var8 = var4.bind(var0)(var3);
                var4 = var8.tryLaunchAsFrame;
                var3 = {};
                var3.applicationId = var17;
                var3 = var4.bind(var8)(var3);
                if (var3) {
                    _fun64543_ip = 1270;
                    continue _fun64543
                }
            case 123:
                var4 = _closure1_slot11;
                var3 = var4.getId;
                var3 = var3.bind(var4)();
                _closure2_slot1 = var3;
                var4 = var7.find;
                var3 = function(arg0) { // Environment: var2
                    var0 = arg0;
                    var1 = var0.userId;
                    var0 = _closure2_slot1;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var4.bind(var7)(var3);
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 19;
                var9 = var8[var4];
                var11 = var7.bind(var0)(var9);
                var9 = var11.getEmbeddedActivityLocationChannelId;
                var19 = var9.bind(var11)(var5);
                var4 = var8[var4];
                var7 = var7.bind(var0)(var4);
                var4 = var7.getEmbeddedActivityLocationGuildId;
                var18 = var4.bind(var7)(var5);
                var7 = _closure1_slot12;
                var4 = var7.getChannel;
                var20 = var4.bind(var7)(var19);
                var4 = var10;
                if (!var4) {
                    _fun64543_ip = 233;
                    continue _fun64543
                }
            case 227:
                var7 = null;
                var4 = var7 != var20;
            case 233:
                if (!var4) {
                    _fun64543_ip = 246;
                    continue _fun64543
                }
            case 236:
                var7 = var20.isPrivate;
                var4 = var7.bind(var20)();
            case 246:
                if (!var4) {
                    _fun64543_ip = 252;
                    continue _fun64543
                }
            case 249:
                var4 = var6;
            case 252:
                if (!var4) {
                    _fun64543_ip = 261;
                    continue _fun64543
                }
            case 255:
                var6 = null;
                var4 = var6 == var3;
            case 261:
                if (!var4) {
                    _fun64543_ip = 303;
                    continue _fun64543
                }
            case 264:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 25;
                var4 = var7[var4];
                var8 = var6.bind(var0)(var4);
                var7 = var8.selectParticipant;
                var6 = var20.id;
                var4 = null;
                var4 = var7.bind(var8)(var6, var4);
            case 303:
                var7 = null;
                if (!(var7 != var3)) {
                    _fun64543_ip = 1270;
                    continue _fun64543
                }
            case 312:
                var6 = _closure1_slot13;
                var4 = var6.getMediaSessionId;
                var4 = var4.bind(var6)();
                var26 = var16.compositeInstanceId;
                var6 = var7 == var4;
                if (!var6) {
                    _fun64543_ip = 364;
                    continue _fun64543
                }
            case 339:
                var8 = var7 == var20;
                var9 = undefined;
                if (var8) {
                    _fun64543_ip = 358;
                    continue _fun64543
                }
            case 348:
                var8 = var20.isVocal;
                var9 = var8.bind(var20)();
            case 358:
                var8 = true;
                var6 = var8 === var9;
            case 364:
                if (!var6) {
                    _fun64543_ip = 392;
                    continue _fun64543
                }
            case 367:
                var8 = var7 == var20;
                var9 = undefined;
                if (var8) {
                    _fun64543_ip = 386;
                    continue _fun64543
                }
            case 376:
                var8 = var20.isPrivate;
                var9 = var8.bind(var20)();
            case 386:
                var8 = false;
                var6 = var8 === var9;
            case 392:
                if (!(var7 != var26)) {
                    _fun64543_ip = 1270;
                    continue _fun64543
                }
            case 399:
                if (var6) {
                    _fun64543_ip = 1270;
                    continue _fun64543
                }
            case 405:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 26;
                var6 = var9[var6];
                var8 = var8.bind(var0)(var6);
                var6 = var8.v4;
                var13 = var6.bind(var8)();
                var6 = 'location';
                var9 = var6 in var16;
                var8 = 1;
                var6 = var8;
                if (!var9) {
                    _fun64543_ip = 455;
                    continue _fun64543
                }
            case 452:
                var6 = 2;
            case 455:
                var11 = _closure1_slot15;
                var9 = var11.getCurrentUser;
                var25 = var9.bind(var11)();
                if (!(var7 != var25)) {
                    _fun64543_ip = 1270;
                    continue _fun64543
                }
            case 475:
                var11 = _closure1_slot17;
                var9 = var11.getShelfActivities;
                var21 = var9.bind(var11)(var18);
                var11 = _closure1_slot16;
                var9 = var11.getState;
                var9 = var9.bind(var11)();
                var15 = var9.shelfOrder;
                var12 = _closure1_slot1;
                var14 = _closure1_slot2;
                var9 = 20;
                var9 = var14[var9];
                var11 = var12.bind(var0)(var9);
                var9 = {};
                var9.applicationId = var17;
                var9.activityConfigs = var21;
                var11 = var11.bind(var0)(var9);
                var9 = var15.findIndex;
                var2 = function(arg0) { // Environment: var2
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var0 === var1;
                    return var0;
                };
                var2 = var9.bind(var15)(var2);
                var8 = var8 + var2;
                var2 = _closure1_slot30;
                var2 = var2.bind(var0)(var11);
                var9 = var2.releasePhase;
                var2 = 21;
                var2 = var14[var2];
                var12 = var12.bind(var0)(var2);
                var2 = var12.getRawThermalState;
                var12 = var2.bind(var12)();
                if (!(var7 == var4)) {
                    _fun64543_ip = 613;
                    continue _fun64543
                }
            case 607:
                var15 = new Array(0);
                _fun64543_ip = 624;
                continue _fun64543;
            case 613:
                var2 = new Array(1);
                var2[0] = var4;
                var15 = var2;
            case 624:
                var4 = {};
                var4.activitySessionId = var26;
                var4.activityUserSessionId = var13;
                var2 = var16.launchId;
                var4.launchId = var2;
                var4.mediaSessionIds = var15;
                var4.activitiesInfraVersion = var6;
                var2 = _closure1_slot23;
                var2[var17] = var4;
                var2 = _closure1_slot24;
                var22 = var2[var17];
                var4 = _closure1_slot0;
                var14 = _closure1_slot2;
                var2 = 27;
                var2 = var14[var2];
                var14 = var4.bind(var0)(var2);
                var4 = var14.isNullOrEmpty;
                var2 = var3.nonce;
                var2 = var4.bind(var14)(var2);
                if (var2) {
                    _fun64543_ip = 740;
                    continue _fun64543
                }
            case 715:
                var4 = var3.nonce;
                var14 = var7 == var22;
                var3 = undefined;
                if (var14) {
                    _fun64543_ip = 736;
                    continue _fun64543
                }
            case 730:
                var3 = var22.nonce;
            case 736:
                var2 = var4 === var3;
            case 740:
                if (var2) {
                    _fun64543_ip = 745;
                    continue _fun64543
                }
            case 743:
                var22 = undefined;
            case 745:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var4 = 22;
                var2 = var2[var4];
                var23 = var3.bind(var0)(var2);
                var21 = var23.track;
                var2 = _closure1_slot18;
                var3 = var2.ACTIVITY_SESSION_JOINED;
                var2 = {};
                var2.channel_id = var19;
                var2.guild_id = var18;
                var14 = 0;
                var27 = var15[var14];
                var2.media_session_id = var27;
                var2.activity_session_id = var26;
                var2.application_id = var17;
                var27 = var7 == var22;
                var26 = undefined;
                if (var27) {
                    _fun64543_ip = 826;
                    continue _fun64543
                }
            case 820:
                var26 = var22.locations;
            case 826:
                var2.location_stack = var26;
                var25 = var25.premiumType;
                var2.user_premium_tier = var25;
                var2.raw_thermal_state = var12;
                var26 = var7 != var20;
                var25 = null;
                if (!var26) {
                    _fun64543_ip = 876;
                    continue _fun64543
                }
            case 856:
                var28 = _closure1_slot9;
                var27 = var28.getUserParticipantCount;
                var26 = var20.id;
                var25 = var27.bind(var28)(var26);
            case 876:
                var2.n_participants = var25;
                var2.is_activity_start = var10;
                var2.release_phase = var9;
                var25 = var7 == var11;
                var9 = undefined;
                if (var25) {
                    _fun64543_ip = 923;
                    continue _fun64543
                }
            case 902:
                var25 = var11.activity;
                var26 = var7 == var25;
                var9 = undefined;
                if (var26) {
                    _fun64543_ip = 923;
                    continue _fun64543
                }
            case 917:
                var9 = var25.shelf_rank;
            case 923:
                var2.shelf_rank = var9;
                var9 = var8 > var14;
                var25 = null;
                if (!var9) {
                    _fun64543_ip = 940;
                    continue _fun64543
                }
            case 937:
                var25 = var8;
            case 940:
                var2.shelf_sorted_rank = var25;
                var2.activity_user_session_id = var13;
                var26 = var7 == var20;
                var25 = undefined;
                if (var26) {
                    _fun64543_ip = 964;
                    continue _fun64543
                }
            case 959:
                var25 = var20.type;
            case 964:
                var2.channel_type = var25;
                var26 = var7 == var22;
                var25 = undefined;
                if (var26) {
                    _fun64543_ip = 983;
                    continue _fun64543
                }
            case 978:
                var25 = var22.source;
            case 983:
                var2.source = var25;
                var26 = var7 != var20;
                var25 = null;
                if (!var26) {
                    _fun64543_ip = 1028;
                    continue _fun64543
                }
            case 996:
                var27 = _closure1_slot0;
                var28 = _closure1_slot2;
                var26 = 28;
                var26 = var28[var26];
                var27 = var27.bind(var0)(var26);
                var26 = var27.computeCommandContextType;
                var25 = var26.bind(var27)(var20, var17);
            case 1028:
                var2.command_context_type = var25;
                var2.invite_inviter_id = var24;
                var25 = var7 == var22;
                var24 = undefined;
                if (var25) {
                    _fun64543_ip = 1055;
                    continue _fun64543
                }
            case 1049:
                var24 = var22.interactionId;
            case 1055:
                var2.interaction_id = var24;
                var24 = var5.kind;
                var2.embedded_activity_location_kind = var24;
                var2 = var21.bind(var23)(var3, var2);
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot18;
                var2 = var1.ACTIVITY_IFRAME_MOUNT;
                var1 = {};
                var23 = var7 == var22;
                var21 = undefined;
                if (var23) {
                    _fun64543_ip = 1125;
                    continue _fun64543
                }
            case 1119:
                var21 = var22.locations;
            case 1125:
                var1.location_stack = var21;
                var1.channel_id = var19;
                var21 = var7 == var20;
                var19 = undefined;
                if (var21) {
                    _fun64543_ip = 1148;
                    continue _fun64543
                }
            case 1143:
                var19 = var20.type;
            case 1148:
                var1.channel_type = var19;
                var1.guild_id = var18;
                var1.application_id = var17;
                var16 = var16.launchId;
                var1.instance_id = var16;
                var14 = var15[var14];
                var1.initial_media_session_id = var14;
                var1.activity_user_session_id = var13;
                var1.raw_thermal_state = var12;
                var1.is_activity_start = var10;
                var12 = var7 == var11;
                var10 = undefined;
                if (var12) {
                    _fun64543_ip = 1229;
                    continue _fun64543
                }
            case 1208:
                var11 = var11.activity;
                var12 = var7 == var11;
                var10 = undefined;
                if (var12) {
                    _fun64543_ip = 1229;
                    continue _fun64543
                }
            case 1223:
                var10 = var11.shelf_rank;
            case 1229:
                var1.shelf_rank = var10;
                var7 = null;
                if (!var9) {
                    _fun64543_ip = 1242;
                    continue _fun64543
                }
            case 1239:
                var7 = var8;
            case 1242:
                var1.shelf_sorted_rank = var7;
                var1.activities_infra_version = var6;
                var5 = var5.kind;
                var1.embedded_activity_location_kind = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 1270:
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.GUILD_VOCAL_CHANNEL_TYPES;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 13;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 14;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot17 = var3;
    var3 = 15;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var7 = var3.AnalyticEvents;
    var _closure1_slot18 = var7;
    var7 = var3.RPCCloseCodes;
    var _closure1_slot19 = var7;
    var7 = var3.Endpoints;
    var _closure1_slot20 = var7;
    var7 = var3.RTCConnectionStates;
    var _closure1_slot21 = var7;
    var3 = var3.ComponentActions;
    var _closure1_slot22 = var3;
    var3 = {};
    var _closure1_slot23 = var3;
    var3 = {};
    var _closure1_slot24 = var3;
    var3 = {};
    var _closure1_slot25 = var3;
    var _closure1_slot26 = var0;
    var3 = 43;
    var3 = var6[var3];
    var4 = var4.bind(var0)(var3);
    var3 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun64547: for (var _fun64547_ip = 0;;) switch (_fun64547_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot29;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun64547_ip = 86;
                        continue _fun64547
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun64547_ip = 120;
                    continue _fun64547;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = function() { // Environment: var1
                        _fun64548: for (var _fun64548_ip = 0;;) switch (_fun64548_ip) {
                            case 0:
                                var1 = _closure1_slot14;
                                var0 = var1.getVoiceChannelId;
                                var3 = var0.bind(var1)();
                                var5 = _closure1_slot27;
                                var1 = _closure1_slot17;
                                var0 = var1.getSelfEmbeddedActivities;
                                var1 = var0.bind(var1)();
                                var0 = var1.values;
                                var1 = var0.bind(var1)();
                                var0 = undefined;
                                var10 = var5.bind(var0)(var1);
                                var6 = var10.bind(var0)();
                                var5 = var6.done;
                                var8 = 29;
                                var7 = 19;
                                var1 = null;
                                if (var5) {
                                    _fun64548_ip = 201;
                                    continue _fun64548
                                }
                            case 79:
                                var5 = var6.value;
                                var14 = var5.location;
                                var13 = var5.applicationId;
                                var11 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var5 = var5[var7];
                                var11 = var11.bind(var0)(var5);
                                var5 = var11.getEmbeddedActivityLocationChannelId;
                                var11 = var5.bind(var11)(var14);
                                var5 = var1 != var11;
                                if (!var5) {
                                    _fun64548_ip = 151;
                                    continue _fun64548
                                }
                            case 129:
                                var15 = _closure1_slot1;
                                var12 = _closure1_slot2;
                                var12 = var12[var8];
                                var12 = var15.bind(var0)(var12);
                                var5 = var12.bind(var0)(var11);
                            case 151:
                                if (!var5) {
                                    _fun64548_ip = 158;
                                    continue _fun64548
                                }
                            case 154:
                                var5 = var11 !== var3;
                            case 158:
                                if (!var5) {
                                    _fun64548_ip = 186;
                                    continue _fun64548
                                }
                            case 161:
                                var12 = _closure3_slot0;
                                var11 = var12.leaveActivity;
                                var5 = {};
                                var5.location = var14;
                                var5.applicationId = var13;
                                var5 = var11.bind(var12)(var5);
                            case 186:
                                var11 = var10.bind(var0)();
                                var5 = var11.done;
                                var6 = var11;
                                if (!var5) {
                                    _fun64548_ip = 79;
                                    continue _fun64548
                                }
                            case 201:
                                if (!(var1 != var3)) {
                                    _fun64548_ip = 253;
                                    continue _fun64548
                                }
                            case 205:
                                var6 = _closure1_slot17;
                                var5 = var6.getEmbeddedActivitiesForChannel;
                                var6 = var5.bind(var6)(var3);
                                var7 = _closure1_slot11;
                                var5 = var7.getId;
                                var5 = var5.bind(var7)();
                                var _closure4_slot0 = var5;
                                var5 = var6.forEach;
                                var4 = function(arg0) { // Environment: var4
                                    _fun64549: for (var _fun64549_ip = 0;;) switch (_fun64549_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var2 = var3.userIds;
                                            var1 = var2.has;
                                            var0 = _closure4_slot0;
                                            var0 = var1.bind(var2)(var0);
                                            if (!var0) {
                                                _fun64549_ip = 182;
                                                continue _fun64549
                                            }
                                        case 32:
                                            var4 = _closure1_slot0;
                                            var2 = _closure1_slot2;
                                            var1 = 19;
                                            var2 = var2[var1];
                                            var1 = undefined;
                                            var4 = var4.bind(var1)(var2);
                                            var2 = var4.getEmbeddedActivityLocationChannelId;
                                            var1 = var3.location;
                                            var4 = var2.bind(var4)(var1);
                                            var2 = _closure1_slot17;
                                            var1 = var2.getSelfEmbeddedActivityForChannel;
                                            var4 = var1.bind(var2)(var4);
                                            var1 = null;
                                            if (!(var1 != var4)) {
                                                _fun64549_ip = 144;
                                                continue _fun64549
                                            }
                                        case 94:
                                            var0 = _closure1_slot26;
                                            if (!(var1 == var0)) {
                                                _fun64549_ip = 182;
                                                continue _fun64549
                                            }
                                        case 102:
                                            var2 = _closure3_slot0;
                                            var1 = var2.hidePIPEmbed;
                                            var0 = {};
                                            var5 = var4.location;
                                            var0.location = var5;
                                            var4 = var4.applicationId;
                                            var0.applicationId = var4;
                                            var0 = var1.bind(var2)(var0);
                                            _fun64549_ip = 182;
                                            continue _fun64549;
                                        case 144:
                                            var2 = _closure3_slot0;
                                            var1 = var2.leaveActivity;
                                            var0 = {};
                                            var4 = var3.location;
                                            var0.location = var4;
                                            var3 = var3.applicationId;
                                            var0.applicationId = var3;
                                            var0 = var1.bind(var2)(var0);
                                        case 182:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var4 = var5.bind(var6)(var4);
                            case 253:
                                var4 = var1 != var3;
                                var1 = undefined;
                                if (!var4) {
                                    _fun64548_ip = 265;
                                    continue _fun64548
                                }
                            case 262:
                                var1 = var3;
                            case 265:
                                _closure1_slot26 = var1;
                                return var0;
                        }
                    };
                    var0.handleSelectedChannelUpdate = var2;
                    var2 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.releaseWebView;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleActivityWebViewRelease = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun64551: for (var _fun64551_ip = 0;;) switch (_fun64551_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = var0.nonce;
                                var3 = var0.applicationId;
                                var2 = _closure1_slot33;
                                var0 = undefined;
                                var2 = var2.bind(var0)(var3, var4);
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 30;
                                var1 = var3[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.isUsingDevShelfActivityUrlOverride;
                                var1 = var1.bind(var2)();
                                if (!var1) {
                                    _fun64551_ip = 81;
                                    continue _fun64551
                                }
                            case 62:
                                var2 = _closure3_slot0;
                                var1 = var2.showDevShelfOverrideEnabled;
                                var1 = var1.bind(var2)();
                            case 81:
                                return var0;
                        }
                    };
                    var0.handleActivityLaunchSuccess = var2;
                    var2 = function() { // Environment: var1
                        var3 = _closure1_slot8;
                        var2 = undefined;
                        var1 = function*(arg0) { // Environment: var0
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun64554: for (var _fun64554_ip = 0;;) switch (_fun64554_ip) {
                                    case 0:
                                        StartGenerator();
                                        var1 = arg0;
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun64554_ip = 381;
                                            continue _fun64554
                                        }
                                    case 13:
                                        var6 = var1.error;
                                        var5 = var1.nonce;
                                        var9 = var1.channelId;
                                        var15 = var1.guildId;
                                        var14 = var1.applicationId;
                                        var11 = var1.isStart;
                                        var8 = var1.locationKind;
                                        var3 = undefined;
                                        SaveGenerator(address = 57);
                                    case 55:
                                        return var3;
                                    case 57:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun64554_ip = 378;
                                            continue _fun64554
                                        }
                                    case 66:
                                        var2 = _closure1_slot32;
                                        var10 = var2.bind(var3)(var14, var5);
                                        var5 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var2 = 31;
                                        var2 = var7[var2];
                                        var5 = var5.bind(var3)(var2);
                                        var2 = var5.getActivityLaunchErrorInfo;
                                        var2 = var2.bind(var5)(var6, var14);
                                        SaveGenerator(address = 115);
                                    case 113:
                                        return var2;
                                    case 115:
                                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                                        if (var5) {
                                            _fun64554_ip = 375;
                                            continue _fun64554
                                        }
                                    case 124:
                                        var7 = _closure3_slot0;
                                        var6 = var7.showLaunchErrorModal;
                                        var5 = var2.message;
                                        var5 = var6.bind(var7)(var5);
                                        var6 = _closure1_slot12;
                                        var5 = var6.getChannel;
                                        var12 = var5.bind(var6)(var9);
                                        var6 = _closure1_slot1;
                                        var7 = _closure1_slot2;
                                        var5 = 21;
                                        var5 = var7[var5];
                                        var13 = var6.bind(var3)(var5);
                                        var5 = var13.getRawThermalState;
                                        var13 = var5.bind(var13)();
                                        var5 = 22;
                                        var5 = var7[var5];
                                        var7 = var6.bind(var3)(var5);
                                        var6 = var7.track;
                                        var4 = _closure1_slot18;
                                        var5 = var4.ACTIVITY_SESSION_JOIN_FAILED;
                                        var4 = {};
                                        var4.channel_id = var9;
                                        var9 = null;
                                        if (!(var9 == var15)) {
                                            _fun64554_ip = 252;
                                            continue _fun64554
                                        }
                                    case 230:
                                        var17 = var9 == var12;
                                        var16 = undefined;
                                        if (var17) {
                                            _fun64554_ip = 249;
                                            continue _fun64554
                                        }
                                    case 239:
                                        var17 = var12.getGuildId;
                                        var16 = var17.bind(var12)();
                                    case 249:
                                        var15 = var16;
                                    case 252:
                                        var4.guild_id = var15;
                                        var4.application_id = var14;
                                        var4.raw_thermal_state = var13;
                                        var4.is_activity_start = var11;
                                        var13 = var9 == var12;
                                        var11 = undefined;
                                        if (var13) {
                                            _fun64554_ip = 285;
                                            continue _fun64554
                                        }
                                    case 280:
                                        var11 = var12.type;
                                    case 285:
                                        var4.channel_type = var11;
                                        var12 = var9 == var10;
                                        var11 = undefined;
                                        if (var12) {
                                            _fun64554_ip = 305;
                                            continue _fun64554
                                        }
                                    case 299:
                                        var11 = var10.locations;
                                    case 305:
                                        var4.location_stack = var11;
                                        var11 = var2.errorType;
                                        var4.error_type = var11;
                                        var11 = var2.errorStatus;
                                        var4.error_status = var11;
                                        var11 = var2.errorCode;
                                        var4.error_code = var11;
                                        var11 = var9 == var10;
                                        var9 = undefined;
                                        if (var11) {
                                            _fun64554_ip = 357;
                                            continue _fun64554
                                        }
                                    case 352:
                                        var9 = var10.source;
                                    case 357:
                                        var4.source = var9;
                                        var4.embedded_activity_location_kind = var8;
                                        var4 = var6.bind(var7)(var5, var4);
                                        return var3;
                                    case 375:
                                        return var2;
                                    case 378:
                                        return var1;
                                    case 381:
                                        return var0;
                                }
                            };
                            var1 = var0.next;
                            var1 = var1.bind(var0)();
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
                    var2 = var2.bind(var3)();
                    var0.handleActivityLaunchFail = var2;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var3 = var0.nonce;
                        var2 = var0.applicationId;
                        var1 = _closure1_slot32;
                        var0 = undefined;
                        var1 = var1.bind(var0)(var2, var3);
                        return var0;
                    };
                    var0.handleActivityLaunchCancel = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun64557: for (var _fun64557_ip = 0;;) switch (_fun64557_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.reason;
                                var0 = var0.application;
                                var2 = var0.id;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun64557_ip = 251;
                                    continue _fun64557
                                }
                            case 28:
                                if (!(var0 != var3)) {
                                    _fun64557_ip = 251;
                                    continue _fun64557
                                }
                            case 35:
                                var4 = _closure1_slot27;
                                var5 = _closure1_slot17;
                                var0 = var5.getSelfEmbeddedActivities;
                                var5 = var0.bind(var5)();
                                var0 = var5.values;
                                var0 = var0.bind(var5)();
                                var6 = undefined;
                                var7 = var4.bind(var6)(var0);
                                var5 = var7.bind(var6)();
                                var4 = var5.done;
                                if (var4) {
                                    _fun64557_ip = 146;
                                    continue _fun64557
                                }
                            case 87:
                                var8 = var5.value;
                                var4 = var8.applicationId;
                                var10 = var8.location;
                                if (!(var4 === var2)) {
                                    _fun64557_ip = 131;
                                    continue _fun64557
                                }
                            case 106:
                                var9 = _closure3_slot0;
                                var8 = var9.leaveActivity;
                                var4 = {};
                                var4.location = var10;
                                var4.applicationId = var2;
                                var4 = var8.bind(var9)(var4);
                            case 131:
                                var8 = var7.bind(var6)();
                                var4 = var8.done;
                                var5 = var8;
                                if (!var4) {
                                    _fun64557_ip = 87;
                                    continue _fun64557
                                }
                            case 146:
                                var5 = var3.code;
                                var4 = _closure1_slot19;
                                var4 = var4.CLOSE_NORMAL;
                                if (!(var5 !== var4)) {
                                    _fun64557_ip = 251;
                                    continue _fun64557
                                }
                            case 165:
                                var5 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var4 = 22;
                                var4 = var7[var4];
                                var6 = var5.bind(var6)(var4);
                                var5 = var6.track;
                                var1 = _closure1_slot18;
                                var4 = var1.ACTIVITY_CLOSED_RPC_ERROR;
                                var1 = {};
                                var7 = var3.code;
                                var1.rpc_close_code = var7;
                                var7 = var3.message;
                                var1.rpc_message = var7;
                                var1.application_id = var2;
                                var1 = var5.bind(var6)(var4, var1);
                                var1 = _closure3_slot0;
                                var0 = var1.showErrorModal;
                                var0 = var0.bind(var1)(var3, var2);
                            case 251:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.superHandleRPCDisconnect = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun64558: for (var _fun64558_ip = 0;;) switch (_fun64558_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.channelId;
                                var1 = _closure1_slot14;
                                var0 = var1.getVoiceChannelId;
                                var1 = var0.bind(var1)();
                                var0 = null;
                                var0 = var0 != var1;
                                if (!var0) {
                                    _fun64558_ip = 38;
                                    continue _fun64558
                                }
                            case 34:
                                var0 = var1 === var2;
                            case 38:
                                if (!var0) {
                                    _fun64558_ip = 59;
                                    continue _fun64558
                                }
                            case 41:
                                var1 = _closure3_slot0;
                                var0 = var1.handleCallEnded;
                                var0 = var0.bind(var1)(var2);
                            case 59:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleCallDelete = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun64559: for (var _fun64559_ip = 0;;) switch (_fun64559_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.state;
                                var1 = _closure1_slot21;
                                var1 = var1.DISCONNECTED;
                                if (!(var2 === var1)) {
                                    _fun64559_ip = 48;
                                    continue _fun64559
                                }
                            case 25:
                                var2 = var0.channelId;
                                var1 = _closure3_slot0;
                                var0 = var1.handleCallEnded;
                                var0 = var0.bind(var1)(var2);
                            case 48:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleRTCConnectionState = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun64560: for (var _fun64560_ip = 0;;) switch (_fun64560_ip) {
                            case 0:
                                var2 = _closure1_slot17;
                                var1 = var2.getSelfEmbeddedActivityForChannel;
                                var0 = arg0;
                                var3 = var1.bind(var2)(var0);
                                var0 = null;
                                if (!(var0 != var3)) {
                                    _fun64560_ip = 65;
                                    continue _fun64560
                                }
                            case 27:
                                var2 = _closure3_slot0;
                                var1 = var2.leaveActivity;
                                var0 = {};
                                var4 = var3.location;
                                var0.location = var4;
                                var3 = var3.applicationId;
                                var0.applicationId = var3;
                                var0 = var1.bind(var2)(var0);
                            case 65:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleCallEnded = var2;
                    var2 = function() { // Environment: var1
                        var3 = _closure1_slot8;
                        var2 = undefined;
                        var1 = function*(arg0) { // Environment: var0
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun64563: for (var _fun64563_ip = 0;;) switch (_fun64563_ip) {
                                    case 0:
                                        StartGenerator();
                                        var1 = arg0;
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun64563_ip = 945;
                                            continue _fun64563
                                        }
                                    case 15:
                                        var14 = var1.channelId;
                                        var12 = var1.applicationId;
                                        var _closure6_slot0 = var12;
                                        var10 = var1.analyticsLocations;
                                        var15 = var1.commandOrigin;
                                        var9 = var1.inviterUserId;
                                        var2 = undefined;
                                        SaveGenerator(address = 53);
                                    case 51:
                                        return var2;
                                    case 53:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                        if (var3) {
                                            _fun64563_ip = 942;
                                            continue _fun64563
                                        }
                                    case 62:
                                        var4 = _closure1_slot12;
                                        var3 = var4.getChannel;
                                        var8 = var3.bind(var4)(var14);
                                        if (!(var2 !== var8)) {
                                            _fun64563_ip = 939;
                                            continue _fun64563
                                        }
                                    case 86:
                                        var5 = _closure1_slot10;
                                        var4 = var5.has;
                                        var11 = null;
                                        var13 = var11 == var8;
                                        var3 = undefined;
                                        if (var13) {
                                            _fun64563_ip = 111;
                                            continue _fun64563
                                        }
                                    case 106:
                                        var3 = var8.type;
                                    case 111:
                                        var3 = var4.bind(var5)(var3);
                                        if (!var3) {
                                            _fun64563_ip = 140;
                                            continue _fun64563
                                        }
                                    case 119:
                                        var4 = _closure1_slot14;
                                        var3 = var4.getVoiceChannelId;
                                        var3 = var3.bind(var4)();
                                        if (!(var3 === var14)) {
                                            _fun64563_ip = 939;
                                            continue _fun64563
                                        }
                                    case 140:
                                        var4 = _closure1_slot17;
                                        var3 = var4.getSelfEmbeddedActivityForChannel;
                                        var4 = var3.bind(var4)(var14);
                                        var5 = var11 == var4;
                                        var3 = undefined;
                                        if (var5) {
                                            _fun64563_ip = 169;
                                            continue _fun64563
                                        }
                                    case 164:
                                        var3 = var4.applicationId;
                                    case 169:
                                        if (!(var3 !== var12)) {
                                            _fun64563_ip = 939;
                                            continue _fun64563
                                        }
                                    case 176:
                                        var4 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var3 = 32;
                                        var3 = var5[var3];
                                        var4 = var4.bind(var2)(var3);
                                        var3 = var4.fetchApplication;
                                        var3 = var3.bind(var4)(var12);
                                        SaveGenerator(address = 211);
                                    case 209:
                                        return var3;
                                    case 211:
                                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                        if (var4) {
                                            _fun64563_ip = 936;
                                            continue _fun64563
                                        }
                                    case 220:
                                        var5 = _closure1_slot0;
                                        var13 = _closure1_slot2;
                                        var4 = 33;
                                        var4 = var13[var4];
                                        var5 = var5.bind(var2)(var4);
                                        var4 = var5.getIsActivitiesEnabledForCurrentPlatform;
                                        var4 = var4.bind(var5)();
                                        if (var4) {
                                            _fun64563_ip = 331;
                                            continue _fun64563
                                        }
                                    case 253:
                                        var13 = _closure3_slot0;
                                        var5 = var13.showLaunchErrorModal;
                                        var18 = _closure1_slot0;
                                        var19 = _closure1_slot2;
                                        var4 = 34;
                                        var16 = var19[var4];
                                        var16 = var18.bind(var2)(var16);
                                        var17 = var16.intl;
                                        var16 = var17.string;
                                        var4 = var19[var4];
                                        var4 = var18.bind(var2)(var4);
                                        var4 = var4.t;
                                        var4 = var4.UXoQTp;
                                        var4 = var16.bind(var17)(var4);
                                        var4 = var5.bind(var13)(var4);
                                        _fun64563_ip = 939;
                                        continue _fun64563;
                                    case 331:
                                        var5 = _closure1_slot1;
                                        var13 = _closure1_slot2;
                                        var4 = 35;
                                        var4 = var13[var4];
                                        var5 = var5.bind(var2)(var4);
                                        var13 = var11 == var3;
                                        var4 = undefined;
                                        if (var13) {
                                            _fun64563_ip = 381;
                                            continue _fun64563
                                        }
                                    case 360:
                                        var13 = var3.embedded_activity_config;
                                        var16 = var11 == var13;
                                        var4 = undefined;
                                        if (var16) {
                                            _fun64563_ip = 381;
                                            continue _fun64563
                                        }
                                    case 375:
                                        var4 = var13.supported_platforms;
                                    case 381:
                                        var4 = var5.bind(var2)(var4);
                                        if (var4) {
                                            _fun64563_ip = 467;
                                            continue _fun64563
                                        }
                                    case 389:
                                        var13 = _closure3_slot0;
                                        var5 = var13.showLaunchErrorModal;
                                        var18 = _closure1_slot0;
                                        var19 = _closure1_slot2;
                                        var4 = 34;
                                        var16 = var19[var4];
                                        var16 = var18.bind(var2)(var16);
                                        var17 = var16.intl;
                                        var16 = var17.string;
                                        var4 = var19[var4];
                                        var4 = var18.bind(var2)(var4);
                                        var4 = var4.t;
                                        var4 = var4.uGDCcw;
                                        var4 = var16.bind(var17)(var4);
                                        var4 = var5.bind(var13)(var4);
                                        _fun64563_ip = 939;
                                        continue _fun64563;
                                    case 467:
                                        var5 = var11 == var8;
                                        var4 = undefined;
                                        if (var5) {
                                            _fun64563_ip = 486;
                                            continue _fun64563
                                        }
                                    case 476:
                                        var5 = var8.getGuildId;
                                        var4 = var5.bind(var8)();
                                    case 486:
                                        var5 = var11 != var4;
                                        var17 = undefined;
                                        if (!var5) {
                                            _fun64563_ip = 498;
                                            continue _fun64563
                                        }
                                    case 495:
                                        var17 = var4;
                                    case 498:
                                        var5 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var13 = 36;
                                        var4 = var4[var13];
                                        var8 = var5.bind(var2)(var4);
                                        var5 = var8.fetchShelf;
                                        var4 = {};
                                        var4.guildId = var17;
                                        var4 = var5.bind(var8)(var4);
                                        SaveGenerator(address = 539);
                                    case 537:
                                        return var4;
                                    case 539:
                                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                                        if (var5) {
                                            _fun64563_ip = 933;
                                            continue _fun64563
                                        }
                                    case 548:
                                        var19 = var4.activityConfigs;
                                        var18 = var4.applications;
                                        var8 = _closure1_slot1;
                                        var5 = _closure1_slot2;
                                        var16 = 20;
                                        var5 = var5[var16];
                                        var8 = var8.bind(var2)(var5);
                                        var5 = {};
                                        var5.applicationId = var12;
                                        var5.activityConfigs = var19;
                                        var5.applications = var18;
                                        var5 = var8.bind(var2)(var5);
                                        if (!(var11 == var5)) {
                                            _fun64563_ip = 709;
                                            continue _fun64563
                                        }
                                    case 605:
                                        var8 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var5 = var5[var13];
                                        var13 = var8.bind(var2)(var5);
                                        var8 = var13.fetchShelf;
                                        var5 = {};
                                        var5.guildId = var17;
                                        var17 = true;
                                        var5.force = var17;
                                        var5 = var8.bind(var13)(var5);
                                        SaveGenerator(address = 650);
                                    case 648:
                                        return var5;
                                    case 650:
                                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 8);
                                        if (var8) {
                                            _fun64563_ip = 930;
                                            continue _fun64563
                                        }
                                    case 659:
                                        var13 = _closure1_slot1;
                                        var8 = _closure1_slot2;
                                        var8 = var8[var16];
                                        var13 = var13.bind(var2)(var8);
                                        var8 = {};
                                        var8.applicationId = var12;
                                        var16 = var5.activityConfigs;
                                        var8.activityConfigs = var16;
                                        var16 = var5.applications;
                                        var8.applications = var16;
                                        var8 = var13.bind(var2)(var8);
                                    case 709:
                                        var13 = _closure1_slot17;
                                        var8 = var13.getEmbeddedActivitiesForChannel;
                                        var13 = var8.bind(var13)(var14);
                                        var8 = var13.find;
                                        var7 = function(arg0) { // Environment: var7
                                            var0 = arg0;
                                            var1 = var0.applicationId;
                                            var0 = _closure6_slot0;
                                            var0 = var1 === var0;
                                            return var0;
                                        };
                                        var13 = var8.bind(var13)(var7);
                                        var7 = var11 == var13;
                                        var16 = undefined;
                                        if (var7) {
                                            _fun64563_ip = 759;
                                            continue _fun64563
                                        }
                                    case 748:
                                        var7 = var13.userIds;
                                        var16 = var7.size;
                                    case 759:
                                        var17 = var11 != var16;
                                        var8 = 0;
                                        var7 = 0;
                                        if (!var17) {
                                            _fun64563_ip = 773;
                                            continue _fun64563
                                        }
                                    case 770:
                                        var7 = var16;
                                    case 773:
                                        if (!(!(var7 > var8))) {
                                            _fun64563_ip = 841;
                                            continue _fun64563
                                        }
                                    case 777:
                                        var8 = _closure1_slot1;
                                        var16 = _closure1_slot2;
                                        var7 = 38;
                                        var7 = var16[var7];
                                        var8 = var8.bind(var2)(var7);
                                        var7 = {};
                                        var7.targetApplicationId = var12;
                                        var7.channelId = var14;
                                        var7.analyticsLocations = var10;
                                        var7.commandOrigin = var15;
                                        var7.inviterUserId = var9;
                                        var7 = var8.bind(var2)(var7);
                                        SaveGenerator(address = 832);
                                    case 830:
                                        return var7;
                                    case 832:
                                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 8);
                                        if (!var8) {
                                            _fun64563_ip = 939;
                                            continue _fun64563
                                        }
                                    case 838:
                                        return var7;
                                    case 841:
                                        var7 = _closure1_slot0;
                                        var8 = _closure1_slot2;
                                        var6 = 37;
                                        var6 = var8[var6];
                                        var8 = var7.bind(var2)(var6);
                                        var7 = var8.maybeJoinEmbeddedActivity;
                                        var6 = {};
                                        var6.channelId = var14;
                                        var6.applicationId = var12;
                                        var14 = var11 == var13;
                                        var12 = undefined;
                                        if (var14) {
                                            _fun64563_ip = 892;
                                            continue _fun64563
                                        }
                                    case 886:
                                        var12 = var13.launchId;
                                    case 892:
                                        var6.launchId = var12;
                                        var6.inputApplication = var11;
                                        var6.analyticsLocations = var10;
                                        var6.inviterUserId = var9;
                                        var6 = var7.bind(var8)(var6);
                                        SaveGenerator(address = 921);
                                    case 919:
                                        return var6;
                                    case 921:
                                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                                        if (!var7) {
                                            _fun64563_ip = 939;
                                            continue _fun64563
                                        }
                                    case 927:
                                        return var6;
                                    case 930:
                                        return var5;
                                    case 933:
                                        return var4;
                                    case 936:
                                        return var3;
                                    case 939:
                                        return var2;
                                    case 942:
                                        return var1;
                                    case 945:
                                        return var0;
                                }
                            };
                            var1 = var0.next;
                            var1 = var1.bind(var0)();
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
                    var2 = var2.bind(var3)();
                    var0.handleDeferredOpen = var2;
                    var2 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var1 = var1.guild;
                        var _closure4_slot0 = var1;
                        var2 = _closure1_slot17;
                        var1 = var2.getSelfEmbeddedActivities;
                        var2 = var1.bind(var2)();
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            _fun64567: for (var _fun64567_ip = 0;;) switch (_fun64567_ip) {
                                case 0:
                                    var0 = arg0;
                                    var5 = var0.location;
                                    var4 = var0.applicationId;
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 19;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = var2.getEmbeddedActivityLocationGuildId;
                                    var2 = var1.bind(var2)(var5);
                                    var1 = _closure4_slot0;
                                    var1 = var1.id;
                                    if (!(var1 === var2)) {
                                        _fun64567_ip = 93;
                                        continue _fun64567
                                    }
                                case 65:
                                    var3 = _closure3_slot0;
                                    var2 = var3.leaveActivity;
                                    var1 = {};
                                    var1.location = var5;
                                    var1.applicationId = var4;
                                    var1 = var2.bind(var3)(var1);
                                case 93:
                                    return var0;
                            }
                        };
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleGuildDelete = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun64568: for (var _fun64568_ip = 0;;) switch (_fun64568_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.channel;
                                var2 = _closure1_slot17;
                                var1 = var2.getSelfEmbeddedActivityForChannel;
                                var0 = var0.id;
                                var3 = var1.bind(var2)(var0);
                                var0 = null;
                                if (!(var0 != var3)) {
                                    _fun64568_ip = 75;
                                    continue _fun64568
                                }
                            case 37:
                                var2 = _closure3_slot0;
                                var1 = var2.leaveActivity;
                                var0 = {};
                                var4 = var3.location;
                                var0.location = var4;
                                var3 = var3.applicationId;
                                var0.applicationId = var3;
                                var0 = var1.bind(var2)(var0);
                            case 75:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleChannelDelete = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun64569: for (var _fun64569_ip = 0;;) switch (_fun64569_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.nonce;
                                var0 = var0.data;
                                var4 = _closure1_slot24;
                                var3 = var0.applicationId;
                                var4 = var4[var3];
                                var3 = null;
                                if (!(var3 == var4)) {
                                    _fun64569_ip = 327;
                                    continue _fun64569
                                }
                            case 39:
                                var4 = var0.interactionType;
                                var6 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var7 = 39;
                                var3 = var3[var7];
                                var5 = undefined;
                                var3 = var6.bind(var5)(var3);
                                var3 = var3.InteractionTypes;
                                var3 = var3.APPLICATION_COMMAND;
                                if (!(var4 !== var3)) {
                                    _fun64569_ip = 244;
                                    continue _fun64569
                                }
                            case 86:
                                var4 = var0.interactionType;
                                var6 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var3 = var3[var7];
                                var3 = var6.bind(var5)(var3);
                                var3 = var3.InteractionTypes;
                                var3 = var3.MESSAGE_COMPONENT;
                                if (!(var4 !== var3)) {
                                    _fun64569_ip = 205;
                                    continue _fun64569
                                }
                            case 125:
                                var4 = var0.interactionType;
                                var6 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var3 = var3[var7];
                                var3 = var6.bind(var5)(var3);
                                var3 = var3.InteractionTypes;
                                var3 = var3.MODAL_SUBMIT;
                                var6 = undefined;
                                if (!(var4 === var3)) {
                                    _fun64569_ip = 281;
                                    continue _fun64569
                                }
                            case 166:
                                var4 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var3 = 40;
                                var3 = var7[var3];
                                var3 = var4.bind(var5)(var3);
                                var4 = var3.INTERACTION_MODAL_SUBMIT;
                                var3 = new Array(1);
                                var3[0] = var4;
                                var6 = var3;
                                _fun64569_ip = 281;
                                continue _fun64569;
                            case 205:
                                var4 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var3 = 40;
                                var3 = var7[var3];
                                var3 = var4.bind(var5)(var3);
                                var4 = var3.INTERACTION_MESSAGE_COMPONENT;
                                var3 = new Array(1);
                                var3[0] = var4;
                                var6 = var3;
                                _fun64569_ip = 281;
                                continue _fun64569;
                            case 244:
                                var4 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var3 = 40;
                                var3 = var7[var3];
                                var3 = var4.bind(var5)(var3);
                                var4 = var3.INTERACTION_APPLICATION_COMMAND;
                                var3 = new Array(1);
                                var3[0] = var4;
                                var6 = var3;
                            case 281:
                                var4 = _closure1_slot31;
                                var3 = {};
                                var7 = var0.applicationId;
                                var3.applicationId = var7;
                                var3.nonce = var2;
                                var3.locations = var6;
                                var3 = var4.bind(var5)(var3);
                                if (!var3) {
                                    _fun64569_ip = 327;
                                    continue _fun64569
                                }
                            case 314:
                                var1 = _closure1_slot25;
                                var0 = var0.applicationId;
                                var1[var2] = var0;
                            case 327:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleInteractionQueue = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun64570: for (var _fun64570_ip = 0;;) switch (_fun64570_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = var0.nonce;
                                var1 = var0.interactionId;
                                var2 = null;
                                if (!(var2 != var4)) {
                                    _fun64570_ip = 54;
                                    continue _fun64570
                                }
                            case 21:
                                var3 = _closure1_slot25;
                                var3 = var3[var4];
                                if (!(var2 != var3)) {
                                    _fun64570_ip = 54;
                                    continue _fun64570
                                }
                            case 36:
                                var0 = _closure1_slot24;
                                var0 = var0[var3];
                                if (!(var2 != var0)) {
                                    _fun64570_ip = 54;
                                    continue _fun64570
                                }
                            case 48:
                                var0.interactionId = var1;
                            case 54:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleInteractionCreate = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun64571: for (var _fun64571_ip = 0;;) switch (_fun64571_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.nonce;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun64571_ip = 50;
                                    continue _fun64571
                                }
                            case 15:
                                var2 = _closure1_slot25;
                                var2 = var2[var3];
                                if (!(var1 != var2)) {
                                    _fun64571_ip = 50;
                                    continue _fun64571
                                }
                            case 30:
                                var1 = _closure1_slot25;
                                var1 = delete var1[var3];
                                var1 = _closure1_slot33;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2, var3);
                            case 50:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleInteractionSuccess = var2;
                    var1 = function(arg0) { // Environment: var1
                        _fun64572: for (var _fun64572_ip = 0;;) switch (_fun64572_ip) {
                            case 0:
                                var0 = arg0;
                                var3 = var0.nonce;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun64572_ip = 50;
                                    continue _fun64572
                                }
                            case 15:
                                var2 = _closure1_slot25;
                                var2 = var2[var3];
                                if (!(var1 != var2)) {
                                    _fun64572_ip = 50;
                                    continue _fun64572
                                }
                            case 30:
                                var1 = _closure1_slot25;
                                var1 = delete var1[var3];
                                var1 = _closure1_slot32;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2, var3);
                            case 50:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleInteractionFailure = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() {
            var1 = this;
            var3 = _closure1_slot14;
            var2 = var3.addChangeListener;
            var0 = var1.handleSelectedChannelUpdate;
            var0 = var2.bind(var3)(var0);
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 41;
            var2 = var4[var3];
            var0 = undefined;
            var2 = var6.bind(var0)(var2);
            var10 = var2.ComponentDispatch;
            var9 = var10.subscribe;
            var2 = _closure1_slot22;
            var8 = var2.RELEASE_ACTIVITY_WEB_VIEW;
            var7 = var1.handleActivityWebViewRelease;
            var7 = var9.bind(var10)(var8, var7);
            var3 = var4[var3];
            var3 = var6.bind(var0)(var3);
            var7 = var3.ComponentDispatch;
            var6 = var7.subscribe;
            var3 = var2.OPEN_EMBEDDED_ACTIVITY;
            var2 = _closure1_slot37;
            var2 = var6.bind(var7)(var3, var2);
            var3 = _closure1_slot1;
            var2 = 42;
            var6 = var4[var2];
            var9 = var3.bind(var0)(var6);
            var8 = var9.subscribe;
            var7 = _closure1_slot34;
            var6 = 'EMBEDDED_ACTIVITY_LAUNCH_START';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var4[var2];
            var9 = var3.bind(var0)(var6);
            var8 = var9.subscribe;
            var7 = var1.handleActivityLaunchSuccess;
            var6 = 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var4[var2];
            var9 = var3.bind(var0)(var6);
            var8 = var9.subscribe;
            var7 = var1.handleActivityLaunchFail;
            var6 = 'EMBEDDED_ACTIVITY_LAUNCH_FAIL';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var4[var2];
            var9 = var3.bind(var0)(var6);
            var8 = var9.subscribe;
            var7 = var1.handleActivityLaunchCancel;
            var6 = 'EMBEDDED_ACTIVITY_LAUNCH_CANCEL';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var4[var2];
            var8 = var3.bind(var0)(var6);
            var7 = var8.subscribe;
            var6 = _closure1_slot35;
            var5 = 'EMBEDDED_ACTIVITY_CLOSE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleDeferredOpen;
            var5 = 'EMBEDDED_ACTIVITY_DEFERRED_OPEN';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleRPCDisconnect;
            var5 = 'RPC_APP_DISCONNECTED';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleCallDelete;
            var5 = 'CALL_DELETE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleRTCConnectionState;
            var5 = 'RTC_CONNECTION_STATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleGuildDelete;
            var5 = 'GUILD_DELETE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleChannelDelete;
            var5 = 'CHANNEL_DELETE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleInteractionQueue;
            var5 = 'INTERACTION_QUEUE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleInteractionCreate;
            var5 = 'INTERACTION_CREATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1.handleInteractionSuccess;
            var5 = 'INTERACTION_SUCCESS';
            var5 = var7.bind(var8)(var5, var6);
            var2 = var4[var2];
            var4 = var3.bind(var0)(var2);
            var3 = var4.subscribe;
            var2 = var1.handleInteractionFailure;
            var1 = 'INTERACTION_FAILURE';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var5 = function() {
            var1 = this;
            var3 = _closure1_slot14;
            var2 = var3.removeChangeListener;
            var0 = var1.handleSelectedChannelUpdate;
            var0 = var2.bind(var3)(var0);
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 41;
            var2 = var4[var3];
            var0 = undefined;
            var2 = var6.bind(var0)(var2);
            var10 = var2.ComponentDispatch;
            var9 = var10.unsubscribe;
            var2 = _closure1_slot22;
            var8 = var2.RELEASE_ACTIVITY_WEB_VIEW;
            var7 = var1.handleActivityWebViewRelease;
            var7 = var9.bind(var10)(var8, var7);
            var3 = var4[var3];
            var3 = var6.bind(var0)(var3);
            var7 = var3.ComponentDispatch;
            var6 = var7.unsubscribe;
            var3 = var2.OPEN_EMBEDDED_ACTIVITY;
            var2 = _closure1_slot37;
            var2 = var6.bind(var7)(var3, var2);
            var3 = _closure1_slot1;
            var2 = 42;
            var6 = var4[var2];
            var9 = var3.bind(var0)(var6);
            var8 = var9.unsubscribe;
            var7 = _closure1_slot34;
            var6 = 'EMBEDDED_ACTIVITY_LAUNCH_START';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var4[var2];
            var9 = var3.bind(var0)(var6);
            var8 = var9.unsubscribe;
            var7 = var1.handleActivityLaunchSuccess;
            var6 = 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var4[var2];
            var9 = var3.bind(var0)(var6);
            var8 = var9.unsubscribe;
            var7 = var1.handleActivityLaunchFail;
            var6 = 'EMBEDDED_ACTIVITY_LAUNCH_FAIL';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var4[var2];
            var9 = var3.bind(var0)(var6);
            var8 = var9.unsubscribe;
            var7 = var1.handleActivityLaunchCancel;
            var6 = 'EMBEDDED_ACTIVITY_LAUNCH_CANCEL';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var4[var2];
            var8 = var3.bind(var0)(var6);
            var7 = var8.unsubscribe;
            var6 = _closure1_slot35;
            var5 = 'EMBEDDED_ACTIVITY_CLOSE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleDeferredOpen;
            var5 = 'EMBEDDED_ACTIVITY_DEFERRED_OPEN';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleRPCDisconnect;
            var5 = 'RPC_APP_DISCONNECTED';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleCallDelete;
            var5 = 'CALL_DELETE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleRTCConnectionState;
            var5 = 'RTC_CONNECTION_STATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleGuildDelete;
            var5 = 'GUILD_DELETE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleChannelDelete;
            var5 = 'CHANNEL_DELETE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleInteractionQueue;
            var5 = 'INTERACTION_QUEUE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleInteractionCreate;
            var5 = 'INTERACTION_CREATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleInteractionSuccess;
            var5 = 'INTERACTION_SUCCESS';
            var5 = var7.bind(var8)(var5, var6);
            var2 = var4[var2];
            var4 = var3.bind(var0)(var2);
            var3 = var4.unsubscribe;
            var2 = var1.handleInteractionFailure;
            var1 = 'INTERACTION_FAILURE';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = 44;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/EmbeddedActivitiesManager.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function arg0() {
        var1 = _closure1_slot23;
        var0 = arg0;
        var0 = var1[var0];
        return var0;
    };
    var2.getActiveAnalyticsSessionIDs = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5, 3949, 1376, 1216, 1372, 3519, 1672, 1621, 8020, 1371, 660, 8021, 478, 507, 3083, 8022, 8015, 795, 7986, 8023, 7949, 491, 1607, 8024, 8027, 7989, 8028, 5396, 7981, 1234, 8030, 7983, 8031, 8049, 1647, 5631, 1229, 806, 4017, 2]);