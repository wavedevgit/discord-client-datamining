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
        _fun62047: for (var _fun62047_ip = 0;;) switch (_fun62047_ip) {
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
                    _fun62047_ip = 79;
                    continue _fun62047
                }
            case 73:
                var0 = var2.bio;
            case 79:
                var6 = '';
                var0 = var6 === var0;
                if (!var0) {
                    _fun62047_ip = 109;
                    continue _fun62047
                }
            case 90:
                var7 = var4 == var2;
                var3 = undefined;
                if (var7) {
                    _fun62047_ip = 105;
                    continue _fun62047
                }
            case 99:
                var3 = var2.pronouns;
            case 105:
                var0 = var6 === var3;
            case 109:
                if (!var0) {
                    _fun62047_ip = 131;
                    continue _fun62047
                }
            case 112:
                var6 = var4 == var2;
                var3 = undefined;
                if (var6) {
                    _fun62047_ip = 127;
                    continue _fun62047
                }
            case 121:
                var3 = var2.banner;
            case 127:
                var0 = var5 === var3;
            case 131:
                if (!var0) {
                    _fun62047_ip = 153;
                    continue _fun62047
                }
            case 134:
                var6 = var4 == var2;
                var3 = undefined;
                if (var6) {
                    _fun62047_ip = 149;
                    continue _fun62047
                }
            case 143:
                var3 = var2.accentColor;
            case 149:
                var0 = var5 === var3;
            case 153:
                if (!var0) {
                    _fun62047_ip = 175;
                    continue _fun62047
                }
            case 156:
                var6 = var4 == var2;
                var3 = undefined;
                if (var6) {
                    _fun62047_ip = 171;
                    continue _fun62047
                }
            case 165:
                var3 = var2.banner;
            case 171:
                var0 = var5 === var3;
            case 175:
                if (!var0) {
                    _fun62047_ip = 193;
                    continue _fun62047
                }
            case 178:
                var3 = var1.flags;
                var1 = var1.publicFlags;
                var0 = var3 === var1;
            case 193:
                if (!var0) {
                    _fun62047_ip = 256;
                    continue _fun62047
                }
            case 196:
                var3 = var4 == var2;
                var1 = undefined;
                if (var3) {
                    _fun62047_ip = 211;
                    continue _fun62047
                }
            case 205:
                var1 = var2.badges;
            case 211:
                var1 = var4 == var1;
                if (var1) {
                    _fun62047_ip = 253;
                    continue _fun62047
                }
            case 218:
                var6 = var4 == var2;
                var3 = undefined;
                if (var6) {
                    _fun62047_ip = 247;
                    continue _fun62047
                }
            case 227:
                var2 = var2.badges;
                var4 = var4 == var2;
                var3 = undefined;
                if (var4) {
                    _fun62047_ip = 247;
                    continue _fun62047
                }
            case 242:
                var3 = var2.length;
            case 247:
                var2 = 0;
                var1 = var2 === var3;
            case 253:
                var0 = var1;
            case 256:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4660, 566, 2]);