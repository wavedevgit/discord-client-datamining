// uikit-native/color_picker/HSVColorPicker.tsx
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
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'center';
    var8.alignItems = var9;
    var3.hsvColorPicker = var8;
    var8 = {};
    var9 = 12;
    var8.marginTop = var9;
    var3.huePicker = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'uikit-native/color_picker/HSVColorPicker.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: HSVColorPicker, environment: var1
        _fun79793: for (var _fun79793_ip = 0;;) switch (_fun79793_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.hue;
                var15 = var0.saturation;
                var13 = var0.value;
                var8 = var0.onPanFinalize;
                var0 = _closure1_slot6;
                var3 = undefined;
                var4 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var11 = _closure1_slot2;
                var0 = 4;
                var2 = var11[var0];
                var7 = var1.bind(var3)(var2);
                var6 = var7.useSharedValue;
                var2 = 0;
                var9 = var6.bind(var7)(var2);
                var2 = var11[var0];
                var7 = var1.bind(var3)(var2);
                var6 = var7.useSharedValue;
                var2 = 1;
                var14 = var6.bind(var7)(var2);
                var0 = var11[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useSharedValue;
                var12 = var0.bind(var1)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var4.hsvColorPicker;
                var0.style = var4;
                var7 = _closure1_slot4;
                var6 = _closure1_slot1;
                var4 = 5;
                var4 = var11[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {};
                var11 = null;
                var16 = var9;
                if (!(var11 != var10)) {
                    _fun79793_ip = 169;
                    continue _fun79793
                }
            case 166:
                var16 = var10;
            case 169:
                var4.hue = var16;
                if (!(var11 != var15)) {
                    _fun79793_ip = 181;
                    continue _fun79793
                }
            case 178:
                var14 = var15;
            case 181:
                var4.saturation = var14;
                if (!(var11 != var13)) {
                    _fun79793_ip = 193;
                    continue _fun79793
                }
            case 190:
                var12 = var13;
            case 193:
                var4.value = var12;
                var4.onPanFinalize = var8;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot4;
                var6 = _closure1_slot1;
                var12 = _closure1_slot2;
                var5 = 6;
                var5 = var12[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                if (!(var11 != var10)) {
                    _fun79793_ip = 249;
                    continue _fun79793
                }
            case 246:
                var9 = var10;
            case 249:
                var5.hue = var9;
                var5.onPanFinalize = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 3679, 10112, 10113, 2]);