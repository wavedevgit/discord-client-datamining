// modules/gateway/GatewayConnectionStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var5;
    var0 = function() {
        _fun30050: for (var _fun30050_ip = 0;;) switch (_fun30050_ip) {
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
                _fun30050_ip = 74;
                continue _fun30050;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot30 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun30055: for (var _fun30055_ip = 0;;) switch (_fun30055_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun30055_ip = 501;
                            continue _fun30055
                        }
                    case 10:
                        var5 = global;
                        var2 = var5.Date;
                        var1 = var2.now;
                        var1 = var1.bind(var2)();
                        _closure1_slot25 = var1;
                        var1 = arg0;
                        var1 = var1.sessionId;
                        _closure1_slot26 = var1;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot3;
                        var6 = 18;
                        var2 = var1[var6];
                        var1 = undefined;
                        var2 = var4.bind(var1)(var2);
                        var4 = var2.localPresenceState;
                        var2 = var4.handleConnectionOpen;
                        var2 = var2.bind(var4)();
                        var4 = {};
                        var7 = _closure1_slot17;
                        var2 = var7.getVoiceChannelId;
                        var9 = var2.bind(var7)();
                        var2 = null;
                        var7 = var4;
                        if (!(var2 != var9)) {
                            _fun30055_ip = 451;
                            continue _fun30055
                        }
                    case 113:
                        var5 = var5.window;
                        var10 = var2 == var5;
                        var8 = undefined;
                        if (var10) {
                            _fun30055_ip = 202;
                            continue _fun30055
                        }
                    case 128:
                        var11 = var5.performance;
                        var5 = var2 == var11;
                        var8 = undefined;
                        if (var5) {
                            _fun30055_ip = 202;
                            continue _fun30055
                        }
                    case 143:
                        var5 = var11.getEntriesByType;
                        var5 = var2 == var5;
                        var8 = undefined;
                        if (var5) {
                            _fun30055_ip = 202;
                            continue _fun30055
                        }
                    case 158:
                        var10 = var11.getEntriesByType;
                        var5 = 'navigation';
                        var10 = var10.bind(var11)(var5);
                        var5 = var2 == var10;
                        var8 = undefined;
                        if (var5) {
                            _fun30055_ip = 202;
                            continue _fun30055
                        }
                    case 182:
                        var5 = 0;
                        var5 = var10[var5];
                        var10 = var2 == var5;
                        var8 = undefined;
                        if (var10) {
                            _fun30055_ip = 202;
                            continue _fun30055
                        }
                    case 197:
                        var8 = var5.type;
                    case 202:
                        var5 = 'reload';
                        if (!(var5 !== var8)) {
                            _fun30055_ip = 376;
                            continue _fun30055
                        }
                    case 213:
                        var5 = _closure1_slot23;
                        var8 = var2 == var5;
                        var5 = undefined;
                        if (var8) {
                            _fun30055_ip = 270;
                            continue _fun30055
                        }
                    case 226:
                        var8 = _closure1_slot23;
                        var10 = var8.processUtils;
                        var8 = var2 == var10;
                        var5 = undefined;
                        if (var8) {
                            _fun30055_ip = 270;
                            continue _fun30055
                        }
                    case 245:
                        var8 = var10.getLastCrash;
                        var8 = var2 == var8;
                        var5 = undefined;
                        if (var8) {
                            _fun30055_ip = 270;
                            continue _fun30055
                        }
                    case 260:
                        var8 = var10.getLastCrash;
                        var5 = var8.bind(var10)();
                    case 270:
                        SaveGenerator(address = 274);
                    case 272:
                        return var5;
                    case 274:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 8);
                        if (var8) {
                            _fun30055_ip = 373;
                            continue _fun30055
                        }
                    case 280:
                        var10 = var2 == var5;
                        var8 = undefined;
                        if (var10) {
                            _fun30055_ip = 297;
                            continue _fun30055
                        }
                    case 289:
                        var8 = var5.rendererCrashReason;
                    case 297:
                        if (!(var2 == var8)) {
                            _fun30055_ip = 376;
                            continue _fun30055
                        }
                    case 301:
                        var8 = _closure1_slot27;
                        if (!var8) {
                            _fun30055_ip = 376;
                            continue _fun30055
                        }
                    case 308:
                        var11 = _closure1_slot15;
                        var10 = var11.setLastSessionVoiceChannelId;
                        var12 = var2 != var9;
                        var8 = null;
                        if (!var12) {
                            _fun30055_ip = 332;
                            continue _fun30055
                        }
                    case 329:
                        var8 = var9;
                    case 332:
                        var8 = var10.bind(var11)(var8);
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot3;
                        var8 = 22;
                        var8 = var11[var8];
                        var10 = var10.bind(var1)(var8);
                        var8 = var10.selectVoiceChannel;
                        var8 = var8.bind(var10)(var2);
                        var7 = var4;
                        _fun30055_ip = 451;
                        continue _fun30055;
                    case 373:
                        return var5;
                    case 376:
                        var8 = _closure1_slot13;
                        var5 = var8.getChannel;
                        var8 = var5.bind(var8)(var9);
                        var7 = var4;
                        if (!(var2 != var8)) {
                            _fun30055_ip = 451;
                            continue _fun30055
                        }
                    case 397:
                        var4 = {};
                        var5 = var8.getGuildId;
                        var5 = var5.bind(var8)();
                        var4.guildId = var5;
                        var4.channelId = var9;
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var5 = 21;
                        var5 = var10[var5];
                        var8 = var8.bind(var1)(var5);
                        var5 = var8.muteCustomJoinSound;
                        var5 = var5.bind(var8)(var9);
                        var7 = var4;
                    case 451:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var6];
                        var4 = var5.bind(var1)(var4);
                        var6 = var4.localVoiceState;
                        var5 = var6.update;
                        var4 = true;
                        var4 = var5.bind(var6)(var7, var4);
                        var4 = false;
                        _closure1_slot27 = var4;
                        _closure1_slot29 = var2;
                        return var1;
                    case 501:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot31 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot31 = var0;
    var8 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 18;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var2 = var1.localVoiceState;
        var1 = var2.update;
        var1 = var1.bind(var2)();
        return var0;
    };
    var _closure1_slot32 = var8;
    var0 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 18;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var1 = var0.localVoiceState;
        var0 = var1.update;
        var0 = var0.bind(var1)();
        var0 = false;
        return var0;
    };
    var _closure1_slot33 = var0;
    var0 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 18;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var1 = var0.localPresenceState;
        var0 = var1.update;
        var0 = var0.bind(var1)();
        var0 = false;
        return var0;
    };
    var _closure1_slot34 = var0;
    var0 = function arg0() {
        _fun30059: for (var _fun30059_ip = 0;;) switch (_fun30059_ip) {
            case 0:
                var4 = _closure1_slot0;
                var0 = _closure1_slot3;
                var3 = 18;
                var2 = var0[var3];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var4 = var2.socket;
                var2 = var4.isSessionEstablished;
                var2 = var2.bind(var4)();
                if (!var2) {
                    _fun30059_ip = 83;
                    continue _fun30059
                }
            case 44:
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var2.bind(var0)(var1);
                var3 = var1.socket;
                var2 = var3.streamDelete;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
            case 83:
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function() {
        var2 = function() {
            var1 = _closure1_slot19;
            var0 = var1.getAllActiveStreamKeys;
            var2 = var0.bind(var1)();
            var1 = var2.find;
            var0 = function(arg0) { // Environment: var0
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.decodeStreamKey;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
                var1 = var1.ownerId;
                var2 = _closure1_slot11;
                var0 = var2.getId;
                var0 = var0.bind(var2)();
                var0 = var1 === var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = undefined;
        var2 = var2.bind(var0)();
        var _closure2_slot0 = var2;
        var3 = _closure1_slot19;
        var2 = var3.getAllActiveStreamKeys;
        var4 = var2.bind(var3)();
        var3 = var4.filter;
        var2 = function(arg0) { // Environment: var1
            var1 = _closure2_slot0;
            var0 = arg0;
            var0 = var0 !== var1;
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            var2 = _closure1_slot35;
            var0 = undefined;
            var1 = arg0;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var _closure1_slot36 = var0;
    var9 = global;
    var11 = var9.Object;
    var10 = var11.defineProperty;
    var1 = {};
    var7 = true;
    var1.value = var7;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var1);
    var1 = 0;
    var10 = var5[var1];
    var0 = undefined;
    var10 = var6.bind(var0)(var10);
    var _closure1_slot4 = var10;
    var10 = 1;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot5 = var10;
    var10 = 2;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot6 = var10;
    var10 = 3;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot7 = var10;
    var10 = 4;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot8 = var10;
    var10 = 5;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot9 = var10;
    var10 = 6;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot10 = var10;
    var10 = 7;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot11 = var10;
    var10 = 8;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot12 = var10;
    var10 = 9;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot13 = var10;
    var10 = 10;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot14 = var10;
    var10 = 11;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot15 = var10;
    var10 = 12;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot16 = var10;
    var10 = 13;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot17 = var10;
    var10 = 14;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot18 = var10;
    var10 = 15;
    var10 = var5[var10];
    var10 = var6.bind(var0)(var10);
    var _closure1_slot19 = var10;
    var10 = 16;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var11 = var10.RTCConnectionStates;
    var _closure1_slot20 = var11;
    var10 = var10.AppStates;
    var _closure1_slot21 = var10;
    var10 = 17;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var10 = var10.UserSettingsTypes;
    var _closure1_slot22 = var10;
    var9 = var9.window;
    var9 = var9.DiscordNative;
    var _closure1_slot23 = var9;
    var9 = 18;
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.socket;
    var10 = var9.dispatcher;
    var9 = 19;
    var9 = var5[var9];
    var9 = var6.bind(var0)(var9);
    var10.getDispatchHandler = var9;
    var9 = 20;
    var9 = var5[var9];
    var11 = var6.bind(var0)(var9);
    var9 = var11.prototype;
    var10 = Object.create(var9, {
        constructor: {
            value: var11
        }
    });
    var14 = 'ConnectionStore';
    var15 = var10;
    var9 = new var15[var11](var14, var13);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot24 = var9;
    var _closure1_slot25 = var1;
    var1 = null;
    var _closure1_slot26 = var1;
    var _closure1_slot27 = var7;
    var _closure1_slot28 = var1;
    var _closure1_slot29 = var1;
    var1 = 28;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun30066: for (var _fun30066_ip = 0;;) switch (_fun30066_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot30;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun30066_ip = 69;
                        continue _fun30066
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun30066_ip = 105;
                    continue _fun30066;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var3 = this;
            var12 = var3.waitFor;
            var22 = _closure1_slot11;
            var21 = _closure1_slot12;
            var20 = _closure1_slot13;
            var1 = _closure1_slot14;
            var18 = _closure1_slot15;
            var17 = _closure1_slot16;
            var16 = _closure1_slot17;
            var4 = _closure1_slot18;
            var14 = _closure1_slot19;
            var13 = _closure1_slot10;
            var23 = var3;
            var19 = var1;
            var15 = var4;
            var2 = var23[var12](var22, var21, var20, var19, var18, var17, var16, var15, var14, var13, var12);
            var5 = var3.syncWith;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = _closure1_slot33;
            var1 = var5.bind(var3)(var2, var1);
            var2 = var3.syncWith;
            var1 = new Array(1);
            var1[0] = var4;
            var0 = _closure1_slot34;
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'getSocket';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 18;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = var0.socket;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'isTryingToConnect';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 18;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var1 = var0.socket;
            var0 = var1.isClosed;
            var0 = var0.bind(var1)();
            var0 = !var0;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isConnected';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot3;
            var0 = 18;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var1 = var0.socket;
            var0 = var1.isSessionEstablished;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isConnectedOrOverlay';
        var4.key = var6;
        var6 = function() {
            _fun30071: for (var _fun30071_ip = 0;;) switch (_fun30071_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var1 = var0.socket;
                    var0 = var1.isSessionEstablished;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun30071_ip = 46;
                        continue _fun30071
                    }
                case 44:
                    var0 = false;
                case 46:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'lastTimeConnectedChanged';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot25;
            return var0;
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'GatewayConnectionStore';
    var7.displayName = var1;
    var1 = 29;
    var1 = var5[var1];
    var14 = var6.bind(var0)(var1);
    var1 = {};
    var9 = function() {
        _fun30073: for (var _fun30073_ip = 0;;) switch (_fun30073_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot3;
                var4 = 18;
                var0 = var0[var4];
                var3 = undefined;
                var0 = var2.bind(var3)(var0);
                var2 = var0.socket;
                var0 = var2.isClosed;
                var0 = var0.bind(var2)();
                var6 = _closure1_slot24;
                var5 = var6.verbose;
                if (var0) {
                    _fun30073_ip = 69;
                    continue _fun30073
                }
            case 54:
                var0 = 'Socket is not reconnecting during a new session because it is not closed';
                var0 = var5.bind(var6)(var0);
                var0 = false;
                _fun30073_ip = 113;
                continue _fun30073;
            case 69:
                var2 = 'Socket is reconnecting because of starting new session';
                var2 = var5.bind(var6)(var2);
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                var2 = var1.socket;
                var1 = var2.connect;
                var0 = var1.bind(var2)();
            case 113:
                return var0;
        }
    };
    var1.START_SESSION = var9;
    var9 = function() {
        _fun30074: for (var _fun30074_ip = 0;;) switch (_fun30074_ip) {
            case 0:
                var8 = _closure1_slot24;
                var7 = var8.verbose;
                var6 = {};
                var2 = _closure1_slot0;
                var0 = _closure1_slot3;
                var4 = 18;
                var5 = var0[var4];
                var3 = undefined;
                var5 = var2.bind(var3)(var5);
                var9 = var5.socket;
                var5 = var9.isSessionEstablished;
                var5 = var5.bind(var9)();
                var6.isEstablished = var5;
                var5 = 'session refresh dispatched';
                var5 = var7.bind(var8)(var5, var6);
                var0 = var0[var4];
                var0 = var2.bind(var3)(var0);
                var2 = var0.socket;
                var0 = var2.isSessionEstablished;
                var0 = var0.bind(var2)();
                var2 = !var0;
                var0 = !var2;
                if (var2) {
                    _fun30074_ip = 164;
                    continue _fun30074
                }
            case 106:
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var5 = var1[var4];
                var5 = var2.bind(var3)(var5);
                var6 = var5.socket;
                var5 = var6.close;
                var5 = var5.bind(var6)();
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                var2 = var1.socket;
                var1 = var2.connect;
                var0 = var1.bind(var2)();
            case 164:
                return var0;
        }
    };
    var1.LOGIN_SUCCESS = var9;
    var9 = function arg0() {
        _fun30075: for (var _fun30075_ip = 0;;) switch (_fun30075_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.isSwitchingAccount;
                if (!var0) {
                    _fun30075_ip = 55;
                    continue _fun30075
                }
            case 12:
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 18;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var1 = var0.localPresenceState;
                var0 = var1.handleAccountSwitch;
                var0 = var0.bind(var1)();
            case 55:
                var3 = _closure1_slot24;
                var2 = var3.verbose;
                var1 = 'Closing socket because of logout';
                var1 = var2.bind(var3)(var1);
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 18;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var2 = var1.socket;
                var1 = var2.close;
                var1 = var1.bind(var2)();
                return var0;
        }
    };
    var1.LOGOUT = var9;
    var9 = function arg0() {
        _fun30076: for (var _fun30076_ip = 0;;) switch (_fun30076_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.resetSocket;
                if (!var0) {
                    _fun30076_ip = 109;
                    continue _fun30076
                }
            case 12:
                var2 = _closure1_slot0;
                var3 = _closure1_slot3;
                var0 = 18;
                var4 = var3[var0];
                var1 = undefined;
                var4 = var2.bind(var1)(var4);
                var5 = var4.socket;
                var4 = var5.close;
                var4 = var4.bind(var5)();
                var4 = var3[var0];
                var4 = var2.bind(var1)(var4);
                var4 = var4.socket;
                var5 = var4.dispatcher;
                var4 = var5.clear;
                var4 = var4.bind(var5)();
                var0 = var3[var0];
                var0 = var2.bind(var1)(var0);
                var1 = var0.socket;
                var0 = var1.connect;
                var0 = var0.bind(var1)();
            case 109:
                var0 = false;
                return var0;
        }
    };
    var1.CLEAR_CACHES = var9;
    var9 = function arg0() {
        var2 = function() {
            var0 = undefined;
            var3 = _closure1_slot31;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0 = undefined;
        var1 = arg0;
        var1 = var2.bind(var0)(var1);
        var1 = !var1;
        return var0;
    };
    var1.CONNECTION_OPEN = var9;
    var9 = function() {
        var0 = null;
        _closure1_slot29 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_RESUMED = var9;
    var9 = function() {
        var3 = _closure1_slot24;
        var2 = var3.verbose;
        var0 = 'connection closed dispatched';
        var0 = var2.bind(var3)(var0);
        var0 = global;
        var2 = var0.Date;
        var0 = var2.now;
        var0 = var0.bind(var2)();
        _closure1_slot25 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_CLOSED = var9;
    var9 = function arg0() {
        _fun30081: for (var _fun30081_ip = 0;;) switch (_fun30081_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.state;
                var2 = _closure1_slot20;
                var2 = var2.DISCONNECTED;
                if (!(var3 === var2)) {
                    _fun30081_ip = 139;
                    continue _fun30081
                }
            case 25:
                var2 = var0.willReconnect;
                if (!var2) {
                    _fun30081_ip = 135;
                    continue _fun30081
                }
            case 34:
                var3 = var0.streamKey;
                var2 = null;
                if (!(var2 == var3)) {
                    _fun30081_ip = 88;
                    continue _fun30081
                }
            case 46:
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var2 = 18;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var3 = var2.socket;
                var2 = var3.voiceServerPing;
                var2 = var2.bind(var3)();
                _fun30081_ip = 135;
                continue _fun30081;
            case 88:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var1 = 18;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.socket;
                var1 = var2.streamPing;
                var0 = var0.streamKey;
                var0 = var1.bind(var2)(var0);
            case 135:
                var0 = undefined;
                return var0;
            case 139:
                var0 = false;
                return var0;
        }
    };
    var1.RTC_CONNECTION_STATE = var9;
    var9 = function arg0() {
        _fun30082: for (var _fun30082_ip = 0;;) switch (_fun30082_ip) {
            case 0:
                var1 = arg0;
                var5 = _closure1_slot0;
                var2 = _closure1_slot3;
                var3 = 18;
                var4 = var2[var3];
                var2 = undefined;
                var4 = var5.bind(var2)(var4);
                var6 = var4.localVoiceState;
                var5 = var6.update;
                var4 = {};
                var7 = var1.guildId;
                var4.guildId = var7;
                var7 = var1.channelId;
                var4.channelId = var7;
                var4 = var5.bind(var6)(var4);
                var6 = var1.lockVoiceStateForResume;
                var4 = null;
                var5 = null;
                if (!var6) {
                    _fun30082_ip = 97;
                    continue _fun30082
                }
            case 78:
                var6 = var1.channelId;
                var6 = var4 != var6;
                var5 = null;
                if (!var6) {
                    _fun30082_ip = 97;
                    continue _fun30082
                }
            case 92:
                var5 = var1.channelId;
            case 97:
                _closure1_slot29 = var5;
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var5 = 23;
                var5 = var7[var5];
                var6 = var6.bind(var2)(var5);
                var5 = var6.isIOS;
                var5 = var5.bind(var6)();
                if (!var5) {
                    _fun30082_ip = 152;
                    continue _fun30082
                }
            case 134:
                var7 = _closure1_slot28;
                var6 = _closure1_slot21;
                var6 = var6.BACKGROUND;
                var5 = var7 === var6;
            case 152:
                if (!var5) {
                    _fun30082_ip = 303;
                    continue _fun30082
                }
            case 158:
                var1 = var1.channelId;
                if (!(var4 != var1)) {
                    _fun30082_ip = 267;
                    continue _fun30082
                }
            case 167:
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var4.bind(var2)(var1);
                var4 = var1.socket;
                var1 = var4.isClosed;
                var1 = var1.bind(var4)();
                if (!var1) {
                    _fun30082_ip = 303;
                    continue _fun30082
                }
            case 203:
                var5 = _closure1_slot2;
                var1 = _closure1_slot3;
                var4 = 24;
                var4 = var1[var4];
                var6 = var5.bind(var2)(var4);
                var5 = var6.setIsPaused;
                var4 = false;
                var4 = var5.bind(var6)(var4);
                var4 = _closure1_slot0;
                var1 = var1[var3];
                var1 = var4.bind(var2)(var1);
                var4 = var1.socket;
                var1 = var4.connect;
                var1 = var1.bind(var4)();
                _fun30082_ip = 303;
                continue _fun30082;
            case 267:
                var1 = _closure1_slot0;
                var0 = _closure1_slot3;
                var0 = var0[var3];
                var0 = var1.bind(var2)(var0);
                var2 = var0.socket;
                var1 = var2.close;
                var0 = true;
                var0 = var1.bind(var2)(var0);
            case 303:
                var0 = false;
                return var0;
        }
    };
    var1.VOICE_CHANNEL_SELECT = var9;
    var9 = function arg0() {
        var0 = arg0;
        var3 = var0.voiceStates;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun30084: for (var _fun30084_ip = 0;;) switch (_fun30084_ip) {
                case 0:
                    var0 = arg0;
                    var5 = arg1;
                    var3 = _closure1_slot11;
                    var2 = var3.getId;
                    var3 = var2.bind(var3)();
                    var2 = var5.userId;
                    if (!(var3 === var2)) {
                        _fun30084_ip = 244;
                        continue _fun30084
                    }
                case 35:
                    var3 = var5.sessionId;
                    var2 = _closure1_slot26;
                    if (!(var3 !== var2)) {
                        _fun30084_ip = 143;
                        continue _fun30084
                    }
                case 49:
                    var3 = var5.guildId;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var6 = 18;
                    var2 = var2[var6];
                    var4 = undefined;
                    var2 = var7.bind(var4)(var2);
                    var2 = var2.localVoiceState;
                    var2 = var2.guildId;
                    if (!(var3 === var2)) {
                        _fun30084_ip = 141;
                        continue _fun30084
                    }
                case 91:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var2 = var2[var6];
                    var2 = var3.bind(var4)(var2);
                    var4 = var2.localVoiceState;
                    var3 = var4.setState;
                    var2 = {
                        'guildId': null,
                        'channelId': null
                    };
                    var2 = var3.bind(var4)(var2);
                    _fun30084_ip = 212;
                    continue _fun30084;
                case 141:
                    return var0;
                case 143:
                    var3 = _closure1_slot29;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun30084_ip = 216;
                        continue _fun30084
                    }
                case 153:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var2 = 18;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.localVoiceState;
                    var3 = var4.setState;
                    var2 = {};
                    var6 = var5.guildId;
                    var2.guildId = var6;
                    var5 = var5.channelId;
                    var2.channelId = var5;
                    var2 = var3.bind(var4)(var2);
                case 212:
                    var2 = true;
                    return var2;
                case 216:
                    var4 = _closure1_slot24;
                    var3 = var4.verbose;
                    var2 = _closure1_slot29;
                    var1 = 'Ignoring voice state for own session due to VSU lock on channel:';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
                case 244:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.VOICE_STATE_UPDATES = var9;
    var9 = function arg0() {
        _fun30085: for (var _fun30085_ip = 0;;) switch (_fun30085_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.guild;
                var4 = var0.id;
                var5 = _closure1_slot0;
                var0 = _closure1_slot3;
                var3 = 18;
                var2 = var0[var3];
                var0 = undefined;
                var2 = var5.bind(var0)(var2);
                var2 = var2.localVoiceState;
                var2 = var2.guildId;
                if (!(var4 === var2)) {
                    _fun30085_ip = 101;
                    continue _fun30085
                }
            case 53:
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var2.bind(var0)(var1);
                var3 = var1.localVoiceState;
                var2 = var3.setState;
                var1 = {
                    'guildId': null,
                    'channelId': null
                };
                var1 = var2.bind(var3)(var1);
            case 101:
                return var0;
        }
    };
    var1.GUILD_DELETE = var9;
    var9 = function arg0() {
        _fun30086: for (var _fun30086_ip = 0;;) switch (_fun30086_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.channel;
                var4 = var0.id;
                var5 = _closure1_slot0;
                var0 = _closure1_slot3;
                var3 = 18;
                var2 = var0[var3];
                var0 = undefined;
                var2 = var5.bind(var0)(var2);
                var2 = var2.localVoiceState;
                var2 = var2.channelId;
                if (!(var4 === var2)) {
                    _fun30086_ip = 101;
                    continue _fun30086
                }
            case 53:
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var2.bind(var0)(var1);
                var3 = var1.localVoiceState;
                var2 = var3.setState;
                var1 = {
                    'guildId': null,
                    'channelId': null
                };
                var1 = var2.bind(var3)(var1);
            case 101:
                return var0;
        }
    };
    var1.CHANNEL_DELETE = var9;
    var9 = function arg0() {
        _fun30087: for (var _fun30087_ip = 0;;) switch (_fun30087_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.channelId;
                var5 = _closure1_slot0;
                var0 = _closure1_slot3;
                var3 = 18;
                var2 = var0[var3];
                var0 = undefined;
                var2 = var5.bind(var0)(var2);
                var2 = var2.localVoiceState;
                var2 = var2.channelId;
                if (!(var4 === var2)) {
                    _fun30087_ip = 104;
                    continue _fun30087
                }
            case 48:
                var2 = _closure1_slot29;
                if (!(var2 !== var4)) {
                    _fun30087_ip = 106;
                    continue _fun30087
                }
            case 56:
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var2.bind(var0)(var1);
                var3 = var1.localVoiceState;
                var2 = var3.setState;
                var1 = {
                    'guildId': null,
                    'channelId': null
                };
                var1 = var2.bind(var3)(var1);
            case 104:
                return var0;
            case 106:
                var0 = false;
                return var0;
        }
    };
    var1.CALL_DELETE = var9;
    var9 = function arg0() {
        _fun30088: for (var _fun30088_ip = 0;;) switch (_fun30088_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var2 = 23;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun30088_ip = 167;
                    continue _fun30088
                }
            case 44:
                var3 = var0.state;
                var2 = _closure1_slot21;
                var2 = var2.ACTIVE;
                if (!(var3 === var2)) {
                    _fun30088_ip = 458;
                    continue _fun30088
                }
            case 66:
                var3 = _closure1_slot2;
                var5 = _closure1_slot3;
                var2 = 24;
                var2 = var5[var2];
                var5 = var3.bind(var4)(var2);
                var3 = var5.setIsPaused;
                var2 = false;
                var2 = var3.bind(var5)(var2);
                var3 = _closure1_slot11;
                var2 = var3.isAuthenticated;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun30088_ip = 458;
                    continue _fun30088
                }
            case 119:
                var3 = _closure1_slot0;
                var5 = _closure1_slot3;
                var2 = 18;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var5 = var2.socket;
                var3 = var5.resetBackoff;
                var2 = 'App state is active';
                var2 = var3.bind(var5)(var2);
                _fun30088_ip = 458;
                continue _fun30088;
            case 167:
                var3 = _closure1_slot11;
                var2 = var3.isAuthenticated;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun30088_ip = 449;
                    continue _fun30088
                }
            case 187:
                var3 = _closure1_slot28;
                var2 = _closure1_slot21;
                var2 = var2.INACTIVE;
                if (!(var3 === var2)) {
                    _fun30088_ip = 264;
                    continue _fun30088
                }
            case 205:
                var3 = var0.state;
                var2 = _closure1_slot21;
                var2 = var2.BACKGROUND;
                if (!(var3 === var2)) {
                    _fun30088_ip = 264;
                    continue _fun30088
                }
            case 224:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var5 = 18;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.localVoiceState;
                var3 = var2.channelId;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun30088_ip = 413;
                    continue _fun30088
                }
            case 264:
                var3 = _closure1_slot28;
                var2 = _closure1_slot21;
                var2 = var2.BACKGROUND;
                var2 = var3 === var2;
                if (!var2) {
                    _fun30088_ip = 304;
                    continue _fun30088
                }
            case 285:
                var6 = var0.state;
                var3 = _closure1_slot21;
                var3 = var3.ACTIVE;
                var2 = var6 === var3;
            case 304:
                if (!var2) {
                    _fun30088_ip = 343;
                    continue _fun30088
                }
            case 307:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var3 = 18;
                var3 = var7[var3];
                var3 = var6.bind(var4)(var3);
                var6 = var3.socket;
                var3 = var6.isClosed;
                var2 = var3.bind(var6)();
            case 343:
                if (!var2) {
                    _fun30088_ip = 449;
                    continue _fun30088
                }
            case 346:
                var3 = _closure1_slot2;
                var6 = _closure1_slot3;
                var2 = 24;
                var2 = var6[var2];
                var7 = var3.bind(var4)(var2);
                var3 = var7.setIsPaused;
                var2 = false;
                var2 = var3.bind(var7)(var2);
                var3 = _closure1_slot0;
                var2 = 18;
                var2 = var6[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.socket;
                var2 = var3.connect;
                var2 = var2.bind(var3)();
                _fun30088_ip = 449;
                continue _fun30088;
            case 413:
                var3 = _closure1_slot0;
                var2 = _closure1_slot3;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var4 = var2.socket;
                var3 = var4.close;
                var2 = true;
                var2 = var3.bind(var4)(var2);
            case 449:
                var0 = var0.state;
                _closure1_slot28 = var0;
            case 458:
                var0 = false;
                return var0;
        }
    };
    var1.APP_STATE_UPDATE = var9;
    var9 = function arg0() {
        _fun30089: for (var _fun30089_ip = 0;;) switch (_fun30089_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var5 = _closure1_slot0;
                var3 = _closure1_slot3;
                var6 = 18;
                var4 = var3[var6];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var5 = var4.socket;
                var4 = var5.isSessionEstablished;
                var4 = var4.bind(var5)();
                if (!var4) {
                    _fun30089_ip = 209;
                    continue _fun30089
                }
            case 56:
                var4 = 'userIds';
                var4 = var4 in var1;
                if (var4) {
                    _fun30089_ip = 149;
                    continue _fun30089
                }
            case 67:
                var5 = _closure1_slot0;
                var4 = _closure1_slot3;
                var4 = var4[var6];
                var4 = var5.bind(var3)(var4);
                var7 = var4.socket;
                var6 = var7.requestGuildMembers;
                var5 = var1.guildIds;
                var4 = {};
                var8 = var1.query;
                var4.query = var8;
                var8 = var1.limit;
                var4.limit = var8;
                var8 = var1.presences;
                var8 = !var8;
                var8 = !var8;
                var4.presences = var8;
                var4 = var6.bind(var7)(var5, var4);
                _fun30089_ip = 209;
                continue _fun30089;
            case 149:
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var2 = 25;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var1 = var1.userIds;
                var3 = var2.bind(var3)(var1);
                var2 = var3.chunk;
                var1 = 100;
                var2 = var2.bind(var3)(var1);
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var4 = var1.socket;
                    var3 = var4.requestGuildMembers;
                    var5 = _closure2_slot0;
                    var2 = var5.guildIds;
                    var1 = {};
                    var6 = arg0;
                    var1.userIds = var6;
                    var5 = var5.presences;
                    var5 = !var5;
                    var5 = !var5;
                    var1.presences = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 209:
                var0 = false;
                return var0;
        }
    };
    var1.GUILD_MEMBERS_REQUEST = var9;
    var9 = function arg0() {
        _fun30091: for (var _fun30091_ip = 0;;) switch (_fun30091_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.guildId;
                var6 = var0.query;
                var5 = var0.continuationToken;
                var7 = _closure1_slot0;
                var0 = _closure1_slot3;
                var3 = 18;
                var2 = var0[var3];
                var0 = undefined;
                var2 = var7.bind(var0)(var2);
                var7 = var2.socket;
                var2 = var7.isSessionEstablished;
                var2 = var2.bind(var7)();
                if (!var2) {
                    _fun30091_ip = 111;
                    continue _fun30091
                }
            case 64:
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var2.bind(var0)(var1);
                var3 = var1.socket;
                var2 = var3.searchRecentMembers;
                var1 = {};
                var1.query = var6;
                var1.continuationToken = var5;
                var1 = var2.bind(var3)(var4, var1);
            case 111:
                return var0;
        }
    };
    var1.GUILD_SEARCH_RECENT_MEMBERS = var9;
    var9 = function arg0() {
        _fun30092: for (var _fun30092_ip = 0;;) switch (_fun30092_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.subscriptions;
                var5 = _closure1_slot0;
                var1 = _closure1_slot3;
                var4 = 18;
                var1 = var1[var4];
                var3 = undefined;
                var1 = var5.bind(var3)(var1);
                var5 = var1.socket;
                var1 = var5.isSessionEstablished;
                var1 = var1.bind(var5)();
                if (!var1) {
                    _fun30092_ip = 89;
                    continue _fun30092
                }
            case 53:
                var1 = _closure1_slot0;
                var0 = _closure1_slot3;
                var0 = var0[var4];
                var0 = var1.bind(var3)(var0);
                var1 = var0.socket;
                var0 = var1.updateGuildSubscriptions;
                var0 = var0.bind(var1)(var2);
            case 89:
                var0 = false;
                return var0;
        }
    };
    var1.GUILD_SUBSCRIPTIONS_FLUSH = var9;
    var9 = function arg0() {
        _fun30093: for (var _fun30093_ip = 0;;) switch (_fun30093_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var5 = _closure1_slot0;
                var1 = _closure1_slot3;
                var4 = 18;
                var1 = var1[var4];
                var3 = undefined;
                var1 = var5.bind(var3)(var1);
                var5 = var1.socket;
                var1 = var5.isSessionEstablished;
                var1 = var1.bind(var5)();
                if (!var1) {
                    _fun30093_ip = 86;
                    continue _fun30093
                }
            case 52:
                var1 = _closure1_slot0;
                var0 = _closure1_slot3;
                var0 = var0[var4];
                var0 = var1.bind(var3)(var0);
                var1 = var0.socket;
                var0 = var1.callConnect;
                var0 = var0.bind(var1)(var2);
            case 86:
                var0 = false;
                return var0;
        }
    };
    var1.CALL_CONNECT = var9;
    var9 = function arg0() {
        _fun30094: for (var _fun30094_ip = 0;;) switch (_fun30094_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelIds;
                var3 = _closure1_slot0;
                var1 = _closure1_slot3;
                var0 = 18;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var1);
                var1 = var0.socket;
                var0 = var1.isSessionEstablished;
                var0 = var0.bind(var1)();
                if (!var0) {
                    _fun30094_ip = 70;
                    continue _fun30094
                }
            case 53:
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var0 = 18;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var3 = var1.socket;
                    var2 = var3.callConnect;
                    var1 = arg0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 70:
                var0 = false;
                return var0;
        }
    };
    var1.CALL_CONNECT_MULTIPLE = var9;
    var1.STREAM_CREATE = var8;
    var9 = function arg0() {
        _fun30096: for (var _fun30096_ip = 0;;) switch (_fun30096_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.streamType;
                var4 = var0.guildId;
                var3 = var0.channelId;
                var1 = _closure1_slot0;
                var0 = _closure1_slot3;
                var9 = 18;
                var0 = var0[var9];
                var8 = undefined;
                var0 = var1.bind(var8)(var0);
                var1 = var0.socket;
                var0 = var1.isSessionEstablished;
                var0 = var0.bind(var1)();
                if (!var0) {
                    _fun30096_ip = 204;
                    continue _fun30096
                }
            case 66:
                var7 = null;
                if (!(var7 == var4)) {
                    _fun30096_ip = 104;
                    continue _fun30096
                }
            case 72:
                var1 = _closure1_slot12;
                var0 = var1.getCall;
                var0 = var0.bind(var1)(var3);
                var1 = var7 == var0;
                var2 = undefined;
                if (var1) {
                    _fun30096_ip = 102;
                    continue _fun30096
                }
            case 96:
                var2 = var0.region;
            case 102:
                _fun30096_ip = 136;
                continue _fun30096;
            case 104:
                var1 = _closure1_slot13;
                var0 = var1.getChannel;
                var1 = var0.bind(var1)(var3);
                var10 = var7 == var1;
                var0 = undefined;
                if (var10) {
                    _fun30096_ip = 133;
                    continue _fun30096
                }
            case 127:
                var0 = var1.rtcRegion;
            case 133:
                var2 = var0;
            case 136:
                var1 = _closure1_slot0;
                var0 = _closure1_slot3;
                var0 = var0[var9];
                var0 = var1.bind(var8)(var0);
                var1 = var0.socket;
                var0 = var1.streamCreate;
                if (!(var7 == var2)) {
                    _fun30096_ip = 185;
                    continue _fun30096
                }
            case 171:
                var7 = _closure1_slot16;
                var6 = var7.getPreferredRegion;
                var2 = var6.bind(var7)();
            case 185:
                var15 = var1;
                var14 = var5;
                var13 = var4;
                var12 = var3;
                var11 = var2;
                var0 = var15[var0](var14, var13, var12, var11, var10);
            case 204:
                var0 = false;
                return var0;
        }
    };
    var1.STREAM_START = var9;
    var9 = function arg0() {
        _fun30097: for (var _fun30097_ip = 0;;) switch (_fun30097_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.streamKey;
                var1 = var0.allowMultiple;
                var6 = _closure1_slot0;
                var3 = _closure1_slot3;
                var4 = 18;
                var5 = var3[var4];
                var3 = undefined;
                var5 = var6.bind(var3)(var5);
                var6 = var5.socket;
                var5 = var6.isSessionEstablished;
                var5 = var5.bind(var6)();
                if (!var5) {
                    _fun30097_ip = 106;
                    continue _fun30097
                }
            case 59:
                if (var1) {
                    _fun30097_ip = 70;
                    continue _fun30097
                }
            case 62:
                var1 = _closure1_slot36;
                var1 = var1.bind(var3)();
            case 70:
                var1 = _closure1_slot0;
                var0 = _closure1_slot3;
                var0 = var0[var4];
                var0 = var1.bind(var3)(var0);
                var1 = var0.socket;
                var0 = var1.streamWatch;
                var0 = var0.bind(var1)(var2);
            case 106:
                var0 = false;
                return var0;
        }
    };
    var1.STREAM_WATCH = var9;
    var9 = function arg0() {
        var0 = arg0;
        var3 = var0.streamKey;
        var2 = _closure1_slot35;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        var0 = _closure1_slot32;
        var0 = var0.bind(var1)();
        var0 = false;
        return var0;
    };
    var1.STREAM_STOP = var9;
    var9 = function arg0() {
        _fun30099: for (var _fun30099_ip = 0;;) switch (_fun30099_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.streamKey;
                var3 = var0.paused;
                var6 = _closure1_slot0;
                var0 = _closure1_slot3;
                var5 = 18;
                var2 = var0[var5];
                var0 = undefined;
                var2 = var6.bind(var0)(var2);
                var6 = var2.socket;
                var2 = var6.isSessionEstablished;
                var2 = var2.bind(var6)();
                if (!var2) {
                    _fun30099_ip = 96;
                    continue _fun30099
                }
            case 59:
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var5];
                var1 = var2.bind(var0)(var1);
                var2 = var1.socket;
                var1 = var2.streamSetPaused;
                var1 = var1.bind(var2)(var4, var3);
            case 96:
                return var0;
        }
    };
    var1.STREAM_SET_PAUSED = var9;
    var9 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 18;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var4 = var0.socket;
        var3 = var4.expeditedHeartbeat;
        var2 = 5000;
        var1 = 'user clicked on notification';
        var0 = true;
        var0 = var3.bind(var4)(var2, var1, var0);
        var0 = false;
        return var0;
    };
    var1.PUSH_NOTIFICATION_CLICK = var9;
    var9 = function arg0() {
        var0 = arg0;
        var5 = var0.guildId;
        var4 = var0.channelId;
        var3 = var0.threads;
        var2 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 18;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var2 = var1.socket;
        var1 = var2.requestForumUnreads;
        var1 = var1.bind(var2)(var5, var4, var3);
        return var0;
    };
    var1.REQUEST_FORUM_UNREADS = var9;
    var9 = function arg0() {
        var0 = arg0;
        var3 = var0.guildIds;
        var2 = _closure1_slot0;
        var1 = _closure1_slot3;
        var0 = 18;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var2 = var1.socket;
        var1 = var2.requestSoundboardSounds;
        var1 = var1.bind(var2)(var3);
        return var0;
    };
    var1.REQUEST_SOUNDBOARD_SOUNDS = var9;
    var9 = function arg0() {
        _fun30103: for (var _fun30103_ip = 0;;) switch (_fun30103_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.sessionId;
                var2 = var0.payload;
                var6 = _closure1_slot0;
                var1 = _closure1_slot3;
                var5 = 18;
                var1 = var1[var5];
                var4 = undefined;
                var1 = var6.bind(var4)(var1);
                var6 = var1.socket;
                var1 = var6.isSessionEstablished;
                var1 = var1.bind(var6)();
                if (!var1) {
                    _fun30103_ip = 96;
                    continue _fun30103
                }
            case 59:
                var1 = _closure1_slot0;
                var0 = _closure1_slot3;
                var0 = var0[var5];
                var0 = var1.bind(var4)(var0);
                var1 = var0.socket;
                var0 = var1.remoteCommand;
                var0 = var0.bind(var1)(var3, var2);
            case 96:
                var0 = false;
                return var0;
        }
    };
    var1.REMOTE_COMMAND = var9;
    var9 = function arg0() {
        _fun30104: for (var _fun30104_ip = 0;;) switch (_fun30104_ip) {
            case 0:
                var4 = _closure1_slot0;
                var6 = _closure1_slot3;
                var3 = 18;
                var2 = var6[var3];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var2 = var2.socket;
                var4 = var2.connectionState;
                var5 = _closure1_slot1;
                var2 = 27;
                var2 = var6[var2];
                var2 = var5.bind(var0)(var2);
                var2 = var2.WILL_RECONNECT;
                if (!(var4 !== var2)) {
                    _fun30104_ip = 106;
                    continue _fun30104
                }
            case 63:
                var2 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var3];
                var1 = var2.bind(var0)(var1);
                var3 = var1.socket;
                var2 = var3.resetSocketOnError;
                var1 = arg0;
                var1 = var1.args;
                var1 = var2.bind(var3)(var1);
            case 106:
                return var0;
        }
    };
    var1.RESET_SOCKET = var9;
    var1.CLIPS_SETTINGS_UPDATE = var8;
    var1.RUNNING_GAMES_CHANGE = var8;
    var3 = function arg0() {
        _fun30105: for (var _fun30105_ip = 0;;) switch (_fun30105_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.settings;
                var3 = var0.type;
                var1 = _closure1_slot22;
                var1 = var1.PRELOADED_USER_SETTINGS;
                var1 = var3 === var1;
                if (!var1) {
                    _fun30105_ip = 73;
                    continue _fun30105
                }
            case 34:
                var2 = var2.settings;
                var2 = var2.proto;
                var4 = var2.clips;
                var3 = null;
                var5 = var3 == var4;
                var2 = undefined;
                if (var5) {
                    _fun30105_ip = 69;
                    continue _fun30105
                }
            case 63:
                var2 = var4.allowVoiceRecording;
            case 69:
                var1 = var3 != var2;
            case 73:
                if (!var1) {
                    _fun30105_ip = 86;
                    continue _fun30105
                }
            case 76:
                var1 = _closure1_slot32;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 86:
                var0 = undefined;
                return var0;
        }
    };
    var1.USER_SETTINGS_PROTO_UPDATE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var15 = var3;
    var13 = var1;
    var1 = new var15[var7](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 30;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/gateway/GatewayConnectionStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5, 1310, 1216, 3475, 1372, 3476, 3518, 3627, 1670, 5657, 3609, 660, 665, 12398, 12441, 3, 5612, 4231, 478, 12403, 22, 3505, 12411, 566, 806, 2]);