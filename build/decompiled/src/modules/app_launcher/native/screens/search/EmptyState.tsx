// modules/app_launcher/native/screens/search/EmptyState.tsx
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
        'marginTop': 48,
        'position': 'relative',
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var3.container = var8;
    var8 = {
        'justifyContent': 'center',
        'alignItems': 'center',
        'height': '100%',
        'width': '100%',
        'position': 'absolute'
    };
    var3.textContainer = var8;
    var8 = {
        'marginTop': 16,
        'textAlign': 'center'
    };
    var3.text = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_launcher/native/screens/search/EmptyState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: EmptyState, environment: var1
        _fun108415: for (var _fun108415_ip = 0;;) switch (_fun108415_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.query;
                var9 = var0.showsGenericMessage;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun108415_ip = 23;
                    continue _fun108415
                }
            case 21:
                var9 = false;
            case 23:
                var0 = _closure1_slot7;
                var11 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 4;
                var0 = var6[var0];
                var5 = var1.bind(var3)(var0);
                var2 = var5.isThemeLight;
                var1 = _closure1_slot1;
                var0 = 5;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var0 = var2.bind(var5)(var0);
                var5 = _closure1_slot2;
                if (var0) {
                    _fun108415_ip = 101;
                    continue _fun108415
                }
            case 92:
                var0 = 7;
                var0 = var5[var0];
                _fun108415_ip = 108;
                continue _fun108415;
            case 101:
                var2 = 6;
                var0 = var5[var2];
            case 108:
                var7 = var1.bind(var3)(var0);
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 8;
                var0 = var12[var0];
                var2 = var8.bind(var3)(var0);
                var1 = var2.useLogAppLauncherEmptyStateView;
                var0 = 9;
                var0 = var12[var0];
                var0 = var8.bind(var3)(var0);
                var0 = var0.AppLauncherEmptyStateType;
                var0 = var0.SEARCH_EMPTY;
                var0 = var1.bind(var2)(var0, var4);
                var2 = _closure1_slot6;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var11.container;
                var0.style = var4;
                var6 = _closure1_slot5;
                var5 = _closure1_slot4;
                var4 = {};
                var13 = 'contain';
                var4.resizeMode = var13;
                var4.source = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var7 = var11.textContainer;
                var5.style = var7;
                var7 = 10;
                var7 = var12[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var11 = var11.text;
                var7.style = var11;
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var10 = 11;
                var11 = var14[var10];
                var11 = var13.bind(var3)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var3)(var10);
                var10 = var10.t;
                if (var9) {
                    _fun108415_ip = 340;
                    continue _fun108415
                }
            case 325:
                var9 = var10.LSNOYf;
                var9 = var11.bind(var12)(var9);
                _fun108415_ip = 353;
                continue _fun108415;
            case 340:
                var10 = var10.aOkFv8;
                var9 = var11.bind(var12)(var10);
            case 353:
                var7.children = var9;
                var7 = var6.bind(var3)(var8, var7);
                var5.children = var7;
                var5 = var6.bind(var3)(var1, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 3165, 3205, 13938, 13939, 13886, 7697, 3901, 1234, 2]);