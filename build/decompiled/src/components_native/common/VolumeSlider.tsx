// components_native/common/VolumeSlider.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun67985: for (var _fun67985_ip = 0;;) switch (_fun67985_ip) {
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
            var7 = var6.View;
            var _closure1_slot3 = var7;
            var7 = var6.StyleSheet;
            var6 = 2;
            var6 = var5[var6];
            var6 = var4.bind(var0)(var6);
            var8 = var6.jsx;
            var _closure1_slot4 = var8;
            var6 = var6.jsxs;
            var _closure1_slot5 = var6;
            var6 = 3;
            var6 = var5[var6];
            var8 = var4.bind(var0)(var6);
            var6 = var8.isAndroid;
            var6 = var6.bind(var8)();
            var9 = 16;
            if (!var6) {
                _fun67985_ip = 161;
                continue _fun67985
            }
        case 159:
            var9 = 0;
        case 161:
            var6 = var7.create;
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
            var3 = 10;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'components_native/common/VolumeSlider.tsx';
            var3 = var4.bind(var5)(var3);
            var1 = function arg0() {
                _fun67986: for (var _fun67986_ip = 0;;) switch (_fun67986_ip) {
                    case 0:
                        var0 = arg0;
                        var5 = var0.style;
                        var12 = var0.minTrackColor;
                        var3 = undefined;
                        if (!(var12 === var3)) {
                            _fun67986_ip = 58;
                            continue _fun67986
                        }
                    case 24:
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 4;
                        var1 = var4[var1];
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.unsafe_rawColors;
                        var12 = var1.BRAND_500;
                    case 58:
                        var10 = var0.maxTrackTintColor;
                        if (!(var10 === var3)) {
                            _fun67986_ip = 102;
                            continue _fun67986
                        }
                    case 68:
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 4;
                        var1 = var4[var1];
                        var1 = var2.bind(var3)(var1);
                        var1 = var1.unsafe_rawColors;
                        var10 = var1.PRIMARY_400;
                    case 102:
                        var18 = var0.value;
                        var13 = var0.maxVolume;
                        if (!(var13 === var3)) {
                            _fun67986_ip = 120;
                            continue _fun67986
                        }
                    case 117:
                        var13 = 200;
                    case 120:
                        var1 = var0.onValueChange;
                        var _closure2_slot0 = var1;
                        var9 = var0.onResponderGrant;
                        var2 = _closure1_slot5;
                        var1 = _closure1_slot3;
                        var0 = {};
                        var4 = _closure1_slot6;
                        var6 = var4.volumerSlider;
                        var4 = new Array(2);
                        var4[0] = var6;
                        var4[1] = var5;
                        var0.style = var4;
                        var7 = _closure1_slot4;
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var4 = 5;
                        var4 = var15[var4];
                        var4 = var14.bind(var3)(var4);
                        var5 = var4.VoiceXIcon;
                        var4 = {};
                        var6 = _closure1_slot6;
                        var6 = var6.leftIcon;
                        var4.style = var6;
                        var5 = var7.bind(var3)(var5, var4);
                        var4 = new Array(3);
                        var4[0] = var5;
                        var6 = _closure1_slot1;
                        var5 = 6;
                        var5 = var15[var5];
                        var6 = var6.bind(var3)(var5);
                        var5 = {};
                        var16 = _closure1_slot6;
                        var16 = var16.volumerSliderNative;
                        var5.style = var16;
                        var16 = 7;
                        var16 = var15[var16];
                        var17 = var14.bind(var3)(var16);
                        var16 = var17.amplitudeToPerceptual;
                        var16 = var16.bind(var17)(var18);
                        var5.value = var16;
                        var16 = 0;
                        var5.minimumValue = var16;
                        var5.maximumValue = var13;
                        var5.minimumTrackTintColor = var12;
                        var5.maximumTrackTintColor = var10;
                        var10 = 8;
                        var12 = var15[var10];
                        var12 = var14.bind(var3)(var12);
                        var13 = var12.intl;
                        var12 = var13.string;
                        var10 = var15[var10];
                        var10 = var14.bind(var3)(var10);
                        var10 = var10.t;
                        var10 = var10.xPHVBs;
                        var10 = var12.bind(var13)(var10);
                        var5.accessibilityLabel = var10;
                        var10 = function arg0() {
                            var2 = _closure2_slot0;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var0 = var1[var0];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var0);
                            var3 = var4.perceptualToAmplitude;
                            var0 = arg0;
                            var0 = var3.bind(var4)(var0);
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var5.onValueChange = var10;
                        var10 = null;
                        if (!(var10 == var9)) {
                            _fun67986_ip = 430;
                            continue _fun67986
                        }
                    case 385:
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var10 = 3;
                        var10 = var13[var10];
                        var12 = var12.bind(var3)(var10);
                        var10 = var12.isAndroid;
                        var12 = var10.bind(var12)();
                        var10 = undefined;
                        if (!var12) {
                            _fun67986_ip = 427;
                            continue _fun67986
                        }
                    case 420:
                        var10 = function() { // Environment: var11
                            var0 = true;
                            return var0;
                        };
                    case 427:
                        var9 = var10;
                    case 430:
                        var5.onResponderGrant = var9;
                        var5 = var7.bind(var3)(var6, var5);
                        var4[1] = var5;
                        var7 = _closure1_slot4;
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 9;
                        var5 = var9[var5];
                        var5 = var6.bind(var3)(var5);
                        var6 = var5.VoiceNormalIcon;
                        var5 = {};
                        var8 = _closure1_slot6;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 478, 671, 8435, 5391, 3919, 1234, 4828, 2]);