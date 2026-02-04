// ../discord_common/js/packages/http-utils/V6OrEarlierAPIError.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot1;
        var2 = function arg0, arg1() {
            _fun6805: for (var _fun6805_ip = 0;;) switch (_fun6805_ip) {
                case 0:
                    var4 = arg0;
                    var8 = arguments[2];
                    var2 = this;
                    var0 = undefined;
                    if (!(var8 === var0)) {
                        _fun6805_ip = 21;
                        continue _fun6805
                    }
                case 15:
                    var8 = 'An unexpected error occurred.';
                case 21:
                    var3 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var0)(var2, var1);
                    var3 = 'string';
                    var1 = typeof var4;
                    if (!(var3 !== var1)) {
                        _fun6805_ip = 311;
                        continue _fun6805
                    }
                case 55:
                    var1 = var4.body;
                    var6 = null;
                    if (!(var6 == var1)) {
                        _fun6805_ip = 82;
                        continue _fun6805
                    }
                case 66:
                    var1 = {};
                    var3 = var4.status;
                    var1.status = var3;
                    _fun6805_ip = 327;
                    continue _fun6805;
                case 82:
                    var3 = var4.body;
                    var3 = var3.message;
                    if (!(var6 != var3)) {
                        _fun6805_ip = 233;
                        continue _fun6805
                    }
                case 99:
                    var3 = global;
                    var9 = var3.Array;
                    var7 = var9.isArray;
                    var5 = var4.body;
                    var5 = var5.message;
                    var5 = var7.bind(var9)(var5);
                    if (var5) {
                        _fun6805_ip = 233;
                        continue _fun6805
                    }
                case 130:
                    var5 = var4.body;
                    var5 = var5.code;
                    if (!(var6 != var5)) {
                        _fun6805_ip = 173;
                        continue _fun6805
                    }
                case 144:
                    var7 = var3.Array;
                    var5 = var7.isArray;
                    var3 = var4.body;
                    var3 = var3.code;
                    var3 = var5.bind(var7)(var3);
                    if (var3) {
                        _fun6805_ip = 233;
                        continue _fun6805
                    }
                case 173:
                    var3 = {};
                    var5 = var4.body;
                    var5 = var5.message;
                    var3.message = var5;
                    var5 = var4.body;
                    var5 = var5.code;
                    var3.code = var5;
                    var5 = var4.body;
                    var5 = var5.retry_after;
                    var3.retryAfter = var5;
                    var5 = var4.status;
                    var3.status = var5;
                    var1 = var3;
                    _fun6805_ip = 327;
                    continue _fun6805;
                case 233:
                    var5 = var4.body;
                    var3 = var6 != var5;
                    var9 = null;
                    if (!var3) {
                        _fun6805_ip = 271;
                        continue _fun6805
                    }
                case 247:
                    var3 = global;
                    var7 = var3.Object;
                    var3 = var7.values;
                    var7 = var3.bind(var7)(var5);
                    var3 = 0;
                    var9 = var7[var3];
                case 271:
                    var3 = {};
                    var7 = var6 != var9;
                    var6 = undefined;
                    if (!var7) {
                        _fun6805_ip = 288;
                        continue _fun6805
                    }
                case 282:
                    var7 = 0;
                    var6 = var9[var7];
                case 288:
                    var3.message = var6;
                    var3.fields = var5;
                    var5 = var4.status;
                    var3.status = var5;
                    var1 = var3;
                    _fun6805_ip = 327;
                    continue _fun6805;
                case 311:
                    var3 = {};
                    var3.message = var4;
                    var4 = arg1;
                    var3.code = var4;
                    var1 = var3;
                case 327:
                    var4 = var1.message;
                    var5 = var1.code;
                    var6 = var1.retryAfter;
                    var3 = var1.fields;
                    var1 = var1.status;
                    var7 = var4;
                    if (var7) {
                        _fun6805_ip = 363;
                        continue _fun6805
                    }
                case 360:
                    var7 = var8;
                case 363:
                    var2.message = var7;
                    var2.retryAfter = var6;
                    if (var5) {
                        _fun6805_ip = 384;
                        continue _fun6805
                    }
                case 378:
                    var5 = -1;
                case 384:
                    var2.code = var5;
                    if (var3) {
                        _fun6805_ip = 395;
                        continue _fun6805
                    }
                case 393:
                    var3 = {};
                case 395:
                    var2.fields = var3;
                    var2.status = var1;
                    var1 = global;
                    var1 = var1.Error;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var1
                        }
                    });
                    var12 = var3;
                    var11 = var4;
                    var1 = new var12[var1](var11, var10);
                    var1 = var1 instanceof Object ? var1 : var3;
                    var2.error = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var4 = 'getFieldMessage';
        var0.key = var4;
        var1 = function arg0() {
            _fun6806: for (var _fun6806_ip = 0;;) switch (_fun6806_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var0 = var1.fields;
                    var3 = var0[var2];
                    var0 = null;
                    var3 = var0 != var3;
                    if (!var3) {
                        _fun6806_ip = 41;
                        continue _fun6806
                    }
                case 25:
                    var1 = var1.fields;
                    var2 = var1[var2];
                    var1 = 0;
                    var0 = var2[var1];
                case 41:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 2;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/http-utils/V6OrEarlierAPIError.tsx';
    var3 = var4.bind(var5)(var3);
    var2.APIError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);