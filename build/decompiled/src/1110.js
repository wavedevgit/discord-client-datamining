// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function(arg0, arg1) { // Original name: processEvent, environment: var0
        _fun12194: for (var _fun12194_ip = 0;;) switch (_fun12194_ip) {
            case 0:
                var0 = arg0;
                var2 = arg1;
                var6 = null;
                var3 = var6 == var2;
                var4 = undefined;
                var1 = undefined;
                if (var3) {
                    _fun12194_ip = 25;
                    continue _fun12194
                }
            case 19:
                var1 = var2.originalException;
            case 25:
                var3 = undefined;
                if (!var1) {
                    _fun12194_ip = 48;
                    continue _fun12194
                }
            case 30:
                var5 = var6 == var2;
                var1 = undefined;
                if (var5) {
                    _fun12194_ip = 45;
                    continue _fun12194
                }
            case 39:
                var1 = var2.originalException;
            case 45:
                var3 = var1;
            case 48:
                var1 = {};
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 0;
                var9 = var7[var5];
                var10 = var8.bind(var4)(var9);
                var9 = var10.isTurboModuleEnabled;
                var9 = var9.bind(var10)();
                var1.turbo_module = var9;
                var9 = var7[var5];
                var10 = var8.bind(var4)(var9);
                var9 = var10.isFabricEnabled;
                var9 = var9.bind(var10)();
                var1.fabric = var9;
                var9 = var7[var5];
                var10 = var8.bind(var4)(var9);
                var9 = var10.getReactNativeVersion;
                var9 = var9.bind(var10)();
                var1.react_native_version = var9;
                var9 = var7[var5];
                var10 = var8.bind(var4)(var9);
                var9 = var10.isExpo;
                var9 = var9.bind(var10)();
                var1.expo = var9;
                var7 = var7[var5];
                var8 = var8.bind(var4)(var7);
                var7 = var8.isHermesEnabled;
                var7 = var7.bind(var8)();
                if (var7) {
                    _fun12194_ip = 219;
                    continue _fun12194
                }
            case 181:
                var8 = var6 == var3;
                var7 = undefined;
                if (var8) {
                    _fun12194_ip = 196;
                    continue _fun12194
                }
            case 190:
                var7 = var3.jsEngine;
            case 196:
                if (!var7) {
                    _fun12194_ip = 476;
                    continue _fun12194
                }
            case 202:
                var7 = var3.jsEngine;
                var1.js_engine = var7;
                _fun12194_ip = 476;
                continue _fun12194;
            case 219:
                var7 = 'hermes';
                var1.js_engine = var7;
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var7 = var7[var5];
                var8 = var8.bind(var4)(var7);
                var7 = var8.getHermesVersion;
                var7 = var7.bind(var8)();
                if (!var7) {
                    _fun12194_ip = 265;
                    continue _fun12194
                }
            case 259:
                var1.hermes_version = var7;
            case 265:
                var12 = undefined;
                var13 = undefined;
                var8 = var0.exception;
                var7 = undefined;
                if (!(var6 !== var8)) {
                    _fun12194_ip = 292;
                    continue _fun12194
                }
            case 281:
                var7 = undefined;
                if (!(var4 !== var8)) {
                    _fun12194_ip = 292;
                    continue _fun12194
                }
            case 287:
                var7 = var8.values;
            case 292:
                if (var7) {
                    _fun12194_ip = 321;
                    continue _fun12194
                }
            case 295:
                var9 = var0.threads;
                var8 = undefined;
                if (!(var6 !== var9)) {
                    _fun12194_ip = 318;
                    continue _fun12194
                }
            case 307:
                var8 = undefined;
                if (!(var4 !== var9)) {
                    _fun12194_ip = 318;
                    continue _fun12194
                }
            case 313:
                var8 = var9.values;
            case 318:
                var7 = var8;
            case 321:
                if (var7) {
                    _fun12194_ip = 328;
                    continue _fun12194
                }
            case 324:
                var7 = new Array(0);
            case 328:
                var11 = var7;
                var9 = var11[Symbol.iterator];
                var11 = var9().next;
                var10 = 1;
            case 337:
                var15 = var11().value;
                var14 = var9;
                var7 = false;
                if (!(var14 !== var4)) {
                    _fun12194_ip = 467;
                    continue _fun12194
                }
            case 350: // try_start_1
                var16 = var15.stacktrace;
                var12 = var16;
                var15 = undefined;
                if (!(var6 !== var16)) {
                    _fun12194_ip = 383;
                    continue _fun12194
                }
            case 365:
                var16 = var12;
                var15 = undefined;
                if (!(var4 !== var16)) {
                    _fun12194_ip = 383;
                    continue _fun12194
                }
            case 374:
                var16 = var12;
                var15 = var16.frames;
            case 383:
                var14 = var15;
                if (var15) {
                    _fun12194_ip = 393;
                    continue _fun12194
                }
            case 389:
                var14 = new Array(0);
            case 393:
                var16 = var14;
                var14 = var16;
                var15 = var14[Symbol.iterator];
                var14 = var15().next;
            case 402:
                var16 = var14().value;
                var17 = var15;
                if (!(var17 !== var4)) {
                    _fun12194_ip = 458;
                    continue _fun12194
                }
            case 413: // try_start_0
                var13 = var16;
                var16 = var16.platform;
                if (!(var4 === var16)) {
                    _fun12194_ip = 439;
                    continue _fun12194
                }
            case 426:
                var16 = var13;
                var16 = var16.lineno;
                if (!(var10 !== var16)) {
                    _fun12194_ip = 441;
                    continue _fun12194
                }
            case 439: // try_end0
                _fun12194_ip = 402;
                continue _fun12194;
            case 441:
                var15.return();
            case 444: // try_end1
                var9.return();
                var7 = true;
                _fun12194_ip = 467;
                continue _fun12194;
            case 451: // try_start_2 // catch_target0
                CatchBlockStart(arg_register = 14);
                var15.return();
                throw var14;
            case 458: // try_end2
                _fun12194_ip = 337;
                continue _fun12194;
            case 460: // catch_target1 // catch_target2
                CatchBlockStart(arg_register = 8);
                var9.return();
                throw var8;
            case 467:
                var7 = !var7;
                var1.hermes_debug_info = var7;
            case 476:
                var8 = var1.js_engine;
                var7 = 'hermes';
                if (!(var7 === var8)) {
                    _fun12194_ip = 530;
                    continue _fun12194
                }
            case 490:
                var7 = global;
                var10 = var7.Object;
                var9 = var10.assign;
                var8 = {};
                var7 = true;
                var8.hermes = var7;
                var7 = var0.tags;
                var7 = var9.bind(var10)(var8, var7);
                var0.tags = var7;
            case 530:
                var7 = var6 == var3;
                var6 = undefined;
                if (var7) {
                    _fun12194_ip = 545;
                    continue _fun12194
                }
            case 539:
                var6 = var3.componentStack;
            case 545:
                if (!var6) {
                    _fun12194_ip = 560;
                    continue _fun12194
                }
            case 548:
                var3 = var3.componentStack;
                var1.component_stack = var3;
            case 560:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var6 = var6.bind(var4)(var3);
                var3 = var6.getExpoGoVersion;
                var3 = var3.bind(var6)();
                if (!var3) {
                    _fun12194_ip = 596;
                    continue _fun12194
                }
            case 590:
                var1.expo_go_version = var3;
            case 596:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var3 = var3.bind(var4)(var2);
                var2 = var3.getExpoSdkVersion;
                var2 = var2.bind(var3)();
                if (!var2) {
                    _fun12194_ip = 632;
                    continue _fun12194
                }
            case 626:
                var1.expo_sdk_version = var2;
            case 632:
                var2 = global;
                var4 = var2.Object;
                var3 = var4.assign;
                var2 = {};
                var2.react_native_context = var1;
                var1 = var0.contexts;
                var1 = var3.bind(var4)(var2, var1);
                var0.contexts = var1;
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var0 = function() { // Original name: reactNativeInfoIntegration, environment: var0
        var0 = {};
        var1 = 'ReactNativeInfo';
        var0.name = var1;
        var1 = function() { // Original name: setupOnce, environment: var1
            var0 = undefined;
            return var0;
        };
        var0.setupOnce = var1;
        var1 = _closure1_slot2;
        var0.processEvent = var1;
        return var0;
    };
    var1.reactNativeInfoIntegration = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [999]);