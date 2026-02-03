// modules/navbars/native/components/AnnouncementChannelLurkerBar.tsx
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
        'backgroundColor': null,
        'padding': 16,
        'paddingTop': 8
    };
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_SURFACE_HIGH;
    var8.backgroundColor = var9;
    var3.wrapper = var8;
    var8 = {
        'textAlign': 'center',
        'marginBottom': 8
    };
    var3.text = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var1 = function arg0() {
        var0 = arg0;
        var0 = var0.channel;
        var _closure2_slot0 = var0;
        var0 = _closure1_slot6;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var2 = _closure1_slot5;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = var8.wrapper;
        var0.style = var4;
        var7 = _closure1_slot4;
        var14 = _closure1_slot0;
        var10 = _closure1_slot2;
        var4 = 5;
        var4 = var10[var4];
        var4 = var14.bind(var3)(var4);
        var6 = var4.Text;
        var4 = {
            'style': null,
            'variant': 'text-sm/medium',
            'color': 'mobile-text-heading-primary'
        };
        var8 = var8.text;
        var4.style = var8;
        var11 = 6;
        var8 = var10[var11];
        var8 = var14.bind(var3)(var8);
        var13 = var8.intl;
        var9 = var13.string;
        var8 = var10[var11];
        var8 = var14.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.Hl0Mqh;
        var8 = var9.bind(var13)(var8);
        var4.children = var8;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var9 = _closure1_slot1;
        var8 = 7;
        var5 = var10[var8];
        var6 = var9.bind(var3)(var5);
        var5 = {};
        var12 = function() {
            _fun76836: for (var _fun76836_ip = 0;;) switch (_fun76836_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var3 = var1.id;
                    var0 = var1.getGuildId;
                    var2 = var0.bind(var1)();
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun76836_ip = 65;
                        continue _fun76836
                    }
                case 28:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var4.bind(var0)(var1);
                    var0 = var1.showChannelFollowingActionSheet;
                    var0 = var0.bind(var1)(var3, var2);
                case 65:
                    var0 = undefined;
                    return var0;
            }
        };
        var5.onPress = var12;
        var12 = var10[var11];
        var12 = var14.bind(var3)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var10[var11];
        var11 = var14.bind(var3)(var11);
        var11 = var11.t;
        var11 = var11["4z5PU1"];
        var11 = var12.bind(var13)(var11);
        var5.text = var11;
        var11 = var10[var8];
        var11 = var9.bind(var3)(var11);
        var11 = var11.Sizes;
        var11 = var11.SMALL;
        var5.size = var11;
        var8 = var10[var8];
        var8 = var9.bind(var3)(var8);
        var8 = var8.Colors;
        var8 = var8.GREY;
        var5.color = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/navbars/native/components/AnnouncementChannelLurkerBar.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var2.AnnouncementChannelLurkerBar = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3941, 1234, 4873, 9781, 2]);