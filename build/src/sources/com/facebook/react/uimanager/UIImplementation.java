package com.facebook.react.uimanager;

import android.os.SystemClock;
import android.view.View;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.common.ReactConstants;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogLevel;
import com.facebook.react.common.annotations.internal.LegacyArchitectureLogger;
import com.facebook.react.common.build.ReactBuildConfig;
import com.facebook.react.modules.i18nmanager.I18nUtil;
import com.facebook.react.uimanager.debug.NotThreadSafeViewHierarchyUpdateDebugListener;
import com.facebook.react.uimanager.events.EventDispatcher;
import com.facebook.yoga.YogaDirection;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class UIImplementation {

    /* renamed from: a  reason: collision with root package name */
    public static final /* synthetic */ int f11232a = 0;
    protected final EventDispatcher mEventDispatcher;
    private long mLastCalculateLayoutTime;
    protected LayoutUpdateListener mLayoutUpdateListener;
    private final int[] mMeasureBuffer;
    private final NativeViewHierarchyOptimizer mNativeViewHierarchyOptimizer;
    private final UIViewOperationQueue mOperationsQueue;
    protected final ReactApplicationContext mReactContext;
    protected final ShadowNodeRegistry mShadowNodeRegistry;
    private final ViewManagerRegistry mViewManagers;
    private volatile boolean mViewOperationsEnabled;
    protected Object uiImplementationThreadLock;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface LayoutUpdateListener {
        void onLayoutUpdated(ReactShadowNode reactShadowNode);
    }

    static {
        LegacyArchitectureLogger.assertLegacyArchitecture("UIImplementation", LegacyArchitectureLogLevel.ERROR);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public UIImplementation(ReactApplicationContext reactApplicationContext, ViewManagerRegistry viewManagerRegistry, EventDispatcher eventDispatcher, int i10) {
        this(reactApplicationContext, viewManagerRegistry, new UIViewOperationQueue(reactApplicationContext, new NativeViewHierarchyManager(viewManagerRegistry), i10), eventDispatcher);
    }

    private void assertNodeDoesNotNeedCustomLayoutForChildren(ReactShadowNode reactShadowNode) {
        ViewManager viewManager = (ViewManager) db.a.c(this.mViewManagers.get(reactShadowNode.getViewClass()));
        if (viewManager instanceof IViewManagerWithChildren) {
            IViewManagerWithChildren iViewManagerWithChildren = (IViewManagerWithChildren) viewManager;
            if (iViewManagerWithChildren != null && iViewManagerWithChildren.needsCustomLayoutForChildren()) {
                throw new IllegalViewOperationException("Trying to measure a view using measureLayout/measureLayoutRelativeToParent relative to an ancestor that requires custom layout for it's children (" + reactShadowNode.getViewClass() + "). Use measure instead.");
            }
            return;
        }
        throw new IllegalViewOperationException("Trying to use view " + reactShadowNode.getViewClass() + " as a parent, but its Manager doesn't extends ViewGroupManager");
    }

    private boolean checkOrAssertViewExists(int i10, String str) {
        if (this.mShadowNodeRegistry.getNode(i10) != null) {
            return true;
        }
        String str2 = "Unable to execute operation " + str + " on view with tag: " + i10 + ", since the view does not exist";
        if (!ReactBuildConfig.DEBUG) {
            p8.a.J(ReactConstants.TAG, str2);
            return false;
        }
        throw new IllegalViewOperationException(str2);
    }

    private void dispatchViewUpdatesIfNeeded() {
        if (this.mOperationsQueue.isEmpty()) {
            dispatchViewUpdates(-1);
        }
    }

    private void measureLayoutRelativeToVerifiedAncestor(ReactShadowNode reactShadowNode, ReactShadowNode reactShadowNode2, int[] iArr) {
        int i10;
        int i11;
        if (reactShadowNode != reactShadowNode2 && !reactShadowNode.isVirtual()) {
            i10 = Math.round(reactShadowNode.getLayoutX());
            i11 = Math.round(reactShadowNode.getLayoutY());
            for (ReactShadowNode parent = reactShadowNode.getParent(); parent != reactShadowNode2; parent = parent.getParent()) {
                db.a.c(parent);
                assertNodeDoesNotNeedCustomLayoutForChildren(parent);
                i10 += Math.round(parent.getLayoutX());
                i11 += Math.round(parent.getLayoutY());
            }
            assertNodeDoesNotNeedCustomLayoutForChildren(reactShadowNode2);
        } else {
            i10 = 0;
            i11 = 0;
        }
        iArr[0] = i10;
        iArr[1] = i11;
        iArr[2] = reactShadowNode.getScreenWidth();
        iArr[3] = reactShadowNode.getScreenHeight();
    }

    private void notifyOnBeforeLayoutRecursive(ReactShadowNode reactShadowNode) {
        if (!reactShadowNode.hasUpdates()) {
            return;
        }
        for (int i10 = 0; i10 < reactShadowNode.getChildCount(); i10++) {
            notifyOnBeforeLayoutRecursive(reactShadowNode.getChildAt(i10));
        }
        reactShadowNode.onBeforeLayout(this.mNativeViewHierarchyOptimizer);
    }

    private void removeShadowNodeRecursive(ReactShadowNode reactShadowNode) {
        NativeViewHierarchyOptimizer.handleRemoveNode(reactShadowNode);
        this.mShadowNodeRegistry.removeNode(reactShadowNode.getReactTag());
        for (int childCount = reactShadowNode.getChildCount() - 1; childCount >= 0; childCount--) {
            removeShadowNodeRecursive(reactShadowNode.getChildAt(childCount));
        }
        reactShadowNode.removeAndDisposeAllChildren();
    }

    public void addUIBlock(UIBlock uIBlock) {
        this.mOperationsQueue.enqueueUIBlock(uIBlock);
    }

    protected void applyUpdatesRecursive(ReactShadowNode reactShadowNode, float f10, float f11, List<ReactShadowNode> list) {
        if (!reactShadowNode.hasUpdates()) {
            return;
        }
        if (reactShadowNode.dispatchUpdatesWillChangeLayout(f10, f11) && reactShadowNode.shouldNotifyOnLayout() && !this.mShadowNodeRegistry.isRootNode(reactShadowNode.getReactTag())) {
            list.add(reactShadowNode);
        }
        Iterable<? extends ReactShadowNode> calculateLayoutOnChildren = reactShadowNode.calculateLayoutOnChildren();
        if (calculateLayoutOnChildren != null) {
            for (ReactShadowNode reactShadowNode2 : calculateLayoutOnChildren) {
                applyUpdatesRecursive(reactShadowNode2, reactShadowNode.getLayoutX() + f10, reactShadowNode.getLayoutY() + f11, list);
            }
        }
        reactShadowNode.dispatchUpdates(f10, f11, this.mOperationsQueue, this.mNativeViewHierarchyOptimizer);
        reactShadowNode.markUpdateSeen();
        this.mNativeViewHierarchyOptimizer.onViewUpdatesCompleted(reactShadowNode);
    }

    protected void calculateRootLayout(ReactShadowNode reactShadowNode) {
        float size;
        qb.b.a(0L, "cssRoot.calculateLayout").a("rootTag", reactShadowNode.getReactTag()).c();
        long uptimeMillis = SystemClock.uptimeMillis();
        try {
            int intValue = reactShadowNode.getWidthMeasureSpec().intValue();
            int intValue2 = reactShadowNode.getHeightMeasureSpec().intValue();
            float f10 = Float.NaN;
            if (View.MeasureSpec.getMode(intValue) == 0) {
                size = Float.NaN;
            } else {
                size = View.MeasureSpec.getSize(intValue);
            }
            if (View.MeasureSpec.getMode(intValue2) != 0) {
                f10 = View.MeasureSpec.getSize(intValue2);
            }
            reactShadowNode.calculateLayout(size, f10);
        } finally {
            qb.a.i(0L);
            this.mLastCalculateLayoutTime = SystemClock.uptimeMillis() - uptimeMillis;
        }
    }

    public void clearJSResponder() {
        this.mOperationsQueue.enqueueClearJSResponder();
    }

    public void configureNextLayoutAnimation(ReadableMap readableMap, Callback callback) {
        this.mOperationsQueue.enqueueConfigureLayoutAnimation(readableMap, callback);
    }

    protected ReactShadowNode createRootShadowNode() {
        ReactShadowNodeImpl reactShadowNodeImpl = new ReactShadowNodeImpl();
        if (I18nUtil.getInstance().isRTL(this.mReactContext)) {
            reactShadowNodeImpl.setLayoutDirection(YogaDirection.RTL);
        }
        reactShadowNodeImpl.setViewClassName("Root");
        return reactShadowNodeImpl;
    }

    /* JADX WARN: Type inference failed for: r2v2, types: [com.facebook.react.uimanager.ReactShadowNode] */
    protected ReactShadowNode createShadowNode(String str) {
        return this.mViewManagers.get(str).createShadowNodeInstance(this.mReactContext);
    }

    public void createView(int i10, String str, int i11, ReadableMap readableMap) {
        ReactStylesDiffMap reactStylesDiffMap;
        if (!this.mViewOperationsEnabled) {
            return;
        }
        synchronized (this.uiImplementationThreadLock) {
            try {
                ReactShadowNode<?> createShadowNode = createShadowNode(str);
                ReactShadowNode<?> node = this.mShadowNodeRegistry.getNode(i11);
                db.a.d(node, "Root node with tag " + i11 + " doesn't exist");
                createShadowNode.setReactTag(i10);
                createShadowNode.setViewClassName(str);
                createShadowNode.setRootTag(node.getReactTag());
                createShadowNode.setThemedContext(node.getThemedContext());
                this.mShadowNodeRegistry.addNode(createShadowNode);
                if (readableMap != null) {
                    reactStylesDiffMap = new ReactStylesDiffMap(readableMap);
                    createShadowNode.updateProperties(reactStylesDiffMap);
                } else {
                    reactStylesDiffMap = null;
                }
                handleCreateView(createShadowNode, i11, reactStylesDiffMap);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    @Deprecated
    public void dispatchViewManagerCommand(int i10, int i11, ReadableArray readableArray) {
        if (checkOrAssertViewExists(i10, "dispatchViewManagerCommand: " + i11)) {
            this.mOperationsQueue.enqueueDispatchCommand(i10, i11, readableArray);
        }
    }

    public void dispatchViewUpdates(int i10) {
        qb.b.a(0L, "UIImplementation.dispatchViewUpdates").a("batchId", i10).c();
        long uptimeMillis = SystemClock.uptimeMillis();
        try {
            updateViewHierarchy();
            this.mNativeViewHierarchyOptimizer.onBatchComplete();
            this.mOperationsQueue.dispatchViewUpdates(i10, uptimeMillis, this.mLastCalculateLayoutTime);
        } finally {
            qb.a.i(0L);
        }
    }

    public void findSubviewIn(int i10, float f10, float f11, Callback callback) {
        this.mOperationsQueue.enqueueFindTargetForTouch(i10, f10, f11, callback);
    }

    public Map<String, Long> getProfiledBatchPerfCounters() {
        return this.mOperationsQueue.getProfiledBatchPerfCounters();
    }

    public int getRootViewNum() {
        return this.mOperationsQueue.getNativeViewHierarchyManager().getRootViewNum();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public UIViewOperationQueue getUIViewOperationQueue() {
        return this.mOperationsQueue;
    }

    protected void handleCreateView(ReactShadowNode reactShadowNode, int i10, ReactStylesDiffMap reactStylesDiffMap) {
        if (!reactShadowNode.isVirtual()) {
            this.mNativeViewHierarchyOptimizer.handleCreateView(reactShadowNode, reactShadowNode.getThemedContext(), reactStylesDiffMap);
        }
    }

    protected void handleUpdateView(ReactShadowNode reactShadowNode, String str, ReactStylesDiffMap reactStylesDiffMap) {
        if (!reactShadowNode.isVirtual()) {
            this.mNativeViewHierarchyOptimizer.handleUpdateView(reactShadowNode, str, reactStylesDiffMap);
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:27:0x004c, code lost:
        if (r27 == null) goto L27;
     */
    /* JADX WARN: Code restructure failed: missing block: B:29:0x0052, code lost:
        if (r11 != r27.size()) goto L27;
     */
    /* JADX WARN: Code restructure failed: missing block: B:32:0x005c, code lost:
        throw new com.facebook.react.uimanager.IllegalViewOperationException("Size of addChildTags != size of addAtIndices!");
     */
    /* JADX WARN: Type inference failed for: r20v0, types: [com.facebook.react.uimanager.ReactShadowNode] */
    /* JADX WARN: Type inference failed for: r4v4, types: [com.facebook.react.uimanager.ReactShadowNode] */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void manageChildren(int r23, com.facebook.react.bridge.ReadableArray r24, com.facebook.react.bridge.ReadableArray r25, com.facebook.react.bridge.ReadableArray r26, com.facebook.react.bridge.ReadableArray r27, com.facebook.react.bridge.ReadableArray r28) {
        /*
            Method dump skipped, instructions count: 370
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.facebook.react.uimanager.UIImplementation.manageChildren(int, com.facebook.react.bridge.ReadableArray, com.facebook.react.bridge.ReadableArray, com.facebook.react.bridge.ReadableArray, com.facebook.react.bridge.ReadableArray, com.facebook.react.bridge.ReadableArray):void");
    }

    public void measure(int i10, Callback callback) {
        if (!this.mViewOperationsEnabled) {
            return;
        }
        this.mOperationsQueue.enqueueMeasure(i10, callback);
    }

    public void measureInWindow(int i10, Callback callback) {
        if (!this.mViewOperationsEnabled) {
            return;
        }
        this.mOperationsQueue.enqueueMeasureInWindow(i10, callback);
    }

    public void measureLayout(int i10, int i11, Callback callback, Callback callback2) {
        if (this.mViewOperationsEnabled) {
            try {
                measureLayout(i10, i11, this.mMeasureBuffer);
                callback2.invoke(Float.valueOf(PixelUtil.toDIPFromPixel(this.mMeasureBuffer[0])), Float.valueOf(PixelUtil.toDIPFromPixel(this.mMeasureBuffer[1])), Float.valueOf(PixelUtil.toDIPFromPixel(this.mMeasureBuffer[2])), Float.valueOf(PixelUtil.toDIPFromPixel(this.mMeasureBuffer[3])));
            } catch (IllegalViewOperationException e10) {
                callback.invoke(e10.getMessage());
            }
        }
    }

    public void measureLayoutRelativeToParent(int i10, Callback callback, Callback callback2) {
        if (this.mViewOperationsEnabled) {
            try {
                measureLayoutRelativeToParent(i10, this.mMeasureBuffer);
                callback2.invoke(Float.valueOf(PixelUtil.toDIPFromPixel(this.mMeasureBuffer[0])), Float.valueOf(PixelUtil.toDIPFromPixel(this.mMeasureBuffer[1])), Float.valueOf(PixelUtil.toDIPFromPixel(this.mMeasureBuffer[2])), Float.valueOf(PixelUtil.toDIPFromPixel(this.mMeasureBuffer[3])));
            } catch (IllegalViewOperationException e10) {
                callback.invoke(e10.getMessage());
            }
        }
    }

    public void onCatalystInstanceDestroyed() {
        this.mViewOperationsEnabled = false;
        this.mViewManagers.invalidate();
    }

    public void onHostDestroy() {
    }

    public void onHostPause() {
        this.mOperationsQueue.pauseFrameCallback();
    }

    public void onHostResume() {
        this.mOperationsQueue.resumeFrameCallback();
    }

    public void prependUIBlock(UIBlock uIBlock) {
        this.mOperationsQueue.prependUIBlock(uIBlock);
    }

    public void profileNextBatch() {
        this.mOperationsQueue.profileNextBatch();
    }

    public <T extends View> void registerRootView(T t10, int i10, ThemedReactContext themedReactContext) {
        synchronized (this.uiImplementationThreadLock) {
            final ReactShadowNode createRootShadowNode = createRootShadowNode();
            createRootShadowNode.setReactTag(i10);
            createRootShadowNode.setThemedContext(themedReactContext);
            themedReactContext.runOnNativeModulesQueueThread(new Runnable() { // from class: com.facebook.react.uimanager.UIImplementation.1
                @Override // java.lang.Runnable
                public void run() {
                    UIImplementation.this.mShadowNodeRegistry.addRootNode(createRootShadowNode);
                }
            });
            this.mOperationsQueue.addRootView(i10, t10);
        }
    }

    public void removeLayoutUpdateListener() {
        this.mLayoutUpdateListener = null;
    }

    public void removeRootShadowNode(int i10) {
        synchronized (this.uiImplementationThreadLock) {
            this.mShadowNodeRegistry.removeRootNode(i10);
        }
    }

    public void removeRootView(int i10) {
        removeRootShadowNode(i10);
        this.mOperationsQueue.enqueueRemoveRootView(i10);
    }

    protected final void removeShadowNode(ReactShadowNode reactShadowNode) {
        removeShadowNodeRecursive(reactShadowNode);
        reactShadowNode.dispose();
    }

    /* JADX WARN: Type inference failed for: r1v1, types: [com.facebook.react.uimanager.ReactShadowNode] */
    public void replaceExistingNonRootView(int i10, int i11) {
        if (!this.mShadowNodeRegistry.isRootNode(i10) && !this.mShadowNodeRegistry.isRootNode(i11)) {
            ReactShadowNode<?> node = this.mShadowNodeRegistry.getNode(i10);
            if (node != null) {
                ?? parent = node.getParent();
                if (parent != 0) {
                    int indexOf = parent.indexOf(node);
                    if (indexOf >= 0) {
                        WritableArray createArray = Arguments.createArray();
                        createArray.pushInt(i11);
                        WritableArray createArray2 = Arguments.createArray();
                        createArray2.pushInt(indexOf);
                        WritableArray createArray3 = Arguments.createArray();
                        createArray3.pushInt(indexOf);
                        manageChildren(parent.getReactTag(), null, null, createArray, createArray2, createArray3);
                        return;
                    }
                    throw new IllegalStateException("Didn't find child tag in parent");
                }
                throw new IllegalViewOperationException("Node is not attached to a parent: " + i10);
            }
            throw new IllegalViewOperationException("Trying to replace unknown view tag: " + i10);
        }
        throw new IllegalViewOperationException("Trying to add or replace a root tag!");
    }

    public int resolveRootTagFromReactTag(int i10) {
        if (this.mShadowNodeRegistry.isRootNode(i10)) {
            return i10;
        }
        ReactShadowNode resolveShadowNode = resolveShadowNode(i10);
        if (resolveShadowNode != null) {
            return resolveShadowNode.getRootTag();
        }
        p8.a.J(ReactConstants.TAG, "Warning : attempted to resolve a non-existent react shadow node. reactTag=" + i10);
        return 0;
    }

    public final ReactShadowNode resolveShadowNode(int i10) {
        return this.mShadowNodeRegistry.getNode(i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final ViewManager resolveViewManager(String str) {
        return this.mViewManagers.getViewManagerIfExists(str);
    }

    public void sendAccessibilityEvent(int i10, int i11) {
        this.mOperationsQueue.enqueueSendAccessibilityEvent(i10, i11);
    }

    public void setChildren(int i10, ReadableArray readableArray) {
        if (!this.mViewOperationsEnabled) {
            return;
        }
        synchronized (this.uiImplementationThreadLock) {
            try {
                ReactShadowNode<?> node = this.mShadowNodeRegistry.getNode(i10);
                for (int i11 = 0; i11 < readableArray.size(); i11++) {
                    ReactShadowNode<?> node2 = this.mShadowNodeRegistry.getNode(readableArray.getInt(i11));
                    if (node2 != null) {
                        node.addChildAt(node2, i11);
                    } else {
                        throw new IllegalViewOperationException("Trying to add unknown view tag: " + readableArray.getInt(i11));
                    }
                }
                this.mNativeViewHierarchyOptimizer.handleSetChildren(node, readableArray);
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public void setJSResponder(int i10, boolean z10) {
        ReactShadowNode<?> node = this.mShadowNodeRegistry.getNode(i10);
        if (node == null) {
            return;
        }
        while (node.getNativeKind() == NativeKind.NONE) {
            node = node.getParent();
        }
        this.mOperationsQueue.enqueueSetJSResponder(node.getReactTag(), i10, z10);
    }

    public void setLayoutAnimationEnabledExperimental(boolean z10) {
        this.mOperationsQueue.enqueueSetLayoutAnimationEnabled(z10);
    }

    public void setLayoutUpdateListener(LayoutUpdateListener layoutUpdateListener) {
        this.mLayoutUpdateListener = layoutUpdateListener;
    }

    public void setViewHierarchyUpdateDebugListener(NotThreadSafeViewHierarchyUpdateDebugListener notThreadSafeViewHierarchyUpdateDebugListener) {
        this.mOperationsQueue.setViewHierarchyUpdateDebugListener(notThreadSafeViewHierarchyUpdateDebugListener);
    }

    public void setViewLocalData(int i10, Object obj) {
        ReactShadowNode<?> node = this.mShadowNodeRegistry.getNode(i10);
        if (node == null) {
            p8.a.J(ReactConstants.TAG, "Attempt to set local data for view with unknown tag: " + i10);
            return;
        }
        node.setLocalData(obj);
        dispatchViewUpdatesIfNeeded();
    }

    public void synchronouslyUpdateViewOnUIThread(int i10, ReactStylesDiffMap reactStylesDiffMap) {
        UiThreadUtil.assertOnUiThread();
        this.mOperationsQueue.getNativeViewHierarchyManager().updateProperties(i10, reactStylesDiffMap);
    }

    public void updateInsetsPadding(int i10, int i11, int i12, int i13, int i14) {
        ReactShadowNode<?> node = this.mShadowNodeRegistry.getNode(i10);
        if (node == null) {
            p8.a.J(ReactConstants.TAG, "Tried to update size of non-existent tag: " + i10);
            return;
        }
        node.setPadding(4, i12);
        node.setPadding(1, i11);
        node.setPadding(5, i14);
        node.setPadding(3, i13);
        dispatchViewUpdatesIfNeeded();
    }

    public void updateNodeSize(int i10, int i11, int i12) {
        ReactShadowNode<?> node = this.mShadowNodeRegistry.getNode(i10);
        if (node == null) {
            p8.a.J(ReactConstants.TAG, "Tried to update size of non-existent tag: " + i10);
            return;
        }
        node.setStyleWidth(i11);
        node.setStyleHeight(i12);
        dispatchViewUpdatesIfNeeded();
    }

    public void updateRootView(int i10, int i11, int i12) {
        ReactShadowNode<?> node = this.mShadowNodeRegistry.getNode(i10);
        if (node == null) {
            p8.a.J(ReactConstants.TAG, "Tried to update non-existent root tag: " + i10);
            return;
        }
        updateRootView(node, i11, i12);
    }

    public void updateView(int i10, String str, ReadableMap readableMap) {
        if (this.mViewOperationsEnabled) {
            if (this.mViewManagers.get(str) != null) {
                ReactShadowNode<?> node = this.mShadowNodeRegistry.getNode(i10);
                if (node != null) {
                    if (readableMap != null) {
                        ReactStylesDiffMap reactStylesDiffMap = new ReactStylesDiffMap(readableMap);
                        node.updateProperties(reactStylesDiffMap);
                        handleUpdateView(node, str, reactStylesDiffMap);
                        return;
                    }
                    return;
                }
                throw new IllegalViewOperationException("Trying to update non-existent view with tag " + i10);
            }
            throw new IllegalViewOperationException("Got unknown view type: " + str);
        }
    }

    protected void updateViewHierarchy() {
        qb.a.c(0L, "UIImplementation.updateViewHierarchy");
        for (int i10 = 0; i10 < this.mShadowNodeRegistry.getRootNodeCount(); i10++) {
            try {
                ReactShadowNode<?> node = this.mShadowNodeRegistry.getNode(this.mShadowNodeRegistry.getRootTag(i10));
                if (node.getWidthMeasureSpec() != null && node.getHeightMeasureSpec() != null) {
                    qb.b.a(0L, "UIImplementation.notifyOnBeforeLayoutRecursive").a("rootTag", node.getReactTag()).c();
                    notifyOnBeforeLayoutRecursive(node);
                    qb.a.i(0L);
                    calculateRootLayout(node);
                    qb.b.a(0L, "UIImplementation.applyUpdatesRecursive").a("rootTag", node.getReactTag()).c();
                    ArrayList arrayList = new ArrayList();
                    applyUpdatesRecursive(node, 0.0f, 0.0f, arrayList);
                    for (ReactShadowNode reactShadowNode : arrayList) {
                        this.mEventDispatcher.dispatchEvent(OnLayoutEvent.obtain(-1, reactShadowNode.getReactTag(), reactShadowNode.getScreenX(), reactShadowNode.getScreenY(), reactShadowNode.getScreenWidth(), reactShadowNode.getScreenHeight()));
                    }
                    qb.a.i(0L);
                    LayoutUpdateListener layoutUpdateListener = this.mLayoutUpdateListener;
                    if (layoutUpdateListener != null) {
                        this.mOperationsQueue.enqueueLayoutUpdateFinished(node, layoutUpdateListener);
                    }
                }
            } catch (Throwable th2) {
                qb.a.i(0L);
                throw th2;
            }
        }
        qb.a.i(0L);
    }

    @Deprecated
    public void viewIsDescendantOf(int i10, int i11, Callback callback) {
        ReactShadowNode<?> node = this.mShadowNodeRegistry.getNode(i10);
        ReactShadowNode<?> node2 = this.mShadowNodeRegistry.getNode(i11);
        if (node != null && node2 != null) {
            callback.invoke(Boolean.valueOf(node.isDescendantOf(node2)));
        } else {
            callback.invoke(Boolean.FALSE);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public UIImplementation(ReactApplicationContext reactApplicationContext, ViewManagerRegistry viewManagerRegistry, UIViewOperationQueue uIViewOperationQueue, EventDispatcher eventDispatcher) {
        this.uiImplementationThreadLock = new Object();
        ShadowNodeRegistry shadowNodeRegistry = new ShadowNodeRegistry();
        this.mShadowNodeRegistry = shadowNodeRegistry;
        this.mMeasureBuffer = new int[4];
        this.mLastCalculateLayoutTime = 0L;
        this.mViewOperationsEnabled = true;
        this.mReactContext = reactApplicationContext;
        this.mViewManagers = viewManagerRegistry;
        this.mOperationsQueue = uIViewOperationQueue;
        this.mNativeViewHierarchyOptimizer = new NativeViewHierarchyOptimizer(uIViewOperationQueue, shadowNodeRegistry);
        this.mEventDispatcher = eventDispatcher;
    }

    public void dispatchViewManagerCommand(int i10, String str, ReadableArray readableArray) {
        if (checkOrAssertViewExists(i10, "dispatchViewManagerCommand: " + str)) {
            this.mOperationsQueue.enqueueDispatchCommand(i10, str, readableArray);
        }
    }

    public void updateRootView(ReactShadowNode reactShadowNode, int i10, int i11) {
        reactShadowNode.setMeasureSpecs(i10, i11);
    }

    private void measureLayout(int i10, int i11, int[] iArr) {
        ReactShadowNode<?> node = this.mShadowNodeRegistry.getNode(i10);
        ReactShadowNode<?> node2 = this.mShadowNodeRegistry.getNode(i11);
        if (node == null || node2 == null) {
            StringBuilder sb2 = new StringBuilder();
            sb2.append("Tag ");
            if (node != null) {
                i10 = i11;
            }
            sb2.append(i10);
            sb2.append(" does not exist");
            throw new IllegalViewOperationException(sb2.toString());
        }
        if (node != node2) {
            for (ReactShadowNode parent = node.getParent(); parent != node2; parent = parent.getParent()) {
                if (parent == null) {
                    throw new IllegalViewOperationException("Tag " + i11 + " is not an ancestor of tag " + i10);
                }
            }
        }
        measureLayoutRelativeToVerifiedAncestor(node, node2, iArr);
    }

    private void measureLayoutRelativeToParent(int i10, int[] iArr) {
        ReactShadowNode<?> node = this.mShadowNodeRegistry.getNode(i10);
        if (node != null) {
            ReactShadowNode parent = node.getParent();
            if (parent != null) {
                measureLayoutRelativeToVerifiedAncestor(node, parent, iArr);
                return;
            }
            throw new IllegalViewOperationException("View with tag " + i10 + " doesn't have a parent!");
        }
        throw new IllegalViewOperationException("No native view for tag " + i10 + " exists!");
    }
}
