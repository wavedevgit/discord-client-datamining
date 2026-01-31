// modules/markup/MarkupReactLinkUtils.tsx
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
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/markup/MarkupReactLinkUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: isLinkTrusted, environment: var1
        _fun76150: for (var _fun76150_ip = 0;;) switch (_fun76150_ip) {
            case 0:
                var5 = arg0;
                var0 = var5.target;
                var8 = null;
                var0 = var8 != var0;
                if (!var0) {
                    _fun76150_ip = 125;
                    continue _fun76150
                }
            case 18:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 0;
                var2 = var4[var2];
                var7 = undefined;
                var4 = var3.bind(var7)(var2);
                var3 = var4.isLinkTrusted;
                var2 = var5.target;
                var6 = var5.title;
                if (!(var8 != var6)) {
                    _fun76150_ip = 76;
                    continue _fun76150
                }
            case 63:
                var8 = var5.title;
                var6 = '';
                if (!(var6 === var8)) {
                    _fun76150_ip = 114;
                    continue _fun76150
                }
            case 76:
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 1;
                var1 = var8[var1];
                var7 = var6.bind(var7)(var1);
                var6 = var7.astToString;
                var1 = var5.content;
                var1 = var6.bind(var7)(var1);
                _fun76150_ip = 119;
                continue _fun76150;
            case 114:
                var1 = var5.title;
            case 119:
                var0 = var3.bind(var4)(var2, var1);
            case 125:
                return var0;
        }
    };
    var2.isLinkTrusted = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5852, 4828, 2]);