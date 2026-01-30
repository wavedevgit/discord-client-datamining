// modules/activities/utils/getIFrameSandboxAttributes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = ['allow-pointer-lock', 'allow-scripts', 'allow-same-origin', 'allow-forms'];
    var _closure1_slot0 = var0;
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/getIFrameSandboxAttributes.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: getIFrameSandboxAttributes, environment: var1
        _fun64678: for (var _fun64678_ip = 0;;) switch (_fun64678_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.allowPopups;
                var2 = _closure1_slot0;
                if (!var1) {
                    _fun64678_ip = 68;
                    continue _fun64678
                }
            case 19:
                var5 = _closure1_slot0;
                var0 = new Array(2);
                var4 = 0;
                var6 = var0;
                var3 = arraySpread(var6, var5, var4);
                var1 = 'allow-popups';
                var0[var3] = var1;
                var1 = 1;
                var3 = var3 + var1;
                var1 = 'allow-popups-to-escape-sandbox';
                var0[var3] = var1;
                var2 = var0;
            case 68:
                var1 = var2.join;
                var0 = ' ';
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);