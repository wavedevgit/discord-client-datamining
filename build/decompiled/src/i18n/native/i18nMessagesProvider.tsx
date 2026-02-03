// i18n/native/i18nMessagesProvider.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun118016: for (var _fun118016_ip = 0;;) switch (_fun118016_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
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
            var3 = var3.NativeModules;
            var6 = 1;
            var6 = var5[var6];
            var7 = var4.bind(var0)(var6);
            var6 = var7.isAndroid;
            var6 = var6.bind(var7)();
            if (var6) {
                _fun118016_ip = 105;
                continue _fun118016
            }
        case 95:
            var3 = var3.i18nManager;
            _fun118016_ip = 120;
            continue _fun118016;
        case 105:
            var6 = 2;
            var7 = var5[var6];
            var6 = metroImportDefault;
            var3 = var6.bind(var0)(var7);
        case 120:
            var _closure1_slot2 = var3;
            var3 = 5;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'i18n/native/i18nMessagesProvider.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function() {
                var0 = global;
                var2 = var0.Promise;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var2 = _closure1_slot2;
                    var1 = var2.keysRequest;
                    var0 = function(arg0) { // Environment: var0
                        var2 = arg0;
                        var1 = var2.map;
                        var0 = function(arg0) { // Environment: var0
                            _fun118020: for (var _fun118020_ip = 0;;) switch (_fun118020_ip) {
                                case 0:
                                    var3 = _closure1_slot0;
                                    var0 = _closure1_slot1;
                                    var2 = 3;
                                    var2 = var0[var2];
                                    var4 = undefined;
                                    var6 = var3.bind(var4)(var2);
                                    var5 = var6.runtimeHashMessageKey;
                                    var2 = arg0;
                                    var2 = var5.bind(var6)(var2);
                                    var5 = 4;
                                    var0 = var0[var5];
                                    var0 = var3.bind(var4)(var0);
                                    var0 = var0.t;
                                    var3 = var0[var2];
                                    var0 = null;
                                    var2 = var0 == var3;
                                    var0 = '';
                                    if (var2) {
                                        _fun118020_ip = 106;
                                        continue _fun118020
                                    }
                                case 73:
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot1;
                                    var1 = var1[var5];
                                    var1 = var2.bind(var4)(var1);
                                    var2 = var1.intl;
                                    var1 = var2.reserialize;
                                    var0 = var1.bind(var2)(var3);
                                case 106:
                                    return var0;
                            }
                        };
                        var2 = var1.bind(var2)(var0);
                        var1 = _closure1_slot2;
                        var0 = var1.valuesResult;
                        var0 = var0.bind(var1)(var2);
                        var2 = _closure3_slot0;
                        var0 = undefined;
                        var1 = true;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 478, 15048, 1272, 1234, 2]);