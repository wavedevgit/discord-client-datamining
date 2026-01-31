// modules/chat/native/reactAssetProvider.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.Image;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat/native/reactAssetProvider.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: reactAssetProvider, environment: var1
        var0 = global;
        var2 = var0.Promise;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0) { // Environment: var0
            _fun118079: for (var _fun118079_ip = 0;;) switch (_fun118079_ip) {
                case 0:
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 1;
                    var3 = var3[var0];
                    var0 = undefined;
                    var5 = var5.bind(var0)(var3);
                    var3 = var5.isAndroid;
                    var3 = var3.bind(var5)();
                    if (var3) {
                        _fun118079_ip = 56;
                        continue _fun118079
                    }
                case 47:
                    var3 = true;
                    var3 = var4.bind(var0)(var3);
                    _fun118079_ip = 94;
                    continue _fun118079;
                case 56:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 2;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.keysRequest;
                    var1 = function(arg0) { // Environment: var1
                        var5 = arg0;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var0 = 3;
                        var3 = var4[var0];
                        var0 = undefined;
                        var6 = var6.bind(var0)(var3);
                        var3 = var6.getAssetMap;
                        var3 = var3.bind(var6)();
                        var _closure4_slot0 = var3;
                        var3 = var5.map;
                        var2 = function(arg0) { // Environment: var2
                            _fun118081: for (var _fun118081_ip = 0;;) switch (_fun118081_ip) {
                                case 0:
                                    var4 = arg0;
                                    var0 = _closure4_slot0;
                                    var2 = var0[var4];
                                    var0 = null;
                                    var2 = var0 != var2;
                                    var0 = '';
                                    if (!var2) {
                                        _fun118081_ip = 58;
                                        continue _fun118081
                                    }
                                case 27:
                                    var3 = _closure1_slot3;
                                    var2 = var3.resolveAssetSource;
                                    var1 = _closure4_slot0;
                                    var1 = var1[var4];
                                    var1 = var2.bind(var3)(var1);
                                    var0 = var1.uri;
                                case 58:
                                    return var0;
                            }
                        };
                        var3 = var3.bind(var5)(var2);
                        var2 = _closure1_slot1;
                        var1 = 2;
                        var1 = var4[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.valuesResult;
                        var1 = var1.bind(var2)(var3);
                        var2 = _closure3_slot0;
                        var1 = true;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                case 94:
                    return var0;
            }
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 478, 15018, 9620, 2]);