// uikit-native/refresh/form/FormSwitch.tsx
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
    var3 = var3.Switch;
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
    var3 = {};
    var8 = {};
    var9 = -5;
    var8.marginVertical = var9;
    var3.switch = var8;
    var8 = {};
    var9 = 4;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.REDESIGN_INPUT_CONTROL_SELECTED;
    var8.color = var9;
    var3.track = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/refresh/form/FormSwitch.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: FormSwitch, environment: var1
        _fun48038: for (var _fun48038_ip = 0;;) switch (_fun48038_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.value;
                var3 = undefined;
                var7 = var3 !== var0;
                if (!var7) {
                    _fun48038_ip = 20;
                    continue _fun48038
                }
            case 17:
                var7 = var0;
            case 20:
                var0 = var1.disabled;
                var8 = var3 !== var0;
                if (!var8) {
                    _fun48038_ip = 35;
                    continue _fun48038
                }
            case 32:
                var8 = var0;
            case 35:
                var10 = var1.style;
                var12 = var1.borderColor;
                var6 = var1.onValueChange;
                var11 = var1.accessible;
                var5 = var1.accessibilityLabel;
                var4 = var1.accessibilityHint;
                var0 = var1.renderIosBackground;
                var13 = var3 !== var0;
                if (!var13) {
                    _fun48038_ip = 84;
                    continue _fun48038
                }
            case 81:
                var13 = var0;
            case 84:
                var2 = _closure1_slot5;
                var9 = var2.bind(var3)();
                var14 = _closure1_slot1;
                var15 = _closure1_slot2;
                var2 = 5;
                var2 = var15[var2];
                var2 = var14.bind(var3)(var2);
                var15 = var2.bind(var3)();
                var14 = var1.tintColor;
                var1 = null;
                if (!(var1 == var14)) {
                    _fun48038_ip = 141;
                    continue _fun48038
                }
            case 131:
                var2 = var9.track;
                var14 = var2.color;
            case 141:
                if (!(var1 == var12)) {
                    _fun48038_ip = 212;
                    continue _fun48038
                }
            case 145:
                var2 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = 6;
                var1 = var16[var1];
                var2 = var2.bind(var3)(var1);
                var1 = var2.isThemeDark;
                var1 = var1.bind(var2)(var15);
                var12 = undefined;
                if (!var1) {
                    _fun48038_ip = 212;
                    continue _fun48038
                }
            case 181:
                var2 = _closure1_slot1;
                var15 = _closure1_slot2;
                var1 = 4;
                var1 = var15[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.unsafe_rawColors;
                var12 = var1.PRIMARY_400;
            case 212:
                var2 = _closure1_slot4;
                var1 = _closure1_slot3;
                var0 = {};
                var0.accessible = var11;
                var11 = {};
                var11.true = var14;
                var11.false = var12;
                var0.trackColor = var11;
                var14 = false;
                var11 = undefined;
                if (!(var14 === var7)) {
                    _fun48038_ip = 259;
                    continue _fun48038
                }
            case 251:
                var11 = undefined;
                if (!var13) {
                    _fun48038_ip = 259;
                    continue _fun48038
                }
            case 256:
                var11 = var12;
            case 259:
                var0.ios_backgroundColor = var11;
                var0.value = var7;
                var0.disabled = var8;
                var11 = var9.switch;
                var9 = new Array(2);
                var9[0] = var11;
                var9[1] = var10;
                var0.style = var9;
                var0.onValueChange = var6;
                var6 = {};
                var6.disabled = var8;
                var6.selected = var7;
                var0.accessibilityState = var6;
                var0.accessibilityLabel = var5;
                var0.accessibilityHint = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3205, 3165, 2]);