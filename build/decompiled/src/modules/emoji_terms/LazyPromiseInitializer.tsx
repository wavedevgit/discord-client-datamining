// modules/emoji_terms/LazyPromiseInitializer.tsx
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
        var2 = function(arg0) { // Original name: LazyPromiseInitializer, environment: var4
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = false;
            var2.loading = var1;
            var2.loaded = var1;
            var1 = arg0;
            var2.loader = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'setParams';
        var0.key = var1;
        var1 = function(arg0) { // Original name: value, environment: var4
            _fun43845: for (var _fun43845_ip = 0;;) switch (_fun43845_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var2 = var1.param;
                    if (!(var2 !== var0)) {
                        _fun43845_ip = 36;
                        continue _fun43845
                    }
                case 16:
                    var1.param = var0;
                    var0 = false;
                    var1.loading = var0;
                    var1.loaded = var0;
                case 36:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'get';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var4
            var0 = this;
            var1 = var0.ensureLoaded;
            var1 = var1.bind(var0)();
            var0 = var0.val;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'ensureLoaded';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            _fun43847: for (var _fun43847_ip = 0;;) switch (_fun43847_ip) {
                case 0:
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var1 = var3.loaded;
                    if (var1) {
                        _fun43847_ip = 83;
                        continue _fun43847
                    }
                case 18:
                    var1 = var3.loading;
                    if (var1) {
                        _fun43847_ip = 83;
                        continue _fun43847
                    }
                case 27:
                    var2 = var3.param;
                    var1 = undefined;
                    if (!(var1 !== var2)) {
                        _fun43847_ip = 83;
                        continue _fun43847
                    }
                case 39:
                    var2 = var3.param;
                    var _closure3_slot1 = var2;
                    var1 = true;
                    var3.loading = var1;
                    var1 = var3.loader;
                    var2 = var1.bind(var3)(var2);
                    var1 = var2.then;
                    var0 = function(arg0) { // Environment: var0
                        _fun43848: for (var _fun43848_ip = 0;;) switch (_fun43848_ip) {
                            case 0:
                                var2 = _closure3_slot1;
                                var1 = _closure3_slot0;
                                var1 = var1.param;
                                if (!(var2 === var1)) {
                                    _fun43848_ip = 50;
                                    continue _fun43848
                                }
                            case 21:
                                var1 = _closure3_slot0;
                                var0 = arg0;
                                var1.val = var0;
                                var0 = false;
                                var1.loading = var0;
                                var0 = true;
                                var1.loaded = var0;
                            case 50:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                case 83:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[2] = var0;
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
    var3 = 'modules/emoji_terms/LazyPromiseInitializer.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 2]);