// design/components/Sticky/native/StickyWrapper.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var11 = 0;
    var3 = var6[var11];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var4 = var6[var3];
    var3 = metroImportAll;
    var7 = var3.bind(var0)(var4);
    var _closure1_slot4 = var7;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var8 = var3.NOOP;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var4 = var7.createContext;
    var3 = {};
    var9 = 4;
    var10 = var6[var9];
    var13 = var5.bind(var0)(var10);
    var12 = var13.createFakeSharedValue;
    var10 = false;
    var10 = var12.bind(var13)(var10);
    var3.showHeader = var10;
    var9 = var6[var9];
    var10 = var5.bind(var0)(var9);
    var9 = var10.createFakeSharedValue;
    var9 = var9.bind(var10)(var11);
    var3.headerHeight = var9;
    var3.setShowHeader = var8;
    var3.setHeaderHeight = var8;
    var3 = var4.bind(var7)(var3);
    var _closure1_slot6 = var3;
    var4 = {};
    var7 = "function StickyWrapperNativeTsx1(){const{showHeader,headerHeight}=this.__closure;return{position:'relative',height:'100%',width:'100%',paddingTop:showHeader.get()?headerHeight.get():0};}";
    var4.code = var7;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Sticky/native/StickyWrapper.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2.StickyContext = var3;
    var1 = function(arg0) { // Original name: StickyWrapper, environment: var1
        _fun89011: for (var _fun89011_ip = 0;;) switch (_fun89011_ip) {
            case 0:
                var1 = arg0;
                var11 = var1.initiallyShowHeader;
                var3 = undefined;
                if (!(var11 === var3)) {
                    _fun89011_ip = 19;
                    continue _fun89011
                }
            case 17:
                var11 = true;
            case 19:
                var6 = var1.children;
                var7 = var1.pointerEvents;
                var10 = var1.style;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 5;
                var1 = var8[var4];
                var2 = var9.bind(var3)(var1);
                var1 = var2.useSharedValue;
                var15 = var1.bind(var2)(var11);
                _closure2_slot0 = var15;
                var11 = _closure1_slot4;
                var12 = var11.useCallback;
                var2 = new Array(1);
                var2[0] = var15;
                var1 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot0;
                    var1 = var2.set;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var12.bind(var11)(var1, var2);
                _closure2_slot1 = var1;
                var1 = var8[var4];
                var12 = var9.bind(var3)(var1);
                var2 = var12.useSharedValue;
                var1 = 0;
                var14 = var2.bind(var12)(var1);
                _closure2_slot2 = var14;
                var13 = var11.useCallback;
                var12 = new Array(1);
                var12[0] = var14;
                var2 = function(arg0) { // Environment: var0
                    var2 = _closure2_slot2;
                    var1 = var2.set;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var2 = var13.bind(var11)(var2, var12);
                _closure2_slot3 = var2;
                var2 = var8[var4];
                var12 = var9.bind(var3)(var2);
                var9 = var12.useAnimatedStyle;
                var2 = function() { // Original name: H, environment: var0
                    _fun89014: for (var _fun89014_ip = 0;;) switch (_fun89014_ip) {
                        case 0:
                            var0 = {
                                'position': 'relative',
                                'height': '100%',
                                'width': '100%'
                            };
                            var3 = _closure2_slot0;
                            var1 = var3.get;
                            var3 = var1.bind(var3)();
                            var1 = 0;
                            if (!var3) {
                                _fun89014_ip = 48;
                                continue _fun89014
                            }
                        case 35:
                            var3 = _closure2_slot2;
                            var2 = var3.get;
                            var1 = var2.bind(var3)();
                        case 48:
                            var0.paddingTop = var1;
                            return var0;
                    }
                };
                var13 = {};
                var13.showHeader = var15;
                var13.headerHeight = var14;
                var2.__closure = var13;
                var13 = 8421392603729.0;
                var2.__workletHash = var13;
                var13 = _closure1_slot7;
                var2.__initData = var13;
                var9 = var9.bind(var12)(var2);
                var2 = var11.useState;
                var0 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot0;
                    var0.showHeader = var2;
                    var2 = _closure2_slot1;
                    var0.setShowHeader = var2;
                    var2 = _closure2_slot2;
                    var0.headerHeight = var2;
                    var1 = _closure2_slot3;
                    var0.setHeaderHeight = var1;
                    return var0;
                };
                var11 = var2.bind(var11)(var0);
                var2 = _closure1_slot3;
                var0 = 1;
                var0 = var2.bind(var3)(var11, var0);
                var11 = var0[var1];
                var2 = _closure1_slot5;
                var0 = _closure1_slot6;
                var1 = var0.Provider;
                var0 = {};
                var0.value = var11;
                var5 = _closure1_slot1;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.View;
                var4 = {};
                var8 = new Array(2);
                var8[0] = var10;
                var8[1] = var9;
                var4.style = var8;
                var4.pointerEvents = var7;
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.StickyWrapper = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 660, 33, 5218, 3679, 2]);