// modules/guild_boosting/RoleIconUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var4.bind(var0)(var6);
    var7 = var6.Endpoints;
    var _closure1_slot3 = var7;
    var6 = var6.GuildFeatures;
    var _closure1_slot4 = var6;
    var6 = var3.location;
    var15 = var6.protocol;
    var6 = var3.window;
    var6 = var6.GLOBAL_ENV;
    var13 = var6.CDN_HOST;
    var6 = var3.HermesInternal;
    var9 = var6.concat;
    var8 = '';
    var14 = '//';
    var12 = '/role-icons';
    var16 = var8;
    var6 = var16[var9](var15, var14, var13, var12, var11);
    var _closure1_slot5 = var6;
    var6 = var3.location;
    var7 = var6.protocol;
    var6 = var3.window;
    var6 = var6.GLOBAL_ENV;
    var6 = var6.API_ENDPOINT;
    var3 = var3.HermesInternal;
    var3 = var3.concat;
    var3 = var3.bind(var8)(var7, var6);
    var _closure1_slot6 = var3;
    var3 = 1;
    var3 = var5[var3];
    var6 = var4.bind(var0)(var3);
    var3 = var6.isAndroid;
    var3 = var3.bind(var6)();
    var _closure1_slot7 = var3;
    var3 = function arg0, arg1() {
        _fun55908: for (var _fun55908_ip = 0;;) switch (_fun55908_ip) {
            case 0:
                var0 = arg0;
                var6 = arg1;
                var11 = var0.id;
                var0 = var0.icon;
                var4 = null;
                if (!(var4 == var0)) {
                    _fun55908_ip = 26;
                    continue _fun55908
                }
            case 22:
                var1 = undefined;
                return var1;
            case 26:
                var2 = var0.startsWith;
                var1 = 'data:';
                var1 = var2.bind(var0)(var1);
                if (var1) {
                    _fun55908_ip = 330;
                    continue _fun55908
                }
            case 49:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var13 = undefined;
                var1 = var2.bind(var13)(var1);
                var1 = var1.SUPPORTS_WEBP;
                var10 = 'png';
                if (!var1) {
                    _fun55908_ip = 93;
                    continue _fun55908
                }
            case 87:
                var10 = 'webp';
            case 93:
                var1 = var4 != var6;
                var9 = '';
                var8 = 'quality=lossless';
                var7 = var9;
                if (!var1) {
                    _fun55908_ip = 199;
                    continue _fun55908
                }
            case 113:
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 3;
                var2 = var14[var1];
                var5 = var12.bind(var13)(var2);
                var2 = var5.getBestMediaProxySize;
                var1 = var14[var1];
                var12 = var12.bind(var13)(var1);
                var1 = var12.getDevicePixelRatio;
                var1 = var1.bind(var12)();
                var1 = var6 * var1;
                var2 = var2.bind(var5)(var1);
                var1 = 'size=';
                var2 = var1 + var2;
                var5 = _closure1_slot7;
                var1 = var9;
                if (var5) {
                    _fun55908_ip = 193;
                    continue _fun55908
                }
            case 187:
                var1 = '&quality=lossless';
            case 193:
                var8 = var1;
                var7 = var2;
            case 199:
                var2 = global;
                var1 = var2.window;
                var1 = var1.GLOBAL_ENV;
                var1 = var1.CDN_HOST;
                if (!(var4 == var1)) {
                    _fun55908_ip = 273;
                    continue _fun55908
                }
            case 223:
                var6 = _closure1_slot6;
                var4 = _closure1_slot3;
                var1 = var4.ROLE_ICON;
                var23 = var1.bind(var4)(var11, var0);
                var1 = var2.HermesInternal;
                var4 = var1.concat;
                var22 = '?';
                var25 = var9;
                var24 = var6;
                var21 = var7;
                var1 = var25[var4](var24, var23, var22, var21, var20);
                _fun55908_ip = 328;
                continue _fun55908;
            case 273:
                var24 = _closure1_slot5;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var4 = '/';
                var19 = '.';
                var17 = '?';
                var25 = var9;
                var23 = var4;
                var22 = var11;
                var21 = var4;
                var20 = var0;
                var18 = var10;
                var16 = var7;
                var15 = var8;
                var1 = var25[var5](var24, var23, var22, var21, var20, var19, var18, var17, var16, var15, var14);
            case 328:
                return var1;
            case 330:
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_boosting/RoleIconUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0, arg1) { // Environment: var1
        _fun55909: for (var _fun55909_ip = 0;;) switch (_fun55909_ip) {
            case 0:
                var6 = arg0;
                var0 = null;
                if (!(var0 != var6)) {
                    _fun55909_ip = 134;
                    continue _fun55909
                }
            case 12:
                var1 = var6.unicodeEmoji;
                var1 = var0 != var1;
                var2 = undefined;
                var3 = undefined;
                if (!var1) {
                    _fun55909_ip = 92;
                    continue _fun55909
                }
            case 29:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 2;
                var4 = var8[var1];
                var5 = var7.bind(var2)(var4);
                var4 = var5.getByName;
                var1 = var8[var1];
                var9 = var7.bind(var2)(var1);
                var8 = var9.convertSurrogateToName;
                var7 = var6.unicodeEmoji;
                var1 = false;
                var1 = var8.bind(var9)(var7, var1);
                var3 = var4.bind(var5)(var1);
            case 92:
                var1 = {};
                var5 = _closure1_slot8;
                var4 = arg1;
                var4 = var5.bind(var2)(var6, var4);
                var1.customIconSrc = var4;
                var4 = var0 != var3;
                var2 = undefined;
                if (!var4) {
                    _fun55909_ip = 127;
                    continue _fun55909
                }
            case 124:
                var2 = var3;
            case 127:
                var1.unicodeEmoji = var2;
                return var1;
            case 134:
                return var0;
        }
    };
    var2.getRoleIconData = var3;
    var3 = function(arg0, arg1) { // Environment: var1
        var3 = arg0;
        var2 = var3.replace;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 3;
        var1 = var7[var0];
        var5 = undefined;
        var4 = var6.bind(var5)(var1);
        var1 = var4.getBestMediaProxySize;
        var0 = var7[var0];
        var5 = var6.bind(var5)(var0);
        var0 = var5.getDevicePixelRatio;
        var5 = var0.bind(var5)();
        var0 = arg1;
        var0 = var0 * var5;
        var4 = var1.bind(var4)(var0);
        var0 = global;
        var0 = var0.HermesInternal;
        var1 = var0.concat;
        var0 = 'size=';
        var1 = var1.bind(var0)(var4);
        var0 = /size=[0-9]+/g;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.replaceRoleIconSourceSize = var3;
    var3 = function(arg0) { // Environment: var1
        _fun55911: for (var _fun55911_ip = 0;;) switch (_fun55911_ip) {
            case 0:
                var4 = arg0;
                var2 = var4.startsWith;
                var0 = _closure1_slot5;
                var0 = var2.bind(var4)(var0);
                if (var0) {
                    _fun55911_ip = 90;
                    continue _fun55911
                }
            case 24:
                var2 = var4.startsWith;
                var6 = _closure1_slot6;
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var3 = '';
                var1 = '/roles';
                var1 = var5.bind(var3)(var6, var1);
                var1 = var2.bind(var4)(var1);
                if (!var1) {
                    _fun55911_ip = 87;
                    continue _fun55911
                }
            case 71:
                var3 = var4.includes;
                var2 = '/icons/';
                var1 = var3.bind(var4)(var2);
            case 87:
                var0 = var1;
            case 90:
                return var0;
        }
    };
    var2.isRoleIconAssetUrl = var3;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun55912: for (var _fun55912_ip = 0;;) switch (_fun55912_ip) {
            case 0:
                var2 = arg1;
                var1 = null;
                var3 = var1 == var2;
                var0 = undefined;
                if (var3) {
                    _fun55912_ip = 35;
                    continue _fun55912
                }
            case 14:
                var2 = var2.tags;
                var3 = var1 == var2;
                var0 = undefined;
                if (var3) {
                    _fun55912_ip = 35;
                    continue _fun55912
                }
            case 29:
                var0 = var2.subscription_listing_id;
            case 35:
                var0 = var1 != var0;
                if (var0) {
                    _fun55912_ip = 74;
                    continue _fun55912
                }
            case 42:
                var1 = arg0;
                var3 = var1.features;
                var2 = var3.has;
                var1 = _closure1_slot4;
                var1 = var1.ROLE_ICONS;
                var0 = var2.bind(var3)(var1);
            case 74:
                return var0;
        }
    };
    var2.canGuildUseRoleIcons = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 478, 3104, 1443, 1417, 2]);