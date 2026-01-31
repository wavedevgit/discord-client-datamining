// modules/notification_center/NotificationCenterItemsStore.tsx
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
        _fun36337: for (var _fun36337_ip = 0;;) switch (_fun36337_ip) {
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
                _fun36337_ip = 74;
                continue _fun36337;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot15 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function arg0() {
        _fun36340: for (var _fun36340_ip = 0;;) switch (_fun36340_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.id;
                var2 = null;
                var0 = var2 != var0;
                if (!var0) {
                    _fun36340_ip = 26;
                    continue _fun36340
                }
            case 17:
                var1 = var1.type;
                var0 = var2 != var1;
            case 26:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function() {
        _fun36341: for (var _fun36341_ip = 0;;) switch (_fun36341_ip) {
            case 0:
                var1 = arguments[0];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun36341_ip = 11;
                    continue _fun36341
                }
            case 9:
                var1 = {};
            case 11:
                var3 = var1.keepLocalItems;
                if (!(var3 === var0)) {
                    _fun36341_ip = 23;
                    continue _fun36341
                }
            case 21:
                var3 = false;
            case 23:
                var2 = {
                    'loading': false,
                    'initialized': false,
                    'errored': false,
                    'isDataStale': false
                };
                var1 = false;
                var4 = new Array(0);
                var2.notifCenterItems = var4;
                var4 = new Array(0);
                var2.staleNotifCenterItems = var4;
                var4 = global;
                var4 = var4.Set;
                var5 = var4.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = var5;
                var4 = new var6[var4](var5);
                var4 = var4 instanceof Object ? var4 : var5;
                var2.notifCenterIds = var4;
                if (var3) {
                    _fun36341_ip = 99;
                    continue _fun36341
                }
            case 93:
                var3 = new Array(0);
                _fun36341_ip = 112;
                continue _fun36341;
            case 99:
                var4 = _closure1_slot14;
                var3 = var4.notifCenterLocalItems;
            case 112:
                var2.notifCenterLocalItems = var3;
                var3 = true;
                var2.paginationHasMore = var3;
                var2.paginationCursor = var0;
                var2.notifCenterActive = var1;
                var2.notifCenterTabFocused = var1;
                _closure1_slot14 = var2;
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = function() {
        var2 = _closure1_slot17;
        var1 = {};
        var0 = true;
        var1.keepLocalItems = var0;
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function arg0() {
        _fun36343: for (var _fun36343_ip = 0;;) switch (_fun36343_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.item_enum;
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = 11;
                var0 = var0[var7];
                var2 = undefined;
                var0 = var5.bind(var2)(var0);
                var0 = var0.ItemEnum;
                var0 = var0.FIRST_MESSAGE;
                var0 = var4 === var0;
                if (!var0) {
                    _fun36343_ip = 91;
                    continue _fun36343
                }
            case 53:
                var5 = var1.type;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var6.bind(var2)(var4);
                var4 = var4.NotificationCenterItems;
                var4 = var4.LIFECYCLE_ITEM;
                var0 = var5 === var4;
            case 91:
                if (!var0) {
                    _fun36343_ip = 106;
                    continue _fun36343
                }
            case 94:
                var0 = 'https://discord.com/feature/composeMessage';
                var1.deeplink = var0;
            case 106:
                var0 = {};
                var9 = var0;
                var8 = var1;
                var4 = copyDataProperties(var9, var8);
                var5 = 'notification-center-item';
                var4 = 'kind';
                var0[var4] = var5;
                var5 = var1.message;
                var4 = null;
                var6 = var4 != var5;
                var5 = undefined;
                if (!var6) {
                    _fun36343_ip = 185;
                    continue _fun36343
                }
            case 149:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 12;
                var3 = var7[var3];
                var7 = var6.bind(var2)(var3);
                var6 = var7.createMessageRecord;
                var3 = var1.message;
                var5 = var6.bind(var7)(var3);
            case 185:
                var3 = 'message';
                var0[var3] = var5;
                var3 = var1.application;
                var3 = var4 != var3;
                var2 = undefined;
                if (!var3) {
                    _fun36343_ip = 218;
                    continue _fun36343
                }
            case 208:
                var1 = var1.application;
                var2 = var1.id;
            case 218:
                var1 = 'applicationId';
                var0[var1] = var2;
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var9 = function arg0() {
        _fun36344: for (var _fun36344_ip = 0;;) switch (_fun36344_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.type;
                var1 = 'NOTIFICATION_CENTER_ITEM_CREATE';
                if (!(var1 !== var2)) {
                    _fun36344_ip = 23;
                    continue _fun36344
                }
            case 16:
                var4 = var0.item;
                _fun36344_ip = 42;
                continue _fun36344;
            case 23:
                var2 = _closure1_slot19;
                var1 = var0.item;
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
            case 42:
                var0 = _closure1_slot14;
                var0 = var0.initialized;
                if (!var0) {
                    _fun36344_ip = 196;
                    continue _fun36344
                }
            case 61:
                var2 = _closure1_slot16;
                var0 = undefined;
                var2 = var2.bind(var0)(var4);
                if (!var2) {
                    _fun36344_ip = 196;
                    continue _fun36344
                }
            case 75:
                var2 = _closure1_slot14;
                var5 = var2.notifCenterIds;
                var3 = var5.has;
                var2 = var4.id;
                var2 = var3.bind(var5)(var2);
                if (var2) {
                    _fun36344_ip = 196;
                    continue _fun36344
                }
            case 103:
                var2 = _closure1_slot14;
                var5 = var2.notifCenterIds;
                var3 = var5.add;
                var2 = var4.id;
                var2 = var3.bind(var5)(var2);
                var3 = _closure1_slot14;
                var2 = new Array(1);
                var2[0] = var4;
                var4 = _closure1_slot14;
                var7 = var4.notifCenterItems;
                var6 = 1;
                var8 = var2;
                var4 = arraySpread(var8, var7, var6);
                var3.notifCenterItems = var2;
                var1 = _closure1_slot14;
                var3 = var1.notifCenterItems;
                var2 = var3.sort;
                var1 = function(arg0, arg1) { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.compare;
                    var0 = arg1;
                    var1 = var0.id;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            case 196:
                var0 = false;
                return var0;
        }
    };
    var0 = function arg0, arg1() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var1 = _closure1_slot14;
        var4 = var1.notifCenterItems;
        var3 = var4.map;
        var2 = function(arg0) { // Environment: var2
            _fun36347: for (var _fun36347_ip = 0;;) switch (_fun36347_ip) {
                case 0:
                    var3 = arg0;
                    var4 = _closure2_slot0;
                    var1 = var4.includes;
                    var0 = var3.id;
                    var1 = var1.bind(var4)(var0);
                    var0 = var3;
                    if (!var1) {
                        _fun36347_ip = 59;
                        continue _fun36347
                    }
                case 31:
                    var1 = {};
                    var6 = var1;
                    var5 = var3;
                    var3 = copyDataProperties(var6, var5);
                    var3 = _closure2_slot1;
                    var2 = 'acked';
                    var1[var2] = var3;
                    var0 = var1;
                case 59:
                    return var0;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.filter;
        var0 = _closure1_slot16;
        var0 = var2.bind(var3)(var0);
        var1.notifCenterItems = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot20 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun36348: for (var _fun36348_ip = 0;;) switch (_fun36348_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.type;
                var0 = arg1;
                var0 = var2 === var0;
                if (!var0) {
                    _fun36348_ip = 47;
                    continue _fun36348
                }
            case 18:
                var1 = var1.other_user;
                var2 = null;
                var3 = var2 == var1;
                var2 = undefined;
                if (var3) {
                    _fun36348_ip = 40;
                    continue _fun36348
                }
            case 35:
                var2 = var1.id;
            case 40:
                var1 = arg2;
                var0 = var2 === var1;
            case 47:
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun36349: for (var _fun36349_ip = 0;;) switch (_fun36349_ip) {
            case 0:
                var1 = arg0;
                var4 = _closure1_slot21;
                var3 = undefined;
                var2 = arg1;
                var0 = arg2;
                var0 = var4.bind(var3)(var1, var2, var0);
                if (!var0) {
                    _fun36349_ip = 40;
                    continue _fun36349
                }
            case 28:
                var2 = var1.applicationId;
                var1 = arg3;
                var0 = var2 === var1;
            case 40:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var8 = function arg0() {
        _fun36350: for (var _fun36350_ip = 0;;) switch (_fun36350_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.relationship;
                var _closure2_slot0 = var5;
                var1 = var5.id;
                var _closure2_slot1 = var1;
                var4 = var5.type;
                var2 = var5.isSpamRequest;
                var3 = var5.userIgnored;
                var6 = var5.user;
                var _closure2_slot2 = var6;
                var13 = var5.since;
                var12 = var5.originApplicationId;
                var7 = _closure1_slot13;
                var7 = var7.PENDING_INCOMING;
                if (!(var4 === var7)) {
                    _fun36350_ip = 199;
                    continue _fun36350
                }
            case 79:
                if (var2) {
                    _fun36350_ip = 199;
                    continue _fun36350
                }
            case 82:
                if (var3) {
                    _fun36350_ip = 199;
                    continue _fun36350
                }
            case 85:
                var2 = null;
                if (!(var2 != var13)) {
                    _fun36350_ip = 197;
                    continue _fun36350
                }
            case 91:
                if (!(var2 != var6)) {
                    _fun36350_ip = 199;
                    continue _fun36350
                }
            case 95:
                var8 = _closure1_slot12;
                var7 = var8.getUser;
                var6 = var6.id;
                var11 = var7.bind(var8)(var6);
                if (!(var2 != var11)) {
                    _fun36350_ip = 199;
                    continue _fun36350
                }
            case 119:
                var7 = _closure1_slot14;
                var16 = var7.notifCenterLocalItems;
                var6 = new Array(1);
                var15 = 0;
                var17 = var6;
                var9 = arraySpread(var17, var16, var15);
                var14 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 13;
                var10 = var10[var8];
                var8 = undefined;
                var10 = var14.bind(var8)(var10);
                var8 = var10.incomingFriendRequestLocalItem;
                var8 = var8.bind(var10)(var11, var13, var12);
                var6[var9] = var8;
                var8 = 1;
                var8 = var9 + var8;
                var7.notifCenterLocalItems = var6;
                _fun36350_ip = 199;
                continue _fun36350;
            case 197:
                return var2;
            case 199:
                var2 = _closure1_slot13;
                var2 = var2.FRIEND;
                var2 = var4 !== var2;
                if (var2) {
                    _fun36350_ip = 227;
                    continue _fun36350
                }
            case 216:
                var6 = var5.user;
                var5 = null;
                var2 = var5 == var6;
            case 227:
                if (var2) {
                    _fun36350_ip = 233;
                    continue _fun36350
                }
            case 230:
                var2 = var3;
            case 233:
                if (var2) {
                    _fun36350_ip = 267;
                    continue _fun36350
                }
            case 236:
                var5 = _closure1_slot14;
                var7 = var5.notifCenterLocalItems;
                var6 = var7.map;
                var2 = function(arg0) { // Environment: var0
                    _fun36351: for (var _fun36351_ip = 0;;) switch (_fun36351_ip) {
                        case 0:
                            var3 = arg0;
                            var7 = _closure1_slot21;
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var5 = 11;
                            var0 = var0[var5];
                            var4 = undefined;
                            var0 = var1.bind(var4)(var0);
                            var0 = var0.NotificationCenterLocalItems;
                            var1 = var0.INCOMING_FRIEND_REQUESTS;
                            var0 = _closure2_slot0;
                            var0 = var0.user;
                            var0 = var0.id;
                            var1 = var7.bind(var4)(var3, var1, var0);
                            var0 = var3;
                            if (!var1) {
                                _fun36351_ip = 205;
                                continue _fun36351
                            }
                        case 77:
                            var1 = {};
                            var12 = var1;
                            var11 = var3;
                            var7 = copyDataProperties(var12, var11);
                            var8 = true;
                            var7 = 'acked';
                            var1[var7] = var8;
                            var8 = false;
                            var7 = 'forceUnacked';
                            var1[var7] = var8;
                            var6 = _closure2_slot2;
                            var9 = var6.id;
                            var8 = var3.id;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var7 = var3.concat;
                            var6 = 'incoming_friend_requests_accepted_';
                            var3 = '_';
                            var6 = var7.bind(var6)(var9, var3, var8);
                            var3 = 'local_id';
                            var1[var3] = var6;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var5];
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.NotificationCenterLocalItems;
                            var3 = var2.INCOMING_FRIEND_REQUESTS_ACCEPTED;
                            var2 = 'type';
                            var1[var2] = var3;
                            var0 = var1;
                        case 205:
                            return var0;
                    }
                };
                var2 = var6.bind(var7)(var2);
                var5.notifCenterLocalItems = var2;
            case 267:
                var2 = _closure1_slot13;
                var2 = var2.BLOCKED;
                var2 = var4 === var2;
                if (var2) {
                    _fun36350_ip = 287;
                    continue _fun36350
                }
            case 284:
                var2 = var3;
            case 287:
                if (!var2) {
                    _fun36350_ip = 321;
                    continue _fun36350
                }
            case 290:
                var1 = _closure1_slot14;
                var3 = var1.notifCenterLocalItems;
                var2 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    _fun36352: for (var _fun36352_ip = 0;;) switch (_fun36352_ip) {
                        case 0:
                            var5 = arg0;
                            var6 = _closure1_slot21;
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var7 = 11;
                            var0 = var0[var7];
                            var4 = undefined;
                            var0 = var1.bind(var4)(var0);
                            var0 = var0.NotificationCenterLocalItems;
                            var3 = var0.INCOMING_FRIEND_REQUESTS;
                            var0 = _closure2_slot1;
                            var0 = var6.bind(var4)(var5, var3, var0);
                            if (var0) {
                                _fun36352_ip = 105;
                                continue _fun36352
                            }
                        case 61:
                            var8 = _closure1_slot21;
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var7];
                            var3 = var6.bind(var4)(var3);
                            var3 = var3.NotificationCenterLocalItems;
                            var6 = var3.INCOMING_FRIEND_REQUESTS_ACCEPTED;
                            var3 = _closure2_slot1;
                            var0 = var8.bind(var4)(var5, var6, var3);
                        case 105:
                            if (var0) {
                                _fun36352_ip = 152;
                                continue _fun36352
                            }
                        case 108:
                            var8 = _closure1_slot21;
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var7];
                            var3 = var6.bind(var4)(var3);
                            var3 = var3.NotificationCenterLocalItems;
                            var6 = var3.INCOMING_GAME_FRIEND_REQUESTS;
                            var3 = _closure2_slot1;
                            var0 = var8.bind(var4)(var5, var6, var3);
                        case 152:
                            if (var0) {
                                _fun36352_ip = 199;
                                continue _fun36352
                            }
                        case 155:
                            var3 = _closure1_slot21;
                            var6 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var7];
                            var2 = var6.bind(var4)(var2);
                            var2 = var2.NotificationCenterLocalItems;
                            var2 = var2.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
                            var1 = _closure2_slot1;
                            var0 = var3.bind(var4)(var5, var2, var1);
                        case 199:
                            var0 = !var0;
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0);
                var1.notifCenterLocalItems = var0;
            case 321:
                var0 = undefined;
                return var0;
        }
    };
    var0 = function arg0() {
        _fun36353: for (var _fun36353_ip = 0;;) switch (_fun36353_ip) {
            case 0:
                var4 = arg0;
                var _closure2_slot0 = var4;
                var3 = _closure1_slot9;
                var0 = undefined;
                var3 = var3.bind(var0)(var4);
                if (!var3) {
                    _fun36353_ip = 57;
                    continue _fun36353
                }
            case 26:
                var2 = _closure1_slot14;
                var4 = var2.notifCenterItems;
                var3 = var4.map;
                var1 = function(arg0) { // Environment: var1
                    _fun36354: for (var _fun36354_ip = 0;;) switch (_fun36354_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = var2.type;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var4.bind(var0)(var1);
                            var0 = var0.NotificationCenterItems;
                            var1 = var0.GUILD_SCHEDULED_EVENT_STARTED;
                            var0 = var2;
                            if (!(var3 === var1)) {
                                _fun36354_ip = 105;
                                continue _fun36354
                            }
                        case 52:
                            var3 = var2.guild_scheduled_event_id;
                            var1 = _closure2_slot0;
                            var1 = var1.id;
                            var0 = var2;
                            if (!(var3 === var1)) {
                                _fun36354_ip = 105;
                                continue _fun36354
                            }
                        case 77:
                            var1 = {};
                            var6 = var1;
                            var5 = var2;
                            var2 = copyDataProperties(var6, var5);
                            var3 = true;
                            var2 = 'disable_action';
                            var1[var2] = var3;
                            var0 = var1;
                        case 105:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1);
                var2.notifCenterItems = var1;
            case 57:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var11 = global;
    var12 = var11.Object;
    var7 = var12.defineProperty;
    var1 = {};
    var10 = true;
    var1.value = var10;
    var0 = '__esModule';
    var0 = var7.bind(var12)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.isGuildEventEnded;
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.RelationshipTypes;
    var _closure1_slot13 = var1;
    var1 = {
        'loading': false,
        'initialized': false,
        'errored': false,
        'isDataStale': false
    };
    var7 = false;
    var12 = new Array(0);
    var1.notifCenterItems = var12;
    var12 = new Array(0);
    var1.staleNotifCenterItems = var12;
    var11 = var11.Set;
    var12 = var11.prototype;
    var12 = Object.create(var12, {
        constructor: {
            value: var11
        }
    });
    var16 = var12;
    var11 = new var16[var11](var15);
    var11 = var11 instanceof Object ? var11 : var12;
    var1.notifCenterIds = var11;
    var11 = new Array(0);
    var1.notifCenterLocalItems = var11;
    var1.paginationHasMore = var10;
    var1.paginationCursor = var0;
    var1.notifCenterActive = var7;
    var1.notifCenterTabFocused = var7;
    var _closure1_slot14 = var1;
    var1 = 15;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun36356: for (var _fun36356_ip = 0;;) switch (_fun36356_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun36356_ip = 69;
                        continue _fun36356
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun36356_ip = 105;
                    continue _fun36356;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun36357: for (var _fun36357_ip = 0;;) switch (_fun36357_ip) {
                case 0:
                    var0 = arg0;
                    var6 = this;
                    var5 = var6.waitFor;
                    var4 = _closure1_slot12;
                    var3 = _closure1_slot11;
                    var2 = _closure1_slot8;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    var2 = null;
                    if (!(var2 != var0)) {
                        _fun36357_ip = 133;
                        continue _fun36357
                    }
                case 40:
                    var3 = var0.notifCenterItems;
                    var2 = var3.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun36358: for (var _fun36358_ip = 0;;) switch (_fun36358_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = {};
                                var6 = var0;
                                var5 = var1;
                                var2 = copyDataProperties(var6, var5);
                                var3 = var1.message;
                                var2 = null;
                                var3 = var2 != var3;
                                var2 = undefined;
                                if (!var3) {
                                    _fun36358_ip = 63;
                                    continue _fun36358
                                }
                            case 31:
                                var4 = _closure1_slot10;
                                var6 = var1.message;
                                var3 = var4.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var4
                                    }
                                });
                                var7 = var3;
                                var1 = new var7[var4](var6, var5);
                                var2 = var1 instanceof Object ? var1 : var3;
                            case 63:
                                var1 = 'message';
                                var0[var1] = var2;
                                return var0;
                        }
                    };
                    var3 = var2.bind(var3)(var0);
                    var2 = var3.length;
                    var0 = 0;
                    if (!(var2 > var0)) {
                        _fun36357_ip = 133;
                        continue _fun36357
                    }
                case 74:
                    var0 = {};
                    var8 = _closure1_slot14;
                    var9 = var0;
                    var2 = copyDataProperties(var9, var8);
                    var4 = true;
                    var2 = 'initialized';
                    var0[var2] = var4;
                    var2 = 'isDataStale';
                    var0[var2] = var4;
                    var4 = new Array(0);
                    var2 = 'notifCenterItems';
                    var0[var2] = var4;
                    var2 = 'staleNotifCenterItems';
                    var0[var2] = var3;
                    _closure1_slot14 = var0;
                case 133:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(11);
        var0[0] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var3 = function arg0() {
                _fun36360: for (var _fun36360_ip = 0;;) switch (_fun36360_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = {};
                        var5 = var0;
                        var4 = var1;
                        var2 = copyDataProperties(var5, var4);
                        var3 = var1.message;
                        var2 = null;
                        var3 = var2 != var3;
                        var2 = undefined;
                        if (!var3) {
                            _fun36360_ip = 46;
                            continue _fun36360
                        }
                    case 31:
                        var3 = var1.message;
                        var1 = var3.toJS;
                        var2 = var1.bind(var3)();
                    case 46:
                        var1 = 'message';
                        var0[var1] = var2;
                        return var0;
                }
            };
            var0 = {};
            var5 = _closure1_slot14;
            var6 = var0;
            var2 = copyDataProperties(var6, var5);
            var2 = _closure1_slot14;
            var4 = var2.notifCenterItems;
            var2 = var4.map;
            var4 = var2.bind(var4)(var3);
            var2 = 'notifCenterItems';
            var0[var2] = var4;
            var1 = _closure1_slot14;
            var2 = var1.staleNotifCenterItems;
            var1 = var2.map;
            var2 = var1.bind(var2)(var3);
            var1 = 'staleNotifCenterItems';
            var0[var1] = var2;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'loading';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            var0 = var0.loading;
            return var0;
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'initialized';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            var0 = var0.initialized;
            return var0;
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'items';
        var4.key = var6;
        var6 = function() {
            _fun36363: for (var _fun36363_ip = 0;;) switch (_fun36363_ip) {
                case 0:
                    var0 = _closure1_slot14;
                    var0 = var0.isDataStale;
                    var1 = _closure1_slot14;
                    if (var0) {
                        _fun36363_ip = 28;
                        continue _fun36363
                    }
                case 20:
                    var0 = var1.notifCenterItems;
                    _fun36363_ip = 34;
                    continue _fun36363;
                case 28:
                    var0 = var1.staleNotifCenterItems;
                case 34:
                    return var0;
            }
        };
        var4.get = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'hasMore';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            var0 = var0.paginationHasMore;
            return var0;
        };
        var4.get = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'cursor';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            var0 = var0.paginationCursor;
            return var0;
        };
        var4.get = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'errored';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            var0 = var0.errored;
            return var0;
        };
        var4.get = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'active';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            var0 = var0.notifCenterActive;
            return var0;
        };
        var4.get = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'localItems';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            var0 = var0.notifCenterLocalItems;
            return var0;
        };
        var4.get = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'tabFocused';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot14;
            var0 = var0.notifCenterTabFocused;
            return var0;
        };
        var4.get = var5;
        var0[10] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'NotificationCenterItemsStore';
    var7.displayName = var1;
    var1 = 'NotificationCenterItemsStore_v2';
    var7.persistKey = var1;
    var1 = 16;
    var1 = var5[var1];
    var15 = var6.bind(var0)(var1);
    var1 = {};
    var10 = function arg0() {
        var2 = arg0;
        var1 = new Array(0);
        var _closure2_slot0 = var1;
        var3 = global;
        var3 = var3.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var3
            }
        });
        var7 = var4;
        var3 = new var7[var3](var6);
        var3 = var3 instanceof Object ? var3 : var4;
        var _closure2_slot1 = var3;
        var5 = var2.relationships;
        var4 = var5.forEach;
        var3 = function(arg0) { // Environment: var0
            _fun36371: for (var _fun36371_ip = 0;;) switch (_fun36371_ip) {
                case 0:
                    var0 = arg0;
                    var6 = var0.type;
                    var2 = var0.user;
                    var8 = var0.since;
                    var4 = var0.is_spam_request;
                    var3 = var0.user_ignored;
                    var7 = var0.origin_application_id;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun36371_ip = 180;
                        continue _fun36371
                    }
                case 46:
                    if (!var3) {
                        _fun36371_ip = 71;
                        continue _fun36371
                    }
                case 49:
                    var9 = _closure2_slot1;
                    var5 = var9.add;
                    var1 = var2.id;
                    var1 = var5.bind(var9)(var1);
                case 71:
                    var5 = _closure1_slot13;
                    var5 = var5.PENDING_INCOMING;
                    if (!(var6 === var5)) {
                        _fun36371_ip = 178;
                        continue _fun36371
                    }
                case 88:
                    if (var4) {
                        _fun36371_ip = 178;
                        continue _fun36371
                    }
                case 91:
                    if (var3) {
                        _fun36371_ip = 178;
                        continue _fun36371
                    }
                case 94:
                    if (!(var0 != var8)) {
                        _fun36371_ip = 178;
                        continue _fun36371
                    }
                case 98:
                    var4 = _closure1_slot12;
                    var3 = var4.getUser;
                    var2 = var2.id;
                    var6 = var3.bind(var4)(var2);
                    if (!(var0 != var6)) {
                        _fun36371_ip = 176;
                        continue _fun36371
                    }
                case 122:
                    var4 = _closure2_slot0;
                    var3 = var4.push;
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var2);
                    var2 = var5.incomingFriendRequestLocalItem;
                    var2 = var2.bind(var5)(var6, var8, var7);
                    var2 = var3.bind(var4)(var2);
                    return var1;
                case 176:
                    return var0;
                case 178:
                    return var0;
                case 180:
                    return var0;
            }
        };
        var3 = var4.bind(var5)(var3);
        var5 = var2.gameRelationships;
        var4 = var5.forEach;
        var3 = function(arg0) { // Environment: var0
            _fun36372: for (var _fun36372_ip = 0;;) switch (_fun36372_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.type;
                    var4 = var0.id;
                    var6 = var0.application_id;
                    var5 = var0.since;
                    var1 = _closure1_slot13;
                    var1 = var1.PENDING_INCOMING;
                    if (!(var2 === var1)) {
                        _fun36372_ip = 132;
                        continue _fun36372
                    }
                case 42:
                    var3 = _closure2_slot1;
                    var2 = var3.has;
                    var2 = var2.bind(var3)(var4);
                    if (var2) {
                        _fun36372_ip = 132;
                        continue _fun36372
                    }
                case 62:
                    var3 = _closure1_slot12;
                    var2 = var3.getUser;
                    var4 = var2.bind(var3)(var4);
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun36372_ip = 132;
                        continue _fun36372
                    }
                case 83:
                    var2 = _closure2_slot0;
                    var1 = var2.push;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 13;
                    var3 = var3[var0];
                    var0 = undefined;
                    var3 = var7.bind(var0)(var3);
                    var0 = var3.incomingGameFriendRequestLocalItem;
                    var0 = var0.bind(var3)(var4, var5, var6);
                    var0 = var1.bind(var2)(var0);
                case 132:
                    var0 = undefined;
                    return var0;
            }
        };
        var3 = var4.bind(var5)(var3);
        var3 = var2.guilds;
        var2 = var3.forEach;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var2 = var0.guild_scheduled_events;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot23;
                var0 = undefined;
                var1 = arg0;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0 = var2.bind(var3)(var0);
        var0 = _closure1_slot14;
        var0.notifCenterLocalItems = var1;
        var0 = undefined;
        return var0;
    };
    var1.CONNECTION_OPEN = var10;
    var10 = function() {
        var1 = _closure1_slot17;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.LOGOUT = var10;
    var10 = function arg0() {
        var0 = arg0;
        var3 = var0.ids;
        var2 = _closure1_slot20;
        var0 = undefined;
        var1 = true;
        var1 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var1.NOTIFICATION_CENTER_ITEMS_ACK = var10;
    var10 = function arg0() {
        var0 = arg0;
        var3 = var0.ids;
        var2 = _closure1_slot20;
        var0 = undefined;
        var1 = false;
        var1 = var2.bind(var0)(var3, var1);
        return var0;
    };
    var1.NOTIFICATION_CENTER_ITEMS_ACK_FAILURE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.guildScheduledEvent;
        var1 = _closure1_slot23;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var1.GUILD_SCHEDULED_EVENT_UPDATE = var10;
    var1.NOTIFICATION_CENTER_ITEM_CREATE = var9;
    var10 = function arg0() {
        _fun36379: for (var _fun36379_ip = 0;;) switch (_fun36379_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.id;
                var _closure2_slot0 = var4;
                var2 = _closure1_slot14;
                var3 = var2.notifCenterIds;
                var2 = var3.has;
                var2 = var2.bind(var3)(var4);
                if (var2) {
                    _fun36379_ip = 44;
                    continue _fun36379
                }
            case 40:
                var2 = false;
                return var2;
            case 44:
                var2 = _closure1_slot14;
                var3 = var2.notifCenterIds;
                var2 = var3.delete;
                var2 = var2.bind(var3)(var4);
                var1 = _closure1_slot14;
                var3 = var1.notifCenterItems;
                var2 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                var1.notifCenterItems = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.NOTIFICATION_CENTER_ITEM_DELETE = var10;
    var1.NOTIFICATION_CENTER_ITEM_DELETE_FAILURE = var9;
    var9 = function() {
        var1 = _closure1_slot14;
        var0 = true;
        var1.loading = var0;
        var0 = undefined;
        return var0;
    };
    var1.LOAD_NOTIFICATION_CENTER_ITEMS = var9;
    var9 = function() {
        var2 = _closure1_slot14;
        var1 = false;
        var2.loading = var1;
        var2 = _closure1_slot14;
        var1 = true;
        var2.initialized = var1;
        var0 = _closure1_slot14;
        var0.errored = var1;
        var0 = undefined;
        return var0;
    };
    var1.LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE = var9;
    var9 = function arg0() {
        _fun36383: for (var _fun36383_ip = 0;;) switch (_fun36383_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.items;
                var7 = var1.hasMore;
                var5 = var1.cursor;
                var3 = _closure1_slot14;
                var3 = var3.loading;
                if (!var3) {
                    _fun36383_ip = 276;
                    continue _fun36383
                }
            case 40:
                var3 = _closure1_slot14;
                var4 = false;
                var3.loading = var4;
                var6 = _closure1_slot14;
                var3 = true;
                var6.initialized = var3;
                var3 = _closure1_slot14;
                var3.errored = var4;
                var3 = _closure1_slot14;
                var3.isDataStale = var4;
                var3 = null;
                var3 = var3 != var5;
                if (!var3) {
                    _fun36383_ip = 113;
                    continue _fun36383
                }
            case 93:
                var4 = _closure1_slot14;
                var6 = var4.notifCenterIds;
                var4 = var6.has;
                var3 = var4.bind(var6)(var5);
            case 113:
                if (var3) {
                    _fun36383_ip = 170;
                    continue _fun36383
                }
            case 116:
                var4 = _closure1_slot14;
                var3 = var2.length;
                var6 = 0;
                var3 = var3 > var6;
                if (!var3) {
                    _fun36383_ip = 137;
                    continue _fun36383
                }
            case 134:
                var3 = var7;
            case 137:
                var4.paginationHasMore = var3;
                var4 = _closure1_slot14;
                var3 = var2.length;
                var6 = var3 > var6;
                var3 = undefined;
                if (!var6) {
                    _fun36383_ip = 164;
                    continue _fun36383
                }
            case 161:
                var3 = var5;
            case 164:
                var4.paginationCursor = var3;
            case 170:
                var4 = _closure1_slot14;
                var10 = var4.notifCenterItems;
                var3 = new Array(0);
                var9 = 0;
                var11 = var3;
                var9 = arraySpread(var11, var10, var9);
                var7 = var2.map;
                var5 = _closure1_slot19;
                var8 = var7.bind(var2)(var5);
                var7 = var8.filter;
                var5 = function(arg0) { // Environment: var0
                    var0 = _closure1_slot14;
                    var2 = var0.notifCenterIds;
                    var1 = var2.has;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var10 = var7.bind(var8)(var5);
                var11 = var3;
                var5 = arraySpread(var11, var10, var9);
                var4.notifCenterItems = var3;
                var1 = _closure1_slot14;
                var4 = var1.notifCenterItems;
                var3 = var4.sort;
                var1 = function(arg0, arg1) { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 14;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.compare;
                    var0 = arg1;
                    var1 = var0.id;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var3.bind(var4)(var1);
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var0 = _closure1_slot14;
                    var2 = var0.notifCenterIds;
                    var1 = var2.add;
                    var0 = arg0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
            case 276:
                var0 = undefined;
                return var0;
        }
    };
    var1.LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS = var9;
    var9 = function() {
        var1 = _closure1_slot18;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.RESET_NOTIFICATION_CENTER = var9;
    var9 = function arg0() {
        var0 = arg0;
        var1 = var0.active;
        var0 = _closure1_slot14;
        var0.notifCenterActive = var1;
        var0 = undefined;
        return var0;
    };
    var1.NOTIFICATION_CENTER_SET_ACTIVE = var9;
    var9 = function arg0() {
        var0 = arg0;
        var1 = var0.focused;
        var0 = _closure1_slot14;
        var0.notifCenterTabFocused = var1;
        var0 = undefined;
        return var0;
    };
    var1.NOTIFICATION_CENTER_TAB_FOCUSED = var9;
    var1.RELATIONSHIP_ADD = var8;
    var1.RELATIONSHIP_UPDATE = var8;
    var8 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = _closure1_slot14;
        var3 = var1.notifCenterLocalItems;
        var2 = var3.filter;
        var0 = function(arg0) { // Environment: var0
            _fun36391: for (var _fun36391_ip = 0;;) switch (_fun36391_ip) {
                case 0:
                    var5 = arg0;
                    var6 = _closure1_slot21;
                    var1 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var7 = 11;
                    var0 = var0[var7];
                    var4 = undefined;
                    var0 = var1.bind(var4)(var0);
                    var0 = var0.NotificationCenterLocalItems;
                    var3 = var0.INCOMING_FRIEND_REQUESTS;
                    var0 = _closure2_slot0;
                    var0 = var0.relationship;
                    var0 = var0.id;
                    var3 = var6.bind(var4)(var5, var3, var0);
                    var0 = !var3;
                    if (var3) {
                        _fun36391_ip = 133;
                        continue _fun36391
                    }
                case 75:
                    var3 = _closure1_slot21;
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var6.bind(var4)(var2);
                    var2 = var2.NotificationCenterLocalItems;
                    var2 = var2.INCOMING_FRIEND_REQUESTS_ACCEPTED;
                    var1 = _closure2_slot0;
                    var1 = var1.relationship;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var5, var2, var1);
                    var0 = !var1;
                case 133:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0);
        var1.notifCenterLocalItems = var0;
        var0 = undefined;
        return var0;
    };
    var1.RELATIONSHIP_REMOVE = var8;
    var8 = function arg0() {
        _fun36392: for (var _fun36392_ip = 0;;) switch (_fun36392_ip) {
            case 0:
                var1 = arg0;
                var1 = var1.gameRelationship;
                var3 = var1.id;
                var _closure2_slot0 = var3;
                var4 = var1.type;
                var7 = var1.since;
                var6 = var1.applicationId;
                var _closure2_slot1 = var6;
                var5 = _closure1_slot11;
                var1 = var5.isBlockedOrIgnored;
                var1 = var1.bind(var5)(var3);
                if (var1) {
                    _fun36392_ip = 240;
                    continue _fun36392
                }
            case 64:
                var1 = _closure1_slot13;
                var1 = var1.PENDING_INCOMING;
                if (!(var4 !== var1)) {
                    _fun36392_ip = 129;
                    continue _fun36392
                }
            case 78:
                var1 = _closure1_slot13;
                var1 = var1.FRIEND;
                if (!(var4 === var1)) {
                    _fun36392_ip = 125;
                    continue _fun36392
                }
            case 92:
                var1 = _closure1_slot14;
                var5 = var1.notifCenterLocalItems;
                var4 = var5.map;
                var0 = function(arg0) { // Environment: var0
                    _fun36393: for (var _fun36393_ip = 0;;) switch (_fun36393_ip) {
                        case 0:
                            var3 = arg0;
                            var8 = _closure1_slot22;
                            var1 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var5 = 11;
                            var0 = var0[var5];
                            var4 = undefined;
                            var0 = var1.bind(var4)(var0);
                            var0 = var0.NotificationCenterLocalItems;
                            var12 = var0.INCOMING_GAME_FRIEND_REQUESTS;
                            var11 = _closure2_slot0;
                            var10 = _closure2_slot1;
                            var14 = undefined;
                            var13 = var3;
                            var1 = var14[var8](var13, var12, var11, var10, var9);
                            var0 = var3;
                            if (!var1) {
                                _fun36393_ip = 196;
                                continue _fun36393
                            }
                        case 73:
                            var1 = {};
                            var13 = var1;
                            var12 = var3;
                            var7 = copyDataProperties(var13, var12);
                            var8 = true;
                            var7 = 'acked';
                            var1[var7] = var8;
                            var8 = false;
                            var7 = 'forceUnacked';
                            var1[var7] = var8;
                            var9 = _closure2_slot0;
                            var8 = var3.id;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var7 = var3.concat;
                            var6 = 'incoming_game_friend_requests_accepted_';
                            var3 = '_';
                            var6 = var7.bind(var6)(var9, var3, var8);
                            var3 = 'local_id';
                            var1[var3] = var6;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var2 = var2[var5];
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.NotificationCenterLocalItems;
                            var3 = var2.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
                            var2 = 'type';
                            var1[var2] = var3;
                            var0 = var1;
                        case 196:
                            return var0;
                    }
                };
                var0 = var4.bind(var5)(var0);
                var1.notifCenterLocalItems = var0;
                _fun36392_ip = 236;
                continue _fun36392;
            case 125:
                var0 = false;
                return var0;
            case 129:
                var1 = _closure1_slot12;
                var0 = var1.getUser;
                var5 = var0.bind(var1)(var3);
                var1 = null;
                var0 = var1 != var7;
                if (!var0) {
                    _fun36392_ip = 157;
                    continue _fun36392
                }
            case 153:
                var0 = var1 != var5;
            case 157:
                if (!var0) {
                    _fun36392_ip = 236;
                    continue _fun36392
                }
            case 160:
                var1 = _closure1_slot14;
                var10 = var1.notifCenterLocalItems;
                var0 = new Array(1);
                var9 = 0;
                var11 = var0;
                var3 = arraySpread(var11, var10, var9);
                var8 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 13;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var8.bind(var2)(var4);
                var2 = var4.incomingGameFriendRequestLocalItem;
                var2 = var2.bind(var4)(var5, var7, var6);
                var0[var3] = var2;
                var2 = 1;
                var2 = var3 + var2;
                var1.notifCenterLocalItems = var0;
            case 236:
                var0 = undefined;
                return var0;
            case 240:
                var0 = false;
                return var0;
        }
    };
    var1.GAME_RELATIONSHIP_ADD = var8;
    var8 = function arg0() {
        var1 = arg0;
        var2 = var1.userId;
        var _closure2_slot0 = var2;
        var1 = var1.applicationId;
        var _closure2_slot1 = var1;
        var1 = _closure1_slot14;
        var3 = var1.notifCenterLocalItems;
        var2 = var3.filter;
        var0 = function(arg0) { // Environment: var0
            _fun36395: for (var _fun36395_ip = 0;;) switch (_fun36395_ip) {
                case 0:
                    var6 = arg0;
                    var8 = _closure1_slot22;
                    var1 = _closure1_slot0;
                    var0 = _closure1_slot2;
                    var7 = 11;
                    var0 = var0[var7];
                    var5 = undefined;
                    var0 = var1.bind(var5)(var0);
                    var0 = var0.NotificationCenterLocalItems;
                    var11 = var0.INCOMING_GAME_FRIEND_REQUESTS;
                    var10 = _closure2_slot0;
                    var9 = _closure2_slot1;
                    var13 = undefined;
                    var12 = var6;
                    var3 = var13[var8](var12, var11, var10, var9, var8);
                    var0 = !var3;
                    if (var3) {
                        _fun36395_ip = 123;
                        continue _fun36395
                    }
                case 70:
                    var4 = _closure1_slot22;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var2 = var3.bind(var5)(var2);
                    var2 = var2.NotificationCenterLocalItems;
                    var11 = var2.INCOMING_GAME_FRIEND_REQUESTS_ACCEPTED;
                    var10 = _closure2_slot0;
                    var9 = _closure2_slot1;
                    var13 = undefined;
                    var12 = var6;
                    var1 = var13[var4](var12, var11, var10, var9, var8);
                    var0 = !var1;
                case 123:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0);
        var1.notifCenterLocalItems = var0;
        var0 = undefined;
        return var0;
    };
    var1.GAME_RELATIONSHIP_REMOVE = var8;
    var8 = function arg0() {
        var0 = arg0;
        var0 = var0.item_enum;
        var _closure2_slot0 = var0;
        var1 = _closure1_slot14;
        var4 = var1.notifCenterItems;
        var3 = var4.map;
        var2 = function(arg0) { // Environment: var2
            _fun36397: for (var _fun36397_ip = 0;;) switch (_fun36397_ip) {
                case 0:
                    var2 = arg0;
                    var3 = var2.item_enum;
                    var1 = _closure2_slot0;
                    var0 = var2;
                    if (!(var3 === var1)) {
                        _fun36397_ip = 58;
                        continue _fun36397
                    }
                case 23:
                    var1 = {};
                    var5 = var1;
                    var4 = var2;
                    var2 = copyDataProperties(var5, var4);
                    var3 = true;
                    var2 = 'completed';
                    var1[var2] = var3;
                    var2 = 'acked';
                    var1[var2] = var3;
                    var0 = var1;
                case 58:
                    return var0;
            }
        };
        var3 = var3.bind(var4)(var2);
        var2 = var3.filter;
        var0 = _closure1_slot16;
        var0 = var2.bind(var3)(var0);
        var1.notifCenterItems = var0;
        var0 = undefined;
        return var0;
    };
    var1.NOTIFICATION_CENTER_ITEM_COMPLETED = var8;
    var8 = function() {
        var1 = _closure1_slot18;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.SET_RECENT_MENTIONS_FILTER = var8;
    var8 = function arg0() {
        _fun36399: for (var _fun36399_ip = 0;;) switch (_fun36399_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.newBuild;
                var0 = undefined;
                var _closure2_slot0 = var0;
                var2 = null;
                if (!(var2 !== var5)) {
                    _fun36399_ip = 149;
                    continue _fun36399
                }
            case 26:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 13;
                var3 = var6[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.mobileNativeUpdateAvailableLocalItem;
                var3 = var3.bind(var4)(var5);
                _closure2_slot0 = var3;
                var4 = _closure1_slot14;
                var6 = var4.notifCenterLocalItems;
                var5 = var6.find;
                var4 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.local_id;
                    var0 = _closure2_slot0;
                    var0 = var0.local_id;
                    var0 = var1 === var0;
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
                if (!(var0 === var4)) {
                    _fun36399_ip = 149;
                    continue _fun36399
                }
            case 93:
                var2 = _closure1_slot14;
                var5 = var2.notifCenterLocalItems;
                var4 = var5.filter;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.kind;
                    var0 = _closure2_slot0;
                    var0 = var0.kind;
                    var0 = var1 !== var0;
                    return var0;
                };
                var8 = var4.bind(var5)(var1);
                var1 = new Array(1);
                var7 = 0;
                var9 = var1;
                var4 = arraySpread(var9, var8, var7);
                var1[var4] = var3;
                var3 = 1;
                var3 = var4 + var3;
                var2.notifCenterLocalItems = var1;
            case 149:
                return var0;
        }
    };
    var1.MOBILE_NATIVE_UPDATE_CHECK_FINISHED = var8;
    var3 = function arg0() {
        _fun36402: for (var _fun36402_ip = 0;;) switch (_fun36402_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.unknownApplicationIds;
                var0 = undefined;
                var _closure2_slot0 = var0;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun36402_ip = 92;
                    continue _fun36402
                }
            case 23:
                var2 = global;
                var2 = var2.Set;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var6 = var3;
                var5 = var4;
                var2 = new var6[var2](var5, var4);
                var2 = var2 instanceof Object ? var2 : var3;
                _closure2_slot0 = var2;
                var2 = _closure1_slot14;
                var4 = var2.notifCenterLocalItems;
                var3 = var4.filter;
                var1 = function(arg0) { // Environment: var1
                    _fun36403: for (var _fun36403_ip = 0;;) switch (_fun36403_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.applicationId;
                            var0 = null;
                            var0 = var0 == var2;
                            if (var0) {
                                _fun36403_ip = 42;
                                continue _fun36403
                            }
                        case 17:
                            var3 = _closure2_slot0;
                            var2 = var3.has;
                            var1 = var1.applicationId;
                            var1 = var2.bind(var3)(var1);
                            var0 = !var1;
                        case 42:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1);
                var2.notifCenterLocalItems = var1;
            case 92:
                return var0;
        }
    };
    var1.APPLICATIONS_FETCH_SUCCESS = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var16 = var3;
    var14 = var1;
    var1 = new var16[var7](var15, var14, var13);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notification_center/NotificationCenterItemsStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1590, 3293, 3060, 3059, 1613, 660, 3930, 3931, 4186, 21, 566, 806, 2]);