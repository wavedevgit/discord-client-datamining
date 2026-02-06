// modules/in_app_reports/native/components/InAppReportsChannelPreview.tsx
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 4;
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
    var9 = 5;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.MOBILE_TEXT_HEADING_PRIMARY;
    var8.color = var11;
    var3.borderColor = var8;
    var8 = {
        'lineHeight': 16,
        'marginBottom': 8
    };
    var3.title = var8;
    var8 = {
        'minHeight': 40,
        'borderRadius': null,
        'borderWidth': 1,
        'padding': 8
    };
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.sm;
    var8.borderRadius = var9;
    var3.itemContainer = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.guildInfo = var8;
    var8 = {
        'lineHeight': 18,
        'marginStart': 8
    };
    var3.guildName = var8;
    var8 = {
        'lineHeight': 20,
        'marginTop': 8
    };
    var3.topic = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/in_app_reports/native/components/InAppReportsChannelPreview.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92638: for (var _fun92638_ip = 0;;) switch (_fun92638_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.stageInstance;
                var _closure2_slot0 = var11;
                var1 = _closure1_slot7;
                var4 = undefined;
                var12 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useStateFromStores;
                var5 = _closure1_slot4;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getGuild;
                    var0 = _closure2_slot0;
                    var0 = var0.guild_id;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var17 = var2.bind(var3)(var1, var0);
                var0 = null;
                if (!(var0 != var17)) {
                    _fun92638_ip = 553;
                    continue _fun92638
                }
            case 87:
                if (!(var0 != var11)) {
                    _fun92638_ip = 553;
                    continue _fun92638
                }
            case 94:
                var9 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 7;
                var1 = var13[var1];
                var5 = var9.bind(var4)(var1);
                var3 = var5.hexWithOpacity;
                var1 = var12.borderColor;
                var2 = var1.color;
                var1 = 0.08;
                var16 = var3.bind(var5)(var2, var1);
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var12.container;
                var1.style = var5;
                var10 = _closure1_slot5;
                var8 = 8;
                var5 = var13[var8];
                var5 = var9.bind(var4)(var5);
                var6 = var5.Text;
                var5 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'text-xs/bold'
                };
                var7 = var12.title;
                var5.style = var7;
                var7 = 9;
                var15 = var13[var7];
                var15 = var9.bind(var4)(var15);
                var18 = var15.intl;
                var15 = var18.string;
                var7 = var13[var7];
                var7 = var9.bind(var4)(var7);
                var7 = var7.t;
                var7 = var7.InbJ8x;
                var7 = var15.bind(var18)(var7);
                var5.children = var7;
                var6 = var10.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = {};
                var15 = var12.itemContainer;
                var7 = new Array(2);
                var7[0] = var15;
                var15 = {};
                var15.borderColor = var16;
                var7[1] = var15;
                var6.style = var7;
                var7 = {};
                var15 = var12.guildInfo;
                var7.style = var15;
                var15 = _closure1_slot1;
                var16 = 10;
                var14 = var13[var16];
                var15 = var15.bind(var4)(var14);
                var14 = {};
                var14.guild = var17;
                var16 = var13[var16];
                var16 = var9.bind(var4)(var16);
                var16 = var16.GuildIconSizes;
                var16 = var16.XXSMALL;
                var14.size = var16;
                var16 = false;
                var14.selected = var16;
                var15 = var10.bind(var4)(var15, var14);
                var14 = new Array(2);
                var14[0] = var15;
                var15 = var13[var8];
                var15 = var9.bind(var4)(var15);
                var16 = var15.Text;
                var15 = {
                    'style': null,
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var18 = var12.guildName;
                var15.style = var18;
                var17 = var17.name;
                var15.children = var17;
                var15 = var10.bind(var4)(var16, var15);
                var14[1] = var15;
                var7.children = var14;
                var14 = var3.bind(var4)(var2, var7);
                var7 = new Array(2);
                var7[0] = var14;
                var8 = var13[var8];
                var8 = var9.bind(var4)(var8);
                var9 = var8.Text;
                var8 = {
                    'style': null,
                    'variant': 'text-md/bold',
                    'color': 'mobile-text-heading-primary'
                };
                var12 = var12.topic;
                var8.style = var12;
                var11 = var11.topic;
                var8.children = var11;
                var8 = var10.bind(var4)(var9, var8);
                var7[1] = var8;
                var6.children = var7;
                var6 = var3.bind(var4)(var2, var6);
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 553:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1410, 33, 1297, 671, 566, 3242, 3943, 1234, 7420, 2]);