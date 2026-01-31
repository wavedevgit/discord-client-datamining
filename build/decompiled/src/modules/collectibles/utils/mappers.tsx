// modules/collectibles/utils/mappers.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = function arg0() {
        _fun18380: for (var _fun18380_ip = 0;;) switch (_fun18380_ip) {
            case 0:
                var2 = arg0;
                var1 = 'object';
                var0 = typeof var2;
                if (!(var1 === var0)) {
                    _fun18380_ip = 324;
                    continue _fun18380
                }
            case 17:
                var0 = null;
                if (!(var0 != var2)) {
                    _fun18380_ip = 324;
                    continue _fun18380
                }
            case 26:
                var1 = 'asset';
                var1 = var1 in var2;
                if (!var1) {
                    _fun18380_ip = 322;
                    continue _fun18380
                }
            case 40:
                var1 = var2.asset;
                var5 = 'string';
                var1 = typeof var1;
                if (!(var5 === var1)) {
                    _fun18380_ip = 322;
                    continue _fun18380
                }
            case 60:
                var1 = 'label';
                var1 = var1 in var2;
                if (!var1) {
                    _fun18380_ip = 320;
                    continue _fun18380
                }
            case 74:
                var1 = var2.label;
                var1 = typeof var1;
                if (!(var5 === var1)) {
                    _fun18380_ip = 320;
                    continue _fun18380
                }
            case 89:
                var1 = 'palette';
                var1 = var1 in var2;
                if (!var1) {
                    _fun18380_ip = 318;
                    continue _fun18380
                }
            case 103:
                var1 = var2.palette;
                var1 = typeof var1;
                if (!(var5 === var1)) {
                    _fun18380_ip = 318;
                    continue _fun18380
                }
            case 119:
                var1 = {};
                var3 = var2.asset;
                var1.asset = var3;
                var3 = var2.label;
                var1.label = var3;
                var3 = var2.palette;
                var1.palette = var3;
                var3 = 'skuId';
                var3 = var3 in var2;
                if (!var3) {
                    _fun18380_ip = 176;
                    continue _fun18380
                }
            case 163:
                var4 = var2.skuId;
                var4 = typeof var4;
                var3 = var5 === var4;
            case 176:
                if (!var3) {
                    _fun18380_ip = 191;
                    continue _fun18380
                }
            case 179:
                var3 = var2.skuId;
                var1.skuId = var3;
            case 191:
                var3 = 'sku_id';
                var3 = var3 in var2;
                if (!var3) {
                    _fun18380_ip = 215;
                    continue _fun18380
                }
            case 202:
                var4 = var2.sku_id;
                var4 = typeof var4;
                var3 = var5 === var4;
            case 215:
                if (!var3) {
                    _fun18380_ip = 230;
                    continue _fun18380
                }
            case 218:
                var3 = var2.sku_id;
                var1.skuId = var3;
            case 230:
                var3 = 'expiresAt';
                var3 = var3 in var2;
                if (!var3) {
                    _fun18380_ip = 258;
                    continue _fun18380
                }
            case 241:
                var4 = var2.expiresAt;
                var5 = 'number';
                var4 = typeof var4;
                var3 = var5 === var4;
            case 258:
                if (!var3) {
                    _fun18380_ip = 273;
                    continue _fun18380
                }
            case 261:
                var3 = var2.expiresAt;
                var1.expiresAt = var3;
            case 273:
                var3 = 'expires_at';
                var3 = var3 in var2;
                if (!var3) {
                    _fun18380_ip = 301;
                    continue _fun18380
                }
            case 284:
                var4 = var2.expires_at;
                var5 = 'number';
                var4 = typeof var4;
                var3 = var5 === var4;
            case 301:
                if (!var3) {
                    _fun18380_ip = 316;
                    continue _fun18380
                }
            case 304:
                var2 = var2.expires_at;
                var1.expiresAt = var2;
            case 316:
                return var1;
            case 318:
                return var0;
            case 320:
                return var0;
            case 322:
                return var0;
            case 324:
                var0 = null;
                return var0;
        }
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
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/utils/mappers.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun18381: for (var _fun18381_ip = 0;;) switch (_fun18381_ip) {
            case 0:
                var3 = arg0;
                var5 = null;
                var4 = 'object';
                var1 = typeof var3;
                var0 = null;
                if (!(var4 === var1)) {
                    _fun18381_ip = 88;
                    continue _fun18381
                }
            case 18:
                var1 = var5 == var3;
                var0 = null;
                if (var1) {
                    _fun18381_ip = 88;
                    continue _fun18381
                }
            case 27:
                var1 = 'nameplate';
                var2 = var1 in var3;
                var1 = null;
                if (!var2) {
                    _fun18381_ip = 85;
                    continue _fun18381
                }
            case 40:
                var2 = var3.nameplate;
                var2 = typeof var2;
                var1 = null;
                if (!(var4 === var2)) {
                    _fun18381_ip = 85;
                    continue _fun18381
                }
            case 55:
                var2 = {};
                var5 = _closure1_slot2;
                var4 = var3.nameplate;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2.nameplate = var3;
                var1 = var2;
            case 85:
                var0 = var1;
            case 88:
                return var0;
        }
    };
    var2.parseServerUserCollectibles = var3;
    var1 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1.asset;
        var0.src = var2;
        var2 = var1.label;
        var0.imgAlt = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 0;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.getNameplatePalette;
        var1 = var1.palette;
        var1 = var2.bind(var3)(var1);
        var0.palette = var1;
        return var0;
    };
    var2.getNameplateDataFromRecord = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1630, 2]);