// modules/mobile_native_updater/MobileNativeUpdateStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun88032: for (var _fun88032_ip = 0;;) switch (_fun88032_ip) {
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
                _fun88032_ip = 76;
                continue _fun88032;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
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
    var1 = var4.bind(var0)(var1);
    var7 = var1.UPDATE_CONFIG;
    var _closure1_slot8 = var7;
    var1 = var1.UPDATE_CHECK_INTERVAL;
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var5[var1];
    var7 = var6.bind(var0)(var1);
    var1 = var7.prototype;
    var8 = Object.create(var1, {
        constructor: {
            value: var7
        }
    });
    var1 = 'MobileNativeUpdateStore';
    var12 = var8;
    var11 = var1;
    var7 = new var12[var7](var11, var10);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot10 = var7;
    var7 = null;
    var8 = {
        'lastCheck': null,
        'checking': false,
        'newBuild': null
    };
    var _closure1_slot11 = var8;
    var _closure1_slot12 = var7;
    var7 = 9;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var8 = var7.Store;
    var7 = function(arg0) { // Environment: var3
        var3 = function arg0() {
            _fun88036: for (var _fun88036_ip = 0;;) switch (_fun88036_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun88036_ip = 84;
                        continue _fun88036
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun88036_ip = 118;
                    continue _fun88036;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = _closure1_slot8;
                    var1 = null;
                    var1 = var1 !== var2;
                    var0.hasUpdatesConfigured = var1;
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
        var0 = 'checkForNewerBuild';
        var4.key = var0;
        var0 = function() {
            _fun88037: for (var _fun88037_ip = 0;;) switch (_fun88037_ip) {
                case 0:
                    var2 = _closure1_slot11;
                    var3 = var2.checking;
                    var2 = true;
                    if (!(var2 !== var3)) {
                        _fun88037_ip = 116;
                        continue _fun88037
                    }
                case 21:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var2 = var4[var2];
                    var3 = undefined;
                    var6 = var5.bind(var3)(var2);
                    var5 = var6.dispatch;
                    var2 = {};
                    var7 = 'MOBILE_NATIVE_UPDATE_CHECK_STARTED';
                    var2.type = var7;
                    var2 = var5.bind(var6)(var2);
                    var2 = _closure1_slot0;
                    var1 = 8;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.checkForNewerBuild;
                    var3 = var1.bind(var2)();
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 7;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'MOBILE_NATIVE_UPDATE_CHECK_FINISHED';
                        var1.type = var4;
                        var4 = arg0;
                        var1.newBuild = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 7;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'MOBILE_NATIVE_UPDATE_CHECK_FAILED';
                        var1.type = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                case 116:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'ensureInitialized';
        var4.key = var6;
        var6 = function() {
            _fun88040: for (var _fun88040_ip = 0;;) switch (_fun88040_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var1 = var1.hasUpdatesConfigured;
                    if (!var1) {
                        _fun88040_ip = 90;
                        continue _fun88040
                    }
                case 18:
                    var2 = _closure1_slot12;
                    var1 = null;
                    if (!(var1 === var2)) {
                        _fun88040_ip = 90;
                        continue _fun88040
                    }
                case 31:
                    var3 = function() {
                        var2 = _closure1_slot10;
                        var1 = var2.info;
                        var0 = 'Checking for new native builds in the background';
                        var0 = var1.bind(var2)(var0);
                        var1 = _closure3_slot0;
                        var0 = var1.checkForNewerBuild;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0 = global;
                    var5 = var0.setInterval;
                    var2 = _closure1_slot9;
                    var1 = var2.asMilliseconds;
                    var1 = var1.bind(var2)();
                    var2 = undefined;
                    var1 = var5.bind(var2)(var3, var1);
                    _closure1_slot12 = var1;
                    var1 = var0.setTimeout;
                    var0 = 1000;
                    var0 = var1.bind(var2)(var3, var0);
                case 90:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'latestFetchedBuild';
        var4.key = var6;
        var5 = function() {
            var1 = this;
            var0 = var1.ensureInitialized;
            var0 = var0.bind(var1)();
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var7.bind(var0)(var8);
    var7.displayName = var1;
    var1 = 7;
    var1 = var5[var1];
    var11 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function() {
        var1 = {};
        var4 = _closure1_slot11;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = true;
        var2 = 'checking';
        var1[var2] = var3;
        _closure1_slot11 = var1;
        var0 = undefined;
        return var0;
    };
    var1.MOBILE_NATIVE_UPDATE_CHECK_STARTED = var8;
    var8 = function() {
        var1 = {};
        var4 = _closure1_slot11;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        var3 = false;
        var2 = 'checking';
        var1[var2] = var3;
        _closure1_slot11 = var1;
        var0 = undefined;
        return var0;
    };
    var1.MOBILE_NATIVE_UPDATE_CHECK_FAILED = var8;
    var3 = function arg0() {
        var0 = arg0;
        var0 = var0.newBuild;
        var1 = {};
        var2 = global;
        var2 = var2.Date;
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var4 = var3;
        var2 = new var4[var2](var3);
        var2 = var2 instanceof Object ? var2 : var3;
        var1.lastCheck = var2;
        var2 = false;
        var1.checking = var2;
        var1.newBuild = var0;
        _closure1_slot11 = var1;
        var0 = undefined;
        return var0;
    };
    var1.MOBILE_NATIVE_UPDATE_CHECK_FINISHED = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var12 = var3;
    var10 = var1;
    var1 = new var12[var7](var11, var10, var9);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/mobile_native_updater/MobileNativeUpdateStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3320, 3, 806, 11385, 566, 2]);