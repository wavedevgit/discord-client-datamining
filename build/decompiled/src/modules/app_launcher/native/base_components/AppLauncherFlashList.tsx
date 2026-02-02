// modules/app_launcher/native/base_components/AppLauncherFlashList.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var6[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var7 = var3.bind(var0)(var4);
    var _closure1_slot2 = var7;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.ScrollView;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var4 = var7.forwardRef;
    var3 = function(arg0, arg1) { // Environment: var1
        _fun105492: for (var _fun105492_ip = 0;;) switch (_fun105492_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var3 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 5;
                var0 = var8[var0];
                var4 = undefined;
                var2 = var3.bind(var4)(var0);
                var0 = var2.useAppLauncherContext;
                var0 = var0.bind(var2)();
                var2 = var0.entrypoint;
                var7 = var6.simultaneousHandlers;
                var0 = function arg0() {
                    var4 = arg0;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot2;
                    var2 = var3.useMemo;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = function() { // Environment: var0
                        _fun105494: for (var _fun105494_ip = 0;;) switch (_fun105494_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var0 = null;
                                if (!(var0 != var1)) {
                                    _fun105494_ip = 42;
                                    continue _fun105494
                                }
                            case 13:
                                var2 = _closure1_slot2;
                                var1 = var2.forwardRef;
                                var0 = function(arg0, arg1) { // Environment: var0
                                    var3 = _closure1_slot2;
                                    var2 = var3.useMemo;
                                    var1 = function() { // Environment: var0
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot1;
                                        var0 = 3;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var0 = var2.bind(var0)(var1);
                                        var1 = var0.Gesture;
                                        var0 = var1.Native;
                                        var2 = var0.bind(var1)();
                                        var1 = var2.simultaneousWithExternalGesture;
                                        var0 = _closure3_slot0;
                                        var0 = var1.bind(var2)(var0);
                                        return var0;
                                    };
                                    var0 = new Array(0);
                                    var5 = var2.bind(var3)(var1, var0);
                                    var3 = _closure1_slot4;
                                    var1 = _closure1_slot0;
                                    var2 = _closure1_slot1;
                                    var0 = 3;
                                    var0 = var2[var0];
                                    var2 = undefined;
                                    var0 = var1.bind(var2)(var0);
                                    var1 = var0.GestureDetector;
                                    var0 = {};
                                    var0.gesture = var5;
                                    var5 = _closure1_slot3;
                                    var4 = {};
                                    var6 = arg1;
                                    var4.ref = var6;
                                    var7 = arg0;
                                    var8 = var4;
                                    var6 = copyDataProperties(var8, var7);
                                    var4 = var3.bind(var2)(var5, var4);
                                    var0.children = var4;
                                    var0 = var3.bind(var2)(var1, var0);
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                _fun105494_ip = 49;
                                continue _fun105494;
                            case 42:
                                var0 = _closure1_slot3;
                            case 49:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var7 = var0.bind(var4)(var7);
                var0 = 6;
                var0 = var8[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.AppLauncherEntrypoint;
                var0 = var0.VOICE;
                if (!(var2 !== var0)) {
                    _fun105492_ip = 330;
                    continue _fun105492
                }
            case 98:
                var3 = _closure1_slot4;
                var2 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 7;
                var0 = var8[var0];
                var0 = var2.bind(var4)(var0);
                var2 = var0.BottomSheetFlashList;
                var0 = {};
                var8 = var6.ListHeaderComponent;
                var0.ListHeaderComponent = var8;
                var8 = var6.onScroll;
                var0.onScroll = var8;
                var8 = var6.contentContainerStyle;
                var0.contentContainerStyle = var8;
                var8 = var6.scrollIndicatorInsets;
                var0.scrollIndicatorInsets = var8;
                var8 = var6.renderItem;
                var0.renderItem = var8;
                var8 = var6.getItemType;
                var0.getItemType = var8;
                var8 = var6.data;
                var0.data = var8;
                var8 = var6.estimatedItemSize;
                var0.estimatedItemSize = var8;
                var8 = var6.preserveScrollMomentum;
                var0.preserveScrollMomentum = var8;
                var8 = var6.automaticallyAdjustsScrollIndicatorInsets;
                var0.automaticallyAdjustsScrollIndicatorInsets = var8;
                var8 = var6.keyboardDismissMode;
                var0.keyboardDismissMode = var8;
                var8 = var6.keyboardShouldPersistTaps;
                var0.keyboardShouldPersistTaps = var8;
                var8 = var6.showsVerticalScrollIndicator;
                var0.showsVerticalScrollIndicator = var8;
                var8 = var6.lockableScrollableContentOffsetY;
                var0.lockableScrollableContentOffsetY = var8;
                var8 = var6.onViewableItemsChanged;
                var0.onViewableItemsChanged = var8;
                var8 = var6.viewabilityConfigCallbackPairs;
                var0.viewabilityConfigCallbackPairs = var8;
                var8 = var6.bottomViewabilityInsetRef;
                var0.bottomViewabilityInsetRef = var8;
                var0.ref = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun105492_ip = 551;
                continue _fun105492;
            case 330:
                var3 = _closure1_slot4;
                var2 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 7;
                var1 = var8[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.AnimatedFlashList;
                var1 = {};
                var1.renderScrollComponent = var7;
                var7 = var6.ListHeaderComponent;
                var1.ListHeaderComponent = var7;
                var7 = var6.animatedOnScroll;
                var1.onScroll = var7;
                var7 = var6.contentContainerStyle;
                var1.contentContainerStyle = var7;
                var7 = var6.scrollIndicatorInsets;
                var1.scrollIndicatorInsets = var7;
                var7 = var6.renderItem;
                var1.renderItem = var7;
                var7 = var6.getItemType;
                var1.getItemType = var7;
                var7 = var6.data;
                var1.data = var7;
                var7 = var6.estimatedItemSize;
                var1.estimatedItemSize = var7;
                var7 = var6.automaticallyAdjustsScrollIndicatorInsets;
                var1.automaticallyAdjustsScrollIndicatorInsets = var7;
                var7 = var6.keyboardDismissMode;
                var1.keyboardDismissMode = var7;
                var7 = var6.keyboardShouldPersistTaps;
                var1.keyboardShouldPersistTaps = var7;
                var7 = var6.showsVerticalScrollIndicator;
                var1.showsVerticalScrollIndicator = var7;
                var7 = var6.onViewableItemsChanged;
                var1.onViewableItemsChanged = var7;
                var7 = var6.viewabilityConfigCallbackPairs;
                var1.viewabilityConfigCallbackPairs = var7;
                var6 = var6.animatedProps;
                var1.animatedProps = var6;
                var6 = 'never';
                var1.overScrollMode = var6;
                var1.ref = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 551:
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 'AppLauncherFlashList';
    var3.displayName = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/base_components/AppLauncherFlashList.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function arg0() {
        var3 = _closure1_slot2;
        var1 = var3.useContext;
        var4 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 4;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var4.bind(var2)(var0);
        var0 = var0.ControlsGestureScrollLock;
        var1 = var1.bind(var3)(var0);
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.useAppLauncherFlashListProps = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 4926, 13708, 7697, 7698, 5717, 2]);