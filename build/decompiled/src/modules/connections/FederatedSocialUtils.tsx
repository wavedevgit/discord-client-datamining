// modules/connections/FederatedSocialUtils.tsx
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
    var3 = var3.PlatformTypes;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/connections/FederatedSocialUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        _fun51717: for (var _fun51717_ip = 0;;) switch (_fun51717_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot0;
                var1 = var0.MASTODON;
                var0 = arg1;
                if (!(var0 === var1)) {
                    _fun51717_ip = 47;
                    continue _fun51717
                }
            case 23:
                var1 = /^@?[a-z0-9_]+([.-]+[a-z0-9_]+)*@[^@]+\.[^.@]{2,}$/i;
                var0 = var1.test;
                var0 = var0.bind(var1)(var2);
            case 47:
                var1 = /^.+\.[^.@]{2,}$/;
                var0 = var1.test;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var2.validateHandle = var3;
    var1 = function arg0() {
        _fun51718: for (var _fun51718_ip = 0;;) switch (_fun51718_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot0;
                var2 = var0.MASTODON;
                var0 = '@example@mastodon.social';
                if (!(var3 !== var2)) {
                    _fun51718_ip = 55;
                    continue _fun51718
                }
            case 26:
                var1 = _closure1_slot0;
                var2 = var1.BLUESKY;
                var1 = 'clyde@example.com';
                if (!(var3 === var2)) {
                    _fun51718_ip = 52;
                    continue _fun51718
                }
            case 46:
                var1 = 'example.bsky.social';
            case 52:
                var0 = var1;
            case 55:
                return var0;
        }
    };
    var2.getExampleHandle = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);