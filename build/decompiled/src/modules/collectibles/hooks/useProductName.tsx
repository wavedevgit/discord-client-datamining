// modules/collectibles/hooks/useProductName.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var3 = function arg0() {
        _fun87428: for (var _fun87428_ip = 0;;) switch (_fun87428_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                var1 = var3 == var2;
                var0 = '';
                if (var1) {
                    _fun87428_ip = 98;
                    continue _fun87428
                }
            case 16:
                var1 = 'baseVariantName';
                var1 = var1 in var2;
                if (!var1) {
                    _fun87428_ip = 37;
                    continue _fun87428
                }
            case 27:
                var1 = var2.baseVariantName;
                if (!(var3 == var1)) {
                    _fun87428_ip = 89;
                    continue _fun87428
                }
            case 37:
                var1 = var2.variants;
                if (!(var3 != var1)) {
                    _fun87428_ip = 64;
                    continue _fun87428
                }
            case 47:
                var1 = var2.variants;
                var1 = var1.length;
                var4 = 0;
                if (!(!(var1 > var4))) {
                    _fun87428_ip = 71;
                    continue _fun87428
                }
            case 64:
                var1 = var2.name;
                _fun87428_ip = 87;
                continue _fun87428;
            case 71:
                var3 = var2.variants;
                var3 = var3[var4];
                var1 = var3.baseVariantName;
            case 87:
                _fun87428_ip = 95;
                continue _fun87428;
            case 89:
                var1 = var2.baseVariantName;
            case 95:
                var0 = var1;
            case 98:
                return var0;
        }
    };
    var _closure1_slot2 = var3;
    var0 = 3;
    var4 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/hooks/useProductName.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0) { // Environment: var1
        _fun87429: for (var _fun87429_ip = 0;;) switch (_fun87429_ip) {
            case 0:
                var5 = arg0;
                var3 = null;
                if (!(var3 != var5)) {
                    _fun87429_ip = 188;
                    continue _fun87429
                }
            case 12:
                var8 = _closure1_slot0;
                var0 = _closure1_slot1;
                var7 = 0;
                var2 = var0[var7];
                var6 = undefined;
                var2 = var8.bind(var6)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var0 = var0[var7];
                var0 = var8.bind(var6)(var0);
                var0 = var0.t;
                var0 = var0.z7y5vF;
                var2 = var2.bind(var4)(var0);
                var0 = 'baseVariantName';
                var0 = var0 in var5;
                if (!var0) {
                    _fun87429_ip = 102;
                    continue _fun87429
                }
            case 82:
                var0 = var5.baseVariantName;
                if (!(var3 != var0)) {
                    _fun87429_ip = 102;
                    continue _fun87429
                }
            case 92:
                var0 = var5.variantLabel;
                if (!(var0 === var2)) {
                    _fun87429_ip = 109;
                    continue _fun87429
                }
            case 102:
                var0 = var5.name;
                _fun87429_ip = 186;
                continue _fun87429;
            case 109:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = var1[var7];
                var3 = var2.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var1[var7];
                var1 = var2.bind(var6)(var1);
                var1 = var1.t;
                var2 = var1.BZN5k2;
                var1 = {};
                var6 = var5.baseVariantName;
                var1.baseVariantName = var6;
                var5 = var5.variantLabel;
                var1.variantLabel = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 186:
                return var0;
            case 188:
                var0 = '';
                return var0;
        }
    };
    var2.useProductName = var4;
    var2.useBaseProductName = var3;
    var3 = function(arg0) { // Environment: var1
        _fun87430: for (var _fun87430_ip = 0;;) switch (_fun87430_ip) {
            case 0:
                var5 = arg0;
                var3 = null;
                if (!(var3 != var5)) {
                    _fun87430_ip = 177;
                    continue _fun87430
                }
            case 12:
                var8 = _closure1_slot0;
                var0 = _closure1_slot1;
                var7 = 0;
                var2 = var0[var7];
                var6 = undefined;
                var2 = var8.bind(var6)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var0 = var0[var7];
                var0 = var8.bind(var6)(var0);
                var0 = var0.t;
                var0 = var0.z7y5vF;
                var2 = var2.bind(var4)(var0);
                var0 = var5.baseVariantName;
                if (!(var3 != var0)) {
                    _fun87430_ip = 91;
                    continue _fun87430
                }
            case 81:
                var0 = var5.variantLabel;
                if (!(var0 === var2)) {
                    _fun87430_ip = 98;
                    continue _fun87430
                }
            case 91:
                var0 = var5.name;
                _fun87430_ip = 175;
                continue _fun87430;
            case 98:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = var1[var7];
                var3 = var2.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.formatToPlainString;
                var1 = var1[var7];
                var1 = var2.bind(var6)(var1);
                var1 = var1.t;
                var2 = var1.BZN5k2;
                var1 = {};
                var6 = var5.baseVariantName;
                var1.baseVariantName = var6;
                var5 = var5.variantLabel;
                var1.variantLabel = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 175:
                return var0;
            case 177:
                var0 = '';
                return var0;
        }
    };
    var2.usePurchasedProductName = var3;
    var1 = function(arg0) { // Environment: var1
        _fun87431: for (var _fun87431_ip = 0;;) switch (_fun87431_ip) {
            case 0:
                var7 = arg0;
                var1 = _closure1_slot2;
                var5 = undefined;
                var4 = var1.bind(var5)(var7);
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var2 = 1;
                var2 = var1[var2];
                var6 = var3.bind(var5)(var2);
                var2 = var6.getProductType;
                var2 = var2.bind(var6)(var7);
                var6 = 2;
                var1 = var1[var6];
                var1 = var3.bind(var5)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.AVATAR_DECORATION;
                if (!(var1 !== var2)) {
                    _fun87431_ip = 279;
                    continue _fun87431
                }
            case 79:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var3.bind(var5)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.PROFILE_EFFECT;
                if (!(var1 !== var2)) {
                    _fun87431_ip = 213;
                    continue _fun87431
                }
            case 112:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var3.bind(var5)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.NAMEPLATE;
                if (!(var1 !== var2)) {
                    _fun87431_ip = 147;
                    continue _fun87431
                }
            case 145:
                return var4;
            case 147:
                var2 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 0;
                var3 = var7[var1];
                var3 = var2.bind(var5)(var3);
                var6 = var3.intl;
                var3 = var6.formatToPlainString;
                var1 = var7[var1];
                var1 = var2.bind(var5)(var1);
                var1 = var1.t;
                var2 = var1.YFOwHj;
                var1 = {};
                var1.product = var4;
                var1 = var3.bind(var6)(var2, var1);
                return var1;
            case 213:
                var2 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 0;
                var3 = var7[var1];
                var3 = var2.bind(var5)(var3);
                var6 = var3.intl;
                var3 = var6.formatToPlainString;
                var1 = var7[var1];
                var1 = var2.bind(var5)(var1);
                var1 = var1.t;
                var2 = var1.eR7moP;
                var1 = {};
                var1.product = var4;
                var1 = var3.bind(var6)(var2, var1);
                return var1;
            case 279:
                var1 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 0;
                var2 = var6[var0];
                var2 = var1.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.formatToPlainString;
                var0 = var6[var0];
                var0 = var1.bind(var5)(var0);
                var0 = var0.t;
                var1 = var0.lvBzLi;
                var0 = {};
                var0.product = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.useProductNameAndTypeLabel = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1234, 4609, 3484, 2]);