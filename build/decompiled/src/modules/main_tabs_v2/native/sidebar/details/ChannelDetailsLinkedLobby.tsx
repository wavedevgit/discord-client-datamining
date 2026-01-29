// modules/main_tabs_v2/native/sidebar/details/ChannelDetailsLinkedLobby.tsx
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
    var3 = var3.HelpdeskArticles;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Fragment;
    var _closure1_slot5 = var6;
    var6 = var3.jsxs;
    var _closure1_slot6 = var6;
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'center';
    var8.alignItems = var9;
    var3.container = var8;
    var8 = {
        'height': 1,
        'width': 48,
        'marginTop': 12
    };
    var9 = 5;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_STRONG;
    var8.backgroundColor = var9;
    var3.divider = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot8 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/sidebar/details/ChannelDetailsLinkedLobby.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ChannelDetailsLinkedLobby, environment: var1
        _fun107412: for (var _fun107412_ip = 0;;) switch (_fun107412_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.channel;
                var7 = var1.containerStyle;
                var1 = _closure1_slot8;
                var4 = undefined;
                var9 = var1.bind(var4)();
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var3 = var2.bind(var4)(var1);
                var2 = var3.useGetOrFetchApplication;
                var5 = var0.linkedLobby;
                var12 = null;
                var8 = var12 == var5;
                var1 = undefined;
                if (var8) {
                    _fun107412_ip = 76;
                    continue _fun107412
                }
            case 70:
                var1 = var5.application_id;
            case 76:
                var17 = var2.bind(var3)(var1);
                var0 = var0.linkedLobby;
                var1 = var12 == var0;
                var0 = null;
                if (var1) {
                    _fun107412_ip = 503;
                    continue _fun107412
                }
            case 99:
                var3 = _closure1_slot6;
                var2 = _closure1_slot3;
                var1 = {};
                var8 = var9.container;
                var5 = new Array(2);
                var5[0] = var8;
                var5[1] = var7;
                var1.style = var5;
                var8 = _closure1_slot7;
                var7 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 7;
                var5 = var10[var5];
                var5 = var7.bind(var4)(var5);
                var7 = var5.TextWithIOSLinkWorkaround;
                var5 = {
                    'variant': 'text-sm/normal',
                    'color': 'text-default'
                };
                var11 = _closure1_slot5;
                var10 = {};
                if (!(var12 == var17)) {
                    _fun107412_ip = 243;
                    continue _fun107412
                }
            case 184:
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 8;
                var13 = var16[var12];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.yQqVss;
                var13 = var13.bind(var14)(var12);
                _fun107412_ip = 313;
                continue _fun107412;
            case 243:
                var14 = _closure1_slot0;
                var18 = _closure1_slot2;
                var12 = 8;
                var15 = var18[var12];
                var15 = var14.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.format;
                var12 = var18[var12];
                var12 = var14.bind(var4)(var12);
                var12 = var12.t;
                var14 = var12.SgxMJs;
                var12 = {};
                var17 = var17.name;
                var12.applicationName = var17;
                var13 = var15.bind(var16)(var14, var12);
            case 313:
                var12 = new Array(3);
                var12[0] = var13;
                var13 = '  •  ';
                var12[1] = var13;
                var14 = _closure1_slot0;
                var19 = _closure1_slot2;
                var13 = 8;
                var15 = var19[var13];
                var15 = var14.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.format;
                var13 = var19[var13];
                var13 = var14.bind(var4)(var13);
                var13 = var13.t;
                var14 = var13.BPDKoA;
                var13 = {};
                var18 = _closure1_slot1;
                var17 = 9;
                var17 = var19[var17];
                var19 = var18.bind(var4)(var17);
                var18 = var19.getArticleURL;
                var17 = _closure1_slot4;
                var17 = var17.LINKED_LOBBIES;
                var17 = var18.bind(var19)(var17);
                var13.helpdeskArticle = var17;
                var13 = var15.bind(var16)(var14, var13);
                var12[2] = var13;
                var10.children = var12;
                var10 = var3.bind(var4)(var11, var10);
                var5.children = var10;
                var7 = var8.bind(var4)(var7, var5);
                var5 = new Array(2);
                var5[0] = var7;
                var8 = _closure1_slot7;
                var7 = _closure1_slot3;
                var6 = {};
                var9 = var9.divider;
                var6.style = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 503:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 660, 33, 1297, 671, 6839, 5289, 1234, 1675, 2]);