// modules/media/native/IosImageTypesManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun37498: for (var _fun37498_ip = 0;;) switch (_fun37498_ip) {
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
            case 70: // try_end0
                _fun37498_ip = 74;
                continue _fun37498;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var8 = var6.bind(var0)(var3);
    var3 = var8.prototype;
    var7 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var11 = 'IosImageTypesManager';
    var12 = var7;
    var3 = new var12[var8](var11, var10);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot7 = var3;
    var3 = null;
    var _closure1_slot8 = var3;
    var _closure1_slot9 = var3;
    var _closure1_slot10 = var3;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: IosImageTypesManager, environment: var5
            _fun37502: for (var _fun37502_ip = 0;;) switch (_fun37502_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot1;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot4;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot3;
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun37502_ip = 69;
                        continue _fun37502
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun37502_ip = 105;
                    continue _fun37502;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot4;
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
        var4 = _closure1_slot5;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot2;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var1 = this;
            var0 = var1.initializeSupportedImageTypes;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(11);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'initializeSupportedImageTypes';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            _fun37505: for (var _fun37505_ip = 0;;) switch (_fun37505_ip) {
                case 0:
                    var0 = undefined;
                    var4 = undefined;
                    var3 = undefined;
                    var1 = undefined;
                    var12 = undefined;
                    var13 = undefined;
                    var14 = undefined;
                    var15 = undefined;
                    var5 = _closure1_slot8;
                    var11 = null;
                    if (!(var11 === var5)) {
                        _fun37505_ip = 507;
                        continue _fun37505
                    }
                case 32: // try_start_0
                    var5 = _closure1_slot6;
                    var6 = var5.MediaManager;
                    var5 = var6.getSupportedImageTypes;
                    var7 = var5.bind(var6)();
                    _closure1_slot8 = var7;
                    var5 = global;
                    var6 = var5.Set;
                    var8 = var6.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var6
                        }
                    });
                    var19 = var8;
                    var6 = new var19[var6](var18);
                    var4 = var6 instanceof Object ? var6 : var8;
                    var6 = var5.Set;
                    var8 = var6.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var6
                        }
                    });
                    var19 = var8;
                    var6 = new var19[var6](var18);
                    var3 = var6 instanceof Object ? var6 : var8;
                    var6 = var5.Set;
                    var8 = var6.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var6
                        }
                    });
                    var19 = var8;
                    var6 = new var19[var6](var18);
                    var1 = var6 instanceof Object ? var6 : var8;
                    var10 = 0;
                    var12 = 0;
                    var6 = var5.Object;
                    var5 = var6.entries;
                    var5 = var5.bind(var6)(var7);
                    var13 = var5;
                    var5 = var5.length;
                    var9 = '';
                    var8 = 2;
                    var7 = 1;
                    if (!(var10 < var5)) {
                        _fun37505_ip = 326;
                        continue _fun37505
                    }
                case 184:
                    var6 = var13;
                    var5 = var12;
                    var6 = var6[var5];
                    var5 = _closure1_slot0;
                    var5 = var5.bind(var0)(var6, var8);
                    var6 = var5[var10];
                    var5 = var5[var7];
                    var6 = var5.extension;
                    var14 = var6;
                    var15 = var5.mimeType;
                    var6 = var11 != var6;
                    var5 = var6;
                    if (!var6) {
                        _fun37505_ip = 244;
                        continue _fun37505
                    }
                case 237:
                    var6 = var14;
                    var5 = var9 !== var6;
                case 244:
                    if (!var5) {
                        _fun37505_ip = 263;
                        continue _fun37505
                    }
                case 247:
                    var16 = var4;
                    var6 = var16.add;
                    var5 = var14;
                    var5 = var6.bind(var16)(var5);
                case 263:
                    var6 = var15;
                    var6 = var11 != var6;
                    var5 = var6;
                    if (!var6) {
                        _fun37505_ip = 283;
                        continue _fun37505
                    }
                case 276:
                    var6 = var15;
                    var5 = var9 !== var6;
                case 283:
                    if (!var5) {
                        _fun37505_ip = 302;
                        continue _fun37505
                    }
                case 286:
                    var16 = var3;
                    var6 = var16.add;
                    var5 = var15;
                    var5 = var6.bind(var16)(var5);
                case 302:
                    var5 = var12;
                    var6 = var5 + 1;
                    var12 = var6;
                    var5 = var13;
                    var5 = var5.length;
                    if (var6 < var5) {
                        _fun37505_ip = 184;
                        continue _fun37505
                    }
                case 326:
                    var6 = var4.add;
                    var5 = 'jpg';
                    var5 = var6.bind(var4)(var5);
                    var6 = var1.add;
                    var5 = 'gif';
                    var5 = var6.bind(var1)(var5);
                    var6 = var1.add;
                    var5 = 'webp';
                    var5 = var6.bind(var1)(var5);
                    _closure1_slot9 = var4;
                    _closure1_slot10 = var3;
                    _closure1_slot11 = var1;
                case 384: // try_end0
                    _fun37505_ip = 507;
                    continue _fun37505;
                case 386: // catch_target0
                    CatchBlockStart(arg_register = 5);
                    var4 = _closure1_slot7;
                    var3 = var4.warn;
                    var1 = 'Failed to get iOS supported image types:';
                    var1 = var3.bind(var4)(var1, var5);
                    var1 = {};
                    _closure1_slot8 = var1;
                    var1 = global;
                    var3 = var1.Set;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var19 = var4;
                    var3 = new var19[var3](var18);
                    var3 = var3 instanceof Object ? var3 : var4;
                    _closure1_slot9 = var3;
                    var3 = var1.Set;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var19 = var4;
                    var3 = new var19[var3](var18);
                    var3 = var3 instanceof Object ? var3 : var4;
                    _closure1_slot10 = var3;
                    var1 = var1.Set;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var1
                        }
                    });
                    var19 = var3;
                    var1 = new var19[var1](var18);
                    var1 = var1 instanceof Object ? var1 : var3;
                    _closure1_slot11 = var1;
                case 507:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getSupportedImageTypes';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot8;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isImageTypeSupported';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun37507: for (var _fun37507_ip = 0;;) switch (_fun37507_ip) {
                case 0:
                    var2 = _closure1_slot8;
                    var0 = null;
                    var0 = var0 !== var2;
                    if (!var0) {
                        _fun37507_ip = 27;
                        continue _fun37507
                    }
                case 16:
                    var2 = _closure1_slot8;
                    var1 = arg0;
                    var0 = var1 in var2;
                case 27:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getSupportedExtensions';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot9;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getSupportedMimeTypes';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot10;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getAnimatedExtensions';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'isExtensionSupported';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun37511: for (var _fun37511_ip = 0;;) switch (_fun37511_ip) {
                case 0:
                    var2 = _closure1_slot9;
                    var0 = null;
                    var0 = var0 !== var2;
                    if (!var0) {
                        _fun37511_ip = 33;
                        continue _fun37511
                    }
                case 16:
                    var3 = _closure1_slot9;
                    var2 = var3.has;
                    var1 = arg0;
                    var0 = var2.bind(var3)(var1);
                case 33:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'isMimeTypeSupported';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun37512: for (var _fun37512_ip = 0;;) switch (_fun37512_ip) {
                case 0:
                    var2 = _closure1_slot10;
                    var0 = null;
                    var0 = var0 !== var2;
                    if (!var0) {
                        _fun37512_ip = 33;
                        continue _fun37512
                    }
                case 16:
                    var3 = _closure1_slot10;
                    var2 = var3.has;
                    var1 = arg0;
                    var0 = var2.bind(var3)(var1);
                case 33:
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'isExtensionAnimated';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun37513: for (var _fun37513_ip = 0;;) switch (_fun37513_ip) {
                case 0:
                    var2 = _closure1_slot11;
                    var0 = null;
                    var0 = var0 !== var2;
                    if (!var0) {
                        _fun37513_ip = 33;
                        continue _fun37513
                    }
                case 16:
                    var3 = _closure1_slot11;
                    var2 = var3.has;
                    var1 = arg0;
                    var0 = var2.bind(var3)(var1);
                case 33:
                    return var0;
            }
        };
        var4.value = var5;
        var0[10] = var4;
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
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media/native/IosImageTypesManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 18, 27, 3, 3977, 2]);