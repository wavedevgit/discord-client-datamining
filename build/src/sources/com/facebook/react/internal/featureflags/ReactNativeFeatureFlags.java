package com.facebook.react.internal.featureflags;

import com.facebook.react.internal.featureflags.ReactNativeFeatureFlags;
import com.facebook.react.internal.featureflags.ReactNativeFeatureFlagsCxxAccessor;
import kotlin.Metadata;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000>\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b.\n\u0002\u0010\u0006\n\u0002\b\u0011\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0002\b\u0004\bÆ\u0002\u0018\u00002\u00020\u0001B\t\b\u0002¢\u0006\u0004\b\u0002\u0010\u0003J\b\u0010\b\u001a\u00020\tH\u0007J\b\u0010\n\u001a\u00020\tH\u0007J\b\u0010\u000b\u001a\u00020\tH\u0007J\b\u0010\f\u001a\u00020\tH\u0007J\b\u0010\r\u001a\u00020\tH\u0007J\b\u0010\u000e\u001a\u00020\tH\u0007J\b\u0010\u000f\u001a\u00020\tH\u0007J\b\u0010\u0010\u001a\u00020\tH\u0007J\b\u0010\u0011\u001a\u00020\tH\u0007J\b\u0010\u0012\u001a\u00020\tH\u0007J\b\u0010\u0013\u001a\u00020\tH\u0007J\b\u0010\u0014\u001a\u00020\tH\u0007J\b\u0010\u0015\u001a\u00020\tH\u0007J\b\u0010\u0016\u001a\u00020\tH\u0007J\b\u0010\u0017\u001a\u00020\tH\u0007J\b\u0010\u0018\u001a\u00020\tH\u0007J\b\u0010\u0019\u001a\u00020\tH\u0007J\b\u0010\u001a\u001a\u00020\tH\u0007J\b\u0010\u001b\u001a\u00020\tH\u0007J\b\u0010\u001c\u001a\u00020\tH\u0007J\b\u0010\u001d\u001a\u00020\tH\u0007J\b\u0010\u001e\u001a\u00020\tH\u0007J\b\u0010\u001f\u001a\u00020\tH\u0007J\b\u0010 \u001a\u00020\tH\u0007J\b\u0010!\u001a\u00020\tH\u0007J\b\u0010\"\u001a\u00020\tH\u0007J\b\u0010#\u001a\u00020\tH\u0007J\b\u0010$\u001a\u00020\tH\u0007J\b\u0010%\u001a\u00020\tH\u0007J\b\u0010&\u001a\u00020\tH\u0007J\b\u0010'\u001a\u00020\tH\u0007J\b\u0010(\u001a\u00020\tH\u0007J\b\u0010)\u001a\u00020\tH\u0007J\b\u0010*\u001a\u00020\tH\u0007J\b\u0010+\u001a\u00020\tH\u0007J\b\u0010,\u001a\u00020\tH\u0007J\b\u0010-\u001a\u00020\tH\u0007J\b\u0010.\u001a\u00020\tH\u0007J\b\u0010/\u001a\u00020\tH\u0007J\b\u00100\u001a\u00020\tH\u0007J\b\u00101\u001a\u00020\tH\u0007J\b\u00102\u001a\u00020\tH\u0007J\b\u00103\u001a\u00020\tH\u0007J\b\u00104\u001a\u00020\tH\u0007J\b\u00105\u001a\u00020\tH\u0007J\b\u00106\u001a\u00020\tH\u0007J\b\u00107\u001a\u000208H\u0007J\b\u00109\u001a\u00020\tH\u0007J\b\u0010:\u001a\u00020\tH\u0007J\b\u0010;\u001a\u00020\tH\u0007J\b\u0010<\u001a\u00020\tH\u0007J\b\u0010=\u001a\u00020\tH\u0007J\b\u0010>\u001a\u00020\tH\u0007J\b\u0010?\u001a\u00020\tH\u0007J\b\u0010@\u001a\u00020\tH\u0007J\b\u0010A\u001a\u00020\tH\u0007J\b\u0010B\u001a\u00020\tH\u0007J\b\u0010C\u001a\u00020\tH\u0007J\b\u0010D\u001a\u00020\tH\u0007J\b\u0010E\u001a\u00020\tH\u0007J\b\u0010F\u001a\u00020\tH\u0007J\b\u0010G\u001a\u000208H\u0007J\b\u0010H\u001a\u00020\tH\u0007J\u0010\u0010I\u001a\u00020J2\u0006\u0010K\u001a\u00020LH\u0007J\b\u0010M\u001a\u00020JH\u0007J\u0012\u0010N\u001a\u0004\u0018\u00010O2\u0006\u0010K\u001a\u00020LH\u0007J\u001b\u0010P\u001a\u00020J2\f\u0010Q\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005H\u0001¢\u0006\u0002\bRR\u0014\u0010\u0004\u001a\b\u0012\u0004\u0012\u00020\u00060\u0005X\u0082\u000e¢\u0006\u0002\n\u0000R\u000e\u0010\u0007\u001a\u00020\u0006X\u0082\u000e¢\u0006\u0002\n\u0000¨\u0006S"}, d2 = {"Lcom/facebook/react/internal/featureflags/ReactNativeFeatureFlags;", "", "<init>", "()V", "accessorProvider", "Lkotlin/Function0;", "Lcom/facebook/react/internal/featureflags/ReactNativeFeatureFlagsAccessor;", "accessor", "commonTestFlag", "", "animatedShouldSignalBatch", "cxxNativeAnimatedEnabled", "cxxNativeAnimatedRemoveJsSync", "disableMainQueueSyncDispatchIOS", "disableMountItemReorderingAndroid", "disableTextLayoutManagerCacheAndroid", "enableAccessibilityOrder", "enableAccumulatedUpdatesInRawPropsAndroid", "enableAndroidTextMeasurementOptimizations", "enableBridgelessArchitecture", "enableCppPropsIteratorSetter", "enableCustomFocusSearchOnClippedElementsAndroid", "enableDestroyShadowTreeRevisionAsync", "enableDoubleMeasurementFixAndroid", "enableEagerRootViewAttachment", "enableFabricLogs", "enableFabricRenderer", "enableFixForParentTagDuringReparenting", "enableFontScaleChangesUpdatingLayout", "enableIOSTextBaselineOffsetPerLine", "enableIOSViewClipToPaddingBox", "enableInteropViewManagerClassLookUpOptimizationIOS", "enableLayoutAnimationsOnAndroid", "enableLayoutAnimationsOnIOS", "enableMainQueueCoordinatorOnIOS", "enableMainQueueModulesOnIOS", "enableModuleArgumentNSNullConversionIOS", "enableNativeCSSParsing", "enableNetworkEventReporting", "enableNewBackgroundAndBorderDrawables", "enablePreparedTextLayout", "enablePropsUpdateReconciliationAndroid", "enableResourceTimingAPI", "enableSynchronousStateUpdates", "enableViewCulling", "enableViewRecycling", "enableViewRecyclingForText", "enableViewRecyclingForView", "enableVirtualViewDebugFeatures", "enableVirtualViewRenderState", "enableVirtualViewWindowFocusDetection", "fixMappingOfEventPrioritiesBetweenFabricAndReact", "fuseboxEnabledRelease", "fuseboxNetworkInspectionEnabled", "hideOffscreenVirtualViewsOnIOS", "preparedTextCacheSize", "", "preventShadowTreeCommitExhaustion", "traceTurboModulePromiseRejectionsOnAndroid", "updateRuntimeShadowNodeReferencesOnCommit", "useAlwaysAvailableJSErrorHandling", "useFabricInterop", "useNativeEqualsInNativeReadableArrayAndroid", "useNativeTransformHelperAndroid", "useNativeViewConfigsInBridgelessMode", "useOptimizedEventBatchingOnAndroid", "usePullModelOnAndroid", "useRawPropsJsiValue", "useShadowNodeStateOnClone", "useTurboModuleInterop", "useTurboModules", "virtualViewPrerenderRatio", "runtimeCrashUiThreadUtils", "override", "", "provider", "Lcom/facebook/react/internal/featureflags/ReactNativeFeatureFlagsProvider;", "dangerouslyReset", "dangerouslyForceOverride", "", "setAccessorProvider", "newAccessorProvider", "setAccessorProvider$ReactAndroid_release", "ReactAndroid_release"}, k = 1, mv = {2, 1, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ReactNativeFeatureFlags {
    @NotNull
    public static final ReactNativeFeatureFlags INSTANCE = new ReactNativeFeatureFlags();
    @NotNull
    private static ReactNativeFeatureFlagsAccessor accessor;
    @NotNull
    private static Function0<? extends ReactNativeFeatureFlagsAccessor> accessorProvider;

    static {
        Function0<? extends ReactNativeFeatureFlagsAccessor> function0 = new Function0() { // from class: gb.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                ReactNativeFeatureFlagsCxxAccessor accessorProvider$lambda$0;
                accessorProvider$lambda$0 = ReactNativeFeatureFlags.accessorProvider$lambda$0();
                return accessorProvider$lambda$0;
            }
        };
        accessorProvider = function0;
        accessor = (ReactNativeFeatureFlagsAccessor) function0.invoke();
    }

    private ReactNativeFeatureFlags() {
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final ReactNativeFeatureFlagsCxxAccessor accessorProvider$lambda$0() {
        return new ReactNativeFeatureFlagsCxxAccessor();
    }

    public static final boolean animatedShouldSignalBatch() {
        return accessor.animatedShouldSignalBatch();
    }

    public static final boolean commonTestFlag() {
        return accessor.commonTestFlag();
    }

    public static final boolean cxxNativeAnimatedEnabled() {
        return accessor.cxxNativeAnimatedEnabled();
    }

    public static final boolean cxxNativeAnimatedRemoveJsSync() {
        return accessor.cxxNativeAnimatedRemoveJsSync();
    }

    public static final String dangerouslyForceOverride(@NotNull ReactNativeFeatureFlagsProvider provider) {
        Intrinsics.checkNotNullParameter(provider, "provider");
        ReactNativeFeatureFlagsAccessor reactNativeFeatureFlagsAccessor = (ReactNativeFeatureFlagsAccessor) accessorProvider.invoke();
        String dangerouslyForceOverride = reactNativeFeatureFlagsAccessor.dangerouslyForceOverride(provider);
        accessor = reactNativeFeatureFlagsAccessor;
        return dangerouslyForceOverride;
    }

    public static final void dangerouslyReset() {
        accessor.dangerouslyReset();
        accessor = (ReactNativeFeatureFlagsAccessor) accessorProvider.invoke();
    }

    public static final boolean disableMainQueueSyncDispatchIOS() {
        return accessor.disableMainQueueSyncDispatchIOS();
    }

    public static final boolean disableMountItemReorderingAndroid() {
        return accessor.disableMountItemReorderingAndroid();
    }

    public static final boolean disableTextLayoutManagerCacheAndroid() {
        return accessor.disableTextLayoutManagerCacheAndroid();
    }

    public static final boolean enableAccessibilityOrder() {
        return accessor.enableAccessibilityOrder();
    }

    public static final boolean enableAccumulatedUpdatesInRawPropsAndroid() {
        return accessor.enableAccumulatedUpdatesInRawPropsAndroid();
    }

    public static final boolean enableAndroidTextMeasurementOptimizations() {
        return accessor.enableAndroidTextMeasurementOptimizations();
    }

    public static final boolean enableBridgelessArchitecture() {
        return accessor.enableBridgelessArchitecture();
    }

    public static final boolean enableCppPropsIteratorSetter() {
        return accessor.enableCppPropsIteratorSetter();
    }

    public static final boolean enableCustomFocusSearchOnClippedElementsAndroid() {
        return accessor.enableCustomFocusSearchOnClippedElementsAndroid();
    }

    public static final boolean enableDestroyShadowTreeRevisionAsync() {
        return accessor.enableDestroyShadowTreeRevisionAsync();
    }

    public static final boolean enableDoubleMeasurementFixAndroid() {
        return accessor.enableDoubleMeasurementFixAndroid();
    }

    public static final boolean enableEagerRootViewAttachment() {
        return accessor.enableEagerRootViewAttachment();
    }

    public static final boolean enableFabricLogs() {
        return accessor.enableFabricLogs();
    }

    public static final boolean enableFabricRenderer() {
        return accessor.enableFabricRenderer();
    }

    public static final boolean enableFixForParentTagDuringReparenting() {
        return accessor.enableFixForParentTagDuringReparenting();
    }

    public static final boolean enableFontScaleChangesUpdatingLayout() {
        return accessor.enableFontScaleChangesUpdatingLayout();
    }

    public static final boolean enableIOSTextBaselineOffsetPerLine() {
        return accessor.enableIOSTextBaselineOffsetPerLine();
    }

    public static final boolean enableIOSViewClipToPaddingBox() {
        return accessor.enableIOSViewClipToPaddingBox();
    }

    public static final boolean enableInteropViewManagerClassLookUpOptimizationIOS() {
        return accessor.enableInteropViewManagerClassLookUpOptimizationIOS();
    }

    public static final boolean enableLayoutAnimationsOnAndroid() {
        return accessor.enableLayoutAnimationsOnAndroid();
    }

    public static final boolean enableLayoutAnimationsOnIOS() {
        return accessor.enableLayoutAnimationsOnIOS();
    }

    public static final boolean enableMainQueueCoordinatorOnIOS() {
        return accessor.enableMainQueueCoordinatorOnIOS();
    }

    public static final boolean enableMainQueueModulesOnIOS() {
        return accessor.enableMainQueueModulesOnIOS();
    }

    public static final boolean enableModuleArgumentNSNullConversionIOS() {
        return accessor.enableModuleArgumentNSNullConversionIOS();
    }

    public static final boolean enableNativeCSSParsing() {
        return accessor.enableNativeCSSParsing();
    }

    public static final boolean enableNetworkEventReporting() {
        return accessor.enableNetworkEventReporting();
    }

    public static final boolean enableNewBackgroundAndBorderDrawables() {
        return accessor.enableNewBackgroundAndBorderDrawables();
    }

    public static final boolean enablePreparedTextLayout() {
        return accessor.enablePreparedTextLayout();
    }

    public static final boolean enablePropsUpdateReconciliationAndroid() {
        return accessor.enablePropsUpdateReconciliationAndroid();
    }

    public static final boolean enableResourceTimingAPI() {
        return accessor.enableResourceTimingAPI();
    }

    public static final boolean enableSynchronousStateUpdates() {
        return accessor.enableSynchronousStateUpdates();
    }

    public static final boolean enableViewCulling() {
        return accessor.enableViewCulling();
    }

    public static final boolean enableViewRecycling() {
        return accessor.enableViewRecycling();
    }

    public static final boolean enableViewRecyclingForText() {
        return accessor.enableViewRecyclingForText();
    }

    public static final boolean enableViewRecyclingForView() {
        return accessor.enableViewRecyclingForView();
    }

    public static final boolean enableVirtualViewDebugFeatures() {
        return accessor.enableVirtualViewDebugFeatures();
    }

    public static final boolean enableVirtualViewRenderState() {
        return accessor.enableVirtualViewRenderState();
    }

    public static final boolean enableVirtualViewWindowFocusDetection() {
        return accessor.enableVirtualViewWindowFocusDetection();
    }

    public static final boolean fixMappingOfEventPrioritiesBetweenFabricAndReact() {
        return accessor.fixMappingOfEventPrioritiesBetweenFabricAndReact();
    }

    public static final boolean fuseboxEnabledRelease() {
        return accessor.fuseboxEnabledRelease();
    }

    public static final boolean fuseboxNetworkInspectionEnabled() {
        return accessor.fuseboxNetworkInspectionEnabled();
    }

    public static final boolean hideOffscreenVirtualViewsOnIOS() {
        return accessor.hideOffscreenVirtualViewsOnIOS();
    }

    public static final void override(@NotNull ReactNativeFeatureFlagsProvider provider) {
        Intrinsics.checkNotNullParameter(provider, "provider");
        accessor.override(provider);
    }

    public static final double preparedTextCacheSize() {
        return accessor.preparedTextCacheSize();
    }

    public static final boolean preventShadowTreeCommitExhaustion() {
        return accessor.preventShadowTreeCommitExhaustion();
    }

    public static final boolean runtimeCrashUiThreadUtils() {
        return accessor.runtimeCrashUiThreadUtils();
    }

    public static final boolean traceTurboModulePromiseRejectionsOnAndroid() {
        return accessor.traceTurboModulePromiseRejectionsOnAndroid();
    }

    public static final boolean updateRuntimeShadowNodeReferencesOnCommit() {
        return accessor.updateRuntimeShadowNodeReferencesOnCommit();
    }

    public static final boolean useAlwaysAvailableJSErrorHandling() {
        return accessor.useAlwaysAvailableJSErrorHandling();
    }

    public static final boolean useFabricInterop() {
        return accessor.useFabricInterop();
    }

    public static final boolean useNativeEqualsInNativeReadableArrayAndroid() {
        return accessor.useNativeEqualsInNativeReadableArrayAndroid();
    }

    public static final boolean useNativeTransformHelperAndroid() {
        return accessor.useNativeTransformHelperAndroid();
    }

    public static final boolean useNativeViewConfigsInBridgelessMode() {
        return accessor.useNativeViewConfigsInBridgelessMode();
    }

    public static final boolean useOptimizedEventBatchingOnAndroid() {
        return accessor.useOptimizedEventBatchingOnAndroid();
    }

    public static final boolean usePullModelOnAndroid() {
        return accessor.usePullModelOnAndroid();
    }

    public static final boolean useRawPropsJsiValue() {
        return accessor.useRawPropsJsiValue();
    }

    public static final boolean useShadowNodeStateOnClone() {
        return accessor.useShadowNodeStateOnClone();
    }

    public static final boolean useTurboModuleInterop() {
        return accessor.useTurboModuleInterop();
    }

    public static final boolean useTurboModules() {
        return accessor.useTurboModules();
    }

    public static final double virtualViewPrerenderRatio() {
        return accessor.virtualViewPrerenderRatio();
    }

    public final void setAccessorProvider$ReactAndroid_release(@NotNull Function0<? extends ReactNativeFeatureFlagsAccessor> newAccessorProvider) {
        Intrinsics.checkNotNullParameter(newAccessorProvider, "newAccessorProvider");
        accessorProvider = newAccessorProvider;
        accessor = (ReactNativeFeatureFlagsAccessor) newAccessorProvider.invoke();
    }
}
