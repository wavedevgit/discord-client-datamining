// modules/js_watchdog/native/JSWatchdogManager.android.tsx
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
        _fun113541: for (var _fun113541_ip = 0;;) switch (_fun113541_ip) {
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
                _fun113541_ip = 76;
                continue _fun113541;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
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
    var7 = 1;
    var3 = var5[var7];
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
    var8 = var3.AppStates;
    var _closure1_slot9 = var8;
    var3 = var3.AnalyticEvents;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var9 = var6.bind(var0)(var3);
    var3 = var9.prototype;
    var8 = Object.create(var3, {
        constructor: {
            value: var9
        }
    });
    var12 = 'JSWatchdogManager';
    var13 = var8;
    var3 = new var13[var9](var12, var11);
    var3 = var3 instanceof Object ? var3 : var8;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Millis;
    var3 = var3.HALF_SECOND;
    var3 = var7 * var3;
    var _closure1_slot12 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function(arg0) { // Original name: JSWatchdogManager, environment: var5
            _fun113545: for (var _fun113545_ip = 0;;) switch (_fun113545_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot4;
                    var1 = _closure2_slot3;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var1);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun113545_ip = 86;
                        continue _fun113545
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun113545_ip = 120;
                    continue _fun113545;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var1.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var1 = true;
                    var0._enabled = var1;
                    var3 = null;
                    var0._timeoutId = var3;
                    var4 = 3;
                    var0._analyticsReportsRemaining = var4;
                    var0._cachedSession = var3;
                    var0._lastSessionId = var3;
                    var0._pingCompleted = var1;
                    var1 = {};
                    var3 = function(arg0) { // Original name: APP_STATE_UPDATE, environment: var2
                        _fun113546: for (var _fun113546_ip = 0;;) switch (_fun113546_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 9;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var3 = var1.JSWatchdogExperiment;
                                var2 = var3.getConfig;
                                var1 = {};
                                var4 = 'APP_STATE_UPDATE';
                                var1.location = var4;
                                var1 = var2.bind(var3)(var1);
                                var1 = var1.enabled;
                                if (!var1) {
                                    _fun113546_ip = 81;
                                    continue _fun113546
                                }
                            case 60:
                                var3 = _closure3_slot0;
                                var2 = var3.handleAppStateUpdate;
                                var1 = arg0;
                                var1 = var2.bind(var3)(var1);
                            case 81:
                                return var0;
                        }
                    };
                    var1.APP_STATE_UPDATE = var3;
                    var2 = function() { // Original name: CONNECTION_OPEN_SUPPLEMENTAL, environment: var2
                        _fun113547: for (var _fun113547_ip = 0;;) switch (_fun113547_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 9;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var3 = var1.JSWatchdogExperiment;
                                var2 = var3.getConfig;
                                var1 = {};
                                var4 = 'CONNECTION_OPEN_SUPPLEMENTAL';
                                var1.location = var4;
                                var1 = var2.bind(var3)(var1);
                                var1 = var1.enabled;
                                if (!var1) {
                                    _fun113547_ip = 77;
                                    continue _fun113547
                                }
                            case 60:
                                var2 = _closure3_slot0;
                                var1 = var2.handleConnectionOpenSupplemental;
                                var1 = var1.bind(var2)();
                            case 77:
                                return var0;
                        }
                    };
                    var1.CONNECTION_OPEN_SUPPLEMENTAL = var2;
                    var0.actions = var1;
                    return var0;
            }
        };
        var _closure2_slot3 = var3;
        var1 = _closure1_slot8;
        var2 = undefined;
        var0 = arg0;
        var0 = var1.bind(var2)(var3, var0);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'handleAppStateUpdate';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun113548: for (var _fun113548_ip = 0;;) switch (_fun113548_ip) {
                case 0:
                    var1 = this;
                    var0 = arg0;
                    var2 = var0.state;
                    var0 = _closure1_slot9;
                    var0 = var0.ACTIVE;
                    if (!(var2 !== var0)) {
                        _fun113548_ip = 40;
                        continue _fun113548
                    }
                case 28:
                    var0 = var1.stopWatchdog;
                    var0 = var0.bind(var1)();
                    _fun113548_ip = 50;
                    continue _fun113548;
                case 40:
                    var0 = var1.startWatchdog;
                    var0 = var0.bind(var1)();
                case 50:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var7 = 'handleConnectionOpenSupplemental';
        var4.key = var7;
        var7 = function() { // Original name: value, environment: var5
            var0 = this;
            var _closure3_slot0 = var0;
            var0 = global;
            var3 = var0.setTimeout;
            var0 = undefined;
            var2 = function() { // Environment: var1
                var1 = _closure3_slot0;
                var0 = var1.startWatchdog;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var1 = 0;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var4.value = var7;
        var0[1] = var4;
        var4 = {};
        var7 = 'ping';
        var4.key = var7;
        var7 = _closure1_slot3;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun113552: for (var _fun113552_ip = 0;;) switch (_fun113552_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[0];
                        var4 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun113552_ip = 537;
                            continue _fun113552
                        }
                    case 18:
                        var _closure4_slot0 = var4;
                        var2 = undefined;
                        if (!(var1 === var2)) {
                            _fun113552_ip = 30;
                            continue _fun113552
                        }
                    case 28:
                        var1 = false;
                    case 30:
                        var9 = var1;
                        var8 = undefined;
                        var12 = undefined;
                        SaveGenerator(address = 41);
                    case 39:
                        return var2;
                    case 41:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun113552_ip = 534;
                            continue _fun113552
                        }
                    case 50:
                        var15 = false;
                        var4._pingCompleted = var15;
                    case 58: // try_start_0 // try_start_1
                        var3 = var4.getCurrentSessionId;
                        var3 = var3.bind(var4)();
                        SaveGenerator(address = 72);
                    case 70:
                        return var3;
                    case 72:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun113552_ip = 464;
                            continue _fun113552
                        }
                    case 81:
                        var8 = var3;
                        var10 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var11 = 10;
                        var5 = var5[var11];
                        var5 = var10.bind(var2)(var5);
                        var10 = null;
                        var13 = var10 == var5;
                        var5 = undefined;
                        if (var13) {
                            _fun113552_ip = 173;
                            continue _fun113552
                        }
                    case 118:
                        var14 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var13 = var13[var11];
                        var17 = var14.bind(var2)(var13);
                        var16 = var17.ping;
                        var13 = global;
                        var14 = var13.Date;
                        var13 = var14.now;
                        var21 = var13.bind(var14)();
                        var20 = var8;
                        var19 = var9;
                        var22 = var17;
                        var18 = false;
                        var5 = var22[var16](var21, var20, var19, var18, var17);
                    case 173:
                        SaveGenerator(address = 177);
                    case 175:
                        return var5;
                    case 177:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 9);
                        if (var9) {
                            _fun113552_ip = 453;
                            continue _fun113552
                        }
                    case 186:
                        if (!var5) {
                            _fun113552_ip = 411;
                            continue _fun113552
                        }
                    case 192:
                        var13 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var9 = var9[var11];
                        var9 = var13.bind(var2)(var9);
                        var13 = var10 == var9;
                        var9 = undefined;
                        if (var13) {
                            _fun113552_ip = 245;
                            continue _fun113552
                        }
                    case 218:
                        var14 = _closure1_slot1;
                        var13 = _closure1_slot2;
                        var13 = var13[var11];
                        var14 = var14.bind(var2)(var13);
                        var13 = var14.checkForStallReport;
                        var9 = var13.bind(var14)();
                    case 245:
                        var12 = var9;
                        if (!(var10 != var9)) {
                            _fun113552_ip = 411;
                            continue _fun113552
                        }
                    case 255:
                        var13 = var4._lastSessionId;
                        var9 = var8;
                        if (!(var13 !== var9)) {
                            _fun113552_ip = 286;
                            continue _fun113552
                        }
                    case 268:
                        var9 = var8;
                        var4._lastSessionId = var9;
                        var9 = 3;
                        var4._analyticsReportsRemaining = var9;
                    case 286:
                        var9 = var4._analyticsReportsRemaining;
                        var13 = parseFloat(var9);
                        var9 = var13 - 1;
                        var4._analyticsReportsRemaining = var9;
                        var9 = 0;
                        if (!(var13 > var9)) {
                            _fun113552_ip = 337;
                            continue _fun113552
                        }
                    case 310:
                        var14 = var4.reportStall;
                        var21 = var12;
                        var20 = var8;
                        var18 = var4._analyticsReportsRemaining;
                        var22 = var4;
                        var19 = false;
                        var8 = var22[var14](var21, var20, var19, var18, var17);
                    case 337:
                        var8 = var4._analyticsReportsRemaining;
                        if (!(var9 === var8)) {
                            _fun113552_ip = 411;
                            continue _fun113552
                        }
                    case 347:
                        var8 = var4.stopWatchdog;
                        var8 = var8.bind(var4)();
                        var12 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var11];
                        var8 = var12.bind(var2)(var8);
                        var8 = var10 == var8;
                        var9 = var8;
                        if (var8) {
                            _fun113552_ip = 411;
                            continue _fun113552
                        }
                    case 384:
                        var10 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var11];
                        var10 = var10.bind(var2)(var8);
                        var8 = var10.disable;
                        var9 = var8.bind(var10)();
                    case 411:
                        var8 = var4._enabled;
                        if (!var8) {
                            _fun113552_ip = 451;
                            continue _fun113552
                        }
                    case 420:
                        var8 = global;
                        var8 = var8.setTimeout;
                        var7 = _closure1_slot12;
                        var6 = function() { // Environment: var6
                            var1 = _closure4_slot0;
                            var0 = var1.ping;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var6 = var8.bind(var2)(var6, var7);
                        var4._timeoutId = var6;
                    case 451: // try_end0
                        _fun113552_ip = 511;
                        continue _fun113552;
                    case 453: // try_end1
                        var6 = true;
                        var4._pingCompleted = var6;
                        return var5;
                    case 464:
                        var5 = true;
                        var4._pingCompleted = var5;
                        return var3;
                    case 475: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var3 = 11;
                        var3 = var7[var3];
                        var5 = var5.bind(var2)(var3);
                        var3 = var5.captureException;
                        var3 = var3.bind(var5)(var6);
                    case 511: // try_end2
                        var3 = true;
                        var4._pingCompleted = var3;
                        return var2;
                    case 522: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 2);
                        var3 = true;
                        var4._pingCompleted = var3;
                        throw var2;
                    case 534:
                        return var1;
                    case 537:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot2 = var6;
        var6 = function() { // Original name: ping, environment: var5
            var0 = undefined;
            var3 = _closure2_slot2;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'startWatchdog';
        var4.key = var6;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun113556: for (var _fun113556_ip = 0;;) switch (_fun113556_ip) {
                    case 0:
                        StartGenerator();
                        var4 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun113556_ip = 249;
                            continue _fun113556
                        }
                    case 13:
                        var1 = var4._timeoutId;
                        var2 = null;
                        if (!(var2 == var1)) {
                            _fun113556_ip = 241;
                            continue _fun113556
                        }
                    case 28:
                        var3 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var9 = 10;
                        var1 = var1[var9];
                        var8 = undefined;
                        var1 = var3.bind(var8)(var1);
                        if (!(var2 != var1)) {
                            _fun113556_ip = 241;
                            continue _fun113556
                        }
                    case 60:
                        var1 = var4.getCurrentSessionId;
                        var1 = var1.bind(var4)();
                        SaveGenerator(address = 74);
                    case 72:
                        return var1;
                    case 74:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun113556_ip = 246;
                            continue _fun113556
                        }
                    case 83:
                        var3 = var4._lastSessionId;
                        if (!(var3 === var1)) {
                            _fun113556_ip = 108;
                            continue _fun113556
                        }
                    case 93:
                        var6 = var4._analyticsReportsRemaining;
                        var3 = 0;
                        if (!(var3 !== var6)) {
                            _fun113556_ip = 241;
                            continue _fun113556
                        }
                    case 108:
                        var7 = _closure1_slot11;
                        var6 = var7.info;
                        var3 = 'startWatchdog()';
                        var3 = var6.bind(var7)(var3);
                        var3 = true;
                        var4._enabled = var3;
                        var6 = var4._pingCompleted;
                        if (!var6) {
                            _fun113556_ip = 230;
                            continue _fun113556
                        }
                    case 146:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var6 = var6[var9];
                        var6 = var7.bind(var8)(var6);
                        var7 = var2 == var6;
                        var6 = undefined;
                        if (var7) {
                            _fun113556_ip = 199;
                            continue _fun113556
                        }
                    case 172:
                        var7 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var9];
                        var7 = var7.bind(var8)(var5);
                        var5 = var7.checkForStallReport;
                        var6 = var5.bind(var7)();
                    case 199:
                        if (!(var2 != var6)) {
                            _fun113556_ip = 230;
                            continue _fun113556
                        }
                    case 203:
                        var5 = var4.reportStall;
                        var10 = -1;
                        var14 = var4;
                        var13 = var6;
                        var12 = var1;
                        var11 = true;
                        var2 = var14[var5](var13, var12, var11, var10, var9);
                    case 230:
                        var2 = var4.ping;
                        var2 = var2.bind(var4)(var3);
                    case 241:
                        var2 = undefined;
                        return var2;
                    case 246:
                        return var1;
                    case 249:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot1 = var6;
        var6 = function() { // Original name: startWatchdog, environment: var5
            var0 = undefined;
            var3 = _closure2_slot1;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'stopWatchdog';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = this;
            var3 = _closure1_slot11;
            var1 = var3.info;
            var0 = 'stopWatchdog()';
            var0 = var1.bind(var3)(var0);
            var0 = false;
            var2._enabled = var0;
            var0 = global;
            var3 = var0.clearTimeout;
            var1 = var2._timeoutId;
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var1 = null;
            var2._timeoutId = var1;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'reportStall';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var5
            _fun113559: for (var _fun113559_ip = 0;;) switch (_fun113559_ip) {
                case 0:
                    var5 = arg0;
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var0 = 12;
                    var1 = var8[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot10;
                    var2 = var1.APP_JS_STALLED;
                    var1 = {};
                    var7 = _closure1_slot0;
                    var6 = 13;
                    var6 = var8[var6];
                    var7 = var7.bind(var0)(var6);
                    var6 = var7.getDeviceMetadata;
                    var10 = var6.bind(var7)();
                    var11 = var1;
                    var6 = copyDataProperties(var11, var10);
                    var7 = 1;
                    var6 = 'version';
                    var1[var6] = var7;
                    var7 = var5.stallTime;
                    var6 = 'stall_time';
                    var1[var6] = var7;
                    var7 = arg2;
                    var6 = 'is_previous';
                    var1[var6] = var7;
                    var7 = arg3;
                    var6 = 'reports_remaining';
                    var1[var6] = var7;
                    var9 = var5.sessionId;
                    var6 = null;
                    var8 = arg1;
                    var7 = null;
                    if (!(var9 !== var8)) {
                        _fun113559_ip = 160;
                        continue _fun113559
                    }
                case 154:
                    var7 = var5.sessionId;
                case 160:
                    var5 = 'stall_session_id';
                    var1[var5] = var7;
                    var5 = 'trace';
                    var1[var5] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getCurrentSessionId';
        var4.key = var6;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun113561: for (var _fun113561_ip = 0;;) switch (_fun113561_ip) {
                    case 0:
                        StartGenerator();
                        var3 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun113561_ip = 171;
                            continue _fun113561
                        }
                    case 13:
                        var1 = var3._cachedSession;
                        var2 = null;
                        var1 = var2 == var1;
                        if (var1) {
                            _fun113561_ip = 70;
                            continue _fun113561
                        }
                    case 28:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 14;
                        var5 = var5[var4];
                        var4 = undefined;
                        var6 = var6.bind(var4)(var5);
                        var5 = var6.isSessionExpired;
                        var4 = var3._cachedSession;
                        var1 = var5.bind(var6)(var4);
                    case 70:
                        if (!var1) {
                            _fun113561_ip = 144;
                            continue _fun113561
                        }
                    case 73:
                        var6 = _closure1_slot11;
                        var5 = var6.log;
                        var4 = 'Refreshing session...';
                        var4 = var5.bind(var6)(var4);
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 15;
                        var4 = var4[var1];
                        var1 = undefined;
                        var4 = var5.bind(var1)(var4);
                        var1 = var4.getSession;
                        var1 = var1.bind(var4)();
                        SaveGenerator(address = 132);
                    case 130:
                        return var1;
                    case 132:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun113561_ip = 168;
                            continue _fun113561
                        }
                    case 138:
                        var3._cachedSession = var1;
                    case 144:
                        var3 = var3._cachedSession;
                        var4 = var2 == var3;
                        var2 = undefined;
                        if (var4) {
                            _fun113561_ip = 165;
                            continue _fun113561
                        }
                    case 159:
                        var2 = var3.uuid;
                    case 165:
                        return var2;
                    case 168:
                        return var1;
                    case 171:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot0 = var6;
        var5 = function() { // Original name: getCurrentSessionId, environment: var5
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
        var0[6] = var4;
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
    var13 = var3;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 17;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/js_watchdog/native/JSWatchdogManager.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 18, 660, 3, 667, 14521, 14522, 1207, 795, 4328, 4326, 4278, 4263, 2]);