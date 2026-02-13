// components_native/common/FastImage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun43715: for (var _fun43715_ip = 0;;) switch (_fun43715_ip) {
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
            var7 = var7.NativeModules;
            var _closure1_slot1 = var7;
            var7 = 2;
            var7 = var5[var7];
            var7 = var4.bind(var0)(var7);
            var7 = var7.jsx;
            var _closure1_slot2 = var7;
            var7 = 3;
            var7 = var5[var7];
            var11 = var4.bind(var0)(var7);
            var8 = var11.createStyles;
            var7 = {};
            var12 = {};
            var13 = 'hidden';
            var12.overflow = var13;
            var7.base = var12;
            var7 = var8.bind(var11)(var7);
            var _closure1_slot3 = var7;
            var7 = 4;
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
                _fun43717: for (var _fun43717_ip = 0;;) switch (_fun43717_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = _closure1_slot3;
                        var3 = undefined;
                        var12 = var1.bind(var3)();
                        var1 = var4.source;
                        var11 = var4.style;
                        var5 = var4.placeholder;
                        var2 = var4.enableAnimation;
                        var9 = var3 === var2;
                        if (var9) {
                            _fun43717_ip = 48;
                            continue _fun43717
                        }
                    case 45:
                        var9 = var2;
                    case 48:
                        var2 = var4.fade;
                        var8 = var3 === var2;
                        if (var8) {
                            _fun43717_ip = 64;
                            continue _fun43717
                        }
                    case 61:
                        var8 = var2;
                    case 64:
                        var2 = var4.usesSmallCache;
                        var7 = var3 !== var2;
                        if (!var7) {
                            _fun43717_ip = 80;
                            continue _fun43717
                        }
                    case 77:
                        var7 = var2;
                    case 80:
                        var2 = 'number';
                        var1 = typeof var1;
                        if (!(var2 !== var1)) {
                            _fun43717_ip = 225;
                            continue _fun43717
                        }
                    case 94:
                        var10 = null;
                        var1 = var10 != var5;
                        var6 = null;
                        if (!var1) {
                            _fun43717_ip = 120;
                            continue _fun43717
                        }
                    case 105:
                        var2 = _closure1_slot0;
                        var1 = var2.resolveAssetSource;
                        var6 = var1.bind(var2)(var5);
                    case 120:
                        var5 = _closure1_slot2;
                        var2 = _closure1_slot4;
                        var1 = {};
                        var15 = var1;
                        var14 = var4;
                        var13 = copyDataProperties(var15, var14);
                        var13 = var12.base;
                        var12 = new Array(2);
                        var12[0] = var13;
                        var12[1] = var11;
                        var11 = 'style';
                        var1[var11] = var12;
                        var11 = var10 == var6;
                        var10 = undefined;
                        if (var11) {
                            _fun43717_ip = 181;
                            continue _fun43717
                        }
                    case 176:
                        var10 = var6.uri;
                    case 181:
                        var6 = 'placeholder';
                        var1[var6] = var10;
                        var6 = 'enableAnimation';
                        var1[var6] = var9;
                        var6 = 'fade';
                        var1[var6] = var8;
                        var6 = 'usesSmallCache';
                        var1[var6] = var7;
                        var1 = var5.bind(var3)(var2, var1);
                        return var1;
                    case 225:
                        var2 = _closure1_slot2;
                        var1 = _closure1_slot0;
                        var0 = {};
                        var15 = var0;
                        var14 = var4;
                        var4 = copyDataProperties(var15, var14);
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
            var6 = 5;
            var6 = var5[var6];
            var7 = var4.bind(var0)(var6);
            var6 = var7.isAndroid;
            var6 = var6.bind(var7)();
            if (!var6) {
                _fun43715_ip = 288;
                continue _fun43715
            }
        case 285:
            var1 = var3;
        case 288:
            var3 = 6;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'components_native/common/FastImage.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 4082, 478, 2]);