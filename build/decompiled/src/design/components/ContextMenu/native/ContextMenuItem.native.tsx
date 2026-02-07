// design/components/ContextMenu/native/ContextMenuItem.native.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Pressable;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.jsx;
    var _closure1_slot4 = var8;
    var3 = var3.jsxs;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = var6.createAnimatedComponent;
    var3 = var3.bind(var6)(var7);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function(arg0) { // Environment: var1
        _fun47053: for (var _fun47053_ip = 0;;) switch (_fun47053_ip) {
            case 0:
                var0 = {};
                var1 = {
                    'padding': null,
                    'minHeight': null,
                    'flexDirection': 'row',
                    'justifyContent': 'space-between',
                    'alignItems': 'center',
                    'gap': 8
                };
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 5;
                var7 = var3[var2];
                var6 = undefined;
                var7 = var5.bind(var6)(var7);
                var7 = var7.CONTEXT_MENU_ITEM_PADDING;
                var1.padding = var7;
                var2 = var3[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.CONTEXT_MENU_ITEM_BASE_HEIGHT;
                var1.minHeight = var2;
                var0.container = var1;
                var1 = {};
                var5 = _closure1_slot1;
                var7 = 6;
                var2 = var3[var7];
                var2 = var5.bind(var6)(var2);
                var2 = var2.radii;
                var2 = var2.lg;
                var1.borderTopLeftRadius = var2;
                var2 = var3[var7];
                var2 = var5.bind(var6)(var2);
                var2 = var2.radii;
                var2 = var2.lg;
                var1.borderTopRightRadius = var2;
                var0.roundedTop = var1;
                var1 = {};
                var2 = var3[var7];
                var2 = var5.bind(var6)(var2);
                var2 = var2.radii;
                var2 = var2.lg;
                var1.borderBottomLeftRadius = var2;
                var2 = var3[var7];
                var2 = var5.bind(var6)(var2);
                var2 = var2.radii;
                var2 = var2.lg;
                var1.borderBottomRightRadius = var2;
                var0.roundedBottom = var1;
                var1 = {};
                var2 = 1;
                var1.borderBottomWidth = var2;
                var8 = var3[var7];
                var8 = var5.bind(var6)(var8);
                var8 = var8.colors;
                var8 = var8.BORDER_SUBTLE;
                var1.borderBottomColor = var8;
                var0.border = var1;
                var1 = {};
                var3 = var3[var7];
                var3 = var5.bind(var6)(var3);
                var3 = var3.colors;
                var3 = var3.BACKGROUND_MOD_SUBTLE;
                var1.backgroundColor = var3;
                var0.pressed = var1;
                var1 = {
                    'width': 20,
                    'height': 20
                };
                var5 = 'destructive';
                var3 = arg0;
                if (!(var5 !== var3)) {
                    _fun47053_ip = 323;
                    continue _fun47053
                }
            case 293:
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var7];
                var3 = var5.bind(var6)(var3);
                var3 = var3.colors;
                var3 = var3.TEXT_STRONG;
                _fun47053_ip = 351;
                continue _fun47053;
            case 323:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var4 = var4[var7];
                var4 = var5.bind(var6)(var4);
                var4 = var4.colors;
                var3 = var4.TEXT_FEEDBACK_CRITICAL;
            case 351:
                var1.tintColor = var3;
                var0.icon = var1;
                var1 = {};
                var1.flexShrink = var2;
                var0.label = var1;
                return var0;
        }
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'function ContextMenuItemNativeTsx1(){const{pan}=this.__closure;return pan.get();}';
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 'function ContextMenuItemNativeTsx2(_current,previous){const{measure,ref,index,INDEX_BOUNDS_OFFSET,itemMeasurements,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET}=this.__closure;if(previous==null||_current===previous)return;const measurements=measure(ref);if(measurements!=null){const{pageX:pageX,pageY:pageY,width:width,height:height}=measurements;const offset=index*INDEX_BOUNDS_OFFSET;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_X_OFFSET]=pageX;itemMeasurements.get()[offset+INDEX_BOUNDS_PAGE_Y_OFFSET]=pageY;itemMeasurements.get()[offset+INDEX_BOUNDS_WIDTH_OFFSET]=width;itemMeasurements.get()[offset+INDEX_BOUNDS_HEIGHT_OFFSET]=height;}}';
    var3.code = var6;
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = "function ContextMenuItemNativeTsx3(){const{activeIndex,index,pressed,withSpring,backgroundColor,SUBTLE_SPRING}=this.__closure;const isActive=activeIndex.get()===index||pressed.get()===1;return{backgroundColor:withSpring(isActive?backgroundColor:'transparent',SUBTLE_SPRING,'animate-always')};}";
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/ContextMenu/native/ContextMenuItem.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun47054: for (var _fun47054_ip = 0;;) switch (_fun47054_ip) {
            case 0:
                var2 = arg0;
                var10 = var2.label;
                var12 = var2.IconComponent;
                var21 = var2.iconSource;
                var17 = var2.start;
                var16 = var2.end;
                var19 = var2.lastInSection;
                var1 = var2.index;
                var _closure2_slot0 = var1;
                var7 = var2.state;
                var4 = var2.onPress;
                var6 = var2.variant;
                var3 = undefined;
                if (!(var6 === var3)) {
                    _fun47054_ip = 71;
                    continue _fun47054
                }
            case 67:
                var6 = 'default';
            case 71:
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var9 = 3;
                var2 = var23[var9];
                var8 = var22.bind(var3)(var2);
                var2 = var8.useAnimatedRef;
                var14 = var2.bind(var8)();
                _closure2_slot1 = var14;
                var2 = _closure1_slot7;
                var11 = var2.bind(var3)(var6);
                var20 = var7.pan;
                _closure2_slot2 = var20;
                var2 = var7.itemMeasurements;
                _closure2_slot3 = var2;
                var18 = var7.activeIndex;
                _closure2_slot4 = var18;
                var7 = var23[var9];
                var13 = var22.bind(var3)(var7);
                var8 = var13.useSharedValue;
                var7 = 0;
                var24 = var8.bind(var13)(var7);
                _closure2_slot5 = var24;
                var7 = var23[var9];
                var15 = var22.bind(var3)(var7);
                var13 = var15.useAnimatedReaction;
                var8 = function() {
                    var1 = _closure2_slot2;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = {};
                var7.pan = var20;
                var8.__closure = var7;
                var7 = 11852115418144.0;
                var8.__workletHash = var7;
                var7 = _closure1_slot8;
                var8.__initData = var7;
                var7 = function arg0, arg1() {
                    _fun47056: for (var _fun47056_ip = 0;;) switch (_fun47056_ip) {
                        case 0:
                            var1 = arg1;
                            var3 = null;
                            if (!(var3 != var1)) {
                                _fun47056_ip = 272;
                                continue _fun47056
                            }
                        case 12:
                            var0 = arg0;
                            if (!(var0 !== var1)) {
                                _fun47056_ip = 272;
                                continue _fun47056
                            }
                        case 22:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var1 = 3;
                            var1 = var4[var1];
                            var5 = undefined;
                            var6 = var2.bind(var5)(var1);
                            var4 = var6.measure;
                            var2 = _closure2_slot1;
                            var2 = var4.bind(var6)(var2);
                            if (!(var3 != var2)) {
                                _fun47056_ip = 272;
                                continue _fun47056
                            }
                        case 72:
                            var11 = var2.pageX;
                            var10 = var2.pageY;
                            var9 = var2.width;
                            var2 = var2.height;
                            var7 = _closure2_slot0;
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 7;
                            var3 = var6[var0];
                            var3 = var4.bind(var5)(var3);
                            var3 = var3.INDEX_BOUNDS_OFFSET;
                            var3 = var7 * var3;
                            var8 = _closure2_slot3;
                            var7 = var8.get;
                            var8 = var7.bind(var8)();
                            var7 = var6[var0];
                            var7 = var4.bind(var5)(var7);
                            var7 = var7.INDEX_BOUNDS_PAGE_X_OFFSET;
                            var7 = var3 + var7;
                            var8[var7] = var11;
                            var8 = _closure2_slot3;
                            var7 = var8.get;
                            var8 = var7.bind(var8)();
                            var7 = var6[var0];
                            var7 = var4.bind(var5)(var7);
                            var7 = var7.INDEX_BOUNDS_PAGE_Y_OFFSET;
                            var7 = var3 + var7;
                            var8[var7] = var10;
                            var8 = _closure2_slot3;
                            var7 = var8.get;
                            var8 = var7.bind(var8)();
                            var7 = var6[var0];
                            var7 = var4.bind(var5)(var7);
                            var7 = var7.INDEX_BOUNDS_WIDTH_OFFSET;
                            var7 = var3 + var7;
                            var8[var7] = var9;
                            var7 = _closure2_slot3;
                            var1 = var7.get;
                            var1 = var1.bind(var7)();
                            var0 = var6[var0];
                            var0 = var4.bind(var5)(var0);
                            var0 = var0.INDEX_BOUNDS_HEIGHT_OFFSET;
                            var0 = var3 + var0;
                            var1[var0] = var2;
                        case 272:
                            var0 = undefined;
                            return var0;
                    }
                };
                var20 = {};
                var25 = var23[var9];
                var25 = var22.bind(var3)(var25);
                var25 = var25.measure;
                var20.measure = var25;
                var20.ref = var14;
                var20.index = var1;
                var25 = 7;
                var26 = var23[var25];
                var26 = var22.bind(var3)(var26);
                var26 = var26.INDEX_BOUNDS_OFFSET;
                var20.INDEX_BOUNDS_OFFSET = var26;
                var20.itemMeasurements = var2;
                var26 = var23[var25];
                var26 = var22.bind(var3)(var26);
                var26 = var26.INDEX_BOUNDS_PAGE_X_OFFSET;
                var20.INDEX_BOUNDS_PAGE_X_OFFSET = var26;
                var26 = var23[var25];
                var26 = var22.bind(var3)(var26);
                var26 = var26.INDEX_BOUNDS_PAGE_Y_OFFSET;
                var20.INDEX_BOUNDS_PAGE_Y_OFFSET = var26;
                var26 = var23[var25];
                var26 = var22.bind(var3)(var26);
                var26 = var26.INDEX_BOUNDS_WIDTH_OFFSET;
                var20.INDEX_BOUNDS_WIDTH_OFFSET = var26;
                var25 = var23[var25];
                var25 = var22.bind(var3)(var25);
                var25 = var25.INDEX_BOUNDS_HEIGHT_OFFSET;
                var20.INDEX_BOUNDS_HEIGHT_OFFSET = var25;
                var7.__closure = var20;
                var20 = 9571959267234.0;
                var7.__workletHash = var20;
                var20 = _closure1_slot9;
                var7.__initData = var20;
                var7 = var13.bind(var15)(var8, var7);
                var7 = var11.pressed;
                var20 = var7.backgroundColor;
                _closure2_slot6 = var20;
                var7 = var23[var9];
                var13 = var22.bind(var3)(var7);
                var8 = var13.useAnimatedStyle;
                var7 = function() {
                    _fun47057: for (var _fun47057_ip = 0;;) switch (_fun47057_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var0 = var1.get;
                            var1 = var0.bind(var1)();
                            var0 = _closure2_slot0;
                            var7 = var1 === var0;
                            if (var7) {
                                _fun47057_ip = 47;
                                continue _fun47057
                            }
                        case 27:
                            var1 = _closure2_slot5;
                            var0 = var1.get;
                            var1 = var0.bind(var1)();
                            var0 = 1;
                            var7 = var0 === var1;
                        case 47:
                            var0 = {};
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 8;
                            var3 = var5[var3];
                            var6 = undefined;
                            var5 = var4.bind(var6)(var3);
                            var4 = var5.withSpring;
                            var3 = 'transparent';
                            if (!var7) {
                                _fun47057_ip = 90;
                                continue _fun47057
                            }
                        case 86:
                            var3 = _closure2_slot6;
                        case 90:
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 9;
                            var1 = var7[var1];
                            var1 = var2.bind(var6)(var1);
                            var2 = var1.SUBTLE_SPRING;
                            var1 = 'animate-always';
                            var1 = var4.bind(var5)(var3, var2, var1);
                            var0.backgroundColor = var1;
                            return var0;
                    }
                };
                var15 = {};
                var15.activeIndex = var18;
                var15.index = var1;
                var15.pressed = var24;
                var24 = 8;
                var24 = var23[var24];
                var24 = var22.bind(var3)(var24);
                var24 = var24.withSpring;
                var15.withSpring = var24;
                var15.backgroundColor = var20;
                var20 = 9;
                var20 = var23[var20];
                var20 = var22.bind(var3)(var20);
                var20 = var20.SUBTLE_SPRING;
                var15.SUBTLE_SPRING = var20;
                var7.__closure = var15;
                var15 = 624481847983.0;
                var7.__workletHash = var15;
                var15 = _closure1_slot10;
                var7.__initData = var15;
                var15 = var8.bind(var13)(var7);
                var8 = null;
                var13 = var6;
                if (!(var8 == var12)) {
                    _fun47054_ip = 638;
                    continue _fun47054
                }
            case 582:
                var6 = var8 != var21;
                var8 = null;
                if (!var6) {
                    _fun47054_ip = 636;
                    continue _fun47054
                }
            case 591:
                var20 = _closure1_slot4;
                var7 = _closure1_slot1;
                var22 = _closure1_slot2;
                var6 = 10;
                var6 = var22[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.source = var21;
                var21 = var11.icon;
                var6.style = var21;
                var8 = var20.bind(var3)(var7, var6);
            case 636:
                _fun47054_ip = 673;
                continue _fun47054;
            case 638:
                var7 = _closure1_slot4;
                var6 = {};
                var20 = 'sm';
                var6.size = var20;
                var20 = var11.icon;
                var20 = var20.tintColor;
                var6.color = var20;
                var8 = var7.bind(var3)(var12, var6);
            case 673:
                var6 = _closure1_slot3;
                var12 = var6.useCallback;
                var7 = new Array(2);
                var7[0] = var1;
                var7[1] = var2;
                var2 = function(arg0) { // Environment: var0
                    _fun47058: for (var _fun47058_ip = 0;;) switch (_fun47058_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var9 = var0.height;
                            var2 = var0.width;
                            var0 = 0;
                            if (!(var0 !== var9)) {
                                _fun47058_ip = 149;
                                continue _fun47058
                            }
                        case 31:
                            if (!(var0 !== var2)) {
                                _fun47058_ip = 149;
                                continue _fun47058
                            }
                        case 35:
                            var7 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 7;
                            var3 = var6[var0];
                            var4 = undefined;
                            var3 = var5.bind(var4)(var3);
                            var3 = var3.INDEX_BOUNDS_OFFSET;
                            var3 = var7 * var3;
                            var8 = _closure2_slot3;
                            var7 = var8.get;
                            var8 = var7.bind(var8)();
                            var7 = var6[var0];
                            var7 = var5.bind(var4)(var7);
                            var7 = var7.INDEX_BOUNDS_HEIGHT_OFFSET;
                            var7 = var3 + var7;
                            var8[var7] = var9;
                            var7 = _closure2_slot3;
                            var1 = var7.get;
                            var1 = var1.bind(var7)();
                            var0 = var6[var0];
                            var0 = var5.bind(var4)(var0);
                            var0 = var0.INDEX_BOUNDS_WIDTH_OFFSET;
                            var0 = var3 + var0;
                            var1[var0] = var2;
                        case 149:
                            var0 = undefined;
                            return var0;
                    }
                };
                var12 = var12.bind(var6)(var2, var7);
                var7 = var6.useCallback;
                var2 = new Array(2);
                var2[0] = var18;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    var2 = _closure2_slot4;
                    var1 = var2.set;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var7 = var7.bind(var6)(var1, var2);
                var2 = var6.useCallback;
                var1 = new Array(1);
                var1[0] = var18;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot4;
                    var1 = var2.set;
                    var0 = -1;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var6 = var2.bind(var6)(var0, var1);
                var2 = _closure1_slot5;
                var1 = _closure1_slot6;
                var0 = {};
                var0.ref = var14;
                var18 = var11.container;
                var14 = new Array(5);
                var14[0] = var18;
                var18 = !var16;
                if (!var18) {
                    _fun47054_ip = 793;
                    continue _fun47054
                }
            case 790:
                var18 = !var19;
            case 793:
                if (!var18) {
                    _fun47054_ip = 802;
                    continue _fun47054
                }
            case 796:
                var18 = var11.border;
            case 802:
                var14[1] = var18;
                if (!var17) {
                    _fun47054_ip = 815;
                    continue _fun47054
                }
            case 809:
                var17 = var11.roundedTop;
            case 815:
                var14[2] = var17;
                if (!var16) {
                    _fun47054_ip = 828;
                    continue _fun47054
                }
            case 822:
                var16 = var11.roundedBottom;
            case 828:
                var14[3] = var16;
                var14[4] = var15;
                var0.style = var14;
                var0.onLayout = var12;
                var0.onPressIn = var7;
                var0.onPressOut = var6;
                var0.onPress = var4;
                var4 = 'button';
                var0.accessibilityRole = var4;
                var7 = _closure1_slot4;
                var6 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 11;
                var4 = var12[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {
                    'animated': true,
                    'variant': 'text-md/medium'
                };
                var11 = var11.label;
                var4.style = var11;
                var11 = 'text-strong';
                var12 = 'destructive';
                if (!(var12 === var13)) {
                    _fun47054_ip = 941;
                    continue _fun47054
                }
            case 935:
                var11 = 'text-feedback-critical';
            case 941:
                var4.color = var11;
                var4.children = var10;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                var7 = _closure1_slot4;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var9];
                var5 = var6.bind(var3)(var5);
                var6 = var5.View;
                var5 = {};
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ContextMenuItem = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 3721, 1297, 5269, 671, 5270, 4081, 4087, 4086, 3942, 2]);