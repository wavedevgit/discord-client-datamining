// modules/guild_role_subscriptions/native/guild_settings/welcome/HowItWorksSection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var0 = arg0;
        var13 = var0.cardNumber;
        var17 = var0.iconSource;
        var8 = var0.description;
        var0 = _closure1_slot6;
        var3 = undefined;
        var9 = var0.bind(var3)();
        var2 = _closure1_slot5;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = var9.card;
        var0.style = var4;
        var4 = true;
        var0.accessible = var4;
        var4 = global;
        var4 = var4.HermesInternal;
        var6 = var4.concat;
        var5 = '';
        var4 = ' - ';
        var4 = var6.bind(var5)(var13, var4, var8);
        var0.accessibilityLabel = var4;
        var12 = _closure1_slot4;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var5 = 5;
        var4 = var10[var5];
        var4 = var6.bind(var3)(var4);
        var11 = var4.Text;
        var4 = {
            'style': null,
            'variant': 'text-xs/bold',
            'color': 'always-white'
        };
        var14 = var9.cardNumber;
        var4.style = var14;
        var4.children = var13;
        var11 = var12.bind(var3)(var11, var4);
        var4 = new Array(3);
        var4[0] = var11;
        var13 = _closure1_slot4;
        var12 = _closure1_slot3;
        var11 = {};
        var14 = var9.container;
        var11.style = var14;
        var16 = _closure1_slot4;
        var15 = _closure1_slot1;
        var14 = 6;
        var14 = var10[var14];
        var15 = var15.bind(var3)(var14);
        var14 = {};
        var18 = var9.howItWorksCardIcon;
        var14.style = var18;
        var14.source = var17;
        var17 = 'contain';
        var14.resizeMode = var17;
        var14 = var16.bind(var3)(var15, var14);
        var11.children = var14;
        var11 = var13.bind(var3)(var12, var11);
        var4[1] = var11;
        var7 = _closure1_slot4;
        var5 = var10[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.Text;
        var5 = {
            'style': null,
            'variant': 'text-sm/normal',
            'color': 'mobile-text-heading-primary'
        };
        var9 = var9.howItWorksCardDescription;
        var5.style = var9;
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot7 = var0;
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
    var3 = arg3;
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
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var3.container = var8;
    var8 = {
        'flex': 1,
        'flexDirection': 'row'
    };
    var3.horizontalContainer = var8;
    var8 = {
        'flex': 1,
        'marginVertical': 6,
        'backgroundColor': null,
        'alignItems': 'center',
        'borderRadius': null,
        'overflow': 'hidden'
    };
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var11;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var8.borderRadius = var11;
    var3.card = var8;
    var8 = {
        'width': 18,
        'height': 18,
        'position': 'absolute',
        'top': 9,
        'start': 9,
        'textAlign': 'center',
        'backgroundColor': null,
        'borderRadius': 9,
        'overflow': 'hidden'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BRAND;
    var8.backgroundColor = var11;
    var3.cardNumber = var8;
    var8 = {
        'width': '100%',
        'paddingHorizontal': 18,
        'paddingVertical': 8,
        'textAlign': 'center',
        'backgroundColor': null,
        'borderBottomStartRadius': 8,
        'borderBottomEndRadius': 8,
        'overflow': 'hidden'
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_MOD_NORMAL;
    var8.backgroundColor = var9;
    var3.howItWorksCardDescription = var8;
    var8 = {};
    var9 = 24;
    var8.marginVertical = var9;
    var3.howItWorksCardIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/guild_settings/welcome/HowItWorksSection.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = _closure1_slot6;
        var3 = undefined;
        var7 = var0.bind(var3)();
        var2 = _closure1_slot5;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = var7.container;
        var0.style = var4;
        var11 = _closure1_slot5;
        var6 = _closure1_slot3;
        var4 = {};
        var7 = var7.horizontalContainer;
        var4.style = var7;
        var14 = _closure1_slot4;
        var7 = _closure1_slot7;
        var12 = {};
        var8 = 1;
        var12.cardNumber = var8;
        var13 = _closure1_slot0;
        var10 = _closure1_slot2;
        var8 = 7;
        var9 = var10[var8];
        var9 = var13.bind(var3)(var9);
        var16 = var9.intl;
        var15 = var16.string;
        var9 = var10[var8];
        var9 = var13.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.lT0ZNS;
        var9 = var15.bind(var16)(var9);
        var12.description = var9;
        var9 = _closure1_slot1;
        var15 = 8;
        var15 = var10[var15];
        var15 = var9.bind(var3)(var15);
        var12.iconSource = var15;
        var14 = var14.bind(var3)(var7, var12);
        var12 = new Array(3);
        var12[0] = var14;
        var16 = _closure1_slot4;
        var14 = 9;
        var14 = var10[var14];
        var15 = var9.bind(var3)(var14);
        var14 = {};
        var17 = 12;
        var14.size = var17;
        var14 = var16.bind(var3)(var15, var14);
        var12[1] = var14;
        var15 = _closure1_slot4;
        var14 = {};
        var16 = 2;
        var14.cardNumber = var16;
        var16 = var10[var8];
        var16 = var13.bind(var3)(var16);
        var18 = var16.intl;
        var17 = var18.string;
        var16 = var10[var8];
        var16 = var13.bind(var3)(var16);
        var16 = var16.t;
        var16 = var16.ihN2Wb;
        var16 = var17.bind(var18)(var16);
        var14.description = var16;
        var16 = 10;
        var16 = var10[var16];
        var16 = var9.bind(var3)(var16);
        var14.iconSource = var16;
        var14 = var15.bind(var3)(var7, var14);
        var12[2] = var14;
        var4.children = var12;
        var6 = var11.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var6 = _closure1_slot4;
        var5 = {};
        var11 = 3;
        var5.cardNumber = var11;
        var11 = var10[var8];
        var11 = var13.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var8 = var10[var8];
        var8 = var13.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.c8krDQ;
        var8 = var11.bind(var12)(var8);
        var5.description = var8;
        var8 = 11;
        var8 = var10[var8];
        var8 = var9.bind(var3)(var8);
        var5.iconSource = var8;
        var5 = var6.bind(var3)(var7, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3941, 4704, 1234, 14840, 9282, 14841, 14842, 2]);