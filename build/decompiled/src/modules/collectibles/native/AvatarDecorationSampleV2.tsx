// modules/collectibles/native/AvatarDecorationSampleV2.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Image;
    var _closure1_slot3 = var6;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var6 = var3.Fragment;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        var4 = arg0;
        var0 = {};
        var1 = {};
        var2 = 'absolute';
        var1.position = var2;
        var3 = 0.8333333333333334;
        var5 = var4 * var3;
        var1.height = var5;
        var5 = var4 * var3;
        var1.width = var5;
        var4 = var4 * var3;
        var3 = 2;
        var3 = var4 / var3;
        var1.borderRadius = var3;
        var3 = 0.8;
        var1.opacity = var3;
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.colors;
        var3 = var3.BACKGROUND_BASE_LOWER;
        var1.backgroundColor = var3;
        var0.avatar = var1;
        var1 = {};
        var3 = 1;
        var1.opacity = var3;
        var0.threeTierBundle = var1;
        var1 = {};
        var1.position = var2;
        var0.avatarDecoration = var1;
        var1 = {};
        var2 = 0.4;
        var1.opacity = var2;
        var0.purchased = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/AvatarDecorationSampleV2.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun56996: for (var _fun56996_ip = 0;;) switch (_fun56996_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.item;
                var12 = var0.size;
                var7 = var0.avatarSource;
                var11 = var0.animate;
                var10 = var0.isPurchased;
                var15 = var0.threeTierBundle;
                var0 = _closure1_slot8;
                var3 = undefined;
                var14 = var0.bind(var3)(var12);
                var1 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 5;
                var0 = var5[var0];
                var2 = var1.bind(var3)(var0);
                var1 = var13.type;
                var4 = _closure1_slot0;
                var0 = 6;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.CollectiblesItemType;
                var0 = var0.AVATAR_DECORATION;
                var1 = var1 === var0;
                var0 = 'Item must be Avatar Decoration';
                var0 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot7;
                var1 = _closure1_slot6;
                var0 = {};
                var6 = _closure1_slot5;
                var5 = _closure1_slot3;
                var4 = {};
                var16 = var14.avatar;
                var9 = new Array(3);
                var9[0] = var16;
                var16 = var10;
                if (!var10) {
                    _fun56996_ip = 166;
                    continue _fun56996
                }
            case 160:
                var16 = var14.purchased;
            case 166:
                var9[1] = var16;
                if (!var15) {
                    _fun56996_ip = 179;
                    continue _fun56996
                }
            case 173:
                var15 = var14.threeTierBundle;
            case 179:
                var9[2] = var15;
                var4.style = var9;
                var9 = 'contain';
                var4.resizeMode = var9;
                var9 = null;
                if (!(var9 == var7)) {
                    _fun56996_ip = 221;
                    continue _fun56996
                }
            case 201:
                var15 = _closure1_slot1;
                var16 = _closure1_slot2;
                var9 = 7;
                var9 = var16[var9];
                var7 = var15.bind(var3)(var9);
            case 221:
                var4.source = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot5;
                var6 = _closure1_slot4;
                var5 = {};
                var15 = var14.avatarDecoration;
                var9 = new Array(2);
                var9[0] = var15;
                if (!var10) {
                    _fun56996_ip = 272;
                    continue _fun56996
                }
            case 266:
                var10 = var14.purchased;
            case 272:
                var9[1] = var10;
                var5.style = var9;
                var10 = _closure1_slot5;
                var9 = _closure1_slot1;
                var14 = _closure1_slot2;
                var8 = 8;
                var8 = var14[var8];
                var9 = var9.bind(var3)(var8);
                var8 = {};
                var8.avatarDecoration = var13;
                var8.size = var12;
                var8.animate = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    var1 = 0.8333333333333334;
    var2.avatarPlaceholderSizeRatio = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 44, 3495, 6941, 5759, 2]);