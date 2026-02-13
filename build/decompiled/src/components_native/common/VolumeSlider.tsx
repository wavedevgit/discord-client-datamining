// components_native/common/VolumeSlider.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun68695: for (var _fun68695_ip = 0;;) switch (_fun68695_ip) {
        case 0:
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
            var3 = 0;
            var7 = var5[var3];
            var6 = metroImportAll;
            var0 = undefined;
            var6 = var6.bind(var0)(var7);
            var6 = 1;
            var6 = var5[var6];
            var6 = var4.bind(var0)(var6);
            var6 = var6.View;
            var _closure1_slot3 = var6;
            var6 = 2;
            var6 = var5[var6];
            var6 = var4.bind(var0)(var6);
            var7 = var6.jsx;
            var _closure1_slot4 = var7;
            var6 = var6.jsxs;
            var _closure1_slot5 = var6;
            var6 = 3;
            var6 = var5[var6];
            var7 = var4.bind(var0)(var6);
            var6 = var7.isAndroid;
            var6 = var6.bind(var7)();
            var9 = 16;
            if (!var6) {
                _fun68695_ip = 155;
                continue _fun68695
            }
        case 153:
            var9 = 0;
        case 155:
            var3 = 4;
            var3 = var5[var3];
            var7 = var4.bind(var0)(var3);
            var6 = var7.createStyles;
            var3 = {};
            var8 = {
                'flexDirection': 'row',
                'alignItems': 'center'
            };
            var3.volumerSlider = var8;
            var8 = {};
            var8.marginRight = var9;
            var3.leftIcon = var8;
            var8 = {};
            var8.marginLeft = var9;
            var3.rightIcon = var8;
            var8 = {
                'flex': 1,
                'marginVertical': 4294967286,
                'backgroundColor': 'transparent'
            };
            var3.volumerSliderNative = var8;
            var3 = var6.bind(var7)(var3);
            var _closure1_slot6 = var3;
            var3 = 11;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'components_native/common/VolumeSlider.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                _fun68696: for (var _fun68696_ip = 0;;) switch (_fun68696_ip) {
                    case 0:
                        var0 = arg0;
                        var6 = var0.style;
                        var13 = var0.minTrackColor;
                        var3 = undefined;
                        if (!(var13 === var3)) {
                            _fun68696_ip = 58;
                            continue _fun68696
                        }
                    case 24:
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 5;
                        var1 = var4[var1];
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.unsafe_rawColors;
                        var13 = var1.BRAND_500;
                    case 58:
                        var11 = var0.maxTrackTintColor;
                        if (!(var11 === var3)) {
                            _fun68696_ip = 102;
                            continue _fun68696
                        }
                    case 68:
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 5;
                        var1 = var4[var1];
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.unsafe_rawColors;
                        var11 = var1.PRIMARY_400;
                    case 102:
                        var19 = var0.value;
                        var14 = var0.maxVolume;
                        if (!(var14 === var3)) {
                            _fun68696_ip = 120;
                            continue _fun68696
                        }
                    case 117:
                        var14 = 200;
                    case 120:
                        var1 = var0.onValueChange;
                        var _closure2_slot0 = var1;
                        var10 = var0.onResponderGrant;
                        var0 = _closure1_slot6;
                        var8 = var0.bind(var3)();
                        var2 = _closure1_slot5;
                        var1 = _closure1_slot3;
                        var0 = {};
                        var7 = var8.volumerSlider;
                        var4 = new Array(2);
                        var4[0] = var7;
                        var4[1] = var6;
                        var0.style = var4;
                        var9 = _closure1_slot4;
                        var15 = _closure1_slot0;
                        var16 = _closure1_slot2;
                        var4 = 6;
                        var4 = var16[var4];
                        var4 = var15.bind(var3)(var4);
                        var6 = var4.VoiceXIcon;
                        var4 = {};
                        var7 = var8.leftIcon;
                        var4.style = var7;
                        var6 = var9.bind(var3)(var6, var4);
                        var4 = new Array(3);
                        var4[0] = var6;
                        var7 = _closure1_slot1;
                        var6 = 7;
                        var6 = var16[var6];
                        var7 = var7.bind(var3)(var6);
                        var6 = {};
                        var17 = var8.volumerSliderNative;
                        var6.style = var17;
                        var17 = 8;
                        var17 = var16[var17];
                        var18 = var15.bind(var3)(var17);
                        var17 = var18.amplitudeToPerceptual;
                        var17 = var17.bind(var18)(var19);
                        var6.value = var17;
                        var17 = 0;
                        var6.minimumValue = var17;
                        var6.maximumValue = var14;
                        var6.minimumTrackTintColor = var13;
                        var6.maximumTrackTintColor = var11;
                        var11 = 9;
                        var13 = var16[var11];
                        var13 = var15.bind(var3)(var13);
                        var14 = var13.intl;
                        var13 = var14.string;
                        var11 = var16[var11];
                        var11 = var15.bind(var3)(var11);
                        var11 = var11.t;
                        var11 = var11.xPHVBs;
                        var11 = var13.bind(var14)(var11);
                        var6.accessibilityLabel = var11;
                        var11 = function arg0() {
                            var2 = _closure2_slot0;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var0 = var1[var0];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var0);
                            var3 = var4.perceptualToAmplitude;
                            var0 = arg0;
                            var0 = var3.bind(var4)(var0);
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var6.onValueChange = var11;
                        var11 = null;
                        if (!(var11 == var10)) {
                            _fun68696_ip = 426;
                            continue _fun68696
                        }
                    case 381:
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var11 = 3;
                        var11 = var14[var11];
                        var13 = var13.bind(var3)(var11);
                        var11 = var13.isAndroid;
                        var13 = var11.bind(var13)();
                        var11 = undefined;
                        if (!var13) {
                            _fun68696_ip = 423;
                            continue _fun68696
                        }
                    case 416:
                        var11 = function() { // Environment: var12
                            var0 = true;
                            return var0;
                        };
                    case 423:
                        var10 = var11;
                    case 426:
                        var6.onResponderGrant = var10;
                        var6 = var9.bind(var3)(var7, var6);
                        var4[1] = var6;
                        var7 = _closure1_slot4;
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 10;
                        var5 = var9[var5];
                        var5 = var6.bind(var3)(var5);
                        var6 = var5.VoiceNormalIcon;
                        var5 = {};
                        var8 = var8.rightIcon;
                        var5.style = var8;
                        var5 = var7.bind(var3)(var6, var5);
                        var4[2] = var5;
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 478, 1297, 671, 8537, 5487, 3954, 1235, 4870, 2]);