// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = ['behavior', 'children', 'contentContainerStyle', 'enabled', 'keyboardVerticalOffset', 'style', 'onLayout'];
    var _closure1_slot3 = var0;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var4 = 1;
    var3 = var6[var4];
    var8 = var5.bind(var0)(var3);
    var3 = var8.forwardRef;
    var9 = var8.useCallback;
    var _closure1_slot5 = var9;
    var8 = var8.useMemo;
    var _closure1_slot6 = var8;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = {
        'x': 0,
        'y': 0,
        'width': 0,
        'height': 0
    };
    var _closure1_slot9 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx1(){const{initialFrame,defaultLayout}=this.__closure;return initialFrame.value||defaultLayout;}';
    var4.code = var5;
    var _closure1_slot10 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx2(){const{screenHeight,keyboard,keyboardVerticalOffset,frame}=this.__closure;const keyboardY=screenHeight-keyboard.heightWhenOpened.value-keyboardVerticalOffset;return Math.max(frame.value.y+frame.value.height-keyboardY,0);}';
    var4.code = var5;
    var _closure1_slot11 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx3(value){const{interpolate,relativeKeyboardHeight}=this.__closure;return interpolate(value,[0,1],[0,relativeKeyboardHeight()]);}';
    var4.code = var5;
    var _closure1_slot12 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx4(layout){const{keyboard,initialFrame}=this.__closure;if(keyboard.isClosed.value||initialFrame.value===null){initialFrame.value=layout;}}';
    var4.code = var5;
    var _closure1_slot13 = var4;
    var4 = {};
    var5 = 'function pnpm_indexTsx5(){const{interpolateToRelativeKeyboardHeight,keyboard,translate,padding,enabled,behavior,frame}=this.__closure;const bottom=interpolateToRelativeKeyboardHeight(keyboard.progress.value);const translateY=interpolateToRelativeKeyboardHeight(translate.value);const paddingBottom=interpolateToRelativeKeyboardHeight(padding.value);const bottomHeight=enabled?bottom:0;switch(behavior){case"height":if(!keyboard.isClosed.value){return{height:frame.value.height-bottomHeight,flex:0};}return{};case"position":return{bottom:bottomHeight};case"padding":return{paddingBottom:bottomHeight};case"translate-with-padding":return{paddingTop:paddingBottom,transform:[{translateY:-translateY}]};default:return{};}}';
    var4.code = var5;
    var _closure1_slot14 = var4;
    var1 = function(arg0, arg1) { // Environment: var1
        _fun68329: for (var _fun68329_ip = 0;;) switch (_fun68329_ip) {
            case 0:
                var7 = arg0;
                var14 = arg1;
                var5 = var7.behavior;
                var _closure2_slot0 = var5;
                var11 = var7.children;
                var3 = var7.contentContainerStyle;
                var0 = var7.enabled;
                var4 = undefined;
                var16 = var4 === var0;
                if (var16) {
                    _fun68329_ip = 46;
                    continue _fun68329
                }
            case 43:
                var16 = var0;
            case 46:
                var _closure2_slot1 = var16;
                var0 = var7.keyboardVerticalOffset;
                var21 = 0;
                if (!(var4 !== var0)) {
                    _fun68329_ip = 65;
                    continue _fun68329
                }
            case 62:
                var21 = var0;
            case 65:
                var _closure2_slot2 = var21;
                var10 = var7.style;
                var1 = var7.onLayout;
                var _closure2_slot3 = var1;
                var6 = _closure1_slot4;
                var0 = _closure1_slot3;
                var8 = var6.bind(var4)(var7, var0);
                var6 = _closure1_slot0;
                var0 = _closure1_slot2;
                var13 = 4;
                var7 = var0[var13];
                var15 = var6.bind(var4)(var7);
                var12 = var15.useSharedValue;
                var7 = null;
                var22 = var12.bind(var15)(var7);
                var _closure2_slot4 = var22;
                var7 = var0[var13];
                var15 = var6.bind(var4)(var7);
                var12 = var15.useDerivedValue;
                var7 = function() { // Original name: pnpm_indexTsx1, environment: var2
                    _fun68330: for (var _fun68330_ip = 0;;) switch (_fun68330_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            var0 = var0.value;
                            if (var0) {
                                _fun68330_ip = 22;
                                continue _fun68330
                            }
                        case 15:
                            var0 = _closure1_slot9;
                        case 22:
                            return var0;
                    }
                };
                var17 = {};
                var17.initialFrame = var22;
                var18 = _closure1_slot9;
                var17.defaultLayout = var18;
                var7.__closure = var17;
                var17 = 4703969179658.0;
                var7.__workletHash = var17;
                var17 = _closure1_slot10;
                var7.__initData = var17;
                var17 = var12.bind(var15)(var7);
                var _closure2_slot5 = var17;
                var7 = 5;
                var12 = var0[var7];
                var15 = var6.bind(var4)(var12);
                var12 = var15.useTranslateAnimation;
                var12 = var12.bind(var15)();
                var19 = var12.translate;
                var _closure2_slot6 = var19;
                var18 = var12.padding;
                var _closure2_slot7 = var18;
                var7 = var0[var7];
                var12 = var6.bind(var4)(var7);
                var7 = var12.useKeyboardAnimation;
                var20 = var7.bind(var12)();
                var _closure2_slot8 = var20;
                var7 = 6;
                var7 = var0[var7];
                var12 = var6.bind(var4)(var7);
                var7 = var12.useWindowDimensions;
                var7 = var7.bind(var12)();
                var23 = var7.height;
                var _closure2_slot9 = var23;
                var12 = _closure1_slot5;
                var15 = function() { // Original name: pnpm_indexTsx2, environment: var2
                    var2 = _closure2_slot9;
                    var1 = _closure2_slot8;
                    var1 = var1.heightWhenOpened;
                    var1 = var1.value;
                    var2 = var2 - var1;
                    var1 = _closure2_slot2;
                    var1 = var2 - var1;
                    var2 = global;
                    var3 = var2.Math;
                    var2 = var3.max;
                    var4 = _closure2_slot5;
                    var4 = var4.value;
                    var4 = var4.y;
                    var0 = _closure2_slot5;
                    var0 = var0.value;
                    var0 = var0.height;
                    var0 = var4 + var0;
                    var1 = var0 - var1;
                    var0 = 0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var7 = {};
                var7.screenHeight = var23;
                var7.keyboard = var20;
                var7.keyboardVerticalOffset = var21;
                var7.frame = var17;
                var15.__closure = var7;
                var7 = 10539040422992.0;
                var15.__workletHash = var7;
                var7 = _closure1_slot11;
                var15.__initData = var7;
                var7 = new Array(2);
                var7[0] = var23;
                var7[1] = var21;
                var21 = var12.bind(var4)(var15, var7);
                var _closure2_slot10 = var21;
                var15 = function(arg0) { // Original name: pnpm_indexTsx3, environment: var2
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 4;
                    var0 = var1[var0];
                    var1 = undefined;
                    var4 = var2.bind(var1)(var0);
                    var3 = var4.interpolate;
                    var0 = _closure2_slot10;
                    var0 = var0.bind(var1)();
                    var2 = [0];
                    var2[1] = var0;
                    var1 = arg0;
                    var0 = [0, 1];
                    var0 = var3.bind(var4)(var1, var0, var2);
                    return var0;
                };
                var7 = {};
                var23 = var0[var13];
                var23 = var6.bind(var4)(var23);
                var23 = var23.interpolate;
                var7.interpolate = var23;
                var7.relativeKeyboardHeight = var21;
                var15.__closure = var7;
                var7 = 11482114301276.0;
                var15.__workletHash = var7;
                var7 = _closure1_slot12;
                var15.__initData = var7;
                var7 = new Array(1);
                var7[0] = var21;
                var15 = var12.bind(var4)(var15, var7);
                var _closure2_slot11 = var15;
                var21 = function(arg0) { // Original name: pnpm_indexTsx4, environment: var2
                    _fun68333: for (var _fun68333_ip = 0;;) switch (_fun68333_ip) {
                        case 0:
                            var1 = _closure2_slot8;
                            var1 = var1.isClosed;
                            var1 = var1.value;
                            if (var1) {
                                _fun68333_ip = 36;
                                continue _fun68333
                            }
                        case 21:
                            var2 = _closure2_slot4;
                            var3 = var2.value;
                            var2 = null;
                            var1 = var2 === var3;
                        case 36:
                            if (!var1) {
                                _fun68333_ip = 52;
                                continue _fun68333
                            }
                        case 39:
                            var1 = _closure2_slot4;
                            var0 = arg0;
                            var1.value = var0;
                        case 52:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = {};
                var7.keyboard = var20;
                var7.initialFrame = var22;
                var21.__closure = var7;
                var7 = 9061448249267.0;
                var21.__workletHash = var7;
                var7 = _closure1_slot13;
                var21.__initData = var7;
                var7 = new Array(0);
                var7 = var12.bind(var4)(var21, var7);
                var _closure2_slot12 = var7;
                var7 = new Array(1);
                var7[0] = var1;
                var1 = function(arg0) { // Environment: var2
                    _fun68334: for (var _fun68334_ip = 0;;) switch (_fun68334_ip) {
                        case 0:
                            var2 = arg0;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 4;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var3.bind(var0)(var1);
                            var4 = var5.runOnUI;
                            var3 = _closure2_slot12;
                            var4 = var4.bind(var5)(var3);
                            var3 = var2.nativeEvent;
                            var3 = var3.layout;
                            var3 = var4.bind(var0)(var3);
                            var4 = _closure2_slot3;
                            var3 = null;
                            if (!(var3 != var4)) {
                                _fun68334_ip = 82;
                                continue _fun68334
                            }
                        case 73:
                            var1 = _closure2_slot3;
                            var1 = var1.bind(var0)(var2);
                        case 82:
                            return var0;
                    }
                };
                var1 = var12.bind(var4)(var1, var7);
                var0 = var0[var13];
                var12 = var6.bind(var4)(var0);
                var7 = var12.useAnimatedStyle;
                var6 = function() { // Original name: pnpm_indexTsx5, environment: var2
                    _fun68335: for (var _fun68335_ip = 0;;) switch (_fun68335_ip) {
                        case 0:
                            var1 = _closure2_slot11;
                            var0 = _closure2_slot8;
                            var0 = var0.progress;
                            var0 = var0.value;
                            var5 = undefined;
                            var0 = var1.bind(var5)(var0);
                            var3 = _closure2_slot11;
                            var1 = _closure2_slot6;
                            var1 = var1.value;
                            var4 = var3.bind(var5)(var1);
                            var3 = _closure2_slot11;
                            var1 = _closure2_slot7;
                            var1 = var1.value;
                            var5 = var3.bind(var5)(var1);
                            var6 = _closure2_slot1;
                            var1 = 0;
                            var3 = 0;
                            if (!var6) {
                                _fun68335_ip = 79;
                                continue _fun68335
                            }
                        case 76:
                            var3 = var0;
                        case 79:
                            var6 = _closure2_slot0;
                            var0 = 'height';
                            if (!(var0 !== var6)) {
                                _fun68335_ip = 169;
                                continue _fun68335
                            }
                        case 91:
                            var0 = 'position';
                            if (!(var0 !== var6)) {
                                _fun68335_ip = 161;
                                continue _fun68335
                            }
                        case 99:
                            var0 = 'padding';
                            if (!(var0 !== var6)) {
                                _fun68335_ip = 152;
                                continue _fun68335
                            }
                        case 107:
                            var0 = 'translate-with-padding';
                            if (!(var0 !== var6)) {
                                _fun68335_ip = 121;
                                continue _fun68335
                            }
                        case 117:
                            var0 = {};
                            return var0;
                        case 121:
                            var0 = {};
                            var0.paddingTop = var5;
                            var5 = {};
                            var4 = -var4;
                            var5.translateY = var4;
                            var4 = new Array(1);
                            var4[0] = var5;
                            var0.transform = var4;
                            return var0;
                        case 152:
                            var0 = {};
                            var0.paddingBottom = var3;
                            return var0;
                        case 161:
                            var0 = {};
                            var0.bottom = var3;
                            return var0;
                        case 169:
                            var0 = _closure2_slot8;
                            var0 = var0.isClosed;
                            var0 = var0.value;
                            if (var0) {
                                _fun68335_ip = 217;
                                continue _fun68335
                            }
                        case 187:
                            var0 = {};
                            var2 = _closure2_slot5;
                            var2 = var2.value;
                            var2 = var2.height;
                            var2 = var2 - var3;
                            var0.height = var2;
                            var0.flex = var1;
                            _fun68335_ip = 219;
                            continue _fun68335;
                        case 217:
                            var0 = {};
                        case 219:
                            return var0;
                    }
                };
                var0 = {};
                var0.interpolateToRelativeKeyboardHeight = var15;
                var0.keyboard = var20;
                var0.translate = var19;
                var0.padding = var18;
                var0.enabled = var16;
                var0.behavior = var5;
                var0.frame = var17;
                var6.__closure = var0;
                var0 = 4183025671547.0;
                var6.__workletHash = var0;
                var0 = _closure1_slot14;
                var6.__initData = var0;
                var0 = new Array(3);
                var0[0] = var5;
                var0[1] = var16;
                var0[2] = var15;
                var6 = var7.bind(var12)(var6, var0);
                var _closure2_slot13 = var6;
                var0 = 'position';
                var0 = var0 === var5;
                var7 = var10;
                if (!var0) {
                    _fun68329_ip = 707;
                    continue _fun68329
                }
            case 704:
                var7 = var3;
            case 707:
                var _closure2_slot14 = var7;
                var5 = _closure1_slot6;
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var6;
                var2 = function() { // Environment: var2
                    var2 = _closure2_slot14;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var1 = _closure2_slot13;
                    var0[1] = var1;
                    return var0;
                };
                var12 = var5.bind(var4)(var2, var3);
                var3 = _closure1_slot8;
                if (var0) {
                    _fun68329_ip = 818;
                    continue _fun68329
                }
            case 747:
                var2 = _closure1_slot1;
                var0 = _closure1_slot2;
                var0 = var0[var13];
                var0 = var2.bind(var4)(var0);
                var2 = var0.View;
                var0 = global;
                var7 = var0.Object;
                var6 = var7.assign;
                var5 = {};
                var5.ref = var14;
                var5.style = var12;
                var5.onLayout = var1;
                var0 = {};
                var0.children = var11;
                var0 = var6.bind(var7)(var5, var8, var0);
                var0 = var3.bind(var4)(var2, var0);
                _fun68329_ip = 907;
                continue _fun68329;
            case 818:
                var2 = _closure1_slot7;
                var5 = global;
                var7 = var5.Object;
                var6 = var7.assign;
                var5 = {};
                var5.ref = var14;
                var5.style = var10;
                var5.onLayout = var1;
                var1 = {};
                var10 = _closure1_slot1;
                var9 = _closure1_slot2;
                var9 = var9[var13];
                var9 = var10.bind(var4)(var9);
                var10 = var9.View;
                var9 = {};
                var9.style = var12;
                var9.children = var11;
                var9 = var3.bind(var4)(var10, var9);
                var1.children = var9;
                var1 = var6.bind(var7)(var5, var8, var1);
                var0 = var3.bind(var4)(var2, var1);
            case 907:
                return var0;
        }
    };
    var1 = var3.bind(var0)(var1);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 27, 33, 3680, 8497, 8490]);