// modules/nuf/native/NotificationPermissionManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun113986: for (var _fun113986_ip = 0;;) switch (_fun113986_ip) {
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
            case 72: // try_end0
                _fun113986_ip = 76;
                continue _fun113986;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot24 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function arg0, arg1() {
        _fun113989: for (var _fun113989_ip = 0;;) switch (_fun113989_ip) {
            case 0:
                var4 = arg0;
                var1 = _closure1_slot14;
                var0 = var1.getState;
                var0 = var0.bind(var1)();
                var0 = var0.promptLastSeen;
                var5 = var0[var4];
                var0 = null;
                var0 = var0 == var5;
                if (var0) {
                    _fun113989_ip = 110;
                    continue _fun113989
                }
            case 39:
                var3 = _closure1_slot22;
                var1 = var3.includes;
                var4 = var1.bind(var3)(var4);
                var3 = undefined;
                var1 = undefined;
                if (!var4) {
                    _fun113989_ip = 107;
                    continue _fun113989
                }
            case 60:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 19;
                var2 = var6[var2];
                var2 = var4.bind(var3)(var2);
                var4 = var2.bind(var3)();
                var3 = var4.diff;
                var2 = 'days';
                var3 = var3.bind(var4)(var5, var2);
                var2 = 1;
                var1 = var3 >= var2;
            case 107:
                var0 = var1;
            case 110:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot27;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun113993: for (var _fun113993_ip = 0;;) switch (_fun113993_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun113993_ip = 98;
                            continue _fun113993
                        }
                    case 7:
                        var1 = _closure1_slot9;
                        var2 = var1.NativePermissionManager;
                        var1 = var2.getNotificationAuthorizationStatus;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 34);
                    case 32:
                        return var1;
                    case 34:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun113993_ip = 95;
                            continue _fun113993
                        }
                    case 40:
                        var2 = _closure1_slot21;
                        var2 = var2.UNDETERMINED;
                        var2 = var1 === var2;
                        if (var2) {
                            _fun113993_ip = 71;
                            continue _fun113993
                        }
                    case 57:
                        var4 = _closure1_slot21;
                        var4 = var4.PROVISIONAL;
                        var2 = var1 === var4;
                    case 71:
                        if (!var2) {
                            _fun113993_ip = 92;
                            continue _fun113993
                        }
                    case 74:
                        var6 = _closure1_slot25;
                        var5 = undefined;
                        var4 = arg0;
                        var3 = 1;
                        var2 = var6.bind(var5)(var4, var3);
                    case 92:
                        return var2;
                    case 95:
                        return var1;
                    case 98:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot27 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot27 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot29;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun113997: for (var _fun113997_ip = 0;;) switch (_fun113997_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun113997_ip = 81;
                            continue _fun113997
                        }
                    case 7:
                        var1 = _closure1_slot9;
                        var2 = var1.NativePermissionManager;
                        var1 = var2.getNotificationAuthorizationStatus;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 34);
                    case 32:
                        return var1;
                    case 34:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun113997_ip = 78;
                            continue _fun113997
                        }
                    case 40:
                        var2 = _closure1_slot21;
                        var2 = var2.DENIED;
                        var2 = var1 === var2;
                        if (!var2) {
                            _fun113997_ip = 75;
                            continue _fun113997
                        }
                    case 57:
                        var6 = _closure1_slot25;
                        var5 = undefined;
                        var4 = arg0;
                        var3 = 1;
                        var2 = var6.bind(var5)(var4, var3);
                    case 75:
                        return var2;
                    case 78:
                        return var1;
                    case 81:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot29 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot29 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun113998: for (var _fun113998_ip = 0;;) switch (_fun113998_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var0 = arg1;
                var _closure2_slot1 = var0;
                var3 = _closure1_slot23;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun113998_ip = 48;
                    continue _fun113998
                }
            case 29:
                var0 = global;
                var4 = var0.clearTimeout;
                var3 = _closure1_slot23;
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
            case 48:
                var0 = global;
                var4 = var0.setTimeout;
                var0 = undefined;
                var3 = function() { // Environment: var1
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var0 = 20;
                    var2 = var9[var0];
                    var0 = undefined;
                    var5 = var8.bind(var0)(var2);
                    var4 = var5.setPushPermissionReactivationSeen;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3);
                    var6 = _closure2_slot1;
                    var3 = _closure1_slot1;
                    var2 = 15;
                    var2 = var9[var2];
                    var5 = var3.bind(var0)(var2);
                    var4 = var5.openLazy;
                    var2 = 17;
                    var2 = var9[var2];
                    var7 = var8.bind(var0)(var2);
                    var2 = 16;
                    var3 = var9[var2];
                    var2 = var9.paths;
                    var3 = var7.bind(var0)(var3, var2);
                    var2 = _closure1_slot16;
                    var1 = {};
                    var7 = 18;
                    var7 = var9[var7];
                    var7 = var8.bind(var0)(var7);
                    var7 = var7.ImpressionNames;
                    var7 = var7.PUSH_NOTIFICATION_REACTIVATION_PROMPT;
                    var1.impressionName = var7;
                    var7 = {};
                    var7.action_location = var6;
                    var1.impressionProperties = var7;
                    var1.location = var6;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var1 = arg2;
                var1 = var4.bind(var0)(var3, var1);
                _closure1_slot23 = var1;
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function() {
        var0 = undefined;
        var3 = _closure1_slot32;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot31 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun114003: for (var _fun114003_ip = 0;;) switch (_fun114003_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun114003_ip = 187;
                            continue _fun114003
                        }
                    case 10:
                        var1 = _closure1_slot9;
                        var2 = var1.NativePermissionManager;
                        var1 = var2.getNotificationAuthorizationStatus;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 37);
                    case 35:
                        return var1;
                    case 37:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun114003_ip = 184;
                            continue _fun114003
                        }
                    case 46:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var2 = 21;
                        var3 = var9[var2];
                        var2 = undefined;
                        var4 = var8.bind(var2)(var3);
                        var3 = var4.allowInAppNotifications;
                        var7 = var3.bind(var4)();
                        var4 = _closure1_slot1;
                        var3 = 22;
                        var3 = var9[var3];
                        var6 = var4.bind(var2)(var3);
                        var5 = var6.track;
                        var3 = _closure1_slot20;
                        var4 = var3.NOTIFICATION_PERMISSION_STATUS;
                        var3 = {};
                        var10 = _closure1_slot21;
                        var10 = var10.AUTHORIZED;
                        var10 = var1 === var10;
                        var3.os_enabled = var10;
                        var3.foreground_app_enabled = var7;
                        var3.background_app_enabled = var7;
                        var7 = 23;
                        var7 = var9[var7];
                        var8 = var8.bind(var2)(var7);
                        var7 = var8.isIOS;
                        var8 = var7.bind(var8)();
                        var7 = null;
                        if (!var8) {
                            _fun114003_ip = 170;
                            continue _fun114003
                        }
                    case 167:
                        var7 = var1;
                    case 170:
                        var3.notification_authorization_status = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        return var2;
                    case 184:
                        return var1;
                    case 187:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot32 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot32 = var0;
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot14 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.PermissionPromptType;
    var _closure1_slot15 = var7;
    var3 = 12;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.NOTIFICATION_REACTIVATION_ACTIONSHEET_KEY;
    var _closure1_slot16 = var8;
    var3 = var3.EventActionLocation;
    var _closure1_slot17 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.RelationshipTypes;
    var _closure1_slot18 = var8;
    var8 = var3.GuildFeatures;
    var _closure1_slot19 = var8;
    var3 = var3.AnalyticEvents;
    var _closure1_slot20 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NotificationAuthorizationStatus;
    var _closure1_slot21 = var3;
    var8 = var7.FRIEND_REQUEST_SENT;
    var3 = new Array(2);
    var3[0] = var8;
    var7 = var7.INVITE_ACCEPTED;
    var3[1] = var7;
    var _closure1_slot22 = var3;
    var3 = null;
    var _closure1_slot23 = var3;
    var3 = 26;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun114005: for (var _fun114005_ip = 0;;) switch (_fun114005_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot3;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var5, var4);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var3)(var4);
                    var4 = _closure1_slot5;
                    var0 = _closure1_slot24;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun114005_ip = 86;
                        continue _fun114005
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun114005_ip = 120;
                    continue _fun114005;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var3)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var4.bind(var3)(var5, var0);
                    var _closure3_slot0 = var0;
                    var4 = null;
                    var0.previousAppState = var4;
                    var4 = {};
                    var5 = function arg0() {
                        var2 = arg0;
                        var1 = _closure3_slot0;
                        var0 = var1.handleMessageCreate;
                        var0 = var0.bind(var1)(var2);
                        var0 = var1.handleMessageCreateForNudge;
                        var0 = var0.bind(var1)(var2);
                        var0 = undefined;
                        return var0;
                    };
                    var4.MESSAGE_CREATE = var5;
                    var5 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleInviteAccept;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var4.INVITE_ACCEPT_SUCCESS = var5;
                    var5 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleSendFriendRequest;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var4.RELATIONSHIP_ADD = var5;
                    var5 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleConnectionOpen;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var4.POST_CONNECTION_OPEN = var5;
                    var5 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleAppStateUpdate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var4.APP_STATE_UPDATE = var5;
                    var0.actions = var4;
                    var5 = _closure1_slot8;
                    var4 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun114012: for (var _fun114012_ip = 0;;) switch (_fun114012_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun114012_ip = 66;
                                        continue _fun114012
                                    }
                                case 7:
                                    var1 = _closure1_slot31;
                                    var3 = undefined;
                                    var1 = var1.bind(var3)();
                                    SaveGenerator(address = 24);
                                case 22:
                                    return var1;
                                case 24:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                    if (var2) {
                                        _fun114012_ip = 63;
                                        continue _fun114012
                                    }
                                case 30:
                                    var4 = _closure3_slot0;
                                    var2 = var4._handleNotificationAuthorizationStatusUpdate;
                                    var2 = var2.bind(var4)();
                                    SaveGenerator(address = 51);
                                case 49:
                                    return var2;
                                case 51:
                                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun114012_ip = 60;
                                        continue _fun114012
                                    }
                                case 57:
                                    return var3;
                                case 60:
                                    return var2;
                                case 63:
                                    return var1;
                                case 66:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var4 = var5.bind(var3)(var4);
                    var0.handleConnectionOpen = var4;
                    var4 = function() { // Environment: var1
                        var3 = _closure1_slot8;
                        var2 = undefined;
                        var1 = function*(arg0) { // Environment: var0
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun114015: for (var _fun114015_ip = 0;;) switch (_fun114015_ip) {
                                    case 0:
                                        StartGenerator();
                                        var1 = arg0;
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun114015_ip = 210;
                                            continue _fun114015
                                        }
                                    case 13:
                                        var3 = var1.message;
                                        var4 = var1.optimistic;
                                        var5 = var1.isPushNotification;
                                        var6 = var1.sendMessageOptions;
                                        var2 = undefined;
                                        SaveGenerator(address = 42);
                                    case 40:
                                        return var2;
                                    case 42:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 7);
                                        if (var7) {
                                            _fun114015_ip = 207;
                                            continue _fun114015
                                        }
                                    case 51:
                                        if (var4) {
                                            _fun114015_ip = 57;
                                            continue _fun114015
                                        }
                                    case 54:
                                        var4 = var5;
                                    case 57:
                                        if (var4) {
                                            _fun114015_ip = 66;
                                            continue _fun114015
                                        }
                                    case 60:
                                        var5 = null;
                                        var4 = var5 != var6;
                                    case 66:
                                        if (var4) {
                                            _fun114015_ip = 204;
                                            continue _fun114015
                                        }
                                    case 72:
                                        var4 = null;
                                        var6 = var4 == var3;
                                        var5 = undefined;
                                        if (var6) {
                                            _fun114015_ip = 103;
                                            continue _fun114015
                                        }
                                    case 83:
                                        var3 = var3.author;
                                        var4 = var4 == var3;
                                        var5 = undefined;
                                        if (var4) {
                                            _fun114015_ip = 103;
                                            continue _fun114015
                                        }
                                    case 98:
                                        var5 = var3.id;
                                    case 103:
                                        var6 = _closure1_slot11;
                                        var3 = var6.getId;
                                        var3 = var3.bind(var6)();
                                        var5 = var5 === var3;
                                        if (!var5) {
                                            _fun114015_ip = 159;
                                            continue _fun114015
                                        }
                                    case 127:
                                        var6 = _closure1_slot26;
                                        var3 = _closure1_slot15;
                                        var3 = var3.MESSAGE_SENT;
                                        var3 = var6.bind(var2)(var3);
                                        SaveGenerator(address = 150);
                                    case 148:
                                        return var3;
                                    case 150:
                                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                                        var5 = var3;
                                        if (var6) {
                                            _fun114015_ip = 201;
                                            continue _fun114015
                                        }
                                    case 159:
                                        if (!var5) {
                                            _fun114015_ip = 204;
                                            continue _fun114015
                                        }
                                    case 162:
                                        var7 = _closure1_slot30;
                                        var5 = _closure1_slot15;
                                        var6 = var5.MESSAGE_SENT;
                                        var4 = _closure1_slot17;
                                        var5 = var4.MESSAGE_SENT;
                                        var4 = 1000;
                                        var4 = var7.bind(var2)(var6, var5, var4);
                                        _fun114015_ip = 204;
                                        continue _fun114015;
                                    case 201:
                                        return var3;
                                    case 204:
                                        return var2;
                                    case 207:
                                        return var1;
                                    case 210:
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
                    var4 = var4.bind(var3)();
                    var0.handleMessageCreate = var4;
                    var4 = function() { // Environment: var1
                        var3 = _closure1_slot8;
                        var2 = undefined;
                        var1 = function*(arg0) { // Environment: var0
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun114019: for (var _fun114019_ip = 0;;) switch (_fun114019_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun114019_ip = 211;
                                            continue _fun114019
                                        }
                                    case 10:
                                        var1 = arg0;
                                        var3 = var1.invite;
                                        var2 = undefined;
                                        SaveGenerator(address = 25);
                                    case 23:
                                        return var2;
                                    case 25:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                        if (var4) {
                                            _fun114019_ip = 208;
                                            continue _fun114019
                                        }
                                    case 34:
                                        var4 = var3.guild;
                                        var3 = null;
                                        var5 = var3 == var4;
                                        var6 = undefined;
                                        if (var5) {
                                            _fun114019_ip = 56;
                                            continue _fun114019
                                        }
                                    case 50:
                                        var6 = var4.features;
                                    case 56:
                                        if (!(var3 == var6)) {
                                            _fun114019_ip = 64;
                                            continue _fun114019
                                        }
                                    case 60:
                                        var6 = new Array(0);
                                    case 64:
                                        var5 = var6.includes;
                                        var3 = _closure1_slot19;
                                        var3 = var3.COMMUNITY;
                                        var3 = var5.bind(var6)(var3);
                                        if (var3) {
                                            _fun114019_ip = 205;
                                            continue _fun114019
                                        }
                                    case 90:
                                        var5 = _closure1_slot26;
                                        var3 = _closure1_slot15;
                                        var3 = var3.INVITE_ACCEPTED;
                                        var3 = var5.bind(var2)(var3);
                                        SaveGenerator(address = 113);
                                    case 111:
                                        return var3;
                                    case 113:
                                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                                        if (var5) {
                                            _fun114019_ip = 202;
                                            continue _fun114019
                                        }
                                    case 119:
                                        var5 = var3;
                                        if (var5) {
                                            _fun114019_ip = 160;
                                            continue _fun114019
                                        }
                                    case 125:
                                        var7 = _closure1_slot28;
                                        var6 = _closure1_slot15;
                                        var6 = var6.INVITE_ACCEPTED;
                                        var6 = var7.bind(var2)(var6);
                                        SaveGenerator(address = 148);
                                    case 146:
                                        return var6;
                                    case 148:
                                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 7);
                                        var5 = var6;
                                        if (!var7) {
                                            _fun114019_ip = 160;
                                            continue _fun114019
                                        }
                                    case 157:
                                        return var6;
                                    case 160:
                                        if (!var5) {
                                            _fun114019_ip = 205;
                                            continue _fun114019
                                        }
                                    case 163:
                                        var7 = _closure1_slot30;
                                        var5 = _closure1_slot15;
                                        var6 = var5.INVITE_ACCEPTED;
                                        var4 = _closure1_slot17;
                                        var5 = var4.INVITE_ACCEPTED;
                                        var4 = 1000;
                                        var4 = var7.bind(var2)(var6, var5, var4);
                                        _fun114019_ip = 205;
                                        continue _fun114019;
                                    case 202:
                                        return var3;
                                    case 205:
                                        return var2;
                                    case 208:
                                        return var1;
                                    case 211:
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
                    var4 = var4.bind(var3)();
                    var0.handleInviteAccept = var4;
                    var4 = function() { // Environment: var1
                        var3 = _closure1_slot8;
                        var2 = undefined;
                        var1 = function*(arg0) { // Environment: var0
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun114023: for (var _fun114023_ip = 0;;) switch (_fun114023_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun114023_ip = 178;
                                            continue _fun114023
                                        }
                                    case 10:
                                        var1 = arg0;
                                        var2 = var1.relationship;
                                        var3 = undefined;
                                        SaveGenerator(address = 25);
                                    case 23:
                                        return var3;
                                    case 25:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                        if (var4) {
                                            _fun114023_ip = 175;
                                            continue _fun114023
                                        }
                                    case 34:
                                        var5 = var2.type;
                                        var2 = _closure1_slot18;
                                        var2 = var2.PENDING_OUTGOING;
                                        var5 = var5 === var2;
                                        if (!var5) {
                                            _fun114023_ip = 132;
                                            continue _fun114023
                                        }
                                    case 59:
                                        var6 = _closure1_slot26;
                                        var2 = _closure1_slot15;
                                        var2 = var2.FRIEND_REQUEST_SENT;
                                        var2 = var6.bind(var3)(var2);
                                        SaveGenerator(address = 82);
                                    case 80:
                                        return var2;
                                    case 82:
                                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                                        if (var6) {
                                            _fun114023_ip = 172;
                                            continue _fun114023
                                        }
                                    case 88:
                                        var6 = var2;
                                        if (var6) {
                                            _fun114023_ip = 129;
                                            continue _fun114023
                                        }
                                    case 94:
                                        var8 = _closure1_slot28;
                                        var7 = _closure1_slot15;
                                        var7 = var7.FRIEND_REQUEST_SENT;
                                        var7 = var8.bind(var3)(var7);
                                        SaveGenerator(address = 117);
                                    case 115:
                                        return var7;
                                    case 117:
                                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 8);
                                        var6 = var7;
                                        if (!var8) {
                                            _fun114023_ip = 129;
                                            continue _fun114023
                                        }
                                    case 126:
                                        return var7;
                                    case 129:
                                        var5 = var6;
                                    case 132:
                                        if (!var5) {
                                            _fun114023_ip = 169;
                                            continue _fun114023
                                        }
                                    case 135:
                                        var7 = _closure1_slot30;
                                        var5 = _closure1_slot15;
                                        var6 = var5.FRIEND_REQUEST_SENT;
                                        var4 = _closure1_slot17;
                                        var5 = var4.FRIEND_REQUEST_SENT;
                                        var4 = 100;
                                        var4 = var7.bind(var3)(var6, var5, var4);
                                    case 169:
                                        return var3;
                                    case 172:
                                        return var2;
                                    case 175:
                                        return var1;
                                    case 178:
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
                    var4 = var4.bind(var3)();
                    var0.handleSendFriendRequest = var4;
                    var4 = function() { // Environment: var1
                        var3 = _closure1_slot8;
                        var2 = undefined;
                        var1 = function*(arg0) { // Environment: var0
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun114027: for (var _fun114027_ip = 0;;) switch (_fun114027_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun114027_ip = 216;
                                            continue _fun114027
                                        }
                                    case 10:
                                        var1 = arg0;
                                        var6 = var1.state;
                                        var4 = undefined;
                                        SaveGenerator(address = 24);
                                    case 22:
                                        return var4;
                                    case 24:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                        if (var2) {
                                            _fun114027_ip = 213;
                                            continue _fun114027
                                        }
                                    case 33:
                                        var2 = _closure3_slot0;
                                        var10 = var2.previousAppState;
                                        var8 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var9 = 25;
                                        var2 = var7[var9];
                                        var2 = var8.bind(var4)(var2);
                                        var2 = var2.AppStates;
                                        var2 = var2.BACKGROUND;
                                        var2 = var10 === var2;
                                        var7 = var7[var9];
                                        var7 = var8.bind(var4)(var7);
                                        var7 = var7.AppStates;
                                        var7 = var7.ACTIVE;
                                        var7 = var6 === var7;
                                        if (!var2) {
                                            _fun114027_ip = 116;
                                            continue _fun114027
                                        }
                                    case 113:
                                        var2 = var7;
                                    case 116:
                                        if (!var2) {
                                            _fun114027_ip = 143;
                                            continue _fun114027
                                        }
                                    case 119:
                                        var7 = _closure3_slot0;
                                        var2 = var7._handleNotificationAuthorizationStatusUpdate;
                                        var2 = var2.bind(var7)();
                                        SaveGenerator(address = 137);
                                    case 135:
                                        return var2;
                                    case 137:
                                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 7);
                                        if (var7) {
                                            _fun114027_ip = 210;
                                            continue _fun114027
                                        }
                                    case 143:
                                        var8 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var7 = var7[var9];
                                        var7 = var8.bind(var4)(var7);
                                        var7 = var7.AppStates;
                                        var7 = var7.ACTIVE;
                                        if (!(var6 === var7)) {
                                            _fun114027_ip = 194;
                                            continue _fun114027
                                        }
                                    case 176:
                                        var3 = _closure1_slot31;
                                        var3 = var3.bind(var4)();
                                        SaveGenerator(address = 188);
                                    case 186:
                                        return var3;
                                    case 188:
                                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 7);
                                        if (var7) {
                                            _fun114027_ip = 207;
                                            continue _fun114027
                                        }
                                    case 194:
                                        var5 = _closure3_slot0;
                                        var5.previousAppState = var6;
                                        return var4;
                                    case 207:
                                        return var3;
                                    case 210:
                                        return var2;
                                    case 213:
                                        return var1;
                                    case 216:
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
                    var4 = var4.bind(var3)();
                    var0.handleAppStateUpdate = var4;
                    var2 = _closure1_slot8;
                    var1 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun114030: for (var _fun114030_ip = 0;;) switch (_fun114030_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun114030_ip = 79;
                                        continue _fun114030
                                    }
                                case 7:
                                    var1 = _closure1_slot9;
                                    var3 = var1.NativePermissionManager;
                                    var1 = var3.getNotificationAuthorizationStatus;
                                    var1 = var1.bind(var3)();
                                    SaveGenerator(address = 34);
                                case 32:
                                    return var1;
                                case 34:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                    if (var3) {
                                        _fun114030_ip = 76;
                                        continue _fun114030
                                    }
                                case 40:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot2;
                                    var2 = 20;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var4 = var4.bind(var2)(var3);
                                    var3 = var4.updateNotificationAuthorizationStatus;
                                    var3 = var3.bind(var4)(var1);
                                    return var2;
                                case 76:
                                    return var1;
                                case 79:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var0._handleNotificationAuthorizationStatusUpdate = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var4 = {};
        var5 = 'handleMessageCreateForNudge';
        var4.key = var5;
        var0 = function arg0() {
            _fun114031: for (var _fun114031_ip = 0;;) switch (_fun114031_ip) {
                case 0:
                    var1 = arg0;
                    var5 = var1.channelId;
                    var0 = var1.message;
                    var3 = var1.optimistic;
                    var2 = var1.isPushNotification;
                    var1 = var1.sendMessageOptions;
                    if (var3) {
                        _fun114031_ip = 336;
                        continue _fun114031
                    }
                case 37:
                    if (var2) {
                        _fun114031_ip = 336;
                        continue _fun114031
                    }
                case 43:
                    var4 = null;
                    if (!(var4 == var1)) {
                        _fun114031_ip = 336;
                        continue _fun114031
                    }
                case 52:
                    var1 = var4 == var0;
                    var3 = undefined;
                    var2 = undefined;
                    if (var1) {
                        _fun114031_ip = 83;
                        continue _fun114031
                    }
                case 63:
                    var0 = var0.author;
                    var1 = var4 == var0;
                    var2 = undefined;
                    if (var1) {
                        _fun114031_ip = 83;
                        continue _fun114031
                    }
                case 78:
                    var2 = var0.id;
                case 83:
                    var6 = _closure1_slot11;
                    var1 = var6.getId;
                    var1 = var1.bind(var6)();
                    if (!(var2 === var1)) {
                        _fun114031_ip = 336;
                        continue _fun114031
                    }
                case 107:
                    var2 = _closure1_slot12;
                    var1 = var2.getChannel;
                    var2 = var1.bind(var2)(var5);
                    if (!(var4 != var2)) {
                        _fun114031_ip = 336;
                        continue _fun114031
                    }
                case 128:
                    var1 = var2.getGuildId;
                    var7 = var1.bind(var2)();
                    var1 = var2.isThread;
                    var1 = var1.bind(var2)();
                    if (var1) {
                        _fun114031_ip = 174;
                        continue _fun114031
                    }
                case 151:
                    var6 = _closure1_slot13;
                    var5 = var6.isChannelMuted;
                    var1 = var2.id;
                    var1 = var5.bind(var6)(var7, var1);
                    _fun114031_ip = 194;
                    continue _fun114031;
                case 174:
                    var6 = _closure1_slot10;
                    var5 = var6.isMuted;
                    var2 = var2.id;
                    var1 = var5.bind(var6)(var2);
                case 194:
                    if (var1) {
                        _fun114031_ip = 336;
                        continue _fun114031
                    }
                case 200:
                    var1 = _closure1_slot15;
                    var2 = var1.CHANNEL_BANNER;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 24;
                    var1 = var6[var1];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.PERMISSION_PROMPT_EXPERIMENTS;
                    var6 = var1[var2];
                    var1 = var4 == var6;
                    var2 = undefined;
                    if (var1) {
                        _fun114031_ip = 289;
                        continue _fun114031
                    }
                case 249:
                    var5 = var6.getExperiment;
                    var1 = {
                        'location': 'shouldTriggerContextualPrompt',
                        'autoTrackExposure': false
                    };
                    var1 = var5.bind(var6)(var1);
                    var4 = var4 == var1;
                    var2 = undefined;
                    if (var4) {
                        _fun114031_ip = 289;
                        continue _fun114031
                    }
                case 283:
                    var2 = var1.isContextual;
                case 289:
                    var1 = true;
                    if (!(var1 === var2)) {
                        _fun114031_ip = 336;
                        continue _fun114031
                    }
                case 295:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 20;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.setPushNotificationPermissionEligibleForPrompt;
                    var0 = _closure1_slot15;
                    var0 = var0.CHANNEL_BANNER;
                    var0 = var1.bind(var2)(var0);
                case 336:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/nuf/native/NotificationPermissionManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 5, 27, 3093, 1216, 1372, 4303, 11020, 11021, 660, 4014, 3278, 14611, 1307, 481, 3045, 11023, 8736, 795, 478, 11019, 670, 4299, 2]);