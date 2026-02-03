// modules/virtual_currency/native/OrbCheckoutAmountTag.tsx
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
    var3 = var3.View;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot3 = var6;
    var3 = var3.jsxs;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var9 = 3;
    var10 = var5[var9];
    var9 = metroImportDefault;
    var9 = var9.bind(var0)(var10);
    var9 = var9.spacing;
    var9 = var9.PX_4;
    var8.gap = var9;
    var3.orbAmountTag = var8;
    var8 = {
        'width': 14,
        'height': 14
    };
    var3.orbsIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/virtual_currency/native/OrbCheckoutAmountTag.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun86991: for (var _fun86991_ip = 0;;) switch (_fun86991_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.orbAmount;
                var0 = _closure1_slot5;
                var3 = undefined;
                var10 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = _closure1_slot2;
                var0 = {};
                var4 = var10.orbAmountTag;
                var0.style = var4;
                var7 = _closure1_slot3;
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 4;
                var4 = var8[var4];
                var4 = var6.bind(var3)(var4);
                var5 = var4.OrbsIcon;
                var4 = {
                    'size': 'custom',
                    'color': 'icon-strong'
                };
                var10 = var10.orbsIcon;
                var4.style = var10;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 5;
                var5 = var8[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {};
                var8 = 'text-md/semibold';
                var5.variant = var8;
                var8 = null;
                if (!(var8 != var9)) {
                    _fun86991_ip = 208;
                    continue _fun86991
                }
            case 143:
                var12 = _closure1_slot0;
                var15 = _closure1_slot1;
                var10 = 6;
                var13 = var15[var10];
                var13 = var12.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.formatToPlainString;
                var10 = var15[var10];
                var10 = var12.bind(var3)(var10);
                var10 = var10.t;
                var12 = var10.W4DfeF;
                var10 = {};
                var10.orbAmount = var9;
                var10 = var13.bind(var14)(var12, var10);
                _fun86991_ip = 263;
                continue _fun86991;
            case 208:
                var14 = _closure1_slot0;
                var15 = _closure1_slot1;
                var11 = 6;
                var12 = var15[var11];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.pfChQr;
                var10 = var12.bind(var13)(var11);
            case 263:
                var5.accessibilityLabel = var10;
                var10 = var8 == var9;
                var8 = '--';
                if (var10) {
                    _fun86991_ip = 283;
                    continue _fun86991
                }
            case 280:
                var8 = var9;
            case 283:
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 33, 1297, 671, 9548, 3932, 1234, 2]);