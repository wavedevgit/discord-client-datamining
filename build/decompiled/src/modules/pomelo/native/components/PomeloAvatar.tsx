// modules/pomelo/native/components/PomeloAvatar.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/pomelo/native/components/PomeloAvatar.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: PomeloAvatar, environment: var1
        _fun80828: for (var _fun80828_ip = 0;;) switch (_fun80828_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.user;
                var4 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 4;
                var0 = var10[var0];
                var3 = undefined;
                var5 = var4.bind(var3)(var0);
                var2 = var5.useStateFromStores;
                var0 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot4;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var7 = var2.bind(var5)(var1, var0);
                var0 = 5;
                var0 = var10[var0];
                var2 = var4.bind(var3)(var0);
                var1 = var2.memoizedImageSource;
                var0 = 6;
                var0 = var10[var0];
                var5 = var4.bind(var3)(var0);
                var4 = var5.getUserAvatarURLForPomelo;
                var0 = !var7;
                var0 = var4.bind(var5)(var9, var0);
                var6 = var1.bind(var2)(var0);
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = _closure1_slot1;
                var4 = 7;
                var4 = var10[var4];
                var5 = var5.bind(var3)(var4);
                var4 = null;
                if (!(var4 != var6)) {
                    _fun80828_ip = 199;
                    continue _fun80828
                }
            case 147:
                var4 = {};
                var4.source = var6;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var6 = 8;
                var6 = var11[var6];
                var6 = var10.bind(var3)(var6);
                var6 = var6.AvatarSizes;
                var6 = var6.XXLARGE;
                var4.size = var6;
                var6 = !var7;
                var4.animate = var6;
                _fun80828_ip = 256;
                continue _fun80828;
            case 199:
                var6 = {};
                var6.user = var9;
                var6.guildId = var3;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 8;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.AvatarSizes;
                var8 = var8.XXLARGE;
                var6.size = var8;
                var7 = !var7;
                var6.animate = var7;
                var4 = var6;
            case 256:
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 33, 566, 5696, 10249, 5411, 5409, 2]);