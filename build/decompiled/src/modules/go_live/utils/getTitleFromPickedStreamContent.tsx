// modules/go_live/utils/getTitleFromPickedStreamContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
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
    var3 = 'modules/go_live/utils/getTitleFromPickedStreamContent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun33132: for (var _fun33132_ip = 0;;) switch (_fun33132_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.windows;
                var0 = var0.length;
                var8 = 0;
                if (!(!(var0 > var8))) {
                    _fun33132_ip = 162;
                    continue _fun33132
                }
            case 25:
                var0 = var2.applications;
                var0 = var0.length;
                if (!(!(var0 > var8))) {
                    _fun33132_ip = 123;
                    continue _fun33132
                }
            case 40:
                var0 = var2.displays;
                var0 = var0.length;
                var3 = var0 > var8;
                var0 = null;
                if (!var3) {
                    _fun33132_ip = 121;
                    continue _fun33132
                }
            case 62:
                var7 = _closure1_slot0;
                var3 = _closure1_slot1;
                var4 = var3[var8];
                var6 = undefined;
                var4 = var7.bind(var6)(var4);
                var5 = var4.intl;
                var4 = var5.string;
                var3 = var3[var8];
                var3 = var7.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.R4wpLN;
                var0 = var4.bind(var5)(var3);
            case 121:
                _fun33132_ip = 160;
                continue _fun33132;
            case 123:
                var5 = var2.applications;
                var4 = var5.map;
                var3 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.name;
                    return var0;
                };
                var5 = var4.bind(var5)(var3);
                var4 = var5.join;
                var3 = ', ';
                var0 = var4.bind(var5)(var3);
            case 160:
                _fun33132_ip = 199;
                continue _fun33132;
            case 162:
                var3 = var2.windows;
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.title;
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.join;
                var1 = ', ';
                var0 = var2.bind(var3)(var1);
            case 199:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1234, 2]);