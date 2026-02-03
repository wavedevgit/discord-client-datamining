// modules/collectibles/native/AvatarDecorationProductPreview.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_24;
    var8.paddingVertical = var9;
    var3.fullSizePreview = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/AvatarDecorationProductPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun87576: for (var _fun87576_ip = 0;;) switch (_fun87576_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.product;
                var0 = _closure1_slot5;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 5;
                var0 = var3[var0];
                var7 = var1.bind(var4)(var0);
                var0 = var7.useCurrentUser;
                var11 = var0.bind(var7)();
                var0 = 6;
                var0 = var3[var0];
                var1 = var1.bind(var4)(var0);
                var0 = var1.useShopProductItems;
                var0 = var0.bind(var1)(var2);
                var7 = var0.firstAvatarDecoration;
                var0 = null;
                var1 = var0 == var7;
                if (var1) {
                    _fun87576_ip = 285;
                    continue _fun87576
                }
            case 93:
                var3 = _closure1_slot4;
                var2 = _closure1_slot3;
                var1 = {};
                var6 = var6.fullSizePreview;
                var1.style = var6;
                var6 = 'box-none';
                var1.pointerEvents = var6;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 7;
                var8 = var10[var6];
                var8 = var9.bind(var4)(var8);
                var13 = var8.intl;
                var12 = var13.formatToPlainString;
                var6 = var10[var6];
                var6 = var9.bind(var4)(var6);
                var6 = var6.t;
                var8 = var6.Do2lxE;
                var6 = {};
                var14 = var7.label;
                var6.a11y_text = var14;
                var6 = var12.bind(var13)(var8, var6);
                var1.accessibilityLabel = var6;
                var6 = 'image';
                var1.accessibilityRole = var6;
                var6 = _closure1_slot1;
                var8 = 8;
                var5 = var10[var8];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5.user = var11;
                var5.guildId = var4;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.AvatarSizes;
                var8 = var8.GIFT_START;
                var5.size = var8;
                var5.avatarDecoration = var7;
                var7 = true;
                var5.animate = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 285:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 9497, 6881, 1234, 5452, 2]);