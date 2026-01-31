// modules/main_tabs_v2/native/shared_components/guild_channels/ChannelWrapper.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
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
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/guild_channels/ChannelWrapper.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun103308: for (var _fun103308_ip = 0;;) switch (_fun103308_ip) {
            case 0:
                var0 = arg1;
                var8 = var0.channel;
                var6 = var0.layout;
                var11 = var0.fontScale;
                var4 = var0.launchpad;
                var5 = var0.panelVariant;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun103308_ip = 40;
                    continue _fun103308
                }
            case 38:
                var5 = false;
            case 40:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var9 = 3;
                var1 = var1[var9];
                var10 = var2.bind(var3)(var1);
                var2 = var10.getScaledChannelRowHeight;
                var7 = null;
                var12 = var7 == var8;
                var1 = undefined;
                if (var12) {
                    _fun103308_ip = 90;
                    continue _fun103308
                }
            case 80:
                var12 = var8.isThread;
                var1 = var12.bind(var8)();
            case 90:
                if (!var1) {
                    _fun103308_ip = 96;
                    continue _fun103308
                }
            case 93:
                var1 = !var4;
            case 96:
                var11 = var2.bind(var10)(var11, var6, var1);
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var9];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getLayoutStyles;
                var6 = var1.bind(var2)(var6, var4);
                var2 = _closure1_slot3;
                var1 = _closure1_slot2;
                var0 = {};
                var4 = new Array(3);
                var9 = {
                    'flex': 1,
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'position': 'relative'
                };
                var4[0] = var9;
                var9 = {};
                if (!(var7 != var8)) {
                    _fun103308_ip = 183;
                    continue _fun103308
                }
            case 170:
                var10 = var8.isThread;
                var10 = var10.bind(var8)();
                if (var10) {
                    _fun103308_ip = 210;
                    continue _fun103308
                }
            case 183:
                var10 = var6.layout;
                var10 = var10.margin;
                var12 = var10.marginVertical;
                var10 = 2;
                var10 = var10 * var12;
                _fun103308_ip = 235;
                continue _fun103308;
            case 210:
                var12 = var6.layout;
                var12 = var12.marginThread;
                var13 = var12.marginVertical;
                var12 = 2;
                var10 = var12 * var13;
            case 235:
                var10 = var11 - var10;
                var9.minHeight = var10;
                var4[1] = var9;
                if (!(var7 != var8)) {
                    _fun103308_ip = 265;
                    continue _fun103308
                }
            case 252:
                var7 = var8.isThread;
                var7 = var7.bind(var8)();
                if (var7) {
                    _fun103308_ip = 288;
                    continue _fun103308
                }
            case 265:
                var7 = var6.container;
                if (var5) {
                    _fun103308_ip = 280;
                    continue _fun103308
                }
            case 273:
                var5 = var7.padding;
                _fun103308_ip = 286;
                continue _fun103308;
            case 280:
                var5 = var7.paddingPanels;
            case 286:
                _fun103308_ip = 299;
                continue _fun103308;
            case 288:
                var6 = var6.container;
                var5 = var6.paddingThread;
            case 299:
                var4[2] = var5;
                var0.style = var4;
                var4 = arg0;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.renderChannelWrapper = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 8748, 2]);