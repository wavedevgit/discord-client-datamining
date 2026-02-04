// modules/visual_effect_view/native/overrides/VEVOOPropBlurTintRgba.tsx
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.getVisualEffectViewOverrides;
    var _closure1_slot6 = var7;
    var3 = var3.setVisualEffectViewOverides;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot8 = var7;
    var7 = var3.Fragment;
    var _closure1_slot9 = var7;
    var3 = var3.jsxs;
    var _closure1_slot10 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 6;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_32;
    var9.width = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_32;
    var9.height = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.PRIMARY_700;
    var9.backgroundColor = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9.borderRadius = var10;
    var3.tintColor = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot11 = var3;
    var3 = var6.memo;
    var1 = function() {
        _fun100048: for (var _fun100048_ip = 0;;) switch (_fun100048_ip) {
            case 0:
                var0 = _closure1_slot11;
                var3 = undefined;
                var21 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useVisualEffectViewOverrideSharedStyles;
                var13 = var0.bind(var1)();
                var7 = _closure1_slot4;
                var1 = var7.useState;
                var0 = false;
                var1 = var1.bind(var7)(var0);
                var0 = _closure1_slot3;
                var8 = 2;
                var0 = var0.bind(var3)(var1, var8);
                var2 = 0;
                var5 = var0[var2];
                var1 = 1;
                var0 = var0[var1];
                var _closure2_slot0 = var0;
                var6 = var7.useState;
                var0 = _closure1_slot6;
                var0 = var0.bind(var3)();
                var9 = var0.blurTintRgbaOverrideHex;
                var14 = null;
                var10 = var14 != var9;
                var0 = 'black';
                if (!var10) {
                    _fun100048_ip = 128;
                    continue _fun100048
                }
            case 125:
                var0 = var9;
            case 128:
                var0 = var6.bind(var7)(var0);
                var7 = _closure1_slot3;
                var0 = var7.bind(var3)(var0, var8);
                var23 = var0[var2];
                var _closure2_slot1 = var23;
                var0 = var0[var1];
                var _closure2_slot2 = var0;
                var6 = _closure1_slot4;
                var9 = var6.useState;
                var0 = _closure1_slot6;
                var0 = var0.bind(var3)();
                var0 = var0.blurTintRgbaOverrideOpacity;
                var0 = var9.bind(var6)(var0);
                var0 = var7.bind(var3)(var0, var8);
                var18 = var0[var2];
                var _closure2_slot3 = var18;
                var0 = var0[var1];
                var _closure2_slot4 = var0;
                var0 = var6.useRef;
                var15 = var0.bind(var6)(var18);
                var2 = var6.useCallback;
                var1 = function(arg0, arg1) { // Environment: var4
                    _fun100049: for (var _fun100049_ip = 0;;) switch (_fun100049_ip) {
                        case 0:
                            var7 = arg0;
                            var8 = arg1;
                            var6 = null;
                            if (!(var6 != var7)) {
                                _fun100049_ip = 28;
                                continue _fun100049
                            }
                        case 14:
                            var2 = _closure2_slot2;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var7);
                        case 28:
                            if (!(var6 != var8)) {
                                _fun100049_ip = 46;
                                continue _fun100049
                            }
                        case 32:
                            var2 = _closure2_slot4;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var8);
                        case 46:
                            var2 = var6 != var7;
                            var0 = undefined;
                            var3 = undefined;
                            if (!var2) {
                                _fun100049_ip = 101;
                                continue _fun100049
                            }
                        case 57:
                            var2 = var6 != var8;
                            var3 = undefined;
                            if (!var2) {
                                _fun100049_ip = 101;
                                continue _fun100049
                            }
                        case 66:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 8;
                            var2 = var5[var2];
                            var4 = var4.bind(var0)(var2);
                            var2 = var4.hexToRgbaString;
                            var3 = var2.bind(var4)(var7, var8);
                        case 101:
                            var4 = {};
                            var5 = _closure1_slot6;
                            var9 = var5.bind(var0)();
                            var10 = var4;
                            var5 = copyDataProperties(var10, var9);
                            var5 = 'blurTintRgbaOverrideOpacity';
                            var4[var5] = var8;
                            var5 = 'blurTintRgbaOverrideHex';
                            var4[var5] = var7;
                            var5 = 'blurTintRgbaOverride';
                            var4[var5] = var3;
                            var _closure3_slot0 = var4;
                            if (!(var6 != var3)) {
                                _fun100049_ip = 173;
                                continue _fun100049
                            }
                        case 162:
                            var3 = _closure1_slot7;
                            var3 = var3.bind(var0)(var4);
                            _fun100049_ip = 225;
                            continue _fun100049;
                        case 173:
                            var3 = _closure1_slot7;
                            var2 = {};
                            var10 = var2;
                            var9 = var4;
                            var4 = copyDataProperties(var10, var9);
                            var4 = 'rgba(0, 0, 0, 0)';
                            var2[var5] = var4;
                            var2 = var3.bind(var0)(var2);
                            var2 = global;
                            var2 = var2.setTimeout;
                            var1 = function() { // Environment: var1
                                var2 = _closure1_slot7;
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var2.bind(var0)(var1);
                        case 225:
                            return var0;
                    }
                };
                var0 = new Array(0);
                var0 = var2.bind(var6)(var1, var0);
                var _closure2_slot5 = var0;
                var2 = _closure1_slot8;
                var11 = _closure1_slot0;
                var16 = _closure1_slot2;
                var10 = 9;
                var0 = var16[var10];
                var0 = var11.bind(var3)(var0);
                var1 = var0.FormRow;
                var0 = {};
                var7 = var13.zeroPaddingVertical;
                var6 = new Array(1);
                var6[0] = var7;
                var0.style = var6;
                var6 = var13.zeroHeight;
                var0.labelStyle = var6;
                var6 = var13.enabledSwitchStyle;
                var0.leadingStyle = var6;
                var6 = 10;
                var6 = var16[var6];
                var6 = var11.bind(var3)(var6);
                var7 = var6.FormSwitch;
                var6 = {};
                var6.value = var5;
                var8 = function arg0() {
                    _fun100051: for (var _fun100051_ip = 0;;) switch (_fun100051_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure2_slot0;
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var3 = _closure2_slot5;
                            if (var2) {
                                _fun100051_ip = 32;
                                continue _fun100051
                            }
                        case 24:
                            var2 = var3.bind(var0)(var0, var0);
                            _fun100051_ip = 46;
                            continue _fun100051;
                        case 32:
                            var2 = _closure2_slot1;
                            var1 = _closure2_slot3;
                            var1 = var3.bind(var0)(var2, var1);
                        case 46:
                            return var0;
                    }
                };
                var6.onValueChange = var8;
                var6 = var2.bind(var3)(var7, var6);
                var0.leading = var6;
                var8 = _closure1_slot10;
                var7 = _closure1_slot9;
                var6 = {};
                var9 = var16[var10];
                var9 = var11.bind(var3)(var9);
                var17 = var9.FormRow;
                var9 = {};
                var19 = var13.zeroPadding;
                var9.style = var19;
                var19 = 'Blur Tint';
                var9.label = var19;
                var20 = _closure1_slot5;
                var19 = {};
                var22 = var21.tintColor;
                var21 = new Array(2);
                var21[0] = var22;
                var22 = {};
                var22.backgroundColor = var23;
                var21[1] = var22;
                var19.style = var21;
                var19 = var2.bind(var3)(var20, var19);
                var9.trailing = var19;
                var17 = var2.bind(var3)(var17, var9);
                var9 = new Array(2);
                var9[0] = var17;
                var10 = var16[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.FormRow;
                var10 = {};
                var13 = var13.zeroPaddingHorizontal;
                var10.style = var13;
                var13 = !var5;
                var10.disabled = var13;
                var16 = var14 == var18;
                var13 = undefined;
                if (var16) {
                    _fun100048_ip = 529;
                    continue _fun100048
                }
            case 515:
                var17 = var18.toFixed;
                var16 = 3;
                var13 = var17.bind(var18)(var16);
            case 529:
                var14 = var14 != var13;
                var16 = '';
                if (!var14) {
                    _fun100048_ip = 543;
                    continue _fun100048
                }
            case 540:
                var16 = var13;
            case 543:
                var13 = global;
                var13 = var13.HermesInternal;
                var14 = var13.concat;
                var13 = 'Blur Tint Opacity ';
                var13 = var14.bind(var13)(var16);
                var10.label = var13;
                var14 = _closure1_slot8;
                var13 = _closure1_slot1;
                var16 = _closure1_slot2;
                var12 = 11;
                var12 = var16[var12];
                var13 = var13.bind(var3)(var12);
                var12 = {};
                var16 = !var5;
                var12.disabled = var16;
                var12.initialValue = var15;
                var15 = function arg0() {
                    var3 = _closure2_slot5;
                    var2 = _closure2_slot1;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var12.onValueChange = var15;
                var12 = var14.bind(var3)(var13, var12);
                var10.subLabel = var12;
                var10 = var2.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var0.subLabel = var6;
                var5 = !var5;
                var0.disabled = var5;
                var4 = function() {
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var0 = 12;
                    var1 = var5[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = {};
                    var4 = _closure1_slot0;
                    var3 = 13;
                    var3 = var5[var3];
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.hex2int;
                    var3 = _closure2_slot1;
                    var3 = var4.bind(var5)(var3);
                    var1.color = var3;
                    var3 = function arg0() {
                        var3 = _closure2_slot5;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 13;
                        var2 = var2[var0];
                        var0 = undefined;
                        var5 = var4.bind(var0)(var2);
                        var4 = var5.int2hex;
                        var2 = arg0;
                        var2 = var4.bind(var5)(var2);
                        var1 = _closure2_slot3;
                        var1 = var3.bind(var0)(var2, var1);
                        return var0;
                    };
                    var1.onSelect = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/visual_effect_view/native/overrides/VEVOOPropBlurTintRgba.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4074, 33, 1297, 671, 13031, 3240, 5378, 5417, 13033, 10209, 668, 2]);