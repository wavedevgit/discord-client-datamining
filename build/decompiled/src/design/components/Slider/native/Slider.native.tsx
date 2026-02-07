// design/components/Slider/native/Slider.native.tsx
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
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var3.container = var8;
    var8 = {};
    var8.flex = var9;
    var3.slider = var8;
    var8 = {};
    var9 = 4;
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.REDESIGN_INPUT_CONTROL_SELECTED;
    var8.backgroundColor = var11;
    var3.minimumTrackTintColor = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_MUTED;
    var8.backgroundColor = var11;
    var3.maximumTrackTintColor = var8;
    var8 = {};
    var11 = var5[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var8.marginRight = var11;
    var3.startIcon = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.spacing;
    var9 = var9.PX_8;
    var8.marginLeft = var9;
    var3.endIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Slider/native/Slider.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun88950: for (var _fun88950_ip = 0;;) switch (_fun88950_ip) {
            case 0:
                var3 = arg0;
                var16 = var3.startIcon;
                var9 = var3.endIcon;
                var12 = var3.style;
                var7 = var3.onValueChange;
                var _closure2_slot0 = var7;
                var14 = var3.step;
                var _closure2_slot1 = var14;
                var2 = {
                    'startIcon': 0,
                    'endIcon': 0,
                    'style': 0,
                    'onValueChange': 0,
                    'step': 0
                };
                var5 = null;
                var20 = var2;
                var19 = null;
                var1 = silentSetPrototypeOf(var20, var19);
                var20 = {};
                var19 = var3;
                var18 = var2;
                var15 = copyDataProperties(var20, var19, var18);
                var1 = _closure1_slot7;
                var3 = undefined;
                var10 = var1.bind(var3)();
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var14;
                var1[1] = var7;
                var0 = function(arg0) { // Environment: var0
                    _fun88951: for (var _fun88951_ip = 0;;) switch (_fun88951_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun88951_ip = 71;
                                continue _fun88951
                            }
                        case 13:
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 5;
                            var3 = var7[var3];
                            var6 = undefined;
                            var4 = var4.bind(var6)(var3);
                            var3 = var4.triggerHapticFeedback;
                            var5 = _closure1_slot1;
                            var1 = 6;
                            var1 = var7[var1];
                            var1 = var5.bind(var6)(var1);
                            var1 = var1.IMPACT_LIGHT;
                            var1 = var3.bind(var4)(var1);
                        case 71:
                            var1 = _closure2_slot0;
                            if (!(var2 != var1)) {
                                _fun88951_ip = 93;
                                continue _fun88951
                            }
                        case 79:
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                        case 93:
                            var0 = undefined;
                            return var0;
                    }
                };
                var13 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var10.container;
                var0.style = var4;
                var4 = var5 != var16;
                var7 = null;
                if (!var4) {
                    _fun88950_ip = 184;
                    continue _fun88950
                }
            case 154:
                var11 = _closure1_slot5;
                var8 = _closure1_slot4;
                var4 = {};
                var17 = var10.startIcon;
                var4.style = var17;
                var4.children = var16;
                var7 = var11.bind(var3)(var8, var4);
            case 184:
                var4 = new Array(3);
                var4[0] = var7;
                var11 = _closure1_slot5;
                var8 = _closure1_slot1;
                var16 = _closure1_slot2;
                var7 = 7;
                var7 = var16[var7];
                var8 = var8.bind(var3)(var7);
                var7 = {};
                var20 = var7;
                var19 = var15;
                var15 = copyDataProperties(var20, var19);
                var16 = var10.slider;
                var15 = new Array(2);
                var15[0] = var16;
                var15[1] = var12;
                var12 = 'style';
                var7[var12] = var15;
                var12 = 'step';
                var7[var12] = var14;
                var12 = 'onValueChange';
                var7[var12] = var13;
                var12 = var10.minimumTrackTintColor;
                var13 = var12.backgroundColor;
                var12 = 'minimumTrackTintColor';
                var7[var12] = var13;
                var12 = var10.maximumTrackTintColor;
                var13 = var12.backgroundColor;
                var12 = 'maximumTrackTintColor';
                var7[var12] = var13;
                var13 = true;
                var12 = 'tapToSeek';
                var7[var12] = var13;
                var7 = var11.bind(var3)(var8, var7);
                var4[1] = var7;
                var7 = var5 != var9;
                var5 = null;
                if (!var7) {
                    _fun88950_ip = 373;
                    continue _fun88950
                }
            case 343:
                var8 = _closure1_slot5;
                var7 = _closure1_slot4;
                var6 = {};
                var10 = var10.endIcon;
                var6.style = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 373:
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.Slider = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3280, 3281, 5479, 2]);