// modules/messages/countContentTypes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'modules/messages/countContentTypes.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function(arg0) { // Original name: countContentTypes, environment: var1
        _fun77871: for (var _fun77871_ip = 0;;) switch (_fun77871_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.content;
                var5 = 0;
                var2 = '';
                var1 = 0;
                if (!(var2 !== var3)) {
                    _fun77871_ip = 23;
                    continue _fun77871
                }
            case 20:
                var1 = 1;
            case 23:
                var4 = var0.activity;
                var3 = null;
                var2 = var1;
                if (!(var3 != var4)) {
                    _fun77871_ip = 41;
                    continue _fun77871
                }
            case 38:
                var2 = var1 + 1;
            case 41:
                var1 = var0.stickers;
                var1 = var1.length;
                var4 = var1 > var5;
                if (var4) {
                    _fun77871_ip = 74;
                    continue _fun77871
                }
            case 59:
                var1 = var0.stickerItems;
                var1 = var1.length;
                var4 = var1 > var5;
            case 74:
                var1 = var2;
                if (!var4) {
                    _fun77871_ip = 83;
                    continue _fun77871
                }
            case 80:
                var1 = var2 + 1;
            case 83:
                var2 = var0.components;
                var4 = var2.length;
                var2 = var1;
                if (!(var4 > var5)) {
                    _fun77871_ip = 104;
                    continue _fun77871
                }
            case 101:
                var2 = var1 + 1;
            case 104:
                var1 = var0.messageSnapshots;
                var4 = var1.length;
                var1 = var2;
                if (!(var4 > var5)) {
                    _fun77871_ip = 125;
                    continue _fun77871
                }
            case 122:
                var1 = var2 + 1;
            case 125:
                var2 = var0.poll;
                var0 = var1;
                if (!(var3 != var2)) {
                    _fun77871_ip = 141;
                    continue _fun77871
                }
            case 138:
                var0 = var1 + 1;
            case 141:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);