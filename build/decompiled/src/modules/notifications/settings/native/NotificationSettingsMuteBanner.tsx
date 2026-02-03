// modules/notifications/settings/native/NotificationSettingsMuteBanner.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var9 = {
        'padding': 16,
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var10 = 4;
    var3 = var5[var10];
    var3 = var11.bind(var0)(var3);
    var3 = var3.radii;
    var12 = var3.lg;
    var3 = 8;
    var12 = var12 + var3;
    var9.borderRadius = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BRAND;
    var9.backgroundColor = var10;
    var6.card = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot5 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/notifications/settings/native/NotificationSettingsMuteBanner.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var8 = arg0;
        var0 = _closure1_slot5;
        var3 = undefined;
        var6 = var0.bind(var3)();
        var2 = _closure1_slot4;
        var1 = _closure1_slot2;
        var0 = {};
        var7 = var8.style;
        var4 = new Array(2);
        var4[0] = var7;
        var6 = var6.card;
        var4[1] = var6;
        var0.style = var4;
        var4 = {};
        var6 = {
            'flex': 1,
            'marginRight': 8
        };
        var4.style = var6;
        var7 = _closure1_slot3;
        var12 = _closure1_slot0;
        var13 = _closure1_slot1;
        var6 = 5;
        var5 = var13[var6];
        var5 = var12.bind(var3)(var5);
        var9 = var5.Text;
        var5 = {
            'variant': 'text-md/semibold',
            'color': 'white'
        };
        var10 = var8.title;
        var5.children = var10;
        var9 = var7.bind(var3)(var9, var5);
        var5 = new Array(2);
        var5[0] = var9;
        var6 = var13[var6];
        var6 = var12.bind(var3)(var6);
        var9 = var6.Text;
        var6 = {
            'variant': 'text-xs/medium',
            'color': 'white'
        };
        var10 = var8.subtitle;
        var6.children = var10;
        var6 = var7.bind(var3)(var9, var6);
        var5[1] = var6;
        var4.children = var5;
        var5 = var2.bind(var3)(var1, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = 6;
        var5 = var13[var5];
        var5 = var12.bind(var3)(var5);
        var6 = var5.Button;
        var5 = {};
        var9 = 7;
        var10 = var13[var9];
        var10 = var12.bind(var3)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.YqAjXy;
        var9 = var10.bind(var11)(var9);
        var5.text = var9;
        var8 = var8.onPressUnmute;
        var5.onPress = var8;
        var8 = 'primary-overlay';
        var5.variant = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.NotificationSettingsMuteBanner = var3;
    var1 = function arg0() {
        _fun69969: for (var _fun69969_ip = 0;;) switch (_fun69969_ip) {
            case 0:
                var7 = arg0;
                var1 = null;
                var2 = var1 == var7;
                var5 = undefined;
                var0 = undefined;
                if (var2) {
                    _fun69969_ip = 22;
                    continue _fun69969
                }
            case 16:
                var0 = var7.end_time;
            case 22:
                if (!(var1 != var0)) {
                    _fun69969_ip = 179;
                    continue _fun69969
                }
            case 29:
                var6 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 7;
                var0 = var9[var4];
                var0 = var6.bind(var5)(var0);
                var3 = var0.intl;
                var2 = var3.formatToPlainString;
                var0 = var9[var4];
                var0 = var6.bind(var5)(var0);
                var0 = var0.t;
                var1 = var0.C7m4oh;
                var0 = {};
                var8 = global;
                var10 = var8.Date;
                var12 = var7.end_time;
                var8 = var10.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var10
                    }
                });
                var13 = var8;
                var7 = new var13[var10](var12, var11);
                var8 = var7 instanceof Object ? var7 : var8;
                var7 = var8.toLocaleString;
                var4 = var9[var4];
                var4 = var6.bind(var5)(var4);
                var4 = var4.intl;
                var6 = var4.currentLocale;
                var4 = {
                    'month': 'numeric',
                    'day': 'numeric',
                    'hour': 'numeric',
                    'minute': '2-digit'
                };
                var4 = var7.bind(var8)(var6, var4);
                var0.endTime = var4;
                var0 = var2.bind(var3)(var1, var0);
                _fun69969_ip = 239;
                continue _fun69969;
            case 179:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 7;
                var2 = var6[var1];
                var2 = var4.bind(var5)(var2);
                var3 = var2.intl;
                var2 = var3.string;
                var1 = var6[var1];
                var1 = var4.bind(var5)(var1);
                var1 = var1.t;
                var1 = var1["tFqP/P"];
                var0 = var2.bind(var3)(var1);
            case 239:
                return var0;
        }
    };
    var2.getMuteBannerSubtitleFromConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3932, 4075, 1234, 2]);