// modules/app_launcher/native/screens/home/NoPermsState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var3 = var3.Image;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'paddingVertical': 16,
        'paddingHorizontal': 24,
        'gap': 12,
        'backgroundColor': null,
        'borderRadius': null,
        'alignItems': 'center',
        'justifyContent': 'flex-start',
        'display': 'flex',
        'flexDirection': 'row'
    };
    var10 = 4;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.lg;
    var8.borderRadius = var10;
    var3.container = var8;
    var8 = {};
    var8.flexShrink = var9;
    var3.textContainer = var8;
    var8 = {
        'width': 64,
        'height': 64
    };
    var3.image = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/screens/home/NoPermsState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: EmptyState, environment: var1
        _fun108169: for (var _fun108169_ip = 0;;) switch (_fun108169_ip) {
            case 0:
                var0 = _closure1_slot7;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 5;
                var0 = var6[var0];
                var5 = var1.bind(var3)(var0);
                var2 = var5.isThemeLight;
                var1 = _closure1_slot1;
                var0 = 6;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var0 = var2.bind(var5)(var0);
                var5 = _closure1_slot2;
                if (var0) {
                    _fun108169_ip = 80;
                    continue _fun108169
                }
            case 71:
                var0 = 8;
                var0 = var5[var0];
                _fun108169_ip = 87;
                continue _fun108169;
            case 80:
                var2 = 7;
                var0 = var5[var2];
            case 87:
                var6 = var1.bind(var3)(var0);
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 9;
                var0 = var12[var0];
                var2 = var11.bind(var3)(var0);
                var1 = var2.useLogAppLauncherEmptyStateView;
                var0 = 10;
                var0 = var12[var0];
                var0 = var11.bind(var3)(var0);
                var0 = var0.AppLauncherEmptyStateType;
                var0 = var0.HOME_NO_PERMISSIONS;
                var0 = var1.bind(var2)(var0);
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = var8.container;
                var0.style = var5;
                var7 = _closure1_slot5;
                var5 = _closure1_slot4;
                var4 = {};
                var9 = var8.image;
                var4.style = var9;
                var9 = 'contain';
                var4.resizeMode = var9;
                var4.source = var6;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = 11;
                var5 = var12[var5];
                var5 = var11.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-muted'
                };
                var8 = var8.textContainer;
                var5.style = var8;
                var8 = 12;
                var9 = var12[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var12[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.uDnXXj;
                var8 = var9.bind(var10)(var8);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3165, 3205, 13918, 13919, 13860, 7694, 3895, 1234, 2]);