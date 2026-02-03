// modules/collectibles/utils/bundleUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.ItemsSortingHat;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = arg0;
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
    var0 = function arg0() {
        var2 = _closure1_slot2;
        var0 = arg0;
        var1 = var0.items;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot3 = var0;
    var0 = function arg0() {
        _fun87412: for (var _fun87412_ip = 0;;) switch (_fun87412_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.firstAvatarDecoration;
                var4 = var0.firstProfileEffect;
                var3 = var0.firstNameplate;
                var2 = null;
                var0 = var2 != var1;
                if (!var0) {
                    _fun87412_ip = 34;
                    continue _fun87412
                }
            case 30:
                var0 = var2 != var4;
            case 34:
                if (!var0) {
                    _fun87412_ip = 41;
                    continue _fun87412
                }
            case 37:
                var0 = var2 == var3;
            case 41:
                if (var0) {
                    _fun87412_ip = 65;
                    continue _fun87412
                }
            case 44:
                var1 = var2 != var1;
                if (!var1) {
                    _fun87412_ip = 55;
                    continue _fun87412
                }
            case 51:
                var1 = var2 != var4;
            case 55:
                if (!var1) {
                    _fun87412_ip = 62;
                    continue _fun87412
                }
            case 58:
                var1 = var2 != var3;
            case 62:
                var0 = var1;
            case 65:
                return var0;
        }
    };
    var _closure1_slot4 = var0;
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
    var3 = function arg0() {
        var2 = _closure1_slot4;
        var3 = _closure1_slot3;
        var1 = undefined;
        var0 = arg0;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.isValidCollectiblesBundle = var3;
    var3 = function arg0() {
        var2 = _closure1_slot4;
        var3 = _closure1_slot2;
        var1 = undefined;
        var0 = arg0;
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.isValidCollectiblesBundleItems = var3;
    var1 = function arg0() {
        _fun87415: for (var _fun87415_ip = 0;;) switch (_fun87415_ip) {
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
                    _fun87415_ip = 69;
                    continue _fun87415
                }
            case 48:
                var1 = _closure1_slot3;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [6876, 4595, 2]);