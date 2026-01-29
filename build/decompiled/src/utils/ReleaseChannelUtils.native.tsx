// utils/ReleaseChannelUtils.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun39002: for (var _fun39002_ip = 0;;) switch (_fun39002_ip) {
        case 0:
            var5 = require;
            var2 = exports;
            var6 = dependencyMap;
            var0 = global;
            var4 = var0.Object;
            var3 = var4.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var4)(var2, var0, var1);
            var0 = 0;
            var3 = var6[var0];
            var1 = metroImportAll;
            var0 = undefined;
            var3 = var1.bind(var0)(var3);
            var1 = var3.getConstants;
            var1 = var1.bind(var3)();
            var1 = var1.ReleaseChannel;
            var3 = 1;
            var3 = var6[var3];
            var4 = var5.bind(var0)(var3);
            var3 = var4.isAndroid;
            var7 = var3.bind(var4)();
            if (!var7) {
                _fun39002_ip = 123;
                continue _fun39002
            }
        case 98:
            var4 = var1.indexOf;
            var3 = 'canary';
            var4 = var4.bind(var1)(var3);
            var3 = -1;
            var7 = var3 === var4;
        case 123:
            if (!var7) {
                _fun39002_ip = 151;
                continue _fun39002
            }
        case 126:
            var4 = var1.indexOf;
            var3 = 'beta';
            var4 = var4.bind(var1)(var3);
            var3 = -1;
            var7 = var3 === var4;
        case 151:
            var3 = 'stable';
            var4 = var3 === var1;
            var8 = var1.indexOf;
            var3 = 'debug';
            var3 = var8.bind(var1)(var3);
            var9 = -1;
            var8 = var9 !== var3;
            if (var8) {
                _fun39002_ip = 208;
                continue _fun39002
            }
        case 187:
            var10 = var1.indexOf;
            var3 = 'developer';
            var3 = var10.bind(var1)(var3);
            var8 = var9 !== var3;
        case 208:
            var3 = !var8;
            if (var8) {
                _fun39002_ip = 223;
                continue _fun39002
            }
        case 214:
            if (var4) {
                _fun39002_ip = 220;
                continue _fun39002
            }
        case 217:
            var4 = var7;
        case 220:
            var3 = var4;
        case 223:
            var4 = 2;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.fileFinishedImporting;
            var4 = 'utils/ReleaseChannelUtils.native.tsx';
            var4 = var5.bind(var6)(var4);
            var2.isStable = var3;
            var2.CurrentReleaseChannel = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1594, 478, 2]);