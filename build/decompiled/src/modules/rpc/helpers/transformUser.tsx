// modules/rpc/helpers/transformUser.tsx
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
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/helpers/transformUser.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun63858: for (var _fun63858_ip = 0;;) switch (_fun63858_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.id;
                var8 = var0.username;
                var6 = var0.discriminator;
                var5 = var0.globalName;
                var1 = var0.avatar;
                var7 = var0.avatarDecoration;
                var4 = var0.bot;
                var3 = var0.flags;
                var2 = var0.premiumType;
                var0 = {};
                var0.id = var9;
                var0.username = var8;
                var0.discriminator = var6;
                var0.global_name = var5;
                var0.avatar = var1;
                var8 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 0;
                var6 = var5[var1];
                var5 = undefined;
                var6 = var8.bind(var5)(var6);
                var5 = var6.parseAvatarDecorationData;
                var5 = var5.bind(var6)(var7);
                var0.avatar_decoration_data = var5;
                var0.bot = var4;
                var0.flags = var3;
                var3 = null;
                var3 = var3 != var2;
                if (!var3) {
                    _fun63858_ip = 140;
                    continue _fun63858
                }
            case 137:
                var1 = var2;
            case 140:
                var0.premium_type = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1605, 2]);