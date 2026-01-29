package com.facebook.react.fabric;

import android.annotation.SuppressLint;
import android.content.Context;
import android.graphics.Point;
import android.os.SystemClock;
import android.view.View;
import androidx.annotation.NonNull;
import b2.e;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ColorPropConverter;
import com.facebook.react.bridge.GuardedRunnable;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.NativeArray;
import com.facebook.react.bridge.NativeMap;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactMarker;
import com.facebook.react.bridge.ReactMarkerConstants;
import com.facebook.react.bridge.ReactSoftExceptionLogger;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.UIManager;
import com.facebook.react.bridge.UIManagerListener;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.annotations.UnstableReactNativeAPI;
import com.facebook.react.common.build.ReactBuildConfig;
import com.facebook.react.common.mapbuffer.ReadableMapBuffer;
import com.facebook.react.fabric.DevToolsReactPerfLogger;
import com.facebook.react.fabric.events.EventEmitterWrapper;
import com.facebook.react.fabric.events.FabricEventEmitter;
import com.facebook.react.fabric.internal.interop.InteropUIBlockListener;
import com.facebook.react.fabric.interop.UIBlock;
import com.facebook.react.fabric.interop.UIBlockViewResolver;
import com.facebook.react.fabric.mounting.LayoutMetricsConversions;
import com.facebook.react.fabric.mounting.MountItemDispatcher;
import com.facebook.react.fabric.mounting.MountingManager;
import com.facebook.react.fabric.mounting.SurfaceMountingManager;
import com.facebook.react.fabric.mounting.mountitems.BatchMountItem;
import com.facebook.react.fabric.mounting.mountitems.DispatchCommandMountItem;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.fabric.mounting.mountitems.MountItem;
import com.facebook.react.fabric.mounting.mountitems.MountItemFactory;
import com.facebook.react.internal.featureflags.ReactNativeFeatureFlags;
import com.facebook.react.internal.featureflags.ReactNativeNewArchitectureFeatureFlags;
import com.facebook.react.internal.interop.InteropEventEmitter;
import com.facebook.react.modules.core.ReactChoreographer;
import com.facebook.react.modules.i18nmanager.I18nUtil;
import com.facebook.react.uimanager.GuardedFrameCallback;
import com.facebook.react.uimanager.IllegalViewOperationException;
import com.facebook.react.uimanager.PixelUtil;
import com.facebook.react.uimanager.ReactRoot;
import com.facebook.react.uimanager.ReactRootViewTagGenerator;
import com.facebook.react.uimanager.RootViewUtil;
import com.facebook.react.uimanager.StateWrapper;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.uimanager.ViewManagerPropertyUpdater;
import com.facebook.react.uimanager.ViewManagerRegistry;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.uimanager.events.BatchEventDispatchedListener;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.react.uimanager.events.FabricEventDispatcher;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.facebook.react.uimanager.events.SynchronousEventReceiver;
import com.facebook.react.views.text.PreparedLayout;
import com.facebook.react.views.text.ReactTextViewManagerCallback;
import com.facebook.react.views.text.TextLayoutManager;
import com.facebook.yoga.YogaMeasureMode;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Queue;
import java.util.Set;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.atomic.AtomicReference;
@SuppressLint({"MissingNativeLoadLibrary"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class FabricUIManager implements UIManager, LifecycleEventListener, UIBlockViewResolver, SynchronousEventReceiver {
    private static final DevToolsReactPerfLogger.DevToolsReactPerfLoggerListener FABRIC_PERF_LOGGER = new DevToolsReactPerfLogger.DevToolsReactPerfLoggerListener() { // from class: com.facebook.react.fabric.a
        @Override // com.facebook.react.fabric.DevToolsReactPerfLogger.DevToolsReactPerfLoggerListener
        public final void onFabricCommitEnd(DevToolsReactPerfLogger.FabricCommitPoint fabricCommitPoint) {
            FabricUIManager.a(fabricCommitPoint);
        }
    };
    public static final boolean IS_DEVELOPMENT_ENVIRONMENT = false;
    public static final String TAG = "FabricUIManager";
    private final BatchEventDispatchedListener mBatchEventDispatchedListener;
    private FabricUIManagerBinding mBinding;
    public DevToolsReactPerfLogger mDevToolsReactPerfLogger;
    private final DispatchUIFrameCallback mDispatchUIFrameCallback;
    private final FabricEventDispatcher mEventDispatcher;
    private InteropUIBlockListener mInteropUIBlockListener;
    private final MountItemDispatcher mMountItemDispatcher;
    private final MountingManager.MountItemExecutor mMountItemExecutor;
    private final MountingManager mMountingManager;
    private final ReactApplicationContext mReactApplicationContext;
    private final ViewManagerRegistry mViewManagerRegistry;
    private final CopyOnWriteArrayList<UIManagerListener> mListeners = new CopyOnWriteArrayList<>();
    private boolean mMountNotificationScheduled = false;
    private List<Integer> mSurfaceIdsWithPendingMountNotification = new ArrayList();
    private final Set<SynchronousEvent> mSynchronousEvents = new HashSet();
    private final AtomicReference<Runnable> mScheduledMountRunnable = new AtomicReference<>();
    private volatile boolean mDestroyed = false;
    private boolean mDriveCxxAnimations = false;
    private boolean mDriveCxxNativeAnimated = ReactNativeFeatureFlags.cxxNativeAnimatedEnabled();
    private long mDispatchViewUpdatesTime = 0;
    private long mCommitStartTime = 0;
    private long mLayoutTime = 0;
    private long mFinishTransactionTime = 0;
    private long mFinishTransactionCPPTime = 0;
    private int mCurrentSynchronousCommitNumber = 10000;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class DispatchUIFrameCallback extends GuardedFrameCallback {
        private volatile boolean mIsMountingEnabled;
        private boolean mIsScheduled;
        private boolean mShouldSchedule;

        private void schedule() {
            if (!this.mIsScheduled && this.mShouldSchedule) {
                this.mIsScheduled = true;
                ReactChoreographer.getInstance().postFrameCallback(ReactChoreographer.CallbackType.DISPATCH_UI, this);
            }
        }

        @Override // com.facebook.react.uimanager.GuardedFrameCallback
        public void doFrameGuarded(long j10) {
            this.mIsScheduled = false;
            if (!this.mIsMountingEnabled) {
                p8.a.J(FabricUIManager.TAG, "Not flushing pending UI operations: exception was previously thrown");
            } else if (FabricUIManager.this.mDestroyed) {
                p8.a.J(FabricUIManager.TAG, "Not flushing pending UI operations: FabricUIManager is destroyed");
            } else {
                if ((FabricUIManager.this.mDriveCxxAnimations || FabricUIManager.this.mDriveCxxNativeAnimated) && FabricUIManager.this.mBinding != null) {
                    FabricUIManager.this.mBinding.driveCxxAnimations();
                }
                if (FabricUIManager.this.mBinding != null) {
                    FabricUIManager.this.mBinding.drainPreallocateViewsQueue();
                }
                try {
                    try {
                        FabricUIManager.this.mMountItemDispatcher.dispatchPreMountItems(j10);
                        Runnable runnable = null;
                        if (ReactNativeFeatureFlags.usePullModelOnAndroid()) {
                            runnable = (Runnable) FabricUIManager.this.mScheduledMountRunnable.getAndSet(null);
                        }
                        if (runnable != null) {
                            runnable.run();
                        } else {
                            FabricUIManager.this.mMountItemDispatcher.tryDispatchMountItems();
                        }
                        schedule();
                        FabricUIManager.this.mSynchronousEvents.clear();
                    } catch (Exception e10) {
                        p8.a.n(FabricUIManager.TAG, "Exception thrown when executing UIFrameGuarded", e10);
                        this.mIsMountingEnabled = false;
                        throw e10;
                    }
                } catch (Throwable th2) {
                    schedule();
                    throw th2;
                }
            }
        }

        void pause() {
            ReactChoreographer.getInstance().removeFrameCallback(ReactChoreographer.CallbackType.DISPATCH_UI, this);
            this.mShouldSchedule = false;
            this.mIsScheduled = false;
        }

        void resume() {
            this.mShouldSchedule = true;
            schedule();
        }

        private DispatchUIFrameCallback(ReactContext reactContext) {
            super(reactContext);
            this.mIsMountingEnabled = true;
            this.mShouldSchedule = false;
            this.mIsScheduled = false;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private class MountItemDispatchListener implements MountItemDispatcher.ItemDispatchListener {
        @Override // com.facebook.react.fabric.mounting.MountItemDispatcher.ItemDispatchListener
        public void didDispatchMountItems() {
            Iterator it = FabricUIManager.this.mListeners.iterator();
            while (it.hasNext()) {
                ((UIManagerListener) it.next()).didDispatchMountItems(FabricUIManager.this);
            }
        }

        @Override // com.facebook.react.fabric.mounting.MountItemDispatcher.ItemDispatchListener
        public void didMountItems(List<? extends MountItem> list) {
            Iterator it = FabricUIManager.this.mListeners.iterator();
            while (it.hasNext()) {
                ((UIManagerListener) it.next()).didMountItems(FabricUIManager.this);
            }
            if (list != null && !list.isEmpty()) {
                for (MountItem mountItem : list) {
                    if (mountItem != null && !FabricUIManager.this.mSurfaceIdsWithPendingMountNotification.contains(Integer.valueOf(mountItem.getSurfaceId()))) {
                        FabricUIManager.this.mSurfaceIdsWithPendingMountNotification.add(Integer.valueOf(mountItem.getSurfaceId()));
                    }
                }
                if (!FabricUIManager.this.mMountNotificationScheduled && !FabricUIManager.this.mSurfaceIdsWithPendingMountNotification.isEmpty()) {
                    FabricUIManager.this.mMountNotificationScheduled = true;
                    UiThreadUtil.getUiThreadHandler().postAtFrontOfQueue(new Runnable() { // from class: com.facebook.react.fabric.FabricUIManager.MountItemDispatchListener.1
                        @Override // java.lang.Runnable
                        public void run() {
                            FabricUIManager.this.mMountNotificationScheduled = false;
                            List<Integer> list2 = FabricUIManager.this.mSurfaceIdsWithPendingMountNotification;
                            FabricUIManager.this.mSurfaceIdsWithPendingMountNotification = new ArrayList();
                            FabricUIManagerBinding fabricUIManagerBinding = FabricUIManager.this.mBinding;
                            if (fabricUIManagerBinding != null && !FabricUIManager.this.mDestroyed) {
                                for (Integer num : list2) {
                                    fabricUIManagerBinding.reportMount(num.intValue());
                                }
                            }
                        }
                    });
                }
            }
        }

        @Override // com.facebook.react.fabric.mounting.MountItemDispatcher.ItemDispatchListener
        public void willMountItems(List<? extends MountItem> list) {
            Iterator it = FabricUIManager.this.mListeners.iterator();
            while (it.hasNext()) {
                ((UIManagerListener) it.next()).willMountItems(FabricUIManager.this);
            }
        }

        private MountItemDispatchListener() {
        }
    }

    static {
        FabricSoLoader.staticInit();
    }

    public FabricUIManager(ReactApplicationContext reactApplicationContext, ViewManagerRegistry viewManagerRegistry, BatchEventDispatchedListener batchEventDispatchedListener) {
        MountingManager.MountItemExecutor mountItemExecutor = new MountingManager.MountItemExecutor() { // from class: com.facebook.react.fabric.FabricUIManager.1
            @Override // com.facebook.react.fabric.mounting.MountingManager.MountItemExecutor
            public void executeItems(Queue<MountItem> queue) {
                FabricUIManager.this.mMountItemDispatcher.dispatchMountItems(queue);
            }
        };
        this.mMountItemExecutor = mountItemExecutor;
        this.mDispatchUIFrameCallback = new DispatchUIFrameCallback(reactApplicationContext);
        this.mReactApplicationContext = reactApplicationContext;
        MountingManager mountingManager = new MountingManager(viewManagerRegistry, mountItemExecutor);
        this.mMountingManager = mountingManager;
        this.mMountItemDispatcher = new MountItemDispatcher(mountingManager, new MountItemDispatchListener());
        this.mEventDispatcher = new FabricEventDispatcher(reactApplicationContext, new FabricEventEmitter(this));
        this.mBatchEventDispatchedListener = batchEventDispatchedListener;
        reactApplicationContext.addLifecycleEventListener(this);
        this.mViewManagerRegistry = viewManagerRegistry;
        reactApplicationContext.registerComponentCallbacks(viewManagerRegistry);
    }

    public static /* synthetic */ void a(DevToolsReactPerfLogger.FabricCommitPoint fabricCommitPoint) {
        long commitDuration = fabricCommitPoint.getCommitDuration();
        long layoutDuration = fabricCommitPoint.getLayoutDuration();
        long diffDuration = fabricCommitPoint.getDiffDuration();
        long transactionEndDuration = fabricCommitPoint.getTransactionEndDuration();
        long batchExecutionDuration = fabricCommitPoint.getBatchExecutionDuration();
        LongStreamingStats longStreamingStats = DevToolsReactPerfLogger.streamingCommitStats;
        longStreamingStats.add(commitDuration);
        LongStreamingStats longStreamingStats2 = DevToolsReactPerfLogger.streamingLayoutStats;
        longStreamingStats2.add(layoutDuration);
        LongStreamingStats longStreamingStats3 = DevToolsReactPerfLogger.streamingDiffStats;
        longStreamingStats3.add(diffDuration);
        LongStreamingStats longStreamingStats4 = DevToolsReactPerfLogger.streamingTransactionEndStats;
        longStreamingStats4.add(transactionEndDuration);
        LongStreamingStats longStreamingStats5 = DevToolsReactPerfLogger.streamingBatchExecutionStats;
        longStreamingStats5.add(batchExecutionDuration);
        p8.a.v(TAG, "Statistics of Fabric commit #%d:\n - Total commit time: %d ms. Avg: %.2f. Median: %.2f ms. Max: %d ms.\n - Layout time: %d ms. Avg: %.2f. Median: %.2f ms. Max: %d ms.\n - Diffing time: %d ms. Avg: %.2f. Median: %.2f ms. Max: %d ms.\n - FinishTransaction (Diffing + JNI serialization): %d ms. Avg: %.2f. Median: %.2f ms. Max: %d ms.\n - Mounting: %d ms. Avg: %.2f. Median: %.2f ms. Max: %d ms.\n", Long.valueOf(fabricCommitPoint.getCommitNumber()), Long.valueOf(commitDuration), Double.valueOf(longStreamingStats.getAverage()), Double.valueOf(longStreamingStats.getMedian()), Long.valueOf(longStreamingStats.getMax()), Long.valueOf(layoutDuration), Double.valueOf(longStreamingStats2.getAverage()), Double.valueOf(longStreamingStats2.getMedian()), Long.valueOf(longStreamingStats2.getMax()), Long.valueOf(diffDuration), Double.valueOf(longStreamingStats3.getAverage()), Double.valueOf(longStreamingStats3.getMedian()), Long.valueOf(longStreamingStats3.getMax()), Long.valueOf(transactionEndDuration), Double.valueOf(longStreamingStats4.getAverage()), Double.valueOf(longStreamingStats4.getMedian()), Long.valueOf(longStreamingStats4.getMax()), Long.valueOf(batchExecutionDuration), Double.valueOf(longStreamingStats5.getAverage()), Double.valueOf(longStreamingStats5.getMedian()), Long.valueOf(longStreamingStats5.getMax()));
    }

    private MountItem createIntBufferBatchMountItem(int i10, int[] iArr, Object[] objArr, int i11) {
        if (iArr == null) {
            iArr = new int[0];
        }
        if (objArr == null) {
            objArr = new Object[0];
        }
        return MountItemFactory.createIntBufferBatchMountItem(i10, iArr, objArr, i11);
    }

    private void destroyUnmountedView(int i10, int i11) {
        this.mMountItemDispatcher.addMountItem(MountItemFactory.createDestroyViewMountItem(i10, i11));
    }

    private InteropUIBlockListener getInteropUIBlockListener() {
        if (this.mInteropUIBlockListener == null) {
            InteropUIBlockListener interopUIBlockListener = new InteropUIBlockListener();
            this.mInteropUIBlockListener = interopUIBlockListener;
            addUIManagerEventListener(interopUIBlockListener);
        }
        return this.mInteropUIBlockListener;
    }

    @SuppressLint({"NotInvokedPrivateMethod"})
    private boolean isOnMainThread() {
        return UiThreadUtil.isOnUiThread();
    }

    private NativeArray measureLines(ReadableMapBuffer readableMapBuffer, ReadableMapBuffer readableMapBuffer2, float f10, float f11) {
        ReactTextViewManagerCallback reactTextViewManagerCallback;
        ViewManager<?, ?> viewManager = this.mViewManagerRegistry.get("RCTText");
        ReactApplicationContext reactApplicationContext = this.mReactApplicationContext;
        float pixelFromDIP = PixelUtil.toPixelFromDIP(f10);
        float pixelFromDIP2 = PixelUtil.toPixelFromDIP(f11);
        if (viewManager instanceof ReactTextViewManagerCallback) {
            reactTextViewManagerCallback = (ReactTextViewManagerCallback) viewManager;
        } else {
            reactTextViewManagerCallback = null;
        }
        return (NativeArray) TextLayoutManager.measureLines(reactApplicationContext, readableMapBuffer, readableMapBuffer2, pixelFromDIP, pixelFromDIP2, reactTextViewManagerCallback);
    }

    private void preallocateView(int i10, int i11, String str, Object obj, Object obj2, boolean z10) {
        this.mMountItemDispatcher.addPreAllocateMountItem(MountItemFactory.createPreAllocateViewMountItem(i10, i11, str, (ReadableMap) obj, (StateWrapper) obj2, z10));
    }

    private void scheduleMountItem(MountItem mountItem, int i10, long j10, long j11, long j12, long j13, long j14, long j15, long j16, int i11) {
        long j17;
        boolean z10;
        long uptimeMillis = SystemClock.uptimeMillis();
        boolean z11 = mountItem instanceof BatchMountItem;
        boolean z12 = true;
        if (z11) {
            j17 = uptimeMillis;
            BatchMountItem batchMountItem = (BatchMountItem) mountItem;
            db.a.d(batchMountItem, "BatchMountItem is null");
            z10 = !batchMountItem.isBatchEmpty();
        } else {
            j17 = uptimeMillis;
            if (mountItem == null) {
                z12 = false;
            }
            z10 = z12;
        }
        Iterator<UIManagerListener> it = this.mListeners.iterator();
        while (it.hasNext()) {
            it.next().didScheduleMountItems(this);
            z10 = z10;
        }
        boolean z13 = z10;
        if (z11) {
            this.mCommitStartTime = j10;
            this.mLayoutTime = j14 - j13;
            this.mFinishTransactionCPPTime = j16 - j15;
            this.mFinishTransactionTime = j17 - j15;
            this.mDispatchViewUpdatesTime = SystemClock.uptimeMillis();
        }
        if (z13) {
            db.a.d(mountItem, "MountItem is null");
            this.mMountItemDispatcher.addMountItem(mountItem);
            GuardedRunnable guardedRunnable = new GuardedRunnable(this.mReactApplicationContext) { // from class: com.facebook.react.fabric.FabricUIManager.3
                @Override // com.facebook.react.bridge.GuardedRunnable
                public void runGuarded() {
                    FabricUIManager.this.mMountItemDispatcher.tryDispatchMountItems();
                }
            };
            if (UiThreadUtil.isOnUiThread()) {
                guardedRunnable.run();
            }
        }
        if (z11) {
            ReactMarker.logFabricMarker(ReactMarkerConstants.FABRIC_COMMIT_START, null, i10, j10);
            ReactMarker.logFabricMarker(ReactMarkerConstants.FABRIC_FINISH_TRANSACTION_START, null, i10, j15);
            ReactMarker.logFabricMarker(ReactMarkerConstants.FABRIC_FINISH_TRANSACTION_END, null, i10, j16);
            ReactMarker.logFabricMarker(ReactMarkerConstants.FABRIC_DIFF_START, null, i10, j11);
            ReactMarker.logFabricMarker(ReactMarkerConstants.FABRIC_DIFF_END, null, i10, j12);
            ReactMarker.logFabricMarker(ReactMarkerConstants.FABRIC_LAYOUT_START, null, i10, j13);
            ReactMarker.logFabricMarker(ReactMarkerConstants.FABRIC_LAYOUT_END, null, i10, j14);
            ReactMarker.logFabricMarker(ReactMarkerConstants.FABRIC_LAYOUT_AFFECTED_NODES, null, i10, j14, i11);
            ReactMarker.logFabricMarker(ReactMarkerConstants.FABRIC_COMMIT_END, null, i10);
        }
    }

    @SuppressLint({"NotInvokedPrivateMethod"})
    private void scheduleMountRunnable(Runnable runnable) {
        this.mScheduledMountRunnable.set(runnable);
    }

    @Override // com.facebook.react.bridge.UIManager
    @Deprecated
    public <T extends View> int addRootView(T t10, WritableMap writableMap) {
        String str = TAG;
        ReactSoftExceptionLogger.logSoftException(str, new IllegalViewOperationException("Do not call addRootView in Fabric; it is unsupported. Call startSurface instead."));
        ReactRoot reactRoot = (ReactRoot) t10;
        int rootViewTag = reactRoot.getRootViewTag();
        this.mMountingManager.startSurface(rootViewTag, new ThemedReactContext(this.mReactApplicationContext, t10.getContext(), reactRoot.getSurfaceID(), rootViewTag), t10);
        String jSModuleName = reactRoot.getJSModuleName();
        if (ReactNativeFeatureFlags.enableFabricLogs()) {
            p8.a.d(str, "Starting surface for module: %s and reactTag: %d", jSModuleName, Integer.valueOf(rootViewTag));
        }
        db.a.d(this.mBinding, "Binding in FabricUIManager is null");
        this.mBinding.startSurface(rootViewTag, jSModuleName, (NativeMap) writableMap);
        return rootViewTag;
    }

    public void addUIBlock(UIBlock uIBlock) {
        if (ReactNativeNewArchitectureFeatureFlags.useFabricInterop()) {
            getInteropUIBlockListener().addUIBlock(uIBlock);
        }
    }

    @Override // com.facebook.react.bridge.UIManager
    public void addUIManagerEventListener(UIManagerListener uIManagerListener) {
        this.mListeners.add(uIManagerListener);
    }

    public void attachRootView(SurfaceHandlerBinding surfaceHandlerBinding, View view) {
        this.mMountingManager.attachRootView(surfaceHandlerBinding.getSurfaceId(), view, new ThemedReactContext(this.mReactApplicationContext, view.getContext(), surfaceHandlerBinding.getModuleName(), surfaceHandlerBinding.getSurfaceId()));
        surfaceHandlerBinding.setMountable(true);
    }

    public void clearJSResponder() {
        this.mMountItemDispatcher.addMountItem(new MountItem() { // from class: com.facebook.react.fabric.FabricUIManager.5
            @Override // com.facebook.react.fabric.mounting.mountitems.MountItem
            public void execute(MountingManager mountingManager) {
                mountingManager.clearJSResponder();
            }

            @Override // com.facebook.react.fabric.mounting.mountitems.MountItem
            public int getSurfaceId() {
                return -1;
            }

            public String toString() {
                return "CLEAR_JS_RESPONDER";
            }
        });
    }

    DispatchCommandMountItem createDispatchCommandMountItemForInterop(int i10, int i11, String str, ReadableArray readableArray) {
        try {
            return MountItemFactory.createDispatchCommandMountItem(i10, i11, Integer.parseInt(str), readableArray);
        } catch (NumberFormatException unused) {
            return MountItemFactory.createDispatchCommandMountItem(i10, i11, str, readableArray);
        }
    }

    @Override // com.facebook.react.bridge.UIManager
    @Deprecated
    public void dispatchCommand(int i10, int i11, ReadableArray readableArray) {
        throw new UnsupportedOperationException("dispatchCommand called without surfaceId - Fabric dispatchCommand must be called through Fabric JSI API");
    }

    @UnstableReactNativeAPI
    public void experimental_prefetchResource(String str, int i10, int i11, ReadableMapBuffer readableMapBuffer) {
        this.mMountingManager.experimental_prefetchResource(this.mReactApplicationContext, str, i10, i11, readableMapBuffer);
    }

    public Integer findNextFocusableElement(int i10, int i11, int i12) {
        FabricUIManagerBinding fabricUIManagerBinding = this.mBinding;
        if (fabricUIManagerBinding == null) {
            return null;
        }
        int i13 = 1;
        if (i12 != 1) {
            if (i12 != 2) {
                if (i12 != 17) {
                    if (i12 != 33) {
                        if (i12 != 66) {
                            if (i12 != 130) {
                                return null;
                            }
                            i13 = 0;
                        } else {
                            i13 = 2;
                        }
                    }
                } else {
                    i13 = 3;
                }
            } else {
                i13 = 4;
            }
        } else {
            i13 = 5;
        }
        int findNextFocusableElement = fabricUIManagerBinding.findNextFocusableElement(i10, i11, i13);
        if (findNextFocusableElement == -1) {
            return null;
        }
        return Integer.valueOf(findNextFocusableElement);
    }

    public int getColor(int i10, String[] strArr) {
        ThemedReactContext context = this.mMountingManager.getSurfaceManagerEnforced(i10, "getColor").getContext();
        if (context == null) {
            return 0;
        }
        for (String str : strArr) {
            Integer resolveResourcePath = ColorPropConverter.resolveResourcePath(context, str);
            if (resolveResourcePath != null) {
                return resolveResourcePath.intValue();
            }
        }
        return 0;
    }

    @Override // com.facebook.react.bridge.UIManager
    public EventDispatcher getEventDispatcher() {
        return this.mEventDispatcher;
    }

    @Override // com.facebook.react.bridge.PerformanceCounter
    public Map<String, Long> getPerformanceCounters() {
        HashMap hashMap = new HashMap();
        hashMap.put("CommitStartTime", Long.valueOf(this.mCommitStartTime));
        hashMap.put("LayoutTime", Long.valueOf(this.mLayoutTime));
        hashMap.put("DispatchViewUpdatesTime", Long.valueOf(this.mDispatchViewUpdatesTime));
        hashMap.put("RunStartTime", Long.valueOf(this.mMountItemDispatcher.getRunStartTime()));
        hashMap.put("BatchedExecutionTime", Long.valueOf(this.mMountItemDispatcher.getBatchedExecutionTime()));
        hashMap.put("FinishFabricTransactionTime", Long.valueOf(this.mFinishTransactionTime));
        hashMap.put("FinishFabricTransactionCPPTime", Long.valueOf(this.mFinishTransactionCPPTime));
        return hashMap;
    }

    public int[] getRelativeAncestorList(int i10, int i11) {
        FabricUIManagerBinding fabricUIManagerBinding = this.mBinding;
        if (fabricUIManagerBinding != null) {
            return fabricUIManagerBinding.getRelativeAncestorList(i10, i11);
        }
        return null;
    }

    public boolean getThemeData(int i10, float[] fArr) {
        ThemedReactContext themedReactContext;
        SurfaceMountingManager surfaceManager = this.mMountingManager.getSurfaceManager(i10);
        if (surfaceManager != null) {
            themedReactContext = surfaceManager.getContext();
        } else {
            themedReactContext = null;
        }
        if (themedReactContext == null) {
            p8.a.L(TAG, "Couldn't get context for surfaceId %d in getThemeData", Integer.valueOf(i10));
            return false;
        }
        float[] defaultTextInputPadding = UIManagerHelper.getDefaultTextInputPadding(themedReactContext);
        fArr[0] = defaultTextInputPadding[0];
        fArr[1] = defaultTextInputPadding[1];
        fArr[2] = defaultTextInputPadding[2];
        fArr[3] = defaultTextInputPadding[3];
        return true;
    }

    @Override // com.facebook.react.bridge.UIManager
    public void initialize() {
        this.mEventDispatcher.addBatchEventDispatchedListener(this.mBatchEventDispatchedListener);
        if (ReactNativeFeatureFlags.enableFabricLogs()) {
            DevToolsReactPerfLogger devToolsReactPerfLogger = new DevToolsReactPerfLogger();
            this.mDevToolsReactPerfLogger = devToolsReactPerfLogger;
            devToolsReactPerfLogger.addDevToolsReactPerfLoggerListener(FABRIC_PERF_LOGGER);
            ReactMarker.addFabricListener(this.mDevToolsReactPerfLogger);
        }
        if (ReactNativeNewArchitectureFeatureFlags.useFabricInterop()) {
            this.mReactApplicationContext.internal_registerInteropModule(RCTEventEmitter.class, new InteropEventEmitter(this.mReactApplicationContext));
        }
    }

    @Override // com.facebook.react.bridge.UIManager
    public void invalidate() {
        String str = TAG;
        p8.a.s(str, "FabricUIManager.invalidate");
        DevToolsReactPerfLogger devToolsReactPerfLogger = this.mDevToolsReactPerfLogger;
        if (devToolsReactPerfLogger != null) {
            devToolsReactPerfLogger.removeDevToolsReactPerfLoggerListener(FABRIC_PERF_LOGGER);
            ReactMarker.removeFabricListener(this.mDevToolsReactPerfLogger);
        }
        if (this.mDestroyed) {
            ReactSoftExceptionLogger.logSoftException(str, new IllegalStateException("Cannot double-destroy FabricUIManager"));
            return;
        }
        this.mDestroyed = true;
        this.mEventDispatcher.removeBatchEventDispatchedListener(this.mBatchEventDispatchedListener);
        this.mEventDispatcher.invalidate();
        this.mReactApplicationContext.unregisterComponentCallbacks(this.mViewManagerRegistry);
        this.mViewManagerRegistry.invalidate();
        this.mReactApplicationContext.removeLifecycleEventListener(this);
        onHostPause();
        FabricUIManagerBinding fabricUIManagerBinding = this.mBinding;
        if (fabricUIManagerBinding != null) {
            fabricUIManagerBinding.unregister();
        }
        this.mBinding = null;
        ViewManagerPropertyUpdater.clear();
    }

    @Override // com.facebook.react.bridge.UIManager
    public void markActiveTouchForTag(int i10, int i11) {
        SurfaceMountingManager surfaceManager = this.mMountingManager.getSurfaceManager(i10);
        if (surfaceManager != null) {
            surfaceManager.markActiveTouchForTag(i11);
        }
    }

    @Override // com.facebook.react.bridge.UIManager
    public void markViewAsInTransition(int i10, int i11, boolean z10) {
        SurfaceMountingManager surfaceManager = this.mMountingManager.getSurfaceManager(i10);
        if (surfaceManager != null) {
            surfaceManager.markViewInTransition(i11, z10);
        }
    }

    public long measure(int i10, String str, ReadableMap readableMap, ReadableMap readableMap2, ReadableMap readableMap3, float f10, float f11, float f12, float f13) {
        ReactContext reactContext;
        if (i10 > 0) {
            SurfaceMountingManager surfaceManagerEnforced = this.mMountingManager.getSurfaceManagerEnforced(i10, "measure");
            if (surfaceManagerEnforced.isStopped()) {
                return 0L;
            }
            reactContext = surfaceManagerEnforced.getContext();
            db.a.d(reactContext, "Context in SurfaceMountingManager is null. surfaceId: " + i10);
        } else {
            reactContext = this.mReactApplicationContext;
        }
        return this.mMountingManager.measure(reactContext, str, readableMap, readableMap2, readableMap3, LayoutMetricsConversions.getYogaSize(f10, f11), LayoutMetricsConversions.getYogaMeasureMode(f10, f11), LayoutMetricsConversions.getYogaSize(f12, f13), LayoutMetricsConversions.getYogaMeasureMode(f12, f13), null);
    }

    @UnstableReactNativeAPI
    public float[] measurePreparedLayout(PreparedLayout preparedLayout, float f10, float f11, float f12, float f13) {
        return TextLayoutManager.measurePreparedLayout(preparedLayout, LayoutMetricsConversions.getYogaSize(f10, f11), LayoutMetricsConversions.getYogaMeasureMode(f10, f11), LayoutMetricsConversions.getYogaSize(f12, f13), LayoutMetricsConversions.getYogaMeasureMode(f12, f13));
    }

    @UnstableReactNativeAPI
    public long measureText(int i10, ReadableMapBuffer readableMapBuffer, ReadableMapBuffer readableMapBuffer2, float f10, float f11, float f12, float f13, float[] fArr) {
        Context context;
        ReactTextViewManagerCallback reactTextViewManagerCallback;
        if (i10 > 0) {
            SurfaceMountingManager surfaceManagerEnforced = this.mMountingManager.getSurfaceManagerEnforced(i10, "measureText");
            if (surfaceManagerEnforced.isStopped()) {
                return 0L;
            }
            context = surfaceManagerEnforced.getContext();
            db.a.d(context, "Context in SurfaceMountingManager is null. surfaceId: " + i10);
        } else {
            context = this.mReactApplicationContext;
        }
        Context context2 = context;
        ViewManager<?, ?> viewManager = this.mViewManagerRegistry.get("RCTText");
        float yogaSize = LayoutMetricsConversions.getYogaSize(f10, f11);
        YogaMeasureMode yogaMeasureMode = LayoutMetricsConversions.getYogaMeasureMode(f10, f11);
        float yogaSize2 = LayoutMetricsConversions.getYogaSize(f12, f13);
        YogaMeasureMode yogaMeasureMode2 = LayoutMetricsConversions.getYogaMeasureMode(f12, f13);
        if (viewManager instanceof ReactTextViewManagerCallback) {
            reactTextViewManagerCallback = (ReactTextViewManagerCallback) viewManager;
        } else {
            reactTextViewManagerCallback = null;
        }
        return TextLayoutManager.measureText(context2, readableMapBuffer, readableMapBuffer2, yogaSize, yogaMeasureMode, yogaSize2, yogaMeasureMode2, reactTextViewManagerCallback, fArr);
    }

    public void onAllAnimationsComplete() {
        this.mDriveCxxAnimations = false;
    }

    public void onAnimationStarted() {
        this.mDriveCxxAnimations = true;
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostDestroy() {
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostPause() {
        this.mDispatchUIFrameCallback.pause();
    }

    @Override // com.facebook.react.bridge.LifecycleEventListener
    public void onHostResume() {
        this.mDispatchUIFrameCallback.resume();
    }

    public void onRequestEventBeat() {
        this.mEventDispatcher.dispatchAllEvents();
    }

    @UnstableReactNativeAPI
    public PreparedLayout prepareTextLayout(int i10, ReadableMapBuffer readableMapBuffer, ReadableMapBuffer readableMapBuffer2, float f10, float f11, float f12, float f13) {
        ReactTextViewManagerCallback reactTextViewManagerCallback;
        SurfaceMountingManager surfaceManagerEnforced = this.mMountingManager.getSurfaceManagerEnforced(i10, "prepareTextLayout");
        ViewManager<?, ?> viewManager = this.mViewManagerRegistry.get("RCTText");
        Context context = (Context) e.g(surfaceManagerEnforced.getContext());
        float yogaSize = LayoutMetricsConversions.getYogaSize(f10, f11);
        YogaMeasureMode yogaMeasureMode = LayoutMetricsConversions.getYogaMeasureMode(f10, f11);
        float yogaSize2 = LayoutMetricsConversions.getYogaSize(f12, f13);
        YogaMeasureMode yogaMeasureMode2 = LayoutMetricsConversions.getYogaMeasureMode(f12, f13);
        if (viewManager instanceof ReactTextViewManagerCallback) {
            reactTextViewManagerCallback = (ReactTextViewManagerCallback) viewManager;
        } else {
            reactTextViewManagerCallback = null;
        }
        return TextLayoutManager.createPreparedLayout(context, readableMapBuffer, readableMapBuffer2, yogaSize, yogaMeasureMode, yogaSize2, yogaMeasureMode2, reactTextViewManagerCallback);
    }

    public void prependUIBlock(UIBlock uIBlock) {
        if (ReactNativeNewArchitectureFeatureFlags.useFabricInterop()) {
            getInteropUIBlockListener().prependUIBlock(uIBlock);
        }
    }

    @Override // com.facebook.react.bridge.PerformanceCounter
    public void profileNextBatch() {
    }

    @Override // com.facebook.react.bridge.UIManager
    public void receiveEvent(int i10, String str, WritableMap writableMap) {
        receiveEvent(-1, i10, str, false, writableMap, 2);
    }

    @Override // com.facebook.react.bridge.UIManager
    public void removeUIManagerEventListener(UIManagerListener uIManagerListener) {
        this.mListeners.remove(uIManagerListener);
    }

    @Override // com.facebook.react.bridge.UIManager
    @Deprecated
    public String resolveCustomDirectEventName(String str) {
        if (str == null) {
            return null;
        }
        if (str.startsWith(ViewProps.TOP)) {
            return ViewProps.ON + str.substring(3);
        }
        return str;
    }

    @Override // com.facebook.react.bridge.UIManager, com.facebook.react.fabric.interop.UIBlockViewResolver
    public View resolveView(int i10) {
        SurfaceMountingManager surfaceManagerForView = this.mMountingManager.getSurfaceManagerForView(i10);
        if (surfaceManagerForView == null) {
            return null;
        }
        return surfaceManagerForView.getView(i10);
    }

    @Override // com.facebook.react.bridge.UIManager
    public void sendAccessibilityEvent(int i10, int i11) {
        this.mMountItemDispatcher.addMountItem(MountItemFactory.createSendAccessibilityEventMountItem(-1, i10, i11));
    }

    public void sendAccessibilityEventFromJS(int i10, int i11, String str) {
        int i12;
        if ("focus".equals(str)) {
            i12 = 8;
        } else if ("windowStateChange".equals(str)) {
            i12 = 32;
        } else if ("click".equals(str)) {
            i12 = 1;
        } else if ("viewHoverEnter".equals(str)) {
            i12 = IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        } else {
            throw new IllegalArgumentException("sendAccessibilityEventFromJS: invalid eventType " + str);
        }
        this.mMountItemDispatcher.addMountItem(MountItemFactory.createSendAccessibilityEventMountItem(i10, i11, i12));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void setBinding(FabricUIManagerBinding fabricUIManagerBinding) {
        this.mBinding = fabricUIManagerBinding;
    }

    public void setJSResponder(final int i10, final int i11, final int i12, final boolean z10) {
        this.mMountItemDispatcher.addMountItem(new MountItem() { // from class: com.facebook.react.fabric.FabricUIManager.4
            @Override // com.facebook.react.fabric.mounting.mountitems.MountItem
            public void execute(MountingManager mountingManager) {
                SurfaceMountingManager surfaceManager = mountingManager.getSurfaceManager(i10);
                if (surfaceManager != null) {
                    surfaceManager.setJSResponder(i11, i12, z10);
                    return;
                }
                String str = FabricUIManager.TAG;
                p8.a.m(str, "setJSResponder skipped, surface no longer available [" + i10 + "]");
            }

            @Override // com.facebook.react.fabric.mounting.mountitems.MountItem
            public int getSurfaceId() {
                return i10;
            }

            @SuppressLint({"DefaultLocale"})
            public String toString() {
                return String.format("SET_JS_RESPONDER [%d] [surface:%d]", Integer.valueOf(i11), Integer.valueOf(i10));
            }
        });
    }

    @Override // com.facebook.react.bridge.UIManager
    public <T extends View> int startSurface(T t10, String str, WritableMap writableMap, int i10, int i11) {
        int rootViewTag = ((ReactRoot) t10).getRootViewTag();
        Context context = t10.getContext();
        ThemedReactContext themedReactContext = new ThemedReactContext(this.mReactApplicationContext, context, str, rootViewTag);
        if (ReactNativeFeatureFlags.enableFabricLogs()) {
            p8.a.d(TAG, "Starting surface for module: %s and reactTag: %d", str, Integer.valueOf(rootViewTag));
        }
        this.mMountingManager.startSurface(rootViewTag, themedReactContext, t10);
        Point viewportOffset = UiThreadUtil.isOnUiThread() ? RootViewUtil.getViewportOffset(t10) : new Point(0, 0);
        db.a.d(this.mBinding, "Binding in FabricUIManager is null");
        this.mBinding.startSurfaceWithConstraints(rootViewTag, str, (NativeMap) writableMap, LayoutMetricsConversions.getMinSize(i10), LayoutMetricsConversions.getMaxSize(i10), LayoutMetricsConversions.getMinSize(i11), LayoutMetricsConversions.getMaxSize(i11), viewportOffset.x, viewportOffset.y, I18nUtil.getInstance().isRTL(context), I18nUtil.getInstance().doLeftAndRightSwapInRTL(context));
        return rootViewTag;
    }

    public void stopSurface(SurfaceHandlerBinding surfaceHandlerBinding) {
        if (!surfaceHandlerBinding.isRunning()) {
            ReactSoftExceptionLogger.logSoftException(TAG, new IllegalStateException("Trying to stop surface that hasn't started yet"));
            return;
        }
        this.mMountingManager.stopSurface(surfaceHandlerBinding.getSurfaceId());
        db.a.d(this.mBinding, "Binding in FabricUIManager is null");
        this.mBinding.stopSurfaceWithSurfaceHandler(surfaceHandlerBinding);
    }

    @Override // com.facebook.react.bridge.UIManager
    public void sweepActiveTouchForTag(int i10, int i11) {
        SurfaceMountingManager surfaceManager = this.mMountingManager.getSurfaceManager(i10);
        if (surfaceManager != null) {
            surfaceManager.sweepActiveTouchForTag(i11);
        }
    }

    @Override // com.facebook.react.bridge.UIManager
    public void synchronouslyUpdateViewOnUIThread(final int i10, final ReadableMap readableMap) {
        String str;
        UiThreadUtil.assertOnUiThread();
        int i11 = this.mCurrentSynchronousCommitNumber;
        this.mCurrentSynchronousCommitNumber = i11 + 1;
        MountItem mountItem = new MountItem() { // from class: com.facebook.react.fabric.FabricUIManager.2
            @Override // com.facebook.react.fabric.mounting.mountitems.MountItem
            public void execute(MountingManager mountingManager) {
                try {
                    mountingManager.updateProps(i10, readableMap);
                } catch (Exception unused) {
                }
            }

            @Override // com.facebook.react.fabric.mounting.mountitems.MountItem
            public int getSurfaceId() {
                return -1;
            }

            public String toString() {
                String str2;
                if (FabricUIManager.IS_DEVELOPMENT_ENVIRONMENT) {
                    str2 = readableMap.toHashMap().toString();
                } else {
                    str2 = "<hidden>";
                }
                return String.format("SYNC UPDATE PROPS [%d]: %s", Integer.valueOf(i10), str2);
            }
        };
        if (!this.mMountingManager.getViewExists(i10)) {
            this.mMountItemDispatcher.addMountItem(mountItem);
            return;
        }
        ReactMarker.logFabricMarker(ReactMarkerConstants.FABRIC_UPDATE_UI_MAIN_THREAD_START, null, i11);
        if (ReactNativeFeatureFlags.enableFabricLogs()) {
            String str2 = TAG;
            Integer valueOf = Integer.valueOf(i10);
            if (IS_DEVELOPMENT_ENVIRONMENT) {
                str = readableMap.toHashMap().toString();
            } else {
                str = "<hidden>";
            }
            p8.a.d(str2, "SynchronouslyUpdateViewOnUIThread for tag %d: %s", valueOf, str);
        }
        mountItem.execute(this.mMountingManager);
        ReactMarker.logFabricMarker(ReactMarkerConstants.FABRIC_UPDATE_UI_MAIN_THREAD_END, null, i11);
    }

    @Override // com.facebook.react.bridge.UIManager
    public void updateRootLayoutSpecs(int i10, int i11, int i12, int i13, int i14) {
        boolean z10;
        boolean z11;
        if (ReactNativeFeatureFlags.enableFabricLogs()) {
            p8.a.c(TAG, "Updating Root Layout Specs for [%d]", Integer.valueOf(i10));
        }
        SurfaceMountingManager surfaceManager = this.mMountingManager.getSurfaceManager(i10);
        if (surfaceManager == null) {
            ReactSoftExceptionLogger.logSoftException(TAG, new IllegalViewOperationException("Cannot updateRootLayoutSpecs on surfaceId that does not exist: " + i10));
            return;
        }
        ThemedReactContext context = surfaceManager.getContext();
        if (context != null) {
            boolean isRTL = I18nUtil.getInstance().isRTL(context);
            z11 = I18nUtil.getInstance().doLeftAndRightSwapInRTL(context);
            z10 = isRTL;
        } else {
            z10 = false;
            z11 = false;
        }
        db.a.d(this.mBinding, "Binding in FabricUIManager is null");
        this.mBinding.setConstraints(i10, LayoutMetricsConversions.getMinSize(i11), LayoutMetricsConversions.getMaxSize(i11), LayoutMetricsConversions.getMinSize(i12), LayoutMetricsConversions.getMaxSize(i12), i13, i14, z10, z11);
    }

    @Override // com.facebook.react.bridge.UIManager
    @Deprecated
    public void dispatchCommand(int i10, String str, ReadableArray readableArray) {
        throw new UnsupportedOperationException("dispatchCommand called without surfaceId - Fabric dispatchCommand must be called through Fabric JSI API");
    }

    @Override // com.facebook.react.bridge.UIManager
    public void receiveEvent(int i10, int i11, String str, WritableMap writableMap) {
        receiveEvent(i10, i11, str, false, writableMap, 2);
    }

    @Deprecated
    public void dispatchCommand(int i10, int i11, int i12, ReadableArray readableArray) {
        this.mMountItemDispatcher.addViewCommandMountItem(MountItemFactory.createDispatchCommandMountItem(i10, i11, i12, readableArray));
    }

    public void receiveEvent(int i10, int i11, String str, boolean z10, WritableMap writableMap, int i12) {
        receiveEvent(i10, i11, str, z10, writableMap, i12, false);
    }

    @Override // com.facebook.react.uimanager.events.SynchronousEventReceiver
    public void receiveEvent(int i10, int i11, String str, boolean z10, WritableMap writableMap, int i12, boolean z11) {
        if (ReactBuildConfig.DEBUG && i10 == -1) {
            p8.a.d(TAG, "Emitted event without surfaceId: [%d] %s", Integer.valueOf(i11), str);
        }
        if (this.mDestroyed) {
            p8.a.m(TAG, "Attempted to receiveEvent after destruction");
            return;
        }
        EventEmitterWrapper eventEmitter = this.mMountingManager.getEventEmitter(i10, i11);
        if (eventEmitter == null) {
            if (this.mMountingManager.getViewExists(i11)) {
                this.mMountingManager.enqueuePendingEvent(i10, i11, str, z10, writableMap, i12);
                return;
            }
            String str2 = TAG;
            p8.a.s(str2, "Unable to invoke event: " + str + " for reactTag: " + i11);
        } else if (z11) {
            UiThreadUtil.assertOnUiThread();
            if (this.mSynchronousEvents.add(new SynchronousEvent(i10, i11, str))) {
                eventEmitter.dispatchEventSynchronously(str, writableMap);
            }
        } else if (z10) {
            eventEmitter.dispatchUnique(str, writableMap);
        } else {
            eventEmitter.dispatch(str, writableMap, i12);
        }
    }

    public void dispatchCommand(int i10, int i11, String str, ReadableArray readableArray) {
        if (ReactNativeNewArchitectureFeatureFlags.useFabricInterop()) {
            this.mMountItemDispatcher.addViewCommandMountItem(createDispatchCommandMountItemForInterop(i10, i11, str, readableArray));
        } else {
            this.mMountItemDispatcher.addViewCommandMountItem(MountItemFactory.createDispatchCommandMountItem(i10, i11, str, readableArray));
        }
    }

    @Override // com.facebook.react.bridge.UIManager
    public void stopSurface(int i10) {
        this.mMountingManager.stopSurface(i10);
        db.a.d(this.mBinding, "Binding in FabricUIManager is null");
        this.mBinding.stopSurface(i10);
    }

    public void measure(final int i10, final int i11, final Callback callback) {
        this.mMountItemDispatcher.addMountItem(new MountItem() { // from class: com.facebook.react.fabric.FabricUIManager.6
            @Override // com.facebook.react.fabric.mounting.mountitems.MountItem
            public void execute(@NonNull MountingManager mountingManager) {
                FabricUIManager.this.mMountingManager.measure(i10, i11, callback);
            }

            @Override // com.facebook.react.fabric.mounting.mountitems.MountItem
            public int getSurfaceId() {
                return i10;
            }

            @NonNull
            public String toString() {
                return "MEASURE_VIEW";
            }
        });
    }

    public void startSurface(SurfaceHandlerBinding surfaceHandlerBinding, Context context, View view) {
        int nextRootViewTag;
        if (view instanceof ReactRoot) {
            nextRootViewTag = ((ReactRoot) view).getRootViewTag();
        } else {
            nextRootViewTag = ReactRootViewTagGenerator.getNextRootViewTag();
        }
        this.mMountingManager.startSurface(nextRootViewTag, new ThemedReactContext(this.mReactApplicationContext, context, surfaceHandlerBinding.getModuleName(), nextRootViewTag), view);
        db.a.d(this.mBinding, "Binding in FabricUIManager is null");
        this.mBinding.startSurfaceWithSurfaceHandler(nextRootViewTag, surfaceHandlerBinding, view != null);
    }
}
