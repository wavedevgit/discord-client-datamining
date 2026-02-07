// design/components/Tabs/native/TabsGradient.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var8 = _closure1_slot0;
        var9 = _closure1_slot1;
        var1 = 3;
        var1 = var9[var1];
        var7 = undefined;
        var2 = var8.bind(var7)(var1);
        var1 = var2.useAnimatedStyle;
        var0 = function() {
            _fun88753: for (var _fun88753_ip = 0;;) switch (_fun88753_ip) {
                case 0:
                    var0 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 6;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.withSpring;
                    var5 = _closure2_slot0;
                    var2 = var5.get;
                    var5 = var2.bind(var5)();
                    var2 = 0;
                    if (!var5) {
                        _fun88753_ip = 56;
                        continue _fun88753
                    }
                case 53:
                    var2 = 1;
                case 56:
                    var1 = _closure1_slot8;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.opacity = var1;
                    return var0;
            }
        };
        var4 = {};
        var6 = 6;
        var6 = var9[var6];
        var6 = var8.bind(var7)(var6);
        var6 = var6.withSpring;
        var4.withSpring = var6;
        var4.visible = var5;
        var5 = _closure1_slot8;
        var4.SPRING_CONFIG = var5;
        var0.__closure = var4;
        var4 = 14959306962615.0;
        var0.__workletHash = var4;
        var3 = _closure1_slot10;
        var0.__initData = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var9 = 0;
    var6 = var5[var9];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.HorizontalGradient;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot4 = var6;
    var6 = var3.Fragment;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var8.bind(var0)(var3);
    var6 = var7.createAnimatedComponent;
    var3 = 4;
    var3 = var5[var3];
    var3 = var8.bind(var0)(var3);
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = {
        'mass': 1,
        'damping': 30,
        'stiffness': 250
    };
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'width': 50,
        'position': 'absolute',
        'top': 0,
        'bottom': 0,
        'zIndex': 100
    };
    var3.gradient = var8;
    var8 = {};
    var8.left = var9;
    var3.left = var8;
    var8 = {};
    var8.right = var9;
    var3.right = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = {};
    var6 = 'function TabsGradientNativeTsx1(){const{withSpring,visible,SPRING_CONFIG}=this.__closure;return{opacity:withSpring(visible.get()?1:0,SPRING_CONFIG)};}';
    var3.code = var6;
    var _closure1_slot10 = var3;
    var3 = {};
    var6 = 'function TabsGradientNativeTsx2(){const{itemDimensions,state}=this.__closure;const items=itemDimensions.get();const itemWidths=items.reduce(function(s,layout){var _layout$width;return s+((_layout$width=layout===null||layout===void 0?void 0:layout.width)!==null&&_layout$width!==void 0?_layout$width:0);},0);const itemsSpacing=items.length*state.itemSpacing;return itemWidths+itemsSpacing;}';
    var3.code = var6;
    var _closure1_slot11 = var3;
    var3 = {};
    var6 = 'function TabsGradientNativeTsx3(){const{scrollOffset,totalItemWidth,pageWidth}=this.__closure;return scrollOffset.get()>0&&totalItemWidth.get()>pageWidth;}';
    var3.code = var6;
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = 'function TabsGradientNativeTsx4(){const{scrollOffset,totalItemWidth,pageWidth}=this.__closure;return scrollOffset.get()<totalItemWidth.get()-pageWidth&&totalItemWidth.get()>pageWidth;}';
    var3.code = var6;
    var _closure1_slot13 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Tabs/native/TabsGradient.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var13 = var1.state;
        var _closure2_slot0 = var13;
        var5 = var1.colors;
        var _closure2_slot1 = var5;
        var11 = var13.scrollOffset;
        var _closure2_slot2 = var11;
        var14 = var13.itemDimensions;
        var _closure2_slot3 = var14;
        var9 = var13.pageWidth;
        var _closure2_slot4 = var9;
        var4 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 3;
        var2 = var6[var1];
        var3 = undefined;
        var8 = var4.bind(var3)(var2);
        var7 = var8.useDerivedValue;
        var2 = function() {
            var2 = _closure2_slot3;
            var1 = var2.get;
            var2 = var1.bind(var2)();
            var4 = var2.reduce;
            var3 = function(arg0, arg1) { // Environment: var1
                _fun88756: for (var _fun88756_ip = 0;;) switch (_fun88756_ip) {
                    case 0:
                        var2 = arg1;
                        var1 = null;
                        var3 = var1 == var2;
                        var0 = undefined;
                        if (var3) {
                            _fun88756_ip = 19;
                            continue _fun88756
                        }
                    case 14:
                        var0 = var2.width;
                    case 19:
                        var2 = var1 != var0;
                        var1 = 0;
                        if (!var2) {
                            _fun88756_ip = 31;
                            continue _fun88756
                        }
                    case 28:
                        var1 = var0;
                    case 31:
                        var0 = arg0;
                        var0 = var0 + var1;
                        return var0;
                }
            };
            var1 = 0;
            var1 = var4.bind(var2)(var3, var1);
            var2 = var2.length;
            var0 = _closure2_slot0;
            var0 = var0.itemSpacing;
            var0 = var2 * var0;
            var0 = var1 + var0;
            return var0;
        };
        var10 = {};
        var10.itemDimensions = var14;
        var10.state = var13;
        var2.__closure = var10;
        var10 = 456613763143.0;
        var2.__workletHash = var10;
        var10 = _closure1_slot11;
        var2.__initData = var10;
        var10 = var7.bind(var8)(var2);
        var _closure2_slot5 = var10;
        var2 = _closure1_slot14;
        var7 = var6[var1];
        var13 = var4.bind(var3)(var7);
        var8 = var13.useDerivedValue;
        var7 = function() {
            _fun88757: for (var _fun88757_ip = 0;;) switch (_fun88757_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    var0 = var2.get;
                    var2 = var0.bind(var2)();
                    var0 = 0;
                    var0 = var2 > var0;
                    if (!var0) {
                        _fun88757_ip = 46;
                        continue _fun88757
                    }
                case 25:
                    var3 = _closure2_slot5;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1 = _closure2_slot4;
                    var0 = var2 > var1;
                case 46:
                    return var0;
            }
        };
        var14 = {};
        var14.scrollOffset = var11;
        var14.totalItemWidth = var10;
        var14.pageWidth = var9;
        var7.__closure = var14;
        var14 = 13237586618288.0;
        var7.__workletHash = var14;
        var14 = _closure1_slot12;
        var7.__initData = var14;
        var7 = var8.bind(var13)(var7);
        var8 = var2.bind(var3)(var7);
        var1 = var6[var1];
        var6 = var4.bind(var3)(var1);
        var4 = var6.useDerivedValue;
        var1 = function() {
            _fun88758: for (var _fun88758_ip = 0;;) switch (_fun88758_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    var0 = var2.get;
                    var2 = var0.bind(var2)();
                    var3 = _closure2_slot5;
                    var0 = var3.get;
                    var3 = var0.bind(var3)();
                    var0 = _closure2_slot4;
                    var0 = var3 - var0;
                    var0 = var2 < var0;
                    if (!var0) {
                        _fun88758_ip = 65;
                        continue _fun88758
                    }
                case 44:
                    var3 = _closure2_slot5;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1 = _closure2_slot4;
                    var0 = var2 > var1;
                case 65:
                    return var0;
            }
        };
        var7 = {};
        var7.scrollOffset = var11;
        var7.totalItemWidth = var10;
        var7.pageWidth = var9;
        var1.__closure = var7;
        var7 = 13808489302165.0;
        var1.__workletHash = var7;
        var7 = _closure1_slot13;
        var1.__initData = var7;
        var1 = var4.bind(var6)(var1);
        var10 = var2.bind(var3)(var1);
        var1 = _closure1_slot9;
        var11 = var1.bind(var3)();
        var4 = _closure1_slot2;
        var2 = var4.useMemo;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var4 = _closure2_slot1;
            var1 = new Array(0);
            var3 = 0;
            var5 = var1;
            var0 = arraySpread(var5, var4, var3);
            var0 = var1.reverse;
            var0 = var0.bind(var1)();
            return var0;
        };
        var9 = var2.bind(var4)(var0, var1);
        var2 = _closure1_slot6;
        var1 = _closure1_slot5;
        var0 = {};
        var7 = _closure1_slot4;
        var6 = _closure1_slot7;
        var4 = {};
        var12 = _closure1_slot3;
        var13 = var12.START;
        var4.start = var13;
        var13 = var12.END;
        var4.end = var13;
        var4.colors = var5;
        var13 = var11.left;
        var5 = new Array(3);
        var5[0] = var13;
        var13 = var11.gradient;
        var5[1] = var13;
        var5[2] = var8;
        var4.style = var5;
        var8 = 'none';
        var4.pointerEvents = var8;
        var5 = var7.bind(var3)(var6, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = {};
        var13 = var12.START;
        var5.start = var13;
        var12 = var12.END;
        var5.end = var12;
        var5.colors = var9;
        var12 = var11.right;
        var9 = new Array(3);
        var9[0] = var12;
        var11 = var11.gradient;
        var9[1] = var11;
        var9[2] = var10;
        var5.style = var9;
        var5.pointerEvents = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 33, 3721, 4098, 1297, 4081, 2]);