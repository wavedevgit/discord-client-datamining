// modules/user_profile/preloadUserBannerImage.tsx
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
    var3 = 'modules/user_profile/preloadUserBannerImage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun57079: for (var _fun57079_ip = 0;;) switch (_fun57079_ip) {
            case 0:
                var6 = arg0;
                var7 = arg1;
                var0 = global;
                var1 = var0.Image;
                var2 = 'undefined';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun57079_ip = 378;
                    continue _fun57079
                }
            case 28:
                var1 = var6.user;
                var2 = null;
                var3 = var2 == var1;
                var8 = undefined;
                var10 = undefined;
                if (var3) {
                    _fun57079_ip = 51;
                    continue _fun57079
                }
            case 46:
                var10 = var1.id;
            case 51:
                if (!(var2 != var10)) {
                    _fun57079_ip = 378;
                    continue _fun57079
                }
            case 58:
                var1 = '';
                if (!(var1 !== var10)) {
                    _fun57079_ip = 378;
                    continue _fun57079
                }
            case 69:
                var3 = var2 != var7;
                if (!var3) {
                    _fun57079_ip = 101;
                    continue _fun57079
                }
            case 76:
                var4 = var6.guild_member_profile;
                var5 = var2 == var4;
                var1 = undefined;
                if (var5) {
                    _fun57079_ip = 97;
                    continue _fun57079
                }
            case 91:
                var1 = var4.banner;
            case 97:
                var3 = var2 != var1;
            case 101:
                var1 = undefined;
                if (!var3) {
                    _fun57079_ip = 209;
                    continue _fun57079
                }
            case 106:
                var9 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 0;
                var3 = var11[var3];
                var5 = var9.bind(var8)(var3);
                var4 = var5.getGuildMemberBannerURL;
                var3 = {};
                var3.id = var10;
                var3.guildId = var7;
                var7 = var6.guild_member_profile;
                var7 = var7.banner;
                var3.banner = var7;
                var7 = 1;
                var7 = var11[var7];
                var7 = var9.bind(var8)(var7);
                var9 = var7.GifAutoPlay;
                var7 = var9.getSetting;
                var7 = var7.bind(var9)();
                var3.canAnimate = var7;
                var7 = 600;
                var3.size = var7;
                var1 = var4.bind(var5)(var3);
            case 209:
                var4 = var2 == var6;
                var3 = undefined;
                if (var4) {
                    _fun57079_ip = 239;
                    continue _fun57079
                }
            case 218:
                var4 = var6.user_profile;
                var5 = var2 == var4;
                var3 = undefined;
                if (var5) {
                    _fun57079_ip = 239;
                    continue _fun57079
                }
            case 233:
                var3 = var4.banner;
            case 239:
                if (!(var2 != var3)) {
                    _fun57079_ip = 342;
                    continue _fun57079
                }
            case 243:
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 0;
                var3 = var9[var3];
                var5 = var7.bind(var8)(var3);
                var4 = var5.getUserBannerURL;
                var3 = {};
                var3.id = var10;
                var6 = var6.user_profile;
                var6 = var6.banner;
                var3.banner = var6;
                var6 = 1;
                var6 = var9[var6];
                var6 = var7.bind(var8)(var6);
                var7 = var6.GifAutoPlay;
                var6 = var7.getSetting;
                var6 = var6.bind(var7)();
                var3.canAnimate = var6;
                var6 = 600;
                var3.size = var6;
                var1 = var4.bind(var5)(var3);
            case 342:
                if (!(var2 != var1)) {
                    _fun57079_ip = 378;
                    continue _fun57079
                }
            case 346:
                var0 = var0.Image;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var14 = var2;
                var0 = new var14[var0](var13);
                var0 = var0 instanceof Object ? var0 : var2;
                var0.src = var1;
            case 378:
                var0 = undefined;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1417, 1348, 2]);