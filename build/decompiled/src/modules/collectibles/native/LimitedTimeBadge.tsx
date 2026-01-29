// modules/collectibles/native/LimitedTimeBadge.tsx
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'top': 6,
        'right': 4,
        'zIndex': 999,
        'borderRadius': null,
        'paddingHorizontal': 8,
        'paddingVertical': 2
    };
    var9 = 6;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var8.borderRadius = var11;
    var3.root = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.WHITE;
    var8.backgroundColor = var11;
    var3.backgroundDarkMode = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_MOD_STRONG;
    var8.backgroundColor = var9;
    var3.backgroundLightMode = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/LimitedTimeBadge.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun87485: for (var _fun87485_ip = 0;;) switch (_fun87485_ip) {
            case 0:
                var1 = arg0;
                var5 = var1.unpublishedAt;
                var1 = _closure1_slot7;
                var3 = undefined;
                var6 = var1.bind(var3)();
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 8;
                var7 = var4[var1];
                var11 = var2.bind(var3)(var7);
                var10 = var11.useStateFromStores;
                var7 = _closure1_slot5;
                var9 = new Array(1);
                var9[0] = var7;
                var7 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isThemeDark;
                    var0 = _closure1_slot5;
                    var0 = var0.theme;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var10 = var10.bind(var11)(var9, var7);
                var1 = var4[var1];
                var7 = var2.bind(var3)(var1);
                var2 = var7.useStateFromStores;
                var9 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var9;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot4;
                    var0 = var0.locale;
                    return var0;
                };
                var2 = var2.bind(var7)(var1, var0);
                var1 = ['en-US', 'en-GB'];
                var0 = var1.includes;
                var0 = var0.bind(var1)(var2);
                var2 = _closure1_slot1;
                var1 = 10;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var16 = 1000;
                var14 = true;
                var18 = undefined;
                var17 = var5;
                var15 = undefined;
                var1 = var18[var4](var17, var16, var15, var14, var13);
                var12 = var1.days;
                var9 = var1.hours;
                if (var0) {
                    _fun87485_ip = 380;
                    continue _fun87485
                }
            case 186:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var11 = 7;
                var1 = var0[var11];
                var1 = var4.bind(var3)(var1);
                var5 = var1.intl;
                var2 = var5.string;
                var1 = var0[var11];
                var1 = var4.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1.QJyuxY;
                var1 = var2.bind(var5)(var1);
                var7 = var12 + var1;
                var1 = var0[var11];
                var1 = var4.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var0[var11];
                var0 = var4.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0["1LyF1h"];
                var0 = var1.bind(var2)(var0);
                var0 = var9 + var0;
                var1 = 1;
                if (!(!(var12 > var1))) {
                    _fun87485_ip = 375;
                    continue _fun87485
                }
            case 300:
                if (!(var12 <= var1)) {
                    _fun87485_ip = 310;
                    continue _fun87485
                }
            case 304:
                var1 = 0;
                if (!(!(var9 > var1))) {
                    _fun87485_ip = 372;
                    continue _fun87485
                }
            case 310:
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var2 = var1[var11];
                var2 = var5.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.string;
                var1 = var1[var11];
                var1 = var5.bind(var3)(var1);
                var1 = var1.t;
                var1 = var1["1LyF1h"];
                var2 = var2.bind(var4)(var1);
                var1 = '0';
                var0 = var1 + var2;
            case 372:
                var7 = var0;
            case 375:
                _fun87485_ip = 600;
                continue _fun87485;
            case 380:
                var0 = 1;
                if (!(!(var12 > var0))) {
                    _fun87485_ip = 532;
                    continue _fun87485
                }
            case 390:
                if (!(var12 <= var0)) {
                    _fun87485_ip = 400;
                    continue _fun87485
                }
            case 394:
                var0 = 0;
                if (!(!(var9 > var0))) {
                    _fun87485_ip = 467;
                    continue _fun87485
                }
            case 400:
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 7;
                var2 = var5[var0];
                var2 = var1.bind(var3)(var2);
                var4 = var2.intl;
                var2 = var4.formatToPlainString;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.t;
                var1 = var0.WJieZ2;
                var0 = {};
                var5 = 0;
                var0.hours = var5;
                var0 = var2.bind(var4)(var1, var0);
                _fun87485_ip = 530;
                continue _fun87485;
            case 467:
                var2 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 7;
                var4 = var11[var1];
                var4 = var2.bind(var3)(var4);
                var5 = var4.intl;
                var4 = var5.formatToPlainString;
                var1 = var11[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.t;
                var2 = var1.WJieZ2;
                var1 = {};
                var1.hours = var9;
                var0 = var4.bind(var5)(var2, var1);
            case 530:
                _fun87485_ip = 597;
                continue _fun87485;
            case 532:
                var2 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 7;
                var4 = var9[var1];
                var4 = var2.bind(var3)(var4);
                var5 = var4.intl;
                var4 = var5.formatToPlainString;
                var1 = var9[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.t;
                var2 = var1.DkxLY0;
                var1 = {};
                var1.days = var12;
                var0 = var4.bind(var5)(var2, var1);
            case 597:
                var7 = var0;
            case 600:
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = var6.root;
                var4 = new Array(2);
                var4[0] = var5;
                if (var10) {
                    _fun87485_ip = 635;
                    continue _fun87485
                }
            case 627:
                var5 = var6.backgroundLightMode;
                _fun87485_ip = 641;
                continue _fun87485;
            case 635:
                var5 = var6.backgroundDarkMode;
            case 641:
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot6;
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 11;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {};
                var9 = 'white';
                if (!var10) {
                    _fun87485_ip = 691;
                    continue _fun87485
                }
            case 687:
                var9 = 'black';
            case 691:
                var4.color = var9;
                var9 = 'text-xs/bold';
                var4.variant = var9;
                var9 = _closure1_slot0;
                var13 = _closure1_slot2;
                var8 = 7;
                var10 = var13[var8];
                var10 = var9.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.formatToPlainString;
                var8 = var13[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.t;
                var9 = var8.TlZULM;
                var8 = {};
                var8.daysLeft = var12;
                var8 = var10.bind(var11)(var9, var8);
                var4.accessibilityLabel = var8;
                var8 = false;
                var4.allowFontScaling = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1676, 3155, 33, 1297, 671, 1234, 566, 3165, 7019, 3895, 2]);