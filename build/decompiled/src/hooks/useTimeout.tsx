// hooks/useTimeout.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
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
    var6 = var3.useEffect;
    var _closure1_slot0 = var6;
    var3 = var3.useRef;
    var _closure1_slot1 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'hooks/useTimeout.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: _default, environment: var1
        var2 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var2;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot1;
        var0 = undefined;
        var4 = var4.bind(var0)(var2);
        var _closure2_slot2 = var4;
        var3 = _closure1_slot0;
        var6 = new Array(1);
        var6[0] = var2;
        var2 = function() { // Environment: var1
            var1 = _closure2_slot2;
            var0 = _closure2_slot0;
            var1.current = var0;
            var0 = undefined;
            return var0;
        };
        var2 = var3.bind(var0)(var2, var6);
        var2 = new Array(2);
        var2[0] = var5;
        var2[1] = var4;
        var1 = function() { // Environment: var1
            _fun74807: for (var _fun74807_ip = 0;;) switch (_fun74807_ip) {
                case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if (!(var2 === var3)) {
                        _fun74807_ip = 19;
                        continue _fun74807
                    }
                case 15:
                    var2 = undefined;
                    return var2;
                case 19:
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var1 = function() { // Environment: var0
                        var1 = _closure2_slot2;
                        var0 = var1.current;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var1 = var4.bind(var2)(var1, var3);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
            }
        };
        var1 = var3.bind(var0)(var1, var2);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 2]);