// modules/premium/fractional/native/LargeCountDownPill.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.TouchableOpacity;
    var _closure1_slot3 = var6;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 2;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var6 = {};
    var3 = {
        'flexDirection': 'row',
        'justifyContent': 'center',
        'alignItems': 'center',
        'borderRadius': null,
        'backgroundColor': 'rgba(255, 255, 255, 0.1)',
        'alignSelf': 'center',
        'paddingHorizontal': 16,
        'marginBottom': 10
    };
    var10 = 3;
    var9 = var5[var10];
    var9 = var11.bind(var0)(var9);
    var9 = var9.radii;
    var9 = var9.round;
    var3.borderRadius = var9;
    var6.largeCountdownPill = var3;
    var9 = {
        'paddingVertical': 8,
        'color': null,
        'fontSize': 14,
        'lineHeight': 16,
        'marginRight': 8
    };
    var3 = 8;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_STATUS_IDLE;
    var9.color = var10;
    var6.largeCountdownPillText = var9;
    var9 = {
        'width': 16,
        'height': 16
    };
    var6.iconStyle = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot7 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/fractional/native/LargeCountDownPill.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var14 = var0.countdownText;
        var0 = _closure1_slot7;
        var3 = undefined;
        var11 = var0.bind(var3)();
        var _closure2_slot0 = var11;
        var2 = _closure1_slot5;
        var1 = _closure1_slot3;
        var0 = {};
        var4 = function() {
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var0 = 4;
            var1 = var6[var0];
            var0 = undefined;
            var3 = var5.bind(var0)(var1);
            var2 = var3.open;
            var1 = {};
            var7 = 'LARGE_COUNTDOWN_PILL_TOAST';
            var1.key = var7;
            var9 = _closure1_slot0;
            var4 = 5;
            var7 = var6[var4];
            var7 = var9.bind(var0)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var4 = var6[var4];
            var4 = var9.bind(var0)(var4);
            var4 = var4.t;
            var4 = var4["Mv4E/M"];
            var4 = var7.bind(var8)(var4);
            var1.content = var4;
            var4 = function() {
                var3 = _closure1_slot5;
                var1 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 6;
                var0 = var6[var0];
                var2 = undefined;
                var0 = var1.bind(var2)(var0);
                var1 = var0.CircleInformationIcon;
                var0 = {};
                var5 = _closure2_slot0;
                var5 = var5.iconStyle;
                var0.style = var5;
                var5 = _closure1_slot1;
                var4 = 3;
                var4 = var6[var4];
                var4 = var5.bind(var2)(var4);
                var4 = var4.colors;
                var4 = var4.STATUS_WARNING;
                var0.color = var4;
                var0 = var3.bind(var2)(var1, var0);
                return var0;
            };
            var1.icon = var4;
            var4 = 3;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var4 = var4.colors;
            var4 = var4.STATUS_WARNING;
            var1.iconColor = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.onPress = var4;
        var6 = _closure1_slot6;
        var5 = _closure1_slot4;
        var4 = {};
        var7 = var11.largeCountdownPill;
        var4.style = var7;
        var9 = _closure1_slot0;
        var12 = _closure1_slot2;
        var7 = 7;
        var7 = var12[var7];
        var7 = var9.bind(var3)(var7);
        var8 = var7.Text;
        var7 = {};
        var13 = 'text-xs/bold';
        var7.variant = var13;
        var13 = var11.largeCountdownPillText;
        var7.style = var13;
        var13 = var14.toUpperCase;
        var13 = var13.bind(var14)();
        var7.children = var13;
        var8 = var2.bind(var3)(var8, var7);
        var7 = new Array(2);
        var7[0] = var8;
        var8 = 6;
        var8 = var12[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.CircleInformationIcon;
        var8 = {};
        var11 = var11.iconStyle;
        var8.style = var11;
        var11 = _closure1_slot1;
        var10 = 3;
        var10 = var12[var10];
        var10 = var11.bind(var3)(var10);
        var10 = var10.colors;
        var10 = var10.TEXT_STATUS_IDLE;
        var8.color = var10;
        var8 = var2.bind(var3)(var9, var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 33, 1297, 671, 3150, 1234, 3267, 3942, 2]);