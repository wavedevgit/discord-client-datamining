// modules/guild_role_subscriptions/native/components/ShinyButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var10;
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
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 3;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.CONTROL_PRIMARY_BACKGROUND_DEFAULT;
    var8.backgroundColor = var11;
    var3.container = var8;
    var8 = {};
    var11 = 4;
    var8.marginRight = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.WHITE;
    var8.tintColor = var9;
    var3.sparkleIcon = var8;
    var8 = {};
    var9 = 0.5;
    var8.opacity = var9;
    var3.disabled = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot3 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/ShinyButton.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ShinyButton, environment: var1
        var2 = arg0;
        var9 = var2.style;
        var7 = var2.loading;
        var _closure2_slot0 = var7;
        var6 = var2.disabled;
        var _closure2_slot1 = var6;
        var1 = {
            'style': 0,
            'loading': 0,
            'disabled': 0
        };
        var12 = null;
        var13 = var1;
        var0 = silentSetPrototypeOf(var13, var12);
        var13 = {};
        var12 = var2;
        var11 = var1;
        var12 = copyDataProperties(var13, var12, var11);
        var1 = _closure1_slot3;
        var3 = undefined;
        var8 = var1.bind(var3)();
        var _closure2_slot2 = var8;
        var2 = _closure1_slot2;
        var1 = _closure1_slot0;
        var10 = _closure1_slot1;
        var0 = 4;
        var0 = var10[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var10 = var8.container;
        var8 = new Array(2);
        var8[0] = var10;
        var8[1] = var9;
        var0.style = var8;
        var0.loading = var7;
        var0.disabled = var6;
        var5 = function() { // Original name: renderIcon, environment: var5
            _fun73877: for (var _fun73877_ip = 0;;) switch (_fun73877_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = null;
                    if (var1) {
                        _fun73877_ip = 132;
                        continue _fun73877
                    }
                case 12:
                    var4 = _closure1_slot2;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 5;
                    var1 = var8[var5];
                    var3 = undefined;
                    var2 = var6.bind(var3)(var1);
                    var1 = {};
                    var5 = var8[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.Sizes;
                    var5 = var5.REFRESH_SMALL_16;
                    var1.size = var5;
                    var5 = 6;
                    var5 = var8[var5];
                    var5 = var6.bind(var3)(var5);
                    var1.source = var5;
                    var5 = _closure2_slot2;
                    var6 = var5.sparkleIcon;
                    var5 = new Array(2);
                    var5[0] = var6;
                    var6 = _closure2_slot1;
                    if (!var6) {
                        _fun73877_ip = 118;
                        continue _fun73877
                    }
                case 109:
                    var7 = _closure2_slot2;
                    var6 = var7.disabled;
                case 118:
                    var5[1] = var6;
                    var1.style = var5;
                    var0 = var4.bind(var3)(var2, var1);
                case 132:
                    return var0;
            }
        };
        var0.renderIcon = var5;
        var13 = var0;
        var4 = copyDataProperties(var13, var12);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1297, 671, 4836, 4045, 9250, 2]);