// modules/collectibles/hooks/useShopProductItems.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var4 = var6[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot4 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0() {
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var3 = var2.sortByTypes;
            var1 = arg0;
            var1 = var3.bind(var2)(var1);
            var2.itemsByTypes = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'firstAvatarDecoration';
        var0.key = var1;
        var1 = function() {
            var2 = this;
            var1 = var2.getFirstItemByType;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var0 = 3;
            var3 = var3[var0];
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var0 = var0.CollectiblesItemType;
            var0 = var0.AVATAR_DECORATION;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.get = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var5 = 'firstProfileEffect';
        var0.key = var5;
        var5 = function() {
            var2 = this;
            var1 = var2.getFirstItemByType;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var0 = 3;
            var3 = var3[var0];
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var0 = var0.CollectiblesItemType;
            var0 = var0.PROFILE_EFFECT;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.get = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'firstNameplate';
        var0.key = var5;
        var5 = function() {
            var2 = this;
            var1 = var2.getFirstItemByType;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var0 = 3;
            var3 = var3[var0];
            var0 = undefined;
            var0 = var4.bind(var0)(var3);
            var0 = var0.CollectiblesItemType;
            var0 = var0.NAMEPLATE;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.get = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getFirstItemByType';
        var0.key = var5;
        var5 = function arg0() {
            _fun56851: for (var _fun56851_ip = 0;;) switch (_fun56851_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.itemsByTypes;
                    var1 = var2.get;
                    var0 = arg0;
                    var2 = var1.bind(var2)(var0);
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun56851_ip = 32;
                        continue _fun56851
                    }
                case 28:
                    var2 = new Array(0);
                case 32:
                    var0 = 0;
                    var0 = var2[var0];
                    if (!(var1 == var0)) {
                        _fun56851_ip = 46;
                        continue _fun56851
                    }
                case 42:
                    var1 = undefined;
                    return var1;
                case 46:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'sortByTypes';
        var0.key = var5;
        var4 = function arg0() {
            var3 = arg0;
            var2 = var3.reduce;
            var0 = global;
            var0 = var0.Map;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var6 = var1;
            var0 = new var6[var0](var5);
            var1 = var0 instanceof Object ? var0 : var1;
            var0 = function(arg0, arg1) { // Environment: var0
                _fun56853: for (var _fun56853_ip = 0;;) switch (_fun56853_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = arg1;
                        var2 = var0.get;
                        var1 = var3.type;
                        var2 = var2.bind(var0)(var1);
                        var1 = null;
                        if (!(var1 == var2)) {
                            _fun56853_ip = 53;
                            continue _fun56853
                        }
                    case 27:
                        var5 = var0.set;
                        var4 = var3.type;
                        var1 = new Array(1);
                        var1[0] = var3;
                        var1 = var5.bind(var0)(var4, var1);
                        _fun56853_ip = 63;
                        continue _fun56853;
                    case 53:
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
                    case 63:
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0.value = var4;
        var1[4] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot5 = var3;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useShopProductItems.tsx';
    var4 = var5.bind(var6)(var4);
    var2.ItemsSortingHat = var3;
    var3 = function(arg0) { // Environment: var1
        var4 = arg0;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot4;
        var2 = var3.useMemo;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot5;
            var0 = _closure2_slot0;
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
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useShopProductItems = var3;
    var1 = function(arg0) { // Environment: var1
        _fun56856: for (var _fun56856_ip = 0;;) switch (_fun56856_ip) {
            case 0:
                var6 = arg0;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 4;
                var2 = var8[var1];
                var0 = undefined;
                var2 = var7.bind(var0)(var2);
                var4 = var2.intl;
                var3 = var4.string;
                var2 = var8[var1];
                var2 = var7.bind(var0)(var2);
                var2 = var2.t;
                var2 = var2["7v0T9P"];
                var5 = var3.bind(var4)(var2);
                var2 = var8[var1];
                var2 = var7.bind(var0)(var2);
                var4 = var2.intl;
                var3 = var4.string;
                var2 = var8[var1];
                var2 = var7.bind(var0)(var2);
                var2 = var2.t;
                var2 = var2.wR5wOo;
                var4 = var3.bind(var4)(var2);
                var2 = var8[var1];
                var2 = var7.bind(var0)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var8[var1];
                var1 = var7.bind(var0)(var1);
                var1 = var1.t;
                var1 = var1.x5CoXR;
                var10 = var2.bind(var3)(var1);
                var8 = var6.bundledProducts;
                var7 = null;
                var3 = var5;
                var2 = var4;
                var1 = var10;
                if (!(var7 != var8)) {
                    _fun56856_ip = 324;
                    continue _fun56856
                }
            case 175:
                var8 = var6.bundledProducts;
                var8 = var8.length;
                var9 = 0;
                if (!(var8 > var9)) {
                    _fun56856_ip = 219;
                    continue _fun56856
                }
            case 192:
                var8 = var6.bundledProducts;
                var9 = var8[var9];
                var11 = var7 == var9;
                var8 = undefined;
                if (var11) {
                    _fun56856_ip = 216;
                    continue _fun56856
                }
            case 211:
                var8 = var9.name;
            case 216:
                var5 = var8;
            case 219:
                var8 = var6.bundledProducts;
                var8 = var8.length;
                var9 = 1;
                if (!(var8 > var9)) {
                    _fun56856_ip = 264;
                    continue _fun56856
                }
            case 237:
                var8 = var6.bundledProducts;
                var9 = var8[var9];
                var11 = var7 == var9;
                var8 = undefined;
                if (var11) {
                    _fun56856_ip = 261;
                    continue _fun56856
                }
            case 256:
                var8 = var9.name;
            case 261:
                var4 = var8;
            case 264:
                var8 = var6.bundledProducts;
                var9 = var8.length;
                var8 = 2;
                var3 = var5;
                var2 = var4;
                var1 = var10;
                if (!(var9 > var8)) {
                    _fun56856_ip = 324;
                    continue _fun56856
                }
            case 291:
                var6 = var6.bundledProducts;
                var6 = var6[var8];
                var7 = var7 == var6;
                var0 = undefined;
                if (var7) {
                    _fun56856_ip = 315;
                    continue _fun56856
                }
            case 310:
                var0 = var6.name;
            case 315:
                var1 = var0;
                var3 = var5;
                var2 = var4;
            case 324:
                var0 = {};
                var0.itemOneName = var3;
                var0.itemTwoName = var2;
                var0.itemThreeName = var1;
                return var0;
        }
    };
    var2.getBundleItemNames = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 31, 3495, 1234, 2]);