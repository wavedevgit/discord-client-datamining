// modules/in_app_reports/native/components/InAppReportsUserPreview.tsx
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'alignSelf': 'stretch',
        'marginHorizontal': 16,
        'marginBottom': 16
    };
    var3.container = var8;
    var8 = {};
    var10 = 4;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.MOBILE_TEXT_HEADING_PRIMARY;
    var8.color = var9;
    var3.borderColor = var8;
    var9 = 8;
    var8 = {
        'lineHeight': 16,
        'marginBottom': 8
    };
    var3.title = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'flex-start',
        'minHeight': 40,
        'borderRadius': null,
        'borderWidth': 1,
        'padding': 12
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var8.borderRadius = var10;
    var3.userContainer = var8;
    var8 = {};
    var8.marginLeft = var9;
    var3.userProfileInfo = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_reports/native/components/InAppReportsUserPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92527: for (var _fun92527_ip = 0;;) switch (_fun92527_ip) {
            case 0:
                var0 = arg0;
                var12 = var0.user;
                var0 = _closure1_slot6;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 5;
                var0 = var15[var0];
                var4 = var14.bind(var3)(var0);
                var2 = var4.hexWithOpacity;
                var0 = var8.borderColor;
                var1 = var0.color;
                var0 = 0.08;
                var11 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var8.container;
                var0.style = var4;
                var10 = _closure1_slot4;
                var13 = 6;
                var4 = var15[var13];
                var4 = var14.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'text-xs/bold'
                };
                var6 = var8.title;
                var4.style = var6;
                var6 = 7;
                var7 = var15[var6];
                var7 = var14.bind(var3)(var7);
                var16 = var7.intl;
                var7 = var16.string;
                var6 = var15[var6];
                var6 = var14.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.Rsth7z;
                var7 = var7.bind(var16)(var6);
                var6 = var7.toUpperCase;
                var6 = var6.bind(var7)();
                var4.children = var6;
                var5 = var10.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var7 = var8.userContainer;
                var6 = new Array(2);
                var6[0] = var7;
                var7 = {};
                var7.borderColor = var11;
                var6[1] = var7;
                var5.style = var6;
                var7 = _closure1_slot1;
                var11 = 8;
                var6 = var15[var11];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.AvatarSizes;
                var11 = var11.LARGE_48;
                var6.size = var11;
                var6.user = var12;
                var6.guildId = var3;
                var7 = var10.bind(var3)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var7 = {};
                var8 = var8.userProfileInfo;
                var7.style = var8;
                var10 = var12.globalName;
                var8 = null;
                var10 = var8 != var10;
                if (!var10) {
                    _fun92527_ip = 395;
                    continue _fun92527
                }
            case 339:
                var14 = _closure1_slot4;
                var11 = _closure1_slot0;
                var8 = _closure1_slot2;
                var8 = var8[var13];
                var8 = var11.bind(var3)(var8);
                var11 = var8.Text;
                var8 = {
                    'variant': 'text-md/semibold',
                    'color': 'mobile-text-heading-primary'
                };
                var15 = var12.globalName;
                var8.children = var15;
                var10 = var14.bind(var3)(var11, var8);
            case 395:
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot4;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var13];
                var9 = var10.bind(var3)(var9);
                var10 = var9.Text;
                var9 = {
                    'color': 'text-default',
                    'variant': 'text-sm/normal'
                };
                var12 = var12.username;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var7.children = var8;
                var7 = var2.bind(var3)(var1, var7);
                var6[1] = var7;
                var5.children = var6;
                var5 = var2.bind(var3)(var1, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3199, 3900, 1234, 5414, 2]);