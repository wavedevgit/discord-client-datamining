// modules/channel_list_v2/native/components/StaticChannelIndicator.tsx
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
    var11 = 0;
    var3 = var5[var11];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var9 = var3.StyleSheet;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UnreadSetting;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var13 = var9.absoluteFillObject;
    var14 = var8;
    var9 = copyDataProperties(var14, var13);
    var9 = 'top';
    var8[var9] = var11;
    var9 = 'bottom';
    var8[var9] = var11;
    var11 = 'center';
    var9 = 'justifyContent';
    var8[var9] = var11;
    var3.indicatorContainer = var8;
    var8 = {
        'width': 8,
        'height': 8,
        'borderRadius': null,
        'marginLeft': 4294967292
    };
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.round;
    var8.borderRadius = var9;
    var3.indicator = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/channel_list_v2/native/components/StaticChannelIndicator.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ChannelIndicator, environment: var1
        _fun69912: for (var _fun69912_ip = 0;;) switch (_fun69912_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.unread;
                var8 = var0.resolvedUnreadSetting;
                var7 = var0.style;
                var0 = _closure1_slot6;
                var4 = undefined;
                var6 = var0.bind(var4)();
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 5;
                var0 = var5[var0];
                var5 = var3.bind(var4)(var0);
                var3 = var5.useToken;
                var0 = _closure1_slot4;
                var0 = var0.ALL_MESSAGES;
                if (!(var8 !== var0)) {
                    _fun69912_ip = 106;
                    continue _fun69912
                }
            case 73:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 4;
                var0 = var9[var0];
                var0 = var8.bind(var4)(var0);
                var0 = var0.colors;
                var0 = var0.CHANNELS_DEFAULT;
                _fun69912_ip = 137;
                continue _fun69912;
            case 106:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var8 = 4;
                var8 = var10[var8];
                var8 = var9.bind(var4)(var8);
                var8 = var8.colors;
                var0 = var8.INTERACTIVE_TEXT_ACTIVE;
            case 137:
                var9 = var3.bind(var5)(var0);
                var0 = null;
                if (!var2) {
                    _fun69912_ip = 217;
                    continue _fun69912
                }
            case 147:
                var3 = _closure1_slot5;
                var2 = _closure1_slot3;
                var1 = {};
                var5 = var6.indicatorContainer;
                var1.style = var5;
                var5 = {};
                var8 = var6.indicator;
                var6 = new Array(3);
                var6[0] = var8;
                var8 = {};
                var8.backgroundColor = var9;
                var6[1] = var8;
                var6[2] = var7;
                var5.style = var6;
                var5 = var3.bind(var4)(var2, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 217:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 4268, 33, 1297, 671, 3110, 2]);