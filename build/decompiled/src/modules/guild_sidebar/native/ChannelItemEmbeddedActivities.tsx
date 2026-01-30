// modules/guild_sidebar/native/ChannelItemEmbeddedActivities.tsx
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
    var9 = 4;
    var8 = {
        'lineHeight': 16,
        'textAlign': 'center',
        'textAlignVertical': 'center',
        'padding': 4
    };
    var3.overflow = var8;
    var8 = {
        'backgroundColor': null,
        'borderRadius': null,
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var8.backgroundColor = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.xs;
    var8.borderRadius = var9;
    var3.overflowContainer = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row'
    };
    var3.container = var8;
    var8 = {};
    var9 = 0.3;
    var8.opacity = var9;
    var3.modeMuted = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_sidebar/native/ChannelItemEmbeddedActivities.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ChannelItemEmbeddedActivities, environment: var1
        _fun103272: for (var _fun103272_ip = 0;;) switch (_fun103272_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.embeddedApps;
                var6 = var0.size;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun103272_ip = 55;
                    continue _fun103272
                }
            case 20:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 5;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.GameIconSizes;
                var6 = var1.SIZE_24;
            case 55:
                var4 = var0.muted;
                var1 = _closure1_slot6;
                var5 = var1.bind(var3)();
                var1 = var8.length;
                var7 = 0;
                if (!(!(var1 <= var7))) {
                    _fun103272_ip = 501;
                    continue _fun103272
                }
            case 86:
                var1 = var8.length;
                var2 = 1;
                if (!(var2 !== var1)) {
                    _fun103272_ip = 436;
                    continue _fun103272
                }
            case 101:
                var1 = var8[var7];
                var13 = var1.application;
                var1 = var8[var2];
                var15 = var1.application;
                var1 = var8.length;
                var20 = var1 - var2;
                var2 = _closure1_slot0;
                var10 = _closure1_slot2;
                var16 = 5;
                var1 = var10[var16];
                var1 = var2.bind(var3)(var1);
                var1 = var1.GameIconImageSize;
                var18 = var1[var6];
                var9 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var11 = var5.container;
                var1.style = var11;
                var12 = _closure1_slot4;
                var11 = _closure1_slot1;
                var10 = var10[var16];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var10.game = var13;
                var10.size = var6;
                var13 = {};
                var14 = 4;
                var13.marginRight = var14;
                var10.style = var13;
                var11 = var12.bind(var3)(var11, var10);
                var10 = new Array(2);
                var10[0] = var11;
                var12 = var8.length;
                var11 = 2;
                if (!(var11 !== var12)) {
                    _fun103272_ip = 382;
                    continue _fun103272
                }
            case 248:
                var13 = _closure1_slot4;
                var12 = _closure1_slot3;
                var11 = {};
                var17 = var5.overflowContainer;
                var14 = new Array(2);
                var14[0] = var17;
                var17 = {};
                var17.height = var18;
                var17.minWidth = var18;
                var14[1] = var17;
                var11.style = var14;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var14 = 6;
                var14 = var18[var14];
                var14 = var17.bind(var3)(var14);
                var17 = var14.Text;
                var14 = {};
                var18 = var5.overflow;
                var14.style = var18;
                var18 = 'text-xs/bold';
                var14.variant = var18;
                var18 = global;
                var18 = var18.HermesInternal;
                var19 = var18.concat;
                var18 = '+';
                var18 = var19.bind(var18)(var20);
                var14.children = var18;
                var14 = var13.bind(var3)(var17, var14);
                var11.children = var14;
                var11 = var13.bind(var3)(var12, var11);
                _fun103272_ip = 420;
                continue _fun103272;
            case 382:
                var14 = _closure1_slot4;
                var13 = _closure1_slot1;
                var12 = _closure1_slot2;
                var12 = var12[var16];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var12.game = var15;
                var12.size = var6;
                var11 = var14.bind(var3)(var13, var12);
            case 420:
                var10[1] = var11;
                var1.children = var10;
                var1 = var9.bind(var3)(var2, var1);
                return var1;
            case 436:
                var2 = _closure1_slot4;
                var1 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 5;
                var0 = var9[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var7 = var8[var7];
                var7 = var7.application;
                var0.game = var7;
                var0.size = var6;
                if (!var4) {
                    _fun103272_ip = 489;
                    continue _fun103272
                }
            case 483:
                var4 = var5.modeMuted;
            case 489:
                var0.style = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 501:
                var0 = null;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 6855, 3901, 2]);