// uikit-native/GameIcon.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var13;
    var _closure1_slot1 = var7;
    var4 = function arg0() {
        _fun56859: for (var _fun56859_ip = 0;;) switch (_fun56859_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.game;
                var5 = var0.skuId;
                var9 = var0.size;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun56859_ip = 39;
                    continue _fun56859
                }
            case 26:
                var1 = _closure1_slot6;
                var9 = var1.NORMAL;
            case 39:
                var0 = var0.style;
                var1 = _closure1_slot8;
                var6 = var1.bind(var3)();
                var8 = {};
                var1 = _closure1_slot6;
                var2 = var1.NORMAL;
                var1 = var6.normal;
                var8[var2] = var1;
                var1 = _closure1_slot6;
                var2 = var1.SMALL;
                var1 = var6.small;
                var8[var2] = var1;
                var1 = _closure1_slot6;
                var2 = var1.SIZE_24;
                var1 = var6.size24;
                var8[var2] = var1;
                var1 = _closure1_slot6;
                var2 = var1.LARGE;
                var1 = var6.large;
                var8[var2] = var1;
                var1 = var6.gameIcon;
                var10 = new Array(3);
                var10[0] = var1;
                var1 = var8[var9];
                var10[1] = var1;
                var10[2] = var0;
                var0 = null;
                var1 = var0 != var5;
                var7 = undefined;
                if (!var1) {
                    _fun56859_ip = 306;
                    continue _fun56859
                }
            case 181:
                var1 = _closure1_slot4;
                var1 = var1.TIER_0;
                if (!(var1 !== var5)) {
                    _fun56859_ip = 283;
                    continue _fun56859
                }
            case 195:
                var1 = _closure1_slot4;
                var1 = var1.TIER_1;
                if (!(var1 !== var5)) {
                    _fun56859_ip = 261;
                    continue _fun56859
                }
            case 209:
                var1 = _closure1_slot4;
                var1 = var1.TIER_2;
                if (!(var1 !== var5)) {
                    _fun56859_ip = 239;
                    continue _fun56859
                }
            case 223:
                var1 = _closure1_slot4;
                var2 = var1.LEGACY;
                var1 = null;
                if (!(var2 === var5)) {
                    _fun56859_ip = 303;
                    continue _fun56859
                }
            case 239:
                var5 = _closure1_slot0;
                var12 = _closure1_slot1;
                var2 = 8;
                var2 = var12[var2];
                var1 = var5.bind(var3)(var2);
                _fun56859_ip = 303;
                continue _fun56859;
            case 261:
                var5 = _closure1_slot0;
                var12 = _closure1_slot1;
                var2 = 7;
                var2 = var12[var2];
                var1 = var5.bind(var3)(var2);
                _fun56859_ip = 303;
                continue _fun56859;
            case 283:
                var5 = _closure1_slot0;
                var12 = _closure1_slot1;
                var2 = 6;
                var2 = var12[var2];
                var1 = var5.bind(var3)(var2);
            case 303:
                var7 = var1;
            case 306:
                var1 = var0 != var11;
                if (!var1) {
                    _fun56859_ip = 317;
                    continue _fun56859
                }
            case 313:
                var1 = var0 == var7;
            case 317:
                if (!var1) {
                    _fun56859_ip = 348;
                    continue _fun56859
                }
            case 320:
                var1 = {};
                var5 = var11.getIconURL;
                var2 = _closure1_slot7;
                var2 = var2[var9];
                var2 = var5.bind(var11)(var2);
                var1.uri = var2;
                var7 = var1;
            case 348:
                if (!(var0 == var7)) {
                    _fun56859_ip = 388;
                    continue _fun56859
                }
            case 352:
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 9;
                var0 = var2[var0];
                var7 = var1.bind(var3)(var0);
                var2 = var10.push;
                var1 = var6.placeholder;
                var1 = var2.bind(var10)(var1);
            case 388:
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = new Array(2);
                var5[0] = var10;
                var6 = var6.entityWrapper;
                var5[1] = var6;
                var0.style = var5;
                var6 = _closure1_slot5;
                var5 = _closure1_slot2;
                var4 = {};
                var8 = var8[var9];
                var4.style = var8;
                var4.source = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var0 = global;
    var5 = var0.Object;
    var3 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var5)(var2, var0, var1);
    var0 = 0;
    var3 = var7[var0];
    var1 = arg3;
    var0 = undefined;
    var1 = var1.bind(var0)(var3);
    var1 = 1;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var3 = var1.Image;
    var _closure1_slot2 = var3;
    var1 = var1.View;
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.PremiumSubscriptionSKUs;
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var7[var1];
    var1 = var6.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot5 = var1;
    var3 = {};
    var1 = 'size_24';
    var3.SIZE_24 = var1;
    var1 = 'small';
    var3.SMALL = var1;
    var1 = 'normal';
    var3.NORMAL = var1;
    var1 = 'large';
    var3.LARGE = var1;
    var _closure1_slot6 = var3;
    var1 = {};
    var9 = var3.SIZE_24;
    var5 = 24;
    var1[var9] = var5;
    var9 = var3.SMALL;
    var5 = 32;
    var1[var9] = var5;
    var9 = var3.NORMAL;
    var5 = 48;
    var1[var9] = var5;
    var9 = var3.LARGE;
    var5 = 80;
    var1[var9] = var5;
    var _closure1_slot7 = var1;
    var5 = 4;
    var5 = var7[var5];
    var10 = var6.bind(var0)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var11 = {
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var5.gameIcon = var11;
    var11 = {};
    var12 = var1.size_24;
    var11.width = var12;
    var12 = var1.size_24;
    var11.height = var12;
    var12 = 5;
    var14 = var7[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var11.borderRadius = var14;
    var5.size24 = var11;
    var11 = {};
    var14 = var1.small;
    var11.width = var14;
    var14 = var1.small;
    var11.height = var14;
    var14 = var7[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var11.borderRadius = var14;
    var5.small = var11;
    var11 = {};
    var14 = var1.normal;
    var11.width = var14;
    var14 = var1.normal;
    var11.height = var14;
    var14 = var7[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.lg;
    var11.borderRadius = var14;
    var5.normal = var11;
    var11 = {};
    var14 = var1.large;
    var11.width = var14;
    var14 = var1.large;
    var11.height = var14;
    var14 = var7[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var11.borderRadius = var14;
    var5.large = var11;
    var11 = {};
    var14 = var7[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.none;
    var11.borderRadius = var14;
    var14 = var7[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.ICON_MUTED;
    var11.tintColor = var14;
    var5.placeholder = var11;
    var11 = {
        'borderWidth': 1,
        'borderColor': null,
        'overflow': 'hidden'
    };
    var12 = var7[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var11.borderColor = var12;
    var5.entityWrapper = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot8 = var5;
    var4.Sizes = var3;
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'uikit-native/GameIcon.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.GameIconSizes = var3;
    var2.GameIconImageSize = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1623, 33, 1297, 671, 6898, 6899, 6900, 6901, 2]);