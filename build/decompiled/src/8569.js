// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var4;
    var0 = ['children', 'content', 'theme', 'doneText', 'button', 'icon', 'showArrows', 'onNextCallback', 'onPrevCallback', 'onDoneCallback', 'blur', 'opacity', 'offset', 'enabled', 'insets'];
    var _closure1_slot3 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var7 = var4[var1];
    var7 = var3.bind(var0)(var7);
    var8 = var7.useEffect;
    var _closure1_slot6 = var8;
    var8 = var7.useMemo;
    var _closure1_slot7 = var8;
    var7 = var7.useState;
    var _closure1_slot8 = var7;
    var1 = var4[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 3;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var8 = var1.StyleSheet;
    var1 = var1.View;
    var _closure1_slot10 = var1;
    var1 = 4;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var5 = var1.jsxs;
    var _closure1_slot11 = var5;
    var1 = var1.jsx;
    var _closure1_slot12 = var1;
    var1 = function arg0() {
        _fun68621: for (var _fun68621_ip = 0;;) switch (_fun68621_ip) {
            case 0:
                var12 = arg0;
                var18 = var12.children;
                var14 = var12.content;
                var11 = var12.theme;
                var3 = undefined;
                if (!(var3 === var11)) {
                    _fun68621_ip = 55;
                    continue _fun68621
                }
            case 27:
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 5;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var11 = var1.colors;
            case 55:
                var _closure2_slot0 = var11;
                var1 = var12.doneText;
                var21 = 'Done';
                if (!(var3 !== var1)) {
                    _fun68621_ip = 78;
                    continue _fun68621
                }
            case 75:
                var21 = var1;
            case 78:
                var22 = var12.button;
                var27 = var12.icon;
                var2 = var12.showArrows;
                var1 = var3 === var2;
                if (var1) {
                    _fun68621_ip = 107;
                    continue _fun68621
                }
            case 104:
                var1 = var2;
            case 107:
                var26 = var12.onNextCallback;
                var30 = var12.onPrevCallback;
                var20 = var12.onDoneCallback;
                var2 = var12.blur;
                var19 = null;
                var16 = null;
                if (!(var3 !== var2)) {
                    _fun68621_ip = 148;
                    continue _fun68621
                }
            case 145:
                var16 = var2;
            case 148:
                var6 = var12.opacity;
                if (!(var3 === var6)) {
                    _fun68621_ip = 186;
                    continue _fun68621
                }
            case 157:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 6;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var6 = var2.DEFAULT_OPACITY;
            case 186:
                var _closure2_slot1 = var6;
                var2 = var12.offset;
                if (!(var3 === var2)) {
                    _fun68621_ip = 202;
                    continue _fun68621
                }
            case 200:
                var2 = {};
            case 202:
                var4 = var2.closed;
                var9 = 0;
                var15 = 0;
                if (!(var3 !== var4)) {
                    _fun68621_ip = 219;
                    continue _fun68621
                }
            case 216:
                var15 = var4;
            case 219:
                var _closure2_slot2 = var15;
                var4 = var2.opened;
                var2 = 0;
                if (!(var3 !== var4)) {
                    _fun68621_ip = 238;
                    continue _fun68621
                }
            case 235:
                var2 = var4;
            case 238:
                var _closure2_slot3 = var2;
                var4 = var12.enabled;
                var10 = var3 === var4;
                if (var10) {
                    _fun68621_ip = 257;
                    continue _fun68621
                }
            case 254:
                var10 = var4;
            case 257:
                var8 = var12.insets;
                var _closure2_slot4 = var8;
                var5 = _closure1_slot5;
                var4 = _closure1_slot3;
                var12 = var5.bind(var3)(var12, var4);
                var5 = _closure1_slot0;
                var13 = _closure1_slot2;
                var4 = 7;
                var4 = var13[var4];
                var13 = var5.bind(var3)(var4);
                var5 = var13.useKeyboardState;
                var4 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.appearance;
                    return var0;
                };
                var17 = var5.bind(var13)(var4);
                var _closure2_slot5 = var17;
                var5 = _closure1_slot8;
                var4 = {
                    'current': 0,
                    'count': 0
                };
                var13 = var5.bind(var3)(var4);
                var5 = _closure1_slot4;
                var4 = 2;
                var5 = var5.bind(var3)(var13, var4);
                var4 = var5[var9];
                var13 = 1;
                var5 = var5[var13];
                var _closure2_slot6 = var5;
                var5 = var4.current;
                var5 = var9 === var5;
                var _closure2_slot7 = var5;
                var9 = var4.current;
                var4 = var4.count;
                var4 = var4 - var13;
                var4 = var9 === var4;
                var _closure2_slot8 = var4;
                if (!(var19 == var22)) {
                    _fun68621_ip = 437;
                    continue _fun68621
                }
            case 417:
                var13 = _closure1_slot1;
                var23 = _closure1_slot2;
                var9 = 8;
                var9 = var23[var9];
                var22 = var13.bind(var3)(var9);
            case 437:
                if (!(var19 == var27)) {
                    _fun68621_ip = 461;
                    continue _fun68621
                }
            case 441:
                var13 = _closure1_slot1;
                var23 = _closure1_slot2;
                var9 = 9;
                var9 = var23[var9];
                var27 = var13.bind(var3)(var9);
            case 461:
                var23 = _closure1_slot6;
                var13 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var3 = var0.FocusedInputEvents;
                    var2 = var3.addListener;
                    var1 = 'focusDidSet';
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure2_slot6;
                        var0 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = var0.remove;
                    return var0;
                };
                var9 = new Array(0);
                var9 = var23.bind(var3)(var13, var9);
                var13 = _closure1_slot7;
                var9 = new Array(4);
                var9[0] = var17;
                var9[1] = var6;
                var9[2] = var11;
                var9[3] = var8;
                var6 = function() { // Environment: var0
                    _fun68625: for (var _fun68625_ip = 0;;) switch (_fun68625_ip) {
                        case 0:
                            var0 = _closure1_slot13;
                            var1 = var0.toolbar;
                            var0 = new Array(4);
                            var0[0] = var1;
                            var1 = {};
                            var4 = _closure2_slot0;
                            var3 = _closure2_slot5;
                            var3 = var4[var3];
                            var6 = var3.background;
                            var5 = _closure2_slot1;
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var4 = var3.concat;
                            var3 = '';
                            var3 = var4.bind(var3)(var6, var5);
                            var1.backgroundColor = var3;
                            var0[1] = var1;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var6 = 6;
                            var1 = var1[var6];
                            var5 = undefined;
                            var1 = var3.bind(var5)(var1);
                            var4 = var1.KEYBOARD_HAS_ROUNDED_CORNERS;
                            var1 = null;
                            var3 = null;
                            if (var4) {
                                _fun68625_ip = 173;
                                continue _fun68625
                            }
                        case 114:
                            var4 = {};
                            var7 = _closure2_slot4;
                            var9 = var1 == var7;
                            var7 = undefined;
                            if (var9) {
                                _fun68625_ip = 138;
                                continue _fun68625
                            }
                        case 129:
                            var9 = _closure2_slot4;
                            var7 = var9.left;
                        case 138:
                            var4.paddingLeft = var7;
                            var7 = _closure2_slot4;
                            var9 = var1 == var7;
                            var7 = undefined;
                            if (var9) {
                                _fun68625_ip = 165;
                                continue _fun68625
                            }
                        case 156:
                            var8 = _closure2_slot4;
                            var7 = var8.right;
                        case 165:
                            var4.paddingRight = var7;
                            var3 = var4;
                        case 173:
                            var0[2] = var3;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var6];
                            var3 = var4.bind(var5)(var3);
                            var3 = var3.KEYBOARD_HAS_ROUNDED_CORNERS;
                            var1 = null;
                            if (!var3) {
                                _fun68625_ip = 215;
                                continue _fun68625
                            }
                        case 205:
                            var2 = _closure1_slot13;
                            var1 = var2.floating;
                        case 215:
                            var0[3] = var1;
                            return var0;
                    }
                };
                var6 = var13.bind(var3)(var6, var9);
                var9 = new Array(1);
                var9[0] = var8;
                var8 = function() { // Environment: var0
                    _fun68626: for (var _fun68626_ip = 0;;) switch (_fun68626_ip) {
                        case 0:
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 6;
                            var0 = var2[var0];
                            var4 = undefined;
                            var0 = var1.bind(var4)(var0);
                            var0 = var0.KEYBOARD_HAS_ROUNDED_CORNERS;
                            var5 = null;
                            var1 = null;
                            if (!var0) {
                                _fun68626_ip = 135;
                                continue _fun68626
                            }
                        case 38:
                            var0 = {};
                            var2 = _closure2_slot4;
                            var3 = var5 == var2;
                            var2 = undefined;
                            if (var3) {
                                _fun68626_ip = 65;
                                continue _fun68626
                            }
                        case 56:
                            var3 = _closure2_slot4;
                            var2 = var3.left;
                        case 65:
                            var8 = var5 != var2;
                            var7 = 0;
                            if (!var8) {
                                _fun68626_ip = 77;
                                continue _fun68626
                            }
                        case 74:
                            var7 = var2;
                        case 77:
                            var2 = 16;
                            var7 = var7 + var2;
                            var0.marginLeft = var7;
                            var7 = _closure2_slot4;
                            var7 = var5 == var7;
                            var4 = undefined;
                            if (var7) {
                                _fun68626_ip = 111;
                                continue _fun68626
                            }
                        case 102:
                            var6 = _closure2_slot4;
                            var4 = var6.right;
                        case 111:
                            var5 = var5 != var4;
                            var3 = 0;
                            if (!var5) {
                                _fun68626_ip = 123;
                                continue _fun68626
                            }
                        case 120:
                            var3 = var4;
                        case 123:
                            var2 = var3 + var2;
                            var0.marginRight = var2;
                            var1 = var0;
                        case 135:
                            var0 = new Array(1);
                            var0[0] = var1;
                            return var0;
                    }
                };
                var8 = var13.bind(var3)(var8, var9);
                var9 = new Array(2);
                var9[0] = var15;
                var9[1] = var2;
                var2 = function() { // Environment: var0
                    var0 = {};
                    var7 = _closure2_slot2;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 6;
                    var6 = var5[var1];
                    var3 = undefined;
                    var6 = var4.bind(var3)(var6);
                    var6 = var6.KEYBOARD_TOOLBAR_HEIGHT;
                    var6 = var7 + var6;
                    var0.closed = var6;
                    var2 = _closure2_slot3;
                    var1 = var5[var1];
                    var1 = var4.bind(var3)(var1);
                    var1 = var1.OPENED_OFFSET;
                    var1 = var2 + var1;
                    var0.opened = var1;
                    return var0;
                };
                var9 = var13.bind(var3)(var2, var9);
                if (var18) {
                    _fun68621_ip = 815;
                    continue _fun68621
                }
            case 571:
                var15 = null;
                if (!var1) {
                    _fun68621_ip = 712;
                    continue _fun68621
                }
            case 579:
                var13 = _closure1_slot11;
                var2 = _closure1_slot10;
                var1 = {};
                var17 = _closure1_slot13;
                var17 = var17.arrows;
                var1.style = var17;
                var25 = _closure1_slot12;
                var24 = _closure1_slot0;
                var28 = _closure1_slot2;
                var23 = 11;
                var17 = var28[var23];
                var17 = var24.bind(var3)(var17);
                var29 = var17.Prev;
                var17 = {};
                var17.button = var22;
                var17.icon = var27;
                var17.onPress = var30;
                var29 = var25.bind(var3)(var29, var17);
                var17 = new Array(2);
                var17[0] = var29;
                var23 = var28[var23];
                var23 = var24.bind(var3)(var23);
                var24 = var23.Next;
                var23 = {};
                var23.button = var22;
                var23.icon = var27;
                var23.onPress = var26;
                var23 = var25.bind(var3)(var24, var23);
                var17[1] = var23;
                var1.children = var17;
                var15 = var13.bind(var3)(var2, var1);
            case 712:
                var13 = _closure1_slot12;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var23 = 11;
                var1 = var1[var23];
                var1 = var2.bind(var3)(var1);
                var2 = var1.Content;
                var1 = {};
                var1.children = var14;
                var1 = var13.bind(var3)(var2, var1);
                var13 = null;
                if (!var21) {
                    _fun68621_ip = 807;
                    continue _fun68621
                }
            case 759:
                var17 = _closure1_slot12;
                var14 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var23];
                var2 = var14.bind(var3)(var2);
                var14 = var2.Done;
                var2 = {};
                var2.button = var22;
                var2.text = var21;
                var2.onPress = var20;
                var13 = var17.bind(var3)(var14, var2);
            case 807:
                var14 = var1;
                _fun68621_ip = 1013;
                continue _fun68621;
            case 815:
                var _closure2_slot9 = var19;
                var _closure2_slot10 = var19;
                var _closure2_slot11 = var19;
                var _closure2_slot12 = var19;
                var _closure2_slot13 = var19;
                var1 = _closure1_slot9;
                var17 = var1.Children;
                var2 = var17.forEach;
                var1 = function(arg0) { // Environment: var0
                    _fun68628: for (var _fun68628_ip = 0;;) switch (_fun68628_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure1_slot9;
                            var2 = var3.isValidElement;
                            var2 = var2.bind(var3)(var1);
                            if (!var2) {
                                _fun68628_ip = 218;
                                continue _fun68628
                            }
                        case 27:
                            var2 = var1.type;
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var5 = 11;
                            var3 = var3[var5];
                            var4 = undefined;
                            var3 = var6.bind(var4)(var3);
                            var3 = var3.Background;
                            if (!(var2 !== var3)) {
                                _fun68628_ip = 211;
                                continue _fun68628
                            }
                        case 67:
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var5];
                            var3 = var6.bind(var4)(var3);
                            var3 = var3.Content;
                            if (!(var2 !== var3)) {
                                _fun68628_ip = 202;
                                continue _fun68628
                            }
                        case 94:
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var5];
                            var3 = var6.bind(var4)(var3);
                            var3 = var3.Prev;
                            if (!(var2 !== var3)) {
                                _fun68628_ip = 193;
                                continue _fun68628
                            }
                        case 121:
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var3 = var3[var5];
                            var3 = var6.bind(var4)(var3);
                            var3 = var3.Next;
                            if (!(var2 !== var3)) {
                                _fun68628_ip = 184;
                                continue _fun68628
                            }
                        case 148:
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var0 = var0[var5];
                            var0 = var3.bind(var4)(var0);
                            var0 = var0.Done;
                            if (!(var2 === var0)) {
                                _fun68628_ip = 218;
                                continue _fun68628
                            }
                        case 175:
                            _closure2_slot12 = var1;
                            _fun68628_ip = 218;
                            continue _fun68628;
                        case 184:
                            _closure2_slot10 = var1;
                            _fun68628_ip = 218;
                            continue _fun68628;
                        case 193:
                            _closure2_slot9 = var1;
                            _fun68628_ip = 218;
                            continue _fun68628;
                        case 202:
                            _closure2_slot11 = var1;
                            _fun68628_ip = 218;
                            continue _fun68628;
                        case 211:
                            _closure2_slot13 = var1;
                        case 218:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var17)(var18, var1);
                var18 = _closure2_slot13;
                var1 = _closure2_slot12;
                var2 = _closure2_slot9;
                if (var2) {
                    _fun68621_ip = 887;
                    continue _fun68621
                }
            case 878:
                var2 = _closure2_slot10;
                var17 = null;
                if (!var2) {
                    _fun68621_ip = 941;
                    continue _fun68621
                }
            case 887:
                var21 = _closure1_slot11;
                var20 = _closure1_slot10;
                var2 = {};
                var22 = _closure1_slot13;
                var22 = var22.arrows;
                var2.style = var22;
                var23 = _closure2_slot9;
                var22 = new Array(2);
                var22[0] = var23;
                var23 = _closure2_slot10;
                var22[1] = var23;
                var2.children = var22;
                var17 = var21.bind(var3)(var20, var2);
            case 941:
                var2 = _closure2_slot11;
                if (!(var19 == var2)) {
                    _fun68621_ip = 997;
                    continue _fun68621
                }
            case 949:
                var20 = _closure1_slot12;
                var19 = _closure1_slot0;
                var21 = _closure1_slot2;
                var2 = 11;
                var2 = var21[var2];
                var2 = var19.bind(var3)(var2);
                var19 = var2.Content;
                var2 = {};
                var21 = _closure2_slot11;
                var2.children = var21;
                var2 = var20.bind(var3)(var19, var2);
                _fun68621_ip = 1001;
                continue _fun68621;
            case 997:
                var2 = _closure2_slot11;
            case 1001:
                var14 = var2;
                var16 = var18;
                var15 = var17;
                var13 = var1;
            case 1013:
                var2 = _closure1_slot7;
                var1 = new Array(3);
                var1[0] = var11;
                var1[1] = var5;
                var1[2] = var4;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot0;
                    var0.theme = var2;
                    var2 = _closure2_slot7;
                    var0.isPrevDisabled = var2;
                    var1 = _closure2_slot8;
                    var0.isNextDisabled = var1;
                    return var0;
                };
                var4 = var2.bind(var3)(var0, var1);
                var2 = _closure1_slot12;
                var17 = _closure1_slot0;
                var18 = _closure1_slot2;
                var0 = 12;
                var0 = var18[var0];
                var0 = var17.bind(var3)(var0);
                var0 = var0.ToolbarContext;
                var1 = var0.Provider;
                var0 = {};
                var0.value = var4;
                var5 = _closure1_slot1;
                var4 = 13;
                var4 = var18[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var4.enabled = var10;
                var4.offset = var9;
                var4.style = var8;
                var8 = _closure1_slot11;
                var7 = _closure1_slot10;
                var9 = global;
                var11 = var9.Object;
                var10 = var11.assign;
                var9 = {};
                var9.style = var6;
                var6 = 6;
                var6 = var18[var6];
                var6 = var17.bind(var3)(var6);
                var6 = var6.TEST_ID_KEYBOARD_TOOLBAR;
                var9.testID = var6;
                var6 = new Array(4);
                var6[0] = var16;
                var6[1] = var15;
                var6[2] = var14;
                var6[3] = var13;
                var9.children = var6;
                var6 = {};
                var6 = var10.bind(var11)(var6, var12, var9);
                var6 = var8.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var7 = var8.create;
    var5 = {};
    var9 = {
        'position': 'absolute',
        'bottom': 0,
        'alignItems': 'center',
        'width': '100%',
        'flexDirection': 'row'
    };
    var10 = 6;
    var10 = var4[var10];
    var10 = var3.bind(var0)(var10);
    var10 = var10.KEYBOARD_TOOLBAR_HEIGHT;
    var9.height = var10;
    var5.toolbar = var9;
    var9 = {
        'flexDirection': 'row',
        'paddingLeft': 8
    };
    var5.arrows = var9;
    var9 = {
        'alignSelf': 'center',
        'borderRadius': 20,
        'overflow': 'hidden'
    };
    var5.floating = var9;
    var5 = var7.bind(var8)(var5);
    var _closure1_slot13 = var5;
    var5 = 11;
    var6 = var4[var5];
    var6 = var3.bind(var0)(var6);
    var6 = var6.Background;
    var1.Background = var6;
    var6 = var4[var5];
    var6 = var3.bind(var0)(var6);
    var6 = var6.Content;
    var1.Content = var6;
    var6 = var4[var5];
    var6 = var3.bind(var0)(var6);
    var6 = var6.Prev;
    var1.Prev = var6;
    var6 = var4[var5];
    var6 = var3.bind(var0)(var6);
    var6 = var6.Next;
    var1.Next = var6;
    var5 = var4[var5];
    var5 = var3.bind(var0)(var5);
    var5 = var5.Done;
    var1.Done = var5;
    var2.default = var1;
    var1 = 5;
    var1 = var4[var1];
    var1 = var3.bind(var0)(var1);
    var1 = var1.colors;
    var2.DefaultKeyboardToolbarTheme = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 29, 31, 27, 33, 8570, 8571, 8550, 8572, 8573, 8538, 8574, 8578, 8564]);