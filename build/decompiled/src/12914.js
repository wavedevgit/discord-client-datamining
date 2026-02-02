// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function arg0, arg1, arg2() {
        _fun99445: for (var _fun99445_ip = 0;;) switch (_fun99445_ip) {
            case 0:
                var4 = arg0;
                var0 = arg1;
                var5 = arg2;
                var _closure2_slot0 = var4;
                var1 = var0.name;
                var3 = var5[var1];
                if (var3) {
                    _fun99445_ip = 406;
                    continue _fun99445
                }
            case 33:
                var3 = var0.name;
                var5[var3] = var0;
                var6 = _closure1_slot4;
                var5 = var6.indexOf;
                var3 = var0.name;
                var5 = var5.bind(var6)(var3);
                var3 = -1;
                var3 = var3 === var5;
                if (!var3) {
                    _fun99445_ip = 92;
                    continue _fun99445
                }
            case 75:
                var5 = var0.setupOnce;
                var6 = 'function';
                var5 = typeof var5;
                var3 = var6 === var5;
            case 92:
                if (!var3) {
                    _fun99445_ip = 124;
                    continue _fun99445
                }
            case 95:
                var3 = var0.setupOnce;
                var3 = var3.bind(var0)();
                var6 = _closure1_slot4;
                var5 = var6.push;
                var3 = var0.name;
                var3 = var5.bind(var6)(var3);
            case 124:
                var3 = var0.setup;
                if (!var3) {
                    _fun99445_ip = 150;
                    continue _fun99445
                }
            case 133:
                var5 = var0.setup;
                var6 = 'function';
                var5 = typeof var5;
                var3 = var6 === var5;
            case 150:
                if (!var3) {
                    _fun99445_ip = 164;
                    continue _fun99445
                }
            case 153:
                var3 = var0.setup;
                var3 = var3.bind(var0)(var4);
            case 164:
                var3 = var0.preprocessEvent;
                var5 = 'function';
                var3 = typeof var3;
                if (!(var5 === var3)) {
                    _fun99445_ip = 224;
                    continue _fun99445
                }
            case 181:
                var6 = var0.preprocessEvent;
                var3 = var6.bind;
                var3 = var3.bind(var6)(var0);
                var _closure2_slot1 = var3;
                var7 = var4.on;
                var6 = 'preprocessEvent';
                var3 = function(arg0, arg1) { // Environment: var2
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var4.bind(var2)(var1, var0, var3);
                    return var0;
                };
                var3 = var7.bind(var4)(var6, var3);
            case 224:
                var3 = var0.processEvent;
                var3 = typeof var3;
                if (!(var5 === var3)) {
                    _fun99445_ip = 305;
                    continue _fun99445
                }
            case 237:
                var5 = var0.processEvent;
                var3 = var5.bind;
                var3 = var3.bind(var5)(var0);
                var _closure2_slot2 = var3;
                var3 = global;
                var6 = var3.Object;
                var5 = var6.assign;
                var3 = {};
                var7 = var0.name;
                var3.id = var7;
                var2 = function(arg0, arg1) { // Environment: var2
                    var4 = _closure2_slot2;
                    var3 = _closure2_slot0;
                    var2 = undefined;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var4.bind(var2)(var1, var0, var3);
                    return var0;
                };
                var3 = var5.bind(var6)(var2, var3);
                var2 = var4.addEventProcessor;
                var2 = var2.bind(var4)(var3);
            case 305:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 3;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var2 = var2.DEBUG_BUILD;
                if (!var2) {
                    _fun99445_ip = 502;
                    continue _fun99445
                }
            case 339:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 2;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var4 = var2.logger;
                var3 = var4.log;
                var6 = var0.name;
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var2 = 'Integration installed: ';
                var2 = var5.bind(var2)(var6);
                var2 = var3.bind(var4)(var2);
                _fun99445_ip = 502;
                continue _fun99445;
            case 406:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 3;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var2 = var2.DEBUG_BUILD;
                if (!var2) {
                    _fun99445_ip = 502;
                    continue _fun99445
                }
            case 437:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 2;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var2 = var1.logger;
                var1 = var2.log;
                var4 = var0.name;
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var0 = 'Integration skipped because it was already installed: ';
                var0 = var3.bind(var0)(var4);
                var0 = var1.bind(var2)(var0);
            case 502:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5.value = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var2, var4, var5);
    var4 = new Array(0);
    var _closure1_slot4 = var4;
    var5 = function arg0() {
        _fun99448: for (var _fun99448_ip = 0;;) switch (_fun99448_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 4;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var2);
                var2 = var4.getClient;
                var2 = var2.bind(var4)();
                if (var2) {
                    _fun99448_ip = 144;
                    continue _fun99448
                }
            case 41:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 3;
                var4 = var6[var4];
                var4 = var5.bind(var0)(var4);
                var4 = var4.DEBUG_BUILD;
                if (!var4) {
                    _fun99448_ip = 155;
                    continue _fun99448
                }
            case 70:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var5[var1];
                var1 = var4.bind(var0)(var1);
                var5 = var1.logger;
                var4 = var5.warn;
                var8 = var3.name;
                var1 = global;
                var1 = var1.HermesInternal;
                var7 = var1.concat;
                var6 = 'Cannot add integration "';
                var1 = '" because no SDK Client is available.';
                var1 = var7.bind(var6)(var8, var1);
                var1 = var4.bind(var5)(var1);
                _fun99448_ip = 155;
                continue _fun99448;
            case 144:
                var1 = var2.addIntegration;
                var1 = var1.bind(var2)(var3);
            case 155:
                return var0;
        }
    };
    var2.addIntegration = var5;
    var5 = function arg0, arg1() {
        _fun99449: for (var _fun99449_ip = 0;;) switch (_fun99449_ip) {
            case 0:
                var3 = arg0;
                var0 = undefined;
                var4 = undefined;
                var1 = arg1;
                var2 = var1[Symbol.iterator];
                var1 = var2().next;
            case 13:
                var6 = var1().value;
                var5 = var2;
                if (!(var5 !== var0)) {
                    _fun99449_ip = 71;
                    continue _fun99449
                }
            case 24: // try_start_0
                var4 = var6;
                var5 = var6;
                if (!var6) {
                    _fun99449_ip = 42;
                    continue _fun99449
                }
            case 33:
                var6 = var4;
                var5 = var6.afterAllSetup;
            case 42:
                if (!var5) {
                    _fun99449_ip = 62;
                    continue _fun99449
                }
            case 45:
                var7 = var4;
                var6 = var7.afterAllSetup;
                var5 = var3;
                var5 = var6.bind(var7)(var5);
            case 62: // try_end0
                _fun99449_ip = 13;
                continue _fun99449;
            case 64: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 71:
                return var0;
        }
    };
    var2.afterSetupIntegrations = var5;
    var5 = function arg0() {
        var0 = arg0;
        return var0;
    };
    var2.defineIntegration = var5;
    var5 = function arg0() {
        _fun99451: for (var _fun99451_ip = 0;;) switch (_fun99451_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.defaultIntegrations;
                if (var2) {
                    _fun99451_ip = 18;
                    continue _fun99451
                }
            case 14:
                var2 = new Array(0);
            case 18:
                var7 = var0.integrations;
                var3 = var2.forEach;
                var0 = function(arg0) { // Environment: var1
                    var1 = true;
                    var0 = arg0;
                    var0.isDefaultInstance = var1;
                    var0 = undefined;
                    return var0;
                };
                var0 = var3.bind(var2)(var0);
                var0 = global;
                var3 = var0.Array;
                var0 = var3.isArray;
                var0 = var0.bind(var3)(var7);
                var3 = var2;
                if (var0) {
                    _fun99451_ip = 122;
                    continue _fun99451
                }
            case 65:
                var4 = 'function';
                var0 = typeof var7;
                var2 = var3;
                if (!(var4 === var0)) {
                    _fun99451_ip = 120;
                    continue _fun99451
                }
            case 79:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 2;
                var4 = var4[var0];
                var0 = undefined;
                var5 = var5.bind(var0)(var4);
                var4 = var5.arrayify;
                var0 = var7.bind(var0)(var3);
                var2 = var4.bind(var5)(var0);
            case 120:
                _fun99451_ip = 156;
                continue _fun99451;
            case 122:
                var5 = new Array(0);
                var4 = var5.concat;
                var6 = _closure1_slot3;
                var0 = undefined;
                var3 = var6.bind(var0)(var3);
                var0 = var6.bind(var0)(var7);
                var2 = var4.bind(var5)(var3, var0);
            case 156:
                var0 = function arg0() {
                    var3 = arg0;
                    var2 = {};
                    var _closure3_slot0 = var2;
                    var1 = var3.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun99454: for (var _fun99454_ip = 0;;) switch (_fun99454_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = var2.name;
                                var3 = _closure3_slot0;
                                var4 = var3[var1];
                                var3 = var4;
                                if (!var3) {
                                    _fun99454_ip = 34;
                                    continue _fun99454
                                }
                            case 25:
                                var4 = var4.isDefaultInstance;
                                var3 = !var4;
                            case 34:
                                if (!var3) {
                                    _fun99454_ip = 43;
                                    continue _fun99454
                                }
                            case 37:
                                var3 = var2.isDefaultInstance;
                            case 43:
                                if (var3) {
                                    _fun99454_ip = 54;
                                    continue _fun99454
                                }
                            case 46:
                                var0 = _closure3_slot0;
                                var0[var1] = var2;
                            case 54:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var3)(var0);
                    var0 = global;
                    var1 = var0.Object;
                    var0 = var1.values;
                    var0 = var0.bind(var1)(var2);
                    return var0;
                };
                var4 = undefined;
                var0 = var0.bind(var4)(var2);
                var2 = var0.findIndex;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.name;
                    var0 = 'Debug';
                    var0 = var0 === var1;
                    return var0;
                };
                var2 = var2.bind(var0)(var1);
                var1 = -1;
                if (!(var2 > var1)) {
                    _fun99451_ip = 242;
                    continue _fun99451
                }
            case 198:
                var1 = var0.splice;
                var3 = 1;
                var2 = var1.bind(var0)(var2, var3);
                var1 = _closure1_slot2;
                var2 = var1.bind(var4)(var2, var3);
                var1 = 0;
                var2 = var2[var1];
                var1 = var0.push;
                var1 = var1.bind(var0)(var2);
            case 242:
                return var0;
        }
    };
    var2.getIntegrationsToSetup = var5;
    var2.installedIntegrations = var4;
    var2.setupIntegration = var3;
    var1 = function arg0, arg1() {
        var3 = arg1;
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = {};
        var _closure2_slot1 = var0;
        var2 = var3.forEach;
        var1 = function(arg0) { // Environment: var1
            _fun99457: for (var _fun99457_ip = 0;;) switch (_fun99457_ip) {
                case 0:
                    var4 = arg0;
                    if (!var4) {
                        _fun99457_ip = 33;
                        continue _fun99457
                    }
                case 6:
                    var3 = _closure1_slot5;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var4, var1);
                case 33:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setupIntegrations = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 65, 12825, 12891, 12890]);