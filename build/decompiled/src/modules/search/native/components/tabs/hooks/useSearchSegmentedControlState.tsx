// modules/search/native/components/tabs/hooks/useSearchSegmentedControlState.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = {};
    var6 = 'function useSearchSegmentedControlStateTsx1(){const{visibleTabsStateful}=this.__closure;return visibleTabsStateful;}';
    var3.code = var6;
    var _closure1_slot3 = var3;
    var3 = {};
    var6 = 'function useSearchSegmentedControlStateTsx2(){const{visibleTabs,activeIndex}=this.__closure;return visibleTabs.get()[activeIndex.get()];}';
    var3.code = var6;
    var _closure1_slot4 = var3;
    var3 = {};
    var6 = 'function useSearchSegmentedControlStateTsx3(){const{visibleTabs}=this.__closure;return visibleTabs.get();}';
    var3.code = var6;
    var _closure1_slot5 = var3;
    var3 = {};
    var6 = 'function useSearchSegmentedControlStateTsx4(visibleTabs){const{lastSelectedTab,runOnJS,setActiveIndex}=this.__closure;if(visibleTabs.length===0)return;const lastSelectedTabIndex=visibleTabs.indexOf(lastSelectedTab.get());const targetIndex=Math.max(0,lastSelectedTabIndex);const maxIndex=Math.max(0,visibleTabs.length-1);const nextActiveIndex=Math.min(targetIndex,maxIndex);runOnJS(setActiveIndex)(nextActiveIndex,false);}';
    var3.code = var6;
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = 'function useSearchSegmentedControlStateTsx5(){const{selectedTab}=this.__closure;return selectedTab.get();}';
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'function useSearchSegmentedControlStateTsx6(selectedTab){const{lastSelectedTab,runOnJS,onSelectedTabChange}=this.__closure;if(selectedTab==null)return;lastSelectedTab.set(selectedTab);runOnJS(onSelectedTabChange)(selectedTab);}';
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/native/components/tabs/hooks/useSearchSegmentedControlState.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var7 = var1.items;
        var15 = var1.visibleTabs;
        var _closure2_slot0 = var15;
        var9 = var1.onSelectedTabChange;
        var _closure2_slot1 = var9;
        var5 = var1.width;
        var12 = _closure1_slot0;
        var13 = _closure1_slot1;
        var10 = 1;
        var2 = var13[var10];
        var11 = undefined;
        var4 = var12.bind(var11)(var2);
        var3 = var4.useSharedValue;
        var6 = 0;
        var2 = var15[var6];
        var14 = var3.bind(var4)(var2);
        var _closure2_slot2 = var14;
        var2 = var13[var10];
        var4 = var12.bind(var11)(var2);
        var3 = var4.useDerivedValue;
        var2 = function() {
            var0 = _closure2_slot0;
            return var0;
        };
        var8 = {};
        var8.visibleTabsStateful = var15;
        var2.__closure = var8;
        var8 = 17125959946782.0;
        var2.__workletHash = var8;
        var8 = _closure1_slot3;
        var2.__initData = var8;
        var8 = var3.bind(var4)(var2);
        var _closure2_slot3 = var8;
        var2 = 2;
        var2 = var13[var2];
        var4 = var12.bind(var11)(var2);
        var3 = var4.useSegmentedControlState;
        var2 = {};
        var2.items = var7;
        var2.defaultIndex = var6;
        var2.pageWidth = var5;
        var5 = var3.bind(var4)(var2);
        var _closure2_slot4 = var5;
        var7 = var5.activeIndex;
        var _closure2_slot5 = var7;
        var15 = var5.setActiveIndex;
        var _closure2_slot6 = var15;
        var2 = var13[var10];
        var4 = var12.bind(var11)(var2);
        var3 = var4.useDerivedValue;
        var2 = function() {
            var2 = _closure2_slot3;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            var2 = _closure2_slot5;
            var0 = var2.get;
            var0 = var0.bind(var2)();
            var0 = var1[var0];
            return var0;
        };
        var6 = {};
        var6.visibleTabs = var8;
        var6.activeIndex = var7;
        var2.__closure = var6;
        var6 = 6189329624535.0;
        var2.__workletHash = var6;
        var6 = _closure1_slot4;
        var2.__initData = var6;
        var4 = var3.bind(var4)(var2);
        var _closure2_slot7 = var4;
        var2 = var13[var10];
        var7 = var12.bind(var11)(var2);
        var6 = var7.useAnimatedReaction;
        var3 = function() {
            var1 = _closure2_slot3;
            var0 = var1.get;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2 = {};
        var2.visibleTabs = var8;
        var3.__closure = var2;
        var2 = 9222891018885.0;
        var3.__workletHash = var2;
        var2 = _closure1_slot5;
        var3.__initData = var2;
        var2 = function arg0() {
            _fun107448: for (var _fun107448_ip = 0;;) switch (_fun107448_ip) {
                case 0:
                    var2 = arg0;
                    var0 = var2.length;
                    var7 = 0;
                    if (!(var7 !== var0)) {
                        _fun107448_ip = 153;
                        continue _fun107448
                    }
                case 17:
                    var3 = var2.indexOf;
                    var4 = _closure2_slot2;
                    var1 = var4.get;
                    var1 = var1.bind(var4)();
                    var5 = var3.bind(var2)(var1);
                    var1 = global;
                    var4 = var1.Math;
                    var3 = var4.max;
                    var5 = var3.bind(var4)(var7, var5);
                    var6 = var1.Math;
                    var4 = var6.max;
                    var3 = var2.length;
                    var2 = 1;
                    var3 = var3 - var2;
                    var4 = var4.bind(var6)(var7, var3);
                    var3 = var1.Math;
                    var1 = var3.min;
                    var3 = var1.bind(var3)(var5, var4);
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var1);
                    var1 = var4.runOnJS;
                    var0 = _closure2_slot6;
                    var1 = var1.bind(var4)(var0);
                    var0 = false;
                    var0 = var1.bind(var2)(var3, var0);
                case 153:
                    var0 = undefined;
                    return var0;
            }
        };
        var8 = {};
        var8.lastSelectedTab = var14;
        var16 = var13[var10];
        var16 = var12.bind(var11)(var16);
        var16 = var16.runOnJS;
        var8.runOnJS = var16;
        var8.setActiveIndex = var15;
        var2.__closure = var8;
        var8 = 13456384876758.0;
        var2.__workletHash = var8;
        var8 = _closure1_slot6;
        var2.__initData = var8;
        var2 = var6.bind(var7)(var3, var2);
        var2 = var13[var10];
        var7 = var12.bind(var11)(var2);
        var6 = var7.useAnimatedReaction;
        var3 = function() {
            var1 = _closure2_slot7;
            var0 = var1.get;
            var0 = var0.bind(var1)();
            return var0;
        };
        var2 = {};
        var2.selectedTab = var4;
        var3.__closure = var2;
        var2 = 2491149576387.0;
        var3.__workletHash = var2;
        var2 = _closure1_slot7;
        var3.__initData = var2;
        var2 = function arg0() {
            _fun107450: for (var _fun107450_ip = 0;;) switch (_fun107450_ip) {
                case 0:
                    var2 = arg0;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun107450_ip = 70;
                        continue _fun107450
                    }
                case 9:
                    var3 = _closure2_slot2;
                    var1 = var3.set;
                    var1 = var1.bind(var3)(var2);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 1;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.runOnJS;
                    var0 = _closure2_slot1;
                    var0 = var3.bind(var4)(var0);
                    var0 = var0.bind(var1)(var2);
                case 70:
                    var0 = undefined;
                    return var0;
            }
        };
        var8 = {};
        var8.lastSelectedTab = var14;
        var10 = var13[var10];
        var10 = var12.bind(var11)(var10);
        var10 = var10.runOnJS;
        var8.runOnJS = var10;
        var8.onSelectedTabChange = var9;
        var2.__closure = var8;
        var8 = 8452224388929.0;
        var2.__workletHash = var8;
        var8 = _closure1_slot8;
        var2.__initData = var8;
        var2 = var6.bind(var7)(var3, var2);
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            var0 = {};
            var2 = _closure2_slot4;
            var0.segmentedControlState = var2;
            var1 = _closure2_slot7;
            var0.selectedTab = var1;
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useSearchSegmentedControlState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3721, 7866, 2]);