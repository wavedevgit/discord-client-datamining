// modules/avatar_decorations/AvatarDecorationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var4 = function arg0() {
        _fun17834: for (var _fun17834_ip = 0;;) switch (_fun17834_ip) {
            case 0:
                var2 = arg0;
                var1 = 'object';
                var0 = typeof var2;
                if (!(var1 === var0)) {
                    _fun17834_ip = 241;
                    continue _fun17834
                }
            case 17:
                var0 = null;
                if (!(var0 != var2)) {
                    _fun17834_ip = 241;
                    continue _fun17834
                }
            case 26:
                var1 = 'asset';
                var1 = var1 in var2;
                if (!var1) {
                    _fun17834_ip = 239;
                    continue _fun17834
                }
            case 40:
                var1 = var2.asset;
                var5 = 'string';
                var1 = typeof var1;
                if (!(var5 === var1)) {
                    _fun17834_ip = 239;
                    continue _fun17834
                }
            case 60:
                var1 = {};
                var3 = var2.asset;
                var1.asset = var3;
                var3 = 'sku_id';
                var3 = var3 in var2;
                if (!var3) {
                    _fun17834_ip = 97;
                    continue _fun17834
                }
            case 84:
                var4 = var2.sku_id;
                var4 = typeof var4;
                var3 = var5 === var4;
            case 97:
                if (!var3) {
                    _fun17834_ip = 112;
                    continue _fun17834
                }
            case 100:
                var3 = var2.sku_id;
                var1.skuId = var3;
            case 112:
                var3 = 'skuId';
                var3 = var3 in var2;
                if (!var3) {
                    _fun17834_ip = 136;
                    continue _fun17834
                }
            case 123:
                var4 = var2.skuId;
                var4 = typeof var4;
                var3 = var5 === var4;
            case 136:
                if (!var3) {
                    _fun17834_ip = 151;
                    continue _fun17834
                }
            case 139:
                var3 = var2.skuId;
                var1.skuId = var3;
            case 151:
                var3 = 'expires_at';
                var3 = var3 in var2;
                if (!var3) {
                    _fun17834_ip = 179;
                    continue _fun17834
                }
            case 162:
                var4 = var2.expires_at;
                var5 = 'number';
                var4 = typeof var4;
                var3 = var5 === var4;
            case 179:
                if (!var3) {
                    _fun17834_ip = 194;
                    continue _fun17834
                }
            case 182:
                var3 = var2.expires_at;
                var1.expiresAt = var3;
            case 194:
                var3 = 'expiresAt';
                var3 = var3 in var2;
                if (!var3) {
                    _fun17834_ip = 222;
                    continue _fun17834
                }
            case 205:
                var4 = var2.expiresAt;
                var5 = 'number';
                var4 = typeof var4;
                var3 = var5 === var4;
            case 222:
                if (!var3) {
                    _fun17834_ip = 237;
                    continue _fun17834
                }
            case 225:
                var2 = var2.expiresAt;
                var1.expiresAt = var2;
            case 237:
                return var1;
            case 239:
                return var0;
            case 241:
                var0 = null;
                return var0;
        }
    };
    var _closure1_slot2 = var4;
    var3 = function arg0() {
        _fun17835: for (var _fun17835_ip = 0;;) switch (_fun17835_ip) {
            case 0:
                var1 = arg0;
                var2 = null;
                var3 = var2 == var1;
                var0 = undefined;
                if (var3) {
                    _fun17835_ip = 20;
                    continue _fun17835
                }
            case 14:
                var0 = var1.expiresAt;
            case 20:
                var0 = var2 != var0;
                if (!var0) {
                    _fun17835_ip = 64;
                    continue _fun17835
                }
            case 27:
                var2 = var1.expiresAt;
                var1 = 1000;
                var2 = var1 * var2;
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var0 = var2 < var1;
            case 64:
                return var0;
        }
    };
    var _closure1_slot3 = var3;
    var0 = 1;
    var5 = var5[var0];
    var0 = undefined;
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/avatar_decorations/AvatarDecorationUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.parseAvatarDecorationData = var4;
    var2.isAvatarDecorationExpired = var3;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun17836: for (var _fun17836_ip = 0;;) switch (_fun17836_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun17836_ip = 68;
                    continue _fun17836
                }
            case 12:
                if (!(var0 != var1)) {
                    _fun17836_ip = 68;
                    continue _fun17836
                }
            case 16:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 0;
                var3 = var5[var3];
                var6 = undefined;
                var5 = var4.bind(var6)(var3);
                var4 = var5.isEqual;
                var0 = _closure1_slot2;
                var3 = var0.bind(var6)(var2);
                var0 = var0.bind(var6)(var1);
                var0 = var4.bind(var5)(var3, var0);
                _fun17836_ip = 72;
                continue _fun17836;
            case 68:
                var0 = var2 === var1;
            case 72:
                return var0;
        }
    };
    var2.isEqualAvatarDecoration = var3;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun17837: for (var _fun17837_ip = 0;;) switch (_fun17837_ip) {
            case 0:
                var3 = arg0;
                var2 = null;
                var0 = arg1;
                var0 = var2 != var0;
                if (!var0) {
                    _fun17837_ip = 47;
                    continue _fun17837
                }
            case 15:
                var5 = _closure1_slot3;
                var6 = var2 == var3;
                var4 = undefined;
                var1 = undefined;
                if (var6) {
                    _fun17837_ip = 39;
                    continue _fun17837
                }
            case 33:
                var1 = var3.avatarDecoration;
            case 39:
                var1 = var5.bind(var4)(var1);
                var0 = !var1;
            case 47:
                if (!var0) {
                    _fun17837_ip = 84;
                    continue _fun17837
                }
            case 50:
                var4 = var2 == var3;
                var1 = undefined;
                if (var4) {
                    _fun17837_ip = 80;
                    continue _fun17837
                }
            case 59:
                var3 = var3.avatarDecoration;
                var4 = var2 == var3;
                var1 = undefined;
                if (var4) {
                    _fun17837_ip = 80;
                    continue _fun17837
                }
            case 74:
                var1 = var3.asset;
            case 80:
                var0 = var2 != var1;
            case 84:
                return var0;
        }
    };
    var2.hasGlobalDefaultAvatarDecoration = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [22, 2]);