// modules/profile_customization/native/ProfileCustomizationUtils.tsx
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
    var0 = 3;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/profile_customization/native/ProfileCustomizationUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun50989: for (var _fun50989_ip = 0;;) switch (_fun50989_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.displayProfile;
                var2 = var0.pendingBanner;
                var5 = null;
                if (!(var5 == var2)) {
                    _fun50989_ip = 217;
                    continue _fun50989
                }
            case 24:
                if (!(var5 === var2)) {
                    _fun50989_ip = 45;
                    continue _fun50989
                }
            case 28:
                if (!(var5 != var7)) {
                    _fun50989_ip = 122;
                    continue _fun50989
                }
            case 32:
                var0 = var7.isUsingGuildMemberBanner;
                var0 = var0.bind(var7)();
                if (!var0) {
                    _fun50989_ip = 122;
                    continue _fun50989
                }
            case 45:
                var0 = var5 == var7;
                var6 = undefined;
                var4 = undefined;
                if (var0) {
                    _fun50989_ip = 77;
                    continue _fun50989
                }
            case 56:
                var3 = var7.getPreviewBanner;
                var1 = true;
                var0 = 600;
                var4 = var3.bind(var7)(var2, var1, var0);
            case 77:
                var1 = var5 != var4;
                var0 = null;
                if (!var1) {
                    _fun50989_ip = 120;
                    continue _fun50989
                }
            case 86:
                var3 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 1;
                var1 = var8[var1];
                var3 = var3.bind(var6)(var1);
                var1 = var3.makeSource;
                var0 = var1.bind(var3)(var4);
            case 120:
                return var0;
            case 122:
                var3 = var5 == var7;
                var1 = undefined;
                var0 = undefined;
                if (var3) {
                    _fun50989_ip = 138;
                    continue _fun50989
                }
            case 133:
                var0 = var7.guildId;
            case 138:
                var3 = var5 != var0;
                var0 = null;
                if (!var3) {
                    _fun50989_ip = 215;
                    continue _fun50989
                }
            case 147:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 1;
                var3 = var6[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.makeSource;
                var5 = var5 == var7;
                var1 = undefined;
                if (var5) {
                    _fun50989_ip = 210;
                    continue _fun50989
                }
            case 185:
                var6 = var7.getBannerURL;
                var5 = {
                    'size': 600,
                    'canAnimate': true
                };
                var1 = var6.bind(var7)(var5);
            case 210:
                var0 = var3.bind(var4)(var1);
            case 215:
                return var0;
            case 217:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.memoizedImageSource;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var2.useEditBannerSource = var3;
    var3 = function arg0() {
        _fun50990: for (var _fun50990_ip = 0;;) switch (_fun50990_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.user;
                var5 = var1.guildId;
                var0 = var1.pendingAvatarSrc;
                var3 = var1.displayProfile;
                var2 = null;
                var1 = var2 == var6;
                var8 = null;
                if (var1) {
                    _fun50990_ip = 121;
                    continue _fun50990
                }
            case 36:
                if (!(var2 != var0)) {
                    _fun50990_ip = 103;
                    continue _fun50990
                }
            case 40:
                if (!(var2 == var0)) {
                    _fun50990_ip = 101;
                    continue _fun50990
                }
            case 44:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var4 = var4[var1];
                var1 = undefined;
                var7 = var7.bind(var1)(var4);
                var4 = var7.getUserAvatarURL;
                var1 = {};
                var11 = var1;
                var10 = var6;
                var9 = copyDataProperties(var11, var10);
                var9 = 'avatar';
                var1[var9] = var2;
                var0 = var4.bind(var7)(var1);
            case 101:
                _fun50990_ip = 118;
                continue _fun50990;
            case 103:
                var4 = var6.getAvatarURL;
                var1 = 80;
                var0 = var4.bind(var6)(var5, var1);
            case 118:
                var8 = var0;
            case 121:
                var6 = _closure1_slot0;
                var9 = _closure1_slot1;
                var0 = 0;
                var4 = var9[var0];
                var1 = undefined;
                var5 = var6.bind(var1)(var4);
                var4 = var5.memoizedImageSource;
                var7 = var4.bind(var5)(var8);
                var4 = 2;
                var4 = var9[var4];
                var5 = var6.bind(var1)(var4);
                var4 = var5.rgb2int;
                var0 = var9[var0];
                var6 = var6.bind(var1)(var0);
                var0 = var6.useDominantColorFromImage;
                var0 = var0.bind(var6)(var8, var7);
                var0 = var4.bind(var5)(var0);
                var4 = var2 == var3;
                if (var4) {
                    _fun50990_ip = 213;
                    continue _fun50990
                }
            case 207:
                var1 = var3.primaryColor;
            case 213:
                if (!(var2 != var1)) {
                    _fun50990_ip = 220;
                    continue _fun50990
                }
            case 217:
                var0 = var1;
            case 220:
                return var0;
        }
    };
    var2.useUserProfileBannerBackgroundColor = var3;
    var1 = function arg0, arg1, arg2, arg3() {
        _fun50991: for (var _fun50991_ip = 0;;) switch (_fun50991_ip) {
            case 0:
                var8 = arg0;
                var3 = arg2;
                var10 = null;
                var1 = var10 == var8;
                var0 = null;
                if (var1) {
                    _fun50991_ip = 178;
                    continue _fun50991
                }
            case 20:
                var4 = undefined;
                if (!(var4 !== var3)) {
                    _fun50991_ip = 117;
                    continue _fun50991
                }
            case 26:
                var2 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 0;
                var1 = var6[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.memoizedImageSource;
                if (!(var10 == var3)) {
                    _fun50991_ip = 110;
                    continue _fun50991
                }
            case 58:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var5 = 1;
                var5 = var7[var5];
                var7 = var6.bind(var4)(var5);
                var6 = var7.getUserAvatarURL;
                var5 = {};
                var13 = var5;
                var12 = var8;
                var9 = copyDataProperties(var13, var12);
                var9 = 'avatar';
                var5[var9] = var10;
                var3 = var6.bind(var7)(var5);
            case 110:
                var1 = var1.bind(var2)(var3);
                _fun50991_ip = 175;
                continue _fun50991;
            case 117:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 0;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.memoizedImageSource;
                var7 = var8.getAvatarURL;
                var2 = arg3;
                var6 = !var2;
                var5 = arg1;
                var2 = 80;
                var2 = var7.bind(var8)(var5, var2, var6);
                var1 = var3.bind(var4)(var2);
            case 175:
                var0 = var1;
            case 178:
                return var0;
        }
    };
    var2.getAvatarSource = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5742, 1417, 668, 2]);