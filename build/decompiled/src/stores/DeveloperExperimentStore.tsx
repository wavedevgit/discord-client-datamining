// stores/DeveloperExperimentStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun81319: for (var _fun81319_ip = 0;;) switch (_fun81319_ip) {
        case 0:
            var4 = require;
            var6 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
                _fun81320: for (var _fun81320_ip = 0;;) switch (_fun81320_ip) {
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
                        _fun81320_ip = 76;
                        continue _fun81320;
                    case 74: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 76:
                        var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot11 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot11 = var0;
            var3 = function() { // Original name: init, environment: var1
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 9;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var1);
                var3 = var4.isStaffEnv;
                var5 = _closure1_slot8;
                var1 = var5.getCurrentUser;
                var1 = var1.bind(var5)();
                var1 = var3.bind(var4)(var1);
                _closure1_slot10 = var1;
                return var0;
            };
            var _closure1_slot12 = var3;
            var9 = global;
            var10 = var9.Object;
            var8 = var10.defineProperty;
            var7 = {};
            var0 = true;
            var7.value = var0;
            var0 = '__esModule';
            var0 = var8.bind(var10)(var2, var0, var7);
            var0 = 0;
            var7 = var5[var0];
            var0 = undefined;
            var7 = var6.bind(var0)(var7);
            var _closure1_slot2 = var7;
            var7 = 1;
            var7 = var5[var7];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot3 = var7;
            var7 = 2;
            var7 = var5[var7];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot4 = var7;
            var7 = 3;
            var7 = var5[var7];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot5 = var7;
            var7 = 4;
            var7 = var5[var7];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot6 = var7;
            var7 = 5;
            var7 = var5[var7];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot7 = var7;
            var7 = 6;
            var7 = var5[var7];
            var7 = var6.bind(var0)(var7);
            var _closure1_slot8 = var7;
            var7 = 7;
            var7 = var5[var7];
            var7 = var4.bind(var0)(var7);
            var7 = var7.ExperimentBuckets;
            var _closure1_slot9 = var7;
            var7 = 8;
            var7 = var5[var7];
            var7 = var4.bind(var0)(var7);
            var8 = var7.Environments;
            var10 = var8.DEVELOPMENT;
            var7 = 'production';
            var7 = var7 === var10;
            if (var7) {
                _fun81319_ip = 274;
                continue _fun81319
            }
        case 246:
            var9 = var9.window;
            var9 = var9.GLOBAL_ENV;
            var9 = var9.RELEASE_CHANNEL;
            var8 = var8.STAGING;
            var7 = var9 === var8;
        case 274:
            var _closure1_slot10 = var7;
            var7 = 10;
            var7 = var5[var7];
            var7 = var6.bind(var0)(var7);
            var7 = var7.Store;
            var1 = function(arg0) { // Environment: var1
                var3 = function(arg0) { // Original name: DeveloperExperimentStore, environment: var5
                    _fun81325: for (var _fun81325_ip = 0;;) switch (_fun81325_ip) {
                        case 0:
                            var3 = this;
                            var11 = 0;
                            var0 = copyRestArgs(var11);
                            var6 = _closure1_slot2;
                            var1 = _closure2_slot0;
                            var2 = undefined;
                            var6 = var6.bind(var2)(var3, var1);
                            var8 = new Array(0);
                            var11 = var8;
                            var10 = var0;
                            var9 = 0;
                            var0 = arraySpread(var11, var10, var9);
                            var0 = _closure1_slot5;
                            var7 = var0.bind(var2)(var1);
                            var1 = _closure1_slot4;
                            var0 = _closure1_slot11;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun81325_ip = 84;
                                continue _fun81325
                            }
                        case 71:
                            var0 = var7.apply;
                            var0 = var0.bind(var7)(var3, var8);
                            _fun81325_ip = 118;
                            continue _fun81325;
                        case 84:
                            var5 = global;
                            var6 = var5.Reflect;
                            var5 = var6.construct;
                            var4 = _closure1_slot5;
                            var4 = var4.bind(var2)(var3);
                            var4 = var4.constructor;
                            var0 = var5.bind(var6)(var7, var8, var4);
                        case 118:
                            var0 = var1.bind(var2)(var3, var0);
                            var1 = false;
                            var0.isDeveloper = var1;
                            return var0;
                    }
                };
                var _closure2_slot0 = var3;
                var4 = _closure1_slot6;
                var2 = undefined;
                var1 = arg0;
                var1 = var4.bind(var2)(var3, var1);
                var1 = _closure1_slot3;
                var4 = {};
                var0 = 'initialize';
                var4.key = var0;
                var0 = function() { // Original name: value, environment: var5
                    var6 = this;
                    var _closure3_slot0 = var6;
                    var4 = var6.waitFor;
                    var3 = _closure1_slot8;
                    var2 = _closure1_slot7;
                    var2 = var4.bind(var6)(var3, var2);
                    var2 = global;
                    var5 = var2.Object;
                    var4 = var5.defineProperties;
                    var3 = {};
                    var7 = {};
                    var8 = false;
                    var7.configurable = var8;
                    var8 = function() { // Original name: get, environment: var1
                        var0 = _closure1_slot10;
                        return var0;
                    };
                    var7.get = var8;
                    var8 = function() { // Original name: set, environment: var1
                        var0 = undefined;
                        return var0;
                    };
                    var7.set = var8;
                    var3.isDeveloper = var7;
                    var3 = var4.bind(var5)(var6, var3);
                    var3 = _closure1_slot12;
                    var0 = undefined;
                    var3 = var3.bind(var0)();
                    var2 = var2.setTimeout;
                    var1 = function() { // Environment: var1
                        var0 = global;
                        var2 = var0.Object;
                        var1 = var2.freeze;
                        var0 = _closure3_slot0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4.value = var0;
                var0 = new Array(2);
                var0[0] = var4;
                var4 = {};
                var6 = 'getExperimentDescriptor';
                var4.key = var6;
                var5 = function() { // Original name: value, environment: var5
                    _fun81330: for (var _fun81330_ip = 0;;) switch (_fun81330_ip) {
                        case 0:
                            var1 = _closure1_slot10;
                            var0 = null;
                            if (!var1) {
                                _fun81330_ip = 44;
                                continue _fun81330
                            }
                        case 12:
                            var1 = {
                                'type': 'developer',
                                'name': 'discord_dev_testing',
                                'revision': 1,
                                'override': true
                            };
                            var2 = _closure1_slot9;
                            var2 = var2.TREATMENT_1;
                            var1.bucket = var2;
                            var0 = var1;
                        case 44:
                            return var0;
                    }
                };
                var4.value = var5;
                var0[1] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var7 = var1.bind(var0)(var7);
            var1 = 'DeveloperExperimentStore';
            var7.displayName = var1;
            var1 = 11;
            var1 = var5[var1];
            var13 = var6.bind(var0)(var1);
            var1 = {};
            var1.CONNECTION_OPEN = var3;
            var1.OVERLAY_INITIALIZE = var3;
            var1.CURRENT_USER_UPDATE = var3;
            var3 = var7.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var7
                }
            });
            var14 = var3;
            var12 = var1;
            var1 = new var14[var7](var13, var12, var11);
            var1 = var1 instanceof Object ? var1 : var3;
            var3 = 12;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'stores/DeveloperExperimentStore.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1410, 1613, 1591, 1619, 1618, 566, 806, 2]);