// design/components/Button/native/BaseTextButton.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = function arg0() {
        var1 = arg0;
        var7 = var1.children;
        var2 = var1.collapseText;
        var1 = _closure1_slot9;
        var3 = undefined;
        var11 = var1.bind(var3)();
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var4 = 5;
        var1 = var9[var4];
        var10 = var8.bind(var3)(var1);
        var5 = var10.useSharedValue;
        var1 = 0;
        var1 = var5.bind(var10)(var1);
        var _closure2_slot0 = var1;
        var5 = var9[var4];
        var12 = var8.bind(var3)(var5);
        var10 = var12.useWorkletCallback;
        var8 = function arg0() {
            _fun37477: for (var _fun37477_ip = 0;;) switch (_fun37477_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.nativeEvent;
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 0;
                    if (!(var2 === var3)) {
                        _fun37477_ip = 56;
                        continue _fun37477
                    }
                case 31:
                    var1 = var1.layout;
                    var2 = var1.width;
                    var1 = _closure2_slot0;
                    var0 = var1.set;
                    var0 = var0.bind(var1)(var2);
                case 56:
                    var0 = undefined;
                    return var0;
            }
        };
        var5 = {};
        var5.containerWidth = var1;
        var8.__closure = var5;
        var5 = 5541458715155.0;
        var8.__workletHash = var5;
        var5 = _closure1_slot13;
        var8.__initData = var5;
        var5 = new Array(1);
        var5[0] = var1;
        var10 = var10.bind(var12)(var8, var5);
        var5 = function arg0, arg1() {
            var9 = arg0;
            var5 = arg1;
            var _closure3_slot0 = var9;
            var _closure3_slot1 = var5;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 5;
            var1 = var8[var1];
            var6 = undefined;
            var2 = var7.bind(var6)(var1);
            var1 = var2.useAnimatedStyle;
            var0 = function() {
                _fun37479: for (var _fun37479_ip = 0;;) switch (_fun37479_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var0 = var1.get;
                        var0 = var0.bind(var1)();
                        var6 = 0;
                        if (!(var6 !== var0)) {
                            _fun37479_ip = 204;
                            continue _fun37479
                        }
                    case 25:
                        var0 = {};
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var10 = 7;
                        var2 = var2[var10];
                        var7 = undefined;
                        var14 = var3.bind(var7)(var2);
                        var13 = var14.withSpring;
                        var3 = _closure3_slot1;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var5 = 1;
                        var12 = 0;
                        if (!(var5 !== var2)) {
                            _fun37479_ip = 92;
                            continue _fun37479
                        }
                    case 79:
                        var3 = _closure3_slot0;
                        var2 = var3.get;
                        var12 = var2.bind(var3)();
                    case 92:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var8 = 8;
                        var4 = var2[var8];
                        var4 = var3.bind(var7)(var4);
                        var11 = var4.SUBTLE_SPRING;
                        var4 = 'animate-always';
                        var11 = var13.bind(var14)(var12, var11, var4);
                        var0.width = var11;
                        var2 = var2[var10];
                        var3 = var3.bind(var7)(var2);
                        var2 = var3.withSpring;
                        var10 = _closure3_slot1;
                        var9 = var10.get;
                        var9 = var9.bind(var10)();
                        if (!(var5 === var9)) {
                            _fun37479_ip = 168;
                            continue _fun37479
                        }
                    case 166:
                        var5 = 0;
                    case 168:
                        var6 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var1 = var1[var8];
                        var1 = var6.bind(var7)(var1);
                        var1 = var1.SUBTLE_SPRING;
                        var1 = var2.bind(var3)(var5, var1, var4);
                        var0.opacity = var1;
                        _fun37479_ip = 206;
                        continue _fun37479;
                    case 204:
                        var0 = {};
                    case 206:
                        return var0;
                }
            };
            var4 = {};
            var4.containerWidth = var9;
            var9 = 7;
            var9 = var8[var9];
            var9 = var7.bind(var6)(var9);
            var9 = var9.withSpring;
            var4.withSpring = var9;
            var4.collapsed = var5;
            var5 = 8;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var5 = var5.SUBTLE_SPRING;
            var4.SUBTLE_SPRING = var5;
            var0.__closure = var4;
            var4 = 493185281611.0;
            var0.__workletHash = var4;
            var3 = _closure1_slot14;
            var0.__initData = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var12 = var5.bind(var3)(var1, var2);
        var0 = function arg0, arg1() {
            var5 = arg0;
            var7 = arg1;
            var _closure3_slot0 = var5;
            var _closure3_slot1 = var7;
            var1 = _closure1_slot9;
            var4 = undefined;
            var1 = var1.bind(var4)();
            var6 = var1.textCollapsed;
            var _closure3_slot2 = var6;
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 5;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useAnimatedStyle;
            var0 = function() {
                _fun37481: for (var _fun37481_ip = 0;;) switch (_fun37481_ip) {
                    case 0:
                        var2 = _closure3_slot1;
                        var0 = var2.get;
                        var2 = var0.bind(var2)();
                        var0 = 0;
                        if (!(var0 !== var2)) {
                            _fun37481_ip = 59;
                            continue _fun37481
                        }
                    case 22:
                        var0 = {};
                        var3 = _closure3_slot2;
                        var4 = var0;
                        var2 = copyDataProperties(var4, var3);
                        var2 = _closure3_slot0;
                        var1 = var2.get;
                        var2 = var1.bind(var2)();
                        var1 = 'width';
                        var0[var1] = var2;
                        _fun37481_ip = 61;
                        continue _fun37481;
                    case 59:
                        var0 = {};
                    case 61:
                        return var0;
                }
            };
            var4 = {};
            var4.collapsed = var7;
            var4.textCollapsed = var6;
            var4.containerWidth = var5;
            var0.__closure = var4;
            var4 = 5824483783888.0;
            var0.__workletHash = var4;
            var3 = _closure1_slot15;
            var0.__initData = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var8 = var0.bind(var3)(var1, var2);
        var2 = _closure1_slot6;
        var5 = _closure1_slot1;
        var0 = var9[var4];
        var0 = var5.bind(var3)(var0);
        var1 = var0.View;
        var0 = {};
        var13 = var11.container;
        var11 = new Array(2);
        var11[0] = var13;
        var11[1] = var12;
        var0.style = var11;
        var0.onLayout = var10;
        var6 = _closure1_slot6;
        var4 = var9[var4];
        var4 = var5.bind(var3)(var4);
        var5 = var4.View;
        var4 = {};
        var4.style = var8;
        var4.children = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot19 = var0;
    var9 = function arg0() {
        _fun37482: for (var _fun37482_ip = 0;;) switch (_fun37482_ip) {
            case 0:
                var4 = arg0;
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var6 = 9;
                var1 = var1[var6];
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var1 = var1.LARGE_BUTTON_HEIGHT;
                var3 = 'sm';
                if (!(var3 !== var4)) {
                    _fun37482_ip = 75;
                    continue _fun37482
                }
            case 42:
                var3 = 'md';
                if (!(var3 === var4)) {
                    _fun37482_ip = 98;
                    continue _fun37482
                }
            case 50:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var4.bind(var2)(var3);
                var1 = var3.MEDIUM_BUTTON_HEIGHT;
                _fun37482_ip = 98;
                continue _fun37482;
            case 75:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var4.bind(var2)(var3);
                var1 = var3.SMALL_BUTTON_HEIGHT;
            case 98:
                var3 = global;
                var4 = var3.Math;
                var3 = var4.max;
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var6];
                var0 = var5.bind(var2)(var0);
                var0 = var0.MINIMUM_HIT_AREA;
                var1 = var0 - var1;
                var0 = 2;
                var1 = var1 / var0;
                var0 = 0;
                var1 = var3.bind(var4)(var1, var0);
                var0 = {};
                var0.top = var1;
                var0.left = var2;
                var0.right = var2;
                var0.bottom = var1;
                return var0;
        }
    };
    var0 = function arg0() {
        var0 = arg0;
        var4 = var0.icon;
        var8 = var0.size;
        var5 = var0.iconPosition;
        var2 = var0.iconOpticalOffsetMargin;
        var7 = var0.style;
        var6 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 10;
        var1 = var3[var1];
        var3 = undefined;
        var6 = var6.bind(var3)(var1);
        var1 = var6.useIconSizeStyles;
        var6 = var1.bind(var6)(var8);
        var1 = _closure1_slot16;
        var5 = var1.bind(var3)(var5, var2);
        var2 = _closure1_slot6;
        var1 = _closure1_slot11;
        var0 = {};
        var0.source = var4;
        var4 = new Array(3);
        var4[0] = var7;
        var4[1] = var6;
        var5 = var5.offset;
        var4[2] = var5;
        var0.style = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot20 = var0;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var7 = var5[var0];
    var6 = arg3;
    var0 = undefined;
    var8 = var6.bind(var0)(var7);
    var _closure1_slot3 = var8;
    var14 = 1;
    var6 = var5[var14];
    var6 = var4.bind(var0)(var6);
    var7 = var6.Platform;
    var7 = var6.Text;
    var _closure1_slot4 = var7;
    var6 = var6.View;
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot6 = var7;
    var6 = var6.jsxs;
    var _closure1_slot7 = var6;
    var6 = 3;
    var7 = var5[var6];
    var11 = var4.bind(var0)(var7);
    var10 = var11.createStyles;
    var7 = function(arg0, arg1) { // Environment: var1
        var0 = {};
        var2 = 1;
        var1 = {
            'flexGrow': 1,
            'alignSelf': 'stretch'
        };
        var0.grow = var1;
        var1 = {};
        var1.flexShrink = var2;
        var0.shrink = var1;
        var1 = {
            'flexShrink': 1,
            'flexGrow': 0
        };
        var5 = _closure1_slot18;
        var4 = undefined;
        var3 = arg1;
        var2 = arg0;
        var2 = var5.bind(var4)(var3, var2);
        var1.lineHeight = var2;
        var0.buttonText = var1;
        var1 = {
            'flexShrink': 0,
            'flexGrow': 0
        };
        var0.icon = var1;
        var1 = {};
        var2 = 4;
        var1.paddingLeft = var2;
        var0.iconLeft = var1;
        var1 = {};
        var1.paddingRight = var2;
        var0.iconRight = var1;
        return var0;
    };
    var7 = var10.bind(var11)(var7);
    var _closure1_slot8 = var7;
    var7 = var5[var6];
    var11 = var4.bind(var0)(var7);
    var10 = var11.createStyles;
    var7 = {};
    var13 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'position': 'relative'
    };
    var7.container = var13;
    var13 = {
        'position': 'absolute',
        'left': 0
    };
    var7.textCollapsed = var13;
    var7 = var10.bind(var11)(var7);
    var _closure1_slot9 = var7;
    var7 = var5[var6];
    var11 = var4.bind(var0)(var7);
    var10 = var11.createStyles;
    var7 = {};
    var13 = {};
    var13.borderWidth = var14;
    var14 = 4;
    var15 = var5[var14];
    var15 = var12.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var13.borderRadius = var15;
    var14 = var5[var14];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var13.borderColor = var14;
    var14 = 'hidden';
    var13.overflow = var14;
    var7.entityWrapper = var13;
    var7 = var10.bind(var11)(var7);
    var _closure1_slot10 = var7;
    var7 = 5;
    var7 = var5[var7];
    var11 = var12.bind(var0)(var7);
    var10 = var11.createAnimatedComponent;
    var7 = 6;
    var7 = var5[var7];
    var7 = var12.bind(var0)(var7);
    var7 = var10.bind(var11)(var7);
    var _closure1_slot11 = var7;
    var10 = var8.createContext;
    var7 = 'md';
    var10 = var10.bind(var8)(var7);
    var _closure1_slot12 = var10;
    var10 = {};
    var11 = 'function BaseTextButtonNativeTsx1({nativeEvent:nativeEvent}){const{containerWidth}=this.__closure;if(containerWidth.get()!==0)return;const{width:width}=nativeEvent.layout;containerWidth.set(width);}';
    var10.code = var11;
    var _closure1_slot13 = var10;
    var10 = {};
    var11 = "function BaseTextButtonNativeTsx2(){const{containerWidth,withSpring,collapsed,SUBTLE_SPRING}=this.__closure;if(containerWidth.get()===0)return{};return{width:withSpring(collapsed.get()===1?0:containerWidth.get(),SUBTLE_SPRING,'animate-always'),opacity:withSpring(collapsed.get()===1?0:1,SUBTLE_SPRING,'animate-always')};}";
    var10.code = var11;
    var _closure1_slot14 = var10;
    var10 = {};
    var11 = 'function BaseTextButtonNativeTsx3(){const{collapsed,textCollapsed,containerWidth}=this.__closure;if(collapsed.get()===0)return{};return{...textCollapsed,width:containerWidth.get()};}';
    var10.code = var11;
    var _closure1_slot15 = var10;
    var6 = var5[var6];
    var11 = var4.bind(var0)(var6);
    var10 = var11.createStyles;
    var6 = function(arg0, arg1) { // Environment: var1
        _fun37485: for (var _fun37485_ip = 0;;) switch (_fun37485_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun37485_ip = 71;
                    continue _fun37485
                }
            case 12:
                var0 = 'start';
                if (!(var0 !== var1)) {
                    _fun37485_ip = 55;
                    continue _fun37485
                }
            case 20:
                var0 = 'end';
                if (!(var0 !== var1)) {
                    _fun37485_ip = 39;
                    continue _fun37485
                }
            case 28:
                var0 = {};
                var1 = {};
                var0.offset = var1;
                return var0;
            case 39:
                var0 = {};
                var1 = {};
                var1.marginRight = var2;
                var0.offset = var1;
                return var0;
            case 55:
                var0 = {};
                var1 = {};
                var1.marginLeft = var2;
                var0.offset = var1;
                return var0;
            case 71:
                var0 = {};
                var1 = {};
                var0.offset = var1;
                return var0;
        }
    };
    var6 = var10.bind(var11)(var6);
    var _closure1_slot16 = var6;
    var6 = {};
    var10 = 'sm';
    var10 = var9.bind(var0)(var10);
    var6.sm = var10;
    var7 = var9.bind(var0)(var7);
    var6.md = var7;
    var7 = 'lg';
    var7 = var9.bind(var0)(var7);
    var6.lg = var7;
    var _closure1_slot17 = var6;
    var6 = function arg0, arg1() {
        _fun37486: for (var _fun37486_ip = 0;;) switch (_fun37486_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var1 = var0 != var3;
                var0 = undefined;
                if (!var1) {
                    _fun37486_ip = 66;
                    continue _fun37486
                }
            case 14:
                var2 = {};
                var2.sm = var3;
                var1 = 0.5;
                var1 = var3 + var1;
                var2.md = var1;
                var1 = 1.9;
                var1 = var3 + var1;
                var2.lg = var1;
                var1 = arg1;
                var0 = var2[var1];
            case 66:
                return var0;
        }
    };
    var _closure1_slot18 = var6;
    var7 = var8.forwardRef;
    var6 = function(arg0, arg1) { // Environment: var1
        _fun37487: for (var _fun37487_ip = 0;;) switch (_fun37487_ip) {
            case 0:
                var23 = arg0;
                var4 = var23.style;
                var8 = var23.pillStyle;
                var22 = var23.text;
                var19 = var23.textElement;
                var0 = var23.variant;
                var18 = 'primary';
                var3 = undefined;
                if (!(var3 !== var0)) {
                    _fun37487_ip = 43;
                    continue _fun37487
                }
            case 40:
                var18 = var0;
            case 43:
                var15 = var23.size;
                if (!(var3 === var15)) {
                    _fun37487_ip = 81;
                    continue _fun37487
                }
            case 52:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var15 = var0.DEFAULT_BUTTON_SIZE;
            case 81:
                var17 = var23.loading;
                var13 = var23.icon;
                var0 = var23.iconPosition;
                var10 = 'start';
                var14 = var10;
                if (!(var3 !== var0)) {
                    _fun37487_ip = 112;
                    continue _fun37487
                }
            case 109:
                var14 = var0;
            case 112:
                var0 = var23.iconOpticalOffsetMargin;
                var12 = 0;
                var31 = 0;
                if (!(var3 !== var0)) {
                    _fun37487_ip = 129;
                    continue _fun37487
                }
            case 126:
                var31 = var0;
            case 129:
                var0 = var23.grow;
                var26 = var3 !== var0;
                if (!var26) {
                    _fun37487_ip = 145;
                    continue _fun37487
                }
            case 142:
                var26 = var0;
            case 145:
                var0 = var23.shrink;
                var24 = var3 !== var0;
                if (!var24) {
                    _fun37487_ip = 161;
                    continue _fun37487
                }
            case 158:
                var24 = var0;
            case 161:
                var20 = var23.collapseText;
                var0 = var23.accessibilityRole;
                var21 = 'button';
                if (!(var3 !== var0)) {
                    _fun37487_ip = 183;
                    continue _fun37487
                }
            case 180:
                var21 = var0;
            case 183:
                var6 = var23.accessibilityLabel;
                var27 = var23.maxFontSizeMultiplier;
                if (!(var3 === var27)) {
                    _fun37487_ip = 227;
                    continue _fun37487
                }
            case 198:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var27 = var0.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
            case 227:
                var0 = var23.shiny;
                var7 = var3 !== var0;
                if (!var7) {
                    _fun37487_ip = 243;
                    continue _fun37487
                }
            case 240:
                var7 = var0;
            case 243:
                var0 = var23.textVariant;
                var11 = null;
                if (!(var11 == var0)) {
                    _fun37487_ip = 291;
                    continue _fun37487
                }
            case 255:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.getButtonDefaultTextVariant;
                var5 = var0.bind(var1)(var15);
                _fun37487_ip = 297;
                continue _fun37487;
            case 291:
                var5 = var23.textVariant;
            case 297:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 11;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.TextStyleSheet;
                var30 = var0[var5];
                var5 = _closure1_slot8;
                var0 = var30.fontSize;
                var25 = var5.bind(var3)(var15, var0);
                var0 = _closure1_slot17;
                var5 = var0[var15];
                var0 = 5;
                var0 = var2[var0];
                var9 = var1.bind(var3)(var0);
                var0 = var9.useSharedValue;
                var9 = var0.bind(var9)(var12);
                var0 = 10;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useButtonTextColorStyles;
                var29 = var0.bind(var1)(var18);
                if (!(var11 != var13)) {
                    _fun37487_ip = 424;
                    continue _fun37487
                }
            case 404:
                if (!(var10 !== var14)) {
                    _fun37487_ip = 416;
                    continue _fun37487
                }
            case 408:
                var28 = var25.iconRight;
                _fun37487_ip = 422;
                continue _fun37487;
            case 416:
                var28 = var25.iconLeft;
            case 422:
                _fun37487_ip = 426;
                continue _fun37487;
            case 424:
                var28 = {};
            case 426:
                if (!(var11 != var13)) {
                    _fun37487_ip = 451;
                    continue _fun37487
                }
            case 430:
                var1 = _closure1_slot3;
                var0 = var1.isValidElement;
                var0 = var0.bind(var1)(var13);
                var12 = var13;
                if (var0) {
                    _fun37487_ip = 518;
                    continue _fun37487
                }
            case 451:
                var2 = _closure1_slot6;
                var1 = _closure1_slot20;
                var0 = {};
                var0.icon = var13;
                var0.size = var15;
                var33 = var25.icon;
                var32 = new Array(2);
                var32[0] = var33;
                var33 = {};
                var34 = var29.color;
                var33.tintColor = var34;
                var32[1] = var33;
                var0.style = var32;
                var0.iconOpticalOffsetMargin = var31;
                var0.iconPosition = var14;
                var12 = var2.bind(var3)(var1, var0);
            case 518:
                if (!(var11 == var19)) {
                    _fun37487_ip = 585;
                    continue _fun37487
                }
            case 522:
                var2 = _closure1_slot6;
                var1 = _closure1_slot4;
                var0 = {};
                var0.maxFontSizeMultiplier = var27;
                var27 = 1;
                var0.numberOfLines = var27;
                var31 = var25.buttonText;
                var27 = new Array(4);
                var27[0] = var31;
                var27[1] = var30;
                var27[2] = var29;
                var27[3] = var28;
                var0.style = var27;
                var0.children = var22;
                var19 = var2.bind(var3)(var1, var0);
            case 585:
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var27 = _closure1_slot2;
                var0 = 12;
                var0 = var27[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BaseButton;
                var0 = {};
                var27 = arg1;
                var0.ref = var27;
                var36 = var0;
                var35 = var23;
                var23 = copyDataProperties(var36, var35);
                if (!var26) {
                    _fun37487_ip = 643;
                    continue _fun37487
                }
            case 637:
                var26 = var25.grow;
            case 643:
                var23 = new Array(3);
                var23[0] = var26;
                if (!var24) {
                    _fun37487_ip = 660;
                    continue _fun37487
                }
            case 654:
                var24 = var25.shrink;
            case 660:
                var23[1] = var24;
                var23[2] = var4;
                var4 = 'style';
                var0[var4] = var23;
                var4 = 'pressed';
                var0[var4] = var9;
                var4 = 'accessibilityRole';
                var0[var4] = var21;
                if (!(var11 == var6)) {
                    _fun37487_ip = 730;
                    continue _fun37487
                }
            case 699:
                var21 = _closure1_slot0;
                var23 = _closure1_slot2;
                var4 = 13;
                var4 = var23[var4];
                var21 = var21.bind(var3)(var4);
                var4 = var21.getNodeText;
                var6 = var4.bind(var21)(var22);
            case 730:
                var4 = 'accessibilityLabel';
                var0[var4] = var6;
                var4 = 'hitSlop';
                var0[var4] = var5;
                var6 = _closure1_slot6;
                var5 = _closure1_slot0;
                var21 = _closure1_slot2;
                var4 = 14;
                var4 = var21[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.ButtonPill;
                var4 = {};
                var4.variant = var18;
                var4.size = var15;
                var4.loading = var17;
                var4.pressed = var9;
                var4.style = var8;
                var4.shiny = var7;
                var9 = _closure1_slot7;
                var7 = _closure1_slot12;
                var8 = var7.Provider;
                var7 = {};
                var7.value = var15;
                var15 = var11 != var13;
                if (!var15) {
                    _fun37487_ip = 838;
                    continue _fun37487
                }
            case 834:
                var15 = var10 === var14;
            case 838:
                if (!var15) {
                    _fun37487_ip = 844;
                    continue _fun37487
                }
            case 841:
                var15 = var12;
            case 844:
                var10 = new Array(3);
                var10[0] = var15;
                var15 = var19;
                if (!(var3 !== var20)) {
                    _fun37487_ip = 884;
                    continue _fun37487
                }
            case 859:
                var18 = _closure1_slot6;
                var17 = _closure1_slot19;
                var16 = {};
                var16.collapseText = var20;
                var16.children = var19;
                var15 = var18.bind(var3)(var17, var16);
            case 884:
                var10[1] = var15;
                var11 = var11 != var13;
                if (!var11) {
                    _fun37487_ip = 903;
                    continue _fun37487
                }
            case 895:
                var13 = 'end';
                var11 = var13 === var14;
            case 903:
                if (!var11) {
                    _fun37487_ip = 909;
                    continue _fun37487
                }
            case 906:
                var11 = var12;
            case 909:
                var10[2] = var11;
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var8 = var7.bind(var8)(var6);
    var7 = var3.Object;
    var6 = var7.assign;
    var3 = {};
    var1 = function arg0() {
        _fun37488: for (var _fun37488_ip = 0;;) switch (_fun37488_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.source;
                var3 = var0.variant;
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun37488_ip = 23;
                    continue _fun37488
                }
            case 19:
                var3 = 'icon';
            case 23:
                var8 = var0.disableColor;
                if (!(var8 === var4)) {
                    _fun37488_ip = 35;
                    continue _fun37488
                }
            case 33:
                var8 = true;
            case 35:
                var5 = _closure1_slot3;
                var2 = var5.useContext;
                var0 = _closure1_slot12;
                var5 = var2.bind(var5)(var0);
                var0 = _closure1_slot10;
                var6 = var0.bind(var4)();
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 10;
                var0 = var7[var0];
                var2 = var2.bind(var4)(var0);
                var0 = var2.useIconSizeStyles;
                var7 = var0.bind(var2)(var5);
                var5 = _closure1_slot6;
                var2 = _closure1_slot11;
                var0 = {};
                var0.source = var9;
                var0.disableColor = var8;
                var0.style = var7;
                var5 = var5.bind(var4)(var2, var0);
                var2 = 'entity';
                var0 = var5;
                if (!(var2 === var3)) {
                    _fun37488_ip = 166;
                    continue _fun37488
                }
            case 136:
                var3 = _closure1_slot6;
                var2 = _closure1_slot5;
                var1 = {};
                var6 = var6.entityWrapper;
                var1.style = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 166:
                return var0;
        }
    };
    var3.Icon = var1;
    var1 = {};
    var1 = var6.bind(var7)(var1, var8, var3);
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Button/native/BaseTextButton.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.BaseTextButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 3711, 4077, 4072, 4078, 4079, 4080, 3932, 4084, 3144, 4086, 2]);