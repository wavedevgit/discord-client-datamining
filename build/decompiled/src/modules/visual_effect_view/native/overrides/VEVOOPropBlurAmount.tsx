// modules/visual_effect_view/native/overrides/VEVOOPropBlurAmount.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.getVisualEffectViewOverrides;
    var _closure1_slot5 = var7;
    var3 = var3.setVisualEffectViewOverides;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 'flex-start';
    var9.alignSelf = var10;
    var3.enabledSwitchStyle = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot8 = var3;
    var3 = var6.memo;
    var1 = function() {
        _fun100041: for (var _fun100041_ip = 0;;) switch (_fun100041_ip) {
            case 0:
                var0 = _closure1_slot8;
                var3 = undefined;
                var6 = var0.bind(var3)();
                var7 = _closure1_slot4;
                var1 = var7.useState;
                var0 = false;
                var0 = var1.bind(var7)(var0);
                var9 = _closure1_slot3;
                var8 = 2;
                var0 = var9.bind(var3)(var0, var8);
                var2 = 0;
                var4 = var0[var2];
                var1 = 1;
                var0 = var0[var1];
                var _closure2_slot0 = var0;
                var10 = var7.useState;
                var0 = _closure1_slot5;
                var0 = var0.bind(var3)();
                var0 = var0.blurAmountOverride;
                var0 = var10.bind(var7)(var0);
                var0 = var9.bind(var3)(var0, var8);
                var14 = var0[var2];
                var _closure2_slot1 = var14;
                var0 = var0[var1];
                var _closure2_slot2 = var0;
                var0 = var7.useRef;
                var9 = var0.bind(var7)(var14);
                var2 = var7.useCallback;
                var1 = function(arg0) { // Environment: var12
                    _fun100042: for (var _fun100042_ip = 0;;) switch (_fun100042_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = null;
                            if (!(var0 != var4)) {
                                _fun100042_ip = 23;
                                continue _fun100042
                            }
                        case 9:
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var4);
                        case 23:
                            var2 = _closure1_slot6;
                            var1 = {};
                            var3 = _closure1_slot5;
                            var0 = undefined;
                            var5 = var3.bind(var0)();
                            var6 = var1;
                            var3 = copyDataProperties(var6, var5);
                            var3 = 'blurAmountOverride';
                            var1[var3] = var4;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var0 = new Array(0);
                var8 = var2.bind(var7)(var1, var0);
                var _closure2_slot3 = var8;
                var2 = _closure1_slot7;
                var1 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 5;
                var0 = var7[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.FormRow;
                var0 = {};
                var10 = null;
                var11 = var10 == var14;
                var7 = undefined;
                if (var11) {
                    _fun100041_ip = 200;
                    continue _fun100041
                }
            case 186:
                var13 = var14.toFixed;
                var11 = 3;
                var7 = var13.bind(var14)(var11);
            case 200:
                var10 = var10 != var7;
                var11 = '';
                if (!var10) {
                    _fun100041_ip = 214;
                    continue _fun100041
                }
            case 211:
                var11 = var7;
            case 214:
                var7 = global;
                var7 = var7.HermesInternal;
                var10 = var7.concat;
                var7 = 'Blur Amount ';
                var7 = var10.bind(var7)(var11);
                var0.label = var7;
                var6 = var6.enabledSwitchStyle;
                var0.leadingStyle = var6;
                var7 = _closure1_slot7;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var6 = 6;
                var6 = var10[var6];
                var6 = var11.bind(var3)(var6);
                var11 = var6.FormSwitch;
                var6 = {};
                var6.value = var4;
                var12 = function arg0() {
                    _fun100043: for (var _fun100043_ip = 0;;) switch (_fun100043_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = _closure2_slot0;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var4);
                            var2 = _closure2_slot3;
                            var1 = undefined;
                            if (!var4) {
                                _fun100043_ip = 30;
                                continue _fun100043
                            }
                        case 26:
                            var1 = _closure2_slot1;
                        case 30:
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var6.onValueChange = var12;
                var6 = var7.bind(var3)(var11, var6);
                var0.leading = var6;
                var6 = _closure1_slot1;
                var5 = 7;
                var5 = var10[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var10 = !var4;
                var5.disabled = var10;
                var10 = !var4;
                var5.disabledOpacity = var10;
                var5.initialValue = var9;
                var5.onValueChange = var8;
                var5 = var7.bind(var3)(var6, var5);
                var0.subLabel = var5;
                var4 = !var4;
                var0.disabled = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/visual_effect_view/native/overrides/VEVOOPropBlurAmount.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 4074, 33, 1297, 5378, 5417, 13033, 2]);