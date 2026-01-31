// modules/visual_effect_view/native/overrides/VEVOOPropBlurEffectName.tsx
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.getVisualEffectViewOverrides;
    var _closure1_slot4 = var7;
    var3 = var3.setVisualEffectViewOverides;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot6 = var7;
    var7 = var3.Fragment;
    var _closure1_slot7 = var7;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 14;
    var9.fontSize = var10;
    var3.radio = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot9 = var3;
    var3 = var6.memo;
    var1 = function() { // Original name: VEVOOPropBlurEffectName, environment: var1
        var0 = _closure1_slot9;
        var3 = undefined;
        var0 = var0.bind(var3)();
        var _closure2_slot0 = var0;
        var10 = _closure1_slot0;
        var11 = _closure1_slot1;
        var0 = 5;
        var0 = var11[var0];
        var1 = var10.bind(var3)(var0);
        var0 = var1.useVisualEffectViewOverrideSharedStyles;
        var15 = var0.bind(var1)();
        var _closure2_slot1 = var15;
        var5 = _closure1_slot3;
        var0 = var5.useState;
        var13 = 'Dark';
        var0 = var0.bind(var5)(var13);
        var7 = _closure1_slot2;
        var6 = 2;
        var0 = var7.bind(var3)(var0, var6);
        var2 = 0;
        var12 = var0[var2];
        var _closure2_slot2 = var12;
        var1 = 1;
        var0 = var0[var1];
        var _closure2_slot3 = var0;
        var9 = var5.useState;
        var0 = false;
        var0 = var9.bind(var5)(var0);
        var0 = var7.bind(var3)(var0, var6);
        var14 = var0[var2];
        var _closure2_slot4 = var14;
        var0 = var0[var1];
        var _closure2_slot5 = var0;
        var9 = var5.useState;
        var0 = _closure1_slot4;
        var0 = var0.bind(var3)();
        var0 = var0.blurEffectNameOverride;
        var0 = var9.bind(var5)(var0);
        var0 = var7.bind(var3)(var0, var6);
        var2 = var0[var2];
        var _closure2_slot6 = var2;
        var0 = var0[var1];
        var _closure2_slot7 = var0;
        var2 = var5.useCallback;
        var1 = function(arg0) { // Environment: var8
            _fun100005: for (var _fun100005_ip = 0;;) switch (_fun100005_ip) {
                case 0:
                    var4 = arg0;
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun100005_ip = 23;
                        continue _fun100005
                    }
                case 9:
                    var1 = _closure2_slot7;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var4);
                case 23:
                    var2 = _closure1_slot5;
                    var1 = {};
                    var3 = _closure1_slot4;
                    var0 = undefined;
                    var5 = var3.bind(var0)();
                    var6 = var1;
                    var3 = copyDataProperties(var6, var5);
                    var3 = 'blurEffectNameOverride';
                    var1[var3] = var4;
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var0 = new Array(0);
        var0 = var2.bind(var5)(var1, var0);
        var _closure2_slot8 = var0;
        var2 = _closure1_slot6;
        var7 = 6;
        var0 = var11[var7];
        var0 = var10.bind(var3)(var0);
        var1 = var0.FormRow;
        var0 = {};
        var6 = var15.zeroPaddingVertical;
        var5 = new Array(1);
        var5[0] = var6;
        var0.style = var5;
        var5 = 'Blur Effect Name';
        var0.label = var5;
        var5 = !var14;
        var0.disabled = var5;
        var5 = var15.enabledSwitchStyle;
        var0.leadingStyle = var5;
        var5 = 7;
        var5 = var11[var5];
        var5 = var10.bind(var3)(var5);
        var6 = var5.FormSwitch;
        var5 = {};
        var5.value = var14;
        var9 = function(arg0) { // Original name: onValueChange, environment: var8
            _fun100006: for (var _fun100006_ip = 0;;) switch (_fun100006_ip) {
                case 0:
                    var4 = arg0;
                    var1 = _closure2_slot5;
                    var0 = undefined;
                    var1 = var1.bind(var0)(var4);
                    var2 = _closure2_slot8;
                    var1 = undefined;
                    if (!var4) {
                        _fun100006_ip = 30;
                        continue _fun100006
                    }
                case 26:
                    var1 = _closure2_slot6;
                case 30:
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var5.onValueChange = var9;
        var5 = var2.bind(var3)(var6, var5);
        var0.leading = var5;
        var6 = _closure1_slot8;
        var5 = _closure1_slot7;
        var4 = {};
        var7 = var11[var7];
        var7 = var10.bind(var3)(var7);
        var9 = var7.FormSwitchRow;
        var7 = {};
        var16 = global;
        var16 = var16.HermesInternal;
        var17 = var16.concat;
        var16 = 'Theme: ';
        var16 = var17.bind(var16)(var12);
        var7.label = var16;
        var15 = var15.zeroPaddingHorizontal;
        var7.style = var15;
        var14 = !var14;
        var7.disabled = var14;
        var12 = var13 === var12;
        var7.value = var12;
        var12 = function() { // Original name: onValueChange, environment: var8
            _fun100007: for (var _fun100007_ip = 0;;) switch (_fun100007_ip) {
                case 0:
                    var2 = _closure2_slot3;
                    var0 = _closure2_slot2;
                    var1 = 'Dark';
                    if (!(var1 === var0)) {
                        _fun100007_ip = 27;
                        continue _fun100007
                    }
                case 21:
                    var1 = 'Light';
                case 27:
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var7.onValueChange = var12;
        var9 = var2.bind(var3)(var9, var7);
        var7 = new Array(2);
        var7[0] = var9;
        var9 = 8;
        var9 = var11[var9];
        var9 = var10.bind(var3)(var9);
        var11 = var9.BLUR_EFFECT_NAMES;
        var10 = var11.filter;
        var9 = function(arg0) { // Environment: var8
            var2 = arg0;
            var1 = var2.indexOf;
            var0 = _closure2_slot2;
            var1 = var1.bind(var2)(var0);
            var0 = -1;
            var0 = var0 !== var1;
            return var0;
        };
        var10 = var10.bind(var11)(var9);
        var9 = var10.map;
        var8 = function(arg0, arg1) { // Environment: var8
            var7 = arg0;
            var _closure3_slot0 = var7;
            var4 = _closure1_slot6;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 6;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.FormRadioRow;
            var1 = {};
            var9 = var7.replace;
            var8 = _closure2_slot2;
            var6 = '';
            var6 = var9.bind(var7)(var8, var6);
            var1.label = var6;
            var6 = _closure2_slot0;
            var6 = var6.radio;
            var1.labelStyle = var6;
            var6 = _closure2_slot1;
            var8 = var6.zeroPaddingHorizontal;
            var6 = new Array(2);
            var6[0] = var8;
            var8 = {};
            var9 = 1;
            var8.opacity = var9;
            var6[1] = var8;
            var1.style = var6;
            var6 = _closure2_slot6;
            var6 = var7 === var6;
            var1.selected = var6;
            var5 = _closure2_slot4;
            var5 = !var5;
            var1.disabled = var5;
            var0 = function() { // Original name: onPress, environment: var0
                var2 = _closure2_slot8;
                var1 = _closure3_slot0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1.onPress = var0;
            var0 = arg1;
            var0 = var4.bind(var3)(var2, var1, var0);
            return var0;
        };
        var8 = var9.bind(var10)(var8);
        var7[1] = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.subLabel = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/visual_effect_view/native/overrides/VEVOOPropBlurEffectName.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 4033, 33, 1297, 12984, 5340, 5379, 4034, 2]);