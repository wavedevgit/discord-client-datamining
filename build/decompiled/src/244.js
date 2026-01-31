// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = metroImportDefault;
    var _closure1_slot1 = var2;
    var2 = dependencyMap;
    var _closure1_slot2 = var2;
    var5 = function arg0, arg1, arg2() {
        _fun3266: for (var _fun3266_ip = 0;;) switch (_fun3266_ip) {
            case 0:
                var0 = arg0;
                var _closure2_slot0 = var0;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 1;
                var3 = var4[var3];
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var _closure2_slot2 = var3;
                var3 = _closure1_slot5;
                var2 = function(arg0, arg1) { // Environment: var2
                    _fun3267: for (var _fun3267_ip = 0;;) switch (_fun3267_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 2;
                            var1 = var1[var0];
                            var0 = undefined;
                            var11 = var4.bind(var0)(var1);
                            var6 = _closure1_slot9;
                            var5 = _closure2_slot1;
                            var4 = _closure2_slot2;
                            var10 = var6.bind(var0)(var5, var4);
                            var9 = var2.initialProps;
                            var8 = var2.rootTag;
                            var7 = _closure1_slot3;
                            if (!var7) {
                                _fun3267_ip = 77;
                                continue _fun3267
                            }
                        case 68:
                            var4 = _closure1_slot3;
                            var7 = var4.bind(var0)(var2);
                        case 77:
                            var6 = _closure1_slot4;
                            if (!var6) {
                                _fun3267_ip = 93;
                                continue _fun3267
                            }
                        case 84:
                            var3 = _closure1_slot4;
                            var6 = var3.bind(var0)(var2);
                        case 93:
                            var16 = var2.fabric;
                            var15 = _closure2_slot2;
                            var3 = _closure2_slot0;
                            var1 = 'LogBox';
                            var14 = var1 === var3;
                            var12 = arg1;
                            var22 = undefined;
                            var21 = var10;
                            var20 = var9;
                            var19 = var8;
                            var18 = var7;
                            var17 = var6;
                            var13 = var3;
                            var1 = var22[var11](var21, var20, var19, var18, var17, var16, var15, var14, var13, var12, var11);
                            return var0;
                    }
                };
                var3[var0] = var2;
                var2 = arg2;
                if (!var2) {
                    _fun3266_ip = 84;
                    continue _fun3266
                }
            case 68:
                var2 = _closure1_slot6;
                var1 = _closure1_slot5;
                var1 = var1[var0];
                var2[var0] = var1;
            case 84:
                return var0;
        }
    };
    var _closure1_slot10 = var5;
    var4 = function arg0, arg1() {
        var0 = arg0;
        var2 = _closure1_slot5;
        var1 = arg1;
        var2[var0] = var1;
        return var0;
    };
    var _closure1_slot11 = var4;
    var3 = function() {
        var0 = global;
        var2 = var0.Object;
        var1 = var2.keys;
        var0 = _closure1_slot6;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot12 = var3;
    var2 = function arg0, arg1, arg2() {
        _fun3270: for (var _fun3270_ip = 0;;) switch (_fun3270_ip) {
            case 0:
                var3 = arg0;
                var2 = _closure1_slot7;
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
                if (!var1) {
                    _fun3270_ip = 68;
                    continue _fun3270
                }
            case 23:
                var1 = global;
                var4 = var1.console;
                var2 = var4.warn;
                var1 = var1.HermesInternal;
                var6 = var1.concat;
                var5 = "registerHeadlessTask or registerCancellableHeadlessTask called multiple times for same key '";
                var1 = "'";
                var1 = var6.bind(var5)(var3, var1);
                var1 = var2.bind(var4)(var1);
            case 68:
                var4 = _closure1_slot7;
                var2 = var4.set;
                var1 = arg1;
                var1 = var2.bind(var4)(var3, var1);
                var2 = _closure1_slot8;
                var1 = var2.set;
                var0 = arg2;
                var0 = var1.bind(var2)(var3, var0);
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot13 = var2;
    var6 = global;
    var10 = var6.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var7 = true;
    var8.value = var7;
    var7 = '__esModule';
    var7 = var9.bind(var10)(var1, var7, var8);
    var7 = {};
    var _closure1_slot5 = var7;
    var7 = {};
    var _closure1_slot6 = var7;
    var7 = var6.Map;
    var8 = var7.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var7
        }
    });
    var14 = var8;
    var7 = new var14[var7](var13);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot7 = var7;
    var6 = var6.Map;
    var7 = var6.prototype;
    var7 = Object.create(var7, {
        constructor: {
            value: var6
        }
    });
    var14 = var7;
    var6 = new var14[var6](var13);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot8 = var6;
    var6 = function arg0() {
        var1 = arg0;
        var0 = undefined;
        var0 = var1.bind(var0)();
        return var0;
    };
    var _closure1_slot9 = var6;
    var6 = function arg0() {
        var0 = arg0;
        var _closure1_slot3 = var0;
        var0 = undefined;
        return var0;
    };
    var1.setWrapperComponentProvider = var6;
    var6 = function arg0() {
        var0 = arg0;
        var _closure1_slot4 = var0;
        var0 = undefined;
        return var0;
    };
    var1.setRootViewStyleProvider = var6;
    var6 = function arg0() {
        var2 = arg0;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            _fun3275: for (var _fun3275_ip = 0;;) switch (_fun3275_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.run;
                    if (var2) {
                        _fun3275_ip = 97;
                        continue _fun3275
                    }
                case 15:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 0;
                    var2 = var4[var2];
                    var6 = undefined;
                    var5 = var3.bind(var6)(var2);
                    var3 = var0.component;
                    var2 = null;
                    var4 = var2 != var3;
                    var3 = var0.appKey;
                    var2 = 'AppRegistry.registerConfig(...): Every config is expected to set either `run` or `component`, but `%s` has neither.';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    var5 = _closure1_slot10;
                    var4 = var0.appKey;
                    var3 = var0.component;
                    var2 = var0.section;
                    var2 = var5.bind(var6)(var4, var3, var2);
                    _fun3275_ip = 121;
                    continue _fun3275;
                case 97:
                    var3 = _closure1_slot11;
                    var2 = var0.appKey;
                    var1 = var0.run;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                case 121:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var1.registerConfig = var6;
    var1.registerComponent = var5;
    var1.registerRunnable = var4;
    var4 = function arg0, arg1() {
        var4 = _closure1_slot10;
        var0 = undefined;
        var3 = arg0;
        var2 = arg1;
        var1 = true;
        var1 = var4.bind(var0)(var3, var2, var1);
        return var0;
    };
    var1.registerSection = var4;
    var4 = function() {
        var0 = global;
        var2 = var0.Object;
        var1 = var2.keys;
        var0 = _closure1_slot5;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.getAppKeys = var4;
    var1.getSectionKeys = var3;
    var3 = function() {
        var0 = global;
        var3 = var0.Object;
        var2 = var3.assign;
        var1 = _closure1_slot6;
        var0 = {};
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var1.getSections = var3;
    var3 = function arg0() {
        var1 = _closure1_slot5;
        var0 = arg0;
        var0 = var1[var0];
        return var0;
    };
    var1.getRunnable = var3;
    var3 = function() {
        var0 = {};
        var3 = _closure1_slot12;
        var2 = undefined;
        var2 = var3.bind(var2)();
        var0.sections = var2;
        var2 = global;
        var4 = var2.Object;
        var3 = var4.assign;
        var2 = _closure1_slot5;
        var1 = {};
        var1 = var3.bind(var4)(var1, var2);
        var0.runnables = var1;
        return var0;
    };
    var1.getRegistry = var3;
    var3 = function arg0() {
        var0 = arg0;
        _closure1_slot9 = var0;
        var0 = undefined;
        return var0;
    };
    var1.setComponentProviderInstrumentationHook = var3;
    var3 = function arg0, arg1, arg2() {
        _fun3282: for (var _fun3282_ip = 0;;) switch (_fun3282_ip) {
            case 0:
                var2 = arg0;
                var0 = 'LogBox';
                if (!(var0 !== var2)) {
                    _fun3282_ip = 56;
                    continue _fun3282
                }
            case 11:
                var0 = global;
                var1 = var0.HermesInternal;
                var4 = var1.concat;
                var3 = 'Running "';
                var1 = '"';
                var3 = var4.bind(var3)(var2, var1);
                var1 = var0.console;
                var0 = var1.log;
                var0 = var0.bind(var1)(var3);
            case 56:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 0;
                var3 = var5[var0];
                var0 = undefined;
                var7 = var4.bind(var0)(var3);
                var3 = _closure1_slot5;
                var6 = var3[var2];
                var3 = global;
                var3 = var3.HermesInternal;
                var9 = var3.concat;
                var8 = '"';
                var3 = '" has not been registered. This can happen if:\n* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.\n* A module failed to load due to an error and `AppRegistry.registerComponent` wasn\'t called.';
                var3 = var9.bind(var8)(var2, var3);
                var3 = var7.bind(var0)(var6, var3);
                var3 = 3;
                var3 = var5[var3];
                var6 = var4.bind(var0)(var3);
                var4 = var6.setActiveScene;
                var3 = {};
                var3.name = var2;
                var3 = var4.bind(var6)(var3);
                var4 = _closure1_slot5;
                var3 = var4[var2];
                var2 = _closure1_slot0;
                var1 = 4;
                var1 = var5[var1];
                var5 = var2.bind(var0)(var1);
                var2 = var5.coerceDisplayMode;
                var1 = arg2;
                var2 = var2.bind(var5)(var1);
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var1.runApplication = var3;
    var3 = function arg0, arg1, arg2() {
        _fun3283: for (var _fun3283_ip = 0;;) switch (_fun3283_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var0 = 'LogBox';
                if (!(var0 !== var2)) {
                    _fun3283_ip = 73;
                    continue _fun3283
                }
            case 14:
                var0 = 'Updating props for Surface "';
                var5 = var0 + var2;
                var0 = global;
                var3 = var0.JSON;
                var1 = var3.stringify;
                var3 = var1.bind(var3)(var4);
                var1 = '" with ';
                var1 = var5 + var1;
                var3 = var1 + var3;
                var1 = var0.console;
                var0 = var1.log;
                var0 = var0.bind(var1)(var3);
            case 73:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 0;
                var3 = var6[var0];
                var0 = undefined;
                var7 = var5.bind(var0)(var3);
                var3 = _closure1_slot5;
                var5 = var3[var2];
                var3 = global;
                var3 = var3.HermesInternal;
                var9 = var3.concat;
                var8 = '"';
                var3 = '" has not been registered. This can happen if:\n* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.\n* A module failed to load due to an error and `AppRegistry.registerComponent` wasn\'t called.';
                var3 = var9.bind(var8)(var2, var3);
                var3 = var7.bind(var0)(var5, var3);
                var3 = _closure1_slot5;
                var2 = var3[var2];
                var5 = _closure1_slot0;
                var1 = 4;
                var1 = var6[var1];
                var6 = var5.bind(var0)(var1);
                var5 = var6.coerceDisplayMode;
                var1 = arg2;
                var1 = var5.bind(var6)(var1);
                var1 = var2.bind(var3)(var4, var1);
                return var0;
        }
    };
    var1.setSurfaceProps = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 5;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.unmountComponentAtNodeAndRemoveContainer;
        var1 = arg0;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.unmountApplicationComponentAtRootTag = var3;
    var3 = function arg0, arg1() {
        var4 = _closure1_slot13;
        var0 = undefined;
        var3 = arg0;
        var2 = arg1;
        var1 = function() { // Environment: var1
            var0 = function() { // Environment: var0
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var1 = var4.bind(var0)(var3, var2, var1);
        return var0;
    };
    var1.registerHeadlessTask = var3;
    var1.registerCancellableHeadlessTask = var2;
    var2 = function arg0, arg1, arg2() {
        _fun3288: for (var _fun3288_ip = 0;;) switch (_fun3288_ip) {
            case 0:
                var5 = arg0;
                var8 = arg1;
                var _closure2_slot0 = var5;
                var2 = _closure1_slot7;
                var0 = var2.get;
                var2 = var0.bind(var2)(var8);
                if (var2) {
                    _fun3288_ip = 129;
                    continue _fun3288
                }
            case 32:
                var0 = global;
                var6 = var0.console;
                var4 = var6.warn;
                var0 = var0.HermesInternal;
                var7 = var0.concat;
                var0 = 'No task registered for key ';
                var0 = var7.bind(var0)(var8);
                var0 = var4.bind(var6)(var0);
                var4 = _closure1_slot1;
                var0 = _closure1_slot2;
                var7 = 6;
                var0 = var0[var7];
                var6 = undefined;
                var0 = var4.bind(var6)(var0);
                if (!var0) {
                    _fun3288_ip = 125;
                    continue _fun3288
                }
            case 97:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var4 = var4.bind(var6)(var3);
                var3 = var4.notifyTaskFinished;
                var0 = var3.bind(var4)(var5);
            case 125:
                var0 = undefined;
                return var0;
            case 129:
                var0 = undefined;
                var3 = var2.bind(var0)();
                var2 = arg2;
                var4 = var3.bind(var0)(var2);
                var3 = var4.then;
                var2 = function() { // Environment: var1
                    _fun3289: for (var _fun3289_ip = 0;;) switch (_fun3289_ip) {
                        case 0:
                            var4 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var3 = 6;
                            var2 = var0[var3];
                            var0 = undefined;
                            var2 = var4.bind(var0)(var2);
                            if (!var2) {
                                _fun3289_ip = 63;
                                continue _fun3289
                            }
                        case 28:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var1 = var1[var3];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.notifyTaskFinished;
                            var1 = _closure2_slot0;
                            var1 = var2.bind(var3)(var1);
                        case 63:
                            return var0;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.catch;
                var1 = function(arg0) { // Environment: var1
                    _fun3290: for (var _fun3290_ip = 0;;) switch (_fun3290_ip) {
                        case 0:
                            var5 = arg0;
                            var0 = global;
                            var1 = var0.console;
                            var0 = var1.error;
                            var0 = var0.bind(var1)(var5);
                            var4 = _closure1_slot1;
                            var0 = _closure1_slot2;
                            var3 = 6;
                            var2 = var0[var3];
                            var0 = undefined;
                            var2 = var4.bind(var0)(var2);
                            if (!var2) {
                                _fun3290_ip = 73;
                                continue _fun3290
                            }
                        case 49:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var4 = 7;
                            var4 = var7[var4];
                            var4 = var6.bind(var0)(var4);
                            var2 = var5 instanceof var4;
                        case 73:
                            if (!var2) {
                                _fun3290_ip = 128;
                                continue _fun3290
                            }
                        case 76:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var1 = var1[var3];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.notifyTaskRetry;
                            var1 = _closure2_slot0;
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.then;
                            var1 = function(arg0) { // Environment: var1
                                _fun3291: for (var _fun3291_ip = 0;;) switch (_fun3291_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (var0) {
                                            _fun3291_ip = 49;
                                            continue _fun3291
                                        }
                                    case 6:
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 6;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.notifyTaskFinished;
                                        var0 = _closure2_slot0;
                                        var0 = var1.bind(var2)(var0);
                                    case 49:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                        case 128:
                            return var0;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.startHeadlessTask = var2;
    var0 = function arg0, arg1() {
        _fun3292: for (var _fun3292_ip = 0;;) switch (_fun3292_ip) {
            case 0:
                var5 = arg1;
                var1 = _closure1_slot8;
                var0 = var1.get;
                var1 = var0.bind(var1)(var5);
                if (var1) {
                    _fun3292_ip = 80;
                    continue _fun3292
                }
            case 23:
                var0 = global;
                var3 = var0.Error;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var2 = "No task canceller registered for key '";
                var0 = "'";
                var7 = var4.bind(var2)(var5, var0);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = var2;
                var0 = new var8[var3](var7, var6);
                var0 = var0 instanceof Object ? var0 : var2;
                throw var0;
            case 80:
                var0 = undefined;
                var1 = var1.bind(var0)();
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var1.cancelHeadlessTask = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [44, 205, 245, 257, 256, 117, 258, 260]);