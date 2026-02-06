// modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchaseCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var6.bind(var0)(var3);
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var3 = var3.jsxs;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {};
    var10 = 5;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var3.backgroundColor = var12;
    var3.flex = var9;
    var6.container = var3;
    var3 = 16;
    var9 = {
        'padding': 16,
        'paddingBottom': 24
    };
    var6.header = var9;
    var9 = {
        'padding': 16,
        'paddingTop': 24
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var12;
    var6.content = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var6.headerText = var9;
    var9 = {
        'width': 3,
        'height': 3,
        'borderRadius': 1.5,
        'backgroundColor': null,
        'marginHorizontal': 8
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_DEFAULT;
    var9.backgroundColor = var12;
    var6.headerDot = var9;
    var9 = {
        'borderBottomWidth': 1,
        'marginLeft': 4294967280,
        'marginRight': 4294967280
    };
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.INTERACTIVE_BACKGROUND_HOVER;
    var9.borderColor = var10;
    var6.seperator = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot8 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/native/purchase_page/GuildRoleSubscriptionPurchaseCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var14 = var0.listingId;
        var13 = var0.guildId;
        var0 = _closure1_slot8;
        var3 = undefined;
        var18 = var0.bind(var3)();
        var16 = _closure1_slot1;
        var15 = _closure1_slot3;
        var0 = 6;
        var0 = var15[var0];
        var0 = var16.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var20 = var0.bottom;
        var6 = _closure1_slot2;
        var0 = 7;
        var1 = var15[var0];
        var2 = var6.bind(var3)(var1);
        var1 = var2.useDescription;
        var1 = var1.bind(var2)(var14);
        var5 = _closure1_slot4;
        var2 = 1;
        var7 = var5.bind(var3)(var1, var2);
        var1 = 0;
        var21 = var7[var1];
        var0 = var15[var0];
        var6 = var6.bind(var3)(var0);
        var0 = var6.useName;
        var0 = var0.bind(var6)(var14);
        var0 = var5.bind(var3)(var0, var2);
        var19 = var0[var1];
        var12 = _closure1_slot0;
        var9 = 8;
        var0 = var15[var9];
        var1 = var12.bind(var3)(var0);
        var0 = var1.useFormattedSubscriptionPlan;
        var22 = var0.bind(var1)(var14);
        var2 = _closure1_slot6;
        var0 = 9;
        var0 = var15[var0];
        var0 = var12.bind(var3)(var0);
        var1 = var0.BottomSheet;
        var0 = {
            'scrollable': true,
            'startExpanded': true
        };
        var6 = _closure1_slot7;
        var5 = _closure1_slot5;
        var4 = {};
        var7 = var18.container;
        var4.style = var7;
        var7 = {};
        var8 = var18.header;
        var7.style = var8;
        var8 = {};
        var10 = var18.headerText;
        var8.style = var10;
        var10 = 10;
        var11 = var15[var10];
        var11 = var12.bind(var3)(var11);
        var17 = var11.Text;
        var11 = {
            'variant': 'heading-md/semibold',
            'color': 'mobile-text-heading-primary'
        };
        var11.children = var19;
        var17 = var2.bind(var3)(var17, var11);
        var11 = new Array(3);
        var11[0] = var17;
        var17 = {};
        var19 = var18.headerDot;
        var17.style = var19;
        var17 = var2.bind(var3)(var5, var17);
        var11[1] = var17;
        var17 = var15[var10];
        var17 = var12.bind(var3)(var17);
        var19 = var17.Text;
        var17 = {
            'variant': 'heading-md/semibold',
            'color': 'mobile-text-heading-primary'
        };
        var17.children = var22;
        var17 = var2.bind(var3)(var19, var17);
        var11[2] = var17;
        var8.children = var11;
        var11 = var6.bind(var3)(var5, var8);
        var8 = new Array(5);
        var8[0] = var11;
        var11 = 11;
        var17 = var15[var11];
        var22 = var16.bind(var3)(var17);
        var17 = {};
        var19 = 16;
        var17.size = var19;
        var17 = var2.bind(var3)(var22, var17);
        var8[1] = var17;
        var9 = var15[var9];
        var9 = var12.bind(var3)(var9);
        var17 = var9.TruncatedText;
        var9 = {
            'variant': 'text-sm/normal',
            'color': 'text-default',
            'lineClamp': 2
        };
        var9.children = var21;
        var9 = var2.bind(var3)(var17, var9);
        var8[2] = var9;
        var9 = var15[var11];
        var21 = var16.bind(var3)(var9);
        var9 = {};
        var17 = 24;
        var9.size = var17;
        var9 = var2.bind(var3)(var21, var9);
        var8[3] = var9;
        var9 = 12;
        var9 = var15[var9];
        var21 = var16.bind(var3)(var9);
        var9 = {};
        var9.listingId = var14;
        var9 = var2.bind(var3)(var21, var9);
        var8[4] = var9;
        var7.children = var8;
        var8 = var6.bind(var3)(var5, var7);
        var7 = new Array(3);
        var7[0] = var8;
        var8 = {};
        var9 = var18.seperator;
        var8.style = var9;
        var8 = var2.bind(var3)(var5, var8);
        var7[1] = var8;
        var8 = 13;
        var8 = var15[var8];
        var8 = var12.bind(var3)(var8);
        var9 = var8.BottomSheetScrollView;
        var8 = {};
        var21 = false;
        var8.scrollsToTop = var21;
        var18 = var18.content;
        var8.style = var18;
        var18 = {};
        var19 = var19 + var20;
        var18.paddingBottom = var19;
        var8.contentContainerStyle = var18;
        var10 = var15[var10];
        var10 = var12.bind(var3)(var10);
        var18 = var10.Text;
        var10 = {
            'variant': 'text-sm/bold',
            'color': 'text-default'
        };
        var19 = {};
        var20 = 'uppercase';
        var19.textTransform = var20;
        var10.style = var19;
        var19 = 14;
        var20 = var15[var19];
        var20 = var12.bind(var3)(var20);
        var21 = var20.intl;
        var20 = var21.string;
        var19 = var15[var19];
        var19 = var12.bind(var3)(var19);
        var19 = var19.t;
        var19 = var19.UdEvUi;
        var19 = var20.bind(var21)(var19);
        var10.children = var19;
        var18 = var2.bind(var3)(var18, var10);
        var10 = new Array(3);
        var10[0] = var18;
        var11 = var15[var11];
        var16 = var16.bind(var3)(var11);
        var11 = {};
        var11.size = var17;
        var11 = var2.bind(var3)(var16, var11);
        var10[1] = var11;
        var11 = 15;
        var11 = var15[var11];
        var11 = var12.bind(var3)(var11);
        var12 = var11.Content;
        var11 = {};
        var11.listingId = var14;
        var11.guildId = var13;
        var11 = var2.bind(var3)(var12, var11);
        var10[2] = var11;
        var8.children = var10;
        var8 = var6.bind(var3)(var9, var8);
        var7[2] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 1568, 10845, 13679, 4934, 3943, 9307, 13686, 4936, 1234, 10855, 2]);