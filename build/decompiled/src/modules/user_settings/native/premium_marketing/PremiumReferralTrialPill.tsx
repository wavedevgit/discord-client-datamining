// modules/user_settings/native/premium_marketing/PremiumReferralTrialPill.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
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
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'display': 'flex',
        'alignItems': 'center',
        'flexDirection': 'row',
        'justifyContent': 'center'
    };
    var3.pillParent = var8;
    var8 = {
        'display': 'flex',
        'alignItems': 'center',
        'flexDirection': 'row',
        'justifyContent': 'center',
        'marginTop': 36,
        'marginBottom': 20
    };
    var3.pillParentExtraMargin = var8;
    var8 = {
        'backgroundColor': null,
        'borderRadius': null,
        'alignItems': 'center',
        'justifyContent': 'center',
        'margin': 8,
        'paddingHorizontal': 8,
        'overflow': 'visible'
    };
    var9 = 3;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.WHITE;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.round;
    var8.borderRadius = var9;
    var3.pillContainer = var8;
    var8 = {
        'color': '#AC46C3',
        'paddingHorizontal': 1,
        'paddingBottom': 2,
        'textAlign': 'center'
    };
    var3.text = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot4 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/premium_marketing/PremiumReferralTrialPill.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun60039: for (var _fun60039_ip = 0;;) switch (_fun60039_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.hasExtraMargin;
                var0 = _closure1_slot4;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot3;
                var1 = _closure1_slot2;
                var0 = {};
                if (var4) {
                    _fun60039_ip = 43;
                    continue _fun60039
                }
            case 35:
                var4 = var9.pillParent;
                _fun60039_ip = 49;
                continue _fun60039;
            case 43:
                var4 = var9.pillParentExtraMargin;
            case 49:
                var0.style = var4;
                var6 = _closure1_slot3;
                var5 = _closure1_slot2;
                var4 = {};
                var8 = var9.pillContainer;
                var4.style = var8;
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var7 = 4;
                var7 = var13[var7];
                var7 = var12.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {};
                var10 = 'text-xs/bold';
                var7.variant = var10;
                var9 = var9.text;
                var7.style = var9;
                var9 = 5;
                var10 = var13[var9];
                var10 = var12.bind(var3)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.Y1q7js;
                var10 = var10.bind(var11)(var9);
                var9 = var10.toUpperCase;
                var9 = var9.bind(var10)();
                var7.children = var9;
                var7 = var6.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.PremiumReferralTrialPill = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 33, 1297, 671, 3942, 1234, 2]);