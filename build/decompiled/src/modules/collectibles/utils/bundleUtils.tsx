// modules/collectibles/utils/bundleUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function(arg0) { // Original name: extractBundleItems, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.ItemsSortingHat;
        var0 = arg0;
        var3 = var0.items;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var1 = var0 instanceof Object ? var0 : var1;
        var0 = {};
        var2 = var1.firstProfileEffect;
        var0.firstProfileEffect = var2;
        var2 = var1.firstAvatarDecoration;
        var0.firstAvatarDecoration = var2;
        var1 = var1.firstNameplate;
        var0.firstNameplate = var1;
        return var0;
    };
    var _closure1_slot2 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/utils/bundleUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: isValidCollectiblesBundle, environment: var1
        _fun87747: for (var _fun87747_ip = 0;;) switch (_fun87747_ip) {
            case 0:
                var2 = _closure1_slot2;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                var1 = var0.firstAvatarDecoration;
                var4 = var0.firstProfileEffect;
                var3 = var0.firstNameplate;
                var2 = null;
                var0 = var2 != var1;
                if (!var0) {
                    _fun87747_ip = 48;
                    continue _fun87747
                }
            case 44:
                var0 = var2 != var4;
            case 48:
                if (!var0) {
                    _fun87747_ip = 55;
                    continue _fun87747
                }
            case 51:
                var0 = var2 == var3;
            case 55:
                if (var0) {
                    _fun87747_ip = 79;
                    continue _fun87747
                }
            case 58:
                var1 = var2 != var1;
                if (!var1) {
                    _fun87747_ip = 69;
                    continue _fun87747
                }
            case 65:
                var1 = var2 != var4;
            case 69:
                if (!var1) {
                    _fun87747_ip = 76;
                    continue _fun87747
                }
            case 72:
                var1 = var2 != var3;
            case 76:
                var0 = var1;
            case 79:
                return var0;
        }
    };
    var2.isValidCollectiblesBundle = var3;
    var1 = function(arg0) { // Original name: bundleContainsNameplates, environment: var1
        _fun87748: for (var _fun87748_ip = 0;;) switch (_fun87748_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var0 = var2[var0];
                var2 = undefined;
                var4 = var4.bind(var2)(var0);
                var0 = var4.isBundleProduct;
                var0 = var0.bind(var4)(var3);
                var4 = !var0;
                var0 = !var4;
                if (var4) {
                    _fun87748_ip = 69;
                    continue _fun87748
                }
            case 48:
                var1 = _closure1_slot2;
                var1 = var1.bind(var2)(var3);
                var2 = var1.firstNameplate;
                var1 = null;
                var0 = var1 != var2;
            case 69:
                return var0;
        }
    };
    var2.bundleContainsNameplates = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6844, 4562, 2]);