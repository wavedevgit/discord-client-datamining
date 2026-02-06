// modules/instant_invite/getInviteURL.tsx
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
    var1 = 'modules/instant_invite/getInviteURL.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function() {
        _fun54489: for (var _fun54489_ip = 0;;) switch (_fun54489_ip) {
            case 0:
                var3 = arguments[0];
                var5 = arguments[1];
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun54489_ip = 16;
                    continue _fun54489
                }
            case 12:
                var3 = '';
            case 16:
                if (!(var5 === var0)) {
                    _fun54489_ip = 22;
                    continue _fun54489
                }
            case 20:
                var5 = true;
            case 22:
                var0 = global;
                var1 = var0.window;
                var1 = var1.GLOBAL_ENV;
                var4 = var1.INVITE_HOST;
                var1 = var0.HermesInternal;
                var2 = var1.concat;
                var1 = '/';
                var3 = var2.bind(var1)(var3);
                var2 = '';
                var1 = var2;
                if (!var5) {
                    _fun54489_ip = 107;
                    continue _fun54489
                }
            case 72:
                var5 = var0.location;
                var7 = var5.protocol;
                var5 = var0.HermesInternal;
                var6 = var5.concat;
                var5 = '//';
                var1 = var6.bind(var2)(var7, var5);
            case 107:
                var0 = var0.HermesInternal;
                var0 = var0.concat;
                var0 = var0.bind(var2)(var1, var4, var3);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);