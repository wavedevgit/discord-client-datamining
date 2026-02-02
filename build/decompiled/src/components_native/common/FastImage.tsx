// components_native/common/FastImage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun43479: for (var _fun43479_ip = 0;;) switch (_fun43479_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var3 = function arg0() {
                var0 = arg0;
                var3 = _closure1_slot2;
                var2 = _closure1_slot0;
                var1 = {};
                var6 = var1;
                var5 = var0;
                var4 = copyDataProperties(var6, var5);
                var4 = var0.placeholder;
                var0 = 'defaultSource';
                var1[var0] = var4;
                var4 = 0;
                var0 = 'fadeDuration';
                var1[var0] = var4;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var1 = global;
            var9 = var1.Object;
            var8 = var9.defineProperty;
            var7 = {};
            var0 = true;
            var7.value = var0;
            var0 = '__esModule';
            var0 = var8.bind(var9)(var2, var0, var7);
            var0 = 0;
            var8 = var5[var0];
            var7 = arg3;
            var0 = undefined;
            var9 = var7.bind(var0)(var8);
            var7 = 1;
            var7 = var5[var7];
            var7 = var4.bind(var0)(var7);
            var10 = var7.Image;
            var _closure1_slot0 = var10;
            var11 = var7.StyleSheet;
            var7 = var7.NativeModules;
            var _closure1_slot1 = var7;
            var7 = 2;
            var7 = var5[var7];
            var7 = var4.bind(var0)(var7);
            var7 = var7.jsx;
            var _closure1_slot2 = var7;
            var8 = var11.create;
            var7 = {};
            var12 = {};
            var13 = 'hidden';
            var12.overflow = var13;
            var7.base = var12;
            var7 = var8.bind(var11)(var7);
            var _closure1_slot3 = var7;
            var7 = 3;
            var8 = var5[var7];
            var7 = arg2;
            var8 = var7.bind(var0)(var8);
            var7 = {
                'componentName': 'DCDFastImageView',
                'componentMissingFallbackInstance': null,
                'warnWhenMissing': false
            };
            var7.componentMissingFallbackInstance = var10;
            var7 = var8.bind(var0)(var7);
            var _closure1_slot4 = var7;
            var8 = var9.memo;
            var7 = function(arg0) { // Environment: var6
                _fun43481: for (var _fun43481_ip = 0;;) switch (_fun43481_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = var4.source;
                        var10 = var4.style;
                        var2 = var4.placeholder;
                        var1 = var4.enableAnimation;
                        var3 = undefined;
                        var8 = var3 === var1;
                        if (var8) {
                            _fun43481_ip = 37;
                            continue _fun43481
                        }
                    case 34:
                        var8 = var1;
                    case 37:
                        var1 = var4.fade;
                        var7 = var3 === var1;
                        if (var7) {
                            _fun43481_ip = 53;
                            continue _fun43481
                        }
                    case 50:
                        var7 = var1;
                    case 53:
                        var1 = var4.usesSmallCache;
                        var6 = var3 !== var1;
                        if (!var6) {
                            _fun43481_ip = 69;
                            continue _fun43481
                        }
                    case 66:
                        var6 = var1;
                    case 69:
                        var1 = 'number';
                        var0 = typeof var0;
                        if (!(var1 !== var0)) {
                            _fun43481_ip = 224;
                            continue _fun43481
                        }
                    case 83:
                        var9 = null;
                        var0 = var9 != var2;
                        var5 = null;
                        if (!var0) {
                            _fun43481_ip = 112;
                            continue _fun43481
                        }
                    case 94:
                        var1 = _closure1_slot0;
                        var0 = var1.resolveAssetSource;
                        var5 = var0.bind(var1)(var2);
                    case 112:
                        var2 = _closure1_slot2;
                        var1 = _closure1_slot4;
                        var0 = {};
                        var14 = var0;
                        var13 = var4;
                        var12 = copyDataProperties(var14, var13);
                        var11 = _closure1_slot3;
                        var12 = var11.base;
                        var11 = new Array(2);
                        var11[0] = var12;
                        var11[1] = var10;
                        var10 = 'style';
                        var0[var10] = var11;
                        var10 = var9 == var5;
                        var9 = undefined;
                        if (var10) {
                            _fun43481_ip = 180;
                            continue _fun43481
                        }
                    case 175:
                        var9 = var5.uri;
                    case 180:
                        var5 = 'placeholder';
                        var0[var5] = var9;
                        var5 = 'enableAnimation';
                        var0[var5] = var8;
                        var5 = 'fade';
                        var0[var5] = var7;
                        var5 = 'usesSmallCache';
                        var0[var5] = var6;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    case 224:
                        var2 = _closure1_slot2;
                        var1 = _closure1_slot0;
                        var0 = {};
                        var14 = var0;
                        var13 = var4;
                        var4 = copyDataProperties(var14, var13);
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var9 = var8.bind(var9)(var7);
            var8 = var1.Object;
            var7 = var8.assign;
            var1 = {};
            var10 = function arg0() {
                var0 = arg0;
                var _closure2_slot0 = var0;
                var4 = global;
                var2 = var4.Promise;
                var1 = var2.race;
                var6 = var4.Promise;
                var0 = var6.prototype;
                var5 = Object.create(var0, {
                    constructor: {
                        value: var6
                    }
                });
                var7 = function(arg0) { // Environment: var3
                    var0 = _closure1_slot1;
                    var3 = var0.DCDFastImageViewManager;
                    var2 = var3.preload;
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var8 = var5;
                var0 = new var8[var6](var7, var6);
                var5 = var0 instanceof Object ? var0 : var5;
                var0 = new Array(2);
                var0[0] = var5;
                var5 = var4.Promise;
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var7 = function(arg0) { // Environment: var3
                    var0 = global;
                    var3 = var0.setTimeout;
                    var2 = undefined;
                    var1 = arg0;
                    var0 = 2000;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var8 = var4;
                var3 = new var8[var5](var7, var6);
                var3 = var3 instanceof Object ? var3 : var4;
                var0[1] = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1.preload = var10;
            var1 = var7.bind(var8)(var9, var1);
            var6 = function(arg0) { // Environment: var6
                var2 = _closure1_slot0;
                var1 = var2.prefetch;
                var0 = arg0;
                var2 = var1.bind(var2)(var0);
                var1 = var2.catch;
                var0 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var3.preload = var6;
            var6 = 4;
            var6 = var5[var6];
            var7 = var4.bind(var0)(var6);
            var6 = var7.isAndroid;
            var6 = var6.bind(var7)();
            if (!var6) {
                _fun43479_ip = 282;
                continue _fun43479
            }
        case 279:
            var1 = var3;
        case 282:
            var3 = 5;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'components_native/common/FastImage.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 4037, 478, 2]);