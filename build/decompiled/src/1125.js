// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun12308: for (var _fun12308_ip = 0;;) switch (_fun12308_ip) {
        case 0:
            var1 = exports;
            var3 = this;
            var2 = require;
            var _closure1_slot0 = var2;
            var2 = dependencyMap;
            var _closure1_slot1 = var2;
            var2 = global;
            var6 = var2.Object;
            var5 = var6.defineProperty;
            var4 = {};
            var2 = true;
            var4.value = var2;
            var2 = '__esModule';
            var2 = var5.bind(var6)(var1, var2, var4);
            var2 = var3;
            if (!var2) {
                _fun12308_ip = 66;
                continue _fun12308
            }
        case 60:
            var2 = var3.__awaiter;
        case 66:
            if (var2) {
                _fun12308_ip = 74;
                continue _fun12308
            }
        case 69:
            var2 = function(arg0, arg1, arg2, arg3) { // Environment: var0
                _fun12309: for (var _fun12309_ip = 0;;) switch (_fun12309_ip) {
                    case 0:
                        var2 = arg2;
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var1 = arg1;
                        var _closure2_slot1 = var1;
                        var _closure2_slot2 = var2;
                        var1 = arg3;
                        var _closure2_slot3 = var1;
                        if (var2) {
                            _fun12309_ip = 48;
                            continue _fun12309
                        }
                    case 33:
                        var1 = global;
                        var1 = var1.Promise;
                        _closure2_slot2 = var1;
                        var2 = var1;
                    case 48:
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var4 = function(arg0, arg1) { // Environment: var0
                            _fun12310: for (var _fun12310_ip = 0;;) switch (_fun12310_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure3_slot0 = var1;
                                    var1 = arg1;
                                    var _closure3_slot1 = var1;
                                    var1 = function(arg0) { // Original name: fulfilled, environment: var0
                                        _fun12311: for (var _fun12311_ip = 0;;) switch (_fun12311_ip) {
                                            case 0:
                                                var0 = arg0;
                                            case 3: // try_start_0
                                                var2 = _closure3_slot4;
                                                var3 = _closure2_slot3;
                                                var1 = var3.next;
                                                var1 = var1.bind(var3)(var0);
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 34: // try_end0
                                                _fun12311_ip = 52;
                                                continue _fun12311;
                                            case 36: // catch_target0
                                                CatchBlockStart(arg_register = 2);
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                            case 52:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot2 = var1;
                                    var1 = function(arg0) { // Original name: rejected, environment: var0
                                        _fun12312: for (var _fun12312_ip = 0;;) switch (_fun12312_ip) {
                                            case 0:
                                                var0 = arg0;
                                            case 3: // try_start_0
                                                var2 = _closure3_slot4;
                                                var3 = _closure2_slot3;
                                                var1 = var3.throw;
                                                var1 = var1.bind(var3)(var0);
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 35: // try_end0
                                                _fun12312_ip = 53;
                                                continue _fun12312;
                                            case 37: // catch_target0
                                                CatchBlockStart(arg_register = 2);
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                            case 53:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot3 = var1;
                                    var2 = function(arg0) { // Original name: step, environment: var0
                                        _fun12313: for (var _fun12313_ip = 0;;) switch (_fun12313_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = var0.done;
                                                if (var1) {
                                                    _fun12313_ip = 54;
                                                    continue _fun12313
                                                }
                                            case 11:
                                                var3 = var0.value;
                                                var2 = function(arg0) { // Original name: adopt, environment: var1
                                                    _fun12314: for (var _fun12314_ip = 0;;) switch (_fun12314_ip) {
                                                        case 0:
                                                            var0 = arg0;
                                                            var _closure5_slot0 = var0;
                                                            var3 = _closure2_slot2;
                                                            var3 = var0 instanceof var3;
                                                            if (var3) {
                                                                _fun12314_ip = 52;
                                                                continue _fun12314
                                                            }
                                                        case 23:
                                                            var3 = _closure2_slot2;
                                                            var2 = var3.prototype;
                                                            var2 = Object.create(var2, {
                                                                constructor: {
                                                                    value: var3
                                                                }
                                                            });
                                                            var4 = function(arg0) { // Environment: var1
                                                                var2 = _closure5_slot0;
                                                                var1 = arg0;
                                                                var0 = undefined;
                                                                var1 = var1.bind(var0)(var2);
                                                                return var0;
                                                            };
                                                            var5 = var2;
                                                            var1 = new var5[var3](var4, var3);
                                                            var0 = var1 instanceof Object ? var1 : var2;
                                                        case 52:
                                                            return var0;
                                                    }
                                                };
                                                var1 = undefined;
                                                var4 = var2.bind(var1)(var3);
                                                var3 = var4.then;
                                                var2 = _closure3_slot2;
                                                var1 = _closure3_slot3;
                                                var1 = var3.bind(var4)(var2, var1);
                                                _fun12313_ip = 73;
                                                continue _fun12313;
                                            case 54:
                                                var2 = _closure3_slot0;
                                                var1 = var0.value;
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 73:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot4 = var2;
                                    var5 = _closure2_slot3;
                                    var4 = var5.apply;
                                    var3 = _closure2_slot0;
                                    var1 = _closure2_slot1;
                                    if (var1) {
                                        _fun12310_ip = 70;
                                        continue _fun12310
                                    }
                                case 66:
                                    var1 = new Array(0);
                                case 70:
                                    var1 = var4.bind(var5)(var3, var1);
                                    _closure2_slot3 = var1;
                                    var0 = var1.next;
                                    var1 = var0.bind(var1)();
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                }
            };
        case 74:
            var _closure1_slot2 = var2;
            var2 = 'MobileReplay';
            var _closure1_slot3 = var2;
            var3 = {
                'maskAllText': true,
                'maskAllImages': true,
                'maskAllVectors': true,
                'enableExperimentalViewRenderer': false,
                'enableViewRendererV2': true,
                'enableFastViewRendering': false,
                'screenshotStrategy': 'pixelCopy'
            };
            var _closure1_slot4 = var3;
            var3 = function() { // Original name: mobileReplayIntegrationNoop, environment: var0
                var0 = {};
                var2 = _closure1_slot3;
                var0.name = var2;
                var1 = _closure1_slot4;
                var0.options = var1;
                var1 = function() { // Original name: getReplayId, environment: var1
                    var0 = null;
                    return var0;
                };
                var0.getReplayId = var1;
                return var0;
            };
            var _closure1_slot5 = var3;
            var1.MOBILE_REPLAY_INTEGRATION_NAME = var2;
            var0 = function() { // Original name: mobileReplayIntegration, environment: var0
                _fun12318: for (var _fun12318_ip = 0;;) switch (_fun12318_ip) {
                    case 0:
                        var1 = undefined;
                        var0 = undefined;
                        var2 = arguments.length;
                        var6 = 0;
                        if (!(var2 > var6)) {
                            _fun12318_ip = 23;
                            continue _fun12318
                        }
                    case 15:
                        var2 = arguments[var6];
                        if (!(var1 === var2)) {
                            _fun12318_ip = 32;
                            continue _fun12318
                        }
                    case 23:
                        var2 = _closure1_slot4;
                        _fun12318_ip = 36;
                        continue _fun12318;
                    case 32:
                        var2 = arguments[var6];
                    case 36:
                        var _closure2_slot0 = var2;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var4 = var4[var6];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.isExpoGo;
                        var4 = var4.bind(var5)();
                        if (!var4) {
                            _fun12318_ip = 144;
                            continue _fun12318
                        }
                    case 73:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var4 = 1;
                        var4 = var7[var4];
                        var4 = var5.bind(var1)(var4);
                        var7 = var4.debug;
                        var5 = var7.warn;
                        var10 = _closure1_slot3;
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var9 = var4.concat;
                        var8 = '[Sentry] ';
                        var4 = ' is not supported in Expo Go. Use EAS Build or `expo prebuild` to enable it.';
                        var4 = var9.bind(var8)(var10, var4);
                        var4 = var5.bind(var7)(var4);
                    case 144:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var4 = var4[var6];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.notMobileOs;
                        var4 = var4.bind(var5)();
                        if (!var4) {
                            _fun12318_ip = 245;
                            continue _fun12318
                        }
                    case 174:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var4 = 1;
                        var4 = var7[var4];
                        var4 = var5.bind(var1)(var4);
                        var7 = var4.debug;
                        var5 = var7.warn;
                        var10 = _closure1_slot3;
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var9 = var4.concat;
                        var8 = '[Sentry] ';
                        var4 = ' is not supported on this platform.';
                        var4 = var9.bind(var8)(var10, var4);
                        var4 = var5.bind(var7)(var4);
                    case 245:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var4 = var4[var6];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.isExpoGo;
                        var4 = var4.bind(var5)();
                        if (var4) {
                            _fun12318_ip = 437;
                            continue _fun12318
                        }
                    case 278:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var4 = var4[var6];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.notMobileOs;
                        var4 = var4.bind(var5)();
                        if (var4) {
                            _fun12318_ip = 437;
                            continue _fun12318
                        }
                    case 311:
                        var4 = global;
                        var6 = var4.Object;
                        var5 = var6.assign;
                        var9 = var4.Object;
                        var8 = var9.assign;
                        var7 = _closure1_slot4;
                        var4 = {};
                        var4 = var8.bind(var9)(var4, var7);
                        var4 = var5.bind(var6)(var4, var2);
                        var5 = var2.enableViewRendererV2;
                        var5 = var1 === var5;
                        if (!var5) {
                            _fun12318_ip = 376;
                            continue _fun12318
                        }
                    case 366:
                        var6 = var2.enableExperimentalViewRenderer;
                        var5 = var1 !== var6;
                    case 376:
                        if (!var5) {
                            _fun12318_ip = 391;
                            continue _fun12318
                        }
                    case 379:
                        var2 = var2.enableExperimentalViewRenderer;
                        var4.enableViewRendererV2 = var2;
                    case 391:
                        var2 = {};
                        var5 = _closure1_slot3;
                        var2.name = var5;
                        var5 = function(arg0) { // Original name: setup, environment: var3
                            _fun12319: for (var _fun12319_ip = 0;;) switch (_fun12319_ip) {
                                case 0:
                                    var4 = arg0;
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot1;
                                    var0 = 4;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var3 = var3.bind(var0)(var2);
                                    var2 = var3.hasHooks;
                                    var2 = var2.bind(var3)(var4);
                                    if (!var2) {
                                        _fun12319_ip = 111;
                                        continue _fun12319
                                    }
                                case 42:
                                    var5 = var4.on;
                                    var3 = 'createDsc';
                                    var2 = function(arg0) { // Environment: var2
                                        _fun12320: for (var _fun12320_ip = 0;;) switch (_fun12320_ip) {
                                            case 0:
                                                var1 = arg0;
                                                var0 = var1.replay_id;
                                                if (var0) {
                                                    _fun12320_ip = 62;
                                                    continue _fun12320
                                                }
                                            case 12:
                                                var3 = _closure1_slot0;
                                                var2 = _closure1_slot1;
                                                var0 = 2;
                                                var2 = var2[var0];
                                                var0 = undefined;
                                                var0 = var3.bind(var0)(var2);
                                                var2 = var0.NATIVE;
                                                var0 = var2.getCurrentReplayId;
                                                var0 = var0.bind(var2)();
                                                if (!var0) {
                                                    _fun12320_ip = 62;
                                                    continue _fun12320
                                                }
                                            case 56:
                                                var1.replay_id = var0;
                                            case 62:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var2 = var5.bind(var4)(var3, var2);
                                    var3 = var4.on;
                                    var2 = _closure1_slot0;
                                    var5 = _closure1_slot1;
                                    var1 = 5;
                                    var1 = var5[var1];
                                    var1 = var2.bind(var0)(var1);
                                    var2 = var1.enrichXhrBreadcrumbsForMobileReplay;
                                    var1 = 'beforeAddBreadcrumb';
                                    var1 = var3.bind(var4)(var1, var2);
                                case 111:
                                    return var0;
                            }
                        };
                        var2.setup = var5;
                        var5 = function(arg0, arg1) { // Original name: processEvent, environment: var3
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var1 = arg1;
                            var _closure3_slot1 = var1;
                            var3 = _closure1_slot2;
                            var7 = this;
                            var4 = function*() { // Environment: var0
                                var0 = function*() { // Original name: ?anon_0_, environment: var0
                                    _fun12323: for (var _fun12323_ip = 0;;) switch (_fun12323_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun12323_ip = 664;
                                                continue _fun12323
                                            }
                                        case 10:
                                            var1 = _closure3_slot0;
                                            var4 = var1.exception;
                                            var _closure3_slot2 = var4;
                                            var6 = undefined;
                                            var3 = null;
                                            var1 = undefined;
                                            if (!(var3 !== var4)) {
                                                _fun12323_ip = 56;
                                                continue _fun12323
                                            }
                                        case 37:
                                            var3 = _closure3_slot2;
                                            var1 = undefined;
                                            if (!(var1 !== var3)) {
                                                _fun12323_ip = 56;
                                                continue _fun12323
                                            }
                                        case 47:
                                            var3 = _closure3_slot2;
                                            var1 = var3.values;
                                        case 56:
                                            if (!var1) {
                                                _fun12323_ip = 85;
                                                continue _fun12323
                                            }
                                        case 59:
                                            var1 = _closure3_slot0;
                                            var1 = var1.exception;
                                            var1 = var1.values;
                                            var3 = var1.length;
                                            var1 = 0;
                                            if (!(!(var3 > var1))) {
                                                _fun12323_ip = 92;
                                                continue _fun12323
                                            }
                                        case 85:
                                            var1 = _closure3_slot0;
                                            return var1;
                                        case 92:
                                            var3 = _closure2_slot0;
                                            var3 = var3.beforeErrorSampling;
                                            if (!var3) {
                                                _fun12323_ip = 312;
                                                continue _fun12323
                                            }
                                        case 111: // try_start_0
                                            var5 = _closure2_slot0;
                                            var4 = var5.beforeErrorSampling;
                                            var3 = _closure3_slot0;
                                            var1 = _closure3_slot1;
                                            var3 = var4.bind(var5)(var3, var1);
                                            var1 = false;
                                            if (!(var1 !== var3)) {
                                                _fun12323_ip = 146;
                                                continue _fun12323
                                            }
                                        case 141: // try_end0
                                            _fun12323_ip = 312;
                                            continue _fun12323;
                                        case 146: // try_start_1
                                            var4 = _closure1_slot0;
                                            var5 = _closure1_slot1;
                                            var3 = 1;
                                            var3 = var5[var3];
                                            var3 = var4.bind(var6)(var3);
                                            var5 = var3.debug;
                                            var4 = var5.log;
                                            var22 = _closure1_slot3;
                                            var1 = _closure3_slot0;
                                            var20 = var1.event_id;
                                            var3 = global;
                                            var3 = var3.HermesInternal;
                                            var9 = var3.concat;
                                            var23 = '[Sentry] ';
                                            var21 = ' not sent; beforeErrorSampling conditions not met for event ';
                                            var19 = '.';
                                            var3 = var23[var9](var22, var21, var20, var19, var18);
                                            var3 = var4.bind(var5)(var3);
                                        case 232: // try_end1
                                            return var1;
                                        case 235: // catch_target0 // catch_target1
                                            CatchBlockStart(arg_register = 5);
                                            var4 = _closure1_slot0;
                                            var7 = _closure1_slot1;
                                            var3 = 1;
                                            var3 = var7[var3];
                                            var3 = var4.bind(var6)(var3);
                                            var4 = var3.debug;
                                            var3 = var4.error;
                                            var9 = _closure1_slot3;
                                            var1 = global;
                                            var1 = var1.HermesInternal;
                                            var8 = var1.concat;
                                            var7 = '[Sentry] ';
                                            var1 = ' beforeErrorSampling callback threw an error, proceeding with replay capture';
                                            var1 = var8.bind(var7)(var9, var1);
                                            var1 = var3.bind(var4)(var1, var5);
                                        case 312:
                                            var8 = _closure1_slot0;
                                            var9 = _closure1_slot1;
                                            var4 = 2;
                                            var1 = var9[var4];
                                            var1 = var8.bind(var6)(var1);
                                            var7 = var1.NATIVE;
                                            var5 = var7.captureReplay;
                                            var1 = 3;
                                            var1 = var9[var1];
                                            var9 = var8.bind(var6)(var1);
                                            var8 = var9.isHardCrash;
                                            var1 = _closure3_slot0;
                                            var1 = var8.bind(var9)(var1);
                                            var1 = var5.bind(var7)(var1);
                                            SaveGenerator(address = 383);
                                        case 381:
                                            return var1;
                                        case 383:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                            if (var5) {
                                                _fun12323_ip = 661;
                                                continue _fun12323
                                            }
                                        case 392:
                                            var5 = _closure1_slot0;
                                            var7 = _closure1_slot1;
                                            if (var1) {
                                                _fun12323_ip = 570;
                                                continue _fun12323
                                            }
                                        case 406:
                                            var4 = var7[var4];
                                            var4 = var5.bind(var6)(var4);
                                            var8 = var4.NATIVE;
                                            var4 = var8.getCurrentReplayId;
                                            var16 = var4.bind(var8)();
                                            var8 = _closure1_slot0;
                                            var9 = _closure1_slot1;
                                            var4 = 1;
                                            var4 = var9[var4];
                                            var4 = var8.bind(var6)(var4);
                                            var9 = var4.debug;
                                            var8 = var9.log;
                                            var15 = _closure1_slot3;
                                            var4 = _closure3_slot0;
                                            var14 = var4.event_id;
                                            var4 = global;
                                            var4 = var4.HermesInternal;
                                            var13 = var4.concat;
                                            var12 = '[Sentry] ';
                                            if (var16) {
                                                _fun12323_ip = 531;
                                                continue _fun12323
                                            }
                                        case 498:
                                            var21 = ' not sampled for event ';
                                            var19 = '.';
                                            var23 = var12;
                                            var22 = var15;
                                            var20 = var14;
                                            var4 = var23[var13](var22, var21, var20, var19, var18);
                                            var4 = var8.bind(var9)(var4);
                                            _fun12323_ip = 654;
                                            continue _fun12323;
                                        case 531:
                                            var21 = ' assign already recording replay ';
                                            var19 = ' for event ';
                                            var17 = '.';
                                            var23 = var12;
                                            var22 = var15;
                                            var20 = var16;
                                            var18 = var14;
                                            var4 = var23[var13](var22, var21, var20, var19, var18, var17, var16);
                                            var4 = var8.bind(var9)(var4);
                                            _fun12323_ip = 654;
                                            continue _fun12323;
                                        case 570:
                                            var4 = 1;
                                            var4 = var7[var4];
                                            var4 = var5.bind(var6)(var4);
                                            var5 = var4.debug;
                                            var4 = var5.log;
                                            var22 = _closure1_slot3;
                                            var3 = _closure3_slot0;
                                            var18 = var3.event_id;
                                            var3 = global;
                                            var3 = var3.HermesInternal;
                                            var9 = var3.concat;
                                            var23 = '[Sentry] ';
                                            var21 = ' Captured recording replay ';
                                            var19 = ' for event ';
                                            var17 = '.';
                                            var20 = var1;
                                            var3 = var23[var9](var22, var21, var20, var19, var18, var17, var16);
                                            var3 = var4.bind(var5)(var3);
                                        case 654:
                                            var2 = _closure3_slot0;
                                            return var2;
                                        case 661:
                                            return var1;
                                        case 664:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var8 = undefined;
                            var6 = undefined;
                            var5 = undefined;
                            var0 = var8[var3](var7, var6, var5, var4, var3);
                            return var0;
                        };
                        var2.processEvent = var5;
                        var2.options = var4;
                        var3 = function() { // Original name: getReplayId, environment: var3
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 2;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var1 = var0.NATIVE;
                            var0 = var1.getCurrentReplayId;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var2.getReplayId = var3;
                        return var2;
                    case 437:
                        var0 = _closure1_slot5;
                        var0 = var0.bind(var1)();
                        return var0;
                }
            };
            var1.mobileReplayIntegration = var0;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [999, 817, 998, 1010, 1126, 1127]);