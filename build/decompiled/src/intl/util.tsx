// intl/util.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function() { // Original name: getLanguages, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot3 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot2 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'intl/util.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() { // Original name: getAvailableLocales, environment: var1
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var3 = var3.default;
        var _closure2_slot0 = var3;
        var1 = _closure1_slot3;
        var3 = var1.bind(var2)();
        var2 = var3.filter;
        var1 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.enabled;
            return var0;
        };
        var3 = var2.bind(var3)(var1);
        var2 = var3.map;
        var1 = function(arg0) { // Environment: var0
            var0 = arg0;
            var4 = var0.code;
            var1 = var0.name;
            var0 = {};
            var0.value = var4;
            var0.name = var1;
            var2 = _closure2_slot0;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            var1 = var3.runtimeHashMessageKey;
            var1 = var1.bind(var3)(var4);
            var1 = var2[var1];
            var0.localizedName = var1;
            return var0;
        };
        var2 = var2.bind(var3)(var1);
        var1 = var2.sort;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun13562: for (var _fun13562_ip = 0;;) switch (_fun13562_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.name;
                    var0 = arg1;
                    var1 = var0.name;
                    var0 = var2.toLowerCase;
                    var2 = var0.bind(var2)();
                    var0 = var1.toLowerCase;
                    var1 = var0.bind(var1)();
                    var3 = var2 < var1;
                    var0 = -1;
                    if (var3) {
                        _fun13562_ip = 64;
                        continue _fun13562
                    }
                case 49:
                    var2 = var2 > var1;
                    var1 = 0;
                    if (!var2) {
                        _fun13562_ip = 61;
                        continue _fun13562
                    }
                case 58:
                    var1 = 1;
                case 61:
                    var0 = var1;
                case 64:
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getAvailableLocales = var4;
    var2.getLanguages = var3;
    var3 = function(arg0, arg1) { // Original name: getNormalizedLocale, environment: var1
        _fun13563: for (var _fun13563_ip = 0;;) switch (_fun13563_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                var2 = _closure1_slot3;
                var1 = undefined;
                var5 = var2.bind(var1)();
                var2 = var5.filter;
                var1 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var0 = var0.enabled;
                    return var0;
                };
                var5 = var2.bind(var5)(var1);
                var2 = var5.map;
                var1 = function(arg0) { // Environment: var4
                    var0 = arg0;
                    var0 = var0.code;
                    return var0;
                };
                var6 = var2.bind(var5)(var1);
                var1 = var6.includes;
                var1 = var1.bind(var6)(var0);
                if (var1) {
                    _fun13563_ip = 205;
                    continue _fun13563
                }
            case 67:
                var2 = var0.split;
                var1 = '-';
                var5 = var2.bind(var0)(var1);
                var _closure2_slot0 = var5;
                var7 = var6.includes;
                var2 = 0;
                var1 = var5[var2];
                var1 = var7.bind(var6)(var1);
                var2 = var5[var2];
                if (var1) {
                    _fun13563_ip = 200;
                    continue _fun13563
                }
            case 108:
                var1 = 'zh';
                if (!(var1 === var2)) {
                    _fun13563_ip = 142;
                    continue _fun13563
                }
            case 116:
                var7 = var5.length;
                var1 = 1;
                if (!(var7 > var1)) {
                    _fun13563_ip = 142;
                    continue _fun13563
                }
            case 128:
                var5 = var5[var1];
                var1 = 'Hant';
                if (!(var1 !== var5)) {
                    _fun13563_ip = 171;
                    continue _fun13563
                }
            case 142:
                var5 = var6.find;
                var1 = function(arg0) { // Environment: var4
                    var2 = arg0;
                    var1 = var2.split;
                    var0 = '-';
                    var0 = var1.bind(var2)(var0);
                    var2 = 0;
                    var1 = var0[var2];
                    var0 = _closure2_slot0;
                    var0 = var0[var2];
                    var0 = var1 === var0;
                    return var0;
                };
                var5 = var5.bind(var6)(var1);
                var7 = null;
                var1 = var3;
                if (!(var7 != var5)) {
                    _fun13563_ip = 169;
                    continue _fun13563
                }
            case 166:
                var1 = var5;
            case 169:
                _fun13563_ip = 198;
                continue _fun13563;
            case 171:
                var5 = var6.find;
                var4 = function(arg0) { // Environment: var4
                    var1 = 'zh-TW';
                    var0 = arg0;
                    var0 = var1 === var0;
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
                var5 = null;
                if (!(var5 != var4)) {
                    _fun13563_ip = 195;
                    continue _fun13563
                }
            case 192:
                var3 = var4;
            case 195:
                var1 = var3;
            case 198:
                _fun13563_ip = 203;
                continue _fun13563;
            case 200:
                var1 = var2;
            case 203:
                return var1;
            case 205:
                return var0;
        }
    };
    var2.getNormalizedLocale = var3;
    var1 = function(arg0, arg1) { // Original name: useSyncMessages, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot2;
        var2 = var3.useSyncExternalStore;
        var1 = function(arg0) { // Environment: var0
            var2 = _closure2_slot0;
            var1 = var2.onChange;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = function() { // Environment: var0
            var2 = _closure2_slot0;
            var1 = var2.isLocaleLoaded;
            var0 = _closure2_slot1;
            var0 = var0.currentLocale;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var2.useSyncMessages = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1236, 1272, 1294, 2]);