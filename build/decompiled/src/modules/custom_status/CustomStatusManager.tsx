// modules/custom_status/CustomStatusManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun113249: for (var _fun113249_ip = 0;;) switch (_fun113249_ip) {
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
                _fun113249_ip = 76;
                continue _fun113249;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
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
    var7 = var3.AnalyticsObjects;
    var _closure1_slot9 = var7;
    var3 = var3.StatusTypes;
    var _closure1_slot10 = var3;
    var3 = 7;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.Timeout;
    var8 = var7.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var7
        }
    });
    var12 = var8;
    var7 = new var12[var7](var11);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot11 = var7;
    var7 = var5[var3];
    var7 = var4.bind(var0)(var7);
    var7 = var7.Timeout;
    var8 = var7.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var7
        }
    });
    var12 = var8;
    var7 = new var12[var7](var11);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot12 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Timeout;
    var7 = var3.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var3
        }
    });
    var12 = var7;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot13 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function(arg0) { // Original name: CustomStatusManager, environment: var0
            _fun113253: for (var _fun113253_ip = 0;;) switch (_fun113253_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot4;
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
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun113253_ip = 86;
                        continue _fun113253
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun113253_ip = 120;
                    continue _fun113253;
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
                    var2 = null;
                    var0.previousStatus = var2;
                    var2 = {};
                    var3 = function() { // Original name: POST_CONNECTION_OPEN, environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.handlePostConnectionOpen;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.POST_CONNECTION_OPEN = var3;
                    var3 = function() { // Original name: USER_SETTINGS_PROTO_UPDATE, environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.handleUserSettingsProtoUpdate;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.USER_SETTINGS_PROTO_UPDATE = var3;
                    var0.actions = var2;
                    var2 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var2 = _closure1_slot8;
                        var0 = var2.getStatus;
                        var0 = var0.bind(var2)();
                        var1.previousStatus = var0;
                        var0 = var1.handleCommonUpdates;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0.handlePostConnectionOpen = var2;
                    var2 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.handleCommonUpdates;
                        var0 = var0.bind(var1)();
                        var0 = var1.manageDoNotDisturbReminderPopover;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleUserSettingsProtoUpdate = var2;
                    var2 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.manageExpiringCustomStatus;
                        var0 = var0.bind(var1)();
                        var0 = var1.manageExpiringStatus;
                        var0 = var0.bind(var1)();
                        var0 = var1.lazilyMigrateStatusCreatedAt;
                        var0 = var0.bind(var1)();
                        var0 = var1.manageExpiringFocusMode;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleCommonUpdates = var2;
                    var2 = function() { // Environment: var1
                        _fun113259: for (var _fun113259_ip = 0;;) switch (_fun113259_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var0 = _closure1_slot2;
                                var4 = 8;
                                var2 = var0[var4];
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var3 = var2.CustomStatusSetting;
                                var2 = var3.getSetting;
                                var3 = var2.bind(var3)();
                                var5 = null;
                                if (!(var5 != var3)) {
                                    _fun113259_ip = 286;
                                    continue _fun113259
                                }
                            case 50:
                                var2 = var3.expiresAtMs;
                                if (!(var5 != var2)) {
                                    _fun113259_ip = 76;
                                    continue _fun113259
                                }
                            case 60:
                                var6 = var3.expiresAtMs;
                                var2 = '0';
                                if (!(var2 === var6)) {
                                    _fun113259_ip = 106;
                                    continue _fun113259
                                }
                            case 76:
                                var2 = _closure1_slot13;
                                if (!(var5 != var2)) {
                                    _fun113259_ip = 300;
                                    continue _fun113259
                                }
                            case 87:
                                var5 = _closure1_slot13;
                                var2 = var5.stop;
                                var2 = var2.bind(var5)();
                                _fun113259_ip = 300;
                                continue _fun113259;
                            case 106:
                                var2 = global;
                                var6 = var2.Date;
                                var5 = var2.Number;
                                var3 = var3.expiresAtMs;
                                var9 = var5.bind(var0)(var3);
                                var5 = var6.prototype;
                                var5 = Object.create(var5, {
                                    constructor: {
                                        value: var6
                                    }
                                });
                                var10 = var5;
                                var3 = new var10[var6](var9, var8);
                                var5 = var3 instanceof Object ? var3 : var5;
                                var3 = var5.getTime;
                                var3 = var3.bind(var5)();
                                var2 = var2.Date;
                                var5 = var2.prototype;
                                var5 = Object.create(var5, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var10 = var5;
                                var2 = new var10[var2](var9);
                                var5 = var2 instanceof Object ? var2 : var5;
                                var2 = var5.getTime;
                                var2 = var2.bind(var5)();
                                var6 = var3 - var2;
                                var2 = 0;
                                if (!(!(var6 > var2))) {
                                    _fun113259_ip = 257;
                                    continue _fun113259
                                }
                            case 207:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var2 = var2[var4];
                                var2 = var3.bind(var0)(var2);
                                var3 = var2.CustomStatusSetting;
                                var2 = var3.updateSetting;
                                var2 = var2.bind(var3)(var0);
                                var3 = _closure1_slot13;
                                var2 = var3.stop;
                                var2 = var2.bind(var3)();
                                _fun113259_ip = 300;
                                continue _fun113259;
                            case 257:
                                var5 = _closure1_slot13;
                                var4 = var5.start;
                                var3 = function() { // Environment: var2
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 8;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    var2 = var1.CustomStatusSetting;
                                    var1 = var2.updateSetting;
                                    var1 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var2 = true;
                                var2 = var4.bind(var5)(var6, var3, var2);
                                _fun113259_ip = 300;
                                continue _fun113259;
                            case 286:
                                var2 = _closure1_slot13;
                                var1 = var2.stop;
                                var1 = var1.bind(var2)();
                            case 300:
                                return var0;
                        }
                    };
                    var0.manageExpiringCustomStatus = var2;
                    var2 = function() { // Environment: var1
                        _fun113261: for (var _fun113261_ip = 0;;) switch (_fun113261_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 8;
                                var2 = var2[var0];
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var3 = var2.StatusExpiresAtSetting;
                                var2 = var3.getSetting;
                                var4 = var2.bind(var3)();
                                var3 = null;
                                if (!(var3 != var4)) {
                                    _fun113261_ip = 85;
                                    continue _fun113261
                                }
                            case 47:
                                var2 = '0';
                                if (!(var2 !== var4)) {
                                    _fun113261_ip = 85;
                                    continue _fun113261
                                }
                            case 57:
                                var5 = _closure1_slot8;
                                var2 = var5.getStatus;
                                var5 = var2.bind(var5)();
                                var2 = _closure1_slot10;
                                var2 = var2.ONLINE;
                                if (!(var5 === var2)) {
                                    _fun113261_ip = 115;
                                    continue _fun113261
                                }
                            case 85:
                                var2 = _closure1_slot11;
                                if (!(var3 != var2)) {
                                    _fun113261_ip = 323;
                                    continue _fun113261
                                }
                            case 96:
                                var3 = _closure1_slot11;
                                var2 = var3.stop;
                                var2 = var2.bind(var3)();
                                _fun113261_ip = 323;
                                continue _fun113261;
                            case 115:
                                var2 = global;
                                var5 = var2.Date;
                                var3 = var2.Number;
                                var10 = var3.bind(var0)(var4);
                                var4 = var5.prototype;
                                var4 = Object.create(var4, {
                                    constructor: {
                                        value: var5
                                    }
                                });
                                var11 = var4;
                                var3 = new var11[var5](var10, var9);
                                var4 = var3 instanceof Object ? var3 : var4;
                                var3 = var4.getTime;
                                var3 = var3.bind(var4)();
                                var2 = var2.Date;
                                var4 = var2.prototype;
                                var4 = Object.create(var4, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var11 = var4;
                                var2 = new var11[var2](var10);
                                var4 = var2 instanceof Object ? var2 : var4;
                                var2 = var4.getTime;
                                var2 = var2.bind(var4)();
                                var5 = var3 - var2;
                                var2 = 0;
                                if (!(!(var5 > var2))) {
                                    _fun113261_ip = 296;
                                    continue _fun113261
                                }
                            case 210:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 9;
                                var2 = var4[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = {};
                                var4 = _closure1_slot10;
                                var4 = var4.ONLINE;
                                var2.nextStatus = var4;
                                var4 = {};
                                var6 = {};
                                var7 = _closure1_slot9;
                                var7 = var7.CUSTOM_STATUS_MANAGER;
                                var6.object = var7;
                                var4.location = var6;
                                var2.analyticsContext = var4;
                                var2 = var3.bind(var0)(var2);
                                var3 = _closure1_slot11;
                                var2 = var3.stop;
                                var2 = var2.bind(var3)();
                                _fun113261_ip = 323;
                                continue _fun113261;
                            case 296:
                                var4 = _closure1_slot11;
                                var3 = var4.start;
                                var2 = function() { // Environment: var1
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 9;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = {};
                                    var3 = _closure1_slot10;
                                    var3 = var3.ONLINE;
                                    var1.nextStatus = var3;
                                    var3 = {};
                                    var4 = {};
                                    var5 = _closure1_slot9;
                                    var5 = var5.CUSTOM_STATUS_MANAGER;
                                    var4.object = var5;
                                    var3.location = var4;
                                    var1.analyticsContext = var3;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var1 = true;
                                var1 = var3.bind(var4)(var5, var2, var1);
                            case 323:
                                return var0;
                        }
                    };
                    var0.manageExpiringStatus = var2;
                    var2 = function() { // Environment: var1
                        _fun113263: for (var _fun113263_ip = 0;;) switch (_fun113263_ip) {
                            case 0:
                                var2 = _closure1_slot8;
                                var1 = var2.getStatus;
                                var2 = var1.bind(var2)();
                                var1 = _closure1_slot10;
                                var1 = var1.ONLINE;
                                var1 = var2 !== var1;
                                if (!var1) {
                                    _fun113263_ip = 78;
                                    continue _fun113263
                                }
                            case 34:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 8;
                                var3 = var3[var2];
                                var2 = undefined;
                                var2 = var4.bind(var2)(var3);
                                var3 = var2.StatusCreatedAtSetting;
                                var2 = var3.getSetting;
                                var3 = var2.bind(var3)();
                                var2 = null;
                                var1 = var2 == var3;
                            case 78:
                                if (!var1) {
                                    _fun113263_ip = 156;
                                    continue _fun113263
                                }
                            case 81:
                                var2 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var0 = 10;
                                var3 = var5[var0];
                                var1 = undefined;
                                var3 = var2.bind(var1)(var3);
                                var4 = var3.PreloadedUserSettingsActionCreators;
                                var3 = var4.updateAsync;
                                var0 = var5[var0];
                                var0 = var2.bind(var1)(var0);
                                var0 = var0.UserSettingsDelay;
                                var2 = var0.INFREQUENT_USER_ACTION;
                                var1 = 'status';
                                var0 = function(arg0) { // Environment: var0
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 11;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    var3 = var1.UInt64Value;
                                    var2 = var3.create;
                                    var1 = {};
                                    var4 = global;
                                    var6 = var4.Date;
                                    var5 = var6.now;
                                    var6 = var5.bind(var6)();
                                    var4 = var4.HermesInternal;
                                    var5 = var4.concat;
                                    var4 = '';
                                    var4 = var5.bind(var4)(var6);
                                    var1.value = var4;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = arg0;
                                    var1.statusCreatedAtMs = var2;
                                    return var0;
                                };
                                var0 = var3.bind(var4)(var1, var0, var2);
                            case 156:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.lazilyMigrateStatusCreatedAt = var2;
                    var2 = function() { // Environment: var1
                        _fun113265: for (var _fun113265_ip = 0;;) switch (_fun113265_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 8;
                                var2 = var2[var0];
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var3 = var2.FocusModeExpiresAtSetting;
                                var2 = var3.getSetting;
                                var4 = var2.bind(var3)();
                                var3 = null;
                                if (!(var3 != var4)) {
                                    _fun113265_ip = 57;
                                    continue _fun113265
                                }
                            case 47:
                                var2 = '0';
                                if (!(var2 === var4)) {
                                    _fun113265_ip = 87;
                                    continue _fun113265
                                }
                            case 57:
                                var2 = _closure1_slot12;
                                if (!(var3 != var2)) {
                                    _fun113265_ip = 258;
                                    continue _fun113265
                                }
                            case 68:
                                var3 = _closure1_slot12;
                                var2 = var3.stop;
                                var2 = var2.bind(var3)();
                                _fun113265_ip = 258;
                                continue _fun113265;
                            case 87:
                                var2 = global;
                                var5 = var2.Date;
                                var3 = var2.Number;
                                var8 = var3.bind(var0)(var4);
                                var4 = var5.prototype;
                                var4 = Object.create(var4, {
                                    constructor: {
                                        value: var5
                                    }
                                });
                                var9 = var4;
                                var3 = new var9[var5](var8, var7);
                                var4 = var3 instanceof Object ? var3 : var4;
                                var3 = var4.getTime;
                                var3 = var3.bind(var4)();
                                var2 = var2.Date;
                                var4 = var2.prototype;
                                var4 = Object.create(var4, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var9 = var4;
                                var2 = new var9[var2](var8);
                                var4 = var2 instanceof Object ? var2 : var4;
                                var2 = var4.getTime;
                                var2 = var2.bind(var4)();
                                var5 = var3 - var2;
                                var2 = 0;
                                if (!(!(var5 > var2))) {
                                    _fun113265_ip = 231;
                                    continue _fun113265
                                }
                            case 182:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 12;
                                var2 = var4[var2];
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.setFocusMode;
                                var2 = false;
                                var2 = var3.bind(var4)(var2);
                                var3 = _closure1_slot12;
                                var2 = var3.stop;
                                var2 = var2.bind(var3)();
                                _fun113265_ip = 258;
                                continue _fun113265;
                            case 231:
                                var4 = _closure1_slot12;
                                var3 = var4.start;
                                var2 = function() { // Environment: var1
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 12;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.setFocusMode;
                                    var1 = false;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                };
                                var1 = true;
                                var1 = var3.bind(var4)(var5, var2, var1);
                            case 258:
                                return var0;
                        }
                    };
                    var0.manageExpiringFocusMode = var2;
                    var1 = function() { // Environment: var1
                        _fun113267: for (var _fun113267_ip = 0;;) switch (_fun113267_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var2 = var1.previousStatus;
                                var1 = null;
                                if (!(var1 == var2)) {
                                    _fun113267_ip = 51;
                                    continue _fun113267
                                }
                            case 19:
                                var2 = _closure3_slot0;
                                var3 = _closure1_slot8;
                                var1 = var3.getStatus;
                                var1 = var1.bind(var3)();
                                var2.previousStatus = var1;
                                _fun113267_ip = 179;
                                continue _fun113267;
                            case 51:
                                var3 = _closure1_slot8;
                                var1 = var3.getStatus;
                                var1 = var1.bind(var3)();
                                var3 = _closure3_slot0;
                                var4 = var3.previousStatus;
                                var3 = _closure1_slot10;
                                var3 = var3.DND;
                                var3 = var4 !== var3;
                                if (!var3) {
                                    _fun113267_ip = 109;
                                    continue _fun113267
                                }
                            case 95:
                                var4 = _closure1_slot10;
                                var4 = var4.DND;
                                var3 = var1 === var4;
                            case 109:
                                if (!var3) {
                                    _fun113267_ip = 169;
                                    continue _fun113267
                                }
                            case 112:
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var2 = 10;
                                var2 = var7[var2];
                                var5 = undefined;
                                var4 = var6.bind(var5)(var2);
                                var3 = var4.removeDismissedRecurringContent;
                                var2 = 13;
                                var2 = var7[var2];
                                var2 = var6.bind(var5)(var2);
                                var2 = var2.DismissibleContent;
                                var2 = var2.DO_NOT_DISTURB_REMINDER_POPOVER;
                                var2 = var3.bind(var4)(var2);
                            case 169:
                                var0 = _closure3_slot0;
                                var0.previousStatus = var1;
                            case 179:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.manageDoNotDisturbReminderPopover = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
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
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/custom_status/CustomStatusManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 5615, 660, 3587, 1348, 8680, 1355, 1342, 8679, 1358, 4256, 2]);