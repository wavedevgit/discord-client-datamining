// modules/guilds_bar/native/utils/computeGuildsBarCutout.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.PixelRatio;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GUILD_ITEM_SIZE;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.BADGE_PADDING;
    var _closure1_slot4 = var6;
    var3 = var3.BADGE_SIZE;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guilds_bar/native/utils/computeGuildsBarCutout.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun101492: for (var _fun101492_ip = 0;;) switch (_fun101492_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.position;
                var3 = var0.containerSize;
                var9 = undefined;
                if (!(var3 === var9)) {
                    _fun101492_ip = 27;
                    continue _fun101492
                }
            case 20:
                var3 = _closure1_slot3;
            case 27:
                var4 = var0.width;
                if (!(var4 === var9)) {
                    _fun101492_ip = 43;
                    continue _fun101492
                }
            case 36:
                var4 = _closure1_slot5;
            case 43:
                var5 = var0.height;
                if (!(var5 === var9)) {
                    _fun101492_ip = 59;
                    continue _fun101492
                }
            case 52:
                var5 = _closure1_slot5;
            case 59:
                var1 = var0.padding;
                if (!(var1 === var9)) {
                    _fun101492_ip = 75;
                    continue _fun101492
                }
            case 68:
                var1 = _closure1_slot4;
            case 75:
                var8 = _closure1_slot2;
                var2 = var8.roundToNearestPixel;
                var10 = 2;
                var0 = var10 * var1;
                var0 = var4 + var0;
                var2 = var2.bind(var8)(var0);
                var4 = var8.roundToNearestPixel;
                var0 = var10 * var1;
                var0 = var5 + var0;
                var4 = var4.bind(var8)(var0);
                var5 = var8.roundToNearestPixel;
                var0 = global;
                var11 = var0.Math;
                var0 = var11.min;
                var0 = var0.bind(var11)(var2, var4);
                var0 = var0 / var10;
                var5 = var5.bind(var8)(var0);
                var0 = {
                    'shape': null,
                    'x': 0,
                    'y': 0
                };
                var8 = _closure1_slot0;
                var10 = _closure1_slot1;
                var7 = 3;
                var7 = var10[var7];
                var7 = var8.bind(var9)(var7);
                var7 = var7.CutoutShape;
                var7 = var7.RoundedRect;
                var0.shape = var7;
                var0.width = var2;
                var0.height = var4;
                var0.cornerRadius = var5;
                var5 = 'top-right';
                if (!(var5 !== var6)) {
                    _fun101492_ip = 262;
                    continue _fun101492
                }
            case 232:
                var5 = var3 - var2;
                var5 = var5 + var1;
                var0.x = var5;
                var4 = var3 - var4;
                var4 = var4 + var1;
                var0.y = var4;
                _fun101492_ip = 285;
                continue _fun101492;
            case 262:
                var2 = var3 - var2;
                var2 = var2 + var1;
                var0.x = var2;
                var1 = -var1;
                var0.y = var1;
            case 285:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 13198, 8714, 5509, 2]);