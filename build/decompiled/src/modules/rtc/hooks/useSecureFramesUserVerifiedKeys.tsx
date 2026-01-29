// modules/rtc/hooks/useSecureFramesUserVerifiedKeys.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rtc/hooks/useSecureFramesUserVerifiedKeys.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useSecureFramesUserVerifiedKeys, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStoresArray;
        var4 = _closure1_slot3;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 2;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var5 = _closure1_slot3;
            var4 = var5.getUserVerifiedKeys;
            var1 = _closure2_slot0;
            var1 = var4.bind(var5)(var1);
            var2 = var2.bind(var3)(var1);
            var1 = var2.entries;
            var3 = var1.bind(var2)();
            var2 = var3.map;
            var1 = function(arg0) { // Environment: var0
                _fun88660: for (var _fun88660_ip = 0;;) switch (_fun88660_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = var4[Symbol.iterator];
                        var4 = var0().next;
                        var1 = var4().value;
                        var2 = var0;
                        var6 = undefined;
                        var3 = var2 === var6;
                        var2 = undefined;
                        if (var3) {
                            _fun88660_ip = 27;
                            continue _fun88660
                        }
                    case 24:
                        var2 = var1;
                    case 27:
                        var1 = undefined;
                        if (var3) {
                            _fun88660_ip = 57;
                            continue _fun88660
                        }
                    case 32:
                        var5 = var4().value;
                        var4 = var0;
                        var4 = var4 === var6;
                        var1 = undefined;
                        var3 = var4;
                        if (var4) {
                            _fun88660_ip = 57;
                            continue _fun88660
                        }
                    case 51:
                        var1 = var5;
                        var3 = var4;
                    case 57:
                        if (var3) {
                            _fun88660_ip = 63;
                            continue _fun88660
                        }
                    case 60:
                        var0.return();
                    case 63:
                        var0 = {};
                        var0.verifiedKey = var2;
                        var0.timestamp = var1;
                        return var0;
                }
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.sortBy;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.timestamp;
                var0 = -1;
                var0 = var0 * var1;
                return var0;
            };
            var1 = var1.bind(var2)(var0);
            var0 = var1.value;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useSecureFramesUserVerifiedKeys = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8205, 566, 22, 2]);