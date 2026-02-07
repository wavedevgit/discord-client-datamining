// modules/guild_role_subscriptions/native/components/UnavailableNotice.tsx
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
    var9 = 1;
    var3 = var5[var9];
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
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {};
    var3.flex = var9;
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOW;
    var3.backgroundColor = var11;
    var6.container = var3;
    var3 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.MOBILE_TEXT_HEADING_PRIMARY;
    var3.color = var9;
    var6.brightTitle = var3;
    var3 = {};
    var9 = 'center';
    var3.justifyContent = var9;
    var6.unavailableContainer = var3;
    var3 = {
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var6.unavailableInfo = var3;
    var3 = 8;
    var9 = {
        'marginTop': 8,
        'marginHorizontal': 16,
        'textAlign': 'center'
    };
    var6.unavailableDescription = var9;
    var9 = {
        'alignSelf': 'center',
        'marginTop': 16,
        'paddingHorizontal': 24,
        'textAlign': 'center'
    };
    var6.joinCtaTitle = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot6 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/components/UnavailableNotice.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun105262: for (var _fun105262_ip = 0;;) switch (_fun105262_ip) {
            case 0:
                var0 = arg0;
                var13 = var0.title;
                var10 = var0.description;
                var15 = var0.brightTitle;
                var0 = _closure1_slot6;
                var3 = undefined;
                var11 = var0.bind(var3)();
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var0 = {};
                var5 = var11.container;
                var4 = new Array(2);
                var4[0] = var5;
                var5 = var11.unavailableContainer;
                var4[1] = var5;
                var0.style = var4;
                var5 = _closure1_slot5;
                var4 = {};
                var6 = var11.unavailableInfo;
                var4.style = var6;
                var14 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 5;
                var6 = var8[var6];
                var9 = var14.bind(var3)(var6);
                var6 = {};
                var12 = 6;
                var12 = var8[var12];
                var12 = var14.bind(var3)(var12);
                var6.source = var12;
                var9 = var2.bind(var3)(var9, var6);
                var6 = new Array(3);
                var6[0] = var9;
                var9 = _closure1_slot0;
                var12 = 7;
                var8 = var8[var12];
                var8 = var9.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'heading-lg/extrabold',
                    'color': 'text-default'
                };
                var16 = var11.joinCtaTitle;
                var14 = new Array(2);
                var14[0] = var16;
                if (!var15) {
                    _fun105262_ip = 195;
                    continue _fun105262
                }
            case 189:
                var15 = var11.brightTitle;
            case 195:
                var14[1] = var15;
                var8.style = var14;
                var8.children = var13;
                var8 = var2.bind(var3)(var9, var8);
                var6[1] = var8;
                var9 = _closure1_slot4;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var12];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var11 = var11.unavailableDescription;
                var7.style = var11;
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var6[2] = var7;
                var4.children = var6;
                var4 = var5.bind(var3)(var1, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 4704, 13488, 3942, 2]);