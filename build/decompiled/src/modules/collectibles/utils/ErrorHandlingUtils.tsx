// modules/collectibles/utils/ErrorHandlingUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var4.bind(var0)(var6);
    var7 = var6.AbortCodes;
    var8 = var7.UNAUTHORIZED;
    var6 = new Array(3);
    var6[0] = var8;
    var8 = var7.EMAIL_VERIFICATION_REQUIRED;
    var6[1] = var8;
    var7 = var7.USER_BANNED;
    var6[2] = var7;
    var _closure1_slot2 = var6;
    var8 = var3.Set;
    var6 = var8.prototype;
    var7 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var11 = [500, 502, 503, 504];
    var12 = var7;
    var6 = new var12[var8](var11, var10);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot3 = var6;
    var7 = var3.Set;
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = [401, 403, 405, 409, 429];
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/utils/ErrorHandlingUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun42599: for (var _fun42599_ip = 0;;) switch (_fun42599_ip) {
            case 0:
                var2 = arg0;
                var9 = null;
                var0 = var9 == var2;
                if (var0) {
                    _fun42599_ip = 377;
                    continue _fun42599
                }
            case 15:
                var3 = var9 == var2;
                var1 = false;
                if (var3) {
                    _fun42599_ip = 374;
                    continue _fun42599
                }
            case 27:
                var4 = var9 == var2;
                var3 = undefined;
                if (var4) {
                    _fun42599_ip = 42;
                    continue _fun42599
                }
            case 36:
                var3 = var2.cause;
            case 42:
                var5 = var9 == var3;
                var4 = undefined;
                if (var5) {
                    _fun42599_ip = 57;
                    continue _fun42599
                }
            case 51:
                var4 = var3.crossDomain;
            case 57:
                var3 = true;
                var3 = var3 === var4;
                if (var3) {
                    _fun42599_ip = 371;
                    continue _fun42599
                }
            case 69:
                var4 = 'status';
                var4 = var4 in var2;
                var5 = !var4;
                if (!var4) {
                    _fun42599_ip = 99;
                    continue _fun42599
                }
            case 83:
                var4 = var2.status;
                var6 = 'number';
                var4 = typeof var4;
                var5 = var6 !== var4;
            case 99:
                if (var5) {
                    _fun42599_ip = 172;
                    continue _fun42599
                }
            case 102:
                var6 = var2.status;
                var4 = 0;
                var4 = var4 !== var6;
                if (!var4) {
                    _fun42599_ip = 141;
                    continue _fun42599
                }
            case 116:
                var10 = _closure1_slot3;
                var8 = var10.has;
                var6 = var2.status;
                var6 = var8.bind(var10)(var6);
                var4 = !var6;
            case 141:
                if (!var4) {
                    _fun42599_ip = 169;
                    continue _fun42599
                }
            case 144:
                var10 = _closure1_slot4;
                var8 = var10.has;
                var6 = var2.status;
                var6 = var8.bind(var10)(var6);
                var4 = !var6;
            case 169:
                var5 = var4;
            case 172:
                var4 = !var5;
                if (!var5) {
                    _fun42599_ip = 368;
                    continue _fun42599
                }
            case 181:
                var10 = 'code';
                var5 = var10 in var2;
                var6 = !var5;
                if (!var5) {
                    _fun42599_ip = 211;
                    continue _fun42599
                }
            case 195:
                var5 = var2.code;
                var8 = 'number';
                var5 = typeof var5;
                var6 = var8 !== var5;
            case 211:
                if (var6) {
                    _fun42599_ip = 239;
                    continue _fun42599
                }
            case 214:
                var11 = _closure1_slot2;
                var8 = var11.includes;
                var5 = var2.code;
                var5 = var8.bind(var11)(var5);
                var6 = !var5;
            case 239:
                var5 = !var6;
                if (!var6) {
                    _fun42599_ip = 365;
                    continue _fun42599
                }
            case 245:
                var6 = 'body';
                var6 = var6 in var2;
                if (!var6) {
                    _fun42599_ip = 265;
                    continue _fun42599
                }
            case 256:
                var8 = var2.body;
                var6 = var9 != var8;
            case 265:
                if (!var6) {
                    _fun42599_ip = 284;
                    continue _fun42599
                }
            case 268:
                var8 = var2.body;
                var11 = 'object';
                var8 = typeof var8;
                var6 = var11 === var8;
            case 284:
                if (!var6) {
                    _fun42599_ip = 296;
                    continue _fun42599
                }
            case 287:
                var8 = var2.body;
                var6 = var10 in var8;
            case 296:
                if (!var6) {
                    _fun42599_ip = 329;
                    continue _fun42599
                }
            case 299:
                var8 = var2.body;
                var9 = var9 == var8;
                var7 = undefined;
                if (var9) {
                    _fun42599_ip = 318;
                    continue _fun42599
                }
            case 313:
                var7 = var8.code;
            case 318:
                var8 = 'number';
                var7 = typeof var7;
                var6 = var8 === var7;
            case 329:
                if (!var6) {
                    _fun42599_ip = 359;
                    continue _fun42599
                }
            case 332:
                var9 = _closure1_slot2;
                var8 = var9.includes;
                var7 = var2.body;
                var7 = var7.code;
                var6 = var8.bind(var9)(var7);
            case 359:
                var6 = !var6;
                var5 = !var6;
            case 365:
                var4 = var5;
            case 368:
                var3 = var4;
            case 371:
                var1 = var3;
            case 374:
                var0 = var1;
            case 377:
                if (var0) {
                    _fun42599_ip = 416;
                    continue _fun42599
                }
            case 380:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.captureException;
                var0 = var0.bind(var1)(var2);
            case 416:
                var0 = undefined;
                return var0;
        }
    };
    var2.captureOrIgnoreApiError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 1207, 2]);