// modules/build_overrides/BuildOverrideStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun77936: for (var _fun77936_ip = 0;;) switch (_fun77936_ip) {
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
                _fun77936_ip = 76;
                continue _fun77936;
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
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var11 = 0;
    var1 = var6[var11];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var10 = 1;
    var1 = var6[var10];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var9 = 2;
    var1 = var6[var9];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var8 = 3;
    var1 = var6[var8];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = {};
    var1.NotResolved = var11;
    var3 = 'NotResolved';
    var1[var11] = var3;
    var1.Resolving = var10;
    var3 = 'Resolving';
    var1[var10] = var3;
    var1.Resolved = var9;
    var3 = 'Resolved';
    var1[var9] = var3;
    var1.Invalid = var8;
    var3 = 'Invalid';
    var1[var8] = var3;
    var _closure1_slot8 = var1;
    var3 = var1.NotResolved;
    var _closure1_slot9 = var3;
    var3 = null;
    var _closure1_slot10 = var3;
    var3 = {};
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.Store;
    var3 = function(arg0) { // Environment: var4
        var3 = function() {
            _fun77940: for (var _fun77940_ip = 0;;) switch (_fun77940_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun77940_ip = 69;
                        continue _fun77940
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun77940_ip = 105;
                    continue _fun77940;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
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
        var0 = 'getCurrentBuildOverride';
        var4.key = var0;
        var0 = function() {
            var1 = function() {
                _fun77942: for (var _fun77942_ip = 0;;) switch (_fun77942_ip) {
                    case 0:
                        var2 = _closure1_slot9;
                        var1 = _closure1_slot8;
                        var1 = var1.NotResolved;
                        if (!(var2 === var1)) {
                            _fun77942_ip = 86;
                            continue _fun77942
                        }
                    case 21:
                        var1 = _closure1_slot8;
                        var1 = var1.Resolving;
                        _closure1_slot9 = var1;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 5;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var0 = var1.getBuildOverride;
                        var2 = var0.bind(var1)();
                        var1 = var2.then;
                        var0 = function(arg0) { // Environment: var0
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'CURRENT_BUILD_OVERRIDE_RESOLVED';
                            var1.type = var4;
                            var4 = arg0;
                            var1.overrides = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                    case 86:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = undefined;
            var0 = var1.bind(var0)();
            var0 = {};
            var2 = _closure1_slot9;
            var0.state = var2;
            var1 = _closure1_slot10;
            var0.overrides = var1;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getBuildOverride';
        var4.key = var6;
        var6 = function arg0() {
            var1 = arg0;
            var2 = function arg0() {
                _fun77945: for (var _fun77945_ip = 0;;) switch (_fun77945_ip) {
                    case 0:
                        var7 = arg0;
                        var _closure4_slot0 = var7;
                        var1 = _closure1_slot11;
                        var1 = var7 in var1;
                        if (var1) {
                            _fun77945_ip = 238;
                            continue _fun77945
                        }
                    case 26:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var5 = 5;
                        var1 = var1[var5];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var1);
                        var1 = var3.validateURL;
                        var1 = var1.bind(var3)(var7);
                        var3 = null;
                        if (!(var3 == var1)) {
                            _fun77945_ip = 112;
                            continue _fun77945
                        }
                    case 65:
                        var3 = {};
                        var10 = _closure1_slot11;
                        var11 = var3;
                        var6 = copyDataProperties(var11, var10);
                        var6 = {};
                        var6.url = var7;
                        var8 = _closure1_slot8;
                        var8 = var8.Invalid;
                        var6.state = var8;
                        var3[var7] = var6;
                        _closure1_slot11 = var3;
                        _fun77945_ip = 238;
                        continue _fun77945;
                    case 112:
                        var3 = {};
                        var10 = _closure1_slot11;
                        var11 = var3;
                        var6 = copyDataProperties(var11, var10);
                        var6 = {};
                        var6.url = var7;
                        var8 = var1.url;
                        var6.validatedURL = var8;
                        var8 = global;
                        var9 = var8.String;
                        var8 = var1.payload;
                        var8 = var9.bind(var4)(var8);
                        var6.payload = var8;
                        var8 = _closure1_slot8;
                        var8 = var8.Resolving;
                        var6.state = var8;
                        var3[var7] = var6;
                        _closure1_slot11 = var3;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var5];
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.getBuildOverrideMeta;
                        var1 = var1.url;
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.then;
                        var0 = function(arg0) { // Environment: var0
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'BUILD_OVERRIDE_RESOLVED';
                            var1.type = var4;
                            var4 = _closure4_slot0;
                            var1.url = var4;
                            var4 = arg0;
                            var1.override = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                    case 238:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var0 = _closure1_slot11;
            var0 = var0[var1];
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getBuildOverrides';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'BuildOverrideStore';
    var8.displayName = var3;
    var3 = 6;
    var3 = var6[var3];
    var14 = var7.bind(var0)(var3);
    var3 = {};
    var9 = function arg0() {
        _fun77948: for (var _fun77948_ip = 0;;) switch (_fun77948_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.url;
                var5 = var0.override;
                var0 = null;
                if (!(var0 != var5)) {
                    _fun77948_ip = 35;
                    continue _fun77948
                }
            case 20:
                var0 = _closure1_slot8;
                var6 = var0.Resolved;
                _fun77948_ip = 48;
                continue _fun77948;
            case 35:
                var0 = _closure1_slot8;
                var6 = var0.Invalid;
            case 48:
                var1 = {};
                var7 = _closure1_slot11;
                var8 = var1;
                var2 = copyDataProperties(var8, var7);
                var2 = {};
                var4 = _closure1_slot11;
                var7 = var4[var3];
                var8 = var2;
                var4 = copyDataProperties(var8, var7);
                var4 = 'state';
                var2[var4] = var6;
                var4 = 'override';
                var2[var4] = var5;
                var1[var3] = var2;
                _closure1_slot11 = var1;
                var0 = undefined;
                return var0;
        }
    };
    var3.BUILD_OVERRIDE_RESOLVED = var9;
    var4 = function arg0() {
        var0 = arg0;
        var1 = var0.overrides;
        var2 = _closure1_slot8;
        var2 = var2.Resolved;
        _closure1_slot9 = var2;
        _closure1_slot10 = var1;
        var0 = undefined;
        return var0;
    };
    var3.CURRENT_BUILD_OVERRIDE_RESOLVED = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var15 = var4;
    var13 = var3;
    var3 = new var15[var8](var14, var13, var12);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/build_overrides/BuildOverrideStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.State = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1592, 806, 566, 2]);