// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun43692: for (var _fun43692_ip = 0;;) switch (_fun43692_ip) {
        case 0:
            var8 = require;
            var4 = metroImportDefault;
            var2 = exports;
            var9 = dependencyMap;
            var _closure1_slot0 = var8;
            var _closure1_slot1 = var4;
            var _closure1_slot2 = var9;
            var6 = global;
            var7 = var6.Object;
            var5 = var7.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var7)(var2, var0, var3);
            var0 = 0;
            var3 = var9[var0];
            var0 = undefined;
            var3 = var4.bind(var0)(var3);
            var _closure1_slot3 = var3;
            var7 = 1;
            var4 = var9[var7];
            var3 = metroImportAll;
            var3 = var3.bind(var0)(var4);
            var _closure1_slot4 = var3;
            var3 = 2;
            var3 = var9[var3];
            var3 = var8.bind(var0)(var3);
            var4 = var3.Animated;
            var _closure1_slot5 = var4;
            var10 = var3.I18nManager;
            var4 = var3.Image;
            var _closure1_slot6 = var4;
            var4 = var3.Platform;
            var5 = var3.StyleSheet;
            var3 = var3.View;
            var _closure1_slot7 = var3;
            var3 = 3;
            var3 = var9[var3];
            var3 = var8.bind(var0)(var3);
            var8 = var3.jsx;
            var _closure1_slot8 = var8;
            var3 = var3.jsxs;
            var _closure1_slot9 = var3;
            var3 = {
                'borderless': true,
                'foreground': null,
                'radius': 20
            };
            var8 = var4.Version;
            var4 = 23;
            var4 = var8 >= var4;
            var3.foreground = var4;
            var _closure1_slot10 = var3;
            var4 = var5.create;
            var3 = {};
            var11 = var6.Object;
            var9 = var11.assign;
            var8 = {
                'alignItems': 'center',
                'flexDirection': 'row'
            };
            var6 = var5.hairlineWidth;
            var8.minWidth = var6;
            var6 = {
                'marginVertical': 3,
                'marginHorizontal': 11
            };
            var6 = var9.bind(var11)(var8, var6);
            var3.container = var6;
            var6 = {};
            var8 = 0.5;
            var6.opacity = var8;
            var3.disabled = var6;
            var6 = {
                'fontSize': 17,
                'letterSpacing': 0.35
            };
            var3.label = var6;
            var6 = {
                'flexDirection': 'row',
                'alignItems': 'flex-start'
            };
            var3.labelWrapper = var6;
            var6 = {
                'height': 24,
                'width': 24,
                'margin': 3,
                'resizeMode': 'contain'
            };
            var9 = {};
            var8 = var10.getConstants;
            var8 = var8.bind(var10)();
            var11 = var8.isRTL;
            var8 = var7;
            if (!var11) {
                _fun43692_ip = 388;
                continue _fun43692
            }
        case 382:
            var8 = -1;
        case 388:
            var9.scaleX = var8;
            var8 = new Array(1);
            var8[0] = var9;
            var6.transform = var8;
            var3.icon = var6;
            var6 = {};
            var3.iconWithLabel = var6;
            var6 = {
                'flex': 1,
                'flexDirection': 'row',
                'justifyContent': 'center'
            };
            var3.iconMaskContainer = var6;
            var6 = {
                'flex': 1,
                'backgroundColor': '#000'
            };
            var3.iconMaskFillerRect = var6;
            var6 = {
                'height': 21,
                'width': 13,
                'marginLeft': -14.5,
                'marginVertical': 12,
                'alignSelf': 'center',
                'resizeMode': 'contain'
            };
            var8 = {};
            var9 = var10.getConstants;
            var9 = var9.bind(var10)();
            var9 = var9.isRTL;
            if (!var9) {
                _fun43692_ip = 495;
                continue _fun43692
            }
        case 489:
            var7 = -1;
        case 495:
            var8.scaleX = var7;
            var7 = new Array(1);
            var7[0] = var8;
            var6.transform = var7;
            var3.iconMask = var6;
            var3 = var4.bind(var5)(var3);
            var _closure1_slot11 = var3;
            var1 = function arg0() {
                _fun43693: for (var _fun43693_ip = 0;;) switch (_fun43693_ip) {
                    case 0:
                        var0 = arg0;
                        var6 = var0.disabled;
                        var1 = var0.allowFontScaling;
                        var _closure2_slot0 = var1;
                        var10 = var0.backImage;
                        var13 = var0.label;
                        var _closure2_slot1 = var13;
                        var1 = var0.labelStyle;
                        var _closure2_slot2 = var1;
                        var1 = var0.labelVisible;
                        var3 = undefined;
                        var18 = var3 !== var1;
                        if (!var18) {
                            _fun43693_ip = 63;
                            continue _fun43693
                        }
                    case 60:
                        var18 = var1;
                    case 63:
                        var _closure2_slot3 = var18;
                        var1 = var0.onLabelLayout;
                        var _closure2_slot4 = var1;
                        var1 = var0.onPress;
                        var _closure2_slot5 = var1;
                        var7 = var0.pressColor;
                        var4 = var0.pressOpacity;
                        var1 = var0.screenLayout;
                        var _closure2_slot6 = var1;
                        var11 = var0.tintColor;
                        var1 = var0.titleLayout;
                        var _closure2_slot7 = var1;
                        var5 = var0.truncatedLabel;
                        var2 = 'Back';
                        var1 = var2;
                        if (!(var3 !== var5)) {
                            _fun43693_ip = 144;
                            continue _fun43693
                        }
                    case 141:
                        var1 = var5;
                    case 144:
                        var _closure2_slot8 = var1;
                        var12 = var0.accessibilityLabel;
                        if (!(var3 === var12)) {
                            _fun43693_ip = 208;
                            continue _fun43693
                        }
                    case 157:
                        var5 = 'Go back';
                        var1 = var5;
                        if (!var13) {
                            _fun43693_ip = 205;
                            continue _fun43693
                        }
                    case 169:
                        var1 = var5;
                        if (!(var2 !== var13)) {
                            _fun43693_ip = 205;
                            continue _fun43693
                        }
                    case 176:
                        var2 = global;
                        var2 = var2.HermesInternal;
                        var9 = var2.concat;
                        var5 = '';
                        var2 = ', back';
                        var1 = var9.bind(var5)(var13, var2);
                    case 205:
                        var12 = var1;
                    case 208:
                        var9 = var0.testID;
                        var5 = var0.style;
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 4;
                        var0 = var2[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.useTheme;
                        var0 = var0.bind(var1)();
                        var0 = var0.colors;
                        var2 = _closure1_slot4;
                        var1 = var2.useState;
                        var13 = var1.bind(var2)(var3);
                        var2 = _closure1_slot3;
                        var1 = 2;
                        var2 = var2.bind(var3)(var13, var1);
                        var13 = 0;
                        var1 = var2[var13];
                        var _closure2_slot9 = var1;
                        var1 = 1;
                        var1 = var2[var1];
                        var _closure2_slot10 = var1;
                        if (!(var3 === var11)) {
                            _fun43693_ip = 314;
                            continue _fun43693
                        }
                    case 309:
                        var11 = var0.text;
                    case 314:
                        var _closure2_slot11 = var11;
                        var0 = function arg0() {
                            _fun43694: for (var _fun43694_ip = 0;;) switch (_fun43694_ip) {
                                case 0:
                                    var0 = arg0;
                                    var3 = _closure2_slot4;
                                    var2 = null;
                                    if (!(var2 != var3)) {
                                        _fun43694_ip = 27;
                                        continue _fun43694
                                    }
                                case 16:
                                    var3 = _closure2_slot4;
                                    var2 = undefined;
                                    var2 = var3.bind(var2)(var0);
                                case 27:
                                    var2 = _closure2_slot10;
                                    var1 = var0.nativeEvent;
                                    var1 = var1.layout;
                                    var1 = var1.x;
                                    var0 = var0.nativeEvent;
                                    var0 = var0.layout;
                                    var0 = var0.width;
                                    var1 = var1 + var0;
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var _closure2_slot12 = var0;
                        var2 = _closure1_slot8;
                        var1 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var0 = 8;
                        var0 = var15[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = {
                            'disabled': null,
                            'accessible': true,
                            'accessibilityRole': 'button'
                        };
                        var0.disabled = var6;
                        var0.accessibilityLabel = var12;
                        var0.testID = var9;
                        var9 = undefined;
                        if (var6) {
                            _fun43693_ip = 390;
                            continue _fun43693
                        }
                    case 385:
                        var9 = function() {
                            _fun43695: for (var _fun43695_ip = 0;;) switch (_fun43695_ip) {
                                case 0:
                                    var0 = _closure2_slot5;
                                    if (!var0) {
                                        _fun43695_ip = 29;
                                        continue _fun43695
                                    }
                                case 10:
                                    var2 = global;
                                    var3 = var2.requestAnimationFrame;
                                    var2 = _closure2_slot5;
                                    var1 = undefined;
                                    var0 = var3.bind(var1)(var2);
                                case 29:
                                    return var0;
                            }
                        };
                    case 390:
                        var0.onPress = var9;
                        var0.pressColor = var7;
                        var0.pressOpacity = var4;
                        var4 = _closure1_slot10;
                        var0.android_ripple = var4;
                        var4 = _closure1_slot11;
                        var7 = var4.container;
                        var4 = new Array(3);
                        var4[0] = var7;
                        if (!var6) {
                            _fun43693_ip = 442;
                            continue _fun43693
                        }
                    case 433:
                        var7 = _closure1_slot11;
                        var6 = var7.disabled;
                    case 442:
                        var4[1] = var6;
                        var4[2] = var5;
                        var0.style = var4;
                        var4 = {
                            'top': 16,
                            'right': 16,
                            'bottom': 16,
                            'left': 16
                        };
                        var0.hitSlop = var4;
                        var6 = _closure1_slot9;
                        var4 = _closure1_slot4;
                        var5 = var4.Fragment;
                        var4 = {};
                        if (var10) {
                            _fun43693_ip = 621;
                            continue _fun43693
                        }
                    case 495:
                        var12 = _closure1_slot8;
                        var9 = _closure1_slot6;
                        var7 = {};
                        var15 = _closure1_slot11;
                        var16 = var15.icon;
                        var15 = new Array(3);
                        var15[0] = var16;
                        var16 = global;
                        var17 = var16.Boolean;
                        var17 = var17.bind(var3)(var18);
                        if (!var17) {
                            _fun43693_ip = 548;
                            continue _fun43693
                        }
                    case 538:
                        var18 = _closure1_slot11;
                        var17 = var18.iconWithLabel;
                    case 548:
                        var15[1] = var17;
                        var16 = var16.Boolean;
                        var16 = var16.bind(var3)(var11);
                        if (!var16) {
                            _fun43693_ip = 576;
                            continue _fun43693
                        }
                    case 566:
                        var17 = {};
                        var17.tintColor = var11;
                        var16 = var17;
                    case 576:
                        var15[2] = var16;
                        var7.style = var15;
                        var15 = _closure1_slot0;
                        var16 = _closure1_slot2;
                        var14 = 5;
                        var14 = var16[var14];
                        var14 = var15.bind(var3)(var14);
                        var7.source = var14;
                        var7.fadeDuration = var13;
                        var9 = var12.bind(var3)(var9, var7);
                        _fun43693_ip = 633;
                        continue _fun43693;
                    case 621:
                        var7 = {};
                        var7.tintColor = var11;
                        var9 = var10.bind(var3)(var7);
                    case 633:
                        var7 = new Array(2);
                        var7[0] = var9;
                        var8 = function() {
                            _fun43696: for (var _fun43696_ip = 0;;) switch (_fun43696_ip) {
                                case 0:
                                    var0 = _closure2_slot1;
                                    var0 = !var0;
                                    if (var0) {
                                        _fun43696_ip = 81;
                                        continue _fun43696
                                    }
                                case 13:
                                    var1 = _closure2_slot9;
                                    if (!var1) {
                                        _fun43696_ip = 24;
                                        continue _fun43696
                                    }
                                case 20:
                                    var1 = _closure2_slot7;
                                case 24:
                                    if (!var1) {
                                        _fun43696_ip = 31;
                                        continue _fun43696
                                    }
                                case 27:
                                    var1 = _closure2_slot6;
                                case 31:
                                    if (!var1) {
                                        _fun43696_ip = 78;
                                        continue _fun43696
                                    }
                                case 34:
                                    var2 = _closure2_slot6;
                                    var3 = var2.width;
                                    var2 = _closure2_slot7;
                                    var2 = var2.width;
                                    var3 = var3 - var2;
                                    var2 = 2;
                                    var3 = var3 / var2;
                                    var4 = _closure2_slot9;
                                    var2 = 26;
                                    var2 = var4 + var2;
                                    var1 = var3 < var2;
                                case 78:
                                    var0 = var1;
                                case 81:
                                    if (var0) {
                                        _fun43696_ip = 90;
                                        continue _fun43696
                                    }
                                case 84:
                                    var7 = _closure2_slot1;
                                    _fun43696_ip = 94;
                                    continue _fun43696;
                                case 90:
                                    var7 = _closure2_slot8;
                                case 94:
                                    var0 = _closure2_slot3;
                                    if (!var0) {
                                        _fun43696_ip = 334;
                                        continue _fun43696
                                    }
                                case 104:
                                    var3 = undefined;
                                    if (!(var3 !== var7)) {
                                        _fun43696_ip = 334;
                                        continue _fun43696
                                    }
                                case 113:
                                    var2 = _closure1_slot8;
                                    var1 = _closure1_slot7;
                                    var0 = {};
                                    var5 = _closure2_slot6;
                                    var4 = null;
                                    if (!var5) {
                                        _fun43696_ip = 190;
                                        continue _fun43696
                                    }
                                case 135:
                                    var5 = _closure1_slot11;
                                    var6 = var5.labelWrapper;
                                    var5 = new Array(2);
                                    var5[0] = var6;
                                    var6 = {};
                                    var11 = _closure2_slot6;
                                    var12 = var11.width;
                                    var11 = 2;
                                    var12 = var12 / var11;
                                    var11 = 27;
                                    var11 = var12 - var11;
                                    var6.minWidth = var11;
                                    var5[1] = var6;
                                    var4 = var5;
                                case 190:
                                    var0.style = var4;
                                    var6 = _closure1_slot8;
                                    var4 = _closure1_slot5;
                                    var5 = var4.Text;
                                    var4 = {};
                                    var11 = false;
                                    var4.accessible = var11;
                                    var12 = _closure2_slot1;
                                    var11 = undefined;
                                    if (!(var7 === var12)) {
                                        _fun43696_ip = 229;
                                        continue _fun43696
                                    }
                                case 225:
                                    var11 = _closure2_slot12;
                                case 229:
                                    var4.onLayout = var11;
                                    var9 = _closure1_slot11;
                                    var11 = var9.label;
                                    var9 = new Array(3);
                                    var9[0] = var11;
                                    var11 = _closure2_slot11;
                                    var10 = null;
                                    if (!var11) {
                                        _fun43696_ip = 273;
                                        continue _fun43696
                                    }
                                case 260:
                                    var11 = {};
                                    var12 = _closure2_slot11;
                                    var11.color = var12;
                                    var10 = var11;
                                case 273:
                                    var9[1] = var10;
                                    var10 = _closure2_slot2;
                                    var9[2] = var10;
                                    var4.style = var9;
                                    var9 = 1;
                                    var4.numberOfLines = var9;
                                    var8 = _closure2_slot0;
                                    var8 = !var8;
                                    var8 = !var8;
                                    var4.allowFontScaling = var8;
                                    var4.children = var7;
                                    var4 = var6.bind(var3)(var5, var4);
                                    var0.children = var4;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                                case 334:
                                    var0 = null;
                                    return var0;
                            }
                        };
                        var8 = var8.bind(var3)();
                        var7[1] = var8;
                        var4.children = var7;
                        var4 = var6.bind(var3)(var5, var4);
                        var0.children = var4;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                }
            };
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1470, 4710, 4722, 4711, 4724]);