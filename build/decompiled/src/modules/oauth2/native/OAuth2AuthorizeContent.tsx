// modules/oauth2/native/OAuth2AuthorizeContent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        _fun62279: for (var _fun62279_ip = 0;;) switch (_fun62279_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.layoutMeasurement;
                var1 = var0.contentOffset;
                var3 = undefined;
                if (!(var1 === var3)) {
                    _fun62279_ip = 32;
                    continue _fun62279
                }
            case 21:
                var3 = {};
                var4 = 0;
                var3.y = var4;
                var1 = var3;
            case 32:
                var0 = var0.contentSize;
                var2 = var2.height;
                var1 = var1.y;
                var1 = var2 + var1;
                var2 = var0.height;
                var0 = 5;
                var0 = var2 - var0;
                var0 = var1 >= var0;
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var6 = var5[var11];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var6 = var3.Fragment;
    var _closure1_slot8 = var6;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var11;
    var3.fill = var8;
    var8 = {
        'flex': 1,
        'backgroundColor': null,
        'paddingHorizontal': 16
    };
    var9 = 5;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var12;
    var12 = 16;
    var3.scrollView = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'flex-start',
        'width': '100%',
        'flexGrow': 1,
        'gap': 16
    };
    var3.scrollViewContentLandscape = var8;
    var8 = {
        'flexDirection': 'column',
        'width': '100%',
        'flexGrow': 1,
        'gap': 16
    };
    var3.scrollViewContentPortrait = var8;
    var8 = {};
    var13 = 24;
    var8.paddingTop = var13;
    var3.header = var8;
    var8 = {
        'flexDirection': 'column',
        'gap': 16,
        'padding': 16
    };
    var3.bodyContainer = var8;
    var8 = {};
    var8.marginHorizontal = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var8.backgroundColor = var12;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.lg;
    var8.borderRadius = var12;
    var3.bodyContainerBackground = var8;
    var8 = {
        'flexDirection': 'column',
        'padding': 16,
        'gap': 16
    };
    var3.footerPortrait = var8;
    var8 = {};
    var8.height = var11;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BORDER_SUBTLE;
    var8.backgroundColor = var9;
    var3.separator = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/oauth2/native/OAuth2AuthorizeContent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun62280: for (var _fun62280_ip = 0;;) switch (_fun62280_ip) {
            case 0:
                var1 = arg0;
                var16 = var1.header;
                var17 = var1.body;
                var9 = var1.footer;
                var19 = var1.appDetails;
                var8 = var1.centerContent;
                var0 = var1.setAllContentSeen;
                var _closure2_slot0 = var0;
                var18 = var1.hasContentBackground;
                var1 = var1.onScroll;
                var _closure2_slot1 = var1;
                var3 = undefined;
                var _closure2_slot8 = var3;
                var1 = _closure1_slot10;
                var10 = var1.bind(var3)();
                var27 = _closure1_slot4;
                var1 = var27.useRef;
                var5 = null;
                var12 = var1.bind(var27)(var5);
                var _closure2_slot2 = var12;
                var2 = _closure1_slot1;
                var21 = _closure1_slot2;
                var1 = 6;
                var1 = var21[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var15 = var1.width;
                var14 = var1.height;
                var1 = 7;
                var1 = var21[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var23 = var1.left;
                var22 = var1.right;
                var20 = var1.bottom;
                var1 = var27.useState;
                var26 = -1;
                var1 = var1.bind(var27)(var26);
                var25 = _closure1_slot3;
                var2 = 2;
                var1 = var25.bind(var3)(var1, var2);
                var4 = 0;
                var24 = var1[var4];
                var _closure2_slot3 = var24;
                var13 = 1;
                var1 = var1[var13];
                var _closure2_slot4 = var1;
                var1 = var27.useState;
                var1 = var1.bind(var27)(var26);
                var1 = var25.bind(var3)(var1, var2);
                var7 = var1[var4];
                var _closure2_slot5 = var7;
                var1 = var1[var13];
                var _closure2_slot6 = var1;
                var1 = var27.useState;
                var1 = var1.bind(var27)(var26);
                var1 = var25.bind(var3)(var1, var2);
                var2 = var1[var4];
                var1 = var1[var13];
                var _closure2_slot7 = var1;
                var13 = _closure1_slot0;
                var1 = 8;
                var1 = var21[var1];
                var1 = var13.bind(var3)(var1);
                var21 = var1.ActivityDMNoPushExperiment;
                var13 = var21.useExperiment;
                var1 = {};
                var25 = 'oauth2_authorize';
                var1.location = var25;
                var13 = var13.bind(var21)(var1);
                var21 = var24 >= var4;
                if (!var21) {
                    _fun62280_ip = 327;
                    continue _fun62280
                }
            case 323:
                var21 = var7 >= var4;
            case 327:
                if (!var21) {
                    _fun62280_ip = 344;
                    continue _fun62280
                }
            case 330:
                var1 = var5 == var9;
                if (var1) {
                    _fun62280_ip = 341;
                    continue _fun62280
                }
            case 337:
                var1 = var2 >= var4;
            case 341:
                var21 = var1;
            case 344:
                _closure2_slot8 = var21;
                var4 = _closure1_slot4;
                var2 = var4.useLayoutEffect;
                var1 = new Array(4);
                var1[0] = var24;
                var1[1] = var21;
                var1[2] = var7;
                var1[3] = var0;
                var0 = function() { // Environment: var11
                    _fun62281: for (var _fun62281_ip = 0;;) switch (_fun62281_ip) {
                        case 0:
                            var1 = _closure2_slot8;
                            if (!var1) {
                                _fun62281_ip = 97;
                                continue _fun62281
                            }
                        case 10:
                            var3 = _closure1_slot11;
                            var1 = {};
                            var2 = {};
                            var4 = _closure2_slot5;
                            var2.height = var4;
                            var1.layoutMeasurement = var2;
                            var2 = {};
                            var4 = _closure2_slot3;
                            var2.height = var4;
                            var1.contentSize = var2;
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = _closure2_slot0;
                            var1 = null;
                            if (var4) {
                                _fun62281_ip = 82;
                                continue _fun62281
                            }
                        case 65:
                            if (!(var1 != var3)) {
                                _fun62281_ip = 97;
                                continue _fun62281
                            }
                        case 69:
                            var5 = _closure2_slot0;
                            var4 = false;
                            var4 = var5.bind(var2)(var4);
                            _fun62281_ip = 97;
                            continue _fun62281;
                        case 82:
                            if (!(var1 != var3)) {
                                _fun62281_ip = 97;
                                continue _fun62281
                            }
                        case 86:
                            var1 = _closure2_slot0;
                            var0 = true;
                            var0 = var1.bind(var2)(var0);
                        case 97:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot9;
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 9;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var7 = var10.fill;
                var4 = new Array(2);
                var4[0] = var7;
                var7 = {};
                var7.marginBottom = var20;
                var4[1] = var7;
                var0.style = var4;
                var7 = _closure1_slot6;
                var4 = {};
                var21 = var10.scrollView;
                var20 = new Array(2);
                var20[0] = var21;
                var21 = {};
                var21.paddingLeft = var23;
                var21.paddingRight = var22;
                var20[1] = var21;
                var4.style = var20;
                if (!(!(var15 > var14))) {
                    _fun62280_ip = 495;
                    continue _fun62280
                }
            case 487:
                var15 = var10.scrollViewContentPortrait;
                _fun62280_ip = 501;
                continue _fun62280;
            case 495:
                var15 = var10.scrollViewContentLandscape;
            case 501:
                var14 = new Array(1);
                var14[0] = var15;
                var4.contentContainerStyle = var14;
                var4.ref = var12;
                var12 = function arg0, arg1() {
                    _fun62282: for (var _fun62282_ip = 0;;) switch (_fun62282_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            var3 = var1.current;
                            var1 = null;
                            if (!(var1 != var3)) {
                                _fun62282_ip = 37;
                                continue _fun62282
                            }
                        case 18:
                            var2 = var3.scrollTo;
                            var1 = {};
                            var4 = 0;
                            var1.y = var4;
                            var1 = var2.bind(var3)(var1);
                        case 37:
                            var2 = _closure2_slot4;
                            var0 = undefined;
                            var1 = arg1;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var4.onContentSizeChange = var12;
                var12 = 16;
                var4.scrollEventThrottle = var12;
                var12 = function arg0() {
                    var2 = _closure2_slot6;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var1 = var0.height;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var4.onLayout = var12;
                var12 = function arg0() {
                    _fun62284: for (var _fun62284_ip = 0;;) switch (_fun62284_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure1_slot11;
                            var1 = var2.nativeEvent;
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            if (!var1) {
                                _fun62284_ip = 50;
                                continue _fun62284
                            }
                        case 26:
                            var4 = _closure2_slot0;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun62284_ip = 50;
                                continue _fun62284
                            }
                        case 39:
                            var3 = _closure2_slot0;
                            var1 = true;
                            var1 = var3.bind(var0)(var1);
                        case 50:
                            var4 = _closure2_slot1;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun62284_ip = 72;
                                continue _fun62284
                            }
                        case 63:
                            var1 = _closure2_slot1;
                            var1 = var1.bind(var0)(var2);
                        case 72:
                            return var0;
                    }
                };
                var4.onScroll = var12;
                var4.centerContent = var8;
                var8 = var5 != var16;
                var12 = null;
                if (!var8) {
                    _fun62280_ip = 599;
                    continue _fun62280
                }
            case 570:
                var15 = _closure1_slot7;
                var14 = _closure1_slot5;
                var8 = {};
                var20 = var10.header;
                var8.style = var20;
                var8.children = var16;
                var12 = var15.bind(var3)(var14, var8);
            case 599:
                var8 = new Array(3);
                var8[0] = var12;
                var15 = _closure1_slot9;
                var14 = _closure1_slot5;
                var12 = {};
                var20 = var10.bodyContainer;
                var16 = new Array(2);
                var16[0] = var20;
                var20 = null;
                if (!var18) {
                    _fun62280_ip = 642;
                    continue _fun62280
                }
            case 636:
                var20 = var10.bodyContainerBackground;
            case 642:
                var16[1] = var20;
                var12.style = var16;
                var16 = new Array(2);
                var16[0] = var17;
                var20 = var5 == var19;
                var17 = null;
                if (var20) {
                    _fun62280_ip = 747;
                    continue _fun62280
                }
            case 667:
                var20 = var13.enabled;
                var17 = null;
                if (var20) {
                    _fun62280_ip = 747;
                    continue _fun62280
                }
            case 677:
                var22 = _closure1_slot9;
                var21 = _closure1_slot8;
                var20 = {};
                var26 = _closure1_slot7;
                var25 = _closure1_slot5;
                var23 = {};
                var24 = var10.separator;
                var23.style = var24;
                var24 = var26.bind(var3)(var25, var23);
                var23 = new Array(2);
                var23[0] = var24;
                var24 = {};
                var24.children = var19;
                var24 = var26.bind(var3)(var25, var24);
                var23[1] = var24;
                var20.children = var23;
                var17 = var22.bind(var3)(var21, var20);
            case 747:
                var16[1] = var17;
                var12.children = var16;
                var12 = var15.bind(var3)(var14, var12);
                var8[1] = var12;
                var14 = var5 != var19;
                var12 = null;
                if (!var14) {
                    _fun62280_ip = 857;
                    continue _fun62280
                }
            case 774:
                var13 = var13.enabled;
                var12 = null;
                if (!var13) {
                    _fun62280_ip = 857;
                    continue _fun62280
                }
            case 784:
                var15 = _closure1_slot7;
                var14 = _closure1_slot5;
                var13 = {};
                var17 = var10.bodyContainer;
                var16 = new Array(2);
                var16[0] = var17;
                var17 = null;
                if (!var18) {
                    _fun62280_ip = 819;
                    continue _fun62280
                }
            case 813:
                var17 = var10.bodyContainerBackground;
            case 819:
                var16[1] = var17;
                var13.style = var16;
                var18 = _closure1_slot7;
                var17 = _closure1_slot5;
                var16 = {};
                var16.children = var19;
                var16 = var18.bind(var3)(var17, var16);
                var13.children = var16;
                var12 = var15.bind(var3)(var14, var13);
            case 857:
                var8[2] = var12;
                var4.children = var8;
                var7 = var2.bind(var3)(var7, var4);
                var4 = new Array(2);
                var4[0] = var7;
                var7 = var5 != var9;
                var5 = null;
                if (!var7) {
                    _fun62280_ip = 928;
                    continue _fun62280
                }
            case 888:
                var8 = _closure1_slot7;
                var7 = _closure1_slot5;
                var6 = {};
                var11 = function arg0() {
                    var2 = _closure2_slot7;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var1 = var0.height;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var6.onLayout = var11;
                var10 = var10.footerPortrait;
                var6.style = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 928:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 671, 1464, 1568, 5338, 5767, 2]);