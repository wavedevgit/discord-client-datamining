// modules/user_settings/native/defs/ContrastModeSetting.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var1);
    var0 = 0;
    var6 = var5[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var6);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var8 = var1.MobileSetting;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot5 = var1;
    var1 = 7;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createSlider;
    var1 = {};
    var9 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 8;
        var1 = var5[var0];
        var3 = undefined;
        var1 = var4.bind(var3)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var0 = var5[var0];
        var0 = var4.bind(var3)(var0);
        var0 = var0.t;
        var0 = var0["TYyfO/"];
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.title = var9;
    var8 = var8.ACCESSIBILITY;
    var1.parent = var8;
    var8 = function() {
        var3 = _closure1_slot5;
        var1 = _closure1_slot1;
        var6 = _closure1_slot2;
        var4 = 9;
        var0 = var6[var4];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = {};
        var5 = _closure1_slot0;
        var4 = var6[var4];
        var4 = var5.bind(var2)(var4);
        var4 = var4.BetaSizes;
        var4 = var4.SMALL;
        var0.size = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1.useTrailing = var8;
    var7 = function() {
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = function() { // Environment: var0
            var0 = {
                'value': null,
                'onSlidingComplete': null,
                'minimumValue': 0,
                'maximumValue': 2,
                'step': 0.1
            };
            var2 = _closure1_slot4;
            var2 = var2.contrast;
            var0.value = var2;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 4;
            var3 = var5[var3];
            var4 = undefined;
            var3 = var2.bind(var4)(var3);
            var3 = var3.setContrast;
            var0.onSlidingComplete = var3;
            var3 = _closure1_slot5;
            var1 = 5;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var6 = var1.CircleMinusIcon;
            var1 = {};
            var1 = var3.bind(var4)(var6, var1);
            var0.startIcon = var1;
            var1 = 6;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.CirclePlusIcon;
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            var0.endIcon = var1;
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.useProps = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/defs/ContrastModeSetting.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 7005, 33, 10931, 10907, 10910, 8996, 1234, 5364, 2]);