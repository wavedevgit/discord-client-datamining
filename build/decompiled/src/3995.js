// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var7 = dependencyMap;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4.value = var1;
    var1 = '__esModule';
    var1 = var6.bind(var8)(var2, var1, var4);
    var1 = {};
    var6 = 'RNSScreen';
    var1.uiViewClassName = var6;
    var4 = {};
    var8 = {};
    var9 = 'onAppear';
    var8.registrationName = var9;
    var4.topAppear = var8;
    var8 = {};
    var9 = 'onDisappear';
    var8.registrationName = var9;
    var4.topDisappear = var8;
    var8 = {};
    var9 = 'onDismissed';
    var8.registrationName = var9;
    var4.topDismissed = var8;
    var8 = {};
    var9 = 'onNativeDismissCancelled';
    var8.registrationName = var9;
    var4.topNativeDismissCancelled = var8;
    var8 = {};
    var9 = 'onWillAppear';
    var8.registrationName = var9;
    var4.topWillAppear = var8;
    var8 = {};
    var9 = 'onWillDisappear';
    var8.registrationName = var9;
    var4.topWillDisappear = var8;
    var8 = {};
    var9 = 'onHeaderHeightChange';
    var8.registrationName = var9;
    var4.topHeaderHeightChange = var8;
    var8 = {};
    var9 = 'onTransitionProgress';
    var8.registrationName = var9;
    var4.topTransitionProgress = var8;
    var8 = {};
    var9 = 'onGestureCancel';
    var8.registrationName = var9;
    var4.topGestureCancel = var8;
    var8 = {};
    var9 = 'onHeaderBackButtonClicked';
    var8.registrationName = var9;
    var4.topHeaderBackButtonClicked = var8;
    var8 = {};
    var9 = 'onSheetDetentChanged';
    var8.registrationName = var9;
    var4.topSheetDetentChanged = var8;
    var1.directEventTypes = var4;
    var10 = var0.Object;
    var9 = var10.assign;
    var8 = {
        'sheetAllowedDetents': true,
        'sheetLargestUndimmedDetent': true,
        'sheetGrabberVisible': true,
        'sheetCornerRadius': true,
        'sheetExpandsWhenScrolledToEdge': true,
        'sheetInitialDetent': true,
        'sheetElevation': true,
        'customAnimationOnSwipe': true,
        'fullScreenSwipeEnabled': true,
        'fullScreenSwipeShadowEnabled': true,
        'homeIndicatorHidden': true,
        'preventNativeDismiss': true,
        'gestureEnabled': true,
        'statusBarColor': null,
        'statusBarHidden': true,
        'screenOrientation': true,
        'statusBarAnimation': true,
        'statusBarStyle': true,
        'statusBarTranslucent': true,
        'gestureResponseDistance': true,
        'stackPresentation': true,
        'stackAnimation': true,
        'transitionDuration': true,
        'replaceAnimation': true,
        'swipeDirection': true,
        'hideKeyboardOnSwipe': true,
        'activityState': true,
        'navigationBarColor': null,
        'navigationBarTranslucent': true,
        'navigationBarHidden': true,
        'nativeBackButtonDismissalEnabled': true
    };
    var4 = {};
    var11 = 0;
    var12 = var7[var11];
    var0 = undefined;
    var12 = var5.bind(var0)(var12);
    var12 = var12.default;
    var4.process = var12;
    var8.statusBarColor = var4;
    var4 = {};
    var11 = var7[var11];
    var11 = var5.bind(var0)(var11);
    var11 = var11.default;
    var4.process = var11;
    var8.navigationBarColor = var4;
    var4 = 1;
    var4 = var7[var4];
    var12 = var5.bind(var0)(var4);
    var11 = var12.ConditionallyIgnoredEventHandlers;
    var4 = {
        'onAppear': true,
        'onDisappear': true,
        'onDismissed': true,
        'onNativeDismissCancelled': true,
        'onWillAppear': true,
        'onWillDisappear': true,
        'onHeaderHeightChange': true,
        'onTransitionProgress': true,
        'onGestureCancel': true,
        'onHeaderBackButtonClicked': true,
        'onSheetDetentChanged': true
    };
    var4 = var11.bind(var12)(var4);
    var4 = var9.bind(var10)(var8, var4);
    var1.validAttributes = var4;
    var _closure1_slot0 = var1;
    var4 = 2;
    var4 = var7[var4];
    var5 = var5.bind(var0)(var4);
    var4 = var5.get;
    var3 = function() { // Environment: var3
        var0 = _closure1_slot0;
        return var0;
    };
    var3 = var4.bind(var5)(var6, var3);
    var2.default = var3;
    var2.__INTERNAL_VIEW_CONFIG = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [38, 110, 42]);