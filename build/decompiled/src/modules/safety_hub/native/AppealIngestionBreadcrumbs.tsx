// modules/safety_hub/native/AppealIngestionBreadcrumbs.tsx
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
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 0,
        'alignSelf': 'stretch',
        'marginBottom': 8
    };
    var3.container = var8;
    var8 = {
        'lineHeight': 16,
        'marginBottom': 8
    };
    var3.title = var8;
    var8 = {
        'flexDirection': 'row',
        'justifyContent': 'flex-start',
        'marginBottom': 8,
        'marginEnd': 32,
        'overflow': 'visible'
    };
    var3.breadCrumbItemContainer = var8;
    var8 = {
        'marginStart': 2,
        'marginTop': 8,
        'width': 4,
        'height': 4,
        'borderRadius': 2
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BRAND;
    var8.backgroundColor = var11;
    var3.breadCrumbDot = var8;
    var8 = {
        'position': 'absolute',
        'width': 2,
        'top': 10,
        'bottom': 4294967284,
        'left': 3
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var9;
    var3.breadCrumbBar = var8;
    var8 = {
        'marginStart': 8,
        'lineHeight': 20
    };
    var3.breadCrumbText = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_hub/native/AppealIngestionBreadcrumbs.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: AppealIngestionBreadcrumbs, environment: var1
        _fun79487: for (var _fun79487_ip = 0;;) switch (_fun79487_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.reasons;
                var0 = _closure1_slot5;
                var4 = undefined;
                var10 = var0.bind(var4)();
                var _closure2_slot0 = var10;
                var2 = var8.length;
                var1 = 0;
                var0 = null;
                if (!(var1 !== var2)) {
                    _fun79487_ip = 215;
                    continue _fun79487
                }
            case 44:
                var3 = _closure1_slot4;
                var2 = _closure1_slot2;
                var1 = {};
                var7 = var10.container;
                var1.style = var7;
                var9 = _closure1_slot3;
                var13 = _closure1_slot0;
                var14 = _closure1_slot1;
                var5 = 5;
                var5 = var14[var5];
                var5 = var13.bind(var4)(var5);
                var7 = var5.Text;
                var5 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'text-xs/bold'
                };
                var10 = var10.title;
                var5.style = var10;
                var10 = 6;
                var11 = var14[var10];
                var11 = var13.bind(var4)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var14[var10];
                var10 = var13.bind(var4)(var10);
                var10 = var10.t;
                var10 = var10.eQg0Ck;
                var10 = var11.bind(var12)(var10);
                var5.children = var10;
                var7 = var9.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var7 = var8.map;
                var6 = function(arg0, arg1) { // Environment: var6
                    var8 = arg0;
                    var4 = _closure1_slot4;
                    var3 = _closure1_slot2;
                    var2 = {};
                    var9 = _closure2_slot0;
                    var0 = var9.breadCrumbItemContainer;
                    var2.style = var0;
                    var7 = _closure1_slot3;
                    var0 = {};
                    var1 = var9.breadCrumbBar;
                    var0.style = var1;
                    var1 = undefined;
                    var6 = var7.bind(var1)(var3, var0);
                    var0 = new Array(3);
                    var0[0] = var6;
                    var6 = {};
                    var10 = var9.breadCrumbDot;
                    var6.style = var10;
                    var6 = var7.bind(var1)(var3, var6);
                    var0[1] = var6;
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var5 = 5;
                    var5 = var10[var5];
                    var5 = var6.bind(var1)(var5);
                    var6 = var5.Text;
                    var5 = {
                        'lineClamp': 2,
                        'ellipsizeMode': 'tail',
                        'style': null,
                        'variant': 'text-md/medium'
                    };
                    var9 = var9.breadCrumbText;
                    var5.style = var9;
                    var5.children = var8;
                    var5 = var7.bind(var1)(var6, var5);
                    var0[2] = var5;
                    var2.children = var0;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var7 = var0.concat;
                    var6 = '';
                    var5 = '+';
                    var0 = arg1;
                    var0 = var7.bind(var6)(var8, var5, var0);
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var6 = var7.bind(var8)(var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 215:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3895, 1234, 2]);