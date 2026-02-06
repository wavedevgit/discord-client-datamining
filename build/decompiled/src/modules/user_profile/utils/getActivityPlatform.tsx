// modules/user_profile/utils/getActivityPlatform.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
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
    var6 = var6.PlatformTypes;
    var _closure1_slot2 = var6;
    var7 = var3.Set;
    var8 = var6.LEAGUE_OF_LEGENDS;
    var3 = new Array(4);
    var3[0] = var8;
    var8 = var6.ROBLOX;
    var3[1] = var8;
    var8 = var6.TWITCH;
    var3[2] = var8;
    var6 = var6.YOUTUBE;
    var3[3] = var6;
    var6 = var7.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var7
        }
    });
    var12 = var6;
    var11 = var3;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot3 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/utils/getActivityPlatform.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun62680: for (var _fun62680_ip = 0;;) switch (_fun62680_ip) {
            case 0:
                var12 = arg0;
                var _closure2_slot0 = var12;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 1;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var4.bind(var3)(var2);
                var5 = var2.bind(var3)(var12);
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                if (var5) {
                    _fun62680_ip = 413;
                    continue _fun62680
                }
            case 53:
                var5 = 3;
                var5 = var4[var5];
                var5 = var2.bind(var3)(var5);
                var7 = var5.bind(var3)(var12);
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                if (var7) {
                    _fun62680_ip = 379;
                    continue _fun62680
                }
            case 84:
                var7 = 4;
                var7 = var6[var7];
                var7 = var5.bind(var3)(var7);
                var9 = var7.bind(var3)(var12);
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                if (var9) {
                    _fun62680_ip = 345;
                    continue _fun62680
                }
            case 115:
                var9 = 5;
                var9 = var8[var9];
                var9 = var7.bind(var3)(var9);
                var11 = var9.bind(var3)(var12);
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                if (var11) {
                    _fun62680_ip = 311;
                    continue _fun62680
                }
            case 146:
                var11 = 6;
                var11 = var10[var11];
                var11 = var9.bind(var3)(var11);
                var11 = var11.bind(var3)(var12);
                if (var11) {
                    _fun62680_ip = 269;
                    continue _fun62680
                }
            case 166:
                var13 = _closure1_slot0;
                var14 = _closure1_slot1;
                var11 = 7;
                var11 = var14[var11];
                var11 = var13.bind(var3)(var11);
                var11 = var11.bind(var3)(var12);
                if (var11) {
                    _fun62680_ip = 269;
                    continue _fun62680
                }
            case 194:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var11 = 2;
                var11 = var13[var11];
                var12 = var12.bind(var3)(var11);
                var11 = var12.find;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.name;
                    var0 = _closure2_slot0;
                    var0 = var0.name;
                    var0 = var1 === var0;
                    return var0;
                };
                var11 = var11.bind(var12)(var1);
                var13 = null;
                var12 = var13 != var11;
                var1 = null;
                if (!var12) {
                    _fun62680_ip = 267;
                    continue _fun62680
                }
            case 240:
                var15 = _closure1_slot3;
                var14 = var15.has;
                var12 = var11.type;
                var12 = var14.bind(var15)(var12);
                var1 = null;
                if (!var12) {
                    _fun62680_ip = 267;
                    continue _fun62680
                }
            case 264:
                var1 = var11;
            case 267:
                return var1;
            case 269:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var1 = 2;
                var1 = var12[var1];
                var12 = var11.bind(var3)(var1);
                var11 = var12.get;
                var1 = _closure1_slot2;
                var1 = var1.META_QUEST_OR_HORIZON;
                var1 = var11.bind(var12)(var1);
                return var1;
            case 311:
                var1 = 2;
                var1 = var10[var1];
                var10 = var9.bind(var3)(var1);
                var9 = var10.get;
                var1 = _closure1_slot2;
                var1 = var1.PLAYSTATION;
                var1 = var9.bind(var10)(var1);
                return var1;
            case 345:
                var1 = 2;
                var1 = var8[var1];
                var8 = var7.bind(var3)(var1);
                var7 = var8.get;
                var1 = _closure1_slot2;
                var1 = var1.XBOX;
                var1 = var7.bind(var8)(var1);
                return var1;
            case 379:
                var1 = 2;
                var1 = var6[var1];
                var6 = var5.bind(var3)(var1);
                var5 = var6.get;
                var1 = _closure1_slot2;
                var1 = var1.CRUNCHYROLL;
                var1 = var5.bind(var6)(var1);
                return var1;
            case 413:
                var1 = 2;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.get;
                var0 = _closure1_slot2;
                var0 = var0.SPOTIFY;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 5680, 4396, 7807, 7865, 7866, 7893, 7894, 2]);