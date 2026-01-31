// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var4 = function arg0, arg1() {
        _fun99313: for (var _fun99313_ip = 0;;) switch (_fun99313_ip) {
            case 0:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 1;
                var4 = var5[var1];
                var2 = undefined;
                var6 = var3.bind(var2)(var4);
                var4 = var6.getCurrentScope;
                var4 = var4.bind(var6)();
                var1 = var5[var1];
                var3 = var3.bind(var2)(var1);
                var1 = var3.getClient;
                var3 = var1.bind(var3)();
                if (var3) {
                    _fun99313_ip = 133;
                    continue _fun99313
                }
            case 57:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 3;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.DEBUG_BUILD;
                if (!var1) {
                    _fun99313_ip = 213;
                    continue _fun99313
                }
            case 89:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 4;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var6 = var1.logger;
                var5 = var6.warn;
                var1 = 'Cannot capture check-in. No client defined.';
                var1 = var5.bind(var6)(var1);
                _fun99313_ip = 213;
                continue _fun99313;
            case 133:
                var1 = var3.captureCheckIn;
                if (var1) {
                    _fun99313_ip = 245;
                    continue _fun99313
                }
            case 142:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 3;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var1 = var1.DEBUG_BUILD;
                if (!var1) {
                    _fun99313_ip = 213;
                    continue _fun99313
                }
            case 171:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 4;
                var1 = var6[var1];
                var1 = var5.bind(var2)(var1);
                var6 = var1.logger;
                var5 = var6.warn;
                var1 = 'Cannot capture check-in. Client does not support sending check-ins.';
                var1 = var5.bind(var6)(var1);
            case 213:
                var1 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 4;
                var0 = var5[var0];
                var1 = var1.bind(var2)(var0);
                var0 = var1.uuid4;
                var0 = var0.bind(var1)();
                return var0;
            case 245:
                var2 = var3.captureCheckIn;
                var1 = arg0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0, var4);
                return var0;
        }
    };
    var _closure1_slot3 = var4;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun99316: for (var _fun99316_ip = 0;;) switch (_fun99316_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun99316_ip = 159;
                            continue _fun99316
                        }
                    case 10:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var2 = 1;
                        var2 = var3[var2];
                        var3 = undefined;
                        var4 = var4.bind(var3)(var2);
                        var2 = var4.getClient;
                        var4 = var2.bind(var4)();
                        if (var4) {
                            _fun99316_ip = 142;
                            continue _fun99316
                        }
                    case 48:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var2 = 3;
                        var2 = var6[var2];
                        var2 = var5.bind(var3)(var2);
                        var2 = var2.DEBUG_BUILD;
                        if (!var2) {
                            _fun99316_ip = 119;
                            continue _fun99316
                        }
                    case 77:
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var1 = 4;
                        var1 = var5[var1];
                        var1 = var2.bind(var3)(var1);
                        var3 = var1.logger;
                        var2 = var3.warn;
                        var1 = 'Cannot flush events. No client defined.';
                        var1 = var2.bind(var3)(var1);
                    case 119:
                        var1 = global;
                        var3 = var1.Promise;
                        var2 = var3.resolve;
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
                        _fun99316_ip = 156;
                        continue _fun99316;
                    case 142:
                        var3 = var4.flush;
                        var2 = arg0;
                        var1 = var3.bind(var4)(var2);
                    case 156:
                        return var1;
                    case 159:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot4 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun99319: for (var _fun99319_ip = 0;;) switch (_fun99319_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun99319_ip = 159;
                            continue _fun99319
                        }
                    case 10:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var2 = 1;
                        var2 = var3[var2];
                        var3 = undefined;
                        var4 = var4.bind(var3)(var2);
                        var2 = var4.getClient;
                        var4 = var2.bind(var4)();
                        if (var4) {
                            _fun99319_ip = 142;
                            continue _fun99319
                        }
                    case 48:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var2 = 3;
                        var2 = var6[var2];
                        var2 = var5.bind(var3)(var2);
                        var2 = var2.DEBUG_BUILD;
                        if (!var2) {
                            _fun99319_ip = 119;
                            continue _fun99319
                        }
                    case 77:
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var1 = 4;
                        var1 = var5[var1];
                        var1 = var2.bind(var3)(var1);
                        var3 = var1.logger;
                        var2 = var3.warn;
                        var1 = 'Cannot flush events and disable SDK. No client defined.';
                        var1 = var2.bind(var3)(var1);
                    case 119:
                        var1 = global;
                        var3 = var1.Promise;
                        var2 = var3.resolve;
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
                        _fun99319_ip = 156;
                        continue _fun99319;
                    case 142:
                        var3 = var4.close;
                        var2 = arg0;
                        var1 = var3.bind(var4)(var2);
                    case 156:
                        return var1;
                    case 159:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var3 = function() {
        _fun99320: for (var _fun99320_ip = 0;;) switch (_fun99320_ip) {
            case 0:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 1;
                var3 = var5[var2];
                var0 = undefined;
                var6 = var4.bind(var0)(var3);
                var3 = var6.getIsolationScope;
                var3 = var3.bind(var6)();
                var2 = var5[var2];
                var4 = var4.bind(var0)(var2);
                var2 = var4.getCurrentScope;
                var2 = var2.bind(var4)();
                var4 = var2.getSession;
                var6 = var4.bind(var2)();
                if (var6) {
                    _fun99320_ip = 77;
                    continue _fun99320
                }
            case 67:
                var4 = var3.getSession;
                var6 = var4.bind(var3)();
            case 77:
                if (!var6) {
                    _fun99320_ip = 111;
                    continue _fun99320
                }
            case 80:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 6;
                var4 = var7[var4];
                var5 = var5.bind(var0)(var4);
                var4 = var5.closeSession;
                var4 = var4.bind(var5)(var6);
            case 111:
                var1 = _closure1_slot7;
                var1 = var1.bind(var0)();
                var1 = var3.setSession;
                var1 = var1.bind(var3)();
                var1 = var2.setSession;
                var1 = var1.bind(var2)();
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var0 = function() {
        _fun99321: for (var _fun99321_ip = 0;;) switch (_fun99321_ip) {
            case 0:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 1;
                var2 = var5[var1];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var2 = var4.getIsolationScope;
                var4 = var2.bind(var4)();
                var2 = var5[var1];
                var6 = var3.bind(var0)(var2);
                var2 = var6.getCurrentScope;
                var2 = var2.bind(var6)();
                var1 = var5[var1];
                var3 = var3.bind(var0)(var1);
                var1 = var3.getClient;
                var3 = var1.bind(var3)();
                var1 = var2.getSession;
                var2 = var1.bind(var2)();
                if (var2) {
                    _fun99321_ip = 96;
                    continue _fun99321
                }
            case 86:
                var1 = var4.getSession;
                var2 = var1.bind(var4)();
            case 96:
                var1 = var2;
                if (!var1) {
                    _fun99321_ip = 105;
                    continue _fun99321
                }
            case 102:
                var1 = var3;
            case 105:
                if (!var1) {
                    _fun99321_ip = 119;
                    continue _fun99321
                }
            case 108:
                var1 = var3.captureSession;
                var1 = var1.bind(var3)(var2);
            case 119:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = 0;
    var5 = var5[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = global;
    var8 = var5.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var5 = true;
    var6.value = var5;
    var5 = '__esModule';
    var5 = var7.bind(var8)(var2, var5, var6);
    var5 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getIsolationScope;
        var3 = var1.bind(var2)();
        var2 = var3.addEventProcessor;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.addEventProcessor = var5;
    var2.captureCheckIn = var4;
    var4 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.getCurrentScope;
        var3 = var0.bind(var1)();
        var2 = var3.captureEvent;
        var1 = arg0;
        var0 = arg1;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.captureEvent = var4;
    var4 = function arg0, arg1() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 1;
        var0 = var5[var0];
        var1 = undefined;
        var2 = var4.bind(var1)(var0);
        var0 = var2.getCurrentScope;
        var3 = var0.bind(var2)();
        var2 = var3.captureException;
        var0 = 2;
        var0 = var5[var0];
        var4 = var4.bind(var1)(var0);
        var1 = var4.parseEventHintOrCaptureContext;
        var0 = arg1;
        var1 = var1.bind(var4)(var0);
        var0 = arg0;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.captureException = var4;
    var4 = function arg0, arg1() {
        _fun99325: for (var _fun99325_ip = 0;;) switch (_fun99325_ip) {
            case 0:
                var1 = arg1;
                var5 = typeof var1;
                var2 = undefined;
                var0 = 'string';
                var4 = undefined;
                if (!(var0 === var5)) {
                    _fun99325_ip = 21;
                    continue _fun99325
                }
            case 18:
                var4 = var1;
            case 21:
                var3 = undefined;
                if (!(var0 !== var5)) {
                    _fun99325_ip = 37;
                    continue _fun99325
                }
            case 27:
                var0 = {};
                var0.captureContext = var1;
                var3 = var0;
            case 37:
                var1 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var0 = var5[var0];
                var1 = var1.bind(var2)(var0);
                var0 = var1.getCurrentScope;
                var2 = var0.bind(var1)();
                var1 = var2.captureMessage;
                var0 = arg0;
                var0 = var1.bind(var2)(var0, var4, var3);
                return var0;
        }
    };
    var2.captureMessage = var4;
    var4 = function() {
        _fun99326: for (var _fun99326_ip = 0;;) switch (_fun99326_ip) {
            case 0:
                var0 = undefined;
                var2 = undefined;
                var3 = arguments.length;
                var1 = 0;
                if (!(var3 > var1)) {
                    _fun99326_ip = 28;
                    continue _fun99326
                }
            case 13:
                var3 = arguments[var1];
                if (!(var0 !== var3)) {
                    _fun99326_ip = 28;
                    continue _fun99326
                }
            case 21:
                var1 = arguments[var1];
                if (var1) {
                    _fun99326_ip = 41;
                    continue _fun99326
                }
            case 28:
                var1 = _closure1_slot7;
                var1 = var1.bind(var0)();
                _fun99326_ip = 52;
                continue _fun99326;
            case 41:
                var1 = _closure1_slot6;
                var1 = var1.bind(var0)();
            case 52:
                return var0;
        }
    };
    var2.captureSession = var4;
    var4 = function arg0() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.close = var4;
    var2.endSession = var3;
    var3 = function arg0() {
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.flush = var3;
    var3 = function() {
        _fun99329: for (var _fun99329_ip = 0;;) switch (_fun99329_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.getClient;
                var2 = var0.bind(var1)();
                var1 = !var2;
                var0 = !var1;
                if (var1) {
                    _fun99329_ip = 65;
                    continue _fun99329
                }
            case 44:
                var1 = var2.getOptions;
                var1 = var1.bind(var2)();
                var3 = var1.enabled;
                var1 = false;
                var0 = var1 !== var3;
            case 65:
                if (!var0) {
                    _fun99329_ip = 84;
                    continue _fun99329
                }
            case 68:
                var1 = var2.getTransport;
                var1 = var1.bind(var2)();
                var1 = !var1;
                var0 = !var1;
            case 84:
                return var0;
        }
    };
    var2.isEnabled = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.getClient;
        var0 = var0.bind(var1)();
        var0 = !var0;
        var0 = !var0;
        return var0;
    };
    var2.isInitialized = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.getIsolationScope;
        var1 = var0.bind(var1)();
        var0 = var1.lastEventId;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.lastEventId = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getIsolationScope;
        var4 = var1.bind(var2)();
        var3 = var4.setContext;
        var2 = arg0;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.setContext = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getIsolationScope;
        var4 = var1.bind(var2)();
        var3 = var4.setExtra;
        var2 = arg0;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.setExtra = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getIsolationScope;
        var3 = var1.bind(var2)();
        var2 = var3.setExtras;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setExtras = var3;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getIsolationScope;
        var4 = var1.bind(var2)();
        var3 = var4.setTag;
        var2 = arg0;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.setTag = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getIsolationScope;
        var3 = var1.bind(var2)();
        var2 = var3.setTags;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setTags = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.getIsolationScope;
        var3 = var1.bind(var2)();
        var2 = var3.setUser;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setUser = var3;
    var3 = function arg0() {
        _fun99338: for (var _fun99338_ip = 0;;) switch (_fun99338_ip) {
            case 0:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var3 = var5[var0];
                var4 = undefined;
                var6 = var2.bind(var4)(var3);
                var3 = var6.getClient;
                var6 = var3.bind(var6)();
                var3 = var5[var0];
                var7 = var2.bind(var4)(var3);
                var3 = var7.getIsolationScope;
                var3 = var3.bind(var7)();
                var0 = var5[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.getCurrentScope;
                var2 = var0.bind(var2)();
                var0 = var6;
                if (!var0) {
                    _fun99338_ip = 89;
                    continue _fun99338
                }
            case 79:
                var5 = var6.getOptions;
                var0 = var5.bind(var6)();
            case 89:
                if (var0) {
                    _fun99338_ip = 94;
                    continue _fun99338
                }
            case 92:
                var0 = {};
            case 94:
                var8 = var0.release;
                var0 = var0.environment;
                if (!(var4 === var0)) {
                    _fun99338_ip = 136;
                    continue _fun99338
                }
            case 110:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 5;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var0 = var5.DEFAULT_ENVIRONMENT;
            case 136:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 4;
                var5 = var7[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.GLOBAL_OBJ;
                var5 = var5.navigator;
                if (var5) {
                    _fun99338_ip = 173;
                    continue _fun99338
                }
            case 171:
                var5 = {};
            case 173:
                var12 = var5.userAgent;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var7 = 6;
                var5 = var5[var7];
                var6 = var6.bind(var4)(var5);
                var5 = var6.makeSession;
                var9 = global;
                var11 = var9.Object;
                var10 = var11.assign;
                var9 = {};
                var9.release = var8;
                var9.environment = var0;
                var0 = var2.getUser;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun99338_ip = 253;
                    continue _fun99338
                }
            case 243:
                var8 = var3.getUser;
                var0 = var8.bind(var3)();
            case 253:
                var9.user = var0;
                var8 = var12;
                if (!var8) {
                    _fun99338_ip = 273;
                    continue _fun99338
                }
            case 263:
                var0 = {};
                var0.userAgent = var12;
                var8 = var0;
            case 273:
                var0 = arg0;
                var0 = var10.bind(var11)(var9, var8, var0);
                var0 = var5.bind(var6)(var0);
                var5 = var3.getSession;
                var8 = var5.bind(var3)();
                var5 = var8;
                if (!var5) {
                    _fun99338_ip = 317;
                    continue _fun99338
                }
            case 304:
                var9 = var8.status;
                var6 = 'ok';
                var5 = var6 === var9;
            case 317:
                if (!var5) {
                    _fun99338_ip = 359;
                    continue _fun99338
                }
            case 320:
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var5 = var5[var7];
                var7 = var6.bind(var4)(var5);
                var6 = var7.updateSession;
                var5 = {};
                var9 = 'exited';
                var5.status = var9;
                var5 = var6.bind(var7)(var8, var5);
            case 359:
                var1 = _closure1_slot6;
                var1 = var1.bind(var4)();
                var1 = var3.setSession;
                var1 = var1.bind(var3)(var0);
                var1 = var2.setSession;
                var1 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.startSession = var3;
    var1 = function arg0, arg1, arg2() {
        var2 = arg0;
        var _closure2_slot0 = var2;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = function arg0() {
            var2 = _closure1_slot3;
            var1 = {};
            var4 = _closure2_slot0;
            var1.monitorSlug = var4;
            var4 = arg0;
            var1.status = var4;
            var4 = _closure2_slot2;
            var1.checkInId = var4;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var0 = 4;
            var4 = var4[var0];
            var0 = undefined;
            var5 = var5.bind(var0)(var4);
            var4 = var5.timestampInSeconds;
            var4 = var4.bind(var5)();
            var3 = _closure2_slot3;
            var3 = var4 - var3;
            var1.duration = var3;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var _closure2_slot4 = var1;
        var5 = _closure1_slot3;
        var4 = {};
        var4.monitorSlug = var2;
        var2 = 'in_progress';
        var4.status = var2;
        var3 = undefined;
        var2 = arg2;
        var2 = var5.bind(var3)(var4, var2);
        var _closure2_slot2 = var2;
        var2 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 4;
        var1 = var4[var1];
        var5 = var2.bind(var3)(var1);
        var1 = var5.timestampInSeconds;
        var1 = var1.bind(var5)();
        var _closure2_slot3 = var1;
        var1 = 1;
        var1 = var4[var1];
        var2 = var2.bind(var3)(var1);
        var1 = var2.withIsolationScope;
        var0 = function() { // Environment: var0
            _fun99341: for (var _fun99341_ip = 0;;) switch (_fun99341_ip) {
                case 0:
                    var3 = undefined;
                    var0 = undefined;
                case 6: // try_start_0
                    var4 = _closure2_slot1;
                    var0 = var4.bind(var3)();
                case 17: // try_end0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var4 = 4;
                    var4 = var6[var4];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.isThenable;
                    var4 = var0;
                    var4 = var5.bind(var6)(var4);
                    if (var4) {
                        _fun99341_ip = 72;
                        continue _fun99341
                    }
                case 57:
                    var4 = _closure2_slot4;
                    var2 = 'ok';
                    var2 = var4.bind(var3)(var2);
                    _fun99341_ip = 119;
                    continue _fun99341;
                case 72:
                    var2 = global;
                    var5 = var2.Promise;
                    var4 = var5.resolve;
                    var2 = var0;
                    var5 = var4.bind(var5)(var2);
                    var4 = var5.then;
                    var2 = function() { // Environment: var1
                        var2 = _closure2_slot4;
                        var0 = undefined;
                        var1 = 'ok';
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = function() { // Environment: var1
                        var2 = _closure2_slot4;
                        var0 = undefined;
                        var1 = 'error';
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var4.bind(var5)(var2, var1);
                case 119:
                    return var0;
                case 121: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var2 = _closure2_slot4;
                    var1 = 'error';
                    var1 = var2.bind(var3)(var1);
                    throw var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.withMonitor = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 12889, 12907, 12890, 12824, 12899, 12887]);