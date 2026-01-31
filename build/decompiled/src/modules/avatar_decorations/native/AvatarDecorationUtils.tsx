// modules/avatar_decorations/native/AvatarDecorationUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.DECORATION_TO_AVATAR_RATIO;
    var _closure1_slot3 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/avatar_decorations/native/AvatarDecorationUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: getDecorationSizeForAvatarSize, environment: var1
        _fun48951: for (var _fun48951_ip = 0;;) switch (_fun48951_ip) {
            case 0:
                var3 = arg0;
                var1 = 'number';
                var0 = typeof var3;
                if (!(var1 === var0)) {
                    _fun48951_ip = 27;
                    continue _fun48951
                }
            case 14:
                var0 = _closure1_slot3;
                var0 = var3 * var0;
                _fun48951_ip = 70;
                continue _fun48951;
            case 27:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 1;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var5.bind(var2)(var4);
                var2 = var2.AVATAR_SIZE_MAP;
                var2 = var2[var3];
                var1 = _closure1_slot3;
                var0 = var2 * var1;
            case 70:
                return var0;
        }
    };
    var2.getDecorationSizeForAvatarSize = var3;
    var3 = function(arg0, arg1) { // Original name: getDecorationCutoutForAvatarCutout, environment: var1
        _fun48952: for (var _fun48952_ip = 0;;) switch (_fun48952_ip) {
            case 0:
                var5 = arg0;
                var6 = arg1;
                var _closure2_slot0 = var6;
                var4 = null;
                var0 = var5;
                if (!(var4 != var0)) {
                    _fun48952_ip = 153;
                    continue _fun48952
                }
            case 24:
                var1 = {};
                var2 = var5.direction;
                var1.direction = var2;
                var2 = var5.radius;
                var1.radius = var2;
                var7 = var5.inset;
                var8 = var4 != var7;
                var2 = 0;
                if (!var8) {
                    _fun48952_ip = 66;
                    continue _fun48952
                }
            case 63:
                var2 = var7;
            case 66:
                var2 = var2 + var6;
                var1.inset = var2;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 1;
                var6 = var6[var2];
                var2 = undefined;
                var6 = var7.bind(var2)(var6);
                var6 = var6.CutoutType;
                var6 = var6.RECTANGULAR;
                var1.imageType = var6;
                var5 = var5.nativeCutouts;
                var4 = var4 == var5;
                if (var4) {
                    _fun48952_ip = 145;
                    continue _fun48952
                }
            case 130:
                var4 = var5.map;
                var3 = function(arg0) { // Environment: var3
                    var1 = arg0;
                    var0 = {};
                    var6 = var0;
                    var5 = var1;
                    var2 = copyDataProperties(var6, var5);
                    var3 = var1.x;
                    var2 = _closure2_slot0;
                    var4 = var3 + var2;
                    var3 = 'x';
                    var0[var3] = var4;
                    var1 = var1.y;
                    var2 = var1 + var2;
                    var1 = 'y';
                    var0[var1] = var2;
                    return var0;
                };
                var2 = var4.bind(var5)(var3);
            case 145:
                var1.nativeCutouts = var2;
                var0 = var1;
            case 153:
                return var0;
        }
    };
    var2.getDecorationCutoutForAvatarCutout = var3;
    var1 = function(arg0) { // Original name: openAvatarDecorationActionSheet, environment: var1
        var0 = arg0;
        var9 = var0.user;
        var8 = var0.guildId;
        var7 = var0.currentAvatarDecoration;
        var6 = var0.isTryItOut;
        var1 = var0.analyticsLocations;
        var5 = _closure1_slot1;
        var2 = _closure1_slot2;
        var4 = 2;
        var10 = var2[var4];
        var0 = undefined;
        var11 = var5.bind(var0)(var10);
        var10 = var11.hideActionSheet;
        var10 = var10.bind(var11)();
        var4 = var2[var4];
        var5 = var5.bind(var0)(var4);
        var4 = var5.openLazy;
        var10 = _closure1_slot0;
        var3 = 4;
        var3 = var2[var3];
        var10 = var10.bind(var0)(var3);
        var3 = 3;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var10.bind(var0)(var3, var2);
        var2 = {};
        var2.user = var9;
        var2.guildId = var8;
        var2.currentAvatarDecoration = var7;
        var2.isTryItOut = var6;
        var2.analyticsLocations = var1;
        var1 = 'Edit Avatar Decoration';
        var1 = var4.bind(var5)(var3, var1, var2);
        return var0;
    };
    var2.openAvatarDecorationActionSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5537, 5416, 3237, 5539, 1307, 2]);