// modules/guild_profile/native/GuildProfileUtils.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_profile/native/GuildProfileUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0, arg1() {
        _fun59850: for (var _fun59850_ip = 0;;) switch (_fun59850_ip) {
            case 0:
                var1 = arg0;
                var3 = null;
                var0 = var3 != var1;
                var5 = null;
                if (!var0) {
                    _fun59850_ip = 92;
                    continue _fun59850
                }
            case 14:
                var0 = var1.brandColorPrimary;
                var0 = var3 == var0;
                var5 = null;
                if (!var0) {
                    _fun59850_ip = 92;
                    continue _fun59850
                }
            case 29:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var2);
                var2 = var4.getGuildIconURL;
                var0 = {};
                var6 = var1.id;
                var0.id = var6;
                var6 = var1.icon;
                var0.icon = var6;
                var6 = 64;
                var0.size = var6;
                var5 = var2.bind(var4)(var0);
            case 92:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 3;
                var0 = var2[var0];
                var2 = undefined;
                var4 = var4.bind(var2)(var0);
                var0 = arg1;
                var0 = var4.bind(var2)(var5, var0);
                var4 = var3 == var1;
                if (var4) {
                    _fun59850_ip = 139;
                    continue _fun59850
                }
            case 133:
                var2 = var1.brandColorPrimary;
            case 139:
                if (!(var3 != var2)) {
                    _fun59850_ip = 149;
                    continue _fun59850
                }
            case 143:
                var0 = var1.brandColorPrimary;
            case 149:
                return var0;
        }
    };
    var2.useProfilePrimaryColor = var3;
    var1 = function arg0() {
        _fun59851: for (var _fun59851_ip = 0;;) switch (_fun59851_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun59851_ip = 359;
                    continue _fun59851
                }
            case 12:
                var2 = var1.brandColorPrimary;
                if (!(var0 == var2)) {
                    _fun59851_ip = 351;
                    continue _fun59851
                }
            case 25:
                var6 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 2;
                var3 = var3[var5];
                var4 = undefined;
                var7 = var6.bind(var4)(var3);
                var6 = var7.getGuildIconURL;
                var3 = {};
                var8 = var1.id;
                var3.id = var8;
                var8 = var1.icon;
                var3.icon = var8;
                var8 = 64;
                var3.size = var8;
                var6 = var6.bind(var7)(var3);
                if (!(var0 != var6)) {
                    _fun59851_ip = 349;
                    continue _fun59851
                }
            case 95:
                var8 = _closure1_slot0;
                var3 = _closure1_slot2;
                var7 = 3;
                var9 = var3[var7];
                var10 = var8.bind(var4)(var9);
                var9 = var10.maybeFetchColors;
                var9 = var9.bind(var10)(var6);
                var3 = var3[var7];
                var3 = var8.bind(var4)(var3);
                var8 = var3.useColorStore;
                var3 = var8.getState;
                var3 = var3.bind(var8)();
                var3 = var3.palette;
                var8 = var3[var6];
                var3 = var0 == var8;
                var6 = undefined;
                if (var3) {
                    _fun59851_ip = 176;
                    continue _fun59851
                }
            case 170:
                var3 = 0;
                var6 = var8[var3];
            case 176:
                if (!(var0 == var6)) {
                    _fun59851_ip = 182;
                    continue _fun59851
                }
            case 180:
                return var0;
            case 182:
                var3 = _closure1_slot3;
                var3 = var3.bind(var4)(var6, var7);
                var6 = 0;
                var10 = var3[var6];
                var7 = 1;
                var8 = var3[var7];
                var6 = var3[var5];
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var9 = 4;
                var3 = var3[var9];
                var5 = var5.bind(var4)(var3);
                var3 = {};
                var3.r = var10;
                var3.g = var8;
                var3.b = var6;
                var5 = var5.bind(var4)(var3);
                var3 = var5.toHsl;
                var3 = var3.bind(var5)();
                var8 = var3.h;
                var6 = var3.s;
                var5 = var3.l;
                var3 = _closure1_slot4;
                var3 = var3.desaturateUserColors;
                if (!var3) {
                    _fun59851_ip = 297;
                    continue _fun59851
                }
            case 287:
                var3 = _closure1_slot4;
                var7 = var3.saturation;
            case 297:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var9];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2.h = var8;
                var6 = var6 * var7;
                var2.s = var6;
                var2.l = var5;
                var3 = var3.bind(var4)(var2);
                var2 = var3.toHexString;
                var2 = var2.bind(var3)();
                return var2;
            case 349:
                return var0;
            case 351:
                var1 = var1.brandColorPrimary;
                return var1;
            case 359:
                return var0;
        }
    };
    var2.getProfilePrimaryColor = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 1298, 1417, 6842, 4624, 2]);