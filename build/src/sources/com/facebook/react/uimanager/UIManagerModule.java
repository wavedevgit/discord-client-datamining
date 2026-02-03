package com.facebook.react.uimanager;

import android.content.ComponentCallbacks2;
import android.content.res.Configuration;
import android.view.View;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Dynamic;
import com.facebook.react.bridge.GuardedRunnable;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.OnBatchCompleteListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMarker;
import com.facebook.react.bridge.ReactMarkerConstants;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableType;
import com.facebook.react.bridge.UIManager;
import com.facebook.react.bridge.UIManagerListener;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogLevel;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogger;
import com.facebook.react.common.build.ReactBuildConfig;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.common.ViewUtil;
import com.facebook.react.uimanager.debug.NotThreadSafeViewHierarchyUpdateDebugListener;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.uimanager.events.EventDispatcherImpl;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.facebook.react.uimanager.internal.LegacyArchitectureShadowNodeLogger;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.concurrent.CopyOnWriteArrayList;
@ReactModule(name = UIManagerModule.NAME)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class UIManagerModule extends ReactContextBaseJavaModule implements OnBatchCompleteListener, LifecycleEventListener, UIManager {
    static final /* synthetic */ boolean $assertionsDisabled = false;
    private static final boolean DEBUG;
    public static final String NAME = "UIManager";
    public static final String TAG;
    private int mBatchId;
    private final Map<String, Object> mCustomDirectEvents;
    private final EventDispatcher mEventDispatcher;
    private final List<UIManagerModuleListener> mListeners;
    private final MemoryTrimCallback mMemoryTrimCallback;
    private final Map<String, Object> mModuleConstants;
    private final UIImplementation mUIImplementation;
    private final CopyOnWriteArrayList<UIManagerListener> mUIManagerListeners;
    private final ViewManagerRegistry mViewManagerRegistry;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface CustomEventNamesResolver {
        String resolveCustomEventName(String str);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static class MemoryTrimCallback implements ComponentCallbacks2 {
        @Override // android.content.ComponentCallbacks
        public void onConfigurationChanged(Configuration configuration) {
        }

        @Override // android.content.ComponentCallbacks
        public void onLowMemory() {
        }

        @Override // android.content.ComponentCallbacks2
        public void onTrimMemory(int i10) {
            if (i10 >= 60) {
                YogaNodePool.get().clear();
            }
        }

        private MemoryTrimCallback() {
        }
    }

    static {
        LegacyArchitectureLogger.assertLegacyArchitecture("UIManagerModule", LegacyArchitectureLogLevel.ERROR);
        TAG = UIManagerModule.class.getSimpleName();
        DEBUG = a9.c.a().a(b9.a.f6363g);
    }

    public UIManagerModule(ReactApplicationContext reactApplicationContext, ViewManagerResolver viewManagerResolver, int i10) {
        super(reactApplicationContext);
        this.mMemoryTrimCallback = new MemoryTrimCallback();
        this.mListeners = new ArrayList();
        this.mUIManagerListeners = new CopyOnWriteArrayList<>();
        this.mBatchId = 0;
        DisplayMetricsHolder.initDisplayMetricsIfNotInitialized(reactApplicationContext);
        EventDispatcherImpl eventDispatcherImpl = new EventDispatcherImpl(reactApplicationContext);
        this.mEventDispatcher = eventDispatcherImpl;
        this.mModuleConstants = createConstants(viewManagerResolver);
        this.mCustomDirectEvents = UIManagerModuleConstants.directEventTypeConstants;
        ViewManagerRegistry viewManagerRegistry = new ViewManagerRegistry(viewManagerResolver);
        this.mViewManagerRegistry = viewManagerRegistry;
        this.mUIImplementation = new UIImplementation(reactApplicationContext, viewManagerRegistry, eventDispatcherImpl, i10);
        reactApplicationContext.addLifecycleEventListener(this);
    }

    private static Map<String, Object> createConstants(ViewManagerResolver viewManagerResolver) {
        ReactMarker.logMarker(ReactMarkerConstants.CREATE_UI_MANAGER_MODULE_CONSTANTS_START);
        qb.b.a(0L, "CreateUIManagerConstants").b("Lazy", Boolean.TRUE).c();
        try {
            return UIManagerModuleConstantsHelper.internal_createConstants(viewManagerResolver);
        } finally {
            qb.a.i(0L);
            ReactMarker.logMarker(ReactMarkerConstants.CREATE_UI_MANAGER_MODULE_CONSTANTS_END);
        }
    }

    public <T extends View> int addRootView(T t10) {
        return addRootView(t10, null);
    }

    public void addUIBlock(UIBlock uIBlock) {
        this.mUIImplementation.addUIBlock(uIBlock);
    }

    @Override // com.facebook.react.bridge.UIManager
    public void addUIManagerEventListener(UIManagerListener uIManagerListener) {
        this.mUIManagerListeners.add(uIManagerListener);
    }

    @Deprecated
    public void addUIManagerListener(UIManagerModuleListener uIManagerModuleListener) {
        this.mListeners.add(uIManagerModuleListener);
    }

    @ReactMethod
    public void clearJSResponder() {
        this.mUIImplementation.clearJSResponder();
    }

    @ReactMethod
    public void configureNextLayoutAnimation(ReadableMap readableMap, Callback callback, Callback callback2) {
        this.mUIImplementation.configureNextLayoutAnimation(readableMap, callback);
    }

    @ReactMethod
    public void createView(int i10, String str, int i11, ReadableMap readableMap) {
        if (DEBUG) {
            String str2 = "(UIManager.createView) tag: " + i10 + ", class: " + str + ", props: " + readableMap;
            p8.a.b(ReactConstants.TAG, str2);
            a9.c.a().c(b9.a.f6363g, str2);
        }
        this.mUIImplementation.createView(i10, str, i11, readableMap);
    }

    @Override // com.facebook.react.bridge.UIManager
    @Deprecated
    public void dispatchCommand(int i10, int i11, ReadableArray readableArray) {
        this.mUIImplementation.dispatchViewManagerCommand(i10, i11, readableArray);
    }

    @ReactMethod
    public void dispatchViewManagerCommand(int i10, Dynamic dynamic, ReadableArray readableArray) {
        UIManager uIManager = UIManagerHelper.getUIManager(getReactApplicationContext(), ViewUtil.getUIManagerType(i10));
        if (uIManager != null) {
            if (dynamic.getType() == ReadableType.Number) {
                uIManager.dispatchCommand(i10, dynamic.asInt(), readableArray);
            } else if (dynamic.getType() == ReadableType.String) {
                uIManager.dispatchCommand(i10, dynamic.asString(), readableArray);
            }
        }
    }

    @ReactMethod
    public void findSubviewIn(int i10, ReadableArray readableArray, Callback callback) {
        this.mUIImplementation.findSubviewIn(i10, Math.round(PixelUtil.toPixelFromDIP(readableArray.getDouble(0))), Math.round(PixelUtil.toPixelFromDIP(readableArray.getDouble(1))), callback);
    }

    @Override // com.facebook.react.bridge.BaseJavaModule
    public Map<String, Object> getConstants() {
        return this.mModuleConstants;
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public WritableMap getConstantsForViewManager(String str) {
        ViewManager resolveViewManager = this.mUIImplementation.resolveViewManager(str);
        if (resolveViewManager == null) {
            return null;
        }
        return getConstantsForViewManager(resolveViewManager, this.mCustomDirectEvents);
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public WritableMap getDefaultEventTypes() {
        return Arguments.makeNativeMap(UIManagerModuleConstantsHelper.getDefaultExportableEventTypes());
    }

    @Deprecated
    public CustomEventNamesResolver getDirectEventNamesResolver() {
        return new CustomEventNamesResolver() { // from class: com.facebook.react.uimanager.UIManagerModule.1
            @Override // com.facebook.react.uimanager.UIManagerModule.CustomEventNamesResolver
            public String resolveCustomEventName(String str) {
                return UIManagerModule.this.resolveCustomDirectEventName(str);
            }
        };
    }

    @Override // com.facebook.react.bridge.UIManager
    public EventDispatcher getEventDispatcher() {
        return this.mEventDispatcher;
    }

    @Override // com.facebook.react.bridge.NativeModule
    @NonNull
    public String getName() {
        return NAME;
    }

    @Override // com.facebook.react.bridge.PerformanceCounter
    public Map<String, Long> getPerformanceCounters() {
        return this.mUIImplementation.getProfiledBatchPerfCounters();
    }

    @Deprecated
    public UIImplementation getUIImplementation() {
        return this.mUIImplementation;
    }

    @Deprecated
    public ViewManagerRegistry getViewManagerRegistry_DO_NOT_USE() {
        return this.mViewManagerRegistry;
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void initialize() {
        getReactApplicationContext().registerComponentCallbacks(this.mMemoryTrimCallback);
        getReactApplicationContext().registerComponentCallbacks(this.mViewManagerRegistry);
    }

    @Override // com.facebook.react.bridge.BaseJavaModule, com.facebook.react.bridge.NativeModule, com.facebook.react.turbomodule.core.interfaces.TurboModule
    public void invalidate() {
        super.invalidate();
        this.mEventDispatcher.onCatalystInstanceDestroyed();
        this.mUIImplementation.onCatalystInstanceDestroyed();
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        reactApplicationContext.unregisterComponentCallbacks(this.mMemoryTrimCallback);
        reactApplicationContext.unregisterComponentCallbacks(this.mViewManagerRegistry);
        YogaNodePool.get().clear();
        ViewManagerPropertyUpdater.clear();
    }

    public void invalidateNodeLayout(int i10) {
        ReactShadowNode resolveShadowNode = this.mUIImplementation.resolveShadowNode(i10);
        if (resolveShadowNode == null) {
            p8.a.J(ReactConstants.TAG, "Warning : attempted to dirty a non-existent react shadow node. reactTag=" + i10);
            return;
        }
        resolveShadowNode.dirty();
        this.mUIImplementation.dispatchViewUpdates(-1);
    }

    @ReactMethod
    public void manageChildren(int i10, ReadableArray readableArray, ReadableArray readableArray2, ReadableArray readableArray3, ReadableArray readableArray4, ReadableArray readableArray5) {
        if (DEBUG) {
            String str = "(UIManager.manageChildren) tag: " + i10 + ", moveFrom: " + readableArray + ", moveTo: " + readableArray2 + ", addTags: " + readableArray3 + ", atIndices: " + readableArray4 + ", removeFrom: " + readableArray5;
            p8.a.b(ReactConstants.TAG, str);
            a9.c.a().c(b9.a.f6363g, str);
        }
        this.mUIImplementation.manageChildren(i10, readableArray, readableArray2, readableArray3, readableArray4, readableArray5);
    }

    @Override // com.facebook.react.bridge.UIManager
    public void markActiveTouchForTag(int i10, int i11) {
    }

    @Override // com.facebook.react.bridge.UIManager
    public void markViewAsInTransition(int i10, int i11, boolean z10) {
    }

    @ReactMethod
    public void measure(int i10, Callback callback) {
        this.mUIImplementation.measure(i10, callback);
    }

    @ReactMethod
    public void measureInWindow(int i10, Callback callback) {
        this.mUIImplementation.measureInWindow(i10, callback);
    }

    @ReactMethod
    public void measureLayout(int i10, int i11, Callback callback, Callback callback2) {
        this.mUIImplementation.measureLayout(i10, i11, callback, callback2);
    }

    public void onBatchComplete() {
        int i10 = this.mBatchId;
        this.mBatchId = i10 + 1;
        qb.b.a(0L, "onBatchCompleteUI").a("BatchId", i10).c();
        for (UIManagerModuleListener uIManagerModuleListener : this.mListeners) {
            uIManagerModuleListener.willDispatchViewUpdates(this);
        }
        Iterator<UIManagerListener> it = this.mUIManagerListeners.iterator();
        while (it.hasNext()) {
            it.next().willDispatchViewUpdates(this);
        }
        try {
            if (this.mUIImplementation.getRootViewNum() > 0) {
                this.mUIImplementation.dispatchViewUpdates(i10);
            }
        } finally {
            qb.a.i(0L);
        }
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostDestroy() {
        this.mUIImplementation.onHostDestroy();
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostPause() {
        this.mUIImplementation.onHostPause();
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostResume() {
        this.mUIImplementation.onHostResume();
    }

    public void prependUIBlock(UIBlock uIBlock) {
        this.mUIImplementation.prependUIBlock(uIBlock);
    }

    @Override // com.facebook.react.bridge.PerformanceCounter
    public void profileNextBatch() {
        this.mUIImplementation.profileNextBatch();
    }

    @Override // com.facebook.react.bridge.UIManager
    public void receiveEvent(int i10, String str, WritableMap writableMap) {
        receiveEvent(-1, i10, str, writableMap);
    }

    @ReactMethod
    public void removeRootView(int i10) {
        this.mUIImplementation.removeRootView(i10);
    }

    @Override // com.facebook.react.bridge.UIManager
    public void removeUIManagerEventListener(UIManagerListener uIManagerListener) {
        this.mUIManagerListeners.remove(uIManagerListener);
    }

    @Deprecated
    public void removeUIManagerListener(UIManagerModuleListener uIManagerModuleListener) {
        this.mListeners.remove(uIManagerModuleListener);
    }

    @Override // com.facebook.react.bridge.UIManager
    @Deprecated
    public String resolveCustomDirectEventName(String str) {
        Map map;
        if (str != null && (map = (Map) this.mCustomDirectEvents.get(str)) != null) {
            return (String) map.get("registrationName");
        }
        return str;
    }

    @Deprecated
    public int resolveRootTagFromReactTag(int i10) {
        if (ViewUtil.isRootTag(i10)) {
            return i10;
        }
        return this.mUIImplementation.resolveRootTagFromReactTag(i10);
    }

    @Override // com.facebook.react.bridge.UIManager, com.facebook.react.fabric.interop.UIBlockViewResolver
    public View resolveView(int i10) {
        UiThreadUtil.assertOnUiThread();
        return this.mUIImplementation.getUIViewOperationQueue().getNativeViewHierarchyManager().resolveView(i10);
    }

    @ReactMethod
    public void sendAccessibilityEvent(int i10, int i11) {
        int uIManagerType = ViewUtil.getUIManagerType(i10);
        if (uIManagerType == 2) {
            UIManager uIManager = UIManagerHelper.getUIManager(getReactApplicationContext(), uIManagerType);
            if (uIManager != null) {
                uIManager.sendAccessibilityEvent(i10, i11);
                return;
            }
            return;
        }
        this.mUIImplementation.sendAccessibilityEvent(i10, i11);
    }

    @ReactMethod
    public void setChildren(int i10, ReadableArray readableArray) {
        if (DEBUG) {
            String str = "(UIManager.setChildren) tag: " + i10 + ", children: " + readableArray;
            p8.a.b(ReactConstants.TAG, str);
            a9.c.a().c(b9.a.f6363g, str);
        }
        this.mUIImplementation.setChildren(i10, readableArray);
    }

    @ReactMethod
    public void setJSResponder(int i10, boolean z10) {
        this.mUIImplementation.setJSResponder(i10, z10);
    }

    @ReactMethod
    public void setLayoutAnimationEnabledExperimental(boolean z10) {
        this.mUIImplementation.setLayoutAnimationEnabledExperimental(z10);
    }

    public void setViewHierarchyUpdateDebugListener(NotThreadSafeViewHierarchyUpdateDebugListener notThreadSafeViewHierarchyUpdateDebugListener) {
        this.mUIImplementation.setViewHierarchyUpdateDebugListener(notThreadSafeViewHierarchyUpdateDebugListener);
    }

    public void setViewLocalData(final int i10, final Object obj) {
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        reactApplicationContext.assertOnUiQueueThread();
        reactApplicationContext.runOnNativeModulesQueueThread(new GuardedRunnable(reactApplicationContext) { // from class: com.facebook.react.uimanager.UIManagerModule.2
            @Override // com.facebook.react.bridge.GuardedRunnable
            public void runGuarded() {
                UIManagerModule.this.mUIImplementation.setViewLocalData(i10, obj);
            }
        });
    }

    @Override // com.facebook.react.bridge.UIManager
    public <T extends View> int startSurface(T t10, String str, WritableMap writableMap, int i10, int i11) {
        throw new UnsupportedOperationException();
    }

    @Override // com.facebook.react.bridge.UIManager
    public void stopSurface(int i10) {
        throw new UnsupportedOperationException();
    }

    @Override // com.facebook.react.bridge.UIManager
    public void sweepActiveTouchForTag(int i10, int i11) {
    }

    @Override // com.facebook.react.bridge.UIManager
    public void synchronouslyUpdateViewOnUIThread(int i10, ReadableMap readableMap) {
        this.mUIImplementation.synchronouslyUpdateViewOnUIThread(i10, new ReactStylesDiffMap(readableMap));
    }

    public void updateInsetsPadding(int i10, int i11, int i12, int i13, int i14) {
        getReactApplicationContext().assertOnNativeModulesQueueThread();
        this.mUIImplementation.updateInsetsPadding(i10, i11, i12, i13, i14);
    }

    public void updateNodeSize(int i10, int i11, int i12) {
        getReactApplicationContext().assertOnNativeModulesQueueThread();
        this.mUIImplementation.updateNodeSize(i10, i11, i12);
    }

    @Override // com.facebook.react.bridge.UIManager
    public void updateRootLayoutSpecs(final int i10, final int i11, final int i12, int i13, int i14) {
        ReactApplicationContext reactApplicationContext = getReactApplicationContext();
        reactApplicationContext.runOnNativeModulesQueueThread(new GuardedRunnable(reactApplicationContext) { // from class: com.facebook.react.uimanager.UIManagerModule.3
            @Override // com.facebook.react.bridge.GuardedRunnable
            public void runGuarded() {
                UIManagerModule.this.mUIImplementation.updateRootView(i10, i11, i12);
                UIManagerModule.this.mUIImplementation.dispatchViewUpdates(-1);
            }
        });
    }

    @ReactMethod
    public void updateView(int i10, String str, ReadableMap readableMap) {
        if (DEBUG) {
            String str2 = "(UIManager.updateView) tag: " + i10 + ", class: " + str + ", props: " + readableMap;
            p8.a.b(ReactConstants.TAG, str2);
            a9.c.a().c(b9.a.f6363g, str2);
        }
        this.mUIImplementation.updateView(i10, str, readableMap);
    }

    @ReactMethod
    @Deprecated
    public void viewIsDescendantOf(int i10, int i11, Callback callback) {
        this.mUIImplementation.viewIsDescendantOf(i10, i11, callback);
    }

    @Override // com.facebook.react.bridge.UIManager
    public <T extends View> int addRootView(T t10, WritableMap writableMap) {
        qb.a.c(0L, "UIManagerModule.addRootView");
        int nextRootViewTag = ReactRootViewTagGenerator.getNextRootViewTag();
        this.mUIImplementation.registerRootView(t10, nextRootViewTag, new ThemedReactContext(getReactApplicationContext(), t10.getContext(), ((ReactRoot) t10).getSurfaceID(), -1));
        qb.a.i(0L);
        return nextRootViewTag;
    }

    @Override // com.facebook.react.bridge.UIManager
    public void dispatchCommand(int i10, String str, ReadableArray readableArray) {
        this.mUIImplementation.dispatchViewManagerCommand(i10, str, readableArray);
    }

    @Override // com.facebook.react.bridge.UIManager
    public void receiveEvent(int i10, int i11, String str, WritableMap writableMap) {
        ((RCTEventEmitter) getReactApplicationContext().getJSModule(RCTEventEmitter.class)).receiveEvent(i11, str, writableMap);
    }

    public static WritableMap getConstantsForViewManager(ViewManager viewManager, Map<String, Object> map) {
        qb.b.a(0L, "UIManagerModule.getConstantsForViewManager").b("ViewManager", viewManager.getName()).b("Lazy", Boolean.TRUE).c();
        try {
            Map<String, Object> internal_createConstantsForViewManager = UIManagerModuleConstantsHelper.internal_createConstantsForViewManager(viewManager, null, null, null, map);
            if (internal_createConstantsForViewManager != null) {
                return Arguments.makeNativeMap(internal_createConstantsForViewManager);
            }
            return null;
        } finally {
            qb.b.b(0L).c();
        }
    }

    public static Map<String, Object> createConstants(List<ViewManager> list, Map<String, Object> map, Map<String, Object> map2) {
        ReactMarker.logMarker(ReactMarkerConstants.CREATE_UI_MANAGER_MODULE_CONSTANTS_START);
        qb.b.a(0L, "CreateUIManagerConstants").b("Lazy", Boolean.FALSE).c();
        try {
            Map<String, Object> cachedConstants = UIManagerConstantsCache.getInstance().getCachedConstants();
            Map<String, Object> cachedBubblingEventsTypes = UIManagerConstantsCache.getInstance().getCachedBubblingEventsTypes();
            if (cachedConstants != null) {
                if (map != null) {
                    map.putAll(cachedBubblingEventsTypes);
                }
                return cachedConstants;
            }
            Map<String, Object> internal_createConstants = UIManagerModuleConstantsHelper.internal_createConstants(list, map, map2);
            UIManagerConstantsCache.getInstance().saveConstantsAndBubblingEventsTypes(internal_createConstants, map);
            return internal_createConstants;
        } finally {
            qb.a.i(0L);
            ReactMarker.logMarker(ReactMarkerConstants.CREATE_UI_MANAGER_MODULE_CONSTANTS_END);
        }
    }

    public UIManagerModule(ReactApplicationContext reactApplicationContext, List<ViewManager> list, int i10) {
        super(reactApplicationContext);
        this.mMemoryTrimCallback = new MemoryTrimCallback();
        this.mListeners = new ArrayList();
        this.mUIManagerListeners = new CopyOnWriteArrayList<>();
        this.mBatchId = 0;
        qb.a.c(0L, "UIManagerModule.init");
        DisplayMetricsHolder.initDisplayMetricsIfNotInitialized(reactApplicationContext);
        EventDispatcherImpl eventDispatcherImpl = new EventDispatcherImpl(reactApplicationContext);
        this.mEventDispatcher = eventDispatcherImpl;
        HashMap newHashMap = MapBuilder.newHashMap();
        this.mCustomDirectEvents = newHashMap;
        this.mModuleConstants = createConstants(list, null, newHashMap);
        ViewManagerRegistry viewManagerRegistry = new ViewManagerRegistry(list);
        this.mViewManagerRegistry = viewManagerRegistry;
        this.mUIImplementation = new UIImplementation(reactApplicationContext, viewManagerRegistry, eventDispatcherImpl, i10);
        if (ReactBuildConfig.DEBUG) {
            for (ViewManager viewManager : list) {
                LegacyArchitectureShadowNodeLogger.assertUnsupportedViewManager(reactApplicationContext, viewManager.getShadowNodeClass(), viewManager.getClass().getSimpleName());
            }
        }
        reactApplicationContext.addLifecycleEventListener(this);
    }
}
