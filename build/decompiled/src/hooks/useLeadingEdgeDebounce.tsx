// hooks/useLeadingEdgeDebounce.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = 1;
    var5 = var4[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot1 = var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'hooks/useLeadingEdgeDebounce.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Environment: var1
        var6 = arg0;
        var5 = arg1;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot1;
        var3 = var4.useRef;
        var2 = true;
        var2 = var3.bind(var4)(var2);
        var _closure2_slot2 = var2;
        var2 = var4.useState;
        var7 = var2.bind(var4)(var6);
        var3 = _closure1_slot0;
        var2 = undefined;
        var0 = 2;
        var3 = var3.bind(var2)(var7, var0);
        var0 = 0;
        var0 = var3[var0];
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot3 = var2;
        var3 = var4.useEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() { // Environment: var1
            _fun64830: for (var _fun64830_ip = 0;;) switch (_fun64830_ip) {
                case 0:
                    var1 = global;
                    var5 = var1.setTimeout;
                    var3 = _closure2_slot1;
                    var4 = undefined;
                    var2 = function() { // Environment: var0
                        var3 = _closure2_slot3;
                        var2 = _closure2_slot0;
                        var0 = undefined;
                        var2 = var3.bind(var0)(var2);
                        var2 = _closure2_slot2;
                        var1 = true;
                        var2.current = var1;
                        return var0;
                    };
                    var2 = var5.bind(var4)(var2, var3);
                    var _closure3_slot0 = var2;
                    var2 = _closure2_slot2;
                    var2 = var2.current;
                    if (!var2) {
                        _fun64830_ip = 59;
                        continue _fun64830
                    }
                case 46:
                    var3 = _closure2_slot3;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
                case 59:
                    var2 = _closure2_slot2;
                    var1 = false;
                    var2.current = var1;
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useLeadingEdgeDebounce = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 2]);