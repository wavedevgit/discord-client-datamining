package com.facebook.react;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.res.Configuration;
import android.net.Uri;
import android.os.Bundle;
import android.os.Process;
import android.view.View;
import android.view.ViewGroup;
import androidx.core.view.h0;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactPackageTurboModuleManagerDelegate;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.BridgeReactContext;
import com.facebook.react.bridge.CatalystInstance;
import com.facebook.react.bridge.CatalystInstanceImpl;
import com.facebook.react.bridge.JSBundleLoader;
import com.facebook.react.bridge.JSExceptionHandler;
import com.facebook.react.bridge.JavaScriptExecutor;
import com.facebook.react.bridge.JavaScriptExecutorFactory;
import com.facebook.react.bridge.NativeModuleRegistry;
import com.facebook.react.bridge.NotThreadSafeBridgeIdleDebugListener;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactCxxErrorHandler;
import com.facebook.react.bridge.ReactInstanceManagerInspectorTarget;
import com.facebook.react.bridge.ReactMarker;
import com.facebook.react.bridge.ReactMarkerConstants;
import com.facebook.react.bridge.ReactNoCrashSoftException;
import com.facebook.react.bridge.ReactSoftExceptionLogger;
import com.facebook.react.bridge.UIManager;
import com.facebook.react.bridge.UIManagerProvider;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.bridge.queue.ReactQueueConfigurationSpec;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.common.SurfaceDelegateFactory;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogLevel;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogger;
import com.facebook.react.common.build.ReactBuildConfig;
import com.facebook.react.devsupport.DevSupportManagerFactory;
import com.facebook.react.devsupport.InspectorFlags;
import com.facebook.react.devsupport.ReactInstanceDevHelper;
import com.facebook.react.devsupport.inspector.InspectorNetworkHelper;
import com.facebook.react.devsupport.inspector.InspectorNetworkRequestListener;
import com.facebook.react.devsupport.interfaces.DevBundleDownloadListener;
import com.facebook.react.devsupport.interfaces.DevLoadingViewManager;
import com.facebook.react.devsupport.interfaces.DevSupportManager;
import com.facebook.react.devsupport.interfaces.PackagerStatusCallback;
import com.facebook.react.devsupport.interfaces.PausedInDebuggerOverlayManager;
import com.facebook.react.devsupport.interfaces.RedBoxHandler;
import com.facebook.react.interfaces.TaskInterface;
import com.facebook.react.internal.AndroidChoreographerProvider;
import com.facebook.react.internal.ChoreographerProvider;
import com.facebook.react.internal.featureflags.ReactNativeNewArchitectureFeatureFlags;
import com.facebook.react.internal.turbomodule.core.TurboModuleManager;
import com.facebook.react.modules.appearance.AppearanceModule;
import com.facebook.react.modules.appregistry.AppRegistry;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.modules.core.ReactChoreographer;
import com.facebook.react.modules.systeminfo.AndroidInfoHelpers;
import com.facebook.react.packagerconnection.RequestHandler;
import com.facebook.react.uimanager.DisplayMetricsHolder;
import com.facebook.react.uimanager.ReactRoot;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.views.imagehelper.ResourceDrawableIdHelper;
import com.facebook.soloader.SoLoader;
import java.lang.ref.WeakReference;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class ReactInstanceManager {
    private static final String TAG;
    private final Context mApplicationContext;
    private final NotThreadSafeBridgeIdleDebugListener mBridgeIdleDebugListener;
    private final JSBundleLoader mBundleLoader;
    private volatile Thread mCreateReactContextThread;
    private Activity mCurrentActivity;
    private volatile ReactContext mCurrentReactContext;
    private DefaultHardwareBackBtnHandler mDefaultBackButtonImpl;
    private final DevSupportManager mDevSupportManager;
    private ReactInstanceManagerInspectorTarget mInspectorTarget;
    private final JSExceptionHandler mJSExceptionHandler;
    private final String mJSMainModulePath;
    private final JavaScriptExecutorFactory mJavaScriptExecutorFactory;
    private final boolean mKeepActivity;
    private volatile LifecycleState mLifecycleState;
    private final MemoryPressureRouter mMemoryPressureRouter;
    private final List<ReactPackage> mPackages;
    private ReactContextInitParams mPendingReactContextInitParams;
    private final boolean mRequireActivity;
    private final ReactPackageTurboModuleManagerDelegate.Builder mTMMDelegateBuilder;
    private final UIManagerProvider mUIManagerProvider;
    private final boolean mUseDeveloperSupport;
    private List<ViewManager> mViewManagers;
    private final Set<ReactRoot> mAttachedReactRoots = Collections.synchronizedSet(new HashSet());
    private Collection<String> mViewManagerNames = null;
    private final Object mReactContextLock = new Object();
    private final Collection<com.facebook.react.ReactInstanceEventListener> mReactInstanceEventListeners = Collections.synchronizedList(new ArrayList());
    private volatile boolean mHasStartedCreatingInitialContext = false;
    private volatile Boolean mHasStartedDestroying = Boolean.FALSE;
    private boolean mUseFallbackBundle = true;
    private volatile boolean mInstanceManagerInvalidated = false;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* renamed from: com.facebook.react.ReactInstanceManager$3  reason: invalid class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class AnonymousClass3 implements PackagerStatusCallback {
        AnonymousClass3() {
        }

        /* JADX INFO: Access modifiers changed from: private */
        public /* synthetic */ void lambda$onPackagerStatusFetched$0(boolean z10) {
            if (ReactInstanceManager.this.mInstanceManagerInvalidated) {
                return;
            }
            if (z10) {
                ReactInstanceManager.this.mDevSupportManager.handleReloadJS();
            } else if (!ReactInstanceManager.this.mDevSupportManager.hasUpToDateJSBundleInCache() || ReactInstanceManager.this.mUseFallbackBundle) {
                ReactInstanceManager.this.recreateReactContextInBackgroundFromBundleLoader();
            } else {
                ReactInstanceManager.this.onJSBundleLoadedFromServer();
            }
        }

        @Override // com.facebook.react.devsupport.interfaces.PackagerStatusCallback
        public void onPackagerStatusFetched(final boolean z10) {
            UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.facebook.react.q
                @Override // java.lang.Runnable
                public final void run() {
                    ReactInstanceManager.AnonymousClass3.this.lambda$onPackagerStatusFetched$0(z10);
                }
            });
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class InspectorTargetDelegateImpl implements ReactInstanceManagerInspectorTarget.TargetDelegate {
        private WeakReference<ReactInstanceManager> mReactInstanceManagerWeak;

        public InspectorTargetDelegateImpl(ReactInstanceManager reactInstanceManager) {
            this.mReactInstanceManagerWeak = new WeakReference<>(reactInstanceManager);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public /* synthetic */ void lambda$onReload$0() {
            ReactInstanceManager reactInstanceManager = this.mReactInstanceManagerWeak.get();
            if (reactInstanceManager != null) {
                reactInstanceManager.mDevSupportManager.handleReloadJS();
            }
        }

        @Override // com.facebook.react.bridge.ReactInstanceManagerInspectorTarget.TargetDelegate
        public Map<String, String> getMetadata() {
            Context context;
            ReactInstanceManager reactInstanceManager = this.mReactInstanceManagerWeak.get();
            if (reactInstanceManager != null) {
                context = reactInstanceManager.mApplicationContext;
            } else {
                context = null;
            }
            return AndroidInfoHelpers.getInspectorHostMetadata(context);
        }

        @Override // com.facebook.react.bridge.ReactInstanceManagerInspectorTarget.TargetDelegate
        public void loadNetworkResource(String str, InspectorNetworkRequestListener inspectorNetworkRequestListener) {
            InspectorNetworkHelper.loadNetworkResource(str, inspectorNetworkRequestListener);
        }

        @Override // com.facebook.react.bridge.ReactInstanceManagerInspectorTarget.TargetDelegate
        public void onReload() {
            UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.facebook.react.s
                @Override // java.lang.Runnable
                public final void run() {
                    ReactInstanceManager.InspectorTargetDelegateImpl.this.lambda$onReload$0();
                }
            });
        }

        @Override // com.facebook.react.bridge.ReactInstanceManagerInspectorTarget.TargetDelegate
        public void onSetPausedInDebuggerMessage(String str) {
            final ReactInstanceManager reactInstanceManager = this.mReactInstanceManagerWeak.get();
            if (reactInstanceManager == null) {
                return;
            }
            if (str == null) {
                reactInstanceManager.mDevSupportManager.hidePausedInDebuggerOverlay();
            } else {
                reactInstanceManager.mDevSupportManager.showPausedInDebuggerOverlay(str, new DevSupportManager.PausedInDebuggerOverlayCommandListener() { // from class: com.facebook.react.ReactInstanceManager.InspectorTargetDelegateImpl.1
                    @Override // com.facebook.react.devsupport.interfaces.DevSupportManager.PausedInDebuggerOverlayCommandListener
                    public void onResume() {
                        UiThreadUtil.assertOnUiThread();
                        if (reactInstanceManager.mInspectorTarget != null) {
                            reactInstanceManager.mInspectorTarget.sendDebuggerResumeCommand();
                        }
                    }
                });
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class ReactContextInitParams {
        private final JSBundleLoader mJsBundleLoader;
        private final JavaScriptExecutorFactory mJsExecutorFactory;

        public ReactContextInitParams(JavaScriptExecutorFactory javaScriptExecutorFactory, JSBundleLoader jSBundleLoader) {
            this.mJsExecutorFactory = (JavaScriptExecutorFactory) db.a.c(javaScriptExecutorFactory);
            this.mJsBundleLoader = (JSBundleLoader) db.a.c(jSBundleLoader);
        }

        public JSBundleLoader getJsBundleLoader() {
            return this.mJsBundleLoader;
        }

        public JavaScriptExecutorFactory getJsExecutorFactory() {
            return this.mJsExecutorFactory;
        }
    }

    @Deprecated
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface ReactInstanceEventListener extends com.facebook.react.ReactInstanceEventListener {
    }

    static {
        LegacyArchitectureLogger.assertLegacyArchitecture("ReactInstanceManager", LegacyArchitectureLogLevel.WARNING);
        TAG = ReactInstanceManager.class.getSimpleName();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public ReactInstanceManager(Context context, Activity activity, DefaultHardwareBackBtnHandler defaultHardwareBackBtnHandler, JavaScriptExecutorFactory javaScriptExecutorFactory, JSBundleLoader jSBundleLoader, String str, List<ReactPackage> list, boolean z10, DevSupportManagerFactory devSupportManagerFactory, boolean z11, boolean z12, NotThreadSafeBridgeIdleDebugListener notThreadSafeBridgeIdleDebugListener, LifecycleState lifecycleState, JSExceptionHandler jSExceptionHandler, RedBoxHandler redBoxHandler, boolean z13, DevBundleDownloadListener devBundleDownloadListener, int i10, int i11, UIManagerProvider uIManagerProvider, Map<String, RequestHandler> map, ReactPackageTurboModuleManagerDelegate.Builder builder, SurfaceDelegateFactory surfaceDelegateFactory, DevLoadingViewManager devLoadingViewManager, ChoreographerProvider choreographerProvider, PausedInDebuggerOverlayManager pausedInDebuggerOverlayManager) {
        p8.a.b(TAG, "ReactInstanceManager.ctor()");
        initializeSoLoaderIfNecessary(context);
        DisplayMetricsHolder.initDisplayMetricsIfNotInitialized(context);
        this.mApplicationContext = context;
        this.mCurrentActivity = activity;
        this.mDefaultBackButtonImpl = defaultHardwareBackBtnHandler;
        this.mJavaScriptExecutorFactory = javaScriptExecutorFactory;
        this.mBundleLoader = jSBundleLoader;
        this.mJSMainModulePath = str;
        ArrayList arrayList = new ArrayList();
        this.mPackages = arrayList;
        this.mUseDeveloperSupport = z10;
        this.mRequireActivity = z11;
        this.mKeepActivity = z12;
        qb.a.c(0L, "ReactInstanceManager.initDevSupportManager");
        DevSupportManager create = devSupportManagerFactory.create(context, createDevHelperInterface(), str, z10, redBoxHandler, devBundleDownloadListener, i10, map, surfaceDelegateFactory, devLoadingViewManager, pausedInDebuggerOverlayManager);
        this.mDevSupportManager = create;
        qb.a.i(0L);
        this.mBridgeIdleDebugListener = notThreadSafeBridgeIdleDebugListener;
        this.mLifecycleState = lifecycleState;
        this.mMemoryPressureRouter = new MemoryPressureRouter(context);
        this.mJSExceptionHandler = jSExceptionHandler;
        this.mTMMDelegateBuilder = builder;
        synchronized (arrayList) {
            try {
                a9.c.a().c(b9.a.f6500d, "RNCore: Use Split Packages");
                arrayList.add(new CoreModulesPackage(this, new DefaultHardwareBackBtnHandler() { // from class: com.facebook.react.ReactInstanceManager.1
                    @Override // com.facebook.react.modules.core.DefaultHardwareBackBtnHandler
                    public void invokeDefaultOnBackPressed() {
                        ReactInstanceManager.this.invokeDefaultOnBackPressed();
                    }
                }, z13, i11));
                if (z10) {
                    arrayList.add(new DebugCorePackage());
                }
                arrayList.addAll(list);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        this.mUIManagerProvider = uIManagerProvider;
        ReactChoreographer.initialize(choreographerProvider != null ? choreographerProvider : AndroidChoreographerProvider.getInstance());
        if (z10) {
            create.startInspector();
        }
        registerCxxErrorHandlerFunc();
    }

    private void attachRootViewToInstance(final ReactRoot reactRoot) {
        WritableMap fromBundle;
        final int addRootView;
        WritableMap fromBundle2;
        p8.a.b(ReactConstants.TAG, "ReactInstanceManager.attachRootViewToInstance()");
        if (!reactRoot.getState().compareAndSet(0, 1)) {
            return;
        }
        qb.a.c(0L, "attachRootViewToInstance");
        UIManager uIManager = UIManagerHelper.getUIManager(this.mCurrentReactContext, reactRoot.getUIManagerType());
        if (uIManager != null) {
            Bundle appProperties = reactRoot.getAppProperties();
            if (reactRoot.getUIManagerType() == 2) {
                ViewGroup rootViewGroup = reactRoot.getRootViewGroup();
                String jSModuleName = reactRoot.getJSModuleName();
                if (appProperties == null) {
                    fromBundle2 = new WritableNativeMap();
                } else {
                    fromBundle2 = Arguments.fromBundle(appProperties);
                }
                addRootView = uIManager.startSurface(rootViewGroup, jSModuleName, fromBundle2, reactRoot.getWidthMeasureSpec(), reactRoot.getHeightMeasureSpec());
                reactRoot.setShouldLogContentAppeared(true);
            } else {
                ViewGroup rootViewGroup2 = reactRoot.getRootViewGroup();
                if (appProperties == null) {
                    fromBundle = new WritableNativeMap();
                } else {
                    fromBundle = Arguments.fromBundle(appProperties);
                }
                addRootView = uIManager.addRootView(rootViewGroup2, fromBundle);
                reactRoot.setRootViewTag(addRootView);
                reactRoot.runApplication();
            }
            qb.a.a(0L, "pre_rootView.onAttachedToReactInstance", addRootView);
            UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.facebook.react.j
                @Override // java.lang.Runnable
                public final void run() {
                    ReactInstanceManager.e(addRootView, reactRoot);
                }
            });
            qb.a.i(0L);
            return;
        }
        throw new IllegalStateException("Unable to attach a rootView to ReactInstance when UIManager is not properly initialized.");
    }

    public static ReactInstanceManagerBuilder builder() {
        return new ReactInstanceManagerBuilder();
    }

    private void clearReactRoot(ReactRoot reactRoot) {
        UiThreadUtil.assertOnUiThread();
        reactRoot.getState().compareAndSet(1, 0);
        ViewGroup rootViewGroup = reactRoot.getRootViewGroup();
        rootViewGroup.removeAllViews();
        rootViewGroup.setId(-1);
    }

    private ReactInstanceDevHelper createDevHelperInterface() {
        return new ReactInstanceDevHelper() { // from class: com.facebook.react.ReactInstanceManager.2
            @Override // com.facebook.react.devsupport.ReactInstanceDevHelper
            public View createRootView(String str) {
                Activity currentActivity = getCurrentActivity();
                if (currentActivity != null) {
                    ReactRootView reactRootView = new ReactRootView(currentActivity);
                    reactRootView.setIsFabric(ReactNativeNewArchitectureFeatureFlags.enableFabricRenderer());
                    reactRootView.startReactApplication(ReactInstanceManager.this, str, new Bundle());
                    return reactRootView;
                }
                return null;
            }

            @Override // com.facebook.react.devsupport.ReactInstanceDevHelper
            public void destroyRootView(View view) {
                if (view instanceof ReactRootView) {
                    ((ReactRootView) view).unmountReactApplication();
                }
            }

            @Override // com.facebook.react.devsupport.ReactInstanceDevHelper
            public Activity getCurrentActivity() {
                return ReactInstanceManager.this.mCurrentActivity;
            }

            @Override // com.facebook.react.devsupport.ReactInstanceDevHelper
            public ReactContext getCurrentReactContext() {
                return null;
            }

            @Override // com.facebook.react.devsupport.ReactInstanceDevHelper
            public JavaScriptExecutorFactory getJavaScriptExecutorFactory() {
                return ReactInstanceManager.this.getJSExecutorFactory();
            }

            @Override // com.facebook.react.devsupport.ReactInstanceDevHelper
            public TaskInterface<Boolean> loadBundle(JSBundleLoader jSBundleLoader) {
                return null;
            }

            @Override // com.facebook.react.devsupport.ReactInstanceDevHelper
            public void onJSBundleLoadedFromServer() {
                ReactInstanceManager.this.onJSBundleLoadedFromServer();
            }

            @Override // com.facebook.react.devsupport.ReactInstanceDevHelper
            public void reload(String str) {
            }

            @Override // com.facebook.react.devsupport.ReactInstanceDevHelper
            public void toggleElementInspector() {
                ReactInstanceManager.this.toggleElementInspector();
            }
        };
    }

    private ReactApplicationContext createReactContext(JavaScriptExecutor javaScriptExecutor, JSBundleLoader jSBundleLoader) {
        TurboModuleManager turboModuleManager;
        UIManager createUIManager;
        ReactPackageTurboModuleManagerDelegate.Builder builder;
        p8.a.b(ReactConstants.TAG, "ReactInstanceManager.createReactContext()");
        ReactMarker.logMarker(ReactMarkerConstants.CREATE_REACT_CONTEXT_START, javaScriptExecutor.getName());
        BridgeReactContext bridgeReactContext = new BridgeReactContext(this.mApplicationContext);
        JSExceptionHandler jSExceptionHandler = this.mJSExceptionHandler;
        if (jSExceptionHandler == null) {
            jSExceptionHandler = this.mDevSupportManager;
        }
        bridgeReactContext.setJSExceptionHandler(jSExceptionHandler);
        CatalystInstanceImpl.Builder inspectorTarget = new CatalystInstanceImpl.Builder().setReactQueueConfigurationSpec(ReactQueueConfigurationSpec.createDefault()).setJSExecutor(javaScriptExecutor).setRegistry(processPackages(bridgeReactContext, this.mPackages)).setJSBundleLoader(jSBundleLoader).setJSExceptionHandler(jSExceptionHandler).setInspectorTarget(getOrCreateInspectorTarget());
        ReactMarker.logMarker(ReactMarkerConstants.CREATE_CATALYST_INSTANCE_START);
        qb.a.c(0L, "createCatalystInstance");
        try {
            CatalystInstanceImpl build = inspectorTarget.build();
            qb.a.i(0L);
            ReactMarker.logMarker(ReactMarkerConstants.CREATE_CATALYST_INSTANCE_END);
            bridgeReactContext.initializeWithInstance(build);
            build.getRuntimeScheduler();
            if (ReactNativeNewArchitectureFeatureFlags.useTurboModules() && (builder = this.mTMMDelegateBuilder) != null) {
                turboModuleManager = new TurboModuleManager(build.getRuntimeExecutor(), builder.setPackages(this.mPackages).setReactApplicationContext(bridgeReactContext).build(), build.getJSCallInvokerHolder(), build.getNativeMethodCallInvokerHolder());
                build.setTurboModuleRegistry(turboModuleManager);
                if (!bridgeReactContext.isBridgeless()) {
                    for (String str : turboModuleManager.getEagerInitModuleNames()) {
                        turboModuleManager.getModule(str);
                    }
                }
            } else {
                turboModuleManager = null;
            }
            UIManagerProvider uIManagerProvider = this.mUIManagerProvider;
            if (uIManagerProvider != null && (createUIManager = uIManagerProvider.createUIManager(bridgeReactContext)) != null) {
                build.setFabricUIManager(createUIManager);
                createUIManager.initialize();
                build.setFabricUIManager(createUIManager);
            }
            NotThreadSafeBridgeIdleDebugListener notThreadSafeBridgeIdleDebugListener = this.mBridgeIdleDebugListener;
            if (notThreadSafeBridgeIdleDebugListener != null) {
                build.addBridgeIdleDebugListener(notThreadSafeBridgeIdleDebugListener);
            }
            if (qb.a.j(0L)) {
                build.setGlobalVariable("__RCTProfileIsProfiling", "true");
            }
            ReactMarker.logMarker(ReactMarkerConstants.PRE_RUN_JS_BUNDLE_START);
            qb.a.c(0L, "runJSBundle");
            build.runJSBundle();
            qb.a.i(0L);
            if (bridgeReactContext.isBridgeless() && ReactNativeNewArchitectureFeatureFlags.useTurboModules() && this.mTMMDelegateBuilder != null) {
                for (String str2 : turboModuleManager.getEagerInitModuleNames()) {
                    turboModuleManager.getModule(str2);
                }
            }
            return bridgeReactContext;
        } catch (Throwable th2) {
            qb.a.i(0L);
            ReactMarker.logMarker(ReactMarkerConstants.CREATE_CATALYST_INSTANCE_END);
            throw th2;
        }
    }

    private void detachRootViewFromInstance(ReactRoot reactRoot, ReactContext reactContext) {
        p8.a.b(ReactConstants.TAG, "ReactInstanceManager.detachRootViewFromInstance()");
        UiThreadUtil.assertOnUiThread();
        if (!reactRoot.getState().compareAndSet(1, 0)) {
            return;
        }
        int uIManagerType = reactRoot.getUIManagerType();
        if (uIManagerType == 2) {
            int rootViewTag = reactRoot.getRootViewTag();
            if (rootViewTag != -1) {
                UIManager uIManager = UIManagerHelper.getUIManager(reactContext, uIManagerType);
                if (uIManager != null) {
                    uIManager.stopSurface(rootViewTag);
                } else {
                    p8.a.J(ReactConstants.TAG, "Failed to stop surface, UIManager has already gone away");
                }
            } else {
                ReactSoftExceptionLogger.logSoftException(TAG, new RuntimeException("detachRootViewFromInstance called with ReactRootView with invalid id"));
            }
            clearReactRoot(reactRoot);
            return;
        }
        ((AppRegistry) reactContext.getCatalystInstance().getJSModule(AppRegistry.class)).unmountApplicationComponentAtRootTag(reactRoot.getRootViewTag());
    }

    public static /* synthetic */ void e(int i10, ReactRoot reactRoot) {
        qb.a.g(0L, "pre_rootView.onAttachedToReactInstance", i10);
        reactRoot.onStage(101);
    }

    public static /* synthetic */ void g() {
        Process.setThreadPriority(0);
        ReactMarker.logMarker(ReactMarkerConstants.CHANGE_THREAD_PRIORITY, "js_default");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public JavaScriptExecutorFactory getJSExecutorFactory() {
        return this.mJavaScriptExecutorFactory;
    }

    private ReactInstanceManagerInspectorTarget getOrCreateInspectorTarget() {
        if (this.mInspectorTarget == null && InspectorFlags.getFuseboxEnabled()) {
            this.mInspectorTarget = new ReactInstanceManagerInspectorTarget(new InspectorTargetDelegateImpl(this));
        }
        return this.mInspectorTarget;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void initializeSoLoaderIfNecessary(Context context) {
        SoLoader.m(context, false);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void invokeDefaultOnBackPressed() {
        UiThreadUtil.assertOnUiThread();
        DefaultHardwareBackBtnHandler defaultHardwareBackBtnHandler = this.mDefaultBackButtonImpl;
        if (defaultHardwareBackBtnHandler != null) {
            defaultHardwareBackBtnHandler.invokeDefaultOnBackPressed();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void lambda$runCreateReactContextOnNewThread$0() {
        ReactContextInitParams reactContextInitParams = this.mPendingReactContextInitParams;
        if (reactContextInitParams != null) {
            runCreateReactContextOnNewThread(reactContextInitParams);
            this.mPendingReactContextInitParams = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void lambda$runCreateReactContextOnNewThread$1(ReactApplicationContext reactApplicationContext) {
        try {
            setupReactContext(reactApplicationContext);
        } catch (Exception e10) {
            this.mDevSupportManager.handleException(e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void lambda$runCreateReactContextOnNewThread$2(ReactContextInitParams reactContextInitParams) {
        ReactMarker.logMarker(ReactMarkerConstants.REACT_CONTEXT_THREAD_END);
        synchronized (this.mHasStartedDestroying) {
            while (this.mHasStartedDestroying.booleanValue()) {
                try {
                    this.mHasStartedDestroying.wait();
                } catch (InterruptedException unused) {
                }
            }
        }
        this.mHasStartedCreatingInitialContext = true;
        try {
            Process.setThreadPriority(-4);
            ReactMarker.logMarker(ReactMarkerConstants.VM_INIT);
            final ReactApplicationContext createReactContext = createReactContext(reactContextInitParams.getJsExecutorFactory().create(), reactContextInitParams.getJsBundleLoader());
            try {
                this.mCreateReactContextThread = null;
                ReactMarker.logMarker(ReactMarkerConstants.PRE_SETUP_REACT_CONTEXT_START);
                Runnable runnable = new Runnable() { // from class: com.facebook.react.l
                    @Override // java.lang.Runnable
                    public final void run() {
                        ReactInstanceManager.this.lambda$runCreateReactContextOnNewThread$0();
                    }
                };
                createReactContext.runOnNativeModulesQueueThread(new Runnable() { // from class: com.facebook.react.m
                    @Override // java.lang.Runnable
                    public final void run() {
                        ReactInstanceManager.this.lambda$runCreateReactContextOnNewThread$1(createReactContext);
                    }
                });
                UiThreadUtil.runOnUiThread(runnable);
            } catch (Exception e10) {
                this.mDevSupportManager.handleException(e10);
            }
        } catch (Exception e11) {
            this.mHasStartedCreatingInitialContext = false;
            this.mCreateReactContextThread = null;
            this.mDevSupportManager.handleException(e11);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public /* synthetic */ void lambda$setupReactContext$3(com.facebook.react.ReactInstanceEventListener[] reactInstanceEventListenerArr, ReactApplicationContext reactApplicationContext) {
        moveReactContextToCurrentLifecycleState();
        for (com.facebook.react.ReactInstanceEventListener reactInstanceEventListener : reactInstanceEventListenerArr) {
            if (reactInstanceEventListener != null) {
                reactInstanceEventListener.onReactContextInitialized(reactApplicationContext);
            }
        }
    }

    private void logOnDestroy() {
        p8.a.g(TAG, "ReactInstanceManager.destroy called", new RuntimeException("ReactInstanceManager.destroy called"));
    }

    private synchronized void moveReactContextToCurrentLifecycleState() {
        if (this.mLifecycleState == LifecycleState.RESUMED) {
            moveToResumedLifecycleState(true);
        }
    }

    private synchronized void moveToBeforeCreateLifecycleState() {
        try {
            ReactContext currentReactContext = getCurrentReactContext();
            if (currentReactContext != null) {
                if (this.mLifecycleState == LifecycleState.RESUMED) {
                    currentReactContext.onHostPause();
                    this.mLifecycleState = LifecycleState.BEFORE_RESUME;
                }
                if (this.mLifecycleState == LifecycleState.BEFORE_RESUME) {
                    currentReactContext.onHostDestroy(this.mKeepActivity);
                }
            }
            this.mLifecycleState = LifecycleState.BEFORE_CREATE;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private synchronized void moveToBeforeResumeLifecycleState() {
        try {
            ReactContext currentReactContext = getCurrentReactContext();
            if (currentReactContext != null) {
                if (this.mLifecycleState == LifecycleState.BEFORE_CREATE) {
                    currentReactContext.onHostResume(this.mCurrentActivity);
                    currentReactContext.onHostPause();
                } else if (this.mLifecycleState == LifecycleState.RESUMED) {
                    currentReactContext.onHostPause();
                }
            }
            this.mLifecycleState = LifecycleState.BEFORE_RESUME;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    private synchronized void moveToResumedLifecycleState(boolean z10) {
        try {
            ReactContext currentReactContext = getCurrentReactContext();
            if (currentReactContext != null) {
                if (!z10) {
                    if (this.mLifecycleState != LifecycleState.BEFORE_RESUME) {
                        if (this.mLifecycleState == LifecycleState.BEFORE_CREATE) {
                        }
                    }
                }
                currentReactContext.onHostResume(this.mCurrentActivity);
            }
            this.mLifecycleState = LifecycleState.RESUMED;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void onJSBundleLoadedFromServer() {
        p8.a.b(ReactConstants.TAG, "ReactInstanceManager.onJSBundleLoadedFromServer()");
        recreateReactContextInBackground(this.mJavaScriptExecutorFactory, JSBundleLoader.createCachedBundleFromNetworkLoader(this.mDevSupportManager.getSourceUrl(), this.mDevSupportManager.getDownloadedJSBundleFile()));
    }

    private void processPackage(ReactPackage reactPackage, NativeModuleRegistryBuilder nativeModuleRegistryBuilder) {
        qb.b.a(0L, "processPackage").b("className", reactPackage.getClass().getSimpleName()).c();
        boolean z10 = reactPackage instanceof ReactPackageLogger;
        if (z10) {
            ((ReactPackageLogger) reactPackage).startProcessPackage();
        }
        nativeModuleRegistryBuilder.processPackage(reactPackage);
        if (z10) {
            ((ReactPackageLogger) reactPackage).endProcessPackage();
        }
        qb.b.b(0L).c();
    }

    private NativeModuleRegistry processPackages(ReactApplicationContext reactApplicationContext, List<ReactPackage> list) {
        NativeModuleRegistryBuilder nativeModuleRegistryBuilder = new NativeModuleRegistryBuilder(reactApplicationContext);
        ReactMarker.logMarker(ReactMarkerConstants.PROCESS_PACKAGES_START);
        synchronized (this.mPackages) {
            try {
                Iterator<ReactPackage> it = list.iterator();
                while (true) {
                    if (it.hasNext()) {
                        ReactPackage next = it.next();
                        qb.a.c(0L, "createAndProcessCustomReactPackage");
                        processPackage(next, nativeModuleRegistryBuilder);
                        qb.a.i(0L);
                    }
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        ReactMarker.logMarker(ReactMarkerConstants.PROCESS_PACKAGES_END);
        ReactMarker.logMarker(ReactMarkerConstants.BUILD_NATIVE_MODULE_REGISTRY_START);
        qb.a.c(0L, "buildNativeModuleRegistry");
        try {
            return nativeModuleRegistryBuilder.build();
        } finally {
            qb.a.i(0L);
            ReactMarker.logMarker(ReactMarkerConstants.BUILD_NATIVE_MODULE_REGISTRY_END);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void recreateReactContextInBackgroundFromBundleLoader() {
        p8.a.b(TAG, "ReactInstanceManager.recreateReactContextInBackgroundFromBundleLoader()");
        a9.c.a().c(b9.a.f6500d, "RNCore: load from BundleLoader");
        recreateReactContextInBackground(this.mJavaScriptExecutorFactory, this.mBundleLoader);
    }

    private void recreateReactContextInBackgroundInner() {
        p8.a.b(TAG, "ReactInstanceManager.recreateReactContextInBackgroundInner()");
        a9.c.a().c(b9.a.f6500d, "RNCore: recreateReactContextInBackground");
        UiThreadUtil.assertOnUiThread();
        if (this.mUseDeveloperSupport && this.mJSMainModulePath != null) {
            this.mDevSupportManager.getDevSettings();
            if (!qb.a.j(0L)) {
                if (this.mBundleLoader == null) {
                    this.mDevSupportManager.handleReloadJS();
                    return;
                } else {
                    this.mDevSupportManager.isPackagerRunning(new AnonymousClass3());
                    return;
                }
            }
        }
        recreateReactContextInBackgroundFromBundleLoader();
    }

    private void registerCxxErrorHandlerFunc() {
        Method method;
        if (!ReactBuildConfig.UNSTABLE_ENABLE_MINIFY_LEGACY_ARCHITECTURE) {
            try {
                method = ReactInstanceManager.class.getMethod("handleCxxError", Exception.class);
            } catch (NoSuchMethodException e10) {
                p8.a.n("ReactInstanceHolder", "Failed to set cxx error handler function", e10);
                method = null;
            }
            ReactCxxErrorHandler.setHandleErrorFunc(this, method);
        }
    }

    private void runCreateReactContextOnNewThread(final ReactContextInitParams reactContextInitParams) {
        p8.a.b(ReactConstants.TAG, "ReactInstanceManager.runCreateReactContextOnNewThread()");
        UiThreadUtil.assertOnUiThread();
        db.a.b(!this.mInstanceManagerInvalidated, "Cannot create a new React context on an invalidated ReactInstanceManager");
        ReactMarker.logMarker(ReactMarkerConstants.REACT_BRIDGE_LOADING_START);
        synchronized (this.mAttachedReactRoots) {
            synchronized (this.mReactContextLock) {
                if (this.mCurrentReactContext != null) {
                    tearDownReactContext(this.mCurrentReactContext);
                    this.mCurrentReactContext = null;
                }
            }
        }
        this.mCreateReactContextThread = new Thread(null, new Runnable() { // from class: com.facebook.react.k
            @Override // java.lang.Runnable
            public final void run() {
                ReactInstanceManager.this.lambda$runCreateReactContextOnNewThread$2(reactContextInitParams);
            }
        }, "create_react_context");
        ReactMarker.logMarker(ReactMarkerConstants.REACT_CONTEXT_THREAD_START);
        this.mCreateReactContextThread.start();
    }

    private void setupReactContext(final ReactApplicationContext reactApplicationContext) {
        p8.a.b(ReactConstants.TAG, "ReactInstanceManager.setupReactContext()");
        ReactMarker.logMarker(ReactMarkerConstants.PRE_SETUP_REACT_CONTEXT_END);
        ReactMarker.logMarker(ReactMarkerConstants.SETUP_REACT_CONTEXT_START);
        qb.a.c(0L, "setupReactContext");
        synchronized (this.mAttachedReactRoots) {
            try {
                synchronized (this.mReactContextLock) {
                    this.mCurrentReactContext = (ReactContext) db.a.c(reactApplicationContext);
                }
                CatalystInstance catalystInstance = (CatalystInstance) db.a.c(reactApplicationContext.getCatalystInstance());
                catalystInstance.initialize();
                this.mDevSupportManager.onNewReactContextCreated(reactApplicationContext);
                this.mMemoryPressureRouter.addMemoryPressureListener(catalystInstance);
                ReactMarker.logMarker(ReactMarkerConstants.ATTACH_MEASURED_ROOT_VIEWS_START);
                for (ReactRoot reactRoot : this.mAttachedReactRoots) {
                    attachRootViewToInstance(reactRoot);
                }
                ReactMarker.logMarker(ReactMarkerConstants.ATTACH_MEASURED_ROOT_VIEWS_END);
            } catch (Throwable th2) {
                throw th2;
            }
        }
        final com.facebook.react.ReactInstanceEventListener[] reactInstanceEventListenerArr = (com.facebook.react.ReactInstanceEventListener[]) this.mReactInstanceEventListeners.toArray(new com.facebook.react.ReactInstanceEventListener[this.mReactInstanceEventListeners.size()]);
        UiThreadUtil.runOnUiThread(new Runnable() { // from class: com.facebook.react.n
            @Override // java.lang.Runnable
            public final void run() {
                ReactInstanceManager.this.lambda$setupReactContext$3(reactInstanceEventListenerArr, reactApplicationContext);
            }
        });
        reactApplicationContext.runOnJSQueueThread(new Runnable() { // from class: com.facebook.react.o
            @Override // java.lang.Runnable
            public final void run() {
                ReactInstanceManager.g();
            }
        });
        reactApplicationContext.runOnNativeModulesQueueThread(new Runnable() { // from class: com.facebook.react.p
            @Override // java.lang.Runnable
            public final void run() {
                Process.setThreadPriority(0);
            }
        });
        qb.a.i(0L);
        ReactMarker.logMarker(ReactMarkerConstants.SETUP_REACT_CONTEXT_END);
        ReactMarker.logMarker(ReactMarkerConstants.REACT_BRIDGE_LOADING_END);
    }

    private void tearDownReactContext(ReactContext reactContext) {
        p8.a.b(ReactConstants.TAG, "ReactInstanceManager.tearDownReactContext()");
        UiThreadUtil.assertOnUiThread();
        if (this.mLifecycleState == LifecycleState.RESUMED) {
            reactContext.onHostPause();
        }
        synchronized (this.mAttachedReactRoots) {
            try {
                for (ReactRoot reactRoot : this.mAttachedReactRoots) {
                    detachRootViewFromInstance(reactRoot, reactContext);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        this.mMemoryPressureRouter.removeMemoryPressureListener(reactContext.getCatalystInstance());
        reactContext.destroy();
        this.mDevSupportManager.onReactInstanceDestroyed(reactContext);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void toggleElementInspector() {
        ReactContext currentReactContext = getCurrentReactContext();
        if (currentReactContext != null && currentReactContext.hasActiveReactInstance()) {
            currentReactContext.emitDeviceEvent("toggleElementInspector");
        } else {
            ReactSoftExceptionLogger.logSoftException(TAG, new ReactNoCrashSoftException("Cannot toggleElementInspector, CatalystInstance not available"));
        }
    }

    private void unregisterCxxErrorHandlerFunc() {
        ReactCxxErrorHandler.setHandleErrorFunc(null, null);
    }

    public void addReactInstanceEventListener(com.facebook.react.ReactInstanceEventListener reactInstanceEventListener) {
        this.mReactInstanceEventListeners.add(reactInstanceEventListener);
    }

    @Deprecated
    public void attachRootView(ReactRoot reactRoot) {
        UiThreadUtil.assertOnUiThread();
        synchronized (this.mAttachedReactRoots) {
            try {
                if (this.mAttachedReactRoots.add(reactRoot)) {
                    clearReactRoot(reactRoot);
                } else {
                    p8.a.m(ReactConstants.TAG, "ReactRoot was attached multiple times");
                }
                ReactContext currentReactContext = getCurrentReactContext();
                if (this.mCreateReactContextThread == null && currentReactContext != null) {
                    attachRootViewToInstance(reactRoot);
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void createReactContextInBackground() {
        p8.a.b(TAG, "ReactInstanceManager.createReactContextInBackground()");
        UiThreadUtil.assertOnUiThread();
        if (!this.mHasStartedCreatingInitialContext) {
            this.mHasStartedCreatingInitialContext = true;
            recreateReactContextInBackgroundInner();
        }
    }

    public ViewManager createViewManager(String str) {
        ViewManager createViewManager;
        synchronized (this.mReactContextLock) {
            ReactApplicationContext reactApplicationContext = (ReactApplicationContext) getCurrentReactContext();
            if (reactApplicationContext != null && reactApplicationContext.hasActiveReactInstance()) {
                synchronized (this.mPackages) {
                    try {
                        for (ReactPackage reactPackage : this.mPackages) {
                            if ((reactPackage instanceof ViewManagerOnDemandReactPackage) && (createViewManager = ((ViewManagerOnDemandReactPackage) reactPackage).createViewManager(reactApplicationContext, str)) != null) {
                                return createViewManager;
                            }
                        }
                        return null;
                    } finally {
                    }
                }
            }
            return null;
        }
    }

    public void destroy() {
        ReactInstanceManagerInspectorTarget reactInstanceManagerInspectorTarget;
        UiThreadUtil.assertOnUiThread();
        a9.c.a().c(b9.a.f6500d, "RNCore: Destroy");
        logOnDestroy();
        if (this.mHasStartedDestroying.booleanValue()) {
            p8.a.m(ReactConstants.TAG, "ReactInstanceManager.destroy called: bail out, already destroying");
            return;
        }
        this.mHasStartedDestroying = Boolean.TRUE;
        if (this.mUseDeveloperSupport) {
            this.mDevSupportManager.setDevSupportEnabled(false);
            this.mDevSupportManager.stopInspector();
        }
        moveToBeforeCreateLifecycleState();
        this.mMemoryPressureRouter.destroy(this.mApplicationContext);
        unregisterCxxErrorHandlerFunc();
        this.mCreateReactContextThread = null;
        synchronized (this.mAttachedReactRoots) {
            synchronized (this.mReactContextLock) {
                if (this.mCurrentReactContext != null) {
                    for (ReactRoot reactRoot : this.mAttachedReactRoots) {
                        if (reactRoot.getUIManagerType() == 2) {
                            detachRootViewFromInstance(reactRoot, this.mCurrentReactContext);
                        }
                    }
                    this.mCurrentReactContext.destroy();
                    this.mCurrentReactContext = null;
                }
            }
        }
        if (this.mInstanceManagerInvalidated && (reactInstanceManagerInspectorTarget = this.mInspectorTarget) != null) {
            reactInstanceManagerInspectorTarget.close();
            this.mInspectorTarget = null;
        }
        this.mHasStartedCreatingInitialContext = false;
        if (!this.mKeepActivity) {
            this.mCurrentActivity = null;
        }
        ResourceDrawableIdHelper.getInstance();
        ResourceDrawableIdHelper.clear();
        this.mHasStartedDestroying = Boolean.FALSE;
        synchronized (this.mHasStartedDestroying) {
            this.mHasStartedDestroying.notifyAll();
        }
        synchronized (this.mPackages) {
            this.mViewManagerNames = null;
        }
        p8.a.b(ReactConstants.TAG, "ReactInstanceManager has been destroyed");
    }

    @Deprecated
    public void detachRootView(ReactRoot reactRoot) {
        ReactContext reactContext;
        UiThreadUtil.assertOnUiThread();
        if (this.mAttachedReactRoots.remove(reactRoot) && (reactContext = this.mCurrentReactContext) != null && reactContext.hasActiveReactInstance()) {
            detachRootViewFromInstance(reactRoot, reactContext);
        }
    }

    public ReactContext getCurrentReactContext() {
        ReactContext reactContext;
        synchronized (this.mReactContextLock) {
            reactContext = this.mCurrentReactContext;
        }
        return reactContext;
    }

    public DevSupportManager getDevSupportManager() {
        return this.mDevSupportManager;
    }

    public String getJsExecutorName() {
        return this.mJavaScriptExecutorFactory.toString();
    }

    public LifecycleState getLifecycleState() {
        return this.mLifecycleState;
    }

    public MemoryPressureRouter getMemoryPressureRouter() {
        return this.mMemoryPressureRouter;
    }

    public List<ViewManager> getOrCreateViewManagers(ReactApplicationContext reactApplicationContext) {
        ReactMarker.logMarker(ReactMarkerConstants.CREATE_VIEW_MANAGERS_START);
        qb.a.c(0L, "createAllViewManagers");
        try {
            if (this.mViewManagers == null) {
                synchronized (this.mPackages) {
                    if (this.mViewManagers == null) {
                        ArrayList arrayList = new ArrayList();
                        for (ReactPackage reactPackage : this.mPackages) {
                            arrayList.addAll(reactPackage.createViewManagers(reactApplicationContext));
                        }
                        this.mViewManagers = arrayList;
                        qb.a.i(0L);
                        ReactMarker.logMarker(ReactMarkerConstants.CREATE_VIEW_MANAGERS_END);
                        return arrayList;
                    }
                }
            }
            List<ViewManager> list = this.mViewManagers;
            qb.a.i(0L);
            ReactMarker.logMarker(ReactMarkerConstants.CREATE_VIEW_MANAGERS_END);
            return list;
        } catch (Throwable th2) {
            qb.a.i(0L);
            ReactMarker.logMarker(ReactMarkerConstants.CREATE_VIEW_MANAGERS_END);
            throw th2;
        }
    }

    public List<ReactPackage> getPackages() {
        return new ArrayList(this.mPackages);
    }

    public Collection<String> getViewManagerNames() {
        Collection<String> collection;
        qb.a.c(0L, "ReactInstanceManager.getViewManagerNames");
        try {
            Collection<String> collection2 = this.mViewManagerNames;
            if (collection2 != null) {
                return collection2;
            }
            synchronized (this.mReactContextLock) {
                ReactApplicationContext reactApplicationContext = (ReactApplicationContext) getCurrentReactContext();
                if (reactApplicationContext != null && reactApplicationContext.hasActiveReactInstance()) {
                    synchronized (this.mPackages) {
                        if (this.mViewManagerNames == null) {
                            HashSet hashSet = new HashSet();
                            for (ReactPackage reactPackage : this.mPackages) {
                                qb.b.a(0L, "ReactInstanceManager.getViewManagerName").b("Package", reactPackage.getClass().getSimpleName()).c();
                                if (reactPackage instanceof ViewManagerOnDemandReactPackage) {
                                    Collection<String> viewManagerNames = ((ViewManagerOnDemandReactPackage) reactPackage).getViewManagerNames(reactApplicationContext);
                                    if (viewManagerNames != null) {
                                        hashSet.addAll(viewManagerNames);
                                    }
                                } else {
                                    p8.a.L(ReactConstants.TAG, "Package %s is not a ViewManagerOnDemandReactPackage, view managers will not be loaded", reactPackage.getClass().getSimpleName());
                                }
                                qb.a.i(0L);
                            }
                            this.mViewManagerNames = hashSet;
                        }
                        collection = this.mViewManagerNames;
                    }
                    return collection;
                }
                p8.a.J(ReactConstants.TAG, "Calling getViewManagerNames without active context");
                return Collections.EMPTY_LIST;
            }
        } finally {
            qb.a.i(0L);
        }
    }

    public void handleCxxError(Exception exc) {
        this.mDevSupportManager.handleException(exc);
    }

    public boolean hasStartedCreatingInitialContext() {
        return this.mHasStartedCreatingInitialContext;
    }

    public void invalidate() {
        p8.a.b(ReactConstants.TAG, "ReactInstanceManager.invalidate()");
        this.mInstanceManagerInvalidated = true;
        destroy();
    }

    public void onActivityResult(Activity activity, int i10, int i11, Intent intent) {
        ReactContext currentReactContext = getCurrentReactContext();
        if (currentReactContext != null) {
            currentReactContext.onActivityResult(activity, i10, i11, intent);
        }
    }

    public void onBackPressed() {
        UiThreadUtil.assertOnUiThread();
        ReactContext reactContext = this.mCurrentReactContext;
        if (reactContext == null) {
            p8.a.J(TAG, "Instance detached from instance manager");
            invokeDefaultOnBackPressed();
            return;
        }
        DeviceEventManagerModule deviceEventManagerModule = (DeviceEventManagerModule) reactContext.getNativeModule(DeviceEventManagerModule.class);
        if (deviceEventManagerModule != null) {
            deviceEventManagerModule.emitHardwareBackPressed();
        }
    }

    public void onConfigurationChanged(Context context, Configuration configuration) {
        AppearanceModule appearanceModule;
        UiThreadUtil.assertOnUiThread();
        ReactContext currentReactContext = getCurrentReactContext();
        if (currentReactContext != null && (appearanceModule = (AppearanceModule) currentReactContext.getNativeModule(AppearanceModule.class)) != null) {
            appearanceModule.onConfigurationChanged(context);
        }
    }

    @Deprecated
    public void onHostDestroy() {
        UiThreadUtil.assertOnUiThread();
        if (this.mUseDeveloperSupport) {
            this.mDevSupportManager.setDevSupportEnabled(false);
        }
        moveToBeforeCreateLifecycleState();
        if (this.mKeepActivity) {
            return;
        }
        this.mCurrentActivity = null;
    }

    @Deprecated
    public void onHostPause() {
        UiThreadUtil.assertOnUiThread();
        this.mDefaultBackButtonImpl = null;
        if (this.mUseDeveloperSupport) {
            this.mDevSupportManager.setDevSupportEnabled(false);
        }
        moveToBeforeResumeLifecycleState();
    }

    public void onHostResume(Activity activity, DefaultHardwareBackBtnHandler defaultHardwareBackBtnHandler) {
        UiThreadUtil.assertOnUiThread();
        this.mDefaultBackButtonImpl = defaultHardwareBackBtnHandler;
        onHostResume(activity);
    }

    public void onNewIntent(Intent intent) {
        DeviceEventManagerModule deviceEventManagerModule;
        UiThreadUtil.assertOnUiThread();
        ReactContext currentReactContext = getCurrentReactContext();
        if (currentReactContext == null) {
            p8.a.J(TAG, "Instance detached from instance manager");
            return;
        }
        String action = intent.getAction();
        Uri data = intent.getData();
        if (data != null && (("android.intent.action.VIEW".equals(action) || "android.nfc.action.NDEF_DISCOVERED".equals(action)) && (deviceEventManagerModule = (DeviceEventManagerModule) currentReactContext.getNativeModule(DeviceEventManagerModule.class)) != null)) {
            deviceEventManagerModule.emitNewIntentReceived(data);
        }
        currentReactContext.onNewIntent(this.mCurrentActivity, intent);
    }

    public void onUserLeaveHint(Activity activity) {
        Activity activity2 = this.mCurrentActivity;
        if (activity2 != null && activity == activity2) {
            UiThreadUtil.assertOnUiThread();
            ReactContext currentReactContext = getCurrentReactContext();
            if (currentReactContext != null) {
                currentReactContext.onUserLeaveHint(activity);
            }
        }
    }

    public void onWindowFocusChange(boolean z10) {
        UiThreadUtil.assertOnUiThread();
        ReactContext currentReactContext = getCurrentReactContext();
        if (currentReactContext != null) {
            currentReactContext.onWindowFocusChange(z10);
        }
    }

    public void recreateReactContextInBackground() {
        db.a.b(this.mHasStartedCreatingInitialContext, "recreateReactContextInBackground should only be called after the initial createReactContextInBackground call.");
        recreateReactContextInBackgroundInner();
    }

    public void removeReactInstanceEventListener(com.facebook.react.ReactInstanceEventListener reactInstanceEventListener) {
        this.mReactInstanceEventListeners.remove(reactInstanceEventListener);
    }

    public synchronized void setUseFallbackBundle(boolean z10) {
        this.mUseFallbackBundle = z10;
    }

    public void showDevOptionsDialog() {
        UiThreadUtil.assertOnUiThread();
        this.mDevSupportManager.showDevOptionsDialog();
    }

    private void recreateReactContextInBackground(JavaScriptExecutorFactory javaScriptExecutorFactory, JSBundleLoader jSBundleLoader) {
        p8.a.b(ReactConstants.TAG, "ReactInstanceManager.recreateReactContextInBackground()");
        UiThreadUtil.assertOnUiThread();
        ReactContextInitParams reactContextInitParams = new ReactContextInitParams(javaScriptExecutorFactory, jSBundleLoader);
        if (this.mCreateReactContextThread == null) {
            runCreateReactContextOnNewThread(reactContextInitParams);
        } else {
            this.mPendingReactContextInitParams = reactContextInitParams;
        }
    }

    public void onHostResume(Activity activity) {
        UiThreadUtil.assertOnUiThread();
        this.mCurrentActivity = activity;
        if (this.mUseDeveloperSupport) {
            if (activity != null) {
                final View decorView = activity.getWindow().getDecorView();
                if (!h0.R(decorView)) {
                    decorView.addOnAttachStateChangeListener(new View.OnAttachStateChangeListener() { // from class: com.facebook.react.ReactInstanceManager.4
                        @Override // android.view.View.OnAttachStateChangeListener
                        public void onViewAttachedToWindow(View view) {
                            decorView.removeOnAttachStateChangeListener(this);
                            ReactInstanceManager.this.mDevSupportManager.setDevSupportEnabled(true);
                        }

                        @Override // android.view.View.OnAttachStateChangeListener
                        public void onViewDetachedFromWindow(View view) {
                        }
                    });
                } else {
                    this.mDevSupportManager.setDevSupportEnabled(true);
                }
            } else if (!this.mRequireActivity) {
                this.mDevSupportManager.setDevSupportEnabled(true);
            }
        }
        moveToResumedLifecycleState(false);
    }

    public void onHostPause(Activity activity) {
        if (this.mRequireActivity) {
            if (this.mCurrentActivity == null) {
                p8.a.m(TAG, "ReactInstanceManager.onHostPause called with null activity");
                for (StackTraceElement stackTraceElement : Thread.currentThread().getStackTrace()) {
                    p8.a.m(TAG, stackTraceElement.toString());
                }
            }
            db.a.a(this.mCurrentActivity != null);
        }
        Activity activity2 = this.mCurrentActivity;
        if (activity2 != null) {
            db.a.b(activity == activity2, "Pausing an activity that is not the current activity, this is incorrect! Current activity: " + this.mCurrentActivity.getClass().getSimpleName() + " Paused activity: " + activity.getClass().getSimpleName());
        }
        onHostPause();
    }

    public void onHostDestroy(Activity activity) {
        if (activity == this.mCurrentActivity) {
            onHostDestroy();
        }
    }
}
