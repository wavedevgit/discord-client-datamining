// modules/main_tabs_v2/native/shared_components/guild_channels/ChannelPressableWrapper.tsx
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
    var3 = 'modules/main_tabs_v2/native/shared_components/guild_channels/ChannelPressableWrapper.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun103518: for (var _fun103518_ip = 0;;) switch (_fun103518_ip) {
            case 0:
                var0 = arg1;
                var7 = var0.layout;
                var4 = var0.launchpad;
                var6 = var0.isThread;
                var5 = var0.panelVariant;
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun103518_ip = 35;
                    continue _fun103518
                }
            case 33:
                var5 = false;
            case 35:
                var2 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 3;
                var1 = var8[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.getLayoutStyles;
                var4 = var1.bind(var2)(var7, var4);
                var2 = _closure1_slot3;
                var1 = _closure1_slot2;
                var0 = {};
                var4 = var4.layout;
                if (var6) {
                    _fun103518_ip = 108;
                    continue _fun103518
                }
            case 89:
                if (var5) {
                    _fun103518_ip = 100;
                    continue _fun103518
                }
            case 92:
                var5 = var4.margin;
                _fun103518_ip = 106;
                continue _fun103518;
            case 100:
                var5 = var4.marginPanels;
            case 106:
                _fun103518_ip = 114;
                continue _fun103518;
            case 108:
                var5 = var4.marginThread;
            case 114:
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {
                    'flex': 1,
                    'flexDirection': 'row',
                    'alignItems': 'center'
                };
                var4[1] = var5;
                var0.style = var4;
                var4 = arg0;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.renderChannelPressableWrapper = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 8822, 2]);