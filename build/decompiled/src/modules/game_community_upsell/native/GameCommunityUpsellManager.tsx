// modules/game_community_upsell/native/GameCommunityUpsellManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun86476: for (var _fun86476_ip = 0;;) switch (_fun86476_ip) {
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
                _fun86476_ip = 76;
                continue _fun86476;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Consents;
    var _closure1_slot11 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun86480: for (var _fun86480_ip = 0;;) switch (_fun86480_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot3;
                    var3 = _closure2_slot1;
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot5;
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun86480_ip = 86;
                        continue _fun86480
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun86480_ip = 120;
                    continue _fun86480;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = false;
                    var0.hasChecked = var3;
                    var3 = null;
                    var0.timeout = var3;
                    var3 = {};
                    var4 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.scheduleGameDetection;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var3.POST_CONNECTION_OPEN = var4;
                    var4 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleLogout;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var3.LOGOUT = var4;
                    var0.actions = var3;
                    var3 = global;
                    var3 = var3.Map;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var14 = var4;
                    var3 = new var14[var3](var13);
                    var4 = var3 instanceof Object ? var3 : var4;
                    var3 = var4.set;
                    var2 = _closure1_slot8;
                    var1 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.scheduleGameDetection;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var0.stores = var1;
                    return var0;
            }
        };
        var _closure2_slot1 = var3;
        var1 = _closure1_slot7;
        var2 = undefined;
        var0 = arg0;
        var0 = var1.bind(var2)(var3, var0);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'handleLogout';
        var4.key = var0;
        var0 = function() {
            _fun86484: for (var _fun86484_ip = 0;;) switch (_fun86484_ip) {
                case 0:
                    var1 = this;
                    var0 = false;
                    var1.hasChecked = var0;
                    var2 = var1.timeout;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun86484_ip = 50;
                        continue _fun86484
                    }
                case 23:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1.timeout;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1.timeout = var0;
                case 50:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var7 = 'scheduleGameDetection';
        var4.key = var7;
        var7 = function() {
            _fun86485: for (var _fun86485_ip = 0;;) switch (_fun86485_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var5 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var6 = 10;
                    var4 = var0[var6];
                    var0 = undefined;
                    var4 = var5.bind(var0)(var4);
                    var7 = var4.debugLogger;
                    var5 = var7.log;
                    var4 = 'scheduleGameDetection called';
                    var4 = var5.bind(var7)(var4);
                    var5 = _closure1_slot10;
                    var4 = var5.isDebugMode;
                    var4 = var4.bind(var5)();
                    if (var4) {
                        _fun86485_ip = 126;
                        continue _fun86485
                    }
                case 73:
                    var4 = var2.hasChecked;
                    if (!var4) {
                        _fun86485_ip = 126;
                        continue _fun86485
                    }
                case 82:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var0)(var4);
                    var7 = var4.debugLogger;
                    var5 = var7.log;
                    var4 = 'Already checked, skipping (debugMode: false)';
                    var4 = var5.bind(var7)(var4);
                    _fun86485_ip = 560;
                    continue _fun86485;
                case 126:
                    var4 = _closure1_slot8;
                    var4 = var4.hasLoadedExperiments;
                    if (var4) {
                        _fun86485_ip = 183;
                        continue _fun86485
                    }
                case 139:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var0)(var4);
                    var7 = var4.debugLogger;
                    var5 = var7.log;
                    var4 = 'Experiments not loaded yet, skipping';
                    var4 = var5.bind(var7)(var4);
                    _fun86485_ip = 560;
                    continue _fun86485;
                case 183:
                    var7 = _closure1_slot9;
                    var5 = var7.hasConsented;
                    var4 = _closure1_slot11;
                    var4 = var4.PERSONALIZATION;
                    var4 = var5.bind(var7)(var4);
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    if (var4) {
                        _fun86485_ip = 255;
                        continue _fun86485
                    }
                case 219:
                    var4 = var5[var6];
                    var4 = var7.bind(var0)(var4);
                    var9 = var4.debugLogger;
                    var8 = var9.log;
                    var4 = 'No personalization consent, skipping';
                    var4 = var8.bind(var9)(var4);
                    _fun86485_ip = 560;
                    continue _fun86485;
                case 255:
                    var4 = 11;
                    var4 = var5[var4];
                    var4 = var7.bind(var0)(var4);
                    var9 = var4.GameCommunityUpsellExperiment;
                    var8 = var9.getConfig;
                    var4 = {};
                    var10 = 'GameCommunityUpsellManager';
                    var4.location = var10;
                    var4 = var8.bind(var9)(var4);
                    var5 = var5[var6];
                    var5 = var7.bind(var0)(var5);
                    var8 = var5.debugLogger;
                    var7 = var8.log;
                    var5 = 'Experiment config:';
                    var5 = var7.bind(var8)(var5, var4);
                    var7 = _closure1_slot10;
                    var5 = var7.isDebugMode;
                    var5 = var5.bind(var7)();
                    if (var5) {
                        _fun86485_ip = 397;
                        continue _fun86485
                    }
                case 345:
                    var4 = var4.enabled;
                    if (var4) {
                        _fun86485_ip = 397;
                        continue _fun86485
                    }
                case 353:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var6];
                    var4 = var5.bind(var0)(var4);
                    var7 = var4.debugLogger;
                    var5 = var7.log;
                    var4 = 'Not in experiment, skipping';
                    var4 = var5.bind(var7)(var4);
                    _fun86485_ip = 560;
                    continue _fun86485;
                case 397:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var6 = var4[var6];
                    var6 = var5.bind(var0)(var6);
                    var8 = var6.debugLogger;
                    var7 = var8.log;
                    var6 = 12;
                    var4 = var4[var6];
                    var4 = var5.bind(var0)(var4);
                    var11 = var4.DETECTION_DELAY_MS;
                    var4 = global;
                    var5 = var4.HermesInternal;
                    var10 = var5.concat;
                    var9 = 'Scheduling detection in ';
                    var5 = 'ms';
                    var5 = var10.bind(var9)(var11, var5);
                    var5 = var7.bind(var8)(var5);
                    var7 = var2.timeout;
                    var5 = null;
                    if (!(var5 != var7)) {
                        _fun86485_ip = 512;
                        continue _fun86485
                    }
                case 489:
                    var8 = var4.clearTimeout;
                    var7 = var2.timeout;
                    var7 = var8.bind(var0)(var7);
                    var2.timeout = var5;
                case 512:
                    var4 = var4.setTimeout;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var6];
                    var3 = var5.bind(var0)(var3);
                    var3 = var3.DETECTION_DELAY_MS;
                    var1 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.detectAndShowUpsell;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var4.bind(var0)(var1, var3);
                    var2.timeout = var1;
                case 560:
                    return var0;
            }
        };
        var4.value = var7;
        var0[1] = var4;
        var4 = {};
        var7 = 'forceShowUpsell';
        var4.key = var7;
        var7 = function() {
            _fun86487: for (var _fun86487_ip = 0;;) switch (_fun86487_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.timeout;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun86487_ip = 42;
                        continue _fun86487
                    }
                case 15:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1.timeout;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1.timeout = var0;
                case 42:
                    var0 = false;
                    var1.hasChecked = var0;
                    var0 = var1.detectAndShowUpsell;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[2] = var4;
        var4 = {};
        var7 = 'detectAndShowUpsell';
        var4.key = var7;
        var7 = _closure1_slot2;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun86489: for (var _fun86489_ip = 0;;) switch (_fun86489_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun86489_ip = 399;
                            continue _fun86489
                        }
                    case 10:
                        var1 = undefined;
                        var6 = undefined;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var4 = 10;
                        var3 = var3[var4];
                        var3 = var5.bind(var1)(var3);
                        var7 = var3.debugLogger;
                        var5 = var7.log;
                        var3 = 'detectAndShowUpsell called';
                        var3 = var5.bind(var7)(var3);
                    case 59: // try_start_0
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var3 = 13;
                        var3 = var7[var3];
                        var5 = var5.bind(var1)(var3);
                        var3 = var5.getTopPriorityGame;
                        var3 = var3.bind(var5)();
                        SaveGenerator(address = 93);
                    case 91:
                        return var3;
                    case 93:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun86489_ip = 351;
                            continue _fun86489
                        }
                    case 102:
                        var6 = var3;
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var5 = var5[var4];
                        var5 = var7.bind(var1)(var5);
                        var8 = var5.debugLogger;
                        var7 = var8.log;
                        var5 = 'Top priority game:';
                        var5 = var7.bind(var8)(var5, var3);
                        var5 = null;
                        if (!(var5 == var3)) {
                            _fun86489_ip = 195;
                            continue _fun86489
                        }
                    case 151:
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var5 = var5[var4];
                        var5 = var7.bind(var1)(var5);
                        var8 = var5.debugLogger;
                        var7 = var8.log;
                        var5 = 'No game detected';
                        var5 = var7.bind(var8)(var5);
                        _fun86489_ip = 346;
                        continue _fun86489;
                    case 195:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var5 = var9[var4];
                        var5 = var8.bind(var1)(var5);
                        var12 = var5.debugLogger;
                        var11 = var12.log;
                        var5 = var6;
                        var10 = var5.guildId;
                        var7 = 'Fetching guild data for:';
                        var7 = var11.bind(var12)(var7, var10);
                        var7 = 14;
                        var7 = var9[var7];
                        var8 = var8.bind(var1)(var7);
                        var7 = var8.fetchGuildForPopout;
                        var5 = var5.guildId;
                        var5 = var7.bind(var8)(var5);
                        SaveGenerator(address = 275);
                    case 273:
                        return var5;
                    case 275:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 7);
                        if (var7) {
                            _fun86489_ip = 348;
                            continue _fun86489
                        }
                    case 281:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var7 = var7[var4];
                        var7 = var8.bind(var1)(var7);
                        var9 = var7.debugLogger;
                        var8 = var9.log;
                        var7 = 'Setting current game in store';
                        var7 = var8.bind(var9)(var7);
                        var8 = _closure1_slot10;
                        var7 = var8.setCurrentGame;
                        var6 = var7.bind(var8)(var6);
                        var7 = true;
                        var6 = this;
                        var6.hasChecked = var7;
                    case 346: // try_end0
                        _fun86489_ip = 396;
                        continue _fun86489;
                    case 348:
                        return var5;
                    case 351:
                        return var3;
                    case 354: // catch_target0
                        CatchBlockStart(arg_register = 5);
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var4];
                        var2 = var3.bind(var1)(var2);
                        var4 = var2.debugLogger;
                        var3 = var4.error;
                        var2 = 'Error in detectAndShowUpsell:';
                        var2 = var3.bind(var4)(var2, var5);
                    case 396:
                        return var1;
                    case 399:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot0 = var6;
        var5 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
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
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/game_community_upsell/native/GameCommunityUpsellManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 18, 1590, 4559, 11162, 660, 11161, 11166, 11164, 11163, 11167, 4299, 2]);