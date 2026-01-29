package com.facebook.react.uimanager;

import android.content.Context;
import android.view.View;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.BaseJavaModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactNoCrashSoftException;
import com.facebook.react.bridge.ReactSoftExceptionLogger;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.common.annotations.UnstableReactNativeAPI;
import com.facebook.react.common.build.ReactBuildConfig;
import com.facebook.react.common.mapbuffer.MapBuffer;
import com.facebook.react.internal.featureflags.ReactNativeFeatureFlags;
import com.facebook.react.internal.featureflags.ReactNativeNewArchitectureFeatureFlags;
import com.facebook.react.touch.JSResponderHandler;
import com.facebook.react.touch.ReactInterceptingViewGroup;
import com.facebook.react.uimanager.ReactShadowNode;
import com.facebook.react.uimanager.ViewManagerPropertyUpdater;
import com.facebook.react.uimanager.annotations.ReactPropertyHolder;
import com.facebook.yoga.YogaMeasureMode;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Stack;
@ReactPropertyHolder
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class ViewManager<T extends View, C extends ReactShadowNode> extends BaseJavaModule {
    private static final String TAG = "ViewManager";
    private ViewManagerDelegate<T> mDelegate;
    private HashMap<Integer, Stack<T>> mRecyclableViews;

    public ViewManager() {
        super(null);
        this.mDelegate = null;
        this.mRecyclableViews = null;
    }

    private ViewManagerDelegate<T> getOrCreateViewManagerDelegate() {
        ViewManagerDelegate<T> viewManagerDelegate = this.mDelegate;
        if (viewManagerDelegate == null) {
            ViewManagerDelegate<T> delegate = getDelegate();
            this.mDelegate = delegate;
            return delegate;
        }
        return viewManagerDelegate;
    }

    private Stack<T> getRecyclableViewStack(int i10, boolean z10) {
        HashMap<Integer, Stack<T>> hashMap = this.mRecyclableViews;
        if (hashMap == null) {
            return null;
        }
        if (z10 && !hashMap.containsKey(Integer.valueOf(i10))) {
            this.mRecyclableViews.put(Integer.valueOf(i10), new Stack<>());
        }
        return this.mRecyclableViews.get(Integer.valueOf(i10));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void addEventEmitters(@NonNull ThemedReactContext themedReactContext, @NonNull T t10) {
    }

    public C createShadowNodeInstance() {
        throw new RuntimeException("ViewManager subclasses must implement createShadowNodeInstance()");
    }

    @NonNull
    public T createView(int i10, @NonNull ThemedReactContext themedReactContext, ReactStylesDiffMap reactStylesDiffMap, StateWrapper stateWrapper, JSResponderHandler jSResponderHandler) {
        T createViewInstance = createViewInstance(i10, themedReactContext, reactStylesDiffMap, stateWrapper);
        if (createViewInstance instanceof ReactInterceptingViewGroup) {
            ((ReactInterceptingViewGroup) createViewInstance).setOnInterceptTouchEventListener(jSResponderHandler);
        }
        return createViewInstance;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @NonNull
    public T createViewInstance(int i10, @NonNull ThemedReactContext themedReactContext, ReactStylesDiffMap reactStylesDiffMap, StateWrapper stateWrapper) {
        T createViewInstance;
        Object updateState;
        Stack<T> recyclableViewStack = getRecyclableViewStack(themedReactContext.getSurfaceId(), true);
        if (recyclableViewStack != null && !recyclableViewStack.empty()) {
            createViewInstance = recycleView(themedReactContext, recyclableViewStack.pop());
        } else {
            createViewInstance = createViewInstance(themedReactContext);
        }
        createViewInstance.setId(i10);
        addEventEmitters(themedReactContext, createViewInstance);
        if (reactStylesDiffMap != null) {
            updateProperties(createViewInstance, reactStylesDiffMap);
        }
        if (stateWrapper != null && (updateState = updateState(createViewInstance, reactStylesDiffMap, stateWrapper)) != null) {
            updateExtraData(createViewInstance, updateState);
        }
        return createViewInstance;
    }

    @NonNull
    protected abstract T createViewInstance(@NonNull ThemedReactContext themedReactContext);

    @UnstableReactNativeAPI
    protected boolean experimental_isPrefetchingEnabled() {
        return false;
    }

    @UnstableReactNativeAPI
    public void experimental_prefetchResource(ReactContext reactContext, int i10, int i11, MapBuffer mapBuffer) {
    }

    public Map<String, Integer> getCommandsMap() {
        return null;
    }

    protected ViewManagerDelegate<T> getDelegate() {
        if (this instanceof ViewManagerWithGeneratedInterface) {
            ReactSoftExceptionLogger.logSoftException(TAG, new ReactNoCrashSoftException("ViewManager using codegen must override getDelegate method (name: " + getName() + ")."));
        }
        return new ViewManagerPropertyUpdater.GenericViewManagerDelegate(this);
    }

    public Map<String, Object> getExportedCustomBubblingEventTypeConstants() {
        return null;
    }

    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        return null;
    }

    public Map<String, Object> getExportedViewConstants() {
        return null;
    }

    @Override // com.facebook.react.bridge.NativeModule
    @NonNull
    public abstract String getName();

    public Map<String, String> getNativeProps() {
        if (ReactBuildConfig.UNSTABLE_ENABLE_MINIFY_LEGACY_ARCHITECTURE && ReactNativeNewArchitectureFeatureFlags.enableBridgelessArchitecture()) {
            return ViewManagerPropertyUpdater.getNativeProps(getClass(), null);
        }
        return ViewManagerPropertyUpdater.getNativeProps(getClass(), getShadowNodeClass());
    }

    public abstract Class<? extends C> getShadowNodeClass();

    public long measure(Context context, ReadableMap readableMap, ReadableMap readableMap2, ReadableMap readableMap3, float f10, YogaMeasureMode yogaMeasureMode, float f11, YogaMeasureMode yogaMeasureMode2, float[] fArr) {
        return 0L;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void onAfterUpdateTransaction(@NonNull T t10) {
    }

    public void onDropViewInstance(@NonNull T t10) {
        T prepareToRecycleView;
        Context context = t10.getContext();
        if (context == null) {
            p8.a.m(TAG, "onDropViewInstance: view [" + t10.getId() + "] has a null context");
        } else if (!(context instanceof ThemedReactContext)) {
            p8.a.m(TAG, "onDropViewInstance: view [" + t10.getId() + "] has a context that is not a ThemedReactContext: " + context);
        } else {
            ThemedReactContext themedReactContext = (ThemedReactContext) context;
            boolean z10 = false;
            Stack<T> recyclableViewStack = getRecyclableViewStack(themedReactContext.getSurfaceId(), false);
            if (recyclableViewStack != null && (prepareToRecycleView = prepareToRecycleView(themedReactContext, t10)) != null) {
                if (prepareToRecycleView.getParent() == null) {
                    z10 = true;
                }
                db.a.b(z10, "Recycled view [" + t10.getId() + "] should not be attached to a parent. View: " + t10 + " Parent: " + prepareToRecycleView.getParent() + " ThemedReactContext: " + themedReactContext);
                recyclableViewStack.push(prepareToRecycleView);
            }
        }
    }

    public void onSurfaceStopped(int i10) {
        HashMap<Integer, Stack<T>> hashMap = this.mRecyclableViews;
        if (hashMap != null) {
            hashMap.remove(Integer.valueOf(i10));
        }
    }

    protected abstract T prepareToRecycleView(@NonNull ThemedReactContext themedReactContext, @NonNull T t10);

    @Deprecated
    public void receiveCommand(@NonNull T t10, int i10, ReadableArray readableArray) {
    }

    protected T recycleView(@NonNull ThemedReactContext themedReactContext, @NonNull T t10) {
        return t10;
    }

    public void setPadding(T t10, int i10, int i11, int i12, int i13) {
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public void setupViewRecycling() {
        if (ReactNativeFeatureFlags.enableViewRecycling()) {
            this.mRecyclableViews = new HashMap<>();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void trimMemory() {
        if (this.mRecyclableViews != null) {
            this.mRecyclableViews = new HashMap<>();
        }
    }

    public abstract void updateExtraData(@NonNull T t10, Object obj);

    public void updateProperties(@NonNull T t10, ReactStylesDiffMap reactStylesDiffMap) {
        ViewManagerDelegate<T> orCreateViewManagerDelegate = getOrCreateViewManagerDelegate();
        Iterator<Map.Entry<String, Object>> entryIterator = reactStylesDiffMap.internal_backingMap().getEntryIterator();
        while (entryIterator.hasNext()) {
            Map.Entry<String, Object> next = entryIterator.next();
            orCreateViewManagerDelegate.setProperty(t10, next.getKey(), next.getValue());
        }
        onAfterUpdateTransaction(t10);
    }

    public Object updateState(@NonNull T t10, ReactStylesDiffMap reactStylesDiffMap, StateWrapper stateWrapper) {
        return null;
    }

    @NonNull
    public C createShadowNodeInstance(@NonNull ReactApplicationContext reactApplicationContext) {
        return createShadowNodeInstance();
    }

    public void receiveCommand(@NonNull T t10, String str, ReadableArray readableArray) {
        getOrCreateViewManagerDelegate().receiveCommand(t10, str, readableArray);
    }

    public ViewManager(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
        this.mDelegate = null;
        this.mRecyclableViews = null;
    }
}
