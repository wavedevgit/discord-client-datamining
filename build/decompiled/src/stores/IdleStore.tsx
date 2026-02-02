// stores/IdleStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun38554: for (var _fun38554_ip = 0;;) switch (_fun38554_ip) {
        case 0:
            var4 = require;
            var6 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var6;
            var _closure1_slot2 = var5;
            var0 = function() {
                _fun38555: for (var _fun38555_ip = 0;;) switch (_fun38555_ip) {
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
                        _fun38555_ip = 74;
                        continue _fun38555;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() {
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot19 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot19 = var0;
            var0 = function() {
                _fun38558: for (var _fun38558_ip = 0;;) switch (_fun38558_ip) {
                    case 0:
                        var0 = _closure1_slot16;
                        if (var0) {
                            _fun38558_ip = 14;
                            continue _fun38558
                        }
                    case 10:
                        var0 = _closure1_slot17;
                    case 14:
                        if (var0) {
                            _fun38558_ip = 59;
                            continue _fun38558
                        }
                    case 17:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 8;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var1 = var3.isAndroid;
                        var1 = var1.bind(var3)();
                        if (!var1) {
                            _fun38558_ip = 56;
                            continue _fun38558
                        }
                    case 52:
                        var1 = _closure1_slot18;
                    case 56:
                        var0 = var1;
                    case 59:
                        return var0;
                }
            };
            var _closure1_slot20 = var0;
            var10 = function() {
                _fun38559: for (var _fun38559_ip = 0;;) switch (_fun38559_ip) {
                    case 0:
                        var2 = global;
                        var1 = var2.Date;
                        var0 = var1.now;
                        var3 = var0.bind(var1)();
                        var0 = _closure1_slot13;
                        var3 = var3 - var0;
                        var0 = _closure1_slot9;
                        if (!(!(var3 > var0))) {
                            _fun38559_ip = 102;
                            continue _fun38559
                        }
                    case 36:
                        var0 = _closure1_slot20;
                        var4 = undefined;
                        var0 = var0.bind(var4)();
                        if (var0) {
                            _fun38559_ip = 102;
                            continue _fun38559
                        }
                    case 49:
                        var0 = _closure1_slot14;
                        if (!var0) {
                            _fun38559_ip = 166;
                            continue _fun38559
                        }
                    case 56:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var0 = 11;
                        var0 = var5[var0];
                        var4 = var3.bind(var4)(var0);
                        var3 = var4.dispatch;
                        var0 = {
                            'type': 'IDLE',
                            'idle': false
                        };
                        var0 = var3.bind(var4)(var0);
                        _fun38559_ip = 166;
                        continue _fun38559;
                    case 102:
                        var0 = _closure1_slot14;
                        if (var0) {
                            _fun38559_ip = 166;
                            continue _fun38559
                        }
                    case 109:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 11;
                        var3 = var3[var0];
                        var0 = undefined;
                        var4 = var4.bind(var0)(var3);
                        var3 = var4.dispatch;
                        var0 = {
                            'type': 'IDLE',
                            'idle': true
                        };
                        var5 = _closure1_slot13;
                        var0.idleSince = var5;
                        var0 = var3.bind(var4)(var0);
                    case 166:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 9;
                        var3 = var3[var0];
                        var0 = undefined;
                        var3 = var4.bind(var0)(var3);
                        var4 = var3.AfkTimeout;
                        var3 = var4.getSetting;
                        var4 = var3.bind(var4)();
                        var3 = 0;
                        if (!(var3 !== var4)) {
                            _fun38559_ip = 374;
                            continue _fun38559
                        }
                    case 213:
                        var5 = _closure1_slot12;
                        var3 = null;
                        if (!(var3 == var5)) {
                            _fun38559_ip = 374;
                            continue _fun38559
                        }
                    case 226:
                        var5 = var2.Date;
                        var3 = var5.now;
                        var5 = var3.bind(var5)();
                        var3 = _closure1_slot13;
                        var3 = var5 - var3;
                        var6 = var2.Math;
                        var5 = var6.min;
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var2 = 10;
                        var2 = var8[var2];
                        var2 = var7.bind(var0)(var2);
                        var2 = var2.Millis;
                        var2 = var2.SECOND;
                        var4 = var4 * var2;
                        var2 = _closure1_slot9;
                        var2 = var5.bind(var6)(var4, var2);
                        if (!(!(var3 > var2))) {
                            _fun38559_ip = 374;
                            continue _fun38559
                        }
                    case 310:
                        var2 = _closure1_slot20;
                        var2 = var2.bind(var0)();
                        if (var2) {
                            _fun38559_ip = 374;
                            continue _fun38559
                        }
                    case 321:
                        var2 = _closure1_slot15;
                        if (!var2) {
                            _fun38559_ip = 425;
                            continue _fun38559
                        }
                    case 328:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 11;
                        var2 = var4[var2];
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.dispatch;
                        var2 = {
                            'type': 'AFK',
                            'afk': false
                        };
                        var2 = var3.bind(var4)(var2);
                        _fun38559_ip = 425;
                        continue _fun38559;
                    case 374:
                        var2 = _closure1_slot15;
                        if (var2) {
                            _fun38559_ip = 425;
                            continue _fun38559
                        }
                    case 381:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 11;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.dispatch;
                        var1 = {
                            'type': 'AFK',
                            'afk': true
                        };
                        var1 = var2.bind(var3)(var1);
                    case 425:
                        return var0;
                }
            };
            var _closure1_slot21 = var10;
            var0 = function arg0() {
                _fun38560: for (var _fun38560_ip = 0;;) switch (_fun38560_ip) {
                    case 0:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 12;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.getConfig;
                        var2 = {};
                        var5 = 'handlePowerEvent';
                        var2.location = var5;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.power_events;
                        if (var2) {
                            _fun38560_ip = 94;
                            continue _fun38560
                        }
                    case 57:
                        var2 = arg0;
                        if (!var2) {
                            _fun38560_ip = 84;
                            continue _fun38560
                        }
                    case 63:
                        var2 = global;
                        var3 = var2.Date;
                        var2 = var3.now;
                        var2 = var2.bind(var3)();
                        var _closure1_slot12 = var2;
                    case 84:
                        var2 = _closure1_slot21;
                        var2 = var2.bind(var0)();
                        _fun38560_ip = 105;
                        continue _fun38560;
                    case 94:
                        var2 = _closure1_slot23;
                        var1 = {};
                        var1 = var2.bind(var0)(var1);
                    case 105:
                        return var0;
                }
            };
            var _closure1_slot22 = var0;
            var8 = function arg0() {
                _fun38561: for (var _fun38561_ip = 0;;) switch (_fun38561_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.timestamp;
                        var2 = var0.type;
                        var3 = var0.bypassIdleUpdate;
                        var0 = 'OVERLAY_SET_NOT_IDLE';
                        var2 = var0 === var2;
                        if (!var2) {
                            _fun38561_ip = 39;
                            continue _fun38561
                        }
                    case 33:
                        var0 = null;
                        var2 = var0 != var1;
                    case 39:
                        var0 = var2;
                        if (!var0) {
                            _fun38561_ip = 56;
                            continue _fun38561
                        }
                    case 45:
                        var4 = _closure1_slot13;
                        var0 = var1 <= var4;
                    case 56:
                        if (var0) {
                            _fun38561_ip = 62;
                            continue _fun38561
                        }
                    case 59:
                        var0 = var3;
                    case 62:
                        if (var0) {
                            _fun38561_ip = 108;
                            continue _fun38561
                        }
                    case 65:
                        var3 = null;
                        _closure1_slot12 = var3;
                        if (var2) {
                            _fun38561_ip = 94;
                            continue _fun38561
                        }
                    case 77:
                        var2 = global;
                        var3 = var2.Date;
                        var2 = var3.now;
                        var1 = var2.bind(var3)();
                    case 94:
                        _closure1_slot13 = var1;
                        var1 = _closure1_slot21;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                    case 108:
                        var0 = false;
                        return var0;
                }
            };
            var _closure1_slot23 = var8;
            var7 = global;
            var11 = var7.Object;
            var9 = var11.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var9.bind(var11)(var2, var0, var1);
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
            var9 = var1.IDLE_DURATION;
            var _closure1_slot9 = var9;
            var1 = var1.AppStates;
            var _closure1_slot10 = var1;
            var1 = 7;
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            var1 = var1.SpeakingFlags;
            var _closure1_slot11 = var1;
            var9 = var7.Date;
            var1 = var9.now;
            var1 = var1.bind(var9)();
            var _closure1_slot13 = var1;
            var1 = false;
            var _closure1_slot14 = var1;
            var _closure1_slot15 = var1;
            var _closure1_slot16 = var1;
            var _closure1_slot17 = var1;
            var _closure1_slot18 = var1;
            var1 = 8;
            var1 = var5[var1];
            var1 = var4.bind(var0)(var1);
            var1 = var1.isPlatformEmbedded;
            if (!var1) {
                _fun38554_ip = 358;
                continue _fun38554
            }
        case 316:
            var1 = 13;
            var9 = var5[var1];
            var9 = var6.bind(var0)(var9);
            var11 = null;
            var12 = var11 == var9;
            var9 = undefined;
            if (var12) {
                _fun38554_ip = 354;
                continue _fun38554
            }
        case 339:
            var12 = var5[var1];
            var12 = var6.bind(var0)(var12);
            var9 = var12.remotePowerMonitor;
        case 354:
            if (!(var11 == var9)) {
                _fun38554_ip = 406;
                continue _fun38554
            }
        case 358:
            var9 = var7.setInterval;
            var7 = 10;
            var7 = var5[var7];
            var7 = var6.bind(var0)(var7);
            var7 = var7.Millis;
            var11 = var7.SECOND;
            var7 = 30;
            var7 = var7 * var11;
            var7 = var9.bind(var0)(var10, var7);
            _fun38554_ip = 569;
            continue _fun38554;
        case 406:
            var7 = function() {
                _fun38562: for (var _fun38562_ip = 0;;) switch (_fun38562_ip) {
                    case 0:
                        var3 = function arg0() {
                            _fun38563: for (var _fun38563_ip = 0;;) switch (_fun38563_ip) {
                                case 0:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var0 = 12;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var4 = var3.bind(var0)(var2);
                                    var3 = var4.getConfig;
                                    var2 = {};
                                    var5 = 'checkNativeIdle';
                                    var2.location = var5;
                                    var2 = var3.bind(var4)(var2);
                                    var2 = var2.system_wide_input;
                                    if (!var2) {
                                        _fun38563_ip = 134;
                                        continue _fun38563
                                    }
                                case 57:
                                    var3 = global;
                                    var4 = var3.Date;
                                    var2 = var4.now;
                                    var4 = var2.bind(var4)();
                                    var2 = arg0;
                                    var6 = var4 - var2;
                                    var4 = _closure1_slot12;
                                    var2 = null;
                                    var4 = var2 == var4;
                                    if (var4) {
                                        _fun38563_ip = 102;
                                        continue _fun38563
                                    }
                                case 94:
                                    var5 = _closure1_slot12;
                                    var4 = var6 > var5;
                                case 102:
                                    if (!var4) {
                                        _fun38563_ip = 134;
                                        continue _fun38563
                                    }
                                case 105:
                                    var5 = var3.Math;
                                    var4 = var5.max;
                                    var3 = _closure1_slot13;
                                    var3 = var4.bind(var5)(var6, var3);
                                    _closure1_slot13 = var3;
                                    _closure1_slot12 = var2;
                                case 134:
                                    var2 = _closure1_slot21;
                                    var2 = var2.bind(var0)();
                                    var2 = global;
                                    var3 = var2.setTimeout;
                                    var2 = _closure1_slot24;
                                    var5 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var4 = 10;
                                    var1 = var1[var4];
                                    var1 = var5.bind(var0)(var1);
                                    var1 = var1.Millis;
                                    var1 = var1.SECOND;
                                    var1 = var4 * var1;
                                    var1 = var3.bind(var0)(var2, var1);
                                    return var0;
                            }
                        };
                        var5 = _closure1_slot1;
                        var0 = _closure1_slot2;
                        var4 = 13;
                        var2 = var0[var4];
                        var0 = undefined;
                        var2 = var5.bind(var0)(var2);
                        var5 = null;
                        var6 = var5 == var2;
                        var2 = undefined;
                        if (var6) {
                            _fun38562_ip = 81;
                            continue _fun38562
                        }
                    case 43:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var4];
                        var6 = var7.bind(var0)(var6);
                        var6 = var6.remotePowerMonitor;
                        var7 = var5 == var6;
                        var2 = undefined;
                        if (var7) {
                            _fun38562_ip = 81;
                            continue _fun38562
                        }
                    case 75:
                        var2 = var6.getSystemIdleTimeMs;
                    case 81:
                        if (!(var5 != var2)) {
                            _fun38562_ip = 150;
                            continue _fun38562
                        }
                    case 85:
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var1 = var1[var4];
                        var1 = var2.bind(var0)(var1);
                        var2 = var1.remotePowerMonitor;
                        var1 = var2.getSystemIdleTimeMs;
                        var2 = var1.bind(var2)();
                        var1 = global;
                        var1 = var1.Promise;
                        var1 = var2 instanceof var1;
                        if (var1) {
                            _fun38562_ip = 140;
                            continue _fun38562
                        }
                    case 133:
                        var1 = var3.bind(var0)(var2);
                        _fun38562_ip = 150;
                        continue _fun38562;
                    case 140:
                        var1 = var2.then;
                        var1 = var1.bind(var2)(var3);
                    case 150:
                        return var0;
                }
            };
            var _closure1_slot24 = var7;
            var7 = var7.bind(var0)();
            var7 = var5[var1];
            var7 = var6.bind(var0)(var7);
            var11 = var7.remotePowerMonitor;
            var10 = var11.on;
            var9 = 'resume';
            var7 = function() { // Environment: var3
                var2 = false;
                _closure1_slot16 = var2;
                var1 = _closure1_slot22;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                return var0;
            };
            var7 = var10.bind(var11)(var9, var7);
            var7 = var5[var1];
            var7 = var6.bind(var0)(var7);
            var11 = var7.remotePowerMonitor;
            var10 = var11.on;
            var9 = 'suspend';
            var7 = function() { // Environment: var3
                var3 = true;
                _closure1_slot16 = var3;
                var2 = _closure1_slot22;
                var0 = undefined;
                var2 = var2.bind(var0)(var3);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 14;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.disconnect;
                var1 = var1.bind(var2)();
                return var0;
            };
            var7 = var10.bind(var11)(var9, var7);
            var7 = var5[var1];
            var7 = var6.bind(var0)(var7);
            var11 = var7.remotePowerMonitor;
            var10 = var11.on;
            var9 = 'lock-screen';
            var7 = function() { // Environment: var3
                var2 = true;
                _closure1_slot17 = var2;
                var1 = _closure1_slot22;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                return var0;
            };
            var7 = var10.bind(var11)(var9, var7);
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var10 = var1.remotePowerMonitor;
            var9 = var10.on;
            var7 = 'unlock-screen';
            var1 = function() { // Environment: var3
                var2 = false;
                _closure1_slot17 = var2;
                var1 = _closure1_slot22;
                var0 = undefined;
                var1 = var1.bind(var0)(var2);
                return var0;
            };
            var1 = var9.bind(var10)(var7, var1);
        case 569:
            var1 = 15;
            var1 = var5[var1];
            var9 = var6.bind(var0)(var1);
            var7 = function() { // Environment: var3
                _fun38568: for (var _fun38568_ip = 0;;) switch (_fun38568_ip) {
                    case 0:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 12;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.getConfig;
                        var2 = {};
                        var5 = 'handleGenericInput';
                        var2.location = var5;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.generic_inputs;
                        if (!var2) {
                            _fun38568_ip = 68;
                            continue _fun38568
                        }
                    case 57:
                        var2 = _closure1_slot23;
                        var1 = {};
                        var1 = var2.bind(var0)(var1);
                    case 68:
                        return var0;
                }
            };
            var1 = 500;
            var1 = var9.bind(var0)(var7, var1);
            var1 = 16;
            var1 = var5[var1];
            var1 = var6.bind(var0)(var1);
            var7 = var1.Store;
            var1 = function(arg0) { // Environment: var3
                var3 = function() {
                    _fun38570: for (var _fun38570_ip = 0;;) switch (_fun38570_ip) {
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
                            var0 = _closure1_slot19;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun38570_ip = 69;
                                continue _fun38570
                            }
                        case 51:
                            var6 = var8.apply;
                            var4 = arguments;
                            var0 = var4;
                            var0 = var6.bind(var8)(var3, var0);
                            _fun38570_ip = 105;
                            continue _fun38570;
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
                var0 = function() {
                    var2 = this;
                    var1 = var2.waitFor;
                    var0 = _closure1_slot8;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var4.value = var0;
                var0 = new Array(6);
                var0[0] = var4;
                var4 = {};
                var6 = 'isIdle';
                var4.key = var6;
                var6 = function() {
                    var0 = _closure1_slot14;
                    return var0;
                };
                var4.value = var6;
                var0[1] = var4;
                var4 = {};
                var6 = 'isAFK';
                var4.key = var6;
                var6 = function() {
                    var0 = _closure1_slot15;
                    return var0;
                };
                var4.value = var6;
                var0[2] = var4;
                var4 = {};
                var6 = 'getIdleSince';
                var4.key = var6;
                var6 = function() {
                    _fun38574: for (var _fun38574_ip = 0;;) switch (_fun38574_ip) {
                        case 0:
                            var2 = _closure1_slot14;
                            var0 = null;
                            if (!var2) {
                                _fun38574_ip = 16;
                                continue _fun38574
                            }
                        case 12:
                            var0 = _closure1_slot13;
                        case 16:
                            return var0;
                    }
                };
                var4.value = var6;
                var0[3] = var4;
                var4 = {};
                var6 = 'getSystemSuspended';
                var4.key = var6;
                var6 = function() {
                    var0 = _closure1_slot16;
                    return var0;
                };
                var4.value = var6;
                var0[4] = var4;
                var4 = {};
                var6 = 'getSystemLocked';
                var4.key = var6;
                var5 = function() {
                    var0 = _closure1_slot17;
                    return var0;
                };
                var4.value = var5;
                var0[5] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var7 = var1.bind(var0)(var7);
            var1 = 'IdleStore';
            var7.displayName = var1;
            var1 = 11;
            var1 = var5[var1];
            var15 = var6.bind(var0)(var1);
            var1 = {};
            var9 = function arg0() {
                var0 = arg0;
                var1 = var0.idle;
                _closure1_slot14 = var1;
                var0 = undefined;
                return var0;
            };
            var1.IDLE = var9;
            var9 = function arg0() {
                var0 = arg0;
                var1 = var0.afk;
                _closure1_slot15 = var1;
                var0 = undefined;
                return var0;
            };
            var1.AFK = var9;
            var9 = function arg0() {
                _fun38579: for (var _fun38579_ip = 0;;) switch (_fun38579_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = var0.userId;
                        var2 = var0.speakingFlags;
                        var1 = _closure1_slot11;
                        var1 = var1.NONE;
                        var1 = var2 !== var1;
                        if (!var1) {
                            _fun38579_ip = 52;
                            continue _fun38579
                        }
                    case 34:
                        var4 = _closure1_slot8;
                        var2 = var4.getId;
                        var2 = var2.bind(var4)();
                        var1 = var3 === var2;
                    case 52:
                        if (!var1) {
                            _fun38579_ip = 68;
                            continue _fun38579
                        }
                    case 55:
                        var2 = _closure1_slot23;
                        var1 = undefined;
                        var0 = {};
                        var0 = var2.bind(var1)(var0);
                    case 68:
                        var0 = false;
                        return var0;
                }
            };
            var1.SPEAKING = var9;
            var9 = function arg0() {
                var0 = arg0;
                var2 = var0.state;
                var1 = _closure1_slot10;
                var1 = var1.BACKGROUND;
                var1 = var2 === var1;
                _closure1_slot18 = var1;
                var1 = null;
                _closure1_slot12 = var1;
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var1 = var1.bind(var2)();
                _closure1_slot13 = var1;
                var1 = _closure1_slot21;
                var0 = undefined;
                var0 = var1.bind(var0)();
                var0 = false;
                return var0;
            };
            var1.APP_STATE_UPDATE = var9;
            var1.OVERLAY_SET_NOT_IDLE = var8;
            var1.CHANNEL_SELECT = var8;
            var1.VOICE_CHANNEL_SELECT = var8;
            var1.WINDOW_FOCUS = var8;
            var1.OVERLAY_INITIALIZE = var8;
            var1.OVERLAY_SET_INPUT_LOCKED = var8;
            var3 = function() {
                _fun38581: for (var _fun38581_ip = 0;;) switch (_fun38581_ip) {
                    case 0:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 12;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.getConfig;
                        var2 = {};
                        var5 = 'handleSettingsProtoUpdate';
                        var2.location = var5;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.settings_updates;
                        if (var2) {
                            _fun38581_ip = 61;
                            continue _fun38581
                        }
                    case 57:
                        var2 = false;
                        return var2;
                    case 61:
                        var2 = _closure1_slot23;
                        var1 = {};
                        var1 = var2.bind(var0)(var1);
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
            var16 = var3;
            var14 = var1;
            var1 = new var16[var7](var15, var14, var13);
            var1 = var1 instanceof Object ? var1 : var3;
            var3 = 17;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'stores/IdleStore.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 660, 3471, 478, 1348, 667, 806, 4196, 3035, 4197, 5651, 566, 2]);