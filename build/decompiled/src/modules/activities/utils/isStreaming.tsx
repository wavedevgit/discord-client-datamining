// modules/activities/utils/isStreaming.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = function arg0() {
        _fun51444: for (var _fun51444_ip = 0;;) switch (_fun51444_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.type;
                var0 = _closure1_slot1;
                var0 = var0.STREAMING;
                var0 = var1 === var0;
                if (!var0) {
                    _fun51444_ip = 64;
                    continue _fun51444
                }
            case 28:
                var4 = var2.url;
                var1 = null;
                var1 = var1 != var4;
                if (!var1) {
                    _fun51444_ip = 61;
                    continue _fun51444
                }
            case 42:
                var4 = _closure1_slot0;
                var3 = var4.test;
                var2 = var2.url;
                var1 = var3.bind(var4)(var2);
            case 61:
                var0 = var1;
            case 64:
                return var0;
        }
    };
    var _closure1_slot2 = var0;
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
    var3 = var3.validStreamURL;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityTypes;
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/isStreaming.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun51445: for (var _fun51445_ip = 0;;) switch (_fun51445_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                var0 = var0 != var4;
                if (!var0) {
                    _fun51445_ip = 67;
                    continue _fun51445
                }
            case 12:
                var1 = global;
                var2 = var1.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var4);
                if (var1) {
                    _fun51445_ip = 49;
                    continue _fun51445
                }
            case 36:
                var3 = _closure1_slot2;
                var1 = undefined;
                var1 = var3.bind(var1)(var4);
                _fun51445_ip = 64;
                continue _fun51445;
            case 49:
                var3 = var4.some;
                var2 = _closure1_slot2;
                var1 = var3.bind(var4)(var2);
            case 64:
                var0 = var1;
            case 67:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3458, 660, 2]);