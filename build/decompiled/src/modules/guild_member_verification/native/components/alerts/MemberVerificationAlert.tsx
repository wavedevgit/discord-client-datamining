// modules/guild_member_verification/native/components/alerts/MemberVerificationAlert.tsx
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
        'marginLeft': 'auto',
        'marginRight': 'auto',
        'backgroundColor': null,
        'borderRadius': null,
        'padding': 12,
        'marginTop': 8,
        'marginBottom': 8
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_MUTED;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.round;
    var8.borderRadius = var9;
    var3.headerImage = var8;
    var8 = {
        'marginTop': 8,
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var3.header = var8;
    var8 = {
        'lineHeight': 18,
        'marginBottom': 8,
        'textAlign': 'center'
    };
    var3.subtitle = var8;
    var8 = {
        'marginTop': 16,
        'marginBottom': 8,
        'gap': 12
    };
    var3.buttons = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/native/components/alerts/MemberVerificationAlert.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun60074: for (var _fun60074_ip = 0;;) switch (_fun60074_ip) {
            case 0:
                var2 = arg0;
                var14 = var2.header;
                var15 = var2.icon;
                var12 = var2.subtitle;
                var8 = var2.buttons;
                var1 = {
                    'header': 0,
                    'icon': 0,
                    'subtitle': 0,
                    'buttons': 0
                };
                var6 = null;
                var19 = var1;
                var18 = null;
                var0 = silentSetPrototypeOf(var19, var18);
                var19 = {};
                var18 = var2;
                var17 = var1;
                var18 = copyDataProperties(var19, var18, var17);
                var0 = _closure1_slot6;
                var3 = undefined;
                var9 = var0.bind(var3)();
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 5;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var19 = var0;
                var5 = copyDataProperties(var19, var18);
                var7 = true;
                var5 = 'noDefaultButtons';
                var0[var5] = var7;
                var5 = var6 != var15;
                var7 = null;
                if (!var5) {
                    _fun60074_ip = 174;
                    continue _fun60074
                }
            case 128:
                var11 = _closure1_slot4;
                var10 = _closure1_slot3;
                var5 = {};
                var13 = var9.headerImage;
                var5.style = var13;
                var13 = {};
                var16 = 'lg';
                var13.size = var16;
                var13 = var11.bind(var3)(var15, var13);
                var5.children = var13;
                var7 = var11.bind(var3)(var10, var5);
            case 174:
                var5 = new Array(4);
                var5[0] = var7;
                var11 = _closure1_slot4;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var13 = 6;
                var7 = var7[var13];
                var7 = var10.bind(var3)(var7);
                var10 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'heading-lg/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var15 = var9.header;
                var7.style = var15;
                var7.children = var14;
                var7 = var11.bind(var3)(var10, var7);
                var5[1] = var7;
                var7 = var6 != var12;
                var6 = null;
                if (!var7) {
                    _fun60074_ip = 321;
                    continue _fun60074
                }
            case 259:
                var11 = _closure1_slot4;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var13];
                var7 = var10.bind(var3)(var7);
                var10 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var13 = var9.subtitle;
                var7.style = var13;
                var7.children = var12;
                var6 = var11.bind(var3)(var10, var7);
            case 321:
                var5[2] = var6;
                var7 = _closure1_slot4;
                var6 = _closure1_slot3;
                var4 = {};
                var9 = var9.buttons;
                var4.style = var9;
                var4.children = var8;
                var4 = var7.bind(var3)(var6, var4);
                var5[3] = var4;
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3937, 3941, 2]);