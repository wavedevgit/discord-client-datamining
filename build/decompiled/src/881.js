// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var3 = function arg0, arg1, arg2() {
        _fun9345: for (var _fun9345_ip = 0;;) switch (_fun9345_ip) {
            case 0:
                var4 = arg0;
                var0 = arg1;
                var5 = arg2;
                var _closure2_slot0 = var4;
                var1 = var0.name;
                var3 = var5[var1];
                if (var3) {
                    _fun9345_ip = 391;
                    continue _fun9345
                }
            case 33:
                var3 = var0.name;
                var5[var3] = var0;
                var6 = _closure1_slot3;
                var5 = var6.includes;
                var3 = var0.name;
                var3 = var5.bind(var6)(var3);
                if (var3) {
                    _fun9345_ip = 81;
                    continue _fun9345
                }
            case 64:
                var5 = var0.setupOnce;
                var6 = 'function';
                var5 = typeof var5;
                var3 = var6 !== var5;
            case 81:
                if (var3) {
                    _fun9345_ip = 113;
                    continue _fun9345
                }
            case 84:
                var3 = var0.setupOnce;
                var3 = var3.bind(var0)();
                var6 = _closure1_slot3;
                var5 = var6.push;
                var3 = var0.name;
                var3 = var5.bind(var6)(var3);
            case 113:
                var3 = var0.setup;
                if (!var3) {
                    _fun9345_ip = 139;
                    continue _fun9345
                }
            case 122:
                var5 = var0.setup;
                var6 = 'function';
                var5 = typeof var5;
                var3 = var6 === var5;
            case 139:
                if (!var3) {
                    _fun9345_ip = 153;
                    continue _fun9345
                }
            case 142:
                var3 = var0.setup;
                var3 = var3.bind(var0)(var4);
            case 153:
                var3 = var0.preprocessEvent;
                var5 = 'function';
                var3 = typeof var3;
                if (!(var5 === var3)) {
                    _fun9345_ip = 211;
                    continue _fun9345
                }
            case 170:
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
            case 211:
                var3 = var0.processEvent;
                var3 = typeof var3;
                if (!(var5 === var3)) {
                    _fun9345_ip = 290;
                    continue _fun9345
                }
            case 224:
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
            case 290:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 1;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var2 = var2.DEBUG_BUILD;
                if (!var2) {
                    _fun9345_ip = 487;
                    continue _fun9345
                }
            case 324:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 2;
                var2 = var5[var2];
                var2 = var3.bind(var4)(var2);
                var4 = var2.debug;
                var3 = var4.log;
                var6 = var0.name;
                var2 = global;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var2 = 'Integration installed: ';
                var2 = var5.bind(var2)(var6);
                var2 = var3.bind(var4)(var2);
                _fun9345_ip = 487;
                continue _fun9345;
            case 391:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 1;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var2 = var2.DEBUG_BUILD;
                if (!var2) {
                    _fun9345_ip = 487;
                    continue _fun9345
                }
            case 422:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 2;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var2 = var1.debug;
                var1 = var2.log;
                var4 = var0.name;
                var0 = global;
                var0 = var0.HermesInternal;
                var3 = var0.concat;
                var0 = 'Integration skipped because it was already installed: ';
                var0 = var3.bind(var0)(var4);
                var0 = var1.bind(var2)(var0);
            case 487:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot4 = var3;
    var0 = 0;
    var4 = var4[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = global;
    var7 = var4.Object;
    var6 = var7.defineProperty;
    var4 = var4.Symbol;
    var5 = var4.toStringTag;
    var4 = {};
    var8 = 'Module';
    var4.value = var8;
    var4 = var6.bind(var7)(var2, var5, var4);
    var4 = new Array(0);
    var _closure1_slot3 = var4;
    var5 = function arg0() {
        _fun9348: for (var _fun9348_ip = 0;;) switch (_fun9348_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 3;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var2);
                var2 = var4.getClient;
                var2 = var2.bind(var4)();
                if (var2) {
                    _fun9348_ip = 144;
                    continue _fun9348
                }
            case 41:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 1;
                var4 = var6[var4];
                var4 = var5.bind(var0)(var4);
                var4 = var4.DEBUG_BUILD;
                if (!var4) {
                    _fun9348_ip = 155;
                    continue _fun9348
                }
            case 70:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 2;
                var1 = var5[var1];
                var1 = var4.bind(var0)(var1);
                var5 = var1.debug;
                var4 = var5.warn;
                var8 = var3.name;
                var1 = global;
                var1 = var1.HermesInternal;
                var7 = var1.concat;
                var6 = 'Cannot add integration "';
                var1 = '" because no SDK Client is available.';
                var1 = var7.bind(var6)(var8, var1);
                var1 = var4.bind(var5)(var1);
                _fun9348_ip = 155;
                continue _fun9348;
            case 144:
                var1 = var2.addIntegration;
                var1 = var1.bind(var2)(var3);
            case 155:
                return var0;
        }
    };
    var2.addIntegration = var5;
    var5 = function arg0, arg1() {
        _fun9349: for (var _fun9349_ip = 0;;) switch (_fun9349_ip) {
            case 0:
                var4 = arg0;
                var0 = undefined;
                var5 = undefined;
                var3 = arg1;
                var2 = var3[Symbol.iterator];
                var3 = var2().next;
                var1 = null;
            case 15:
                var7 = var3().value;
                var6 = var2;
                if (!(var6 !== var0)) {
                    _fun9349_ip = 77;
                    continue _fun9349
                }
            case 26: // try_start_0
                var5 = var7;
                var7 = var1 != var7;
                var6 = var7;
                if (!var7) {
                    _fun9349_ip = 48;
                    continue _fun9349
                }
            case 39:
                var7 = var5;
                var6 = var7.afterAllSetup;
            case 48:
                if (!var6) {
                    _fun9349_ip = 68;
                    continue _fun9349
                }
            case 51:
                var8 = var5;
                var7 = var8.afterAllSetup;
                var6 = var4;
                var6 = var7.bind(var8)(var6);
            case 68: // try_end0
                _fun9349_ip = 15;
                continue _fun9349;
            case 70: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 77:
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
        _fun9351: for (var _fun9351_ip = 0;;) switch (_fun9351_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.defaultIntegrations;
                if (var3) {
                    _fun9351_ip = 18;
                    continue _fun9351
                }
            case 14:
                var3 = new Array(0);
            case 18:
                var7 = var1.integrations;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var0
                    var1 = true;
                    var0 = arg0;
                    var0.isDefaultInstance = var1;
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var1 = global;
                var4 = var1.Array;
                var2 = var4.isArray;
                var2 = var2.bind(var4)(var7);
                if (var2) {
                    _fun9351_ip = 119;
                    continue _fun9351
                }
            case 60:
                var5 = 'function';
                var4 = typeof var7;
                var2 = var3;
                if (!(var5 === var4)) {
                    _fun9351_ip = 153;
                    continue _fun9351
                }
            case 74:
                var4 = undefined;
                var5 = var7.bind(var4)(var3);
                var4 = var1.Array;
                var1 = var4.isArray;
                var4 = var1.bind(var4)(var5);
                var1 = var5;
                if (var4) {
                    _fun9351_ip = 114;
                    continue _fun9351
                }
            case 103:
                var4 = new Array(1);
                var4[0] = var5;
                var1 = var4;
            case 114:
                var2 = var1;
                _fun9351_ip = 153;
                continue _fun9351;
            case 119:
                var5 = new Array(0);
                var4 = var5.concat;
                var6 = _closure1_slot2;
                var1 = undefined;
                var3 = var6.bind(var1)(var3);
                var1 = var6.bind(var1)(var7);
                var2 = var4.bind(var5)(var3, var1);
            case 153:
                var1 = function arg0() {
                    var3 = arg0;
                    var2 = {};
                    var _closure3_slot0 = var2;
                    var1 = var3.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun9354: for (var _fun9354_ip = 0;;) switch (_fun9354_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = var2.name;
                                var3 = _closure3_slot0;
                                var4 = var3[var1];
                                var3 = var4;
                                if (!var3) {
                                    _fun9354_ip = 34;
                                    continue _fun9354
                                }
                            case 25:
                                var4 = var4.isDefaultInstance;
                                var3 = !var4;
                            case 34:
                                if (!var3) {
                                    _fun9354_ip = 43;
                                    continue _fun9354
                                }
                            case 37:
                                var3 = var2.isDefaultInstance;
                            case 43:
                                if (var3) {
                                    _fun9354_ip = 54;
                                    continue _fun9354
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
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
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
            _fun9356: for (var _fun9356_ip = 0;;) switch (_fun9356_ip) {
                case 0:
                    var4 = arg0;
                    if (!var4) {
                        _fun9356_ip = 33;
                        continue _fun9356
                    }
                case 6:
                    var3 = _closure1_slot4;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 823, 824, 847]);