// modules/main_tabs_v2/native/shared_components/guild_channels/typing_indicators/TypingIndicator.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun101669: for (var _fun101669_ip = 0;;) switch (_fun101669_ip) {
            case 0:
                var2 = arg0;
                var0 = {};
                var1 = {
                    'zIndex': 10,
                    'borderRadius': 17,
                    'borderWidth': 2
                };
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var6 = 4;
                var4 = var4[var6];
                var5 = undefined;
                var4 = var7.bind(var5)(var4);
                var4 = var4.colors;
                var4 = var4.BACKGROUND_BASE_LOW;
                var1.borderColor = var4;
                var0.ellipsisWrapper = var1;
                var1 = {
                    'borderRadius': 13,
                    'paddingVertical': 4,
                    'paddingStart': 4,
                    'paddingEnd': 2,
                    'marginRight': 0
                };
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var4 = var7.bind(var5)(var4);
                var7 = var4.unsafe_rawColors;
                if (var2) {
                    _fun101669_ip = 112;
                    continue _fun101669
                }
            case 104:
                var4 = var7.BRAND_500;
                _fun101669_ip = 118;
                continue _fun101669;
            case 112:
                var4 = var7.BRAND_200;
            case 118:
                var1.backgroundColor = var4;
                var0.ellipsis = var1;
                var1 = {
                    'width': 4,
                    'height': 4
                };
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var4.bind(var5)(var3);
                var3 = var3.unsafe_rawColors;
                if (var2) {
                    _fun101669_ip = 174;
                    continue _fun101669
                }
            case 166:
                var2 = var3.WHITE;
                _fun101669_ip = 180;
                continue _fun101669;
            case 174:
                var2 = var3.BRAND_500;
            case 180:
                var1.backgroundColor = var2;
                var0.ellipsisDot = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/shared_components/guild_channels/typing_indicators/TypingIndicator.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var8 = var0.style;
        var5 = _closure1_slot1;
        var7 = _closure1_slot2;
        var1 = 5;
        var1 = var7[var1];
        var3 = undefined;
        var1 = var5.bind(var3)(var1);
        var6 = var1.bind(var3)();
        var2 = _closure1_slot5;
        var4 = _closure1_slot0;
        var1 = 6;
        var1 = var7[var1];
        var4 = var4.bind(var3)(var1);
        var1 = var4.isThemeLight;
        var1 = var1.bind(var4)(var6);
        var6 = var2.bind(var3)(var1);
        var2 = _closure1_slot4;
        var1 = _closure1_slot3;
        var0 = {};
        var9 = var6.ellipsisWrapper;
        var4 = new Array(2);
        var4[0] = var9;
        var4[1] = var8;
        var0.style = var4;
        var4 = 7;
        var4 = var7[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {};
        var8 = var6.ellipsis;
        var7 = new Array(1);
        var7[0] = var8;
        var4.style = var7;
        var6 = var6.ellipsisDot;
        var4.dotStyle = var6;
        var6 = true;
        var4.disableScale = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.TypingIndicator = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3246, 3206, 5764, 2]);