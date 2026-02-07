// utils/native/AvatarUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var9;
    var3 = function arg0() {
        _fun16649: for (var _fun16649_ip = 0;;) switch (_fun16649_ip) {
            case 0:
                var3 = arg0;
                var1 = 'number';
                var0 = typeof var3;
                if (!(var1 !== var0)) {
                    _fun16649_ip = 38;
                    continue _fun16649
                }
            case 14:
                var0 = global;
                var1 = var0.Array;
                var0 = var1.isArray;
                var1 = var0.bind(var1)(var3);
                var0 = var3;
                if (!var1) {
                    _fun16649_ip = 56;
                    continue _fun16649
                }
            case 38:
                var2 = _closure1_slot2;
                var1 = var2.resolveAssetSource;
                var0 = var1.bind(var2)(var3);
            case 56:
                return var0;
        }
    };
    var11 = global;
    var6 = var11.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var9[var0];
    var0 = undefined;
    var4 = var8.bind(var0)(var4);
    var5 = var4.Image;
    var _closure1_slot2 = var5;
    var6 = var4.NativeModules;
    var4 = 1;
    var4 = var9[var4];
    var4 = var10.bind(var0)(var4);
    var5 = new Array(6);
    var5[0] = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var10.bind(var0)(var4);
    var5[1] = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var10.bind(var0)(var4);
    var5[2] = var4;
    var4 = 4;
    var4 = var9[var4];
    var4 = var10.bind(var0)(var4);
    var5[3] = var4;
    var4 = 5;
    var4 = var9[var4];
    var4 = var10.bind(var0)(var4);
    var5[4] = var4;
    var4 = 6;
    var4 = var9[var4];
    var4 = var10.bind(var0)(var4);
    var5[5] = var4;
    var4 = 7;
    var4 = var9[var4];
    var7 = var10.bind(var0)(var4);
    var4 = new Array(6);
    var4[0] = var7;
    var7 = 8;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var4[1] = var7;
    var7 = 9;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var4[2] = var7;
    var7 = 10;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var4[3] = var7;
    var7 = 11;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var4[4] = var7;
    var7 = 12;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var4[5] = var7;
    var7 = 13;
    var7 = var9[var7];
    var12 = var10.bind(var0)(var7);
    var7 = new Array(8);
    var7[0] = var12;
    var12 = 14;
    var12 = var9[var12];
    var12 = var10.bind(var0)(var12);
    var7[1] = var12;
    var12 = 15;
    var12 = var9[var12];
    var12 = var10.bind(var0)(var12);
    var7[2] = var12;
    var12 = 16;
    var12 = var9[var12];
    var12 = var10.bind(var0)(var12);
    var7[3] = var12;
    var12 = 17;
    var12 = var9[var12];
    var12 = var10.bind(var0)(var12);
    var7[4] = var12;
    var12 = 18;
    var12 = var9[var12];
    var12 = var10.bind(var0)(var12);
    var7[5] = var12;
    var12 = 19;
    var12 = var9[var12];
    var12 = var10.bind(var0)(var12);
    var7[6] = var12;
    var12 = 20;
    var12 = var9[var12];
    var12 = var10.bind(var0)(var12);
    var7[7] = var12;
    var12 = var11.Set;
    var11 = var6.MediaManager;
    var6 = var11.getConstants;
    var6 = var6.bind(var11)();
    var15 = var6.supportedExtensions;
    var11 = var12.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var12
        }
    });
    var16 = var11;
    var6 = new var16[var12](var15, var14);
    var6 = var6 instanceof Object ? var6 : var11;
    var _closure1_slot3 = var6;
    var6 = {};
    var6.DEFAULT_AVATARS = var5;
    var6.DEFAULT_PROVISIONAL_AVATARS = var4;
    var6.DEFAULT_GROUP_DM_AVATARS = var7;
    var7 = {};
    var11 = 21;
    var11 = var9[var11];
    var11 = var10.bind(var0)(var11);
    var7.clyde = var11;
    var11 = 22;
    var11 = var9[var11];
    var11 = var10.bind(var0)(var11);
    var7.nitro_wumpus = var11;
    var6.BOT_AVATARS = var7;
    var7 = 24;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var6.DEFAULT_CHANNEL_ICON = var7;
    var6.ensureAvatarSource = var3;
    var7 = function() {
        var2 = _closure1_slot3;
        var1 = var2.has;
        var0 = 'webp';
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6.canUseWebp = var7;
    var7 = 25;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'utils/native/AvatarUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var2.default = var6;
    var2.DEFAULT_AVATARS = var5;
    var2.DEFAULT_PROVISIONAL_AVATARS = var4;
    var2.ensureAvatarSource = var3;
    var1 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 23;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.getAutomodAvatarURL = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 2]);