// modules/user_profile/hooks/useIsUserProfileObfuscated.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/hooks/useIsUserProfileObfuscated.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun68607: for (var _fun68607_ip = 0;;) switch (_fun68607_ip) {
            case 0:
                var1 = arg0;
                var _closure2_slot0 = var1;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 1;
                var3 = var5[var3];
                var5 = undefined;
                var4 = var4.bind(var5)(var3);
                var3 = var4.useStateFromStores;
                var6 = _closure1_slot2;
                var2 = new Array(1);
                var2[0] = var6;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot2;
                    var1 = var2.getUserProfile;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var3.bind(var4)(var2, var0);
                var4 = null;
                var3 = var4 == var2;
                var0 = undefined;
                if (var3) {
                    _fun68607_ip = 81;
                    continue _fun68607
                }
            case 75:
                var0 = var2.bio;
            case 81:
                var6 = '';
                var0 = var6 === var0;
                if (!var0) {
                    _fun68607_ip = 111;
                    continue _fun68607
                }
            case 92:
                var7 = var4 == var2;
                var3 = undefined;
                if (var7) {
                    _fun68607_ip = 107;
                    continue _fun68607
                }
            case 101:
                var3 = var2.pronouns;
            case 107:
                var0 = var6 === var3;
            case 111:
                if (!var0) {
                    _fun68607_ip = 133;
                    continue _fun68607
                }
            case 114:
                var6 = var4 == var2;
                var3 = undefined;
                if (var6) {
                    _fun68607_ip = 129;
                    continue _fun68607
                }
            case 123:
                var3 = var2.banner;
            case 129:
                var0 = var5 === var3;
            case 133:
                if (!var0) {
                    _fun68607_ip = 155;
                    continue _fun68607
                }
            case 136:
                var6 = var4 == var2;
                var3 = undefined;
                if (var6) {
                    _fun68607_ip = 151;
                    continue _fun68607
                }
            case 145:
                var3 = var2.accentColor;
            case 151:
                var0 = var5 === var3;
            case 155:
                if (!var0) {
                    _fun68607_ip = 177;
                    continue _fun68607
                }
            case 158:
                var6 = var4 == var2;
                var3 = undefined;
                if (var6) {
                    _fun68607_ip = 173;
                    continue _fun68607
                }
            case 167:
                var3 = var2.banner;
            case 173:
                var0 = var5 === var3;
            case 177:
                if (!var0) {
                    _fun68607_ip = 195;
                    continue _fun68607
                }
            case 180:
                var3 = var1.flags;
                var1 = var1.publicFlags;
                var0 = var3 === var1;
            case 195:
                if (!var0) {
                    _fun68607_ip = 258;
                    continue _fun68607
                }
            case 198:
                var3 = var4 == var2;
                var1 = undefined;
                if (var3) {
                    _fun68607_ip = 213;
                    continue _fun68607
                }
            case 207:
                var1 = var2.badges;
            case 213:
                var1 = var4 == var1;
                if (var1) {
                    _fun68607_ip = 255;
                    continue _fun68607
                }
            case 220:
                var6 = var4 == var2;
                var3 = undefined;
                if (var6) {
                    _fun68607_ip = 249;
                    continue _fun68607
                }
            case 229:
                var2 = var2.badges;
                var4 = var4 == var2;
                var3 = undefined;
                if (var4) {
                    _fun68607_ip = 249;
                    continue _fun68607
                }
            case 244:
                var3 = var2.length;
            case 249:
                var2 = 0;
                var1 = var2 === var3;
            case 255:
                var0 = var1;
            case 258:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4667, 566, 2]);