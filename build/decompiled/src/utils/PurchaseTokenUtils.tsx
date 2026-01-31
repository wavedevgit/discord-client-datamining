// utils/PurchaseTokenUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function() { // Original name: getPurchaseToken, environment: var1
        _fun29418: for (var _fun29418_ip = 0;;) switch (_fun29418_ip) {
            case 0:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 2;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var1.bind(var4)(var0);
                var2 = var0.Storage;
                var1 = var2.get;
                var0 = _closure1_slot3;
                var0 = var1.bind(var2)(var0);
                var1 = null;
                if (!(var1 != var0)) {
                    _fun29418_ip = 78;
                    continue _fun29418
                }
            case 51:
                var2 = var0.expires;
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                if (!(!(var2 >= var1))) {
                    _fun29418_ip = 177;
                    continue _fun29418
                }
            case 78:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var1 = var2[var1];
                var7 = var3.bind(var4)(var1);
                var1 = var7.v4;
                var1 = var1.bind(var7)();
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var5 = var2.Storage;
                var4 = var5.set;
                var3 = _closure1_slot3;
                var2 = {};
                var2.purchaseToken = var1;
                var7 = global;
                var8 = var7.Date;
                var7 = var8.now;
                var7 = var7.bind(var8)();
                var6 = _closure1_slot4;
                var6 = var7 + var6;
                var2.expires = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            case 177:
                var0 = var0.purchaseToken;
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = function() { // Original name: _getPurchaseTokenHash, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun29421: for (var _fun29421_ip = 0;;) switch (_fun29421_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29421_ip = 220;
                            continue _fun29421
                        }
                    case 10:
                        var2 = global;
                        var5 = var2.Uint8Array;
                        var1 = _closure1_slot5;
                        var4 = undefined;
                        var6 = var1.bind(var4)();
                        var3 = var6.split;
                        var1 = '';
                        var6 = var3.bind(var6)(var1);
                        var3 = var6.map;
                        var1 = function(arg0) { // Environment: var1
                            var2 = arg0;
                            var1 = var2.charCodeAt;
                            var0 = 0;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var11 = var3.bind(var6)(var1);
                        var3 = var5.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var5
                            }
                        });
                        var12 = var3;
                        var1 = new var12[var5](var11, var10);
                        var6 = var1 instanceof Object ? var1 : var3;
                        var1 = var2.window;
                        var1 = var1.crypto;
                        var5 = var1.subtle;
                        var3 = var5.digest;
                        var1 = {};
                        var7 = 'SHA-256';
                        var1.name = var7;
                        var1 = var3.bind(var5)(var1, var6);
                        SaveGenerator(address = 130);
                    case 128:
                        return var1;
                    case 130:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun29421_ip = 217;
                            continue _fun29421
                        }
                    case 136:
                        var3 = var2.btoa;
                        var6 = var2.String;
                        var5 = var6.fromCharCode;
                        var2 = var2.Uint8Array;
                        var7 = var2.prototype;
                        var7 = Object.create(var7, {
                            constructor: {
                                value: var2
                            }
                        });
                        var12 = var7;
                        var11 = var1;
                        var2 = new var12[var2](var11, var10);
                        var10 = var2 instanceof Object ? var2 : var7;
                        var2 = new Array(0);
                        var9 = 0;
                        var11 = var2;
                        var7 = arraySpread(var11, var10, var9);
                        var11 = var5;
                        var10 = var2;
                        var9 = var6;
                        var2 = apply(var11, var10, var9);
                        var2 = var3.bind(var4)(var2);
                        return var2;
                    case 217:
                        return var1;
                    case 220:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot6 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 'purchase_token';
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var4 = var4.Millis;
    var7 = var4.DAY;
    var4 = 60;
    var4 = var4 * var7;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/PurchaseTokenUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.getPurchaseToken = var3;
    var1 = function() { // Original name: getPurchaseTokenHash, environment: var1
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getPurchaseTokenHash = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 667, 587, 491, 2]);